using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Api.Management.Controllers;
using Umbraco.Cms.Api.Management.Routing;
using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Models.Blocks;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.Serialization;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Strings;
using Umbraco.Cms.Web.Common.Authorization;
using Umbraco.Community.uTours.Frontend.Enums;
using Umbraco.Community.uTours.Frontend.Models;
using Umbraco.Community.uTours.Frontend.ViewModels;
using Umbraco.Extensions;


namespace Umbraco.Community.uTours.Frontend.Controllers
{
    [VersionedApiBackOfficeRoute("utours")]
    [ApiExplorerSettings(GroupName = "UTours API")]
    [Authorize(Policy = AuthorizationPolicies.BackOfficeAccess)]
    public class UToursManagementApiController : ManagementApiControllerBase
    {
        private readonly IPublishedContentQuery publishedContentQuery;
        private readonly IContentService contentService;
        private readonly IContentTypeService contentTypeService;
        private readonly IJsonSerializer serializer;

        public UToursManagementApiController(IPublishedContentQuery publishedContentQuery,
                                             IContentService contentService,
                                             IContentTypeService contentTypeService,
                                             IJsonSerializer jsonSerializer)
        {
            this.publishedContentQuery = publishedContentQuery ?? throw new ArgumentNullException(nameof(publishedContentQuery));
            this.contentService = contentService;
            this.contentTypeService = contentTypeService;
            this.serializer = jsonSerializer;
        }


        [HttpGet()]
        [ProducesResponseType<IEnumerable<uToursTour>>(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult GetAllTours()
        {
            var container = GetToursContainer();
            if (container == null)
            {
                return OperationStatusResult(UToursOperationStatus.NotFound,
                            builder => NotFound(builder.WithTitle("Operation couldn't be processed")
                                                        .WithDetail("Tours container not found.")
                                                        .Build()));
            }

            var tours = container.Children()
                .Where(x => x.ContentType.Alias == Constants.DocTypeAlias.Tour)
                 .Select(tour =>
                 {
                     var steps = tour.Value<BlockListModel>("steps")?
                         .Where(x => x.Content.ContentType.Alias == Constants.DocTypeAlias.TourStep)
                         .Select(step => new uToursTourStep
                         {
                             Id = step.Content.Key,
                             Title = step.Content.Value<string>("title"),
                             Content = step.Content.Value<IHtmlEncodedString>("content")?.ToHtmlString(),
                             Target = step.Content.Value<string>("target")
                         })
                         .ToList();
                     return new uToursTour
                     {
                         Id = tour.Key,
                         Name = tour.Name,
                         Steps = steps ?? new List<uToursTourStep>()
                     };
                 })
                .ToList();

            return Ok(tours);
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult CreateTour([FromBody] string name)
        {
            //TODO: support different cultures
            var container = GetToursContainer();
            if (container == null)
            {
                return OperationStatusResult(UToursOperationStatus.NotFound,
                            builder => NotFound(builder.WithTitle("Operation couldn't be processed")
                                                        .WithDetail("Tours container not found.")
                                                        .Build()));
            }

            var containerUdi = Udi.Create(Umbraco.Cms.Core.Constants.UdiEntityType.Document, container.Key);

            var tourContent = contentService.CreateAndSave(name, container.Id, Constants.DocTypeAlias.Tour);

            if (tourContent == null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error creating tour.");
            }

            contentService.Publish(tourContent, ["*"]);

            return Ok();
        }

        [HttpPut]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult UpdateTour(uToursTour tour)
        {
            var existingTour = contentService.GetById(tour.Id);
            if (existingTour == null)
            {
                return OperationStatusResult(UToursOperationStatus.NotFound,
                            builder => NotFound(builder.WithTitle("Operation couldn't be processed")
                                                        .WithDetail("Tour not found.")
                                                        .Build()));
            }


            // Retrieve the existing BlockListModel
            var existingSteps = existingTour.GetValue<BlockListModel>("steps") ??
                                    new BlockListModel(new List<BlockListItem>());

            var stepContentType = contentTypeService.Get(Constants.DocTypeAlias.TourStep);

            if (stepContentType == null)
            {
                return NotFound("Tour step content type not found.");
            }


            var layoutItems = new List<BlockListLayoutItem>();
            var contentItems = new List<BlockListElementData>();
            var settingsItems = new List<BlockListElementData>();


            foreach (var step in tour.Steps)
            {
                var contentGuid = step.Id == null ? Guid.NewGuid() : step.Id.Value;

                layoutItems.Add(new BlockListLayoutItem(contentGuid, default(Guid)));

                contentItems.Add(new BlockListElementData(stepContentType.Key, contentGuid)
                {
                    Data = new Dictionary<string, object?>{
                        {"content", step.Content },
                        {"title", step.Title},
                        {"target", step.Target}
                    }
                });
            }

            var blockListData = new BlocklistData(new BlockListLayout(layoutItems.ToArray()),
                                                contentItems.ToArray(),
                                                settingsItems.ToArray());


            var propertyValue = serializer.Serialize(blockListData);
            
            
            existingTour.SetValue("steps", propertyValue);
            existingTour.SetValue("name", tour.Name);

            contentService.Save(existingTour);

            //TODO: support different cultures
            contentService.Publish(existingTour, ["*"]);

            return Ok();
        }

        private IPublishedContent? GetToursContainer()
        {
            var container = publishedContentQuery!.ContentAtRoot().SingleOrDefault(x => x.ContentType.Alias == Constants.DocTypeAlias.ToursContainer);
            return container;
        }
    }
}

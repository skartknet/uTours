using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Api.Management.Controllers;
using Umbraco.Cms.Api.Management.Routing;
using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Models.Blocks;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.Strings;
using Umbraco.Community.uTours.Frontend.Enums;
using Umbraco.Community.uTours.Frontend.ViewModels;
using Umbraco.Extensions;


namespace Umbraco.Community.uTours.Frontend.Controllers
{
    [VersionedApiBackOfficeRoute("utours")]
    [ApiExplorerSettings(GroupName = "UTours API")]
    public class UToursManagementApiController : ManagementApiControllerBase
    {
        private readonly IPublishedContentQuery contentService;

        public UToursManagementApiController(IPublishedContentQuery contentService)
        {
            this.contentService = contentService ?? throw new ArgumentNullException(nameof(contentService));
        }


        [HttpGet()]        
        [ProducesResponseType<IEnumerable<uToursTour>>(StatusCodes.Status200OK)]
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
                .Where(x => x.ContentType.Alias == "uToursTour")
                 .Select(tour =>
                 {
                     var steps = tour.Value<BlockListModel>("steps")?
                         .Where(x => x.Content.ContentType.Alias == "uToursTourStep")
                         .Select(step => new uToursTourStep
                         {
                             Id = step.Content.Value<int>("id"),
                             Title = step.Content.Value<string>("title"),
                             Content = step.Content.Value<IHtmlEncodedString>("content")?.ToHtmlString(),
                             Target = step.Content.Value<string>("target")
                         })
                         .ToList();
                     return new uToursTour
                     {
                         Id = tour.Id,
                         Name = tour.Name,
                         Steps = steps ?? new List<uToursTourStep>()
                     };
                 })
                .ToList();

            return Ok(tours);
        }

        private IPublishedContent? GetToursContainer()
        {
            var container = contentService!.ContentAtRoot().SingleOrDefault(x => x.ContentType.Alias == "uToursToursContainer");
            return container;
        }
    }
}

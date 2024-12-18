using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Mapping;
using Umbraco.Cms.Web.Common.PublishedModels;
using Umbraco.Extensions;

namespace UTours.Core.ViewComponents
{
    public class Tours : ViewComponent
    {
        private readonly IPublishedContentQuery contentQuery;
        private readonly IUmbracoMapper mapper;

        public Tours(IPublishedContentQuery contentQuery, IUmbracoMapper umbracoMapper)
        {
            this.contentQuery = contentQuery;
            this.mapper = umbracoMapper;
        }

        public IViewComponentResult Invoke()
        {
            var toursContainer = contentQuery.ContentAtRoot()
                                             .FirstOrDefault(x => x.ContentType.Alias == UToursToursContainer.ModelTypeAlias)
                                             as UToursToursContainer;

            if (toursContainer == null)
            {
                return Content("No tours container found");
            }

            var tours = toursContainer.ChildrenOfType(UToursTour.ModelTypeAlias)?.Cast<UToursTour>();

            if (tours is null)
            {
                return View();
            }
            else
            {
                var tourViewModel = new TourViewComponentModel();
                tourViewModel.Tours = mapper.MapEnumerable<UToursTour, TourViewModel>(tours, ctx => ctx.Items.Add(nameof(UToursToursContainer.DebugMode), toursContainer.DebugMode));

                return View(tourViewModel);
            }
        }
    }
}

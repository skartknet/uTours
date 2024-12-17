using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core;
using Umbraco.Cms.Web.Common.PublishedModels;
using Umbraco.Extensions;

namespace UTours.Core.ViewComponents
{
    public class Tours : ViewComponent
    {
        private readonly IPublishedContentQuery contentQuery;

        public Tours(IPublishedContentQuery contentQuery)
        {
            this.contentQuery = contentQuery;
        }

        public IViewComponentResult Invoke()
        {
            var toursContainer = contentQuery.ContentAtRoot()
                                             .FirstOrDefault(x => x.ContentType.Alias == UToursToursContainer.ModelTypeAlias);

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
                var tourViewModel = TourViewComponentModel.MapFromPublishedContent(tours);

                return View(tourViewModel);
            }
        }
    }
}

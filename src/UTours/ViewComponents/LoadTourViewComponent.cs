using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Mapping;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Web.Common.PublishedModels;
using Umbraco.Community.UTours.PublishedModels;
using Umbraco.Extensions;

namespace Umbraco.Community.UTours.ViewComponents
{
    public class LoadTourViewComponent : ViewComponent
    {
        private readonly IUmbracoMapper mapper;


        public LoadTourViewComponent(IPublishedContentQuery contentQuery, IUmbracoMapper umbracoMapper)
        {
            mapper = umbracoMapper;
        }

        public IViewComponentResult Invoke(IPublishedContent tour, bool startOnPageLoad = false, string group = null)
        {

            var utourTour = tour as UToursTour;

            if (utourTour is null)
            {
                throw new ArgumentNullException(nameof(tour));
            }

            var debugMode = utourTour.Value<bool>(nameof(UToursToursContainer.DebugMode), fallback: Fallback.ToAncestors);

            var tourViewModel = mapper.Map<UToursTour, TourViewModel>(utourTour, ctx => ctx.Items.Add(nameof(UToursToursContainer.DebugMode), debugMode));

            TempData["startOnPageLoad"] = startOnPageLoad;

            if (group is not null)
            {
                TempData["startOnGroup"] = group;
            }

            return View(tourViewModel);
        }

    }
}

using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Mapping;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Web.Common.PublishedModels;
using Umbraco.Extensions;

namespace Umbraco.Community.UTours.Client.ViewComponents
{
    public class RunTourViewComponent : ViewComponent
    {
        private readonly IPublishedContentQuery contentQuery;
        private readonly IUmbracoMapper mapper;

        public RunTourViewComponent(IPublishedContentQuery contentQuery, IUmbracoMapper umbracoMapper)
        {
            this.contentQuery = contentQuery;
            mapper = umbracoMapper;
        }

        public IViewComponentResult Invoke(IPublishedContent tour)
        {
            var utourTour = tour as UToursTour;

            if (utourTour is null)
            {
                return View();
            }
            else
            {
                var debugMode = tour.Value<bool>(nameof(UToursToursContainer.DebugMode), fallback: Fallback.ToAncestors);

                var tourViewModel = mapper.Map<UToursTour, TourViewModel>(utourTour, ctx => ctx.Items.Add(nameof(UToursToursContainer.DebugMode), debugMode));

                return View(tourViewModel);
            }
        }
    }
}

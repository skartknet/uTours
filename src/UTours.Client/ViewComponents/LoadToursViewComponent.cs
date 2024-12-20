using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Mapping;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Web.Common.PublishedModels;
using Umbraco.Extensions;

namespace Umbraco.Community.UTours.Client.ViewComponents
{
    public class LoadToursViewComponent : ViewComponent
    {
        private readonly IUmbracoMapper mapper;

        private List<TourViewModel> toursList = new List<TourViewModel>();

        public LoadToursViewComponent(IPublishedContentQuery contentQuery, IUmbracoMapper umbracoMapper)
        {            
            mapper = umbracoMapper;
        }



        public IViewComponentResult Invoke(IEnumerable<IPublishedContent> tours)
        {
            if (tours is null)
            {
                throw new ArgumentNullException(nameof(tours));
            }

            foreach (var tour in tours)
            {
                var utourTour = tour as UToursTour;

                if (utourTour is not null)
                {
                    ProcessTour(utourTour);
                }
            }

            return View(toursList);

        }


        private void ProcessTour(UToursTour utourTour)
        {
            var debugMode = utourTour.Value<bool>(nameof(UToursToursContainer.DebugMode), fallback: Fallback.ToAncestors);

            var tourViewModel = mapper.Map<UToursTour, TourViewModel>(utourTour, ctx => ctx.Items.Add(nameof(UToursToursContainer.DebugMode), debugMode));

            if (tourViewModel is not null)
            {
                toursList.Add(tourViewModel);
            }
        }
    }
}

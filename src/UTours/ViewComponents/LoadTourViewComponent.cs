﻿using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core.Models.PublishedContent;

namespace Umbraco.Community.uTours.Web.ViewComponents
{
    public class LoadTourViewComponent : ViewComponent
    {

        public IViewComponentResult Invoke(IPublishedContent tour, bool startOnPageLoad = false)
        {


            if (tour is null)
            {
                throw new ArgumentNullException(nameof(tour));
            }

            var tourViewModel = new TourViewModel(tour);

            TempData["startOnPageLoad"] = startOnPageLoad;
         

            return View(tourViewModel);
        }

    }
}

using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core.Models.PublishedContent;

namespace Umbraco.Community.UTours.ViewComponents
{
    public class RenderDependenciesViewComponent : ViewComponent
    {

        public IViewComponentResult Invoke()
        {

            return View();

        }
    }
}

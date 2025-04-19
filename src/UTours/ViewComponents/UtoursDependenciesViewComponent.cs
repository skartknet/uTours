using Microsoft.AspNetCore.Mvc;

namespace Umbraco.Community.UTours.ViewComponents
{
    public class UtoursDependenciesViewComponent : ViewComponent
    {

        public IViewComponentResult Invoke()
        {

            return View();

        }
    }
}
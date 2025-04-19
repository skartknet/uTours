using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Api.Management.Controllers;
using Umbraco.Cms.Api.Management.Routing;
using Umbraco.Cms.Core;

namespace Umbraco.Community.uTours.Web.Controllers
{
    [VersionedApiBackOfficeRoute("UTours")]
    [ApiExplorerSettings(GroupName = "UTours API")]
    public class UToursManagementApiController : ManagementApiControllerBase
    {
        private readonly IPublishedContentQuery contentService;

        public UToursManagementApiController(IPublishedContentQuery contentService)
        {
            this.contentService = contentService;
        }


        [HttpGet]
        public IActionResult GetAll()
        {
            var items = contentService.ContentAtRoot().Where(x => x.ContentType.Alias == "uToursToursContainer");
            return Ok("Hello from UToursManagementApiController");
        }
    }
}

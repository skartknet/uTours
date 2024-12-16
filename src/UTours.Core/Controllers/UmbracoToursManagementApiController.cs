﻿using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Api.Management.Controllers;
using Umbraco.Cms.Api.Management.Routing;

namespace UTours.Core.Controllers
{
    [VersionedApiBackOfficeRoute("UTours/item")]
    [ApiExplorerSettings(GroupName = "UTours API")]
    public class UToursManagementApiController : ManagementApiControllerBase
    {
        [HttpGet]
        public IActionResult GetTours()
        {
            return Ok("Hello from UToursManagementApiController");
        }
    }
}
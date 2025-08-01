using Umbraco.Cms.Core.Models.Blocks;
using Umbraco.Cms.Core.Serialization;
using Umbraco.Community.uTours.Frontend.Models;
using Umbraco.Community.uTours.Frontend.ViewModels;

namespace Umbraco.Community.uTours.Frontend
{
    public static class ModelsMapper
    {
        public static string? ToBlockListValue(this List<uToursTourStep> steps, IJsonSerializer jsonSerializer, Cms.Core.Services.IContentTypeService contentTypeService)
        {

            var stepContentType = contentTypeService.Get(Constants.DocTypeAlias.TourStep);

            if (stepContentType == null)
            {
                throw new KeyNotFoundException("Tour step content type not found.");
            }

            var layoutItems = new List<BlockListLayoutItem>();
            var contentItems = new List<BlockListElementData>();
            var settingsItems = new List<BlockListElementData>();


            foreach (var step in steps)
            {
                var contentGuid = step.Id == null ? Guid.NewGuid() : step.Id.Value;

                layoutItems.Add(new BlockListLayoutItem(contentGuid, default(Guid)));

                contentItems.Add(new BlockListElementData(stepContentType.Key, contentGuid)
                {
                    Data = new Dictionary<string, object?>{
                        {"content", step.Content },
                        {"title", step.Title},
                        {"target", step.Target}
                    }
                });
            }

            var blockListData = new BlocklistData(new BlockListLayout(layoutItems.ToArray()),
                                                contentItems.ToArray(),
                                                settingsItems.ToArray());


            var propertyValue = jsonSerializer.Serialize(blockListData);

            return propertyValue;
        }
    }
}

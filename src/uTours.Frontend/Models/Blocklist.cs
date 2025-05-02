using System.Text.Json.Serialization;
using Umbraco.Cms.Core.Models.Blocks;
using Umbraco.Cms.Core;


namespace Umbraco.Community.uTours.Frontend.Models
{

    public class BlocklistData 
    {
        public BlocklistData(BlockListLayout layout, BlockListElementData[] contentData, BlockListElementData[] settingsData)
        {
            Layout = layout;
            ContentData = contentData;
            SettingsData = settingsData;
        }

        public BlockListLayout Layout { get; set; }
        public BlockListElementData[] ContentData { get; set; }
        public BlockListElementData[] SettingsData { get; set; }
    }
    public class BlockListLayout 
    {

        public BlockListLayout(BlockListLayoutItem[] items)
        {
            this.Items = items;
        }

        [JsonPropertyName("Umbraco.BlockList")]
        public BlockListLayoutItem[] Items { get; set; }


    }


    public class BlockListElementData
    {
        public BlockListElementData(Guid contentTypeKey, Guid contentKey)
        {
            ContentTypeKey = contentTypeKey;
            Udi = new GuidUdi(Umbraco.Cms.Core.Constants.UdiEntityType.Element, contentKey);;
        }

        [JsonPropertyName("contentTypeKey")]
        public Guid ContentTypeKey { get; }

        [JsonPropertyName("udi")]
        public Udi Udi { get; }

        [JsonExtensionData]
        public Dictionary<string, object?>? Data { get; set; }
    }
}

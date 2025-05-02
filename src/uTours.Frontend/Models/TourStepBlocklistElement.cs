using Umbraco.Cms.Core;

namespace Umbraco.Community.uTours.Frontend.Models
{
    internal class TourStepBlocklistElement
    {
        public Guid ContentTypeKey { get; set; }
        public Udi Udi { get; set; } = Udi.Create("element");
        public string? Content { get; set; }
        public string? Title { get; set; }
        public string? Target { get; set; }
    }
}

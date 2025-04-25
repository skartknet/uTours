using Umbraco.Cms.Core.Strings;

namespace Umbraco.Community.uTours.Frontend.ViewModels
{
    public class uToursTourStep
    {
        public int Id { get; set; }
        public string? Content { get; set; }
        public string? Title { get; set; }

        public string? Target { get; set; }

    }
}

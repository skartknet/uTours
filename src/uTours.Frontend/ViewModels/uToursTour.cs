
namespace Umbraco.Community.uTours.Frontend.ViewModels
{
    public class uToursTour
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public List<uToursTourStep> Steps { get; set; } = new List<uToursTourStep>();
    }
}

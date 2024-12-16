using Umbraco.Cms.Web.Common.PublishedModels;

namespace UTours.Core.ViewComponents
{
    public class TourViewComponentModel
    {
        public IList<TourViewModel> Tours { get; set; } = new List<TourViewModel>();

        public static TourViewComponentModel MapFromPublishedContent(IEnumerable<UmbTour> tours)
        {
            var viewComponentModel = new TourViewComponentModel();
            foreach (var tour in tours)
            {
                var tourViewModel = new TourViewModel();
                foreach (var tourStep in tour.TourSteps!)
                {
                    var stepContent = tourStep.Content as UmbTourStep;

                    tourViewModel.Steps.Add(new TourStepViewModel
                    {
                        //Title = stepContent.Title,
                        Content = stepContent?.Content?.ToString() ?? ""
                    });
                }

                viewComponentModel.Tours.Add(tourViewModel);
            }

            return viewComponentModel;
        }
    }

    public class TourViewModel
    {
        public IList<TourStepViewModel> Steps { get; set; } = new List<TourStepViewModel>();

    }

    public class TourStepViewModel
    {
        public string? Title { get; set; }
        public string Content { get; set; } = "";
        public string? Group { get; set; }

    }
}

using Umbraco.Cms.Web.Common.PublishedModels;

namespace UTours.Core.ViewComponents
{
    public class TourViewComponentModel
    {
        public IList<TourViewModel> Tours { get; set; } = new List<TourViewModel>();

        public static TourViewComponentModel MapFromPublishedContent(IEnumerable<UToursTour> tours)
        {
            var viewComponentModel = new TourViewComponentModel();
            foreach (var tour in tours)
            {
                var tourViewModel = new TourViewModel();

                if (tour.Steps is not null)
                {
                    foreach (var tourStep in tour.Steps)
                    {
                        var stepContent = tourStep.Content as UToursTourStep;

                        tourViewModel.Steps.Add(new TourStepViewModel
                        {
                            //Title = stepContent.Title,
                            Content = stepContent?.Content?.ToString() ?? ""
                        });
                    }
                }

                viewComponentModel.Tours.Add(tourViewModel);
            }

            return viewComponentModel;
        }
    }

    public class TourViewModel
    {
        public bool AutoScroll { get; set; }
        public int AutoScrollOffset { get; set; }
        public bool AutoScrollSmooth { get; set; }
        public bool BackdropAnimate { get; set; }
        public string? BackdropClass { get; set; }
        public string? BackdropColor { get; set; }
        public bool CloseButton { get; set; }
        public bool CompleteOnFinish { get; set; }
        public string? DialogAnimate { get; set; }
        public string? DialogClass { get; set; }
        public int DialogMaxWidth { get; set; }
        public string? DialogPlacement { get; set; }
        public int DialogWidth { get; set; }
        public int DialogX { get; set; }
        public bool ExitOnClickOutside { get; set; }
        public bool ExitOnEscape { get; set; }
        public string? FinishLabel { get; set; }
        public bool HideBackButton { get; set; }
        public bool HideNext { get; set; }
        public bool KeyboardControls { get; set; }
        public string? NextLabel { get; set; }
        public string? PrevLabel { get; set; }
        public string? ProgressBar { get; set; }
        public bool PropagateEvents { get; set; }
        public bool RememberStep { get; set; }
        public bool ShowButtons { get; set; }
        public bool ShowStepDots { get; set; }
        public bool ShowStepProgress { get; set; }
        public string? StepDotsPlacement { get; set; }        
        public string? TargetPadding { get; set; }

        public IList<TourStepViewModel> Steps { get; set; } = new List<TourStepViewModel>();
    }

    public class TourStepViewModel
    {
        public string? Title { get; set; }
        public string Content { get; set; } = "";
        public IEnumerable<string> Group { get; set; } = new List<string>();

    }
}

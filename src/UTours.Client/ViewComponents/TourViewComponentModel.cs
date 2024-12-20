using Umbraco.Cms.Web.Common.PublishedModels;

namespace Umbraco.Community.UTours.Client.ViewComponents
{
    public class TourViewComponentModel
    {
        public IList<TourViewModel> Tours { get; set; } = new List<TourViewModel>();
    }

    public class TourViewModel
    {
        public string ID { get; set; } = "tour";
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
        public int DialogZ { get; set; }
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
        public bool Debug { get; set; }


        public IList<TourGroupViewModel> Groups { get; set; } = new List<TourGroupViewModel>();
        public IList<TourStepViewModel> Steps { get; set; } = new List<TourStepViewModel>();
    }

    public class TourGroupViewModel
    {
        public IList<TourStepViewModel> Steps { get; set; } = new List<TourStepViewModel>();
    }

    public class TourStepViewModel
    {
        public string? Title { get; set; }
        public string Content { get; set; } = "";
        public string? Group { get; set; }
        public string? Target { get; set; }
    }
}

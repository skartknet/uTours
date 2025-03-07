using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Web.Common.PublishedModels;
using Umbraco.Community.uTours.Web;
using Umbraco.Community.uTours.Web.Extensions;
using Umbraco.Extensions;

namespace Umbraco.Community.uTours.Web.ViewComponents
{
    public class TourViewComponentModel
    {
        public IList<TourViewModel> Tours { get; set; } = new List<TourViewModel>();
    }

    public class TourViewModel
    {
        public TourViewModel(IPublishedContent tour)
        {
            ID = tour.Key.ToString();
            AutoScroll = tour.Value<bool>("autoScroll");
            AutoScrollOffset = tour.Value<int>("autoScrollOffset").IfZero(20);
            AutoScrollSmooth = tour.Value<bool>("autoScrollSmooth");
            BackdropAnimate = tour.Value<bool>("backdropAnimate");
            BackdropClass = tour.Value<string>("backdropClass");
            BackdropColor = tour.Value<string>("backdropColor").IfNullOrWhiteSpace("rgba(20, 20, 21, 0.84)");
            CloseButton = tour.Value<bool>("closeButton");
            CompleteOnFinish = tour.Value<bool>("completeOnFinish");
            DialogAnimate = tour.Value<string>("dialogAnimate");
            DialogClass = tour.Value<string>("dialogClass");
            DialogMaxWidth = tour.Value<int>("dialogMaxWidth").IfZero(340);
            DialogPlacement = tour.Value<string>("dialogPlacement");
            DialogWidth = tour.Value<int>("dialogWidth");
            DialogZ = tour.Value<int>("dialogZ").IfZero(999);
            ExitOnClickOutside = tour.Value<bool>("exitOnClickOutside");
            ExitOnEscape = tour.Value<bool>("exitOnEscape");
            FinishLabel = tour.Value<string>("finishLabel").IfNullOrWhiteSpace(Constants.Finish);
            HideBackButton = tour.Value<bool>("hideBackButton");
            HideNext = tour.Value<bool>("hideNext");
            KeyboardControls = tour.Value<bool>("keyboardControls");
            NextLabel = tour.Value<string>("nextLabel").IfNullOrWhiteSpace(Constants.Next);
            PrevLabel = tour.Value<string>("prevLabel").IfNullOrWhiteSpace(Constants.Prev);
            ProgressBar = tour.Value<string>("progressBar");
            PropagateEvents = tour.Value<bool>("propagateEvents");
            RememberStep = tour.Value<bool>("rememberStep");
            ShowButtons = tour.Value<bool>("showButtons");
            ShowStepDots = tour.Value<bool>("showStepDots");
            ShowStepProgress = tour.Value<bool>("showStepProgress");
            StepDotsPlacement = tour.Value<string>("stepDotsPlacement").IfNullOrWhiteSpace(Constants.DefaultStepDotsPlacement);
            TargetPadding = tour.Value<int>("targetPadding").IfZero(10);

            OnAfterExit = tour.Value<string>("onAfterExit");
            OnAfterStepChange = tour.Value<string>("onAfterStepChange");
            OnBeforeExit = tour.Value<string>("onBeforeExit");
            OnBeforeStepChange = tour.Value<string>("onBeforeStepChange");
            OnFinish = tour.Value<string>("onFinish");

            Debug = tour.Value<bool>("debugMode", fallback: Fallback.ToAncestors);

            var steps = tour.Value<IEnumerable<IPublishedElement>>("steps");

            if (steps is not null)
            {
                foreach (var step in steps.Where(s => s.ContentType.Alias.Equals("uToursTourStep")))
                {
                    var viewModel = new TourStepViewModel(step);

                    if (viewModel is not null)
                    {
                        Steps.Add(viewModel);
                    }

                }

                //foreach (var group in steps.Where(s => s.ContentType.Alias.Equals(UToursTourGroup.ModelTypeAlias)))
                //{
                //    var groupContentSteps = group.Value<>("steps");
                //    if (groupContent.Steps is not null)
                //    {
                //        var groupID = "";
                //        if (string.IsNullOrWhiteSpace(groupContent.GroupName))
                //        {
                //            groupID = groupContent.Key.ToString();
                //        }
                //        else
                //        {
                //            groupID = groupContent.GroupName;
                //        }


                //        foreach (var step in groupContent.Steps)
                //        {
                //            var viewModel = new TourStepViewModel(step.Content);
                //            viewModel.Group = groupID;

                //            Steps.Add(viewModel);
                //        }

                //    }
                //}


            }
        }


        #region Properties
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
        public int TargetPadding { get; set; }

        #endregion

        #region Events

        public string? OnFinish { get; set; }
        public string? OnBeforeExit { get; set; }
        public string? OnAfterExit { get; set; }
        public string? OnBeforeStepChange { get; set; }
        public string? OnAfterStepChange { get; set; }


        #endregion

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
        public TourStepViewModel(IPublishedElement publishedElement)
        {
            Title = publishedElement.Value<string>("title");
            Content = publishedElement.Value<string>("content") ?? "";
            Group = publishedElement.Value<string>("group");
            Target = publishedElement.Value<string>("target");
        }


        public string? Title { get; set; }
        public string Content { get; set; } = "";
        public string? Group { get; set; }
        public string? Target { get; set; }
    }
}

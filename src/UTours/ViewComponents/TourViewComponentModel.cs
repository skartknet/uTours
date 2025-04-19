using Umbraco.Cms.Core.Models.Blocks;
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


            var overrideEvents = tour.Value<bool>("overrideEvents");
            var overrideSettings = tour.Value<bool>("overrideSettings");
            var toursContainer = null as IPublishedContent;

            if (!overrideEvents || !overrideSettings)
            {
                toursContainer = tour.AncestorOrSelf("uToursToursContainer");
            }

            if (overrideSettings)
            {
                MapSettings(tour);
            }
            else
            {
                MapSettings(toursContainer!);
            }

            if (overrideEvents)
            {
                MapEvents(tour);
            }
            else
            {
                MapEvents(toursContainer!);
            }

            Debug = tour.Value<bool>("debugMode");

            var steps = tour.Value<BlockListModel>("steps");

            if (steps is not null)
            {
                foreach (var step in steps.Where(s => s.Content.ContentType.Alias.Equals("uToursTourStep")))
                {
                    var viewModel = new TourStepViewModel(step.Content);

                    if (viewModel is not null)
                    {
                        Steps.Add(viewModel);
                    }

                }

                foreach (var group in steps.Where(s => s.Content.ContentType.Alias.Equals("uToursTourGroup")))
                {
                    var groupContentSteps = group.Content.Value<BlockListModel>("steps");
                    if (groupContentSteps is not null)
                    {
                        var groupID = "";

                        if (string.IsNullOrWhiteSpace(group.Content.Value<string>("groupName")))
                        {
                            groupID = group.Content.Key.ToString();
                        }
                        else
                        {
                            groupID = group.Content.Value<string>("groupName");
                        }


                        foreach (var step in groupContentSteps)
                        {
                            var viewModel = new TourStepViewModel(step.Content);
                            viewModel.Group = groupID;

                            Steps.Add(viewModel);
                        }

                    }
                }


            }
        }

        private void MapEvents(IPublishedContent settings)
        {
            OnAfterExit = settings.Value<string>("onAfterExit");
            OnAfterStepChange = settings.Value<string>("onAfterStepChange");
            OnBeforeExit = settings.Value<string>("onBeforeExit");
            OnBeforeStepChange = settings.Value<string>("onBeforeStepChange");
            OnFinish = settings.Value<string>("onFinish");
        }

        private void MapSettings(IPublishedContent settings)
        {
            AutoScroll = settings.Value<bool>("autoScroll");
            AutoScrollOffset = settings.Value<int>("autoScrollOffset").IfZero(20);
            AutoScrollSmooth = settings.Value<bool>("autoScrollSmooth");
            BackdropAnimate = settings.Value<bool>("backdropAnimate");
            BackdropClass = settings.Value<string>("backdropClass");
            BackdropColor = settings.Value<string>("backdropColor").IfNullOrWhiteSpace("rgba(20, 20, 21, 0.84)");
            CloseButton = settings.Value<bool>("closeButton");
            CompleteOnFinish = settings.Value<bool>("completeOnFinish");
            DialogAnimate = settings.Value<string>("dialogAnimate");
            DialogClass = settings.Value<string>("dialogClass");
            DialogMaxWidth = settings.Value<int>("dialogMaxWidth").IfZero(340);
            DialogPlacement = settings.Value<string>("dialogPlacement");
            DialogWidth = settings.Value<int>("dialogWidth");
            DialogZ = settings.Value<int>("dialogZ").IfZero(999);
            ExitOnClickOutside = settings.Value<bool>("exitOnClickOutside");
            ExitOnEscape = settings.Value<bool>("exitOnEscape");
            FinishLabel = settings.Value<string>("finishLabel").IfNullOrWhiteSpace(Constants.Finish);
            HideBackButton = settings.Value<bool>("hideBackButton");
            HideNext = settings.Value<bool>("hideNext");
            KeyboardControls = settings.Value<bool>("keyboardControls");
            NextLabel = settings.Value<string>("nextLabel").IfNullOrWhiteSpace(Constants.Next);
            PrevLabel = settings.Value<string>("prevLabel").IfNullOrWhiteSpace(Constants.Prev);
            ProgressBar = settings.Value<string>("progressBar");
            PropagateEvents = settings.Value<bool>("propagateEvents");
            RememberStep = settings.Value<bool>("rememberStep");
            ShowButtons = settings.Value<bool>("showButtons");
            ShowStepDots = settings.Value<bool>("showStepDots");
            ShowStepProgress = settings.Value<bool>("showStepProgress");
            StepDotsPlacement = settings.Value<string>("stepDotsPlacement").IfNullOrWhiteSpace(Constants.DefaultStepDotsPlacement);
            TargetPadding = settings.Value<int>("targetPadding").IfZero(10);
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
            Title = publishedElement.Value<string>("title").IsNullOrWhiteSpace() ? null : publishedElement.Value<string>("title");
            Content = publishedElement.Value<string>("content") ?? "";
            Group = publishedElement.Value<string>("group").IsNullOrWhiteSpace() ? null : publishedElement.Value<string>("group");
            Target = publishedElement.Value<string>("target").IsNullOrWhiteSpace() ? null : publishedElement.Value<string>("target");
        }


        public string? Title { get; set; }
        public string Content { get; set; } = "";
        public string? Group { get; set; }
        public string? Target { get; set; }
    }
}

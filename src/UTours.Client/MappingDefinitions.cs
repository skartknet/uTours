using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Cms.Core.Mapping;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Web.Common.PublishedModels;
using Umbraco.Extensions;
using UTours.Client;
using UTours.Core.Extensions;
using UTours.Core.ViewComponents;

namespace UTours.Core
{
    public class MappingsComposer : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            builder.WithCollectionBuilder<MapDefinitionCollectionBuilder>()
                .Add<TourMappingDefinitions>();
        }
    }

    public class TourMappingDefinitions : IMapDefinition
    {
        
        public void DefineMaps(IUmbracoMapper mapper)
        {
            mapper.Define<UToursTour, TourViewModel>((source, context) => new TourViewModel(), Map);
        }

        // Default values are the same as in TourGuideJS. TODO: when possible we need to set these values in code for the backoffice.
        // Umbraco V15 doesn't have EditorModel notifications yet.
        private void Map(UToursTour source, TourViewModel target, MapperContext context)
        {
            target.AutoScroll = source.AutoScroll;
            target.AutoScrollSmooth = source.AutoScrollSmooth;
            target.AutoScrollOffset = source.AutoScrollOffset.IfZero(20);
            target.BackdropAnimate = source.BackdropAnimate;
            target.BackdropClass = source.BackdropClass;
            target.BackdropColor = source.BackdropColor;
            target.CloseButton = source.CloseButton;
            target.CompleteOnFinish = source.CompleteOnFinish;
            target.DialogAnimate = source.DialogAnimate;
            target.DialogClass = source.DialogClass;
            target.DialogMaxWidth = source.DialogMaxWidth.IfZero(340);
            target.DialogPlacement = source.DialogPlacement;
            target.DialogWidth = source.DialogWidth;
            target.DialogZ = source.DialogZ.IfZero(999);
            target.ExitOnClickOutside = source.ExitOnClickOutside;
            target.ExitOnEscape = source.ExitOnEscape;
            target.FinishLabel = source.FinishLabel.IfNullOrWhiteSpace(Constants.Finish);
            target.HideBackButton = source.HideBackButton;
            target.HideNext = source.HideNext;
            target.KeyboardControls = source.KeyboardControls;
            target.NextLabel = source.NextLabel.IfNullOrWhiteSpace(Constants.Next);
            target.PrevLabel = source.PrevLabel.IfNullOrWhiteSpace(Constants.Prev);
            target.ProgressBar = source.ProgressBar;
            target.PropagateEvents = source.PropagateEvents;
            target.RememberStep = source.RememberStep;
            target.ShowButtons = source.ShowButtons;
            target.ShowStepDots = source.ShowStepDots;
            target.ShowStepProgress = source.ShowStepProgress;
            target.StepDotsPlacement = source.StepDotsPlacement.IfNullOrWhiteSpace(Constants.DefaultStepDotsPlacement);
            target.TargetPadding = source.TargetPadding;


            var debugMode = context.Items[nameof(UToursToursContainer.DebugMode)];
            if (debugMode is not null)
            {
                target.Debug = (bool)debugMode;
            }


            if (source.Steps is not null)
            {
                target.Steps = source.Steps.Select(x =>
                {
                    var content = (UToursTourStep)x.Content;
                    var model = new TourStepViewModel();

                    model.Group = content.Group ?? Enumerable.Empty<string>();
                    model.Title = content.Title;
                    model.Content = content.Content?.ToString() ?? "";

                    return model;

                }).ToList();
            }
        }
    }
}

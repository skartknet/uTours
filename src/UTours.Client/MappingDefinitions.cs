using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Cms.Core.Mapping;
using Umbraco.Cms.Core.Models.Blocks;
using Umbraco.Cms.Web.Common.PublishedModels;
using Umbraco.Community.UTours.Client.ViewComponents;
using Umbraco.Extensions;
using UTours.Core.Extensions;

namespace Umbraco.Community.UTours.Client
{
    public class MappingsComposer : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            builder.WithCollectionBuilder<MapDefinitionCollectionBuilder>()
                .Add<TourMappingDefinitions>()
                .Add<TourStepMappingDefinition>();
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
            target.ID = source.Id.ToString();
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
                foreach (var step in source.Steps.Where(s => s.Content.ContentType.Alias.Equals(UToursTourStep.ModelTypeAlias)))
                {
                    var viewModel = context.Map<TourStepViewModel>(step);

                    if (viewModel is not null)
                    {
                        target.Steps.Add(viewModel);
                    }

                }

                foreach (var group in source.Steps.Where(s => s.Content.ContentType.Alias.Equals(UToursStepsGroup.ModelTypeAlias)))
                {
                    var groupContent = (UToursStepsGroup)group.Content;
                    if (groupContent.Steps is not null)
                    {
                        if (string.IsNullOrWhiteSpace(groupContent.GroupName))
                        {
                            context.Items.Add("groupID", groupContent.Key.ToString());
                        }
                        else
                        {
                            context.Items.Add("groupID", groupContent.GroupName);
                        }


                        foreach (var step in groupContent.Steps)
                        {
                            var viewModel = context.Map<TourStepViewModel>(step);

                            if (viewModel is not null)
                            {
                                target.Steps.Add(viewModel);
                            }

                        }

                    }
                }


            }
        }
    }

    public class TourStepMappingDefinition : IMapDefinition
    {
        public void DefineMaps(IUmbracoMapper mapper)
        {
            mapper.Define<BlockListItem<UToursTourStep>, TourStepViewModel>((source, context) => new TourStepViewModel(), Map);
        }

        private void Map(BlockListItem<UToursTourStep> source, TourStepViewModel target, MapperContext context)
        {
            var stepContent = source.Content;

            if (context.Items.TryGetValue("groupID", out object? value))
            {
                var groupID = value as String;
                target.Group = $"{groupID}";
            }

            target.Title = stepContent.Title;
            target.Content = stepContent.Content?.ToString() ?? "";
            target.Target = stepContent.Target.IfNullOrWhiteSpace(default);
        }
    }
}

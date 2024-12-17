using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Cms.Core.Mapping;
using Umbraco.Cms.Web.Common.PublishedModels;
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

        private void Map(UToursTour source, TourViewModel target, MapperContext context)
        {
            target.AutoScroll = source.AutoScroll;
            target.AutoScrollOffset = source.AutoScrollOffset;
            target.AutoScrollSmooth = source.AutoScrollSmooth;
            target.BackdropAnimate = source.BackdropAnimate;
            target.BackdropClass = source.BackdropClass;
            target.BackdropColor = source.BackdropColor;
            target.CloseButton = source.CloseButton;
            target.CompleteOnFinish = source.CompleteOnFinish;
            target.DialogAnimate = source.DialogAnimate;
            target.DialogClass = source.DialogClass;
            target.DialogMaxWidth = source.DialogMaxWidth;
            target.DialogPlacement = source.DialogPlacement;
            target.DialogWidth = source.DialogWidth;
            target.DialogX = source.DialogX;
            target.ExitOnClickOutside = source.ExitOnClickOutside;
            target.ExitOnEscape = source.ExitOnEscape;
            target.FinishLabel = source.FinishLabel;
            target.HideBackButton = source.HideBackButton;
            target.HideNext = source.HideNext;
            target.KeyboardControls = source.KeyboardControls;
            target.NextLabel = source.NextLabel;
            target.PrevLabel = source.PrevLabel;

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

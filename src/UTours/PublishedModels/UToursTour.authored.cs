using System;
using System.Linq.Expressions;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PublishedCache;
using Umbraco.Cms.Infrastructure.ModelsBuilder;
using Umbraco.Cms.Core;
using Umbraco.Extensions;

namespace Umbraco.Community.UTours.PublishedModels
{
    /// <summary>[uTours] Tour</summary>
    [PublishedModel("uToursTour")]
    public partial class UToursTour : PublishedContentModel
    {
        // helpers
#pragma warning disable 0109 // new is redundant
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        public new const string ModelTypeAlias = "uToursTour";
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        public new const PublishedItemType ModelItemType = PublishedItemType.Content;
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [return: System.Diagnostics.CodeAnalysis.MaybeNull]
        public new static IPublishedContentType GetModelContentType(IPublishedContentTypeCache contentTypeCache)
            => PublishedModelUtility.GetModelContentType(contentTypeCache, ModelItemType, ModelTypeAlias);
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [return: System.Diagnostics.CodeAnalysis.MaybeNull]
        public static IPublishedPropertyType GetModelPropertyType<TValue>(IPublishedContentTypeCache contentTypeCache, Expression<Func<UToursTour, TValue>> selector)
            => PublishedModelUtility.GetModelPropertyType(GetModelContentType(contentTypeCache), selector);
#pragma warning restore 0109

        private IPublishedValueFallback _publishedValueFallback;

        // ctor
        public UToursTour(IPublishedContent content, IPublishedValueFallback publishedValueFallback)
            : base(content, publishedValueFallback)
        {
            _publishedValueFallback = publishedValueFallback;
        }

        // properties

        ///<summary>
        /// Auto Scroll: Auto scroll browser window to the target element.
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [ImplementPropertyType("autoScroll")]
        public virtual bool AutoScroll => this.Value<bool>(_publishedValueFallback, "autoScroll");

        ///<summary>
        /// Auto Scroll Offset: When auto scrolling to an element, set the surrounding margin that should be scrolled into view. Defined in pixels.
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [ImplementPropertyType("autoScrollOffset")]
        public virtual int AutoScrollOffset => this.Value<int>(_publishedValueFallback, "autoScrollOffset");

        ///<summary>
        /// Auto Scroll Smooth: Auto scroll browser window to the target element.
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [ImplementPropertyType("autoScrollSmooth")]
        public virtual bool AutoScrollSmooth => this.Value<bool>(_publishedValueFallback, "autoScrollSmooth");

        ///<summary>
        /// Backdrop Animate: Apply CSS transition class on backdrop to enable smooth resizing and repositioning on step change.
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [ImplementPropertyType("backdropAnimate")]
        public virtual bool BackdropAnimate => this.Value<bool>(_publishedValueFallback, "backdropAnimate");

        ///<summary>
        /// Backdrop Class: Add a custom CSS class to the backdrop element.
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [System.Diagnostics.CodeAnalysis.MaybeNull]
        [ImplementPropertyType("backdropClass")]
        public virtual string BackdropClass => this.Value<string>(_publishedValueFallback, "backdropClass");

        ///<summary>
        /// Backdrop Color: Use a custom color for the tour backdrop.
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [System.Diagnostics.CodeAnalysis.MaybeNull]
        [ImplementPropertyType("backdropColor")]
        public virtual string BackdropColor => this.Value<string>(_publishedValueFallback, "backdropColor");

        ///<summary>
        /// Show Close Button: Display the close button in the top-right corner of the tour dialog.
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [ImplementPropertyType("closeButton")]
        public virtual bool CloseButton => this.Value<bool>(_publishedValueFallback, "closeButton");

        ///<summary>
        /// Complete on Finish: Use TourGuide JS' in-built handler for detecting when a user has completed a tour using localStorage.
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [ImplementPropertyType("completeOnFinish")]
        public virtual bool CompleteOnFinish => this.Value<bool>(_publishedValueFallback, "completeOnFinish");

        ///<summary>
        /// Dialog Animate: Apply CSS transition class on the tour guide element to enable smooth resizing and repositioning on step change.
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [System.Diagnostics.CodeAnalysis.MaybeNull]
        [ImplementPropertyType("dialogAnimate")]
        public virtual string DialogAnimate => this.Value<string>(_publishedValueFallback, "dialogAnimate");

        ///<summary>
        /// Dialog Class: Add a custom CSS class to the tour dialog element.
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [System.Diagnostics.CodeAnalysis.MaybeNull]
        [ImplementPropertyType("dialogClass")]
        public virtual string DialogClass => this.Value<string>(_publishedValueFallback, "dialogClass");

        ///<summary>
        /// Dialog Max. Width: Maximum width for the tour guide dialog.
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [ImplementPropertyType("dialogMaxWidth")]
        public virtual int DialogMaxWidth => this.Value<int>(_publishedValueFallback, "dialogMaxWidth");

        ///<summary>
        /// Dialog Placement: Floating ui placement for the tour guide dialog.
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [System.Diagnostics.CodeAnalysis.MaybeNull]
        [ImplementPropertyType("dialogPlacement")]
        public virtual string DialogPlacement => this.Value<string>(_publishedValueFallback, "dialogPlacement");

        ///<summary>
        /// Dialog Width: Set a strict width for the dialog in px. Recommended if loading images in the content to maintain precise positioning.
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [ImplementPropertyType("dialogWidth")]
        public virtual int DialogWidth => this.Value<int>(_publishedValueFallback, "dialogWidth");

        ///<summary>
        /// Dialog Z: CSS z-index property of the tour dialog element. Defaults to 999.
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [ImplementPropertyType("dialogZ")]
        public virtual int DialogZ => this.Value<int>(_publishedValueFallback, "dialogZ");

        ///<summary>
        /// Exit On Click Outside: Exit the tour on when a user clicks outside the tour.
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [ImplementPropertyType("exitOnClickOutside")]
        public virtual bool ExitOnClickOutside => this.Value<bool>(_publishedValueFallback, "exitOnClickOutside");

        ///<summary>
        /// Exit on Escape: Exit the tour on escape key press. Can be used in conjunction with keyboardControls.
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [ImplementPropertyType("exitOnEscape")]
        public virtual bool ExitOnEscape => this.Value<bool>(_publishedValueFallback, "exitOnEscape");

        ///<summary>
        /// Finish Label: Caption for the finish button displayed on the last tour guide step. If empty, defaults to 'Finish'
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [System.Diagnostics.CodeAnalysis.MaybeNull]
        [ImplementPropertyType("finishLabel")]
        public virtual string FinishLabel => this.Value<string>(_publishedValueFallback, "finishLabel");

        ///<summary>
        /// Hide Back Button
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [ImplementPropertyType("hideBackButton")]
        public virtual bool HideBackButton => this.Value<bool>(_publishedValueFallback, "hideBackButton");

        ///<summary>
        /// Hide Next Button
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [ImplementPropertyType("hideNext")]
        public virtual bool HideNext => this.Value<bool>(_publishedValueFallback, "hideNext");

        ///<summary>
        /// Keyboard Controls: Support keyboard controls for forwards & backwards arrows as well as escape key.
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [ImplementPropertyType("keyboardControls")]
        public virtual bool KeyboardControls => this.Value<bool>(_publishedValueFallback, "keyboardControls");

        ///<summary>
        /// Next Label: Caption for the next button. If empty, defaults to 'Next'
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [System.Diagnostics.CodeAnalysis.MaybeNull]
        [ImplementPropertyType("nextLabel")]
        public virtual string NextLabel => this.Value<string>(_publishedValueFallback, "nextLabel");

        ///<summary>
        /// onAfterExit
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [System.Diagnostics.CodeAnalysis.MaybeNull]
        [ImplementPropertyType("onAfterExit")]
        public virtual string OnAfterExit => this.Value<string>(_publishedValueFallback, "onAfterExit");

        ///<summary>
        /// onAfterStepChange
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [System.Diagnostics.CodeAnalysis.MaybeNull]
        [ImplementPropertyType("onAfterStepChange")]
        public virtual string OnAfterStepChange => this.Value<string>(_publishedValueFallback, "onAfterStepChange");

        ///<summary>
        /// onBeforeExit
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [System.Diagnostics.CodeAnalysis.MaybeNull]
        [ImplementPropertyType("onBeforeExit")]
        public virtual string OnBeforeExit => this.Value<string>(_publishedValueFallback, "onBeforeExit");

        ///<summary>
        /// onBeforeStepChange
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [System.Diagnostics.CodeAnalysis.MaybeNull]
        [ImplementPropertyType("onBeforeStepChange")]
        public virtual string OnBeforeStepChange => this.Value<string>(_publishedValueFallback, "onBeforeStepChange");

        ///<summary>
        /// onFinish
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [System.Diagnostics.CodeAnalysis.MaybeNull]
        [ImplementPropertyType("onFinish")]
        public virtual string OnFinish => this.Value<string>(_publishedValueFallback, "onFinish");

        ///<summary>
        /// Prev. Label: Caption for the back button. If empty, defaults to 'Prev'
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [System.Diagnostics.CodeAnalysis.MaybeNull]
        [ImplementPropertyType("prevLabel")]
        public virtual string PrevLabel => this.Value<string>(_publishedValueFallback, "prevLabel");

        ///<summary>
        /// Progress Bar: Show progress bar under dialog header - pass a colour string to enable
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [System.Diagnostics.CodeAnalysis.MaybeNull]
        [ImplementPropertyType("progressBar")]
        public virtual string ProgressBar => this.Value<string>(_publishedValueFallback, "progressBar");

        ///<summary>
        /// Propagate Events: Allow the user to click elements within the target highlight area.
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [ImplementPropertyType("propagateEvents")]
        public virtual bool PropagateEvents => this.Value<bool>(_publishedValueFallback, "propagateEvents");

        ///<summary>
        /// Remember Step: Continue the tour from last active step when re-opening.
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [ImplementPropertyType("rememberStep")]
        public virtual bool RememberStep => this.Value<bool>(_publishedValueFallback, "rememberStep");

        ///<summary>
        /// Show Buttons: Display the next and prev buttons. Can be used in conjunction with hideNext & hidePrev.
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [ImplementPropertyType("showButtons")]
        public virtual bool ShowButtons => this.Value<bool>(_publishedValueFallback, "showButtons");

        ///<summary>
        /// Show Step Dots: Show the tour progress marker dots.
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [ImplementPropertyType("showStepDots")]
        public virtual bool ShowStepDots => this.Value<bool>(_publishedValueFallback, "showStepDots");

        ///<summary>
        /// Show Step Progress: Show `1/5` human-readable step progress in the tour dialog footer.
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [ImplementPropertyType("showStepProgress")]
        public virtual bool ShowStepProgress => this.Value<bool>(_publishedValueFallback, "showStepProgress");

        ///<summary>
        /// Step Dots Placement: Whether to output the step dots in the tour dialog body or centered in the footer. Defaults to 'footer'
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [System.Diagnostics.CodeAnalysis.MaybeNull]
        [ImplementPropertyType("stepDotsPlacement")]
        public virtual string StepDotsPlacement => this.Value<string>(_publishedValueFallback, "stepDotsPlacement");

        ///<summary>
        /// Tour Steps: You can add steps directly to the Tour or create Groups to group them together.
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [System.Diagnostics.CodeAnalysis.MaybeNull]
        [ImplementPropertyType("steps")]
        public virtual Cms.Core.Models.Blocks.BlockListModel Steps => this.Value<Cms.Core.Models.Blocks.BlockListModel>(_publishedValueFallback, "steps");

        ///<summary>
        /// Target Padding: The space around the highlighted step element in pixels.
        ///</summary>
        [System.CodeDom.Compiler.GeneratedCode("Umbraco.ModelsBuilder.Embedded", "15.2.1+649cfca")]
        [ImplementPropertyType("targetPadding")]
        public virtual int TargetPadding => this.Value<int>(_publishedValueFallback, "targetPadding");
    }
}

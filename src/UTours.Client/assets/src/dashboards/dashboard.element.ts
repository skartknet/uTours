import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { LitElement, html, css, customElement, property } from "@umbraco-cms/backoffice/external/lit";

@customElement('UTours-dashboard')
export class UToursDashboard extends UmbElementMixin(LitElement) {

    constructor() {
        super();
    }

    @property()
    title = 'UTours dashboard'

    render() {
        return html`
            <uui-box headline="${this.title}">
                dashboard content goes here
            </uui-box>
        `
    }

    static styles = css`
        :host {
            display: block;
            padding: 20px;
        }
    `
}


export default UToursDashboard;

declare global {
    interface HtmlElementTagNameMap {
        'UTours-dashboard': UToursDashboard
    }
}
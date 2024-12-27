import { UmbElementMixin as b } from "@umbraco-cms/backoffice/element-api";
import { LitElement as i, html as n, css as c, property as m, customElement as d } from "@umbraco-cms/backoffice/external/lit";
var h = Object.defineProperty, f = Object.getOwnPropertyDescriptor, u = (p, t, s, o) => {
  for (var r = o > 1 ? void 0 : o ? f(t, s) : t, a = p.length - 1, l; a >= 0; a--)
    (l = p[a]) && (r = (o ? l(t, s, r) : l(r)) || r);
  return o && r && h(t, s, r), r;
};
let e = class extends b(i) {
  constructor() {
    super(), this.title = "UmbracoTours dashboard";
  }
  render() {
    return n`
            <uui-box headline="${this.title}">
                dashboard content goes here
            </uui-box>
        `;
  }
};
e.styles = c`
        :host {
            display: block;
            padding: 20px;
        }
    `;
u([
  m()
], e.prototype, "title", 2);
e = u([
  d("umbracotours-dashboard")
], e);
const _ = e;
export {
  e as UmbracoToursDashboard,
  _ as default
};
//# sourceMappingURL=dashboard.element-CH3kwbFV.js.map

var Cu = (e) => {
  throw TypeError(e);
};
var Gn = (e, t, i) => t.has(e) || Cu("Cannot " + i);
var p = (e, t, i) => (Gn(e, t, "read from private field"), i ? i.call(e) : t.get(e)), E = (e, t, i) => t.has(e) ? Cu("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), m = (e, t, i, o) => (Gn(e, t, "write to private field"), o ? o.call(e, i) : t.set(e, i), i), $t = (e, t, i) => (Gn(e, t, "access private method"), i);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fs = globalThis, Il = fs.ShadowRoot && (fs.ShadyCSS === void 0 || fs.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ul = Symbol(), Eu = /* @__PURE__ */ new WeakMap();
let Gc = class {
  constructor(t, i, o) {
    if (this._$cssResult$ = !0, o !== Ul) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = i;
  }
  get styleSheet() {
    let t = this.o;
    const i = this.t;
    if (Il && t === void 0) {
      const o = i !== void 0 && i.length === 1;
      o && (t = Eu.get(i)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), o && Eu.set(i, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const ii = (e) => new Gc(typeof e == "string" ? e : e + "", void 0, Ul), b = (e, ...t) => {
  const i = e.length === 1 ? e[0] : t.reduce((o, r, s) => o + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(r) + e[s + 1], e[0]);
  return new Gc(i, e, Ul);
}, fp = (e, t) => {
  if (Il) e.adoptedStyleSheets = t.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet);
  else for (const i of t) {
    const o = document.createElement("style"), r = fs.litNonce;
    r !== void 0 && o.setAttribute("nonce", r), o.textContent = i.cssText, e.appendChild(o);
  }
}, Pu = Il ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let i = "";
  for (const o of t.cssRules) i += o.cssText;
  return ii(i);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: vp, defineProperty: bp, getOwnPropertyDescriptor: gp, getOwnPropertyNames: mp, getOwnPropertySymbols: _p, getPrototypeOf: yp } = Object, Ve = globalThis, Su = Ve.trustedTypes, wp = Su ? Su.emptyScript : "", qn = Ve.reactiveElementPolyfillSupport, lo = (e, t) => e, Ds = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? wp : null;
      break;
    case Object:
    case Array:
      e = e == null ? e : JSON.stringify(e);
  }
  return e;
}, fromAttribute(e, t) {
  let i = e;
  switch (t) {
    case Boolean:
      i = e !== null;
      break;
    case Number:
      i = e === null ? null : Number(e);
      break;
    case Object:
    case Array:
      try {
        i = JSON.parse(e);
      } catch {
        i = null;
      }
  }
  return i;
} }, zl = (e, t) => !vp(e, t), Au = { attribute: !0, type: String, converter: Ds, reflect: !1, useDefault: !1, hasChanged: zl };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), Ve.litPropertyMetadata ?? (Ve.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Vi = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, i = Au) {
    if (i.state && (i.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((i = Object.create(i)).wrapped = !0), this.elementProperties.set(t, i), !i.noAccessor) {
      const o = Symbol(), r = this.getPropertyDescriptor(t, o, i);
      r !== void 0 && bp(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, i, o) {
    const { get: r, set: s } = gp(this.prototype, t) ?? { get() {
      return this[i];
    }, set(n) {
      this[i] = n;
    } };
    return { get: r, set(n) {
      const a = r == null ? void 0 : r.call(this);
      s == null || s.call(this, n), this.requestUpdate(t, a, o);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Au;
  }
  static _$Ei() {
    if (this.hasOwnProperty(lo("elementProperties"))) return;
    const t = yp(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(lo("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(lo("properties"))) {
      const i = this.properties, o = [...mp(i), ..._p(i)];
      for (const r of o) this.createProperty(r, i[r]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const i = litPropertyMetadata.get(t);
      if (i !== void 0) for (const [o, r] of i) this.elementProperties.set(o, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [i, o] of this.elementProperties) {
      const r = this._$Eu(i, o);
      r !== void 0 && this._$Eh.set(r, i);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const i = [];
    if (Array.isArray(t)) {
      const o = new Set(t.flat(1 / 0).reverse());
      for (const r of o) i.unshift(Pu(r));
    } else t !== void 0 && i.push(Pu(t));
    return i;
  }
  static _$Eu(t, i) {
    const o = i.attribute;
    return o === !1 ? void 0 : typeof o == "string" ? o : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((i) => this.enableUpdating = i), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((i) => i(this));
  }
  addController(t) {
    var i;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((i = t.hostConnected) == null || i.call(t));
  }
  removeController(t) {
    var i;
    (i = this._$EO) == null || i.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), i = this.constructor.elementProperties;
    for (const o of i.keys()) this.hasOwnProperty(o) && (t.set(o, this[o]), delete this[o]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return fp(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((i) => {
      var o;
      return (o = i.hostConnected) == null ? void 0 : o.call(i);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((i) => {
      var o;
      return (o = i.hostDisconnected) == null ? void 0 : o.call(i);
    });
  }
  attributeChangedCallback(t, i, o) {
    this._$AK(t, o);
  }
  _$ET(t, i) {
    var s;
    const o = this.constructor.elementProperties.get(t), r = this.constructor._$Eu(t, o);
    if (r !== void 0 && o.reflect === !0) {
      const n = (((s = o.converter) == null ? void 0 : s.toAttribute) !== void 0 ? o.converter : Ds).toAttribute(i, o.type);
      this._$Em = t, n == null ? this.removeAttribute(r) : this.setAttribute(r, n), this._$Em = null;
    }
  }
  _$AK(t, i) {
    var s, n;
    const o = this.constructor, r = o._$Eh.get(t);
    if (r !== void 0 && this._$Em !== r) {
      const a = o.getPropertyOptions(r), u = typeof a.converter == "function" ? { fromAttribute: a.converter } : ((s = a.converter) == null ? void 0 : s.fromAttribute) !== void 0 ? a.converter : Ds;
      this._$Em = r;
      const h = u.fromAttribute(i, a.type);
      this[r] = h ?? ((n = this._$Ej) == null ? void 0 : n.get(r)) ?? h, this._$Em = null;
    }
  }
  requestUpdate(t, i, o) {
    var r;
    if (t !== void 0) {
      const s = this.constructor, n = this[t];
      if (o ?? (o = s.getPropertyOptions(t)), !((o.hasChanged ?? zl)(n, i) || o.useDefault && o.reflect && n === ((r = this._$Ej) == null ? void 0 : r.get(t)) && !this.hasAttribute(s._$Eu(t, o)))) return;
      this.C(t, i, o);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, i, { useDefault: o, reflect: r, wrapped: s }, n) {
    o && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, n ?? i ?? this[t]), s !== !0 || n !== void 0) || (this._$AL.has(t) || (this.hasUpdated || o || (i = void 0), this._$AL.set(t, i)), r === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (i) {
      Promise.reject(i);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var o;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [s, n] of this._$Ep) this[s] = n;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [s, n] of r) {
        const { wrapped: a } = n, u = this[s];
        a !== !0 || this._$AL.has(s) || u === void 0 || this.C(s, void 0, n, u);
      }
    }
    let t = !1;
    const i = this._$AL;
    try {
      t = this.shouldUpdate(i), t ? (this.willUpdate(i), (o = this._$EO) == null || o.forEach((r) => {
        var s;
        return (s = r.hostUpdate) == null ? void 0 : s.call(r);
      }), this.update(i)) : this._$EM();
    } catch (r) {
      throw t = !1, this._$EM(), r;
    }
    t && this._$AE(i);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var i;
    (i = this._$EO) == null || i.forEach((o) => {
      var r;
      return (r = o.hostUpdated) == null ? void 0 : r.call(o);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((i) => this._$ET(i, this[i]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
Vi.elementStyles = [], Vi.shadowRootOptions = { mode: "open" }, Vi[lo("elementProperties")] = /* @__PURE__ */ new Map(), Vi[lo("finalized")] = /* @__PURE__ */ new Map(), qn == null || qn({ ReactiveElement: Vi }), (Ve.reactiveElementVersions ?? (Ve.reactiveElementVersions = [])).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const uo = globalThis, Ls = uo.trustedTypes, Ou = Ls ? Ls.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, qc = "$lit$", Le = `lit$${Math.random().toFixed(9).slice(2)}$`, Kc = "?" + Le, xp = `<${Kc}>`, Pi = document, xo = () => Pi.createComment(""), $o = (e) => e === null || typeof e != "object" && typeof e != "function", Ml = Array.isArray, $p = (e) => Ml(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", Kn = `[ 	
\f\r]`, qr = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Iu = /-->/g, Uu = />/g, ui = RegExp(`>|${Kn}(?:([^\\s"'>=/]+)(${Kn}*=${Kn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), zu = /'/g, Mu = /"/g, Yc = /^(?:script|style|textarea|title)$/i, Xc = (e) => (t, ...i) => ({ _$litType$: e, strings: t, values: i }), c = Xc(1), y = Xc(2), bt = Symbol.for("lit-noChange"), S = Symbol.for("lit-nothing"), Tu = /* @__PURE__ */ new WeakMap(), gi = Pi.createTreeWalker(Pi, 129);
function Zc(e, t) {
  if (!Ml(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ou !== void 0 ? Ou.createHTML(t) : t;
}
const kp = (e, t) => {
  const i = e.length - 1, o = [];
  let r, s = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = qr;
  for (let a = 0; a < i; a++) {
    const u = e[a];
    let h, f, d = -1, x = 0;
    for (; x < u.length && (n.lastIndex = x, f = n.exec(u), f !== null); ) x = n.lastIndex, n === qr ? f[1] === "!--" ? n = Iu : f[1] !== void 0 ? n = Uu : f[2] !== void 0 ? (Yc.test(f[2]) && (r = RegExp("</" + f[2], "g")), n = ui) : f[3] !== void 0 && (n = ui) : n === ui ? f[0] === ">" ? (n = r ?? qr, d = -1) : f[1] === void 0 ? d = -2 : (d = n.lastIndex - f[2].length, h = f[1], n = f[3] === void 0 ? ui : f[3] === '"' ? Mu : zu) : n === Mu || n === zu ? n = ui : n === Iu || n === Uu ? n = qr : (n = ui, r = void 0);
    const v = n === ui && e[a + 1].startsWith("/>") ? " " : "";
    s += n === qr ? u + xp : d >= 0 ? (o.push(h), u.slice(0, d) + qc + u.slice(d) + Le + v) : u + Le + (d === -2 ? a : v);
  }
  return [Zc(e, s + (e[i] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), o];
};
let xa = class Jc {
  constructor({ strings: t, _$litType$: i }, o) {
    let r;
    this.parts = [];
    let s = 0, n = 0;
    const a = t.length - 1, u = this.parts, [h, f] = kp(t, i);
    if (this.el = Jc.createElement(h, o), gi.currentNode = this.el.content, i === 2 || i === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (r = gi.nextNode()) !== null && u.length < a; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) for (const d of r.getAttributeNames()) if (d.endsWith(qc)) {
          const x = f[n++], v = r.getAttribute(d).split(Le), $ = /([.?@])?(.*)/.exec(x);
          u.push({ type: 1, index: s, name: $[2], strings: v, ctor: $[1] === "." ? Ep : $[1] === "?" ? Pp : $[1] === "@" ? Sp : En }), r.removeAttribute(d);
        } else d.startsWith(Le) && (u.push({ type: 6, index: s }), r.removeAttribute(d));
        if (Yc.test(r.tagName)) {
          const d = r.textContent.split(Le), x = d.length - 1;
          if (x > 0) {
            r.textContent = Ls ? Ls.emptyScript : "";
            for (let v = 0; v < x; v++) r.append(d[v], xo()), gi.nextNode(), u.push({ type: 2, index: ++s });
            r.append(d[x], xo());
          }
        }
      } else if (r.nodeType === 8) if (r.data === Kc) u.push({ type: 2, index: s });
      else {
        let d = -1;
        for (; (d = r.data.indexOf(Le, d + 1)) !== -1; ) u.push({ type: 7, index: s }), d += Le.length - 1;
      }
      s++;
    }
  }
  static createElement(t, i) {
    const o = Pi.createElement("template");
    return o.innerHTML = t, o;
  }
};
function pr(e, t, i = e, o) {
  var n, a;
  if (t === bt) return t;
  let r = o !== void 0 ? (n = i._$Co) == null ? void 0 : n[o] : i._$Cl;
  const s = $o(t) ? void 0 : t._$litDirective$;
  return (r == null ? void 0 : r.constructor) !== s && ((a = r == null ? void 0 : r._$AO) == null || a.call(r, !1), s === void 0 ? r = void 0 : (r = new s(e), r._$AT(e, i, o)), o !== void 0 ? (i._$Co ?? (i._$Co = []))[o] = r : i._$Cl = r), r !== void 0 && (t = pr(e, r._$AS(e, t.values), r, o)), t;
}
let Cp = class {
  constructor(t, i) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: i }, parts: o } = this._$AD, r = ((t == null ? void 0 : t.creationScope) ?? Pi).importNode(i, !0);
    gi.currentNode = r;
    let s = gi.nextNode(), n = 0, a = 0, u = o[0];
    for (; u !== void 0; ) {
      if (n === u.index) {
        let h;
        u.type === 2 ? h = new Ar(s, s.nextSibling, this, t) : u.type === 1 ? h = new u.ctor(s, u.name, u.strings, this, t) : u.type === 6 && (h = new Ap(s, this, t)), this._$AV.push(h), u = o[++a];
      }
      n !== (u == null ? void 0 : u.index) && (s = gi.nextNode(), n++);
    }
    return gi.currentNode = Pi, r;
  }
  p(t) {
    let i = 0;
    for (const o of this._$AV) o !== void 0 && (o.strings !== void 0 ? (o._$AI(t, o, i), i += o.strings.length - 2) : o._$AI(t[i])), i++;
  }
};
class Ar {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, i, o, r) {
    this.type = 2, this._$AH = S, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = o, this.options = r, this._$Cv = (r == null ? void 0 : r.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const i = this._$AM;
    return i !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = i.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, i = this) {
    t = pr(this, t, i), $o(t) ? t === S || t == null || t === "" ? (this._$AH !== S && this._$AR(), this._$AH = S) : t !== this._$AH && t !== bt && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : $p(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== S && $o(this._$AH) ? this._$AA.nextSibling.data = t : this.T(Pi.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var s;
    const { values: i, _$litType$: o } = t, r = typeof o == "number" ? this._$AC(t) : (o.el === void 0 && (o.el = xa.createElement(Zc(o.h, o.h[0]), this.options)), o);
    if (((s = this._$AH) == null ? void 0 : s._$AD) === r) this._$AH.p(i);
    else {
      const n = new Cp(r, this), a = n.u(this.options);
      n.p(i), this.T(a), this._$AH = n;
    }
  }
  _$AC(t) {
    let i = Tu.get(t.strings);
    return i === void 0 && Tu.set(t.strings, i = new xa(t)), i;
  }
  k(t) {
    Ml(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let o, r = 0;
    for (const s of t) r === i.length ? i.push(o = new Ar(this.O(xo()), this.O(xo()), this, this.options)) : o = i[r], o._$AI(s), r++;
    r < i.length && (this._$AR(o && o._$AB.nextSibling, r), i.length = r);
  }
  _$AR(t = this._$AA.nextSibling, i) {
    var o;
    for ((o = this._$AP) == null ? void 0 : o.call(this, !1, !0, i); t !== this._$AB; ) {
      const r = t.nextSibling;
      t.remove(), t = r;
    }
  }
  setConnected(t) {
    var i;
    this._$AM === void 0 && (this._$Cv = t, (i = this._$AP) == null || i.call(this, t));
  }
}
let En = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, i, o, r, s) {
    this.type = 1, this._$AH = S, this._$AN = void 0, this.element = t, this.name = i, this._$AM = r, this.options = s, o.length > 2 || o[0] !== "" || o[1] !== "" ? (this._$AH = Array(o.length - 1).fill(new String()), this.strings = o) : this._$AH = S;
  }
  _$AI(t, i = this, o, r) {
    const s = this.strings;
    let n = !1;
    if (s === void 0) t = pr(this, t, i, 0), n = !$o(t) || t !== this._$AH && t !== bt, n && (this._$AH = t);
    else {
      const a = t;
      let u, h;
      for (t = s[0], u = 0; u < s.length - 1; u++) h = pr(this, a[o + u], i, u), h === bt && (h = this._$AH[u]), n || (n = !$o(h) || h !== this._$AH[u]), h === S ? t = S : t !== S && (t += (h ?? "") + s[u + 1]), this._$AH[u] = h;
    }
    n && !r && this.j(t);
  }
  j(t) {
    t === S ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}, Ep = class extends En {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === S ? void 0 : t;
  }
}, Pp = class extends En {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== S);
  }
};
class Sp extends En {
  constructor(t, i, o, r, s) {
    super(t, i, o, r, s), this.type = 5;
  }
  _$AI(t, i = this) {
    if ((t = pr(this, t, i, 0) ?? S) === bt) return;
    const o = this._$AH, r = t === S && o !== S || t.capture !== o.capture || t.once !== o.once || t.passive !== o.passive, s = t !== S && (o === S || r);
    r && this.element.removeEventListener(this.name, this, o), s && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var i;
    typeof this._$AH == "function" ? this._$AH.call(((i = this.options) == null ? void 0 : i.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
let Ap = class {
  constructor(t, i, o) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = o;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    pr(this, t);
  }
};
const Op = { I: Ar }, Yn = uo.litHtmlPolyfillSupport;
Yn == null || Yn(xa, Ar), (uo.litHtmlVersions ?? (uo.litHtmlVersions = [])).push("3.3.1");
const Ip = (e, t, i) => {
  const o = (i == null ? void 0 : i.renderBefore) ?? t;
  let r = o._$litPart$;
  if (r === void 0) {
    const s = (i == null ? void 0 : i.renderBefore) ?? null;
    o._$litPart$ = r = new Ar(t.insertBefore(xo(), s), s, void 0, i ?? {});
  }
  return r._$AI(e), r;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ci = globalThis;
let _ = class extends Vi {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var i;
    const t = super.createRenderRoot();
    return (i = this.renderOptions).renderBefore ?? (i.renderBefore = t.firstChild), t;
  }
  update(t) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Ip(i, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return bt;
  }
};
var Fc;
_._$litElement$ = !0, _.finalized = !0, (Fc = Ci.litElementHydrateSupport) == null || Fc.call(Ci, { LitElement: _ });
const Xn = Ci.litElementPolyfillSupport;
Xn == null || Xn({ LitElement: _ });
(Ci.litElementVersions ?? (Ci.litElementVersions = [])).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Up = (e) => (t, i) => {
  i !== void 0 ? i.addInitializer(() => {
    customElements.define(e, t);
  }) : customElements.define(e, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const zp = { attribute: !0, type: String, converter: Ds, reflect: !1, hasChanged: zl }, Mp = (e = zp, t, i) => {
  const { kind: o, metadata: r } = i;
  let s = globalThis.litPropertyMetadata.get(r);
  if (s === void 0 && globalThis.litPropertyMetadata.set(r, s = /* @__PURE__ */ new Map()), o === "setter" && ((e = Object.create(e)).wrapped = !0), s.set(i.name, e), o === "accessor") {
    const { name: n } = i;
    return { set(a) {
      const u = t.get.call(this);
      t.set.call(this, a), this.requestUpdate(n, u, e);
    }, init(a) {
      return a !== void 0 && this.C(n, void 0, e, a), a;
    } };
  }
  if (o === "setter") {
    const { name: n } = i;
    return function(a) {
      const u = this[n];
      t.call(this, a), this.requestUpdate(n, u, e);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function l(e) {
  return (t, i) => typeof i == "object" ? Mp(e, t, i) : ((o, r, s) => {
    const n = r.hasOwnProperty(s);
    return r.constructor.createProperty(s, o), n ? Object.getOwnPropertyDescriptor(r, s) : void 0;
  })(e, t, i);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function w(e) {
  return l({ ...e, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Tl = (e, t, i) => (i.configurable = !0, i.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(e, t, i), i);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function U(e, t) {
  return (i, o, r) => {
    const s = (n) => {
      var a;
      return ((a = n.renderRoot) == null ? void 0 : a.querySelector(e)) ?? null;
    };
    return Tl(i, o, { get() {
      return s(this);
    } });
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let Tp;
function Dp(e) {
  return (t, i) => Tl(t, i, { get() {
    return (this.renderRoot ?? Tp ?? (Tp = document.createDocumentFragment())).querySelectorAll(e);
  } });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ri(e) {
  return (t, i) => {
    const { slot: o, selector: r } = e ?? {}, s = "slot" + (o ? `[name=${o}]` : ":not([name])");
    return Tl(t, i, { get() {
      var u;
      const n = (u = this.renderRoot) == null ? void 0 : u.querySelector(s), a = (n == null ? void 0 : n.assignedElements(e)) ?? [];
      return r === void 0 ? a : a.filter((h) => h.matches(r));
    } });
  };
}
var Lp = `.uui-h1,
.uui-h2,
.uui-h3,
.uui-h4,
.uui-h5,
.uui-a,
.uui-p,
.uui-p-lead,
.uui-small,
.uui-quoteblock,
.uui-ul,
.uui-ol,
.uui-text {
  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 21px;
  -webkit-font-smoothing: antialiased;
}

.uui-text h1,
.uui-h1.uui-h1 {
  font-size: var(--uui-type-h1-size,60px);
  line-height: var(--uui-size-layout-4,66px);
  font-weight: 300;
  margin-left: -5px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-text p + h1,
.uui-text p + .uui-h1 {
  margin-top: var(--uui-size-layout-4,66px);
}

.uui-text h1.--no-top-margin,
.uui-text h1:first-child,
.uui-h1.--no-top-margin,
.uui-h1:first-child {
  margin-top: 0;
}

.uui-text h2,
.uui-h2.uui-h2 {
  font-size: var(--uui-type-h2-size,42px);
  line-height: var(--uui-size-layout-3,42px);
  font-weight: 300;
  margin-left: -3px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-text p + h2,
.uui-text p + .uui-h2 {
  margin-top: var(--uui-size-layout-3,42px);
}

.uui-text h2.--no-top-margin,
.uui-text h2:first-child,
.uui-h2.--no-top-margin,
.uui-h2:first-child {
  margin-top: 0;
}

.uui-text h3,
.uui-h3.uui-h3 {
  font-size: var(--uui-type-h3-size,30px);
  line-height: var(--uui-size-large);
  font-weight: 300;
  margin-left: -2px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-text h3.--no-top-margin,
.uui-text h3:first-child,
.uui-h3.--no-top-margin,
.uui-h3:first-child {
  margin-top: 0;
}

.uui-text h4,
.uui-h4.uui-h4 {
  font-size: var(--uui-type-h4-size,21px);
  line-height: 21px;
  font-weight: 400;
  margin-left: -1px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-text h4.--no-top-margin,
.uui-text h4:first-child,
.uui-h4.--no-top-margin,
.uui-h4:first-child {
  margin-top: 0;
}

.uui-text h5,
.uui-h5.uui-h5 {
  font-size: var(--uui-type-h5-size,14px);
  line-height: inherit;
  font-weight: 700;
  margin-left: 0;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: 0;
}

.uui-text h5.--no-top-margin,
.uui-text h5:first-child,
.uui-h5.--no-top-margin,
.uui-h5:first-child {
  margin-top: 0;
}

.uui-p,
.uui-text p {
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-p-lead,
.uui-text p.uui-lead {
  font-size: var(--uui-size-6,18px);
  line-height: var(--uui-size-8,24px);
}

.uui-a,
.uui-text a {
  color: var(--uui-color-interactive,#1b264f);
}

.uui-a:link,
.uui-a:active .uui-text a:link,
.uui-text a:active {
  color: var(--uui-color-interactive,#1b264f);
}

.uui-a:hover,
.uui-text a:hover {
  color: var(--uui-color-interactive-emphasis,#3544b1);
}

.uui-small,
.uui-text small {
  display: inline-block;
  font-size: var(--uui-type-small-size,12px);
  line-height: 18px;
}

.uui-quoteblock,
.uui-text blockquote {
  float: right;
  font-size: 14px;
  line-height: inherit;
  font-weight: 700;
  font-style: italic;
  margin-top: 0;
  margin-bottom: var(--uui-size-layout-1,24px);
  margin-right: -0.035em;
  max-width: 16em;
  quotes: '“' '”' '‘' '’';
}

.uui-quoteblock:before,
.uui-text blockquote:before {
  content: open-quote;
  margin-left: -0.4em;
  margin-right: 0.08em;
  vertical-align: bottom;
  font-weight: 400;
  font-size: 2em;
}

.uui-quoteblock:after,
.uui-text blockquote:after {
  content: close-quote;
  margin-left: 0.04em;
  margin-right: -0.4em;
  vertical-align: bottom;
  font-weight: 400;
  font-size: 2em;
  margin-bottom: -2px;
  display: inline-block;
}

.uui-ul,
.uui-text ul {
  list-style-type: square;
  padding-left: var(--uui-size-layout-1,24px);
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-ol,
.uui-text ol {
  padding-left: var(--uui-size-layout-1,24px);
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}
`;
const Or = ii(Lp);
b`
  @keyframes uui-blink {
    0%,
    100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }
`;
ii("uui-blink 0.9s infinite both");
b`
  @keyframes pulse {
    0% {
      -webkit-transform: translate(-50%, -50%) scale(0.2);
      transform: translate(-50%, -50%) scale(0.2);
      opacity: 0.9;
    }
    80% {
      -webkit-transform: translate(-50%, -50%) scale(1.2);
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0;
    }
    100% {
      -webkit-transform: translate(-50%, -50%) scale(2.2);
      transform: translate(-50%, -50%) scale(2.2);
      opacity: 0;
    }
  }
`;
ii(
  "pulse 0.8s ease-in-out infinite both"
);
b`
  @keyframes uui-horizontal-shake {
    10%,
    90% {
      transform: translateX(-1px);
    }

    20%,
    80% {
      transform: translateX(1px);
    }

    30%,
    50%,
    70% {
      transform: translateX(-2px);
    }

    40%,
    60% {
      transform: translateX(2px);
    }
  }
`;
ii(
  "uui-horizontal-shake 600ms ease backwards"
);
let Qc = class extends Event {
  constructor(t, i = {}) {
    super(t, { ...i }), this.detail = i.detail || {};
  }
}, th = class extends Qc {
  constructor(t, i = {}) {
    super(t, {
      bubbles: !0,
      ...i
    });
  }
};
th.VALID = "valid";
th.INVALID = "invalid";
let eh = class extends Qc {
  constructor(t, i = {}) {
    super(t, {
      bubbles: !0,
      cancelable: !0,
      ...i
    });
  }
};
eh.SELECTED = "selected";
eh.DESELECTED = "deselected";
function g(e, t) {
  return (i) => {
    if (e.indexOf("-") > 0 === !1) {
      console.error(
        `${e} is not a valid custom element name. A custom element name should consist of at least two words separated by a hyphen.`
      );
      return;
    }
    window.customElements.get(e) || window.customElements.define(e, i, t);
  };
}
var Np = Object.getOwnPropertyDescriptor, Hp = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Np(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = n(r) || r);
  return r;
};
let ko = class extends _ {
  render() {
    return c`<slot></slot>`;
  }
};
ko.styles = [
  b`
      :host {
        display: inline-flex;
        align-items: stretch;
      }

      ::slotted(*) {
        --uui-button-border-radius: 0;
        flex-grow: 1;
      }

      ::slotted([look='outline']:not(:first-child)) {
        --uui-button-merge-border-left: 1;
      }
      ::slotted([look='placeholder']:not(:first-child)) {
        --uui-button-merge-border-left: 1;
      }

      ::slotted(*:first-child) {
        --uui-button-border-radius: var(--uui-border-radius,3px) 0 0
          var(--uui-border-radius,3px);
      }
      ::slotted(*:last-child) {
        --uui-button-border-radius: 0 var(--uui-border-radius,3px)
          var(--uui-border-radius,3px) 0;
      }

      ::slotted(*:hover) {
        z-index: 1;
      }
    `
];
ko = Hp([
  g("uui-button-group")
], ko);
var Bp = Object.getOwnPropertyDescriptor, Vp = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Bp(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = n(r) || r);
  return r;
};
let $a = class extends ko {
};
$a.styles = [
  ...ko.styles,
  b`
      ::slotted(*) {
        --uui-button-padding-left-factor: 0.5;
        --uui-button-padding-right-factor: 0.5;
      }

      ::slotted(*:first-child) {
        --uui-button-border-radius: 50px 0 0 50px;
        --uui-button-padding-left-factor: 2;
      }
      ::slotted(*:last-child) {
        --uui-button-border-radius: 0 50px 50px 0;
        --uui-button-padding-right-factor: 2;
      }
      ::slotted(*:first-child:last-child) {
        --uui-button-border-radius: 50px 50px 50px 50px;
        --uui-button-padding-left-factor: 2;
        --uui-button-padding-right-factor: 2;
      }

      ::slotted([look='outline']),
      ::slotted([look='placeholder']) {
        --uui-button-padding-left-factor: 1;
        --uui-button-padding-right-factor: 1;
      }

      ::slotted(uui-button[look='outline']:first-child),
      ::slotted(uui-button[look='placeholder']:first-child) {
        --uui-button-border-radius: 50px 0 0 50px;
        --uui-button-padding-left-factor: 1.5;
      }
      ::slotted(uui-button[look='outline']:last-child),
      ::slotted(uui-button[look='placeholder']:last-child) {
        --uui-button-border-radius: 0 50px 50px 0;
        --uui-button-padding-right-factor: 1.5;
      }
      ::slotted(uui-button[look='outline']:first-child:last-child),
      ::slotted(uui-button[look='placeholder']:first-child:last-child) {
        --uui-button-border-radius: 50px 50px 50px 50px;
        --uui-button-padding-left-factor: 1.5;
        --uui-button-padding-right-factor: 1.5;
      }
    `
];
$a = Vp([
  g("uui-action-bar")
], $a);
var jp = Object.defineProperty, Rp = Object.getOwnPropertyDescriptor, Pn = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Rp(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && jp(t, i, r), r;
};
let fr = class extends _ {
  constructor() {
    super(...arguments), this._avatarArray = [], this.limit = 0;
  }
  firstUpdated() {
    this._setAvatarArray();
  }
  _onSlotChange() {
    this._setAvatarArray(), this._updateAvatarVisibility();
  }
  _setAvatarArray() {
    this._avatarArray = this._avatarNodes ? this._avatarNodes : [];
  }
  updated(e) {
    e.has("limit") && this._updateAvatarVisibility();
  }
  _updateAvatarVisibility() {
    this._avatarArray.forEach((e, t) => {
      e.style.display = t < this.limit || this.limit === 0 ? "" : "none";
    });
  }
  _isLimitExceeded() {
    return this.limit !== 0 && this._avatarArray.length > this.limit;
  }
  render() {
    return c`
      <slot @slotchange=${this._onSlotChange}></slot>
      ${this._isLimitExceeded() ? (
      //prettier-ignore
      c`<small id="overflow-indication">+${this._avatarArray.length - this.limit}</small>`
    ) : ""}
    `;
  }
};
fr.styles = [
  b`
      :host {
        display: inline-flex;
        align-items: center;
        padding-left: 3px;
        padding-right: 3px;
      }

      ::slotted(uui-avatar) {
        margin-left: -0.2em;
        margin-right: -0.2em;
        border: 0.1em solid var(--uui-avatar-border-color);
      }

      #overflow-indication {
        margin-left: 6px;
      }
    `
];
Pn([
  ri({
    selector: "uui-avatar, [uui-avatar]",
    flatten: !0
  })
], fr.prototype, "_avatarNodes", 2);
Pn([
  w()
], fr.prototype, "_avatarArray", 2);
Pn([
  l({ type: Number, attribute: !0 })
], fr.prototype, "limit", 2);
fr = Pn([
  g("uui-avatar-group")
], fr);
var Fp = Object.defineProperty, Wp = Object.getOwnPropertyDescriptor, Ir = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Wp(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Fp(t, i, r), r;
};
let We = class extends _ {
  constructor() {
    super(...arguments), this.overflow = !0, this.imgSrc = "", this.imgSrcset = "", this.name = "";
  }
  get _initials() {
    var e;
    return ((e = this.initials) == null ? void 0 : e.substring(0, 3)) || this.createInitials(this.name);
  }
  connectedCallback() {
    super.connectedCallback(), this.name || console.warn(this.tagName + " needs a `name`", this);
  }
  createInitials(e) {
    let t = "";
    if (!e)
      return t;
    const o = [...e.matchAll(/(?:^|\s)(.)/g)].map((r) => r[1]).join("");
    return o != null && o.length ? (t = o[0].charAt(0), o.length > 1 && (t += o[o.length - 1].charAt(0)), t.toUpperCase()) : t;
  }
  renderImage() {
    return c` <img
      src="${this.imgSrc}"
      srcset="${this.imgSrcset}"
      alt="${this._initials}"
      title="${this.name}" />`;
  }
  render() {
    return c`
      ${this.imgSrc ? this.renderImage() : ""}
      ${this.imgSrc ? "" : this._initials}
      <slot></slot>
    `;
  }
};
We.styles = [
  b`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        font-weight: 700;
        -webkit-font-smoothing: subpixel-antialiased;
        width: calc(2em + 4px);
        height: calc(2em + 4px);
        user-select: none;
        /* box-sizing: border-box; */
        aspect-ratio: 1;
        background-color: var(--uui-palette-spanish-pink,#f5c1bc);
        color: var(--uui-palette-space-cadet,#1b264f);
      }

      :host([overflow]) {
        overflow: unset;
      }

      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        overflow: hidden;
        border-radius: 50%;
      }
    `
];
Ir([
  l({ type: Boolean, attribute: !0, reflect: !0 })
], We.prototype, "overflow", 2);
Ir([
  l({ type: String, attribute: "img-src" })
], We.prototype, "imgSrc", 2);
Ir([
  l({ type: String, attribute: "img-srcset" })
], We.prototype, "imgSrcset", 2);
Ir([
  l({ type: String, reflect: !0 })
], We.prototype, "name", 2);
Ir([
  l({ type: String })
], We.prototype, "initials", 2);
We = Ir([
  g("uui-avatar")
], We);
var Gp = Object.defineProperty, qp = Object.getOwnPropertyDescriptor, Sn = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? qp(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Gp(t, i, r), r;
};
let vr = class extends _ {
  constructor() {
    super(...arguments), this.color = "default", this.look = "primary", this.attention = !1;
  }
  render() {
    return c` <slot></slot> `;
  }
};
vr.styles = [
  b`
      :host {
        position: var(--uui-badge-position, absolute);
        display: flex;
        justify-content: center;
        align-items: center;

        padding: var(--uui-size-1,3px) var(--uui-size-2,6px);
        inset: var(--uui-badge-inset, -8px -8px auto auto);

        text-align: center;
        font-size: var(--uui-badge-font-size, var(--uui-type-small-size,12px));
        font-weight: 900;
        line-height: 1;

        margin-right: 0;

        min-width: var(--uui-size-8,24px);
        min-height: var(--uui-size-8,24px);
        box-sizing: border-box;

        border-radius: var(--uui-size-4,12px);
        border: 1px solid transparent;
      }

      :host {
        --color: var(--uui-color-default,#1b264f);
        --color-standalone: var(--uui-color-default-standalone,rgb(
    28,
    35,
    59
  ));
        --color-contrast: var(--uui-color-default-contrast,#fff);
      }
      :host([color='positive']) {
        --color: var(--uui-color-positive,#0b8152);
        --color-standalone: var(--uui-color-positive-standalone,rgb(
    10,
    115,
    73
  ));
        --color-contrast: var(--uui-color-positive-contrast,#fff);
      }
      :host([color='warning']) {
        --color: var(--uui-color-warning,#fbd142);
        --color-standalone: var(--uui-color-warning-standalone,#a17700);
        --color-contrast: var(--uui-color-warning-contrast,#000);
      }
      :host([color='danger']) {
        --color: var(--uui-color-danger,#d42054);
        --color-standalone: var(--uui-color-danger-standalone,rgb(
    191,
    33,
    78
  ));
        --color-contrast: var(--uui-color-danger-contrast,white);
      }
      :host([color='invalid']) {
        --color: var(--uui-color-invalid,#d42054);
        --color-standalone: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
        --color-contrast: var(--uui-color-invalid-contrast,white);
      }

      :host {
        background-color: var(--uui-color-surface,#fff);
        color: var(--color-standalone);
        border-color: transparent;
      }
      :host([look='primary']) {
        background-color: var(--color);
        color: var(--color-contrast);
        border-color: transparent;
      }
      :host([look='secondary']) {
        background-color: var(--uui-color-surface-alt,#f3f3f5);
        color: var(--color-standalone);
        border-color: transparent;
      }
      :host([look='outline']) {
        background-color: var(--uui-color-surface,#fff);
        color: var(--color-standalone);
        border-color: var(--color-standalone);
      }
      :host([look='placeholder']) {
        border-style: dashed;
        background-color: var(--uui-color-surface,#fff);
        color: var(--color-standalone);
        border-color: var(--uui-color-border-standalone,#c2c2c2);
      }

      /** TODO: we didn't want to target elements by name, but what else can we do? */
      ::slotted(uui-icon) {
        margin-left: -0.2em;
        margin-right: -0.2em;
      }

      @keyframes --uui-badge-bounce {
        0% {
          transform: translateY(0);
        }
        20% {
          transform: translateY(-6px);
        }
        40% {
          transform: translateY(0);
        }
        55% {
          transform: translateY(-3px);
        }
        70% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(0);
        }
      }
      :host([attention]) {
        animation-duration: 1.4s;
        animation-iteration-count: infinite;
        animation-name: --uui-badge-bounce;
        animation-timing-function: ease;
      }
      @media (prefers-reduced-motion) {
        :host([attention]) {
          animation: none;
        }
      }
    `
];
Sn([
  l({ reflect: !0 })
], vr.prototype, "color", 2);
Sn([
  l({ reflect: !0 })
], vr.prototype, "look", 2);
Sn([
  l({ type: Boolean, reflect: !0 })
], vr.prototype, "attention", 2);
vr = Sn([
  g("uui-badge")
], vr);
var Kp = Object.defineProperty, Yp = (e, t, i, o) => {
  for (var r = void 0, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = n(t, i, r) || r);
  return r && Kp(t, i, r), r;
};
const Ko = (e) => {
  class t extends e {
    constructor() {
      super(...arguments), this.active = !1;
    }
  }
  return Yp([
    l({ type: Boolean, reflect: !0 })
  ], t.prototype, "active"), t;
};
var Xp = Object.defineProperty, Du = (e, t, i, o) => {
  for (var r = void 0, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = n(t, i, r) || r);
  return r && Xp(t, i, r), r;
};
const ie = (e, t) => {
  class i extends t {
    constructor() {
      super(...arguments), this._labelSlotHasContent = !1;
    }
    firstUpdated(r) {
      super.firstUpdated(r), this.label || console.warn(this.tagName + " needs a `label`", this);
    }
    labelSlotChanged(r) {
      this._labelSlotHasContent = r.target.assignedNodes({ flatten: !0 }).length > 0;
    }
    /**
     * Call in the mixed element to render the label template. It contains a slot. This is optional.
     * @method renderLabel
     * @returns {TemplateResult}
     */
    renderLabel() {
      return c`
        ${this._labelSlotHasContent === !1 ? c`<span class="label">${this.label}</span>` : ""}
        <slot
          class="label"
          style=${this._labelSlotHasContent ? "" : "display: none"}
          name=${e || ""}
          @slotchange=${this.labelSlotChanged}></slot>
      `;
    }
  }
  return Du([
    l({ type: String })
  ], i.prototype, "label"), Du([
    w()
  ], i.prototype, "_labelSlotHasContent"), i;
};
let Zp = class extends Event {
  constructor(t, i = {}) {
    super(t, { ...i }), this.detail = i.detail || {};
  }
}, qi = class extends Zp {
  constructor(t, i = {}) {
    super(t, {
      bubbles: !0,
      cancelable: !0,
      ...i
    });
  }
};
qi.SELECTED = "selected";
qi.DESELECTED = "deselected";
var Jp = Object.defineProperty, Qp = Object.getOwnPropertyDescriptor, ih = (e) => {
  throw TypeError(e);
}, Lu = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Qp(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Jp(t, i, r), r;
}, Dl = (e, t, i) => t.has(e) || ih("Cannot " + i), st = (e, t, i) => (Dl(e, t, "read from private field"), i ? i.call(e) : t.get(e)), os = (e, t, i) => t.has(e) ? ih("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), tf = (e, t, i, o) => (Dl(e, t, "write to private field"), t.set(e, i), i), ss = (e, t, i) => (Dl(e, t, "access private method"), i);
const Ur = (e) => {
  var t, i, o, r, s, n, a;
  class u extends e {
    constructor(...f) {
      super(...f), os(this, r), this._selectable = !1, this.deselectable = !0, this.selected = !1, os(this, t, this), os(this, i, (d) => {
        d.code !== "Space" && d.code !== "Enter" || d.composedPath().indexOf(st(this, t)) === 0 && st(this, o).call(this, d);
      }), os(this, o, (d) => {
        if ((this._selectable || this.deselectable && this.selected) === !1) return;
        const v = d.composedPath();
        st(this, t) === this && v.some((O) => {
          const D = O.tagName;
          return D === "A" || D === "BUTTON" || D === "INPUT" || D === "TEXTAREA" || D === "SELECT";
        }) || v.indexOf(st(this, t)) !== -1 && (d.type === "keydown" && d.preventDefault(), ss(this, r, s).call(this));
      }), this.addEventListener("click", st(this, o)), this.addEventListener("keydown", st(this, i));
    }
    get selectable() {
      return this._selectable;
    }
    set selectable(f) {
      const d = this._selectable;
      d !== f && (this._selectable = f, st(this, t) === this && st(this, t).setAttribute(
        "tabindex",
        `${f ? "0" : "-1"}`
      ), this.requestUpdate("selectable", d));
    }
    get selectableTarget() {
      return st(this, t);
    }
    set selectableTarget(f) {
      const d = st(this, t);
      d.removeAttribute("tabindex"), d.removeEventListener("click", st(this, o)), d.removeEventListener(
        "keydown",
        st(this, i)
      ), tf(this, t, f), st(this, t) === this && st(this, t).setAttribute(
        "tabindex",
        this._selectable ? "0" : "-1"
      ), f.addEventListener("click", st(this, o)), f.addEventListener("keydown", st(this, i));
    }
  }
  return t = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakSet(), s = function() {
    this.selectable && (this.deselectable === !1 ? ss(this, r, n).call(this) : this.selected ? ss(this, r, a).call(this) : ss(this, r, n).call(this));
  }, n = function() {
    if (!this.selectable) return;
    const h = new qi(qi.SELECTED);
    this.dispatchEvent(h), !h.defaultPrevented && (this.selected = !0);
  }, a = function() {
    if (!this.deselectable) return;
    const h = new qi(qi.DESELECTED);
    this.dispatchEvent(h), !h.defaultPrevented && (this.selected = !1);
  }, Lu([
    l({ type: Boolean, reflect: !0 })
  ], u.prototype, "selectable", 1), Lu([
    l({ type: Boolean, reflect: !0 })
  ], u.prototype, "selected", 2), u;
};
var ef = Object.defineProperty, rf = Object.getOwnPropertyDescriptor, of = (e, t, i, o) => {
  for (var r = rf(t, i), s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = n(t, i, r) || r);
  return r && ef(t, i, r), r;
};
const An = (e) => {
  class t extends e {
    constructor() {
      super(...arguments), this._selectOnly = !1;
    }
    get selectOnly() {
      return this._selectOnly;
    }
    set selectOnly(o) {
      const r = this._selectOnly;
      this._selectOnly = o, this.requestUpdate("selectOnly", r);
    }
  }
  return of([
    l({ type: Boolean, reflect: !0, attribute: "select-only" })
  ], t.prototype, "selectOnly"), t;
};
let rh = class extends Event {
  constructor(t, i = {}) {
    super(t, { ...i }), this.detail = i.detail || {};
  }
}, Me = class extends rh {
  constructor(t, i = {}) {
    super(t, {
      bubbles: !0,
      ...i
    });
  }
};
Me.VALID = "valid";
Me.INVALID = "invalid";
let oh = class extends rh {
  constructor(t, i = {}) {
    super(t, {
      bubbles: !0,
      cancelable: !0,
      ...i
    });
  }
};
oh.SELECTED = "selected";
oh.DESELECTED = "deselected";
var sf = Object.defineProperty, nf = Object.getOwnPropertyDescriptor, sh = (e) => {
  throw TypeError(e);
}, ci = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? nf(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && sf(t, i, r), r;
}, Ll = (e, t, i) => t.has(e) || sh("Cannot " + i), z = (e, t, i) => (Ll(e, t, "read from private field"), i ? i.call(e) : t.get(e)), hi = (e, t, i) => t.has(e) ? sh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Zn = (e, t, i, o) => (Ll(e, t, "write to private field"), t.set(e, i), i), ns = (e, t, i) => (Ll(e, t, "access private method"), i);
const af = [
  "customError",
  "valueMissing",
  "badInput",
  "typeMismatch",
  "patternMismatch",
  "rangeOverflow",
  "rangeUnderflow",
  "stepMismatch",
  "tooLong",
  "tooShort"
], re = (e, t) => {
  var i, o, r, s, n, a, u, h, f;
  class d extends e {
    constructor(...v) {
      super(...v), hi(this, a), this.name = "", hi(this, i, {}), this._pristine = !1, this.required = !1, this.requiredMessage = "This field is required", this.error = !1, this.errorMessage = "This field is invalid", hi(this, o, t), hi(this, r, null), hi(this, s, []), hi(this, n, []), hi(this, f, () => {
        this.pristine = !1;
      }), this._internals = this.attachInternals(), this.pristine = !0, this.addValidator(
        "valueMissing",
        () => this.requiredMessage,
        () => this.hasAttribute("required") && this.hasValue() === !1
      ), this.addValidator(
        "customError",
        () => this.errorMessage,
        () => this.error
      ), this.addEventListener("blur", () => {
        this.pristine = !1, this.checkValidity();
      });
    }
    // Do not 'reflect' as the attribute is used as fallback.
    get value() {
      return z(this, o);
    }
    set value(v) {
      const $ = z(this, o);
      Zn(this, o, v), "ElementInternals" in window && "setFormValue" in window.ElementInternals.prototype && this._internals.setFormValue(z(this, o) ?? null), this.requestUpdate("value", $);
    }
    set pristine(v) {
      this._pristine !== v && (this._pristine = v, v ? this.setAttribute("pristine", "") : this.removeAttribute("pristine"), ns(this, a, h).call(this));
    }
    get pristine() {
      return this._pristine;
    }
    /**
     * Determine wether this FormControl has a value.
     * @method hasValue
     * @returns {boolean}
     */
    hasValue() {
      return this.value !== this.getDefaultValue();
    }
    /**
     * Focus first element that is invalid.
     * @method focusFirstInvalidElement
     * @returns {HTMLElement | undefined}
     */
    focusFirstInvalidElement() {
      const v = z(this, n).find(
        ($) => $.validity.valid === !1
      );
      v ? "focusFirstInvalidElement" in v ? v.focusFirstInvalidElement() : v.focus() : this.focus();
    }
    disconnectedCallback() {
      super.disconnectedCallback(), ns(this, a, u).call(this);
    }
    /**
     * Add validator, to validate this Form Control.
     * See https://developer.mozilla.org/en-US/docs/Web/API/ValidityState for available Validator FlagTypes.
     *
     * @example
     * this.addValidator(
     *  'tooLong',
     *  () => 'This input contains too many characters',
     *  () => this._value.length > 10
     * );
     * @method hasValue
     * @param {FlagTypes} flagKey the type of validation.
     * @param {method} getMessageMethod method to retrieve relevant message. Is executed every time the validator is re-executed.
     * @param {method} checkMethod method to determine if this validator should invalidate this form control. Return true if this should prevent submission.
     */
    addValidator(v, $, O) {
      const D = {
        flagKey: v,
        getMessageMethod: $,
        checkMethod: O,
        weight: af.indexOf(v)
      };
      return z(this, s).push(D), z(this, s).sort(
        (ot, le) => ot.weight > le.weight ? 1 : le.weight > ot.weight ? -1 : 0
      ), D;
    }
    removeValidator(v) {
      const $ = z(this, s).indexOf(v);
      $ !== -1 && z(this, s).splice($, 1);
    }
    /**
     * @method addFormControlElement
     * @description Important notice if adding a native form control then ensure that its value and thereby validity is updated when value is changed from the outside.
     * @param element {NativeFormControlElement} - element to validate and include as part of this form association.
     */
    addFormControlElement(v) {
      z(this, n).push(v), v.addEventListener(Me.INVALID, () => {
        this._runValidators();
      }), v.addEventListener(Me.VALID, () => {
        this._runValidators();
      }), this._pristine === !1 && (v.checkValidity(), this._runValidators());
    }
    /**
     * @method setCustomValidity
     * @description Set custom validity state, set to empty string to remove the custom message.
     * @param message {string} - The message to be shown
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity|HTMLObjectElement:setCustomValidity}
     */
    setCustomValidity(v) {
      this._customValidityObject && this.removeValidator(this._customValidityObject), v != null && v !== "" && (this._customValidityObject = this.addValidator(
        "customError",
        () => v,
        () => !0
      )), this._runValidators();
    }
    /**
     * @protected
     * @method _runValidators
     * @description Run all validators and set the validityState of this form control.
     * Run this method when you want to re-run all validators.
     * This can be relevant if you have a validators that is using values that is not triggering the Lit Updated Callback.
     * Such are mainly properties that are not declared as a Lit state and or Lit property.
     */
    _runValidators() {
      Zn(this, i, {});
      let v, $;
      z(this, s).some((D) => D.checkMethod() ? (z(this, i)[D.flagKey] = !0, v = D.getMessageMethod(), !0) : !1), v || z(this, n).some((D) => {
        let ot;
        for (ot in D.validity)
          if (ot !== "valid" && D.validity[ot])
            return z(this, i)[ot] = !0, v = D.validationMessage, $ ?? ($ = D), !0;
        return !1;
      });
      const O = Object.values(z(this, i)).includes(!0);
      z(this, i).valid = !O, this._internals.setValidity(
        z(this, i),
        // Turn messages into an array and join them with a comma. [NL]:
        //[...messages].join(', '),
        v,
        $ ?? this.getFormElement() ?? void 0
      ), ns(this, a, h).call(this);
    }
    updated(v) {
      super.updated(v), this._runValidators();
    }
    submit() {
      var v;
      (v = z(this, r)) == null || v.requestSubmit();
    }
    formAssociatedCallback() {
      ns(this, a, u).call(this), Zn(this, r, this._internals.form), z(this, r) && (z(this, r).hasAttribute("submit-invalid") && (this.pristine = !1), z(this, r).addEventListener("submit", z(this, f)));
    }
    formResetCallback() {
      this.pristine = !0, this.value = this.getInitialValue() ?? this.getDefaultValue();
    }
    getDefaultValue() {
      return t;
    }
    getInitialValue() {
      return this.getAttribute("value");
    }
    checkValidity() {
      var v;
      this.pristine = !1, this._runValidators();
      for (const $ in z(this, n))
        if (z(this, n)[$].checkValidity() === !1)
          return !1;
      return (v = this._internals) == null ? void 0 : v.checkValidity();
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity
    get validity() {
      return z(this, i);
    }
    get validationMessage() {
      var v;
      return (v = this._internals) == null ? void 0 : v.validationMessage;
    }
  }
  return i = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakSet(), u = function() {
    z(this, r) && z(this, r).removeEventListener("submit", z(this, f));
  }, h = function() {
    this._pristine !== !0 && (z(this, i).valid ? this.dispatchEvent(new Me(Me.VALID)) : this.dispatchEvent(
      new Me(Me.INVALID)
    ));
  }, f = /* @__PURE__ */ new WeakMap(), d.formAssociated = !0, ci([
    l({ type: String })
  ], d.prototype, "name", 2), ci([
    l()
  ], d.prototype, "value", 1), ci([
    l({ type: Boolean, reflect: !0, attribute: "pristine" })
  ], d.prototype, "pristine", 1), ci([
    l({ type: Boolean, reflect: !0 })
  ], d.prototype, "required", 2), ci([
    l({ type: String, attribute: "required-message" })
  ], d.prototype, "requiredMessage", 2), ci([
    l({ type: Boolean, reflect: !0 })
  ], d.prototype, "error", 2), ci([
    l({ type: String, attribute: "error-message" })
  ], d.prototype, "errorMessage", 2), d;
}, lf = (e, t, i) => {
  let o = e;
  for (; o !== null; ) {
    const r = o instanceof HTMLElement && o.hasAttribute(t) && o.getAttribute(t) === i, s = o.querySelector(`[${t}="${i}"]`) !== null;
    if (r)
      return o;
    if (s)
      return o.querySelector(
        `[${t}="${i}"]`
      );
    o = o.parentElement || o.parentNode || o.host || null;
  }
  return null;
};
var uf = Object.defineProperty, nh = (e) => {
  throw TypeError(e);
}, cf = (e, t, i, o) => {
  for (var r = void 0, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = n(t, i, r) || r);
  return r && uf(t, i, r), r;
}, ah = (e, t, i) => t.has(e) || nh("Cannot " + i), Nu = (e, t, i) => (ah(e, t, "read from private field"), t.get(e)), Hu = (e, t, i) => t.has(e) ? nh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), hf = (e, t, i, o) => (ah(e, t, "write to private field"), t.set(e, i), i);
const df = (e) => {
  var t, i;
  class o extends e {
    constructor(...s) {
      super(...s), Hu(this, t, !1), this._togglePopover = () => {
        if (!this.popoverContainerElement) return;
        const n = lf(
          this,
          "id",
          this.popoverContainerElement
        );
        n && (Nu(this, t) ? n.hidePopover() : n.showPopover());
      }, Hu(this, i, (n) => {
        requestAnimationFrame(() => {
          hf(this, t, n.detail.newState === "open");
        });
      }), this.addEventListener("uui-popover-before-toggle", Nu(this, i));
    }
  }
  return t = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), cf([
    l({ type: String, attribute: "popovertarget" })
  ], o.prototype, "popoverContainerElement"), o;
};
class L extends Event {
  constructor(t, i = {}) {
    super(t, { ...i }), this.detail = i.detail || {};
  }
}
class Ki extends L {
  constructor(t, i = {}) {
    super(t, {
      bubbles: !0,
      ...i
    });
  }
}
Ki.VALID = "valid";
Ki.INVALID = "invalid";
class Be extends L {
  constructor(t, i = {}) {
    super(t, {
      bubbles: !0,
      cancelable: !0,
      ...i
    });
  }
}
Be.SELECTED = "selected";
Be.DESELECTED = "deselected";
class ka extends L {
  constructor(t, i = {}) {
    super(t, {
      bubbles: !0,
      ...i
    });
  }
}
ka.CHANGE = "change";
var pf = Object.defineProperty, ff = Object.getOwnPropertyDescriptor, lh = (e) => {
  throw TypeError(e);
}, zr = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? ff(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && pf(t, i, r), r;
}, vf = (e, t, i) => t.has(e) || lh("Cannot " + i), bf = (e, t, i) => t.has(e) ? lh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), gf = (e, t, i) => (vf(e, t, "access private method"), i), Ca, uh;
class Ht extends re(
  ie("", _),
  ""
) {
  constructor(t = "checkbox") {
    super(), bf(this, Ca), this._value = "", this.labelPosition = "right", this._checked = !1, this.indeterminate = !1, this.disabled = !1, this.readonly = !1, this._value === "" && (this._value = "on"), this.inputRole = t, this.addEventListener("keydown", gf(this, Ca, uh));
  }
  /** intentional overwrite of FormControlMixins value getter and setter method. */
  get value() {
    return this._value;
  }
  set value(t) {
    const i = super.value;
    this._value = t, "ElementInternals" in window && //@ts-ignore
    "setFormValue" in window.ElementInternals.prototype && this._internals.setFormValue(
      this._checked && this.name !== "" ? this._value : null
    ), this.requestUpdate("value", i);
  }
  // Do not 'reflect' as the attribute is used as fallback.
  get checked() {
    return this._checked;
  }
  set checked(t) {
    const i = this._checked;
    this._checked = t, this._internals.setFormValue(
      this._checked && this.name !== "" ? this._value ? this._value : "on" : null
    ), this.requestUpdate("checked", i);
  }
  getFormElement() {
    return this._input;
  }
  hasValue() {
    return this.checked;
  }
  formResetCallback() {
    super.formResetCallback(), this.checked = this.hasAttribute("checked");
  }
  firstUpdated(t) {
    var r;
    super.firstUpdated(t);
    const i = (r = this.shadowRoot) == null ? void 0 : r.querySelector("label");
    let o = !1;
    this._input.addEventListener("blur", () => {
      o === !1 && this.style.setProperty("--uui-show-focus-outline", "1"), o = !1;
    }), i.addEventListener("mousedown", () => {
      this.style.setProperty("--uui-show-focus-outline", "0"), o = !0;
    }), i.addEventListener("mouseup", () => {
      o = !1;
    });
  }
  /**
   * This method enables <label for="..."> to focus the input
   */
  async focus() {
    await this.updateComplete, this._input.focus();
  }
  async click() {
    await this.updateComplete, this._input.click();
  }
  _onInputChange(t) {
    t.stopPropagation(), this.pristine = !1, this.checked = this._input.checked, this.indeterminate = this._input.indeterminate, this.dispatchEvent(new ka(ka.CHANGE));
  }
  render() {
    return c`
      <label>
        <input
          id="input"
          type="checkbox"
          @change="${this._onInputChange}"
          .disabled=${this.disabled || this.readonly}
          .checked=${this.checked}
          .indeterminate=${this.indeterminate}
          aria-checked="${this.checked ? "true" : "false"}"
          aria-label=${this.label}
          role="${this.inputRole}" />
        ${this.renderCheckbox()} ${this.renderLabel()}
      </label>
    `;
  }
}
Ca = /* @__PURE__ */ new WeakSet();
uh = function(e) {
  e.key == "Enter" && this.submit();
};
Ht.styles = [
  b`
      :host {
        display: inline-block;
      }

      label {
        position: relative;
        cursor: pointer;
        user-select: none;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-items: center;
        gap: var(--uui-size-3,9px);
      }

      :host([readonly]) label {
        cursor: default;
      }

      input {
        position: absolute;
        height: 0px;
        width: 0px;
        opacity: 0;
      }

      :host([label-position='left']) label {
        flex-direction: row-reverse;
      }

      :host([label-position='top']) label {
        gap: var(--uui-size-half-base-unit);
        flex-direction: column-reverse;
      }

      :host([label-position='bottom']) label {
        gap: var(--uui-size-half-base-unit);
        flex-direction: column;
      }

      :host([disabled]) label {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .label {
        display: block;
      }

      span.label:empty {
        display: none;
      }
    `
];
zr([
  l({ type: String, attribute: "label-position", reflect: !0 })
], Ht.prototype, "labelPosition", 2);
zr([
  l({ type: Boolean })
], Ht.prototype, "checked", 1);
zr([
  l({ type: Boolean, reflect: !0 })
], Ht.prototype, "indeterminate", 2);
zr([
  l({ type: Boolean, reflect: !0 })
], Ht.prototype, "disabled", 2);
zr([
  l({ type: Boolean, reflect: !0 })
], Ht.prototype, "readonly", 2);
zr([
  U("#input")
], Ht.prototype, "_input", 2);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ch = Symbol.for(""), mf = (e) => {
  if ((e == null ? void 0 : e.r) === ch) return e == null ? void 0 : e._$litStatic$;
}, Bu = (e) => ({ _$litStatic$: e, r: ch }), Vu = /* @__PURE__ */ new Map(), _f = (e) => (t, ...i) => {
  const o = i.length;
  let r, s;
  const n = [], a = [];
  let u, h = 0, f = !1;
  for (; h < o; ) {
    for (u = t[h]; h < o && (s = i[h], (r = mf(s)) !== void 0); ) u += r + t[++h], f = !0;
    h !== o && a.push(s), n.push(u), h++;
  }
  if (h === o && n.push(t[o]), f) {
    const d = n.join("$$lit$$");
    (t = Vu.get(d)) === void 0 && (n.raw = n, Vu.set(d, t = n)), i = a;
  }
  return e(t, ...i);
}, ju = _f(c);
var yf = Object.defineProperty, wf = Object.getOwnPropertyDescriptor, zi = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? wf(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && yf(t, i, r), r;
};
function Jn(e) {
  return e ? e.assignedNodes({ flatten: !0 }).length > 0 : !1;
}
let Ee = class extends _ {
  constructor() {
    super(...arguments), this.headline = null, this._headlineVariantTag = "h5", this._headlineSlotHasContent = !1, this._headlineSlotChanged = (e) => {
      this._headlineSlotHasContent = Jn(e.target);
    }, this._headerSlotHasContent = !1, this._headerSlotChanged = (e) => {
      this._headerSlotHasContent = Jn(e.target);
    }, this._headerActionsSlotHasContent = !1, this._headerActionsSlotChanged = (e) => {
      this._headerActionsSlotHasContent = Jn(e.target);
    };
  }
  set headlineVariant(e) {
    this._headlineVariantTag = e;
  }
  get headlineVariant() {
    return this._headlineVariantTag;
  }
  /**
   * Renders a header with the `header`-slot, `header-actions`-slot, headline and `headline`-slot within
   * @returns {TemplateResult}
   * @protected
   * @method
   */
  renderHeader() {
    return ju`<div
      id="header"
      class="uui-text"
      style=${this._headerSlotHasContent || this._headlineSlotHasContent || this._headerActionsSlotHasContent || this.headline !== null ? "" : "display: none"}>
      <${Bu(this._headlineVariantTag)}
        id="headline"
        class="uui-h5"
        style=${this._headlineSlotHasContent || this.headline !== null ? "" : "display: none"}>
        ${this.headline}
        <slot name="headline" @slotchange=${this._headlineSlotChanged}></slot>
      </${Bu(this._headlineVariantTag)}>
      <slot name="header" @slotchange=${this._headerSlotChanged}></slot>
      <slot name="header-actions" @slotchange=${this._headerActionsSlotChanged}></slot>
    </div>`;
  }
  render() {
    return ju`
      ${this.renderHeader()}
      <slot></slot>
    `;
  }
};
Ee.styles = [
  Or,
  b`
      :host {
        display: block;
        border: var(--uui-box-border-width, 0) solid
          var(--uui-box-border-color, var(--uui-color-divider-standalone,#e9e9eb));
        box-shadow: var(--uui-box-box-shadow, var(--uui-shadow-depth-1,0 1px 3px rgba(0,0,0,0.12) , 0 1px 2px rgba(0,0,0,0.24)));
        border-radius: var(--uui-box-border-radius, var(--uui-border-radius,3px));
        background-color: var(--uui-color-surface,#fff);
      }

      #header {
        display: flex;
        align-items: center;
        column-gap: var(--uui-size-space-5,18px);
        border-bottom: 1px solid var(--uui-color-divider-standalone,#e9e9eb);
        padding: var(
          --uui-box-header-padding,
          var(--uui-size-space-4,12px) var(--uui-size-space-5,18px)
        );
      }

      slot:not([name]) {
        display: block;
        padding: var(--uui-box-default-padding, var(--uui-size-space-5,18px));
      }

      slot[name='header-actions'] {
        display: block;
        margin-left: auto;
      }
    `
];
zi([
  l({ type: String })
], Ee.prototype, "headline", 2);
zi([
  l({ attribute: "headline-variant" })
], Ee.prototype, "headlineVariant", 1);
zi([
  w()
], Ee.prototype, "_headlineVariantTag", 2);
zi([
  w()
], Ee.prototype, "_headlineSlotHasContent", 2);
zi([
  w()
], Ee.prototype, "_headerSlotHasContent", 2);
zi([
  w()
], Ee.prototype, "_headerActionsSlotHasContent", 2);
Ee = zi([
  g("uui-box")
], Ee);
var xf = Object.defineProperty, $f = Object.getOwnPropertyDescriptor, Nl = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? $f(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && xf(t, i, r), r;
};
let br = class extends _ {
  constructor() {
    super(...arguments), this.lastItem = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "listitem");
  }
  renderLinkAndSeparator() {
    const e = this.href ? c`<a id="link" href=${this.href}><slot></slot></a>` : c`<span id="link"><slot></slot></span>`;
    return c`${e}<span part="separator"></span>`;
  }
  renderCurrent() {
    return c`<span id="last-item"><slot></slot></span>`;
  }
  render() {
    return c`${this.lastItem ? this.renderCurrent() : this.renderLinkAndSeparator()}`;
  }
};
br.styles = [
  b`
      :host {
        font-size: var(--uui-type-small-size,12px);
        color: currentColor;
      }

      a,
      a:visited {
        color: currentColor;
      }
      a:hover {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      a:focus {
        color: var(--uui-color-focus,#3879ff);
      }

      [part='separator']::after {
        content: '/';
        speak: never;
        position: relative;
        top: 1px;
        margin: -3px 1px 0;
        color: var(--uui-color-border,#d8d7d9);
      }

      #link,
      #last-item {
        padding: 0 4px;
        max-width: 150px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `
];
Nl([
  l()
], br.prototype, "href", 2);
Nl([
  l({ type: Boolean, attribute: "last-item" })
], br.prototype, "lastItem", 2);
br = Nl([
  g("uui-breadcrumb-item")
], br);
var kf = Object.defineProperty, Cf = Object.getOwnPropertyDescriptor, hh = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Cf(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && kf(t, i, r), r;
};
let Ns = class extends _ {
  elementIsBreadcrumbItem(e) {
    return e instanceof br;
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("aria-label", "breadcrumb"), this.setAttribute("role", "navigation");
  }
  handleSlotChange() {
    if (this.slotNodes.length > 0) {
      const e = this.slotNodes[this.slotNodes.length - 1];
      e.setAttribute("aria-current", "page"), this.elementIsBreadcrumbItem(e) && (e.lastItem = !0);
    }
  }
  render() {
    return c`<ol id="breadcrumbs-list">
      <slot @slotchange=${this.handleSlotChange}></slot>
    </ol>`;
  }
};
Ns.styles = [
  b`
      :host {
        display: flex;
      }

      #breadcrumbs-list {
        display: flex;
        list-style-type: decimal;
        margin-block-start: 0em;
        margin-block-end: 0em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 0px;
      }
    `
];
hh([
  ri({
    flatten: !0,
    selector: "uui-breadcrumb-item, [uui-breadcrumb-item], [role=listitem]"
  })
], Ns.prototype, "slotNodes", 2);
Ns = hh([
  g("uui-breadcrumbs")
], Ns);
const Ef = b`
  @keyframes uui-blink {
    0%,
    100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }
`, Pf = ii("uui-blink 0.9s infinite both"), Sf = b`
  @keyframes pulse {
    0% {
      -webkit-transform: translate(-50%, -50%) scale(0.2);
      transform: translate(-50%, -50%) scale(0.2);
      opacity: 0.9;
    }
    80% {
      -webkit-transform: translate(-50%, -50%) scale(1.2);
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0;
    }
    100% {
      -webkit-transform: translate(-50%, -50%) scale(2.2);
      transform: translate(-50%, -50%) scale(2.2);
      opacity: 0;
    }
  }
`;
ii(
  "pulse 0.8s ease-in-out infinite both"
);
const On = b`
  @keyframes uui-horizontal-shake {
    10%,
    90% {
      transform: translateX(-1px);
    }

    20%,
    80% {
      transform: translateX(1px);
    }

    30%,
    50%,
    70% {
      transform: translateX(-2px);
    }

    40%,
    60% {
      transform: translateX(2px);
    }
  }
`, In = ii(
  "uui-horizontal-shake 600ms ease backwards"
);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Lt = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4 }, Mr = (e) => (...t) => ({ _$litDirective$: e, values: t });
let Tr = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, i, o) {
    this._$Ct = t, this._$AM = i, this._$Ci = o;
  }
  _$AS(t, i) {
    return this.update(t, i);
  }
  update(t, i) {
    return this.render(...i);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dh = "important", Af = " !" + dh, Pe = Mr(class extends Tr {
  constructor(e) {
    var t;
    if (super(e), e.type !== Lt.ATTRIBUTE || e.name !== "style" || ((t = e.strings) == null ? void 0 : t.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(e) {
    return Object.keys(e).reduce((t, i) => {
      const o = e[i];
      return o == null ? t : t + `${i = i.includes("-") ? i : i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${o};`;
    }, "");
  }
  update(e, [t]) {
    const { style: i } = e.element;
    if (this.ft === void 0) return this.ft = new Set(Object.keys(t)), this.render(t);
    for (const o of this.ft) t[o] == null && (this.ft.delete(o), o.includes("-") ? i.removeProperty(o) : i[o] = null);
    for (const o in t) {
      const r = t[o];
      if (r != null) {
        this.ft.add(o);
        const s = typeof r == "string" && r.endsWith(Af);
        o.includes("-") || s ? i.setProperty(o, s ? r.slice(0, -11) : r, s ? dh : "") : i[o] = r;
      }
    }
    return bt;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k = (e) => e ?? S;
class Ea extends L {
  constructor(t, i = {}) {
    super(t, {
      bubbles: !0,
      composed: !0,
      ...i
    });
  }
}
Ea.CLICK = "click";
var Of = Object.defineProperty, If = Object.getOwnPropertyDescriptor, ph = (e) => {
  throw TypeError(e);
}, Mi = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? If(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Of(t, i, r), r;
}, Uf = (e, t, i) => t.has(e) || ph("Cannot " + i), zf = (e, t, i) => t.has(e) ? ph("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Hs = (e, t, i) => (Uf(e, t, "access private method"), i), Qi, Hl, fh, vh;
let Se = class extends _ {
  constructor() {
    super(...arguments), zf(this, Qi), this._position = 0, this.vertical = !1;
  }
  _onMouseMove(e) {
    this._position = (this.vertical ? e.offsetY : e.offsetX) - 5;
  }
  _handleClick(e) {
    var t, i;
    e.preventDefault(), e.stopImmediatePropagation(), (i = (t = e.target) == null ? void 0 : t.blur) == null || i.call(t), this.dispatchEvent(
      new Ea(Ea.CLICK)
    );
  }
  render() {
    return this.href ? Hs(this, Qi, fh).call(this) : Hs(this, Qi, vh).call(this);
  }
};
Qi = /* @__PURE__ */ new WeakSet();
Hl = function() {
  return c`
      <div
        id="plus"
        style=${Pe({
    left: this.vertical ? "" : this._position + "px",
    top: this.vertical ? this._position + "px" : ""
  })}>
        <svg
          id="plus-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512">
          <path
            d="M420.592 214.291H296.104V89.804h-83.102v124.487H88.518v83.104h124.484v124.488h83.102V297.395h124.488z" />
        </svg>
      </div>
    `;
};
fh = function() {
  return c`<a
      id="button-wrapper"
      @mousemove=${this._onMouseMove}
      href=${k(this.href)}
      target=${k(this.target || void 0)}
      rel=${k(
    this.rel || k(
      this.target === "_blank" ? "noopener noreferrer" : void 0
    )
  )}
      aria-label=${this.label ? this.label : "create new element"}>
      ${Hs(this, Qi, Hl).call(this)}
    </a>`;
};
vh = function() {
  return c`
      <button
        id="button-wrapper"
        @mousemove=${this._onMouseMove}
        @click=${this._handleClick}
        aria-label=${this.label ? this.label : "create new element"}>
        ${Hs(this, Qi, Hl).call(this)}
      </button>
    `;
};
Se.styles = [
  Ef,
  b`
      :host {
        display: flex;
        position: relative;
        z-index: 1;
      }

      :host(:not([vertical])) {
        height: 20px;
        width: 100%;
        margin: -10px 0;
      }

      :host([vertical]) {
        height: 100%;
        width: 20px;
        margin: 0 -10px;
      }

      #button-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        z-index: 1;
        outline: 0;
        transition: opacity 0.24s;
        display: inline-flex;
        width: 100%;
        border: none;
        height: 100%;
        padding: 0;

        text-decoration: none;
        background: transparent;
        color: currentColor;

        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;

        opacity: 0;
      }

      :host(:focus) #button-wrapper,
      :host(:focus-within) #button-wrapper,
      :host(:hover) #button-wrapper {
        opacity: 1;
      }

      :host(:focus) #button-wrapper:before,
      :host(:focus-within) #button-wrapper:before,
      :host(:hover) #button-wrapper:before {
        animation: ${Pf};
        background-color: var(--uui-color-interactive-emphasis,#3544b1);
        border-color: var(--uui-color-surface,#fff) !important;
      }

      #button-wrapper:before {
        content: '';
        position: absolute;
        right: 0;
        left: 0;
        height: 2px;
        background-color: transparent;
        border-top: 1px solid transparent;
        border-bottom: 1px solid transparent;
        border-radius: 2px;
        pointer-events: none;
        transition:
          background-color 720ms ease-out,
          border-color 240ms;
      }

      :host(:not([vertical])) #button-wrapper:before {
        top: 50%;
        transform: translateY(-50%);
      }

      :host([vertical]) #button-wrapper:before {
        height: 100%;
        width: 2px;
        left: 50%;
        transform: translateX(-50%);
        border-top: none;
        border-bottom: none;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
      }

      :host(:not([vertical]):not(:hover)) #plus:not(:focus) {
        left: calc(50% - 2px) !important;
      }

      :host([vertical]:not(:hover)) #plus:not(:focus) {
        top: calc(50% - 2px) !important;
      }

      #plus {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
        box-sizing: border-box;
        width: 28px;
        height: 28px;
        border-radius: 3em;
        font-size: 14px;
        border: 2px solid var(--uui-color-interactive-emphasis,#3544b1);
        color: var(--uui-color-interactive-emphasis,#3544b1);
        background-color: var(--uui-color-surface,#fff);

        opacity: 0;
        transform: scale(0);
        transition:
          transform 240ms ease-in,
          opacity 240ms,
          left 100ms linear 150ms,
          top 100ms linear 150ms;
      }
      :host(:focus) #plus,
      :host(:focus-within) #plus,
      :host(:hover) #plus {
        opacity: 1;
        transform: scale(1);
        transition:
          transform 240ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
          opacity 80ms,
          box-shadow 240ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
        box-shadow: 0 0 0 2px var(--uui-color-surface,#fff);
      }

      :host(:not([vertical])) #plus {
        margin-left: -18px;
      }

      :host([vertical]) #plus {
        left: -4px;
        margin-top: -18px;
      }

      #button-wrapper:focus #plus {
        /* TODO: implement focus outline system */
        border: 2px solid var(--uui-color-focus,#3879ff);
        color: var(--uui-color-focus,#3879ff);
      }

      #plus-icon {
        width: 50%;
        fill: currentColor;
      }

      #button-wrapper:active #plus {
        transform: scale(1.1);
      }
    `
];
Mi([
  w()
], Se.prototype, "_position", 2);
Mi([
  l({ type: String })
], Se.prototype, "label", 2);
Mi([
  l({ type: Boolean, reflect: !0 })
], Se.prototype, "vertical", 2);
Mi([
  l({ type: String })
], Se.prototype, "href", 2);
Mi([
  l({ type: String })
], Se.prototype, "target", 2);
Mi([
  l({ type: String })
], Se.prototype, "rel", 2);
Se = Mi([
  g("uui-button-inline-create")
], Se);
class Mf {
  constructor(t, i) {
    this._callback = t, this._timerId = null, this._remaining = null, this._onComplete = () => {
      this._remaining = null, this._callback();
    }, this.setDuration(i);
  }
  setDuration(t) {
    this._duration = t, this._timerId !== null && this.restart();
  }
  /** starts the timer */
  start() {
    this._timerId === null && this.resume();
  }
  /** restarts the timer by setting remaining time to duration. */
  restart() {
    this._remaining = this._duration, this.resume();
  }
  pause() {
    this._timerId !== null && (window.clearTimeout(this._timerId), this._timerId = null, this._remaining !== null && (this._remaining -= Date.now() - this._startTime));
  }
  resume() {
    this._timerId !== null && window.clearTimeout(this._timerId), this._remaining === null && (this._remaining = this._duration), this._startTime = Date.now(), this._timerId = window.setTimeout(this._onComplete, this._remaining);
  }
  destroy() {
    this.pause();
  }
}
const C = (e, t, i = `This element has to be present for ${e.nodeName} to work appropriate.`) => {
  customElements.get(t) || console.warn(
    `%c ${e.nodeName} requires ${t} element to be registered!`,
    "font-weight: bold;",
    i,
    e
  );
}, bh = (e, t) => {
  function i(r) {
    const s = e.getBoundingClientRect(), n = e.ownerDocument.defaultView, a = s.left + n.scrollX, u = s.top + n.scrollY;
    let h;
    if ("TouchEvent" in window && r instanceof TouchEvent)
      h = r.touches[0];
    else if (r instanceof MouseEvent)
      h = r;
    else
      return;
    const f = h.pageX - a, d = h.pageY - u;
    t != null && t.onMove && t.onMove(f, d);
  }
  function o() {
    document.removeEventListener("pointermove", i), document.removeEventListener("pointerup", o), t != null && t.onStop && t.onStop();
  }
  document.addEventListener("pointermove", i, { passive: !0 }), document.addEventListener("pointerup", o), t != null && t.initialEvent && i(t.initialEvent);
}, T = (e, t, i) => Math.min(Math.max(e, t), i), Ru = (e, t, i) => i + t - e, Tf = (e, t, i) => {
  let o = e;
  for (; o !== null; ) {
    const r = o instanceof HTMLElement && o.hasAttribute(t) && o.getAttribute(t) === i, s = o.querySelector(`[${t}="${i}"]`) !== null;
    if (r)
      return o;
    if (s)
      return o.querySelector(
        `[${t}="${i}"]`
      );
    o = o.parentElement || o.parentNode || o.host || null;
  }
  return null;
};
function Df(e) {
  return e ? e.assignedNodes({ flatten: !0 }).length > 0 : !1;
}
y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`;
y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>`;
y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>`;
y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>`;
const Un = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>`;
y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>`;
y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>`;
y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m2 22 1-1h3l9-9" /><path d="M3 21v-3l9-9" /><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" /></svg>`;
y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" /><path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" /><path d="M15 2v5h5" /></svg>`;
const Lf = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>`;
y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>`;
y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>`;
y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>`;
y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>`;
y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /><path d="M2 10h20" /></svg>`;
y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`;
y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>`;
y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>`;
const Nf = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>`;
y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="4" height="16" x="6" y="4" /><rect width="4" height="16" x="14" y="4" /></svg>`;
const Hf = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>`;
y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>`;
const Bl = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>`;
y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>`;
const Bf = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>`;
y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>`;
const Vf = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>`;
y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>`;
const jf = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></svg>`, Rf = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg>`;
y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2" /><path d="M15 16v-2" /><path d="M8 9h2" /><path d="M20 9h2" /><path d="M17.8 11.8 19 13" /><path d="M15 9h0" /><path d="M17.8 6.2 19 5" /><path d="m3 21 9-9" /><path d="M12.2 6.2 11 5" /></svg>`;
const Ff = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`;
var Wf = Object.defineProperty, Gf = Object.getOwnPropertyDescriptor, gh = (e) => {
  throw TypeError(e);
}, Bt = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Gf(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Wf(t, i, r), r;
}, mh = (e, t, i) => t.has(e) || gh("Cannot " + i), qf = (e, t, i) => (mh(e, t, "read from private field"), t.get(e)), Kf = (e, t, i) => t.has(e) ? gh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Yf = (e, t, i, o) => (mh(e, t, "write to private field"), t.set(e, i), i), vs;
let ct = class extends re(
  ie("", df(_))
) {
  constructor() {
    super(), this.type = "button", this.disabled = !1, this.look = "default", this.color = "default", this.compact = !1, this.state = void 0, Kf(this, vs), this.addEventListener("click", this._onHostClick);
  }
  getFormElement() {
    return this._button;
  }
  async focus() {
    await this.updateComplete, this._button.focus();
  }
  async blur() {
    await this.updateComplete, this._button.blur();
  }
  async click() {
    await this.updateComplete, this._button.click();
  }
  _onHostClick(e) {
    var t;
    if (this.disabled) {
      e.preventDefault(), e.stopImmediatePropagation();
      return;
    }
    if ((t = this._internals) != null && t.form)
      switch (this.type) {
        case "reset":
          this._internals.form.reset();
          break;
        case "button":
          break;
        default:
          this._internals.form.requestSubmit ? this._internals.form.requestSubmit() : this._internals.form.dispatchEvent(new SubmitEvent("submit"));
          break;
      }
    this._togglePopover();
  }
  // Reset the state after 2sec if it is 'success' or 'failed'.
  updated(e) {
    super.updated(e), e.has("state") && (clearTimeout(qf(this, vs)), (this.state === "success" || this.state === "failed") && Yf(this, vs, setTimeout(
      () => this.state = void 0,
      2e3
    )));
  }
  renderState() {
    let e;
    switch (this.state) {
      case "waiting":
        C(this, "uui-loader-circle"), e = c`<uui-loader-circle id="loader"></uui-loader-circle>`;
        break;
      case "success":
        C(this, "uui-icon"), e = c`<uui-icon
          name="check"
          .fallback=${Un.strings[0]}></uui-icon>`;
        break;
      case "failed":
        C(this, "uui-icon"), e = c`<uui-icon
          name="wrong"
          .fallback=${Ff.strings[0]}></uui-icon>`;
        break;
      default:
        return S;
    }
    return c`<div id="state">${e}</div>`;
  }
  render() {
    return this.href ? c`
          <a
            id="button"
            aria-label=${k(this.label)}
            href=${k(this.disabled ? void 0 : this.href)}
            target=${k(this.target || void 0)}
            rel=${k(
      this.rel || k(
        this.target === "_blank" ? "noopener noreferrer" : void 0
      )
    )}>
            ${this.renderState()} ${this.renderLabel()}
            <slot name="extra"></slot>
          </a>
        ` : c`
          <button
            id="button"
            type=${this.type}
            ?disabled=${this.disabled}
            aria-label=${k(this.label)}>
            ${this.renderState()} ${this.renderLabel()}
            <slot name="extra"></slot>
          </button>
        `;
  }
};
vs = /* @__PURE__ */ new WeakMap();
ct.styles = [
  On,
  b`
      :host {
        position: relative;
        display: inline-flex;
        margin-left: calc(var(--uui-button-merge-border-left, 0) * -1px);
        --uui-button-padding-left-factor: 3;
        --uui-button-padding-right-factor: 3;
        --uui-button-padding-top-factor: 1;
        --uui-button-padding-bottom-factor: 1;

        min-height: var(--uui-button-height, var(--uui-size-11,33px));
        max-height: 100%;
        cursor: pointer;

        text-align: center;
        font-size: var(--uui-button-font-size, inherit);
        font-weight: var(--uui-button-font-weight, 500);
        transition:
          background-color 80ms,
          border-color 80ms,
          color 80ms;
      }

      :host([compact]) {
        --uui-button-padding-left-factor: 1;
        --uui-button-padding-right-factor: 1;
        --uui-button-padding-top-factor: 0;
        --uui-button-padding-bottom-factor: 0;
      }

      .label {
        line-height: 1; /** needed to reset 'a > span' */
        transition: opacity 120ms;
        display: flex;
        gap: var(--uui-size-1,3px);
        align-items: center;
      }

      :host([state]:not([state=''])) .label {
        opacity: 0;
      }

      #state {
        position: absolute;
        opacity: 0;
        animation-name: fadeIn;
        animation-delay: 40ms;
        animation-duration: 360ms;
        animation-fill-mode: forwards;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        align-items: center;
      }

      #button {
        width: 100%;
        background-color: transparent;
        color: inherit;
        font-size: inherit;
        border-radius: inherit;
        font-family: inherit;
        font-weight: inherit;
        text-align: inherit;
        border: none;
        cursor: inherit;

        display: inline-flex;
        align-items: center;
        justify-content: var(--uui-button-content-align, center);

        /* for anchor tag: */
        text-decoration: none;
        color: currentColor;
        line-height: inherit;

        border-width: var(--uui-button-border-width, 1px);
        border-style: solid;
        border-radius: var(
          --uui-button-border-radius,
          var(--uui-border-radius,3px)
        );
        cursor: pointer;

        padding: calc(var(--uui-size-2,6px) * var(--uui-button-padding-top-factor))
          calc(var(--uui-size-2,6px) * var(--uui-button-padding-right-factor))
          calc(var(--uui-size-2,6px) * var(--uui-button-padding-bottom-factor))
          calc(var(--uui-size-2,6px) * var(--uui-button-padding-left-factor));

        box-shadow: none;

        transition: var(--uui-button-transition, none);
      }

      #button:focus-visible {
        outline: 2px solid var(--color-emphasis);
      }

      button[disabled]:active,
      a:not([href]):active {
        animation: ${In};
      }

      /* ANIMATIONS */
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      @keyframes fadeOut {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }

      #icon-check,
      #icon-wrong {
        display: grid;
        place-items: center;
        width: 1.5em;
      }

      #loader {
        font-size: 1.5em;
      }
      :host([look]:not([look=''])) #loader {
        color: inherit;
      }

      /* edge case for default color */
      :host(:not([color]):not([look='primary'])),
      :host([color='']:not([look='primary'])),
      :host([color='default']:not([look='primary'])) {
        --uui-button-contrast-hover: var(--uui-color-default-emphasis,#3544b1);
      }

      :host([color='warning'][look='outline']) #button,
      :host([color='warning'][look='placeholder']) #button {
        --uui-button-contrast-hover: var(--color-standalone);
      }

      /** Button color attribute: */
      #button {
        --color: var(--uui-color-default,#1b264f);
        --color-standalone: var(--uui-color-default-standalone,rgb(
    28,
    35,
    59
  ));
        --color-emphasis: var(--uui-color-default-emphasis,#3544b1);
        --color-contrast: var(--uui-color-default-contrast,#fff);
      }
      :host([color='positive']) #button {
        --color: var(--uui-color-positive,#0b8152);
        --color-standalone: var(--uui-color-positive-standalone,rgb(
    10,
    115,
    73
  ));
        --color-emphasis: var(--uui-color-positive-emphasis,rgb(
    13,
    155,
    98
  ));
        --color-contrast: var(--uui-color-positive-contrast,#fff);
      }
      :host([color='warning']) #button {
        --color: var(--uui-color-warning,#fbd142);
        --color-standalone: var(--uui-color-warning-standalone,#a17700);
        --color-emphasis: var(--uui-color-warning-emphasis,rgb(
    251,
    224,
    101
  ));
        --color-contrast: var(--uui-color-warning-contrast,#000);
      }
      :host([color='danger']) #button {
        --color: var(--uui-color-danger,#d42054);
        --color-standalone: var(--uui-color-danger-standalone,rgb(
    191,
    33,
    78
  ));
        --color-emphasis: var(--uui-color-danger-emphasis,rgb(
    226,
    60,
    107
  ));
        --color-contrast: var(--uui-color-danger-contrast,white);
      }
      :host([color='invalid']) #button {
        --color: var(--uui-color-invalid,#d42054);
        --color-standalone: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
        --color-emphasis: var(--uui-color-invalid-emphasis,rgb(
    226,
    60,
    107
  ));
        --color-contrast: var(--uui-color-invalid-contrast,white);
      }
      :host([disabled]) #button {
        --color: var(--uui-color-disabled,#f3f3f5);
        --color-standalone: var(--uui-color-disabled-contrast,#c4c4c4);
        --color-emphasis: var(--uui-color-disabled,#f3f3f5);
        --color-contrast: var(--uui-color-disabled-contrast,#c4c4c4);

        cursor: default;
      }

      /** Button look attribute: */
      /* DEFAULT */
      #button {
        background-color: var(--uui-button-background-color, transparent);
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(--uui-button-border-color, transparent);
      }
      :host(:not([disabled]):hover) #button {
        background-color: var(
          --uui-button-background-color-hover,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover, transparent);
      }
      :host([disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          transparent
        );
        color: var(--uui-button-contrast-disabled, var(--color-contrast));
        border-color: var(--uui-button-border-color-disabled, transparent);
      }

      /* PRIMARY */
      :host([look='primary']) #button {
        background-color: var(--uui-button-background-color, var(--color));
        color: var(--uui-button-contrast, var(--color-contrast));
        border-color: var(--uui-button-border-color, transparent);

        /* special for primary: */
        font-weight: var(--uui-button-font-weight, 700);
      }

      :host([look='primary']:hover) #button {
        background-color: var(
          --uui-button-background-color-hover,
          var(--color-emphasis)
        );
        color: var(--uui-button-contrast-hover, var(--color-contrast));
        border-color: var(--uui-button-border-color-hover, transparent);
      }

      /* special outline offset tof primary style so you can see the outline */
      :host([look='primary']) #button:focus-visible {
        outline-offset: 2px;
      }

      :host([look='primary'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          var(--color)
        );
        color: var(--uui-button-contrast-disabled, var(--color-contrast));
        border-color: var(--uui-button-border-color-disabled, var(--color));
      }
      /* SECONDARY */
      :host([look='secondary']) #button {
        background-color: var(
          --uui-button-background-color,
          var(--uui-color-surface-alt,#f3f3f5)
        );
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(--uui-button-border-color, transparent);

        /* special for secondary: */
        font-weight: var(--uui-button-font-weight, 700);
      }
      :host([look='secondary']:hover) #button {
        background-color: var(
          --uui-button-background-color-hover,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover, transparent);
      }
      :host([look='secondary'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          var(--color)
        );
        color: var(--uui-button-contrast-disabled, var(--color-contrast));
        border-color: var(--uui-button-border-color-disabled, var(--color));
      }

      /* OUTLINE */
      :host([look='outline']) #button {
        background-color: var(--uui-button-background-color, transparent);
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(
          --uui-button-border-color,
          var(--uui-color-border-standalone,#c2c2c2)
        );

        /* special for outline: */
        font-weight: var(--uui-button-font-weight, 700);
      }
      :host([look='outline']:not([disabled]):hover) #button {
        background-color: var(--uui-button-background-color-hover, transparent);
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover);
      }
      :host([look='outline'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          transparent
        );
        color: var(--uui-button-contrast-disabled, var(--color-standalone));
        border-color: var(
          --uui-button-border-color-disabled,
          var(--color-standalone)
        );
      }

      /* PLACEHOLDER */
      :host([look='placeholder']) #button {
        border-style: dashed;
        background-color: var(--uui-button-background-color, transparent);
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(
          --uui-button-border-color,
          var(--uui-color-border-standalone,#c2c2c2)
        );
      }
      :host([look='placeholder']:not([disabled]):hover) #button {
        background-color: var(--uui-button-background-color-hover, transparent);
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover);
      }
      :host([look='placeholder'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          var(--color)
        );
        color: var(--uui-button-contrast-disabled, var(--color-standalone));
        border-color: var(
          --uui-button-border-color-disabled,
          var(--color-standalone)
        );
      }
    `
];
Bt([
  l({ type: String, reflect: !0 })
], ct.prototype, "type", 2);
Bt([
  l({ type: Boolean, reflect: !0 })
], ct.prototype, "disabled", 2);
Bt([
  l({ reflect: !0 })
], ct.prototype, "look", 2);
Bt([
  l({ reflect: !0 })
], ct.prototype, "color", 2);
Bt([
  l({ type: Boolean, reflect: !0 })
], ct.prototype, "compact", 2);
Bt([
  l({ type: String, reflect: !0 })
], ct.prototype, "state", 2);
Bt([
  l({ type: String })
], ct.prototype, "href", 2);
Bt([
  l({ type: String })
], ct.prototype, "target", 2);
Bt([
  l({ type: String })
], ct.prototype, "rel", 2);
Bt([
  U("#button")
], ct.prototype, "_button", 2);
ct = Bt([
  g("uui-button")
], ct);
class Yi extends L {
  constructor() {
    super(...arguments), this.text = null;
  }
}
Yi.COPIED = "copied";
Yi.COPYING = "copying";
var Xf = Object.defineProperty, Zf = Object.getOwnPropertyDescriptor, _h = (e) => {
  throw TypeError(e);
}, zn = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Zf(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Xf(t, i, r), r;
}, yh = (e, t, i) => t.has(e) || _h("Cannot " + i), Qn = (e, t, i) => (yh(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Fu = (e, t, i) => t.has(e) ? _h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Jf = (e, t, i, o) => (yh(e, t, "write to private field"), t.set(e, i), i), Jr, Pa;
let gr = class extends ct {
  constructor() {
    super(), this.text = "", this.copyFrom = "", this.animationStateDelay = 250, Fu(this, Jr), Fu(this, Pa, async () => {
      this.state = "waiting";
      let e = this.text;
      if (this.copyFrom) {
        const i = document.getElementById(this.copyFrom);
        if (i)
          "value" in i ? e = i.value : e = i.textContent ?? i.innerText ?? "";
        else {
          console.error(`Element ID ${this.copyFrom} not found to copy from`), this.state = "failed";
          return;
        }
      }
      const t = new Yi(Yi.COPYING);
      t.text = e, this.dispatchEvent(t), t.text != null && (e = t.text);
      try {
        await navigator.clipboard.writeText(e);
        const i = new Yi(Yi.COPIED);
        i.text = e, this.dispatchEvent(i), Jf(this, Jr, setTimeout(() => {
          this.state = "success";
        }, this.animationStateDelay));
      } catch (i) {
        this.state = "failed", console.error("Error copying to clipboard", i);
      }
    }), C(this, "uui-icon"), this.addEventListener("click", Qn(this, Pa));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), Qn(this, Jr) && clearTimeout(Qn(this, Jr));
  }
  renderLabel() {
    return c`
      <slot class="label">
        <uui-icon name="copy"></uui-icon>
      </slot>
    `;
  }
};
Jr = /* @__PURE__ */ new WeakMap();
Pa = /* @__PURE__ */ new WeakMap();
gr.styles = ct.styles;
zn([
  l({ type: String })
], gr.prototype, "text", 2);
zn([
  l({ type: String, attribute: "copy-from" })
], gr.prototype, "copyFrom", 2);
zn([
  l({ type: Number, attribute: "animation-state-delay" })
], gr.prototype, "animationStateDelay", 2);
gr = zn([
  g("uui-button-copy-text")
], gr);
class Qr extends L {
}
Qr.OPEN = "open";
var Qf = Object.defineProperty, tv = Object.getOwnPropertyDescriptor, Dr = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? tv(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Qf(t, i, r), r;
};
let nt = class extends An(
  Ur(_)
) {
  constructor() {
    super(...arguments), this.disabled = !1, this.error = !1;
  }
  // This is deprecated - use href instead
  handleOpenClick(e) {
    this.disabled || (e.stopPropagation(), this.dispatchEvent(new Qr(Qr.OPEN)));
  }
  // This is deprecated - use href instead
  handleOpenKeydown(e) {
    this.disabled || e.key === "Enter" && (e.preventDefault(), e.stopPropagation(), this.dispatchEvent(new Qr(Qr.OPEN)));
  }
  render() {
    return c`<slot id="open-part"></slot>
      <div id="select-border"></div>`;
  }
};
nt.styles = [
  Or,
  b`
      :host {
        position: relative;
        display: flex;
        width: 100%;
        justify-content: center;
        box-sizing: border-box;
        box-shadow: var(--uui-shadow-depth-1,0 1px 3px rgba(0,0,0,0.12) , 0 1px 2px rgba(0,0,0,0.24));
        border-radius: var(--uui-border-radius,3px);
        min-height: var(--uui-layout-medium);
        background-color: var(--uui-color-surface,#fff);
        --uui-card-border-width: 3px;
        transition: box-shadow 100ms ease-out;
      }

      :host([selectable]:focus-visible) {
        outline-color: var(--uui-color-focus,#3879ff);
        outline-width: var(--uui-card-border-width);
        outline-style: solid;
        outline-offset: var(--uui-card-border-width);
      }

      :host() * {
        /* TODO: implement globally shared outline style */
        outline-color: var(--uui-color-focus,#3879ff);
      }

      :host([error])::before {
        content: '';
        position: absolute;
        pointer-events: none;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        box-sizing: border-box;
        border: var(--uui-card-border-width) solid var(--uui-color-invalid,#d42054);
        border-radius: var(--uui-border-radius,3px);
      }

      button {
        font-size: inherit;
        font-family: inherit;
        border: 0;
        padding: 0;
        background-color: transparent;
        text-align: left;
        color: var(--uui-color-text,#060606);
      }

      a {
        text-decoration: none;
        color: inherit;
        line-height: initial;
      }

      button:focus,
      a:focus {
        outline-color: var(--uui-color-focus,#3879ff);
        outline-width: var(--uui-card-border-width);
        outline-style: solid;
        outline-offset: var(--uui-card-border-width);
        border-radius: var(--uui-border-radius,3px);
      }

      :host([selectable]) {
        cursor: pointer;
      }
      :host([selectable]) #select-border {
        position: absolute;
        z-index: 2;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        pointer-events: none;
        opacity: 0;
        transition: opacity 120ms;
      }
      :host([selectable]) #select-border::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 2px solid var(--uui-color-selected,#3544b1);
        border-radius: calc(var(--uui-border-radius,3px) + 2px);
        box-shadow:
          0 0 4px 0 var(--uui-color-selected,#3544b1),
          inset 0 0 2px 0 var(--uui-color-selected,#3544b1);
      }
      :host([selected]) #select-border {
        opacity: 1;
      }
      :host([selectable]:not([selected]):hover) #select-border {
        opacity: 0.33;
      }
      :host([selectable][selected]:hover) #select-border {
        opacity: 0.8;
      }

      :host([selectable]:not([selected])) #open-part:hover + #select-border {
        opacity: 0;
      }
      :host([selectable][selected]) #open-part:hover + #select-border {
        opacity: 1;
      }

      :host([selectable]:not([selected]):hover) #select-border::after {
        animation: not-selected--hover 1.2s infinite;
      }
      @keyframes not-selected--hover {
        0%,
        100% {
          opacity: 0.66;
        }
        50% {
          opacity: 1;
        }
      }

      :host([selectable][selected]:hover) #select-border::after {
        animation: selected--hover 1.4s infinite;
      }
      @keyframes selected--hover {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.66;
        }
      }
      :host([selectable]) #open-part:hover + #select-border::after {
        animation: none;
      }

      :host([select-only]) *,
      :host([select-only]) ::slotted(*) {
        pointer-events: none;
      }

      :host([disabled]) {
        background: var(--uui-color-disabled,#f3f3f5);
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
    `
];
Dr([
  l({ type: Boolean, reflect: !0, attribute: "disabled" })
], nt.prototype, "disabled", 2);
Dr([
  l({ type: Boolean, reflect: !0 })
], nt.prototype, "error", 2);
Dr([
  l({ type: String })
], nt.prototype, "href", 2);
Dr([
  l({ type: String })
], nt.prototype, "target", 2);
Dr([
  l({ type: String })
], nt.prototype, "rel", 2);
nt = Dr([
  g("uui-card")
], nt);
var ev = Object.defineProperty, iv = Object.getOwnPropertyDescriptor, wh = (e) => {
  throw TypeError(e);
}, Mn = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? iv(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && ev(t, i, r), r;
}, rv = (e, t, i) => t.has(e) || wh("Cannot " + i), ov = (e, t, i) => t.has(e) ? wh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), co = (e, t, i) => (rv(e, t, "access private method"), i), mi, xh, $h, kh, Vl;
let mr = class extends nt {
  constructor() {
    super(...arguments), ov(this, mi), this.name = "";
  }
  get background() {
  }
  set background(e) {
    this.style.backgroundColor = e ?? "";
  }
  render() {
    return c`
      ${co(this, mi, kh).call(this)}
      ${this.href ? co(this, mi, $h).call(this) : co(this, mi, xh).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>

      <slot name="tag"></slot>
      <slot name="actions"></slot>
    `;
  }
};
mi = /* @__PURE__ */ new WeakSet();
xh = function() {
  return c`
      <button
        id="open-part"
        class="uui-text"
        tabindex=${this.disabled ? S : "0"}
        @click=${this.handleOpenClick}
        @keydown=${this.handleOpenKeydown}>
        ${co(this, mi, Vl).call(this)}
      </button>
    `;
};
$h = function() {
  return c`
      <a
        id="open-part"
        class="uui-text"
        tabindex=${this.disabled ? S : "0"}
        href=${k(this.disabled ? void 0 : this.href)}
        target=${k(this.target || void 0)}
        rel=${k(
    this.rel || k(
      this.target === "_blank" ? "noopener noreferrer" : void 0
    )
  )}>
        ${co(this, mi, Vl).call(this)}
      </a>
    `;
};
kh = function() {
  return c`<div id="portrait">
      <slot></slot>
    </div> `;
};
Vl = function() {
  return c`
      <div id="content">
        <span title="${this.name}" id="name">${this.name}</span>
        <small title="${this.description}">${this.description}<slot name="description"></slot></small>
      </div></div>
    `;
};
mr.styles = [
  ...nt.styles,
  b`
      :host {
        background-color: var(--uui-color-surface-alt,#f3f3f5);
      }

      slot[name='tag'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;
        z-index: 2;
      }

      slot[name='actions'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;
        z-index: 2;
        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:focus) slot[name='actions'],
      :host(:focus-within) slot[name='actions'],
      :host(:hover) slot[name='actions'] {
        opacity: 1;
      }

      #portrait {
        display: flex;
        justify-content: center;
        min-height: 150px;
        max-height: 150px;
        width: 100%;
        margin-bottom: var(--uui-size-layout-2,30px);
      }

      slot:not([name])::slotted(*) {
        align-self: center;
        border-radius: var(--uui-border-radius,3px);
        object-fit: cover;
        max-width: 100%;
        max-height: 100%;
        font-size: var(--uui-size-8,24px);
      }

      #open-part {
        position: absolute;
        z-index: 1;
        inset: 0;
        color: var(--uui-color-interactive,#1b264f);
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }

      :host([disabled]) #open-part {
        pointer-events: none;
        background: var(--uui-color-disabled,#f3f3f5);
        color: var(--uui-color-contrast-disabled);
      }

      #open-part:hover {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      #open-part:hover #name {
        text-decoration: underline;
      }
      #open-part #name,
      #open-part small {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow-wrap: anywhere;
      }

      :host([image]:not([image=''])) #open-part {
        transition: opacity 0.5s 0.5s;
        opacity: 0;
      }

      #content {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        font-family: inherit;
        font-size: var(--uui-type-small-size,12px);
        box-sizing: border-box;
        text-align: left;
        word-break: break-word;
        padding-top: var(--uui-size-space-3,9px);
      }

      #content::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        border-top: 1px solid var(--uui-color-divider,#f6f6f7);
        border-radius: 0 0 var(--uui-border-radius,3px) var(--uui-border-radius,3px);
        background-color: var(--uui-color-surface,#fff);
        pointer-events: none;
        opacity: 0.96;
      }

      :host(:focus) slot[name='actions'],
      :host(:focus-within) slot[name='actions'],
      :host(:hover) slot[name='actions'] {
        opacity: 1;
      }

      :host(
          [image]:not([image='']):hover,
          [image]:not([image='']):focus,
          [image]:not([image='']):focus-within,
          [selected][image]:not([image='']),
          [error][image]:not([image=''])
        )
        #open-part {
        opacity: 1;
        transition-duration: 120ms;
        transition-delay: 0s;
      }

      :host([selectable]) #open-part {
        inset: var(--uui-size-space-3,9px) var(--uui-size-space-4,12px);
      }
      :host(:not([selectable])) #content {
        padding: var(--uui-size-space-3,9px) var(--uui-size-space-4,12px);
      }
      :host([selectable]) #content::before {
        inset: calc(var(--uui-size-space-3,9px) * -1)
          calc(var(--uui-size-space-4,12px) * -1);
        top: 0;
      }
    `
];
Mn([
  l({ type: String })
], mr.prototype, "name", 2);
Mn([
  l({ type: String })
], mr.prototype, "description", 2);
Mn([
  l({ type: String, attribute: "background" })
], mr.prototype, "background", 1);
mr = Mn([
  g("uui-card-block-type")
], mr);
var sv = Object.defineProperty, nv = Object.getOwnPropertyDescriptor, Ch = (e) => {
  throw TypeError(e);
}, Tn = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? nv(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && sv(t, i, r), r;
}, av = (e, t, i) => t.has(e) || Ch("Cannot " + i), lv = (e, t, i) => t.has(e) ? Ch("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Bs = (e, t, i) => (av(e, t, "access private method"), i), tr, jl, Eh, Ph;
let _r = class extends nt {
  constructor() {
    super(...arguments), lv(this, tr), this.name = "", this.detail = "", this._iconSlotHasContent = !1, this.fallbackIcon = `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    id="icon">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
  </svg>`;
  }
  _onSlotIconChange(e) {
    this._iconSlotHasContent = e.target.assignedNodes({ flatten: !0 }).length > 0;
  }
  _renderFallbackIcon() {
    return C(this, "uui-icon"), c`<uui-icon .svg="${this.fallbackIcon}"></uui-icon>`;
  }
  renderDetail() {
    return c`<small id="detail"
        >${this.detail}<slot name="detail"></slot></small
      ><slot id="default"></slot>`;
  }
  render() {
    return c`
      ${this.href ? Bs(this, tr, Ph).call(this) : Bs(this, tr, Eh).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>

      <slot name="tag"></slot>
      <slot name="actions"></slot>
    `;
  }
};
tr = /* @__PURE__ */ new WeakSet();
jl = function() {
  return c`
      <span id="content" class="uui-text">
        <span id="item">
          <span id="icon">
            <slot name="icon" @slotchange=${this._onSlotIconChange}></slot>
            ${this._iconSlotHasContent === !1 ? this._renderFallbackIcon() : ""}
          </span>
          <div title="${this.name}" id="name">
            ${this.name}<slot name="name"></slot>
          </div>
        </span>
        ${this.renderDetail()}
      </span>
    `;
};
Eh = function() {
  return c`<button
      id="open-part"
      tabindex=${this.disabled ? S : 0}
      @click=${this.handleOpenClick}
      @keydown=${this.handleOpenKeydown}>
      ${Bs(this, tr, jl).call(this)}
    </button>`;
};
Ph = function() {
  return c`<a
      id="open-part"
      tabindex=${this.disabled ? S : 0}
      href=${k(this.disabled ? void 0 : this.href)}
      target=${k(this.target || void 0)}
      rel=${k(
    this.rel || k(
      this.target === "_blank" ? "noopener noreferrer" : void 0
    )
  )}>
      ${Bs(this, tr, jl).call(this)}
    </a>`;
};
_r.styles = [
  ...nt.styles,
  b`
      :host {
        min-width: 250px;
        flex-direction: column;
        justify-content: space-between;
      }

      slot[name='tag'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;
      }

      slot[name='actions'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;

        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:focus) slot[name='actions'],
      :host(:focus-within) slot[name='actions'],
      :host(:hover) slot[name='actions'] {
        opacity: 1;
      }

      slot:not([name]) {
        display: block;
        margin: var(--uui-size-1,3px);
        margin-top: var(--uui-size-3,9px);
      }

      slot:not([name])::slotted(*) {
        font-size: var(--uui-type-small-size,12px);
        line-height: calc(2 * var(--uui-size-3,9px));
      }

      #open-part {
        display: flex;
        position: relative;
        align-items: center;
        cursor: pointer;
        flex-grow: 1;
        padding: var(--uui-size-space-4,12px) var(--uui-size-space-5,18px);
      }

      #open-part #name {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow-wrap: anywhere;
      }

      #content {
        align-self: stretch;
        display: flex;
        flex-direction: column;
      }

      #item {
        position: relative;
        display: flex;
        align-self: stretch;
        line-height: normal;
        align-items: center;
        margin-top: var(--uui-size-1,3px);
      }

      #icon {
        font-size: 1.2em;
        margin-right: var(--uui-size-1,3px);
      }

      :host([selectable]) #open-part {
        padding: 0;
        margin: var(--uui-size-space-4,12px) var(--uui-size-space-5,18px);
      }

      :host([disabled]) #name {
        pointer-events: none;
      }

      :host(:not([disabled])) #open-part:hover #icon {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      :host(:not([disabled])) #open-part:hover #name {
        text-decoration: underline;
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      :host(:not([disabled])) #open-part:hover #detail {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      :host(:not([disabled])) #open-part:hover #default {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
    `
];
Tn([
  l({ type: String })
], _r.prototype, "name", 2);
Tn([
  l({ type: String })
], _r.prototype, "detail", 2);
Tn([
  w()
], _r.prototype, "_iconSlotHasContent", 2);
_r = Tn([
  g("uui-card-content-node")
], _r);
var uv = Object.defineProperty, cv = Object.getOwnPropertyDescriptor, Sh = (e) => {
  throw TypeError(e);
}, Yo = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? cv(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && uv(t, i, r), r;
}, hv = (e, t, i) => t.has(e) || Sh("Cannot " + i), dv = (e, t, i) => t.has(e) ? Sh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Vs = (e, t, i) => (hv(e, t, "access private method"), i), er, Ah, Oh, Rl;
let Si = class extends nt {
  constructor() {
    super(...arguments), dv(this, er), this.name = "", this.fileExt = "", this.hasPreview = !1;
  }
  connectedCallback() {
    super.connectedCallback(), C(this, "uui-symbol-folder"), C(this, "uui-symbol-file");
  }
  queryPreviews(e) {
    this.hasPreview = e.composedPath()[0].assignedElements({
      flatten: !0
    }).length > 0;
  }
  renderMedia() {
    return this.hasPreview === !0 ? "" : this.fileExt === "" ? c`<uui-symbol-folder id="entity-symbol"></uui-symbol-folder>` : c`<uui-symbol-file
      id="entity-symbol"
      type="${this.fileExt}"></uui-symbol-file>`;
  }
  render() {
    return c` ${this.renderMedia()}
      <slot @slotchange=${this.queryPreviews}></slot>
      ${this.href ? Vs(this, er, Oh).call(this) : Vs(this, er, Ah).call(this)}
      <!-- Select border must be right after .open-part -->
      <div id="select-border"></div>

      <slot name="tag"></slot>
      <slot name="actions"></slot>`;
  }
};
er = /* @__PURE__ */ new WeakSet();
Ah = function() {
  return c`
      <button
        id="open-part"
        tabindex=${this.disabled ? S : "0"}
        @click=${this.handleOpenClick}
        @keydown=${this.handleOpenKeydown}>
        ${Vs(this, er, Rl).call(this)}
      </button>
    `;
};
Oh = function() {
  return c`
      <a
        id="open-part"
        tabindex=${this.disabled ? S : "0"}
        href=${k(this.disabled ? void 0 : this.href)}
        target=${k(this.target || void 0)}
        rel=${k(
    this.rel || k(
      this.target === "_blank" ? "noopener noreferrer" : void 0
    )
  )}>
        ${Vs(this, er, Rl).call(this)}
      </a>
    `;
};
Rl = function() {
  return c`
      <div id="content" class="uui-text">
        <!--
        TODO: Implement info box when pop-out is ready
        -->
        <span id="name" title="${this.name}">${this.name}</span>
        <small id="detail">${this.detail}<slot name="detail"></slot></small>
      </div>
    `;
};
Si.styles = [
  ...nt.styles,
  b`
      #entity-symbol {
        align-self: center;
        width: 60%;
        margin-bottom: var(--uui-size-layout-1,24px);
        padding: var(--uui-size-space-6,24px);
      }

      slot[name='tag'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;
        z-index: 2;
      }

      slot[name='actions'] {
        position: absolute;
        top: var(--uui-size-4,12px);
        right: var(--uui-size-4,12px);
        display: flex;
        justify-content: right;
        z-index: 2;
        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:focus) slot[name='actions'],
      :host(:focus-within) slot[name='actions'],
      :host(:hover) slot[name='actions'] {
        opacity: 1;
      }

      slot:not([name])::slotted(*) {
        align-self: center;
        border-radius: var(--uui-border-radius,3px);
        object-fit: cover;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }

      #open-part {
        position: absolute;
        z-index: 1;
        inset: 0;
        color: var(--uui-color-interactive,#1b264f);
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }

      :host([disabled]) #open-part {
        pointer-events: none;
        color: var(--uui-color-contrast-disabled);
      }

      #open-part:hover {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      #open-part:hover #name {
        text-decoration: underline;
      }

      #open-part #name {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow-wrap: anywhere;
      }

      :host([image]:not([image=''])) #open-part {
        transition: opacity 0.5s 0.5s;
        opacity: 0;
      }

      #content {
        position: relative;
        display: flex;
        width: 100%;
        flex-direction: column;
        font-family: inherit;
        box-sizing: border-box;
        text-align: left;
        word-break: break-word;
        padding-top: var(--uui-size-space-3,9px);
      }

      #content::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        border-top: 1px solid var(--uui-color-divider,#f6f6f7);
        border-radius: 0 0 var(--uui-border-radius,3px) var(--uui-border-radius,3px);
        background-color: var(--uui-color-surface,#fff);
        pointer-events: none;
        opacity: 0.96;
      }

      #detail {
        opacity: 0.6;
      }

      :host(
          [image]:not([image='']):hover,
          [image]:not([image='']):focus,
          [image]:not([image='']):focus-within,
          [selected][image]:not([image='']),
          [error][image]:not([image=''])
        )
        #open-part {
        opacity: 1;
        transition-duration: 120ms;
        transition-delay: 0s;
      }

      :host([selectable]) #open-part {
        inset: var(--uui-size-space-3,9px) var(--uui-size-space-4,12px);
      }
      :host(:not([selectable])) #content {
        padding: var(--uui-size-space-3,9px) var(--uui-size-space-4,12px);
      }
      :host([selectable]) #content::before {
        inset: calc(var(--uui-size-space-3,9px) * -1)
          calc(var(--uui-size-space-4,12px) * -1);
        top: 0;
      }

      /*
      #info-icon {
        margin-right: var(--uui-size-2);
        display: flex;
        height: var(--uui-size-8);
      }
      */
    `
];
Yo([
  l({ type: String })
], Si.prototype, "name", 2);
Yo([
  l({ type: String })
], Si.prototype, "detail", 2);
Yo([
  l({ type: String, attribute: "file-ext" })
], Si.prototype, "fileExt", 2);
Yo([
  w()
], Si.prototype, "hasPreview", 2);
Si = Yo([
  g("uui-card-media")
], Si);
var pv = Object.defineProperty, fv = Object.getOwnPropertyDescriptor, Ih = (e) => {
  throw TypeError(e);
}, Fl = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? fv(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && pv(t, i, r), r;
}, vv = (e, t, i) => t.has(e) || Ih("Cannot " + i), bv = (e, t, i) => t.has(e) ? Ih("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), js = (e, t, i) => (vv(e, t, "access private method"), i), ir, Uh, zh, Wl;
let Co = class extends nt {
  constructor() {
    super(...arguments), bv(this, ir), this.name = "", this._avatarSlotHasContent = !1, this._avatarSlotChanged = (e) => {
      this._avatarSlotHasContent = Df(e.target);
    };
  }
  connectedCallback() {
    super.connectedCallback(), C(this, "uui-avatar");
  }
  render() {
    return c`
      ${this.href ? js(this, ir, zh).call(this) : js(this, ir, Uh).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>
      <slot name="tag"></slot>
      <slot name="actions"></slot>
    `;
  }
};
ir = /* @__PURE__ */ new WeakSet();
Uh = function() {
  return c`<div
      id="open-part"
      tabindex=${this.disabled ? S : "0"}
      @click=${this.handleOpenClick}
      @keydown=${this.handleOpenKeydown}>
      ${js(this, ir, Wl).call(this)}
    </div>`;
};
zh = function() {
  return c`<a
      id="open-part"
      tabindex=${this.disabled ? S : "0"}
      href=${k(this.disabled ? void 0 : this.href)}
      target=${k(this.target || void 0)}
      rel=${k(
    this.rel || k(
      this.target === "_blank" ? "noopener noreferrer" : void 0
    )
  )}>
      ${js(this, ir, Wl).call(this)}
    </a>`;
};
Wl = function() {
  return c`<div id="content">
      ${this._avatarSlotHasContent ? S : c`<uui-avatar
            class="avatar"
            name=${this.name}
            size="m"></uui-avatar>`}
      <slot
        name="avatar"
        class="avatar"
        @slotchange=${this._avatarSlotChanged}></slot>
      <span title="${this.name}">${this.name}</span>
      <slot></slot>
    </div>`;
};
Co.styles = [
  ...nt.styles,
  b`
      :host {
        min-width: 250px;
      }

      slot:not([name])::slotted(*) {
        font-size: var(--uui-type-small-size,12px);
        line-height: var(--uui-size-6,18px);
      }

      ::slotted(*) {
        text-align: center;
      }

      slot[name='tag'] {
        position: absolute;
        top: 6px;
        right: 6px;
        display: flex;
        justify-content: right;
      }

      slot[name='actions'] {
        position: absolute;
        top: var(--uui-size-space-4,12px);
        right: var(--uui-size-space-4,12px);
        display: flex;
        justify-content: right;

        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:focus) slot[name='actions'],
      :host(:focus-within) slot[name='actions'],
      :host(:hover) slot[name='actions'] {
        opacity: 1;
      }

      #open-part {
        cursor: pointer;
        flex-grow: 1;
        padding: var(--uui-size-space-5,18px) var(--uui-size-space-4,12px);
      }

      :host([disabled]) #open-part {
        pointer-events: none;
      }

      #open-part:hover #content {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      #open-part:hover #content > span {
        text-decoration: underline;
      }

      :host([selectable]) #open-part {
        padding: 0;
        margin: var(--uui-size-space-5,18px) var(--uui-size-space-4,12px);
      }

      #content {
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        margin: 0 0 3px 0;
        height: 100%;
      }

      #content > span {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: center;
        margin-top: 3px;
        font-weight: 700;
        overflow-wrap: anywhere;
      }

      .avatar {
        font-size: 1.5em;
        margin-top: var(--uui-size-space-1,3px);
        margin-bottom: var(--uui-size-space-2,6px);
      }
    `
];
Fl([
  l({ type: String })
], Co.prototype, "name", 2);
Fl([
  w()
], Co.prototype, "_avatarSlotHasContent", 2);
Co = Fl([
  g("uui-card-user")
], Co);
var gv = Object.defineProperty, mv = Object.getOwnPropertyDescriptor, Mh = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? mv(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && gv(t, i, r), r;
};
let Rs = class extends _ {
  constructor() {
    super(), this.open = !1, console.error(
      "´uui-caret´ is deprecated, please use ´uui-symbol-expand´ or ´uui-symbol-sort´"
    );
  }
  render() {
    return c`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="m4 9 8 8 8-8"></path>
    </svg>`;
  }
};
Rs.styles = [
  b`
      :host {
        display: inline-block;
        width: 12px;
        vertical-align: middle;
      }

      svg {
        transform-origin: 50% 50%;
        transition: transform 100ms cubic-bezier(0.1, 0, 0.9, 1);

      :host([open]) svg {
        transform: rotate(180deg);
      }
    `
];
Mh([
  l({ type: Boolean, reflect: !0 })
], Rs.prototype, "open", 2);
Rs = Mh([
  g("uui-caret")
], Rs);
var _v = Object.getOwnPropertyDescriptor, yv = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? _v(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = n(r) || r);
  return r;
};
let Fs = class extends Ht {
  renderCheckbox() {
    return c`
      <div id="ticker">
        <div id="icon-check">
          ${this.indeterminate ? Vf : Un}
        </div>
      </div>
    `;
  }
};
Fs.formAssociated = !0;
Fs.styles = [
  ...Ht.styles,
  On,
  b`
      :host {
        --uui-checkbox-size: 18px;
      }

      #ticker {
        position: relative;
        grid-area: 'input';
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;

        box-sizing: border-box;
        width: var(--uui-checkbox-size);
        height: var(--uui-checkbox-size);
        border-radius: var(
          --uui-checkbox-border-radius,
          var(--uui-border-radius,3px)
        );

        color: var(--uui-toggle-color, var(--uui-color-selected-contrast,#fff));
        background-color: var(
          --uui-toggle-background-color,
          var(--uui-color-surface,#fff)
        );
        border: 1px solid
          var(--uui-checkbox-border-color, var(--uui-color-border-standalone,#c2c2c2));
        font-size: calc(var(--uui-checkbox-size) * 0.7);
      }
      label:hover input:not([disabled]) + #ticker {
        border-color: var(
          --uui-checkbox-border-color-hover,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
        background-color: var(
          --uui-checkbox-background-color-hover,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
      }
      label:focus #ticker {
        border-color: var(
          --uui-checkbox-border-color-focus,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
        background-color: var(
          --uui-checkbox-background-color-focus,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
      }
      input:checked:not([disabled]) + #ticker,
      input:indeterminate:not([disabled]) + #ticker {
        border-color: var(--uui-color-selected,#3544b1);
      }

      label:hover input:checked:not([disabled]) + #ticker,
      label:hover input:indeterminate:not([disabled]) + #ticker {
        border-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      label:focus input:checked + #ticker,
      label:focus input:indeterminate + #ticker {
        border-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      #icon-check {
        position: absolute;
        vertical-align: middle;
        width: 1em;
        height: 1em;
        line-height: 0;
        transition:
          fill 120ms,
          opacity 120ms;
        color: var(--uui-color-selected-contrast,#fff);
        opacity: 0;
      }

      #ticker::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border-radius: calc(
          var(--uui-checkbox-border-radius, var(--uui-border-radius,3px)) * 0.5
        );
        background-color: var(--uui-color-selected,#3544b1);
        transition:
          transform 120ms ease,
          opacity 120ms,
          background-color 120ms;
        transform: scale(0);
        opacity: 0;
      }
      label:hover input:checked:not([disabled]) + #ticker::before,
      label:hover input:indeterminate:not([disabled]) + #ticker::before {
        background-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      input:checked + #ticker::before,
      input:indeterminate + #ticker::before {
        transform: scale(1);
        opacity: 1;
      }
      input:checked + #ticker #icon-check,
      input:indeterminate + #ticker #icon-check {
        opacity: 1;
      }
      label:focus input:checked + #ticker,
      label:focus input:indeterminate + #ticker {
        background-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      input:focus + #ticker {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }

      :host(:not([disabled], [readonly]))
        label:active
        input:checked
        + #ticker::before {
        /** Stretch when mouse down */
        transform: scale(0.9);
      }

      :host(:not([disabled], [readonly]))
        label:active
        input:indeterminate
        + #ticker::before {
        /** Stretch when mouse down */
        transform: scale(0.9);
      }

      :host(:not([pristine]):invalid) #ticker,
      :host(:not([pristine]):invalid) label:hover #ticker,
      :host(:not([pristine]):invalid) label:hover input:checked:not([disabled]) + #ticker,
      :host(:not([pristine]):invalid) label:hover input:indeterminate:not([disabled]) + #ticker,
      :host(:not([pristine]):invalid) label:focus input:checked + #ticker,
      :host(:not([pristine]):invalid) label:focus input:indeterminate + #ticker,
      /* polyfill support */
      :host(:not([pristine])[internals-invalid]) #ticker,
      :host(:not([pristine])[internals-invalid]) label:hover #ticker,
      :host(:not([pristine])[internals-invalid]) label:hover input:checked:not([disabled]) + #ticker,
      :host(:not([pristine])[internals-invalid]) label:hover input:indeterminate:not([disabled]) + #ticker,
      :host(:not([pristine])[internals-invalid]) label:focus input:checked + #ticker,
      :host(:not([pristine])[internals-invalid]) label:focus input:indeterminate + #ticker {
        border: 1px solid var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }

      :host([disabled]) #ticker {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
      :host([disabled]) input:checked + #ticker {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
      :host([disabled]) input:indeterminate + #ticker {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
      :host([disabled]) #ticker::before {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
      :host([disabled]) #ticker #icon-check {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) label:active #ticker {
        animation: ${In};
      }
      :host([disabled]) input:checked + #ticker #icon-check,
      :host([disabled]) input:indeterminate + #ticker #icon-check {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
    `
];
Fs = yv([
  g("uui-checkbox")
], Fs);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Sa = Mr(class extends Tr {
  constructor(e) {
    var t;
    if (super(e), e.type !== Lt.ATTRIBUTE || e.name !== "class" || ((t = e.strings) == null ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(e) {
    return " " + Object.keys(e).filter((t) => e[t]).join(" ") + " ";
  }
  update(e, [t]) {
    var o, r;
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), e.strings !== void 0 && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((s) => s !== "")));
      for (const s in t) t[s] && !((o = this.nt) != null && o.has(s)) && this.st.add(s);
      return this.render(t);
    }
    const i = e.element.classList;
    for (const s of this.st) s in t || (i.remove(s), this.st.delete(s));
    for (const s in t) {
      const n = !!t[s];
      n === this.st.has(s) || (r = this.nt) != null && r.has(s) || (n ? (i.add(s), this.st.add(s)) : (i.remove(s), this.st.delete(s)));
    }
    return bt;
  }
});
var wv = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }, ue = function(e) {
  return typeof e == "string" ? e.length > 0 : typeof e == "number";
}, Y = function(e, t, i) {
  return t === void 0 && (t = 0), i === void 0 && (i = Math.pow(10, t)), Math.round(i * e) / i + 0;
}, St = function(e, t, i) {
  return t === void 0 && (t = 0), i === void 0 && (i = 1), e > i ? i : e > t ? e : t;
}, Th = function(e) {
  return (e = isFinite(e) ? e % 360 : 0) > 0 ? e : e + 360;
}, Wu = function(e) {
  return { r: St(e.r, 0, 255), g: St(e.g, 0, 255), b: St(e.b, 0, 255), a: St(e.a) };
}, ta = function(e) {
  return { r: Y(e.r), g: Y(e.g), b: Y(e.b), a: Y(e.a, 3) };
}, xv = /^#([0-9a-f]{3,8})$/i, as = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, Dh = function(e) {
  var t = e.r, i = e.g, o = e.b, r = e.a, s = Math.max(t, i, o), n = s - Math.min(t, i, o), a = n ? s === t ? (i - o) / n : s === i ? 2 + (o - t) / n : 4 + (t - i) / n : 0;
  return { h: 60 * (a < 0 ? a + 6 : a), s: s ? n / s * 100 : 0, v: s / 255 * 100, a: r };
}, Lh = function(e) {
  var t = e.h, i = e.s, o = e.v, r = e.a;
  t = t / 360 * 6, i /= 100, o /= 100;
  var s = Math.floor(t), n = o * (1 - i), a = o * (1 - (t - s) * i), u = o * (1 - (1 - t + s) * i), h = s % 6;
  return { r: 255 * [o, a, n, n, u, o][h], g: 255 * [u, o, o, a, n, n][h], b: 255 * [n, n, u, o, o, a][h], a: r };
}, Gu = function(e) {
  return { h: Th(e.h), s: St(e.s, 0, 100), l: St(e.l, 0, 100), a: St(e.a) };
}, qu = function(e) {
  return { h: Y(e.h), s: Y(e.s), l: Y(e.l), a: Y(e.a, 3) };
}, Ku = function(e) {
  return Lh((i = (t = e).s, { h: t.h, s: (i *= ((o = t.l) < 50 ? o : 100 - o) / 100) > 0 ? 2 * i / (o + i) * 100 : 0, v: o + i, a: t.a }));
  var t, i, o;
}, ho = function(e) {
  return { h: (t = Dh(e)).h, s: (r = (200 - (i = t.s)) * (o = t.v) / 100) > 0 && r < 200 ? i * o / 100 / (r <= 100 ? r : 200 - r) * 100 : 0, l: r / 2, a: t.a };
  var t, i, o, r;
}, $v = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, kv = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Cv = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Ev = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Yu = { string: [[function(e) {
  var t = xv.exec(e);
  return t ? (e = t[1]).length <= 4 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? Y(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : e.length === 6 || e.length === 8 ? { r: parseInt(e.substr(0, 2), 16), g: parseInt(e.substr(2, 2), 16), b: parseInt(e.substr(4, 2), 16), a: e.length === 8 ? Y(parseInt(e.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
}, "hex"], [function(e) {
  var t = Cv.exec(e) || Ev.exec(e);
  return t ? t[2] !== t[4] || t[4] !== t[6] ? null : Wu({ r: Number(t[1]) / (t[2] ? 100 / 255 : 1), g: Number(t[3]) / (t[4] ? 100 / 255 : 1), b: Number(t[5]) / (t[6] ? 100 / 255 : 1), a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1) }) : null;
}, "rgb"], [function(e) {
  var t = $v.exec(e) || kv.exec(e);
  if (!t) return null;
  var i, o, r = Gu({ h: (i = t[1], o = t[2], o === void 0 && (o = "deg"), Number(i) * (wv[o] || 1)), s: Number(t[3]), l: Number(t[4]), a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1) });
  return Ku(r);
}, "hsl"]], object: [[function(e) {
  var t = e.r, i = e.g, o = e.b, r = e.a, s = r === void 0 ? 1 : r;
  return ue(t) && ue(i) && ue(o) ? Wu({ r: Number(t), g: Number(i), b: Number(o), a: Number(s) }) : null;
}, "rgb"], [function(e) {
  var t = e.h, i = e.s, o = e.l, r = e.a, s = r === void 0 ? 1 : r;
  if (!ue(t) || !ue(i) || !ue(o)) return null;
  var n = Gu({ h: Number(t), s: Number(i), l: Number(o), a: Number(s) });
  return Ku(n);
}, "hsl"], [function(e) {
  var t = e.h, i = e.s, o = e.v, r = e.a, s = r === void 0 ? 1 : r;
  if (!ue(t) || !ue(i) || !ue(o)) return null;
  var n = function(a) {
    return { h: Th(a.h), s: St(a.s, 0, 100), v: St(a.v, 0, 100), a: St(a.a) };
  }({ h: Number(t), s: Number(i), v: Number(o), a: Number(s) });
  return Lh(n);
}, "hsv"]] }, Xu = function(e, t) {
  for (var i = 0; i < t.length; i++) {
    var o = t[i][0](e);
    if (o) return [o, t[i][1]];
  }
  return [null, void 0];
}, Pv = function(e) {
  return typeof e == "string" ? Xu(e.trim(), Yu.string) : typeof e == "object" && e !== null ? Xu(e, Yu.object) : [null, void 0];
}, ea = function(e, t) {
  var i = ho(e);
  return { h: i.h, s: St(i.s + 100 * t, 0, 100), l: i.l, a: i.a };
}, ia = function(e) {
  return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 / 255;
}, Zu = function(e, t) {
  var i = ho(e);
  return { h: i.h, s: i.s, l: St(i.l + 100 * t, 0, 100), a: i.a };
}, Ju = function() {
  function e(t) {
    this.parsed = Pv(t)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
  }
  return e.prototype.isValid = function() {
    return this.parsed !== null;
  }, e.prototype.brightness = function() {
    return Y(ia(this.rgba), 2);
  }, e.prototype.isDark = function() {
    return ia(this.rgba) < 0.5;
  }, e.prototype.isLight = function() {
    return ia(this.rgba) >= 0.5;
  }, e.prototype.toHex = function() {
    return t = ta(this.rgba), i = t.r, o = t.g, r = t.b, n = (s = t.a) < 1 ? as(Y(255 * s)) : "", "#" + as(i) + as(o) + as(r) + n;
    var t, i, o, r, s, n;
  }, e.prototype.toRgb = function() {
    return ta(this.rgba);
  }, e.prototype.toRgbString = function() {
    return t = ta(this.rgba), i = t.r, o = t.g, r = t.b, (s = t.a) < 1 ? "rgba(" + i + ", " + o + ", " + r + ", " + s + ")" : "rgb(" + i + ", " + o + ", " + r + ")";
    var t, i, o, r, s;
  }, e.prototype.toHsl = function() {
    return qu(ho(this.rgba));
  }, e.prototype.toHslString = function() {
    return t = qu(ho(this.rgba)), i = t.h, o = t.s, r = t.l, (s = t.a) < 1 ? "hsla(" + i + ", " + o + "%, " + r + "%, " + s + ")" : "hsl(" + i + ", " + o + "%, " + r + "%)";
    var t, i, o, r, s;
  }, e.prototype.toHsv = function() {
    return t = Dh(this.rgba), { h: Y(t.h), s: Y(t.s), v: Y(t.v), a: Y(t.a, 3) };
    var t;
  }, e.prototype.invert = function() {
    return Ct({ r: 255 - (t = this.rgba).r, g: 255 - t.g, b: 255 - t.b, a: t.a });
    var t;
  }, e.prototype.saturate = function(t) {
    return t === void 0 && (t = 0.1), Ct(ea(this.rgba, t));
  }, e.prototype.desaturate = function(t) {
    return t === void 0 && (t = 0.1), Ct(ea(this.rgba, -t));
  }, e.prototype.grayscale = function() {
    return Ct(ea(this.rgba, -1));
  }, e.prototype.lighten = function(t) {
    return t === void 0 && (t = 0.1), Ct(Zu(this.rgba, t));
  }, e.prototype.darken = function(t) {
    return t === void 0 && (t = 0.1), Ct(Zu(this.rgba, -t));
  }, e.prototype.rotate = function(t) {
    return t === void 0 && (t = 15), this.hue(this.hue() + t);
  }, e.prototype.alpha = function(t) {
    return typeof t == "number" ? Ct({ r: (i = this.rgba).r, g: i.g, b: i.b, a: t }) : Y(this.rgba.a, 3);
    var i;
  }, e.prototype.hue = function(t) {
    var i = ho(this.rgba);
    return typeof t == "number" ? Ct({ h: t, s: i.s, l: i.l, a: i.a }) : Y(i.h);
  }, e.prototype.isEqual = function(t) {
    return this.toHex() === Ct(t).toHex();
  }, e;
}(), Ct = function(e) {
  return e instanceof Ju ? e : new Ju(e);
};
class Aa extends L {
  constructor(t, i = {}) {
    super(t, {
      bubbles: !0,
      ...i
    });
  }
}
Aa.CHANGE = "change";
var Sv = Object.defineProperty, Av = Object.getOwnPropertyDescriptor, oe = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Av(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Sv(t, i, r), r;
};
let It = class extends _ {
  constructor() {
    super(...arguments), this.isDraggingGridHandle = !1, this.disabled = !1, this.readonly = !1, this.hue = 0, this.saturation = 0, this.lightness = 0, this.brightness = 0, this.alpha = 100, this._value = "#000";
  }
  get value() {
    return this._value;
  }
  set value(e) {
    const t = this._value;
    this._value = e, this.requestUpdate("value", t);
    try {
      const i = Ct(e);
      if (i.isValid()) {
        const { h: o, s: r, l: s, a: n } = i.toHsl();
        o !== 0 && (this.hue = o), this.lightness = s, this.saturation = r, this.brightness = this.getBrightness(s), this.alpha = n * 100;
      }
    } catch (i) {
      console.error("Something went wrong parsing the color string.", i);
    }
  }
  handleGridDrag(e) {
    if (this.disabled || this.readonly) return;
    const t = this.shadowRoot.querySelector(".color-area"), i = t.querySelector(".color-area__handle"), { width: o, height: r } = t.getBoundingClientRect();
    i.focus(), e.preventDefault(), e.stopPropagation(), this.isDraggingGridHandle = !0, bh(t, {
      onMove: (s, n) => {
        isNaN(s) || isNaN(n) || (this.saturation = T(s / o * 100, 0, 100), this.brightness = T(100 - n / r * 100, 0, 100), this.lightness = this.getLightness(this.brightness), this.syncValues());
      },
      onStop: () => this.isDraggingGridHandle = !1,
      initialEvent: e
    });
  }
  handleGridKeyDown(e) {
    if (this.disabled) return;
    const t = e.shiftKey ? 10 : 1;
    e.key === "ArrowLeft" && (e.preventDefault(), this.saturation = T(this.saturation - t, 0, 100), this.syncValues()), e.key === "ArrowRight" && (e.preventDefault(), this.saturation = T(this.saturation + t, 0, 100), this.syncValues()), e.key === "ArrowUp" && (e.preventDefault(), this.brightness = T(this.brightness + t, 0, 100), this.lightness = this.getLightness(this.brightness), this.syncValues()), e.key === "ArrowDown" && (e.preventDefault(), this.brightness = T(this.brightness - t, 0, 100), this.lightness = this.getLightness(this.brightness), this.syncValues());
  }
  getBrightness(e) {
    return T(-1 * (200 * e / (this.saturation - 200)), 0, 100);
  }
  getLightness(e) {
    return T(
      (200 - this.saturation) * e / 100 * 5 / 10,
      0,
      100
    );
  }
  syncValues() {
    const e = Ct({
      h: this.hue,
      s: this.saturation,
      l: this.lightness,
      a: this.alpha / 100
    });
    this._value = e.toRgbString(), this.dispatchEvent(new Aa(Aa.CHANGE));
  }
  /** Generates a hex string from HSL values. Hue must be 0-360. All other arguments must be 0-100. */
  getHexString(e, t, i, o = 100) {
    const r = Ct(
      `hsla(${e}, ${t}%, ${i}%, ${o / 100})`
    );
    return r.isValid() ? r.toHex() : "";
  }
  render() {
    const e = this.saturation, t = 100 - this.brightness;
    return c`
      <div
        part="grid"
        class="color-area"
        style=${Pe({
      backgroundColor: this.getHexString(this.hue, 100, 50)
    })}
        @mousedown=${this.handleGridDrag}
        @touchstart=${this.handleGridDrag}>
        <span
          part="grid-handle"
          class=${Sa({
      "color-area__handle": !0,
      "color-area__handle--dragging": this.isDraggingGridHandle
    })}
          style=${Pe({
      top: `${t}%`,
      left: `${e}%`,
      backgroundColor: this.getHexString(
        this.hue,
        this.saturation,
        this.lightness,
        this.alpha
      )
    })}
          role="application"
          tabindex=${k(this.disabled ? void 0 : "0")}
          aria-label="HSB"
          @keydown=${this.handleGridKeyDown}></span>
      </div>
    `;
  }
};
It.styles = [
  b`
      :host {
        display: inline-block;
        width: 280px;
        height: 200px;
      }

      :host([disabled]) {
        cursor: not-allowed;
      }

      :host([disabled]) .color-area {
        user-select: none;
        pointer-events: none;
        opacity: 0.55;
      }

      :host([readonly]) {
        pointer-events: none;
        cursor: default;
      }

      .color-area {
        position: relative;
        height: 100%;
        width: 100%;
        background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 100%
          ),
          linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
        box-sizing: border-box;
        cursor: crosshair;
        forced-color-adjust: none;
      }
      .color-area__handle {
        position: absolute;
        width: var(--uui-color-area-grid-handle-size, 16px);
        height: var(--uui-color-area-grid-handle-size, 16px);
        border-radius: 50%;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
        border: solid 2px white;
        margin-top: calc(var(--uui-color-area-grid-handle-size, 16px) / -2);
        margin-left: calc(var(--uui-color-area-grid-handle-size, 16px) / -2);
        transition: 150ms transform;
        box-sizing: inherit;
      }
      .color-area__handle--dragging {
        cursor: none;
        transform: scale(1.5);
      }
      .color-area__handle--empty {
        display: none;
      }
    `
];
oe([
  w()
], It.prototype, "isDraggingGridHandle", 2);
oe([
  l({ type: Boolean, reflect: !0 })
], It.prototype, "disabled", 2);
oe([
  l({ type: Boolean, reflect: !0 })
], It.prototype, "readonly", 2);
oe([
  l({ type: Number })
], It.prototype, "hue", 2);
oe([
  l({ type: Number })
], It.prototype, "saturation", 2);
oe([
  l({ type: Number })
], It.prototype, "lightness", 2);
oe([
  l({ type: Number })
], It.prototype, "brightness", 2);
oe([
  l({ type: Number })
], It.prototype, "alpha", 2);
oe([
  l({ type: String })
], It.prototype, "value", 1);
It = oe([
  g("uui-color-area")
], It);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { I: Ov } = Op, Nh = (e) => e.strings === void 0, Qu = () => document.createComment(""), Kr = (e, t, i) => {
  var s;
  const o = e._$AA.parentNode, r = t === void 0 ? e._$AB : t._$AA;
  if (i === void 0) {
    const n = o.insertBefore(Qu(), r), a = o.insertBefore(Qu(), r);
    i = new Ov(n, a, e, e.options);
  } else {
    const n = i._$AB.nextSibling, a = i._$AM, u = a !== e;
    if (u) {
      let h;
      (s = i._$AQ) == null || s.call(i, e), i._$AM = e, i._$AP !== void 0 && (h = e._$AU) !== a._$AU && i._$AP(h);
    }
    if (n !== r || u) {
      let h = i._$AA;
      for (; h !== n; ) {
        const f = h.nextSibling;
        o.insertBefore(h, r), h = f;
      }
    }
  }
  return i;
}, di = (e, t, i = e) => (e._$AI(t, i), e), Iv = {}, Hh = (e, t = Iv) => e._$AH = t, Uv = (e) => e._$AH, ra = (e) => {
  e._$AR(), e._$AA.remove();
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const zv = Mr(class extends Tr {
  constructor(e) {
    if (super(e), e.type !== Lt.PROPERTY && e.type !== Lt.ATTRIBUTE && e.type !== Lt.BOOLEAN_ATTRIBUTE) throw Error("The `live` directive is not allowed on child or event bindings");
    if (!Nh(e)) throw Error("`live` bindings can only contain a single expression");
  }
  render(e) {
    return e;
  }
  update(e, [t]) {
    if (t === bt || t === S) return t;
    const i = e.element, o = e.name;
    if (e.type === Lt.PROPERTY) {
      if (t === i[o]) return bt;
    } else if (e.type === Lt.BOOLEAN_ATTRIBUTE) {
      if (!!t === i.hasAttribute(o)) return bt;
    } else if (e.type === Lt.ATTRIBUTE && i.getAttribute(o) === t + "") return bt;
    return Hh(e), t;
  }
});
var Mv = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }, ce = function(e) {
  return typeof e == "string" ? e.length > 0 : typeof e == "number";
}, X = function(e, t, i) {
  return t === void 0 && (t = 0), i === void 0 && (i = Math.pow(10, t)), Math.round(i * e) / i + 0;
}, At = function(e, t, i) {
  return t === void 0 && (t = 0), i === void 0 && (i = 1), e > i ? i : e > t ? e : t;
}, Bh = function(e) {
  return (e = isFinite(e) ? e % 360 : 0) > 0 ? e : e + 360;
}, tc = function(e) {
  return { r: At(e.r, 0, 255), g: At(e.g, 0, 255), b: At(e.b, 0, 255), a: At(e.a) };
}, oa = function(e) {
  return { r: X(e.r), g: X(e.g), b: X(e.b), a: X(e.a, 3) };
}, Tv = /^#([0-9a-f]{3,8})$/i, ls = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, Vh = function(e) {
  var t = e.r, i = e.g, o = e.b, r = e.a, s = Math.max(t, i, o), n = s - Math.min(t, i, o), a = n ? s === t ? (i - o) / n : s === i ? 2 + (o - t) / n : 4 + (t - i) / n : 0;
  return { h: 60 * (a < 0 ? a + 6 : a), s: s ? n / s * 100 : 0, v: s / 255 * 100, a: r };
}, jh = function(e) {
  var t = e.h, i = e.s, o = e.v, r = e.a;
  t = t / 360 * 6, i /= 100, o /= 100;
  var s = Math.floor(t), n = o * (1 - i), a = o * (1 - (t - s) * i), u = o * (1 - (1 - t + s) * i), h = s % 6;
  return { r: 255 * [o, a, n, n, u, o][h], g: 255 * [u, o, o, a, n, n][h], b: 255 * [n, n, u, o, o, a][h], a: r };
}, ec = function(e) {
  return { h: Bh(e.h), s: At(e.s, 0, 100), l: At(e.l, 0, 100), a: At(e.a) };
}, ic = function(e) {
  return { h: X(e.h), s: X(e.s), l: X(e.l), a: X(e.a, 3) };
}, rc = function(e) {
  return jh((i = (t = e).s, { h: t.h, s: (i *= ((o = t.l) < 50 ? o : 100 - o) / 100) > 0 ? 2 * i / (o + i) * 100 : 0, v: o + i, a: t.a }));
  var t, i, o;
}, po = function(e) {
  return { h: (t = Vh(e)).h, s: (r = (200 - (i = t.s)) * (o = t.v) / 100) > 0 && r < 200 ? i * o / 100 / (r <= 100 ? r : 200 - r) * 100 : 0, l: r / 2, a: t.a };
  var t, i, o, r;
}, Dv = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Lv = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Nv = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Hv = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Oa = { string: [[function(e) {
  var t = Tv.exec(e);
  return t ? (e = t[1]).length <= 4 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? X(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : e.length === 6 || e.length === 8 ? { r: parseInt(e.substr(0, 2), 16), g: parseInt(e.substr(2, 2), 16), b: parseInt(e.substr(4, 2), 16), a: e.length === 8 ? X(parseInt(e.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
}, "hex"], [function(e) {
  var t = Nv.exec(e) || Hv.exec(e);
  return t ? t[2] !== t[4] || t[4] !== t[6] ? null : tc({ r: Number(t[1]) / (t[2] ? 100 / 255 : 1), g: Number(t[3]) / (t[4] ? 100 / 255 : 1), b: Number(t[5]) / (t[6] ? 100 / 255 : 1), a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1) }) : null;
}, "rgb"], [function(e) {
  var t = Dv.exec(e) || Lv.exec(e);
  if (!t) return null;
  var i, o, r = ec({ h: (i = t[1], o = t[2], o === void 0 && (o = "deg"), Number(i) * (Mv[o] || 1)), s: Number(t[3]), l: Number(t[4]), a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1) });
  return rc(r);
}, "hsl"]], object: [[function(e) {
  var t = e.r, i = e.g, o = e.b, r = e.a, s = r === void 0 ? 1 : r;
  return ce(t) && ce(i) && ce(o) ? tc({ r: Number(t), g: Number(i), b: Number(o), a: Number(s) }) : null;
}, "rgb"], [function(e) {
  var t = e.h, i = e.s, o = e.l, r = e.a, s = r === void 0 ? 1 : r;
  if (!ce(t) || !ce(i) || !ce(o)) return null;
  var n = ec({ h: Number(t), s: Number(i), l: Number(o), a: Number(s) });
  return rc(n);
}, "hsl"], [function(e) {
  var t = e.h, i = e.s, o = e.v, r = e.a, s = r === void 0 ? 1 : r;
  if (!ce(t) || !ce(i) || !ce(o)) return null;
  var n = function(a) {
    return { h: Bh(a.h), s: At(a.s, 0, 100), v: At(a.v, 0, 100), a: At(a.a) };
  }({ h: Number(t), s: Number(i), v: Number(o), a: Number(s) });
  return jh(n);
}, "hsv"]] }, oc = function(e, t) {
  for (var i = 0; i < t.length; i++) {
    var o = t[i][0](e);
    if (o) return [o, t[i][1]];
  }
  return [null, void 0];
}, Bv = function(e) {
  return typeof e == "string" ? oc(e.trim(), Oa.string) : typeof e == "object" && e !== null ? oc(e, Oa.object) : [null, void 0];
}, sa = function(e, t) {
  var i = po(e);
  return { h: i.h, s: At(i.s + 100 * t, 0, 100), l: i.l, a: i.a };
}, na = function(e) {
  return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 / 255;
}, sc = function(e, t) {
  var i = po(e);
  return { h: i.h, s: i.s, l: At(i.l + 100 * t, 0, 100), a: i.a };
}, Ws = function() {
  function e(t) {
    this.parsed = Bv(t)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
  }
  return e.prototype.isValid = function() {
    return this.parsed !== null;
  }, e.prototype.brightness = function() {
    return X(na(this.rgba), 2);
  }, e.prototype.isDark = function() {
    return na(this.rgba) < 0.5;
  }, e.prototype.isLight = function() {
    return na(this.rgba) >= 0.5;
  }, e.prototype.toHex = function() {
    return t = oa(this.rgba), i = t.r, o = t.g, r = t.b, n = (s = t.a) < 1 ? ls(X(255 * s)) : "", "#" + ls(i) + ls(o) + ls(r) + n;
    var t, i, o, r, s, n;
  }, e.prototype.toRgb = function() {
    return oa(this.rgba);
  }, e.prototype.toRgbString = function() {
    return t = oa(this.rgba), i = t.r, o = t.g, r = t.b, (s = t.a) < 1 ? "rgba(" + i + ", " + o + ", " + r + ", " + s + ")" : "rgb(" + i + ", " + o + ", " + r + ")";
    var t, i, o, r, s;
  }, e.prototype.toHsl = function() {
    return ic(po(this.rgba));
  }, e.prototype.toHslString = function() {
    return t = ic(po(this.rgba)), i = t.h, o = t.s, r = t.l, (s = t.a) < 1 ? "hsla(" + i + ", " + o + "%, " + r + "%, " + s + ")" : "hsl(" + i + ", " + o + "%, " + r + "%)";
    var t, i, o, r, s;
  }, e.prototype.toHsv = function() {
    return t = Vh(this.rgba), { h: X(t.h), s: X(t.s), v: X(t.v), a: X(t.a, 3) };
    var t;
  }, e.prototype.invert = function() {
    return Tt({ r: 255 - (t = this.rgba).r, g: 255 - t.g, b: 255 - t.b, a: t.a });
    var t;
  }, e.prototype.saturate = function(t) {
    return t === void 0 && (t = 0.1), Tt(sa(this.rgba, t));
  }, e.prototype.desaturate = function(t) {
    return t === void 0 && (t = 0.1), Tt(sa(this.rgba, -t));
  }, e.prototype.grayscale = function() {
    return Tt(sa(this.rgba, -1));
  }, e.prototype.lighten = function(t) {
    return t === void 0 && (t = 0.1), Tt(sc(this.rgba, t));
  }, e.prototype.darken = function(t) {
    return t === void 0 && (t = 0.1), Tt(sc(this.rgba, -t));
  }, e.prototype.rotate = function(t) {
    return t === void 0 && (t = 15), this.hue(this.hue() + t);
  }, e.prototype.alpha = function(t) {
    return typeof t == "number" ? Tt({ r: (i = this.rgba).r, g: i.g, b: i.b, a: t }) : X(this.rgba.a, 3);
    var i;
  }, e.prototype.hue = function(t) {
    var i = po(this.rgba);
    return typeof t == "number" ? Tt({ h: t, s: i.s, l: i.l, a: i.a }) : X(i.h);
  }, e.prototype.isEqual = function(t) {
    return this.toHex() === Tt(t).toHex();
  }, e;
}(), Tt = function(e) {
  return e instanceof Ws ? e : new Ws(e);
}, nc = [], Vv = function(e) {
  e.forEach(function(t) {
    nc.indexOf(t) < 0 && (t(Ws, Oa), nc.push(t));
  });
};
function jv(e, t) {
  var i = { white: "#ffffff", bisque: "#ffe4c4", blue: "#0000ff", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", antiquewhite: "#faebd7", aqua: "#00ffff", azure: "#f0ffff", whitesmoke: "#f5f5f5", papayawhip: "#ffefd5", plum: "#dda0dd", blanchedalmond: "#ffebcd", black: "#000000", gold: "#ffd700", goldenrod: "#daa520", gainsboro: "#dcdcdc", cornsilk: "#fff8dc", cornflowerblue: "#6495ed", burlywood: "#deb887", aquamarine: "#7fffd4", beige: "#f5f5dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkkhaki: "#bdb76b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", peachpuff: "#ffdab9", darkmagenta: "#8b008b", darkred: "#8b0000", darkorchid: "#9932cc", darkorange: "#ff8c00", darkslateblue: "#483d8b", gray: "#808080", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", deeppink: "#ff1493", deepskyblue: "#00bfff", wheat: "#f5deb3", firebrick: "#b22222", floralwhite: "#fffaf0", ghostwhite: "#f8f8ff", darkviolet: "#9400d3", magenta: "#ff00ff", green: "#008000", dodgerblue: "#1e90ff", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", blueviolet: "#8a2be2", forestgreen: "#228b22", lawngreen: "#7cfc00", indianred: "#cd5c5c", indigo: "#4b0082", fuchsia: "#ff00ff", brown: "#a52a2a", maroon: "#800000", mediumblue: "#0000cd", lightcoral: "#f08080", darkturquoise: "#00ced1", lightcyan: "#e0ffff", ivory: "#fffff0", lightyellow: "#ffffe0", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", linen: "#faf0e6", mediumaquamarine: "#66cdaa", lemonchiffon: "#fffacd", lime: "#00ff00", khaki: "#f0e68c", mediumseagreen: "#3cb371", limegreen: "#32cd32", mediumspringgreen: "#00fa9a", lightskyblue: "#87cefa", lightblue: "#add8e6", midnightblue: "#191970", lightpink: "#ffb6c1", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", mintcream: "#f5fffa", lightslategray: "#778899", lightslategrey: "#778899", navajowhite: "#ffdead", navy: "#000080", mediumvioletred: "#c71585", powderblue: "#b0e0e6", palegoldenrod: "#eee8aa", oldlace: "#fdf5e6", paleturquoise: "#afeeee", mediumturquoise: "#48d1cc", mediumorchid: "#ba55d3", rebeccapurple: "#663399", lightsteelblue: "#b0c4de", mediumslateblue: "#7b68ee", thistle: "#d8bfd8", tan: "#d2b48c", orchid: "#da70d6", mediumpurple: "#9370db", purple: "#800080", pink: "#ffc0cb", skyblue: "#87ceeb", springgreen: "#00ff7f", palegreen: "#98fb98", red: "#ff0000", yellow: "#ffff00", slateblue: "#6a5acd", lavenderblush: "#fff0f5", peru: "#cd853f", palevioletred: "#db7093", violet: "#ee82ee", teal: "#008080", slategray: "#708090", slategrey: "#708090", aliceblue: "#f0f8ff", darkseagreen: "#8fbc8f", darkolivegreen: "#556b2f", greenyellow: "#adff2f", seagreen: "#2e8b57", seashell: "#fff5ee", tomato: "#ff6347", silver: "#c0c0c0", sienna: "#a0522d", lavender: "#e6e6fa", lightgreen: "#90ee90", orange: "#ffa500", orangered: "#ff4500", steelblue: "#4682b4", royalblue: "#4169e1", turquoise: "#40e0d0", yellowgreen: "#9acd32", salmon: "#fa8072", saddlebrown: "#8b4513", sandybrown: "#f4a460", rosybrown: "#bc8f8f", darksalmon: "#e9967a", lightgoldenrodyellow: "#fafad2", snow: "#fffafa", lightgrey: "#d3d3d3", lightgray: "#d3d3d3", dimgray: "#696969", dimgrey: "#696969", olivedrab: "#6b8e23", olive: "#808000" }, o = {};
  for (var r in i) o[i[r]] = r;
  var s = {};
  e.prototype.toName = function(n) {
    if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return "transparent";
    var a, u, h = o[this.toHex()];
    if (h) return h;
    if (n != null && n.closest) {
      var f = this.toRgb(), d = 1 / 0, x = "black";
      if (!s.length) for (var v in i) s[v] = new e(i[v]).toRgb();
      for (var $ in i) {
        var O = (a = f, u = s[$], Math.pow(a.r - u.r, 2) + Math.pow(a.g - u.g, 2) + Math.pow(a.b - u.b, 2));
        O < d && (d = O, x = $);
      }
      return x;
    }
  }, t.string.push([function(n) {
    var a = n.toLowerCase(), u = a === "transparent" ? "#0000" : i[a];
    return u ? new e(u).toRgb() : null;
  }, "name"]);
}
class to extends L {
  constructor(t, i = {}) {
    super(t, {
      bubbles: !0,
      ...i
    });
  }
}
to.CHANGE = "change";
var Rv = Object.defineProperty, Fv = Object.getOwnPropertyDescriptor, G = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Fv(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Rv(t, i, r), r;
};
Vv([jv]);
const ac = "EyeDropper" in window;
let j = class extends ie("label", _) {
  constructor() {
    super(...arguments), this._value = "", this.inputValue = "", this.hue = 0, this.saturation = 0, this.lightness = 0, this.alpha = 100, this._colord = Tt("hsl(0, 0%, 0%)"), this.format = "hex", this.name = "", this.size = "medium", this.noFormatToggle = !1, this.inline = !1, this.disabled = !1, this.opacity = !1, this.readonly = !1, this.uppercase = !1, this.swatches = [
      "#d0021b",
      "#f5a623",
      "#f8e71c",
      "#8b572a",
      "#7ed321",
      "#417505",
      "#bd10e0",
      "#9013fe",
      "#4a90e2",
      "#50e3c2",
      "#b8e986",
      "#000",
      "#444",
      "#888",
      "#ccc",
      "#fff"
    ];
  }
  set value(e) {
    this.value !== e && this.setColor(e), this._value = e;
  }
  get value() {
    return this._value;
  }
  connectedCallback() {
    super.connectedCallback(), C(this, "uui-icon"), C(this, "uui-icon-registry-essential"), C(this, "uui-input"), C(this, "uui-button"), C(this, "uui-button-group"), C(this, "uui-color-swatches"), C(this, "uui-color-swatch"), C(this, "uui-color-area"), C(this, "uui-color-slider"), C(this, "uui-popover-container");
  }
  /** Returns the current value as a string in the specified format. */
  getFormattedValue(e) {
    const t = this.opacity ? `${e}a` : e, i = this._colord.toHex(), o = i.length > 7 ? i.substring(0, i.length - 2) : i, { r, g: s, b: n } = this._colord.toRgb(), { h: a, s: u, l: h } = this._colord.toHsl(), { v: f } = this._colord.toHsv(), d = this._colord.alpha();
    switch (t) {
      case "hex":
        return this.setLetterCase(o);
      case "hexa":
        return this.setLetterCase(i);
      case "rgb":
        return this.setLetterCase(`rgb(${r}, ${s}, ${n})`);
      case "rgba":
        return this.setLetterCase(this._colord.toRgbString());
      case "hsl":
        return this.setLetterCase(`hsl(${a}, ${u}%, ${h}%)`);
      case "hsla":
        return this.setLetterCase(this._colord.toHslString());
      case "hsv":
        return this.setLetterCase(`hsv(${a}, ${u}%, ${h}%)`);
      case "hsva":
        return this.setLetterCase(`hsva(${a}, ${u}%, ${f}%, ${d})`);
      //this._colord.toHsvString();
      default:
        return "";
    }
  }
  getBrightness(e) {
    return T(-1 * (200 * e / (this.saturation - 200)), 0, 100);
  }
  getLightness(e) {
    return T(
      (200 - this.saturation) * e / 100 * 5 / 10,
      0,
      100
    );
  }
  handleFormatToggle() {
    const e = ["hex", "rgb", "hsl", "hsv"], t = (e.indexOf(this.format) + 1) % e.length;
    this.format = e[t], this._syncValues();
  }
  handleAlphaChange(e) {
    var o;
    e.stopPropagation(), (o = this._swatches) == null || o.resetSelection();
    const t = e.target, i = {
      h: this.hue,
      s: this.saturation,
      l: this.lightness,
      a: Math.round(t.value) / 100
    };
    this.setColor(i);
  }
  handleHueChange(e) {
    var o;
    e.stopPropagation(), (o = this._swatches) == null || o.resetSelection();
    const i = {
      h: e.target.value,
      s: this.saturation,
      l: this.lightness,
      a: this.alpha / 100
    };
    this.setColor(i);
  }
  handleGridChange(e) {
    var o;
    e.stopPropagation(), (o = this._swatches) == null || o.resetSelection();
    const t = e.target, i = {
      h: this.hue,
      s: t.saturation,
      l: t.lightness,
      a: this.alpha / 100
    };
    this.setColor(i);
  }
  handleInputChange(e) {
    var t;
    e.stopImmediatePropagation(), (t = this._swatches) == null || t.resetSelection(), this.inputValue = this._input.value, this.setColor(this.inputValue);
  }
  handleInputKeyDown(e) {
    var t;
    e.stopImmediatePropagation(), e.key === "Enter" && ((t = this._swatches) == null || t.resetSelection(), this.inputValue = this._input.value, this.setColor(this.inputValue), setTimeout(() => this._input.select()));
  }
  handleColorSwatchChange(e) {
    e.stopImmediatePropagation();
    const t = e.target;
    this.setColor(t.value);
  }
  handleCopy() {
    navigator.clipboard.writeText(this._input.value).then(() => {
      this._previewButton.classList.add("color-picker__preview-color--copied"), this._previewButton.addEventListener("animationend", () => {
        this._previewButton.classList.remove(
          "color-picker__preview-color--copied"
        );
      });
    });
  }
  handleEyeDropper() {
    if (!ac)
      return;
    new EyeDropper().open().then((t) => this.setColor(t.sRGBHex)).catch(() => {
    });
  }
  setColor(e) {
    if (e === this.value) return;
    if (!e)
      return this.alpha = 100, this.inputValue = "", this._value = e, this.dispatchEvent(
        new to(to.CHANGE)
      ), !0;
    const t = new Ws(e), { h: i, s: o, l: r, a: s } = t.toHsl();
    this.hue = i, this.saturation = o, this.lightness = r, this.alpha = this.opacity ? s * 100 : 100;
    const n = e;
    return n && n.h && (this.hue = n.h), this._colord = t, this._syncValues(), this.dispatchEvent(
      new to(to.CHANGE)
    ), !0;
  }
  setLetterCase(e) {
    return typeof e != "string" ? "" : this.uppercase ? e.toUpperCase() : e.toLowerCase();
  }
  /** Generates a hex string from HSL values. Hue must be 0-360. All other arguments must be 0-100. */
  getHexString(e, t, i, o = 100) {
    const r = Tt(
      `hsla(${e}, ${t}%, ${i}%, ${o / 100})`
    );
    return r.isValid() ? r.toHex() : "";
  }
  _syncValues() {
    this.inputValue = this.getFormattedValue(this.format), this._value = this.inputValue;
  }
  _renderColorPicker() {
    return c`
      <div
        class=${Sa({
      "color-picker": !0,
      "color-picker--inline": this.inline,
      "color-picker--disabled": this.disabled
    })}
        aria-disabled=${this.disabled ? "true" : "false"}>
        <uui-color-area
          .value="${this.value}"
          .hue="${Math.round(this.hue)}"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          @change=${this.handleGridChange}>
        </uui-color-area>
        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <uui-color-slider
              label="hue"
              class="hue-slider"
              .value=${Math.round(this.hue)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              @change=${this.handleHueChange}>
            </uui-color-slider>
            ${this.opacity ? c`
                  <uui-color-slider
                    label="alpha"
                    class="opacity-slider"
                    .value=${Math.round(this.alpha)}
                    type="opacity"
                    .color=${this.getHexString(
      this.hue,
      this.saturation,
      this.lightness
    )}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    @change=${this.handleAlphaChange}>
                  </uui-color-slider>
                ` : ""}
          </div>
          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            title="Copy"
            aria-label="Copy"
            style=${Pe({
      "--preview-color": `hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha / 100})`
    })}
            @click=${this.handleCopy}></button>
        </div>
        <div class="color-picker__user-input" aria-live="polite">
          <uui-input
            label="label"
            type="text"
            part="input"
            name=${this.name}
            autocomplete="off"
            autocapitalize="off"
            spellcheck="false"
            .value=${zv(this.inputValue)}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            @keydown=${this.handleInputKeyDown}
            @change=${this.handleInputChange}>
          </uui-input>
          <uui-button-group>
            ${this.noFormatToggle ? "" : c`<uui-button
                  label="Toggle color format"
                  @click=${this.handleFormatToggle}
                  class="color-picker__toggle-format"
                  ?disabled=${this.disabled}
                  compact>
                  <span>${this.format}</span>
                </uui-button>`}
            ${ac ? c`<uui-button
                  label="Select a color"
                  ?disabled=${this.disabled || this.readonly}
                  @click=${this.handleEyeDropper}
                  compact>
                  <uui-icon-registry-essential>
                    <uui-icon name="colorpicker"></uui-icon>
                  </uui-icon-registry-essential>
                </uui-button>` : ""}
          </uui-button-group>
        </div>
        ${this._renderSwatches()}
      </div>
    `;
  }
  _renderSwatches() {
    var e;
    return (e = this.swatches) != null && e.length ? c`<uui-color-swatches
      id="swatches"
      class="color-picker__swatches"
      label="Swatches"
      ?disabled=${this.disabled}
      ?readonly=${this.readonly}
      @change=${this.handleColorSwatchChange}>
      ${this.swatches.map(
      (t) => c`<uui-color-swatch label="${t}" .value=${t}>
          </uui-color-swatch>`
    )}
    </uui-color-swatches>` : S;
  }
  _renderPreviewButton() {
    return c`<button
        type="button"
        part="trigger"
        aria-label="${this.label || "Open Color picker"}"
        class=${Sa({
      "color-picker__trigger": !0,
      "color-dropdown__trigger--disabled": this.disabled,
      "color-dropdown__trigger--small": this.size === "small",
      "color-dropdown__trigger--medium": this.size === "medium",
      "color-dropdown__trigger--large": this.size === "large",
      "color-picker__transparent-bg": !0
    })}
        style=${Pe({
      "--preview-color": `hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha / 100})`
    })}
        ?disabled=${this.disabled}
        aria-haspopup="true"
        aria-expanded="false"
        popovertarget="color-picker-popover"></button>
      <uui-popover-container id="color-picker-popover">
        ${this._renderColorPicker()}
      </uui-popover-container>`;
  }
  render() {
    return this.inline ? this._renderColorPicker() : this._renderPreviewButton();
  }
};
j.styles = [
  b`
      :host {
        --uui-look-outline-border: #ddd;
        --uui-look-outline-border-hover: #aaa;
        font-size: 0.8rem;
        color: var(--uui-color-text,#060606);
        display: block;
        width: var(--uui-color-picker-width, 280px);
      }
      :host > button {
        cursor: pointer;
      }
      uui-popover-container {
        width: inherit;
      }
      .color-picker {
        width: 100%;
        background-color: var(--uui-color-surface,#fff);
        user-select: none;
        border: solid 1px var(--uui-color-border,#d8d7d9);
      }
      .color-picker__user-input {
        display: flex;
        padding: 0 0.75rem 0.75rem 0.75rem;
      }
      .color-picker__user-input uui-button {
        border: var(--uui-input-border-width, 1px) solid
          var(--uui-input-border-color, var(--uui-color-border,#d8d7d9));
        border-left: none;
      }
      .color-picker__preview,
      .color-picker__trigger {
        flex: 0 0 auto;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 2.25rem;
        height: 2.25rem;
        border: none;
        border-radius: 50%;
        background: none;
      }
      .color-picker__preview {
        cursor: copy;
        margin-left: 0.75rem;
        border-radius: 50%;
      }
      .color-picker__trigger[disabled] {
        cursor: not-allowed;
        opacity: 0.5;
      }
      .color-picker__preview::before,
      .color-picker__trigger::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
        background-color: var(--preview-color);
      }

      .color-dropdown__trigger--empty::before {
        background-color: transparent;
      }

      .color-picker__transparent-bg {
        border: 1px solid var(--uui-color-border,#d8d7d9);
        background-image: linear-gradient(
            45deg,
            var(--uui-palette-grey,#c4c4c4) 25%,
            transparent 25%
          ),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, var(--uui-palette-grey,#c4c4c4) 25%, transparent 25%);
        background-size: 10px 10px;
        background-position:
          0 0,
          0 0,
          -5px -5px,
          5px 5px;
      }

      .color-picker__preview-color--copied {
        animation: pulse 0.75s;
      }

      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 var(--uui-palette-space-cadet-light,rgb(
    38,
    53,
    110
  ));
        }
        70% {
          box-shadow: 0 0 0 0.5rem transparent;
        }
        100% {
          box-shadow: 0 0 0 0 transparent;
        }
      }

      .color-picker__controls {
        padding: 0.75rem;
        display: flex;
        align-items: center;
      }
      .color-picker__sliders {
        flex: 1 1 auto;
      }

      uui-color-slider:not(:last-of-type) {
        margin-bottom: 1rem;
      }

      .color-picker__toggle-format {
        min-width: 45px;
        --uui-button-font-size: 0.8rem;
      }
      .color-picker__toggle-format > span {
        text-transform: uppercase;
      }

      uui-color-swatches {
        border-top: solid 1px var(--uui-color-border,#d8d7d9);
        padding: 0.75rem;
      }

      button[slot='trigger'] {
        border-radius: 50%;
        cursor: pointer;
        width: 36px;
        height: 36px;
      }

      uui-input {
        /*  lower the font size to avoid overflow with hlsa format */
        font-size: 0.85rem;
        box-sizing: content-box;
        flex: 1;
      }

      uui-color-area {
        width: 100%;
      }
    `
];
G([
  U('[part="input"]')
], j.prototype, "_input", 2);
G([
  U(".color-picker__preview")
], j.prototype, "_previewButton", 2);
G([
  U("#swatches")
], j.prototype, "_swatches", 2);
G([
  w()
], j.prototype, "inputValue", 2);
G([
  w()
], j.prototype, "hue", 2);
G([
  w()
], j.prototype, "saturation", 2);
G([
  w()
], j.prototype, "lightness", 2);
G([
  w()
], j.prototype, "alpha", 2);
G([
  w()
], j.prototype, "_colord", 2);
G([
  l()
], j.prototype, "value", 1);
G([
  l()
], j.prototype, "format", 2);
G([
  l()
], j.prototype, "name", 2);
G([
  l()
], j.prototype, "size", 2);
G([
  l({ attribute: "no-format-toggle", type: Boolean })
], j.prototype, "noFormatToggle", 2);
G([
  l({ type: Boolean, reflect: !0 })
], j.prototype, "inline", 2);
G([
  l({ type: Boolean, reflect: !0 })
], j.prototype, "disabled", 2);
G([
  l({ type: Boolean })
], j.prototype, "opacity", 2);
G([
  l({ type: Boolean, reflect: !0 })
], j.prototype, "readonly", 2);
G([
  l({ type: Boolean })
], j.prototype, "uppercase", 2);
G([
  l({ attribute: !1 })
], j.prototype, "swatches", 2);
j = G([
  g("uui-color-picker")
], j);
var Wv = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }, he = function(e) {
  return typeof e == "string" ? e.length > 0 : typeof e == "number";
}, Z = function(e, t, i) {
  return t === void 0 && (t = 0), i === void 0 && (i = Math.pow(10, t)), Math.round(i * e) / i + 0;
}, Ot = function(e, t, i) {
  return t === void 0 && (t = 0), i === void 0 && (i = 1), e > i ? i : e > t ? e : t;
}, Rh = function(e) {
  return (e = isFinite(e) ? e % 360 : 0) > 0 ? e : e + 360;
}, lc = function(e) {
  return { r: Ot(e.r, 0, 255), g: Ot(e.g, 0, 255), b: Ot(e.b, 0, 255), a: Ot(e.a) };
}, aa = function(e) {
  return { r: Z(e.r), g: Z(e.g), b: Z(e.b), a: Z(e.a, 3) };
}, Gv = /^#([0-9a-f]{3,8})$/i, us = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, Fh = function(e) {
  var t = e.r, i = e.g, o = e.b, r = e.a, s = Math.max(t, i, o), n = s - Math.min(t, i, o), a = n ? s === t ? (i - o) / n : s === i ? 2 + (o - t) / n : 4 + (t - i) / n : 0;
  return { h: 60 * (a < 0 ? a + 6 : a), s: s ? n / s * 100 : 0, v: s / 255 * 100, a: r };
}, Wh = function(e) {
  var t = e.h, i = e.s, o = e.v, r = e.a;
  t = t / 360 * 6, i /= 100, o /= 100;
  var s = Math.floor(t), n = o * (1 - i), a = o * (1 - (t - s) * i), u = o * (1 - (1 - t + s) * i), h = s % 6;
  return { r: 255 * [o, a, n, n, u, o][h], g: 255 * [u, o, o, a, n, n][h], b: 255 * [n, n, u, o, o, a][h], a: r };
}, uc = function(e) {
  return { h: Rh(e.h), s: Ot(e.s, 0, 100), l: Ot(e.l, 0, 100), a: Ot(e.a) };
}, cc = function(e) {
  return { h: Z(e.h), s: Z(e.s), l: Z(e.l), a: Z(e.a, 3) };
}, hc = function(e) {
  return Wh((i = (t = e).s, { h: t.h, s: (i *= ((o = t.l) < 50 ? o : 100 - o) / 100) > 0 ? 2 * i / (o + i) * 100 : 0, v: o + i, a: t.a }));
  var t, i, o;
}, fo = function(e) {
  return { h: (t = Fh(e)).h, s: (r = (200 - (i = t.s)) * (o = t.v) / 100) > 0 && r < 200 ? i * o / 100 / (r <= 100 ? r : 200 - r) * 100 : 0, l: r / 2, a: t.a };
  var t, i, o, r;
}, qv = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Kv = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Yv = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Xv = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, dc = { string: [[function(e) {
  var t = Gv.exec(e);
  return t ? (e = t[1]).length <= 4 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? Z(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : e.length === 6 || e.length === 8 ? { r: parseInt(e.substr(0, 2), 16), g: parseInt(e.substr(2, 2), 16), b: parseInt(e.substr(4, 2), 16), a: e.length === 8 ? Z(parseInt(e.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
}, "hex"], [function(e) {
  var t = Yv.exec(e) || Xv.exec(e);
  return t ? t[2] !== t[4] || t[4] !== t[6] ? null : lc({ r: Number(t[1]) / (t[2] ? 100 / 255 : 1), g: Number(t[3]) / (t[4] ? 100 / 255 : 1), b: Number(t[5]) / (t[6] ? 100 / 255 : 1), a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1) }) : null;
}, "rgb"], [function(e) {
  var t = qv.exec(e) || Kv.exec(e);
  if (!t) return null;
  var i, o, r = uc({ h: (i = t[1], o = t[2], o === void 0 && (o = "deg"), Number(i) * (Wv[o] || 1)), s: Number(t[3]), l: Number(t[4]), a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1) });
  return hc(r);
}, "hsl"]], object: [[function(e) {
  var t = e.r, i = e.g, o = e.b, r = e.a, s = r === void 0 ? 1 : r;
  return he(t) && he(i) && he(o) ? lc({ r: Number(t), g: Number(i), b: Number(o), a: Number(s) }) : null;
}, "rgb"], [function(e) {
  var t = e.h, i = e.s, o = e.l, r = e.a, s = r === void 0 ? 1 : r;
  if (!he(t) || !he(i) || !he(o)) return null;
  var n = uc({ h: Number(t), s: Number(i), l: Number(o), a: Number(s) });
  return hc(n);
}, "hsl"], [function(e) {
  var t = e.h, i = e.s, o = e.v, r = e.a, s = r === void 0 ? 1 : r;
  if (!he(t) || !he(i) || !he(o)) return null;
  var n = function(a) {
    return { h: Rh(a.h), s: Ot(a.s, 0, 100), v: Ot(a.v, 0, 100), a: Ot(a.a) };
  }({ h: Number(t), s: Number(i), v: Number(o), a: Number(s) });
  return Wh(n);
}, "hsv"]] }, pc = function(e, t) {
  for (var i = 0; i < t.length; i++) {
    var o = t[i][0](e);
    if (o) return [o, t[i][1]];
  }
  return [null, void 0];
}, Zv = function(e) {
  return typeof e == "string" ? pc(e.trim(), dc.string) : typeof e == "object" && e !== null ? pc(e, dc.object) : [null, void 0];
}, la = function(e, t) {
  var i = fo(e);
  return { h: i.h, s: Ot(i.s + 100 * t, 0, 100), l: i.l, a: i.a };
}, ua = function(e) {
  return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 / 255;
}, fc = function(e, t) {
  var i = fo(e);
  return { h: i.h, s: i.s, l: Ot(i.l + 100 * t, 0, 100), a: i.a };
}, Ia = function() {
  function e(t) {
    this.parsed = Zv(t)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
  }
  return e.prototype.isValid = function() {
    return this.parsed !== null;
  }, e.prototype.brightness = function() {
    return Z(ua(this.rgba), 2);
  }, e.prototype.isDark = function() {
    return ua(this.rgba) < 0.5;
  }, e.prototype.isLight = function() {
    return ua(this.rgba) >= 0.5;
  }, e.prototype.toHex = function() {
    return t = aa(this.rgba), i = t.r, o = t.g, r = t.b, n = (s = t.a) < 1 ? us(Z(255 * s)) : "", "#" + us(i) + us(o) + us(r) + n;
    var t, i, o, r, s, n;
  }, e.prototype.toRgb = function() {
    return aa(this.rgba);
  }, e.prototype.toRgbString = function() {
    return t = aa(this.rgba), i = t.r, o = t.g, r = t.b, (s = t.a) < 1 ? "rgba(" + i + ", " + o + ", " + r + ", " + s + ")" : "rgb(" + i + ", " + o + ", " + r + ")";
    var t, i, o, r, s;
  }, e.prototype.toHsl = function() {
    return cc(fo(this.rgba));
  }, e.prototype.toHslString = function() {
    return t = cc(fo(this.rgba)), i = t.h, o = t.s, r = t.l, (s = t.a) < 1 ? "hsla(" + i + ", " + o + "%, " + r + "%, " + s + ")" : "hsl(" + i + ", " + o + "%, " + r + "%)";
    var t, i, o, r, s;
  }, e.prototype.toHsv = function() {
    return t = Fh(this.rgba), { h: Z(t.h), s: Z(t.s), v: Z(t.v), a: Z(t.a, 3) };
    var t;
  }, e.prototype.invert = function() {
    return de({ r: 255 - (t = this.rgba).r, g: 255 - t.g, b: 255 - t.b, a: t.a });
    var t;
  }, e.prototype.saturate = function(t) {
    return t === void 0 && (t = 0.1), de(la(this.rgba, t));
  }, e.prototype.desaturate = function(t) {
    return t === void 0 && (t = 0.1), de(la(this.rgba, -t));
  }, e.prototype.grayscale = function() {
    return de(la(this.rgba, -1));
  }, e.prototype.lighten = function(t) {
    return t === void 0 && (t = 0.1), de(fc(this.rgba, t));
  }, e.prototype.darken = function(t) {
    return t === void 0 && (t = 0.1), de(fc(this.rgba, -t));
  }, e.prototype.rotate = function(t) {
    return t === void 0 && (t = 15), this.hue(this.hue() + t);
  }, e.prototype.alpha = function(t) {
    return typeof t == "number" ? de({ r: (i = this.rgba).r, g: i.g, b: i.b, a: t }) : Z(this.rgba.a, 3);
    var i;
  }, e.prototype.hue = function(t) {
    var i = fo(this.rgba);
    return typeof t == "number" ? de({ h: t, s: i.s, l: i.l, a: i.a }) : Z(i.h);
  }, e.prototype.isEqual = function(t) {
    return this.toHex() === de(t).toHex();
  }, e;
}(), de = function(e) {
  return e instanceof Ia ? e : new Ia(e);
};
class Ua extends L {
  constructor(t, i = {}) {
    super(t, {
      bubbles: !0,
      ...i
    });
  }
}
Ua.CHANGE = "change";
var Jv = Object.defineProperty, Qv = Object.getOwnPropertyDescriptor, se = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Qv(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Jv(t, i, r), r;
};
let Ut = class extends ie("label", _) {
  constructor() {
    super(...arguments), this.type = "hue", this.color = "", this.min = 0, this.max = 100, this.precision = 1, this.vertical = !1, this.value = 0, this.readonly = !1, this.disabled = !1;
  }
  willUpdate(e) {
    if (e.has("type") && (this.type === "hue" ? this.max = this.max ?? 360 : this.type === "saturation" ? this.max = this.max ?? 100 : this.type === "lightness" ? this.max = this.max ?? 100 : this.type === "opacity" && (this.max = this.max ?? 100), this.precision = this.precision ?? 1, this.color)) {
      const t = new Ia(this.color), { h: i, s: o, l: r } = t.toHsl(), s = this.type === "saturation" ? `linear-gradient(to ${this.vertical ? "top" : "right"}, hsl(${i}, 0%, ${r}%), hsl(${i}, 100%, ${r}%))` : this.type === "lightness" ? `linear-gradient(to ${this.vertical ? "top" : "right"}, hsl(${i}, ${o}%, 0%), hsl(${i}, ${o}%, 100%))` : null;
      this.style.setProperty("--uui-slider-background-image", s);
    }
  }
  firstUpdated() {
    this.container = this.shadowRoot.querySelector("#color-slider"), this.handle = this.container.querySelector(
      "#color-slider__handle"
    );
  }
  handleDrag(e) {
    if (this.disabled || this.readonly || !this.container || !this.handle)
      return;
    const { width: t, height: i } = this.container.getBoundingClientRect();
    this.handle.focus(), e.preventDefault(), bh(this.container, {
      onMove: (o, r) => {
        this.vertical ? this.value = Ru(
          T(r / i * this.max, this.min, this.max),
          this.min,
          this.max
        ) : this.value = T(o / t * this.max, this.min, this.max), this.syncValues();
      },
      initialEvent: e
    });
  }
  handleClick(e) {
    this.disabled || this.readonly || (this.value = this.getValueFromMousePosition(e), this.syncValues());
  }
  handleKeyDown(e) {
    const t = e.shiftKey ? 10 : 1;
    e.key === "ArrowLeft" ? (e.preventDefault(), this.value = T(this.value - t, this.min, this.max), this.syncValues()) : e.key === "ArrowRight" ? (e.preventDefault(), this.value = T(this.value + t, this.min, this.max), this.syncValues()) : e.key === "ArrowUp" ? (e.preventDefault(), this.value = T(this.value + t, this.min, this.max), this.syncValues()) : e.key === "ArrowDown" ? (e.preventDefault(), this.value = T(this.value - t, this.min, this.max), this.syncValues()) : e.key === "Home" ? (e.preventDefault(), this.value = this.min, this.syncValues()) : e.key === "End" && (e.preventDefault(), this.value = this.max, this.syncValues());
  }
  getValueFromMousePosition(e) {
    return this.vertical ? this.getValueFromYCoordinate(e.clientY) : this.getValueFromXCoordinate(e.clientX);
  }
  getValueFromTouchPosition(e) {
    return this.vertical ? this.getValueFromYCoordinate(e.touches[0].clientY) : this.getValueFromXCoordinate(e.touches[0].clientX);
  }
  getValueFromXCoordinate(e) {
    const { left: t, width: i } = this.container.getBoundingClientRect();
    return T(
      this.roundToPrecision((e - t) / i * this.max),
      this.min,
      this.max
    );
  }
  getValueFromYCoordinate(e) {
    const { top: t, height: i } = this.container.getBoundingClientRect();
    return T(
      this.roundToPrecision((e - t) / i * this.max),
      this.min,
      this.max
    );
  }
  roundToPrecision(e) {
    const t = 1 / this.precision;
    return Math.ceil(e * t) / t;
  }
  syncValues() {
    this.dispatchEvent(new Ua(Ua.CHANGE));
  }
  get cssPropCurrentValue() {
    return this.value === 0 ? this.vertical ? 100 : 0 : 100 / (this.vertical ? this.max / Ru(this.value, this.min, this.max) : this.max / this.value);
  }
  render() {
    return c` <div
        part="slider"
        id="color-slider"
        role="slider"
        aria-label="${this.label}"
        aria-orientation="${this.vertical ? "vertical" : "horizontal"}"
        aria-valuemin="${Math.round(this.min)}"
        aria-valuemax="${Math.round(this.max)}"
        aria-valuenow="${Math.round(this.value)}"
        @click=${this.handleClick}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
        @keydown=${this.handleKeyDown}>
        ${this.type === "opacity" ? c`<div
              id="current-hue"
              style=${Pe({
      backgroundImage: `linear-gradient(to ${this.vertical ? "top" : "right"},
            transparent 0%,
            ${this.color} 100%
            )`
    })}></div>` : ""}
        <!-- <slot name="detail"> </slot> -->
        <span
          id="color-slider__handle"
          style="--current-value: ${this.cssPropCurrentValue}%;"
          tabindex=${k(this.disabled ? void 0 : "0")}>
        </span>
      </div>
      ${Math.round(this.value)}`;
  }
};
Ut.styles = [
  b`
      :host {
        --uui-slider-height: 15px;
        --uui-slider-handle-size: 17px;
        --uui-slider-background-image: #fff;
        --uui-slider-background-size: 100%;
        --uui-slider-background-position: top left;
        display: block;
      }

      :host([type='hue']) {
        --uui-slider-background-image: linear-gradient(
          to right,
          rgb(255, 0, 0) 0%,
          rgb(255, 255, 0) 17%,
          rgb(0, 255, 0) 33%,
          rgb(0, 255, 255) 50%,
          rgb(0, 0, 255) 67%,
          rgb(255, 0, 255) 83%,
          rgb(255, 0, 0) 100%
        );
      }

      :host([vertical][type='hue']) {
        --uui-slider-background-image: linear-gradient(
          to top,
          rgb(255, 0, 0) 0%,
          rgb(255, 255, 0) 17%,
          rgb(0, 255, 0) 33%,
          rgb(0, 255, 255) 50%,
          rgb(0, 0, 255) 67%,
          rgb(255, 0, 255) 83%,
          rgb(255, 0, 0) 100%
        );
      }

      :host([type='opacity']) {
        --uui-slider-background-image: linear-gradient(
            45deg,
            var(--uui-palette-grey,#c4c4c4) 25%,
            transparent 25%
          ),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, var(--uui-palette-grey,#c4c4c4) 25%, transparent 25%);

        --uui-slider-background-size: 10px 10px;
        --uui-slider-background-position: 0 0, 0 0, -5px -5px, 5px 5px;
      }

      #color-slider {
        position: relative;
        background-image: var(--uui-slider-background-image);
        background-size: var(--uui-slider-background-size);
        background-position: var(--uui-slider-background-position);
        border-radius: 3px;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
        width: 100%;
        height: var(--uui-slider-height);
      }

      :host([vertical]) #color-slider {
        width: var(--uui-slider-height);
        height: 300px;
      }

      :host([disabled]) {
        cursor: not-allowed;
      }

      :host([disabled]) #color-slider {
        user-select: none;
        pointer-events: none;
        opacity: 0.55;
      }

      :host([readonly]) {
        cursor: default;
      }

      :host([readonly]) #color-slider {
        pointer-events: none;
      }

      #color-slider__handle {
        position: absolute;
        top: calc(50% - var(--uui-slider-handle-size) / 2);
        width: var(--uui-slider-handle-size);
        height: var(--uui-slider-handle-size);
        background-color: white;
        border-radius: 50%;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
        margin-left: calc(var(--uui-slider-handle-size) / -2);
        left: var(--current-value, 0%);
      }

      :host([vertical]) #color-slider__handle {
        left: unset;
        top: var(--current-value, 100%);
        margin-left: -1px;
        margin-top: calc(var(--uui-slider-handle-size) / -2);
      }

      ::slotted(*:first-child) {
        border-radius: 3px;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
      }

      #current-hue {
        border-radius: 3px;
        position: absolute;
        inset: 0 0 0 0;
      }
    `
];
se([
  l({ reflect: !0 })
], Ut.prototype, "type", 2);
se([
  l()
], Ut.prototype, "color", 2);
se([
  l({ type: Number })
], Ut.prototype, "min", 2);
se([
  l({ type: Number })
], Ut.prototype, "max", 2);
se([
  l({ type: Number })
], Ut.prototype, "precision", 2);
se([
  l({ type: Boolean, reflect: !0 })
], Ut.prototype, "vertical", 2);
se([
  l()
], Ut.prototype, "value", 2);
se([
  l({ type: Boolean, reflect: !0 })
], Ut.prototype, "readonly", 2);
se([
  l({ type: Boolean, reflect: !0 })
], Ut.prototype, "disabled", 2);
Ut = se([
  g("uui-color-slider")
], Ut);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const vo = (e, t) => {
  var o;
  const i = e._$AN;
  if (i === void 0) return !1;
  for (const r of i) (o = r._$AO) == null || o.call(r, t, !1), vo(r, t);
  return !0;
}, Gs = (e) => {
  let t, i;
  do {
    if ((t = e._$AM) === void 0) break;
    i = t._$AN, i.delete(e), e = t;
  } while ((i == null ? void 0 : i.size) === 0);
}, Gh = (e) => {
  for (let t; t = e._$AM; e = t) {
    let i = t._$AN;
    if (i === void 0) t._$AN = i = /* @__PURE__ */ new Set();
    else if (i.has(e)) break;
    i.add(e), ib(t);
  }
};
function tb(e) {
  this._$AN !== void 0 ? (Gs(this), this._$AM = e, Gh(this)) : this._$AM = e;
}
function eb(e, t = !1, i = 0) {
  const o = this._$AH, r = this._$AN;
  if (r !== void 0 && r.size !== 0) if (t) if (Array.isArray(o)) for (let s = i; s < o.length; s++) vo(o[s], !1), Gs(o[s]);
  else o != null && (vo(o, !1), Gs(o));
  else vo(this, e);
}
const ib = (e) => {
  e.type == Lt.CHILD && (e._$AP ?? (e._$AP = eb), e._$AQ ?? (e._$AQ = tb));
};
class rb extends Tr {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(t, i, o) {
    super._$AT(t, i, o), Gh(this), this.isConnected = t._$AU;
  }
  _$AO(t, i = !0) {
    var o, r;
    t !== this.isConnected && (this.isConnected = t, t ? (o = this.reconnected) == null || o.call(this) : (r = this.disconnected) == null || r.call(this)), i && (vo(this, t), Gs(this));
  }
  setValue(t) {
    if (Nh(this._$Ct)) this._$Ct._$AI(t, this);
    else {
      const i = [...this._$Ct._$AH];
      i[this._$Ci] = t, this._$Ct._$AI(i, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
const ca = /* @__PURE__ */ new WeakMap(), bs = Mr(class extends rb {
  render(e) {
    return S;
  }
  update(e, [t]) {
    var o;
    const i = t !== this.G;
    return i && this.G !== void 0 && this.rt(void 0), (i || this.lt !== this.ct) && (this.G = t, this.ht = (o = e.options) == null ? void 0 : o.host, this.rt(this.ct = e.element)), S;
  }
  rt(e) {
    if (this.isConnected || (e = void 0), typeof this.G == "function") {
      const t = this.ht ?? globalThis;
      let i = ca.get(t);
      i === void 0 && (i = /* @__PURE__ */ new WeakMap(), ca.set(t, i)), i.get(this.G) !== void 0 && this.G.call(this.ht, void 0), i.set(this.G, e), e !== void 0 && this.G.call(this.ht, e);
    } else this.G.value = e;
  }
  get lt() {
    var e, t;
    return typeof this.G == "function" ? (e = ca.get(this.ht ?? globalThis)) == null ? void 0 : e.get(this.G) : (t = this.G) == null ? void 0 : t.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
});
var ob = Object.defineProperty, sb = Object.getOwnPropertyDescriptor, qh = (e) => {
  throw TypeError(e);
}, Lr = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? sb(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && ob(t, i, r), r;
}, nb = (e, t, i) => t.has(e) || qh("Cannot " + i), ab = (e, t, i) => t.has(e) ? qh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), lb = (e, t, i) => (nb(e, t, "access private method"), i), za, Kh;
let Ge = class extends ie(
  "label",
  Ur(Ko(_))
) {
  constructor() {
    super(), ab(this, za), this.disabled = !1, this.readonly = !1, this.showLabel = !1, this.addEventListener("click", this._setAriaAttributes);
  }
  get value() {
    return this._value ?? "";
  }
  set value(e) {
    const t = this._value;
    this._value = e, this.requestUpdate("value", t);
  }
  get color() {
    return this._color;
  }
  set color(e) {
    const t = this._color;
    this._color = e, this.requestUpdate("color", t);
  }
  _setAriaAttributes() {
    this.selectable && this.setAttribute("aria-checked", this.selected.toString());
  }
  firstUpdated() {
    this._setAriaAttributes();
  }
  willUpdate(e) {
    (e.has("disabled") || e.has("readonly")) && this.selectable && (this.selectable = !this.disabled && !this.readonly, this.deselectable = !this.disabled && !this.readonly), (e.has("selectable") || e.has("selected")) && this._setAriaAttributes();
  }
  focus(e) {
    var t;
    (t = this.selectableTarget) == null || t.focus(e);
  }
  render() {
    return c`
      <button
        id="swatch"
        ${bs(lb(this, za, Kh))}
        aria-label=${this.label}
        ?disabled="${this.disabled}"
        title="${this.label}">
        <div class="color-swatch color-swatch--transparent-bg">
          <div
            class="color-swatch__color"
            style="background: var(--uui-swatch-color, ${this.color ?? this.value})"></div>
          <div
            class="color-swatch__check"
            style="color: var(--uui-swatch-color, ${this.color ?? this.value})">
            ${Un}
          </div>
        </div>
        ${this._renderWithLabel()}
      </button>
    `;
  }
  _renderWithLabel() {
    return this.showLabel ? c`<div class="color-swatch__label">
      <strong>${this.renderLabel()}</strong>
      ${this.value}
    </div>` : S;
  }
};
za = /* @__PURE__ */ new WeakSet();
Kh = function(e) {
  this.selectableTarget = e || this;
};
Ge.styles = [
  b`
      :host {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        transition: box-shadow 100ms ease-out;
        flex-direction: column;
      }

      :host(*),
      * {
        /* TODO: implement globally shared outline style */
        outline-color: var(--uui-color-focus,#3879ff);
        outline-offset: 4px;
      }

      :host(:focus-within:not([disabled])) {
        outline: none;
      }

      :host(:focus:not([disabled])) #swatch {
        outline-color: var(--uui-color-focus,#3879ff);
        outline-width: var(--uui-swatch-border-width, 1px);
        outline-style: solid;
        outline-offset: var(--uui-swatch-border-width, 1px);
      }

      :host([selectable]) #swatch {
        cursor: pointer;
      }

      :host([disabled]) {
        cursor: not-allowed;
        opacity: 0.5;
      }

      :host([readonly]) {
        cursor: default;
      }

      #swatch {
        cursor: inherit;
        outline: none;
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        text-align: left;
        border-radius: 3px;
      }

      :host(:not([selectable])) #swatch:focus {
        outline: none;
      }

      :host([selectable]) #swatch::after {
        content: '';
        position: absolute;
        pointer-events: none;
        inset: calc(var(--uui-swatch-border-width, 1px) * -1);
        width: calc(100% + calc(var(--uui-swatch-border-width, 1px) * 2));
        height: calc(100% + calc(var(--uui-swatch-border-width, 1px) * 2));
        box-sizing: border-box;
        border: var(--uui-swatch-border-width, 2px) solid
          var(--uui-color-selected,#3544b1);
        border-radius: calc(
          var(--uui-border-radius,3px) + var(--uui-swatch-border-width, 1px)
        );
        transition: opacity 100ms ease-out;
        opacity: 0;
      }
      :host([selectable]:not([disabled]):hover) #swatch::after {
        opacity: 0.33;
      }
      :host([selectable][selected]:not([disabled]):hover) #swatch::after {
        opacity: 0.66;
      }
      :host([selectable][selected]:not([disabled])) #swatch::after {
        opacity: 1;
      }

      .color-swatch {
        position: relative;
        width: var(--uui-swatch-size, 25px);
        height: var(--uui-swatch-size, 25px);
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      :host([show-label]) .color-swatch {
        width: 120px;
        height: 50px;
      }

      .color-swatch.color-swatch--transparent-bg {
        background-image: linear-gradient(
            45deg,
            var(--uui-palette-grey,#c4c4c4) 25%,
            transparent 25%
          ),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, transparent 75%, var(--uui-palette-grey,#c4c4c4) 75%),
          linear-gradient(45deg, var(--uui-palette-grey,#c4c4c4) 25%, transparent 25%);
        background-size: 10px 10px;
        background-position:
          0 0,
          0 0,
          -5px -5px,
          5px 5px;
      }
      .color-swatch__color {
        width: 100%;
        height: 100%;
        border: 1px solid rgba(0, 0, 0, 0.125);
        border-radius: inherit;
        box-sizing: border-box;
      }

      :host([show-label]) .color-swatch__color {
        border-radius: 3px 3px 0 0;
      }

      .color-swatch__check {
        position: absolute;
        vertical-align: middle;
        width: calc(var(--uui-swatch-size, 25px) / 2);
        height: calc(var(--uui-swatch-size, 25px) / 2);
        line-height: 0;
        filter: invert(1) grayscale(1) contrast(9);
        pointer-events: none;
        opacity: 0;
      }

      :host([selected]) .color-swatch__check {
        opacity: 1;
      }

      slot[name='label']::slotted(*),
      .label {
        font-size: var(--uui-size-4,12px);
      }

      .color-swatch__label {
        max-width: 120px;
        box-sizing: border-box;
        padding: var(--uui-size-space-1,3px) var(--uui-size-space-2,6px);
        line-height: 1.5;
        display: flex;
        flex-direction: column;
        background: white;
        border: 1px solid var(--uui-color-border,#d8d7d9);
        border-radius: 0 0 3px 3px;
        font-size: var(--uui-size-4, 12px);
      }

      .color-swatch__label strong {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        box-sizing: border-box;
      }
    `
];
Lr([
  l()
], Ge.prototype, "value", 1);
Lr([
  l()
], Ge.prototype, "color", 1);
Lr([
  l({ type: Boolean, reflect: !0 })
], Ge.prototype, "disabled", 2);
Lr([
  l({ type: Boolean, reflect: !0 })
], Ge.prototype, "readonly", 2);
Lr([
  l({ type: Boolean, attribute: "show-label", reflect: !0 })
], Ge.prototype, "showLabel", 2);
Ge = Lr([
  g("uui-color-swatch")
], Ge);
class eo extends L {
  constructor(t, i = {}) {
    super(t, {
      bubbles: !0,
      ...i
    });
  }
}
eo.CHANGE = "change";
var ub = Object.defineProperty, cb = Object.getOwnPropertyDescriptor, Xo = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? cb(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && ub(t, i, r), r;
};
let Ai = class extends ie("label", _) {
  constructor() {
    super(), this.value = "", this.disabled = !1, this.readonly = !1, this._onSelected = (e) => {
      const t = e.target;
      this._swatches.includes(t) && (this._selectedElement && (this._selectedElement.selected = !1, this._selectedElement.active = !1, this._selectedElement = void 0), this._selectedElement = t, this._activeElement = this._selectedElement, this.value = this._selectedElement.value || "", this.dispatchEvent(new eo(eo.CHANGE)));
    }, this._onDeselected = (e) => {
      const t = e.target;
      this._swatches.includes(t) && (this._activeElement === t && (this._activeElement = void 0), this._selectedElement === t && (this._selectedElement.selected = !1, this._selectedElement.active = !1, this._selectedElement = void 0, this.value = "", this.dispatchEvent(
        new eo(eo.CHANGE)
      )));
    }, this.addEventListener(Be.SELECTED, this._onSelected), this.addEventListener(Be.DESELECTED, this._onDeselected);
  }
  get _activeElement() {
    return this.__activeElement;
  }
  set _activeElement(e) {
    this.__activeElement && (this.__activeElement.active = !1), e && (e.active = !0, this.__activeElement = e);
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "radiogroup"), this.setAttribute("aria-label", this.label);
  }
  willUpdate(e) {
    e.has("label") && this.setAttribute("aria-label", this.label);
  }
  _handleSlotChange() {
    !this._swatches || this._swatches.length === 0 || this._swatches.forEach((e) => {
      e.setAttribute("aria-checked", "false"), e.setAttribute("role", "radio"), this.disabled ? e.setAttribute("disabled", "") : e.setAttribute("selectable", "selectable"), this.readonly && e.setAttribute("readonly", ""), this.value !== "" && e.value === this.value && (e.selected = !0, e.setAttribute("aria-checked", "true"), this._selectedElement = e, this._activeElement = this._selectedElement);
    });
  }
  /**
   * Deselects all swatches.
   *
   * @memberof UUIColorSwatchesElement
   */
  resetSelection() {
    this._swatches.forEach((e) => {
      e.selected = !1, e.active = !1, e.selectable = !e.disabled;
    }), this._activeElement = void 0, this._selectedElement = void 0, this.value = "";
  }
  render() {
    return c`<slot @slotchange=${this._handleSlotChange}></slot>`;
  }
};
Ai.styles = [
  b`
      :host {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
      }
    `
];
Xo([
  l()
], Ai.prototype, "value", 2);
Xo([
  l({ type: Boolean, reflect: !0 })
], Ai.prototype, "disabled", 2);
Xo([
  l({ type: Boolean, reflect: !0 })
], Ai.prototype, "readonly", 2);
Xo([
  ri({ selector: "uui-color-swatch" })
], Ai.prototype, "_swatches", 2);
Ai = Xo([
  g("uui-color-swatches")
], Ai);
class Pt extends L {
  constructor(t, i = {}) {
    super(t, {
      bubbles: !0,
      ...i
    });
  }
}
Pt.CHANGE = "change";
Pt.INNER_SLOT_CHANGE = "inner-slot-change";
var hb = Object.defineProperty, db = Object.getOwnPropertyDescriptor, Yh = (e) => {
  throw TypeError(e);
}, oi = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? db(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && hb(t, i, r), r;
}, pb = (e, t, i) => t.has(e) || Yh("Cannot " + i), fb = (e, t, i) => t.has(e) ? Yh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), vc = (e, t, i) => (pb(e, t, "access private method"), i), gs, Ma;
let ee = class extends _ {
  constructor() {
    super(...arguments), fb(this, gs), this.displayValue = "", this._value = "", this._activeElementValue = null, this._onSlotChange = () => {
      vc(this, gs, Ma).call(this), this._updateSelection(), this.dispatchEvent(
        new Pt(Pt.INNER_SLOT_CHANGE)
      );
    }, this._onSelected = (e) => {
      this._selectedElement && (this._selectedElement.selected = !1, this._selectedElement.active = !1, this._selectedElement = void 0), this._selectedElement = e.composedPath()[0], this.value = this._selectedElement.value || "", this.displayValue = this._selectedElement.displayValue || "", this.dispatchEvent(new Pt(Pt.CHANGE));
    }, this._onDeselected = (e) => {
      const t = e.composedPath()[0];
      this._selectedElement === t && (this.value = "", this.displayValue = "", this.dispatchEvent(new Pt(Pt.CHANGE)));
    }, this._moveIndex = (e) => {
      const t = Math.min(
        Math.max(this._getActiveIndex + e, 0),
        this._options.length - 1
      );
      this._goToIndex(t);
    }, this._onKeyDown = (e) => {
      var t;
      if (!(this._options.length <= 0))
        switch (e.key) {
          case "ArrowUp":
            e.preventDefault(), e.ctrlKey ? this._moveIndex(-10) : this._moveIndex(-1);
            break;
          case "ArrowDown":
            e.preventDefault(), e.ctrlKey ? this._moveIndex(10) : this._moveIndex(1);
            break;
          case "Home": {
            e.preventDefault(), this._goToIndex(0);
            break;
          }
          case "Enter": {
            e.preventDefault(), (t = this._getActiveElement) == null || t.click();
            break;
          }
          case "End": {
            e.preventDefault(), this._goToIndex(this._options.length - 1);
            break;
          }
        }
    };
  }
  get value() {
    return this._value;
  }
  set value(e) {
    if (this._value === e) return;
    const t = this._value;
    this._value = e, this._updateSelection(), this.requestUpdate("value", t);
  }
  get for() {
    return this._for;
  }
  set for(e) {
    this._for && this._for.removeEventListener("keydown", this._onKeyDown), this._for = e, this._for && this._for.addEventListener("keydown", this._onKeyDown);
  }
  connectedCallback() {
    super.connectedCallback(), this._for || (this._for = this), this.addEventListener(Be.SELECTED, this._onSelected), this.addEventListener(Be.DESELECTED, this._onDeselected);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("keydown", this._onKeyDown), this.removeEventListener(Be.SELECTED, this._onSelected), this.removeEventListener(Be.DESELECTED, this._onDeselected);
  }
  _updateSelection() {
    this.displayValue = "";
    for (const e of this._options)
      e.value === this._value ? (this.displayValue = e.displayValue || "", e.selected = !0) : e.selected = !1;
  }
  get _getActiveIndex() {
    return this._activeElementValue === null ? -1 : this._options.findIndex(
      (e) => e.value === this._activeElementValue
    );
  }
  get _getActiveElement() {
    return this._activeElementValue === null ? null : this._options.find(
      (e) => e.value === this._activeElementValue
    );
  }
  _goToIndex(e) {
    if (this._options.length === 0) return;
    e = Math.min(Math.max(e, 0), this._options.length - 1);
    const t = this._options[e];
    this._activeElementValue = t.value, vc(this, gs, Ma).call(this), t && t.scrollIntoView({
      behavior: "auto",
      block: "nearest",
      inline: "nearest"
    });
  }
  render() {
    return c` <slot @slotchange=${this._onSlotChange}></slot> `;
  }
};
gs = /* @__PURE__ */ new WeakSet();
Ma = function() {
  for (let t = 0; t < this._activeOptions.length; t++)
    this._activeOptions[t].active = !1;
  const e = this._getActiveElement;
  e ? e.active = !0 : this._goToIndex(0);
};
ee.styles = [
  b`
      :host {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
      }
    `
];
oi([
  l()
], ee.prototype, "value", 1);
oi([
  l({ type: String })
], ee.prototype, "displayValue", 2);
oi([
  l({ attribute: !1 })
], ee.prototype, "for", 1);
oi([
  ri({
    flatten: !0,
    selector: "uui-combobox-list-option:not([disabled])"
  })
], ee.prototype, "_options", 2);
oi([
  ri({
    flatten: !0,
    selector: "uui-combobox-list-option[active]"
  })
], ee.prototype, "_activeOptions", 2);
oi([
  w()
], ee.prototype, "_value", 2);
oi([
  w()
], ee.prototype, "_activeElementValue", 2);
ee = oi([
  g("uui-combobox-list")
], ee);
var vb = Object.defineProperty, bb = Object.getOwnPropertyDescriptor, Nr = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? bb(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && vb(t, i, r), r;
};
let qe = class extends Ur(
  Ko(_)
) {
  constructor() {
    super(), this._disabled = !1, this._displayValue = "", this.selectable = !0, this.deselectable = !1;
  }
  get value() {
    var e;
    return this._value ? this._value : ((e = this.textContent) == null ? void 0 : e.trim()) || "";
  }
  set value(e) {
    const t = this._value;
    this._value = e, this.requestUpdate("value", t);
  }
  get displayValue() {
    var e;
    return this._displayValue ? this._displayValue : ((e = this.textContent) == null ? void 0 : e.trim()) || "";
  }
  set displayValue(e) {
    const t = this._displayValue;
    this._displayValue = e, this.requestUpdate("displayValue", t);
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(e) {
    const t = this._disabled;
    this._disabled = e, this.selectable = !this._disabled, this.requestUpdate("disabled", t);
  }
  render() {
    return c`<slot></slot>`;
  }
};
qe.styles = [
  b`
      :host {
        position: relative;
        cursor: pointer;
        margin: 1px var(--uui-size-2,6px);
        border-radius: var(--uui-border-radius,3px);
        outline: 2px solid transparent;
        outline-offset: -2px;
        padding: var(--uui-size-1,3px);
        padding-left: var(--uui-size-2,6px);
      }

      :host(:first-child) {
        margin-top: 6px;
      }
      :host(:last-child) {
        margin-bottom: 6px;
      }

      :host([selected]):host([active])::after {
        display: block;
        content: '';
        position: absolute;
        inset: 0px;
        outline: var(--uui-color-surface,#fff) solid 2px;
        outline-offset: -4px;
      }
      /*
      :host::before {
        display: block;
        content: '';
        opacity: 0;
        position: absolute;
        inset: 0;
        background-color: var(--uui-color-selected);
      }

      :host(:hover)::before {
        opacity: 0.15;
        border-radius: var(--uui-border-radius);
      } */

      :host(:hover) {
        background-color: var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ));
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }

      :host([disabled]) {
        cursor: auto;
        color: var(--uui-color-disabled-contrast,#c4c4c4);
        background-color: var(--uui-color-disabled,#f3f3f5);
      }

      :host([disabled]:hover) {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }

      :host([active]) {
        outline-color: var(--uui-color-focus,#3879ff);
      }

      :host([selected]) {
        color: var(--uui-color-selected-contrast,#fff);
        background-color: var(--uui-color-selected,#3544b1);
      }

      :host([selected]:hover) {
        color: var(--uui-color-selected-contrast,#fff);
        background-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }
      :host([selected][disabled]) {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
    `
];
Nr([
  w()
], qe.prototype, "_disabled", 2);
Nr([
  w()
], qe.prototype, "_displayValue", 2);
Nr([
  l({ type: String })
], qe.prototype, "value", 1);
Nr([
  l({ type: String, attribute: "display-value" })
], qe.prototype, "displayValue", 1);
Nr([
  l({ type: Boolean, reflect: !0 })
], qe.prototype, "disabled", 1);
qe = Nr([
  g("uui-combobox-list-option")
], qe);
class kt extends L {
  constructor(t, i = {}) {
    super(t, {
      bubbles: !0,
      ...i
    });
  }
}
kt.SEARCH = "search";
kt.CHANGE = "change";
var gb = Object.defineProperty, mb = Object.getOwnPropertyDescriptor, Xh = (e) => {
  throw TypeError(e);
}, at = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? mb(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && gb(t, i, r), r;
}, Gl = (e, t, i) => t.has(e) || Xh("Cannot " + i), A = (e, t, i) => (Gl(e, t, "read from private field"), i ? i.call(e) : t.get(e)), rt = (e, t, i) => t.has(e) ? Xh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Zh = (e, t, i, o) => (Gl(e, t, "write to private field"), t.set(e, i), i), ms = (e, t, i) => (Gl(e, t, "access private method"), i), vt, ji, Xi, Jh, io, qs, _s, ys, Ta, Ks, Ys, Da, ws, Ri, La, xs, $s, Na, ks;
let Q = class extends re(_, "") {
  constructor() {
    super(...arguments), rt(this, Xi), this.closeLabel = "Close", this.disabled = !1, this.hideExpandSymbol = !1, this.readonly = !1, this.placeholder = "", rt(this, vt), rt(this, ji), this._displayValue = "", this._search = "", this._isPhone = !1, this._isOpen = !1, rt(this, io, () => {
      this._isPhone = A(this, ji).matches;
    }), rt(this, _s, () => requestAnimationFrame(() => this._input.focus())), rt(this, ys, () => requestAnimationFrame(() => {
      var e;
      (e = this.shadowRoot) != null && e.activeElement || A(this, Ri).call(this);
    })), rt(this, Ta, (e) => {
      e.preventDefault(), e.stopImmediatePropagation(), this.search = e.target.value, this.dispatchEvent(new kt(kt.SEARCH)), A(this, ws).call(this);
    }), rt(this, Ks, () => {
      var e;
      this.value && this.value !== ((e = A(this, vt)) == null ? void 0 : e.value) && ms(this, Xi, qs).call(this);
    }), rt(this, Ys, () => {
      var e;
      this.value = ((e = A(this, vt)) == null ? void 0 : e.value) || "", this.search = this.value ? this.search : "", A(this, Ri).call(this), this.dispatchEvent(new kt(kt.CHANGE));
    }), rt(this, Da, () => {
      this.readonly || (this.open = !this.open);
    }), rt(this, ws, () => {
      this.open || this.readonly || (this.open = !0);
    }), rt(this, Ri, () => {
      this.open && (this.open = !1, this.search = "", this._input.value = this._displayValue, this.dispatchEvent(new kt(kt.SEARCH)));
    }), rt(this, La, (e) => {
      this.open === !1 && e.key === "Enter" && (e.preventDefault(), e.stopImmediatePropagation()), (e.key === "ArrowUp" || e.key === "ArrowDown") && A(this, ws).call(this), (e.key === "Escape" || e.key === "Enter") && A(this, Ri).call(this);
    }), rt(this, xs, (e) => {
      e.key && e.key !== "Enter" || (e.preventDefault(), e.stopImmediatePropagation(), this.value = "", this.search = "", this._input.value = this._displayValue, this._input.focus(), this.dispatchEvent(new kt(kt.SEARCH)), this.dispatchEvent(new kt(kt.CHANGE)));
    }), rt(this, $s, () => c` <uui-input
      slot="trigger"
      id="combobox-input"
      label="combobox-input"
      type="text"
      .value=${this._displayValue}
      .placeholder=${this.placeholder}
      autocomplete="off"
      .disabled=${this.disabled}
      .readonly=${this.readonly}
      popovertarget="combobox-popover"
      @click=${A(this, Da)}
      @input=${A(this, Ta)}
      @keydown=${A(this, La)}>
      <slot name="input-prepend" slot="prepend"></slot>
      ${A(this, Na).call(this)}
      ${this.hideExpandSymbol ? S : c`<div id="expand-symbol-wrapper" slot="append">
            <uui-symbol-expand .open=${this._isOpen}></uui-symbol-expand>
          </div>`}
      <slot name="input-append" slot="append"></slot>
    </uui-input>`), rt(this, Na, () => this.disabled || this.readonly ? S : c`<uui-button
      id="clear-button"
      @click=${A(this, xs)}
      @keydown=${A(this, xs)}
      label="clear"
      slot="append"
      compact
      style="height: 100%;"
      tabindex=${this.value || this.search ? "" : "-1"}
      class=${this.value || this.search ? "visible" : ""}>
      <uui-icon name="remove" .fallback=${Bl.strings[0]}></uui-icon>
    </uui-button>`), rt(this, ks, () => c`<div id="dropdown">
      <uui-scroll-container tabindex="-1" id="scroll-container">
        <slot @slotchange=${ms(this, Xi, Jh)}></slot>
      </uui-scroll-container>
    </div>`);
  }
  get value() {
    return super.value;
  }
  set value(e) {
    super.value = e, typeof e == "string" && ms(this, Xi, qs).call(this);
  }
  get search() {
    return this._search;
  }
  set search(e) {
    if (this.search === e) return;
    const t = this._search;
    this._search = e, this.requestUpdate("search", t);
  }
  get open() {
    return this._isOpen;
  }
  set open(e) {
    const t = e;
    this._isOpen = e;
    const i = this._comboboxPopoverElement;
    if (i)
      if (e) {
        const o = this._input.offsetWidth;
        i.style.setProperty("--popover-width", `${o}px`), i.showPopover();
      } else
        i.hidePopover();
    this.requestUpdate("open", t);
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("blur", A(this, ys)), this.addEventListener("mousedown", A(this, _s)), Zh(this, ji, window.matchMedia("(max-width: 600px)")), A(this, io).call(this), A(this, ji).addEventListener("change", A(this, io)), C(this, "uui-icon"), C(this, "uui-input"), C(this, "uui-button"), C(this, "uui-combobox-list"), C(this, "uui-scroll-container"), C(this, "uui-popover-container"), C(this, "uui-symbol-expand");
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("blur", A(this, ys)), this.removeEventListener("mousedown", A(this, _s)), A(this, ji).removeEventListener("change", A(this, io));
  }
  getFormElement() {
    return this._input;
  }
  async focus() {
    await this.updateComplete, this._input.focus();
  }
  async blur() {
    await this.updateComplete, this._input.blur();
  }
  async click() {
    await this.updateComplete, this._input.click();
  }
  render() {
    return this._isPhone && this.open ? c` <div id="phone-wrapper">
        <uui-button label="close" look="primary" @click=${A(this, Ri)}>
          ${this.closeLabel}
        </uui-button>
        ${A(this, $s).call(this)} ${A(this, ks).call(this)}
      </div>` : c`
        ${A(this, $s).call(this)}
        <uui-popover-container
          id="combobox-popover"
          popover="manual"
          placement="bottom-end">
          ${A(this, ks).call(this)}
        </uui-popover-container>
      `;
  }
};
vt = /* @__PURE__ */ new WeakMap();
ji = /* @__PURE__ */ new WeakMap();
Xi = /* @__PURE__ */ new WeakSet();
Jh = function() {
  var t;
  A(this, vt) && (A(this, vt).removeEventListener(
    Pt.CHANGE,
    A(this, Ys)
  ), A(this, vt).removeEventListener(
    Pt.INNER_SLOT_CHANGE,
    A(this, Ks)
  ));
  const e = (t = this._comboboxListElements) == null ? void 0 : t[0];
  e && (Zh(this, vt, e), A(this, vt).for = this, A(this, vt).addEventListener(
    Pt.CHANGE,
    A(this, Ys)
  ), A(this, vt).addEventListener(
    Pt.INNER_SLOT_CHANGE,
    A(this, Ks)
  )), this.updateComplete.then(() => {
    ms(this, Xi, qs).call(this);
  });
};
io = /* @__PURE__ */ new WeakMap();
qs = function() {
  A(this, vt) && (A(this, vt).value = this.value, requestAnimationFrame(
    () => this._displayValue = A(this, vt).displayValue || ""
  ));
};
_s = /* @__PURE__ */ new WeakMap();
ys = /* @__PURE__ */ new WeakMap();
Ta = /* @__PURE__ */ new WeakMap();
Ks = /* @__PURE__ */ new WeakMap();
Ys = /* @__PURE__ */ new WeakMap();
Da = /* @__PURE__ */ new WeakMap();
ws = /* @__PURE__ */ new WeakMap();
Ri = /* @__PURE__ */ new WeakMap();
La = /* @__PURE__ */ new WeakMap();
xs = /* @__PURE__ */ new WeakMap();
$s = /* @__PURE__ */ new WeakMap();
Na = /* @__PURE__ */ new WeakMap();
ks = /* @__PURE__ */ new WeakMap();
Q.styles = [
  b`
      :host {
        display: inline-block;
      }

      #combobox-input {
        width: 100%;
        border-radius: var(--uui-size-1,3px);
      }

      #combobox-popover {
        width: var(--uui-dropdown-width, var(--popover-width, inherit));
      }

      #scroll-container {
        overflow-y: auto;
        width: 100%;
        max-height: var(--uui-combobox-popover-max-height, 500px);
      }
      #expand-symbol-wrapper {
        height: 100%;
        padding-right: var(--uui-size-space-3,9px);
        display: flex;
        justify-content: center;
      }

      #clear-button {
        opacity: 0;
        transition: opacity 80ms;
      }

      :host(:not([disabled]):not([readonly]):focus-within)
        #clear-button.visible,
      :host(:not([disabled]):not([readonly]):hover) #clear-button.visible {
        opacity: 1;
      }

      #dropdown {
        overflow: hidden;
        z-index: -1;
        background-color: var(
          --uui-combobox-popover-background-color,
          var(--uui-color-surface,#fff)
        );
        border: 1px solid var(--uui-color-border,#d8d7d9);
        border-radius: var(--uui-border-radius,3px);
        width: 100%;
        box-sizing: border-box;
        box-shadow: var(--uui-shadow-depth-3,0 10px 20px rgba(0,0,0,0.19) , 0 6px 6px rgba(0,0,0,0.23));
      }

      :host([disabled]) #caret {
        fill: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      #phone-wrapper {
        position: fixed;
        inset: 0;
        display: flex;
        flex-direction: column;
        z-index: 1;
        font-size: 1.1em;
      }

      #phone-wrapper #dropdown {
        display: flex;
      }

      #phone-wrapper #combobox-input {
        height: var(--uui-size-16,48px);
      }

      #phone-wrapper > uui-button {
        height: var(--uui-size-14,42px);
        width: 100%;
      }

      #phone-wrapper #scroll-container {
        max-height: unset;
      }
    `
];
at([
  l({ attribute: "value", reflect: !0 })
], Q.prototype, "value", 1);
at([
  l({ type: String })
], Q.prototype, "search", 1);
at([
  l({ type: Boolean })
], Q.prototype, "open", 1);
at([
  l({ type: String, attribute: "close-label" })
], Q.prototype, "closeLabel", 2);
at([
  l({ type: Boolean, reflect: !0 })
], Q.prototype, "disabled", 2);
at([
  l({ type: Boolean, reflect: !1, attribute: "hide-expand-symbol" })
], Q.prototype, "hideExpandSymbol", 2);
at([
  l({ type: Boolean, reflect: !0 })
], Q.prototype, "readonly", 2);
at([
  l()
], Q.prototype, "placeholder", 2);
at([
  U("#combobox-input")
], Q.prototype, "_input", 2);
at([
  U("#combobox-popover")
], Q.prototype, "_comboboxPopoverElement", 2);
at([
  ri({
    flatten: !0,
    selector: "uui-combobox-list"
  })
], Q.prototype, "_comboboxListElements", 2);
at([
  w()
], Q.prototype, "_displayValue", 2);
at([
  w()
], Q.prototype, "_search", 2);
at([
  w()
], Q.prototype, "_isPhone", 2);
at([
  w()
], Q.prototype, "_isOpen", 2);
Q = at([
  g("uui-combobox")
], Q);
var _b = Object.defineProperty, yb = Object.getOwnPropertyDescriptor, ql = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? yb(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && _b(t, i, r), r;
};
let Eo = class extends _ {
  constructor() {
    super(...arguments), this.headline = null, this._headlineSlotHasContent = !1, this._headlineSlotChanged = (e) => {
      this._headlineSlotHasContent = e.target.assignedNodes({ flatten: !0 }).length > 0;
    };
  }
  /**
   * Renders a h3 with the headline slot nested
   * @returns {TemplateResult}
   * @protected
   * @method
   */
  renderHeadline() {
    return c` <h3
      style=${this._headlineSlotHasContent || this.headline !== null ? "" : "display: none"}>
      ${this.headline}
      <slot name="headline" @slotchange=${this._headlineSlotChanged}></slot>
    </h3>`;
  }
  /**
   * Renders default slot
   * @returns {TemplateResult}
   * @protected
   * @method
   */
  renderContent() {
    return c`<slot></slot>`;
  }
  /**
   * Renders actions slot
   * @returns {TemplateResult}
   * @protected
   * @method
   */
  renderActions() {
    return c`<slot id="actions" name="actions"></slot>`;
  }
  render() {
    return c`${this.renderHeadline()} ${this.renderContent()}
    ${this.renderActions()} `;
  }
};
Eo.styles = [
  b`
      :host {
        display: block;
        padding: var(--uui-size-10,30px) var(--uui-size-14,42px);
        color: var(--uui-color-text,#060606);
      }

      #actions {
        margin-top: var(--uui-size-8,24px);
        display: flex;
        justify-content: end;
        gap: var(--uui-size-4,12px);
      }
    `
];
ql([
  l({ type: String })
], Eo.prototype, "headline", 2);
ql([
  w()
], Eo.prototype, "_headlineSlotHasContent", 2);
Eo = ql([
  g("uui-dialog-layout")
], Eo);
var wb = Object.getOwnPropertyDescriptor, xb = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? wb(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = n(r) || r);
  return r;
};
let Ha = class extends _ {
  render() {
    return c`<slot></slot>`;
  }
};
Ha.styles = [
  b`
      :host {
        position: relative;
        display: block;
        max-width: 580px;
        color: var(--uui-color-text,#060606);

        background-color: var(
          --uui-dialog-background-color,
          var(--uui-color-surface,#fff)
        );

        box-shadow: var(--uui-shadow-depth-5,0 19px 38px rgba(0,0,0,0.30) , 0 15px 12px rgba(0,0,0,0.22));
        border-radius: var(
          --uui-dialog-border-radius,
          calc(var(--uui-border-radius,3px) * 2)
        );
      }
    `
];
Ha = xb([
  g("uui-dialog")
], Ha);
var $b = Object.defineProperty, kb = Object.getOwnPropertyDescriptor, Qh = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? kb(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && $b(t, i, r), r;
};
let Xs = class extends _ {
  constructor() {
    super(...arguments), this.error = !1;
  }
  render() {
    return c`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      id="upload-icon">
      <path
        d=${this.error ? "M254.501 38.16c-120.308 0-217.838 97.53-217.838 217.838 0 120.31 97.53 217.838 217.838 217.838 120.31 0 217.838-97.528 217.838-217.838 0-120.308-97.528-217.838-217.838-217.838zm151.667 217.838c0 29.861-8.711 57.708-23.671 81.209L173.293 128.002c23.499-14.961 51.345-23.67 81.208-23.67 83.629.001 151.667 68.037 151.667 151.666zm-303.332 0c0-29.859 8.71-57.707 23.67-81.204l209.201 209.201c-23.498 14.96-51.346 23.671-81.206 23.671-83.632 0-151.665-68.04-151.665-151.668z" : "M206.491 364.184h99.013V223.676h92.922L255.997 51.111 113.575 223.676h92.916zM85.043 398.311h341.912v62.578H85.043z"} />
    </svg> `;
  }
};
Xs.styles = [
  b`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      #upload-icon {
        fill: var(--uui-color-default,#1b264f);
        width: 100px;
        transition: fill 0.3s ease;
        position: relative;
        z-index: 2;
      }

      :host([error]) #upload-icon {
        fill: var(--uui-color-invalid,#d42054);
      }
    `
];
Qh([
  l({ type: Boolean, reflect: !0 })
], Xs.prototype, "error", 2);
Xs = Qh([
  g("uui-symbol-file-dropzone")
], Xs);
class ro extends L {
  constructor(t, i = {}) {
    super(t, {
      bubbles: !0,
      ...i
    });
  }
}
ro.CHANGE = "change";
var Cb = Object.defineProperty, Eb = Object.getOwnPropertyDescriptor, Hr = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Eb(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Cb(t, i, r), r;
};
let Ke = class extends ie("", _) {
  constructor() {
    super(), this._acceptedFileExtensions = [], this._acceptedMimeTypes = [], this._accept = "", this.disallowFolderUpload = !1, this.multiple = !1, this.addEventListener("dragenter", this._onDragEnter, !1), this.addEventListener("dragleave", this._onDragLeave, !1), this.addEventListener("dragover", this._onDragOver, !1), this.addEventListener("drop", this._onDrop, !1);
  }
  set accept(e) {
    if (e) {
      const i = [], o = [];
      e.split(",").forEach((r) => {
        r = r.trim().toLowerCase(), /[a-z]+\/[a-z*]/s.test(r) ? i.push(r) : o.push(r.replace(/^\./, ""));
      }), this._acceptedMimeTypes = i, this._acceptedFileExtensions = o;
    } else
      this._acceptedMimeTypes = [], this._acceptedFileExtensions = [];
    const t = this._accept;
    this._accept = e, this.requestUpdate("accept", t);
  }
  get accept() {
    return this._accept;
  }
  /**
   * Opens the native file picker to select a file.
   * @method browse
   */
  browse() {
    this._input.click();
  }
  async _getAllEntries(e) {
    const t = [...e], i = [], o = [];
    for (const r of t) {
      if ((r == null ? void 0 : r.kind) !== "file") continue;
      const s = this._getEntry(r);
      if (s)
        if (s.isDirectory) {
          if (!this.disallowFolderUpload && this.multiple) {
            const n = await this._mkdir(s);
            i.push(n);
          }
        } else {
          const n = r.getAsFile();
          if (!n) continue;
          this._isAccepted(n) && o.push(n);
        }
    }
    return { files: o, folders: i };
  }
  /**
   * Get the directory entry from a DataTransferItem.
   * @remark Supports both WebKit and non-WebKit browsers.
   */
  _getEntry(e) {
    let t = null;
    return "webkitGetAsEntry" in e ? t = e.webkitGetAsEntry() : "getAsEntry" in e && (t = e.getAsEntry()), t;
  }
  // Make directory structure
  async _mkdir(e) {
    const t = e.createReader(), i = [], o = [], r = (n) => new Promise((a, u) => {
      n.readEntries(async (h) => {
        if (!h.length) {
          a();
          return;
        }
        for (const f of h)
          if (f.isFile) {
            const d = await this._getAsFile(f);
            this._isAccepted(d) && o.push(d);
          } else if (f.isDirectory) {
            const d = await this._mkdir(
              f
            );
            i.push(d);
          }
        await r(n), a();
      }, u);
    });
    return await r(t), { folderName: e.name, folders: i, files: o };
  }
  _isAccepted(e) {
    if (this._acceptedFileExtensions.length === 0 && this._acceptedMimeTypes.length === 0)
      return !0;
    const t = e.type.toLowerCase(), i = e.name.split(".").pop();
    if (i && this._acceptedFileExtensions.includes(i.toLowerCase()))
      return !0;
    for (const o of this._acceptedMimeTypes) {
      if (t === o)
        return !0;
      if (o.endsWith("/*") && t.startsWith(o.replace("*", "")))
        return !0;
    }
    return !1;
  }
  async _getAsFile(e) {
    return new Promise((t, i) => e.file(t, i));
  }
  async _onDrop(e) {
    var i;
    e.preventDefault(), this._dropzone.classList.remove("hover");
    const t = (i = e.dataTransfer) == null ? void 0 : i.items;
    if (t) {
      const o = await this._getAllEntries(t);
      if (this.multiple === !1 && o.files.length && (o.files = [o.files[0]], o.folders = []), !o.files.length && !o.folders.length)
        return;
      this.dispatchEvent(
        new ro(ro.CHANGE, {
          detail: o
        })
      );
    }
  }
  _onDragOver(e) {
    e.preventDefault();
  }
  _onDragEnter(e) {
    this._dropzone.classList.add("hover"), e.preventDefault();
  }
  _onDragLeave(e) {
    this._dropzone.classList.remove("hover"), e.preventDefault();
  }
  _onFileInputChange() {
    const e = this._input.files ? Array.from(this._input.files) : [];
    this.multiple === !1 && e.length > 1 && e.splice(1, e.length - 1);
    const t = e.filter((i) => this._isAccepted(i));
    t.length && this.dispatchEvent(
      new ro(ro.CHANGE, {
        detail: { files: t, folders: [] }
      })
    );
  }
  render() {
    return c`
      <div id="dropzone">
        <uui-symbol-file-dropzone id="symbol"></uui-symbol-file-dropzone>
        ${this.renderLabel()}
        <input
          @click=${(e) => e.stopImmediatePropagation()}
          id="input"
          type="file"
          accept=${this.accept}
          ?multiple=${this.multiple}
          @change=${this._onFileInputChange}
          aria-label="${this.label}" />
        <slot></slot>
      </div>
    `;
  }
};
Ke.styles = [
  b`
      #dropzone {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: var(--uui-size-4,12px);
        border: 3px solid transparent;
        margin: -3px;
        backdrop-filter: blur(2px);
      }
      #dropzone.hover {
        border-color: var(--uui-color-default,#1b264f);
      }
      #dropzone.hover::before {
        content: '';
        position: absolute;
        inset: 0;
        opacity: 0.2;
        border-color: var(--uui-color-default,#1b264f);
        background-color: var(--uui-color-default,#1b264f);
      }
      #symbol {
        color: var(--uui-color-default,#1b264f);
        max-width: 100%;
        max-height: 100%;
      }
      #input {
        position: absolute;
        width: 0px;
        height: 0px;
        opacity: 0;
        display: none;
      }
    `
];
Hr([
  U("#input")
], Ke.prototype, "_input", 2);
Hr([
  U("#dropzone")
], Ke.prototype, "_dropzone", 2);
Hr([
  l({ type: String })
], Ke.prototype, "accept", 1);
Hr([
  l({
    type: Boolean,
    reflect: !0,
    attribute: "disallow-folder-upload"
  })
], Ke.prototype, "disallowFolderUpload", 2);
Hr([
  l({ type: Boolean })
], Ke.prototype, "multiple", 2);
Ke = Hr([
  g("uui-file-dropzone")
], Ke);
class Pb {
  static humanFileSize(t, i = !1, o = 1) {
    const r = i ? 1e3 : 1024;
    if (Math.abs(t) < r)
      return t + " B";
    const s = i ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"] : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
    let n = -1;
    const a = 10 ** o;
    do
      t /= r, ++n;
    while (Math.round(Math.abs(t) * a) / a >= r && n < s.length - 1);
    return t.toFixed(o) + " " + s[n];
  }
}
var Sb = Object.defineProperty, Ab = Object.getOwnPropertyDescriptor, ne = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Ab(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Sb(t, i, r), r;
};
let zt = class extends _ {
  constructor() {
    super(...arguments), this._name = "", this._url = "", this._extension = "", this._src = "", this._size = 0, this._isDirectory = !1;
  }
  get file() {
    return this._file;
  }
  set file(e) {
    const t = this._file;
    e instanceof File && (this._name = e.name.split(".")[0], this._extension = e.name.split(".")[1], this._isDirectory = !1, this._size = e.size, this._isFileAnImage(e) && (this._isImage = !0, this._getThumbnail(e).then((i) => {
      this._src = i;
    })), this.requestUpdate("file", t));
  }
  connectedCallback() {
    super.connectedCallback(), C(this, "uui-symbol-file-thumbnail"), C(this, "uui-symbol-folder"), C(this, "uui-symbol-file");
  }
  _openSource() {
    window.open(this._url, "_blank");
  }
  _fileTypeTemplate() {
    return this._isDirectory ? c`<uui-symbol-folder id="file-symbol"></uui-symbol-folder>` : this._isImage ? c`<uui-symbol-file-thumbnail
        .src=${this._src}
        .alt=${this._name}
        id="file-symbol"></uui-symbol-file-thumbnail>` : c`<uui-symbol-file
      id="file-symbol"
      .type=${this._extension}></uui-symbol-file>`;
  }
  _renderLongName() {
    const t = this._name.substring(0, this._name.length - 6), i = this._name.substring(
      this._name.length - 6,
      this._name.length
    );
    return c`
      <span
        id="file-name"
        class=${this._url ? "has-source" : ""}
        @click=${() => this._url ? this._openSource() : ""}
        @keydown=${() => ""}>
        <span id="file-name-start">${t}</span>
        <span id="file-name-end">${i}</span>
      </span>
    `;
  }
  _isFileAnImage(e) {
    return e ? e.type.split("/")[0] === "image" : !1;
  }
  async _getThumbnail(e) {
    return await new Promise((t) => {
      const i = new FileReader();
      i.readAsDataURL(e), i.onload = () => {
        t(i.result);
      };
    });
  }
  render() {
    return c`
      <slot id="actions" name="actions"></slot>
      ${this._fileTypeTemplate()}
      <div id="file-info">
        ${this._renderLongName()}
        <span id="file-size">
          ${this._size && !this._isDirectory ? c`${Pb.humanFileSize(this._size, !0)}` : ""}
        </span>
      </div>
    `;
  }
};
zt.styles = [
  b`
      :host {
        position: relative;
        display: grid;
        /* These have to be changed together */
        grid-template-rows: 100px 50px;
        width: 150px;
        height: 150px;
        /* --------------------------------- */
        box-sizing: border-box;
        aspect-ratio: 1;
        color: var(--uui-color-text,#060606);
      }

      :host(:hover) slot[name='actions']::slotted(*) {
        opacity: 1;
      }

      slot[name='actions']::slotted(*) {
        position: absolute;
        top: 8px;
        right: 8px;
        max-width: 100%;
        height: 32px;
        font-size: 13px;
        opacity: 0;
        z-index: 1;
        transition: opacity 150ms;
      }

      #file-symbol {
        aspect-ratio: 1 / 1;
        margin: auto;
        max-width: 100%;
        max-height: 100%;
      }

      #file-info {
        min-width: 0;
        display: flex;
        text-align: center;
        flex-direction: column;
        font-size: 1rem;
      }

      #file-name {
        display: flex;
        justify-content: center;
      }

      #file-name-start {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      #file-name-end {
        white-space: nowrap;
      }

      #file-size {
        opacity: 0.6;
      }

      .has-source:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    `
];
ne([
  w()
], zt.prototype, "_name", 2);
ne([
  w()
], zt.prototype, "_url", 2);
ne([
  w()
], zt.prototype, "_extension", 2);
ne([
  w()
], zt.prototype, "_src", 2);
ne([
  w()
], zt.prototype, "_size", 2);
ne([
  w()
], zt.prototype, "_isDirectory", 2);
ne([
  w()
], zt.prototype, "_file", 2);
ne([
  w()
], zt.prototype, "_isImage", 2);
ne([
  l({ attribute: !1 })
], zt.prototype, "file", 1);
zt = ne([
  g("uui-file-preview")
], zt);
var Ob = Object.defineProperty, Ib = Object.getOwnPropertyDescriptor, Dn = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Ib(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Ob(t, i, r), r;
};
let yr = class extends _ {
  constructor() {
    super(...arguments), this.description = null, this._labelSlotHasContent = !1, this._labelSlotChanged = (e) => {
      this._labelSlotHasContent = e.target.assignedNodes({ flatten: !0 }).length > 0;
    }, this._descriptionSlotHasContent = !1, this._descriptionSlotChanged = (e) => {
      this._descriptionSlotHasContent = e.target.assignedNodes({ flatten: !0 }).length > 0;
    };
  }
  connectedCallback() {
    super.connectedCallback(), C(this, "uui-form-validation-message");
  }
  render() {
    return c`
      <div id="label" style=${this._labelSlotHasContent ? "" : "display: none"}>
        <slot name="label" @slotchange=${this._labelSlotChanged}></slot>
      </div>
      <div
        id="description"
        style=${this._descriptionSlotHasContent || this.description !== null ? "" : "display: none"}>
        ${this.description}
        <slot
          name="description"
          @slotchange=${this._descriptionSlotChanged}></slot>
      </div>
      <uui-form-validation-message>
        <slot></slot>
        <slot name="message" slot="message"></slot>
      </uui-form-validation-message>
    `;
  }
};
yr.styles = [
  b`
      :host {
        position: relative;
        display: block;
        margin-top: var(--uui-size-space-5,18px);
        margin-bottom: var(--uui-size-space-5,18px);
      }
      #label {
        margin-top: -5px;
        margin-bottom: 5px;
      }
      #description {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
        font-size: var(--uui-type-small-size,12px);
      }
      #label + #description {
        margin-top: -8px;
        min-height: 8px;
      }
    `
];
Dn([
  l({ type: String })
], yr.prototype, "description", 2);
Dn([
  w()
], yr.prototype, "_labelSlotHasContent", 2);
Dn([
  w()
], yr.prototype, "_descriptionSlotHasContent", 2);
yr = Dn([
  g("uui-form-layout-item")
], yr);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const bc = (e, t, i) => {
  const o = /* @__PURE__ */ new Map();
  for (let r = t; r <= i; r++) o.set(e[r], r);
  return o;
}, Kl = Mr(class extends Tr {
  constructor(e) {
    if (super(e), e.type !== Lt.CHILD) throw Error("repeat() can only be used in text expressions");
  }
  dt(e, t, i) {
    let o;
    i === void 0 ? i = t : t !== void 0 && (o = t);
    const r = [], s = [];
    let n = 0;
    for (const a of e) r[n] = o ? o(a, n) : n, s[n] = i(a, n), n++;
    return { values: s, keys: r };
  }
  render(e, t, i) {
    return this.dt(e, t, i).values;
  }
  update(e, [t, i, o]) {
    const r = Uv(e), { values: s, keys: n } = this.dt(t, i, o);
    if (!Array.isArray(r)) return this.ut = n, s;
    const a = this.ut ?? (this.ut = []), u = [];
    let h, f, d = 0, x = r.length - 1, v = 0, $ = s.length - 1;
    for (; d <= x && v <= $; ) if (r[d] === null) d++;
    else if (r[x] === null) x--;
    else if (a[d] === n[v]) u[v] = di(r[d], s[v]), d++, v++;
    else if (a[x] === n[$]) u[$] = di(r[x], s[$]), x--, $--;
    else if (a[d] === n[$]) u[$] = di(r[d], s[$]), Kr(e, u[$ + 1], r[d]), d++, $--;
    else if (a[x] === n[v]) u[v] = di(r[x], s[v]), Kr(e, r[d], r[x]), x--, v++;
    else if (h === void 0 && (h = bc(n, v, $), f = bc(a, d, x)), h.has(a[d])) if (h.has(a[x])) {
      const O = f.get(n[v]), D = O !== void 0 ? r[O] : null;
      if (D === null) {
        const ot = Kr(e, r[d]);
        di(ot, s[v]), u[v] = ot;
      } else u[v] = di(D, s[v]), Kr(e, r[d], D), r[O] = null;
      v++;
    } else ra(r[x]), x--;
    else ra(r[d]), d++;
    for (; v <= $; ) {
      const O = Kr(e, u[$ + 1]);
      di(O, s[v]), u[v++] = O;
    }
    for (; d <= x; ) {
      const O = r[d++];
      O !== null && ra(O);
    }
    return this.ut = n, Hh(e, u), bt;
  }
});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Ba extends Tr {
  constructor(t) {
    if (super(t), this.it = S, t.type !== Lt.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(t) {
    if (t === S || t == null) return this._t = void 0, this.it = t;
    if (t === bt) return t;
    if (typeof t != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (t === this.it) return this._t;
    this.it = t;
    const i = [t];
    return i.raw = i, this._t = { _$litType$: this.constructor.resultType, strings: i, values: [] };
  }
}
Ba.directiveName = "unsafeHTML", Ba.resultType = 1;
const Cs = Mr(Ba);
var Ub = Object.defineProperty, zb = Object.getOwnPropertyDescriptor, td = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? zb(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Ub(t, i, r), r;
};
let Zs = class extends _ {
  constructor() {
    super(), this._for = null, this._messages = /* @__PURE__ */ new Map(), this._onControlInvalid = (e) => {
      const t = e.composedPath()[0];
      t.pristine === !1 ? this._messages.set(t, t.validationMessage) : this._messages.delete(t), this.requestUpdate("_messages");
    }, this._onControlValid = (e) => {
      const t = e.composedPath()[0];
      this._messages.delete(t), this.requestUpdate("_messages");
    }, this.for === null && (this.for = this);
  }
  get for() {
    return this._for;
  }
  set for(e) {
    let t = null;
    if (typeof e == "string") {
      const r = this.getRootNode();
      t = r == null ? void 0 : r.getElementById(e);
    } else e instanceof HTMLElement && (t = e);
    const i = t ?? this, o = this._for;
    o !== i && (o !== null && (o.removeEventListener(
      Ki.INVALID,
      this._onControlInvalid
    ), o.removeEventListener(
      Ki.VALID,
      this._onControlValid
    )), this._for = i, this._for.addEventListener(
      Ki.INVALID,
      this._onControlInvalid
    ), this._for.addEventListener(
      Ki.VALID,
      this._onControlValid
    ));
  }
  render() {
    return c`
      <slot></slot>
      <div id="messages">
        ${Kl(
      this._messages,
      (e) => c`<div>${Cs(e[1])}</div>`
    )}
        <slot name="message"></slot>
      </div>
    `;
  }
};
Zs.styles = [
  b`
      #messages {
        color: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
    `
];
td([
  l({ reflect: !1, attribute: !0 })
], Zs.prototype, "for", 1);
Zs = td([
  g("uui-form-validation-message")
], Zs);
var Mb = Object.getOwnPropertyDescriptor, Tb = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Mb(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = n(r) || r);
  return r;
};
let gc = class extends _ {
  constructor() {
    super(...arguments), this._formElement = null;
  }
  getFormElement() {
    return this._formElement;
  }
  _onSlotChanged(e) {
    this._formElement && (this._formElement.removeEventListener("submit", this._onSubmit), this._formElement.removeEventListener("reset", this._onReset));
    const t = e.target.assignedNodes({ flatten: !0 }).filter((i) => i instanceof HTMLFormElement);
    this._formElement = t.length > 0 ? t[0] : null, this._formElement && (this._formElement.setAttribute("novalidate", ""), this._formElement.addEventListener("submit", this._onSubmit), this._formElement.addEventListener("reset", this._onReset));
  }
  _onSubmit(e) {
    if (e.target === null)
      return;
    const t = e.target;
    if (!t.checkValidity()) {
      t.setAttribute("submit-invalid", "");
      return;
    }
    t.removeAttribute("submit-invalid");
  }
  _onReset(e) {
    e.target !== null && e.target.removeAttribute("submit-invalid");
  }
  render() {
    return c`<slot @slotchange=${this._onSlotChanged}></slot>`;
  }
};
gc = Tb([
  g("uui-form")
], gc);
class Po extends L {
  constructor(t, i = {}) {
    super(t, {
      bubbles: !0,
      composed: !0,
      ...i
    }), this.icon = null;
  }
  acceptRequest(t) {
    this.icon = t, this.stopImmediatePropagation();
  }
}
Po.ICON_REQUEST = "icon-request";
var Db = Object.defineProperty, Lb = Object.getOwnPropertyDescriptor, Ti = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Lb(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Db(t, i, r), r;
};
let Ae = class extends _ {
  constructor() {
    super(...arguments), this._name = null, this._retrievedNameIcon = !1, this._nameSvg = null, this.label = "", this.svg = null, this.fallback = null, this._useFallback = !1;
  }
  get name() {
    return this._name;
  }
  set name(e) {
    this._name = e, this.shadowRoot && this.requestIcon();
  }
  requestIcon() {
    if (this._name !== "" && this._name !== null) {
      const e = new Po(Po.ICON_REQUEST, {
        detail: { iconName: this._name }
      });
      this.dispatchEvent(e), e.icon !== null ? (this._retrievedNameIcon = !0, e.icon.then((t) => {
        this._useFallback = !1, this._nameSvg = t;
      })) : (this._retrievedNameIcon = !1, this._useFallback = !0);
    }
  }
  connectedCallback() {
    super.connectedCallback(), this._retrievedNameIcon === !1 && this.requestIcon();
  }
  disconnectedCallback() {
    this._retrievedNameIcon = !1;
  }
  firstUpdated() {
    this._retrievedNameIcon === !1 && this.requestIcon(), typeof this.label == "string" && this.label.length > 0 ? (this.setAttribute("role", "img"), this.setAttribute("aria-label", this.label), this.removeAttribute("aria-hidden")) : (this.removeAttribute("role"), this.removeAttribute("aria-label"), this.setAttribute("aria-hidden", "true"));
  }
  render() {
    return this._useFallback === !0 ? this.fallback === null ? c`<slot name="fallback"></slot>` : c`${Cs(this.fallback)}` : this._nameSvg !== null ? c`${Cs(this._nameSvg)}` : this.svg !== null ? c`${Cs(this.svg)}` : c`<slot></slot>`;
  }
};
Ae.styles = [
  b`
      :host {
        vertical-align: text-bottom;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1.125em;
        height: 1.125em;
      }

      :host svg,
      ::slotted(svg) {
        color: var(--uui-icon-color, currentColor);
        width: 100%;
      }

      :host-context(div[slot='prepend']) {
        margin-left: var(--uui-size-2, 6px);
      }

      :host-context(div[slot='append']) {
        margin-right: var(--uui-size-2, 6px);
      }
    `
];
Ti([
  w()
], Ae.prototype, "_nameSvg", 2);
Ti([
  l()
], Ae.prototype, "label", 2);
Ti([
  l()
], Ae.prototype, "name", 1);
Ti([
  l({ attribute: !1 })
], Ae.prototype, "svg", 2);
Ti([
  l({ attribute: !1 })
], Ae.prototype, "fallback", 2);
Ti([
  w()
], Ae.prototype, "_useFallback", 2);
Ae = Ti([
  g("uui-icon")
], Ae);
class mc {
  constructor(t) {
    this.promise = new Promise((i, o) => {
      this.resolve = i, this.reject = o;
    }), t && this.resolve(t);
  }
  set svg(t) {
    this.resolve(t);
  }
}
class ed {
  constructor() {
    this.icons = {}, this._onIconRequest = (t) => {
      const i = this.getIcon(t.detail.iconName);
      i !== null && t.acceptRequest(i);
    };
  }
  /**
   * Attach an element to provide this registry. Use detach when disconnected.
   * @param {EventTarget} element the element of which to provide this icon-set.
   */
  attach(t) {
    t.addEventListener(
      Po.ICON_REQUEST,
      this._onIconRequest
    );
  }
  /**
   * Detach an element from providing this registry.
   * @param {EventTarget} element the element of which to stop providing this icon-set.
   */
  detach(t) {
    t.removeEventListener(
      Po.ICON_REQUEST,
      this._onIconRequest
    );
  }
  /**
   * Define a icon to be served by this registry.
   * @param {string} iconName the name to use for this icon.
   * @param {string} svgString the svg source for this icon.
   */
  defineIcon(t, i) {
    if (this.icons[t]) {
      this.icons[t].svg = i;
      return;
    }
    this.icons[t] = new mc(i);
  }
  /**
   * Retrieve the SVG source of an icon, Returns ´null´ if the name does not exist.
   * @param {string} iconName the name of the icon to retrieve.
   */
  getIcon(t) {
    return this.icons[t] || this.acceptIcon(t) ? this.icons[t].promise : null;
  }
  /**
   * Declare that this registry will be providing a icon for this name
   * @param {string} iconName the name of the icon to be provided.
   */
  provideIcon(t) {
    return this.icons[t] = new mc();
  }
  /**
   * extend this method to provide your own logic.
   * @param iconName
   * @returns
   */
  //@ts-ignore-start
  // eslint-disable-next-line
  acceptIcon(t) {
    return !1;
  }
  //@ts-ignore-end
  /**
     * Dynamic concept by extending this class:
     * extend getIcon in this way:
  
      protected acceptIcon(iconName: string): boolean {
  
        // Check if this is something we want to accept and provide.
        if(iconName === "myCustomIcon") {
  
          // Inform that we will be providing this.
          const icon = this.provideIcon(iconName);
  
          // When data is available set it on this icon object, this can be done at any point in time:
          icon.svg = "...";
  
          return true;
        }
  
        return false;
      }
    */
  getIconNames() {
    return Object.keys(this.icons);
  }
}
var Nb = Object.defineProperty, Hb = Object.getOwnPropertyDescriptor, id = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Hb(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Nb(t, i, r), r;
};
let Js = class extends _ {
  constructor() {
    super(), this._icons = {}, this._registry = new ed(), this._registry.attach(this);
  }
  get icons() {
    return this._icons;
  }
  set icons(e) {
    this._icons = e, this._registry && Object.entries(this._icons).forEach(
      ([t, i]) => this._registry.defineIcon(t, i)
    );
  }
  get registry() {
    return this._registry;
  }
  set registry(e) {
    this.registry && this.registry.detach(this), e.attach(this), this._registry = e;
  }
  render() {
    return c`<slot></slot>`;
  }
};
id([
  l({ attribute: !1 })
], Js.prototype, "_icons", 2);
Js = id([
  g("uui-icon-registry")
], Js);
const Bb = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`, Vb = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>`, jb = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>`, Rb = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>`, Fb = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>`, Wb = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>`, Gb = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>`, qb = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m2 22 1-1h3l9-9" /><path d="M3 21v-3l9-9" /><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" /></svg>`, Kb = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" /><path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" /><path d="M15 2v5h5" /></svg>`, Yb = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>`, Xb = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>`, Zb = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>`, Jb = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>`, Qb = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>`, tg = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /><path d="M2 10h20" /></svg>`, eg = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`, ig = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>`, rg = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>`, og = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>`, sg = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="4" height="16" x="6" y="4" /><rect width="4" height="16" x="14" y="4" /></svg>`, ng = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>`, ag = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>`, lg = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>`, ug = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>`, cg = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>`, hg = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>`, dg = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>`, pg = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>`, fg = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></svg>`, vg = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg>`, bg = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2" /><path d="M15 16v-2" /><path d="M8 9h2" /><path d="M20 9h2" /><path d="M17.8 11.8 19 13" /><path d="M15 9h0" /><path d="M17.8 6.2 19 5" /><path d="m3 21 9-9" /><path d="M12.2 6.2 11 5" /></svg>`, gg = y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`;
class mg extends ed {
  constructor() {
    super(), this.defineIcon("add", Bb.strings[0]), this.defineIcon("alert", Vb.strings[0]), this.defineIcon("attachment", jb.strings[0]), this.defineIcon("calendar", Rb.strings[0]), this.defineIcon("check", Fb.strings[0]), this.defineIcon("clipboard", Wb.strings[0]), this.defineIcon("code", Gb.strings[0]), this.defineIcon("colorpicker", qb.strings[0]), this.defineIcon("copy", Kb.strings[0]), this.defineIcon("delete", Yb.strings[0]), this.defineIcon("document", Xb.strings[0]), this.defineIcon("download", Zb.strings[0]), this.defineIcon("edit", Jb.strings[0]), this.defineIcon("favorite", Qb.strings[0]), this.defineIcon("folder", tg.strings[0]), this.defineIcon("forbidden", eg.strings[0]), this.defineIcon("info", ig.strings[0]), this.defineIcon("link", rg.strings[0]), this.defineIcon("lock", og.strings[0]), this.defineIcon("pause", sg.strings[0]), this.defineIcon("picture", ng.strings[0]), this.defineIcon("play", ag.strings[0]), this.defineIcon("remove", lg.strings[0]), this.defineIcon("search", ug.strings[0]), this.defineIcon("see", cg.strings[0]), this.defineIcon("settings", hg.strings[0]), this.defineIcon("subtract", dg.strings[0]), this.defineIcon("sync", pg.strings[0]), this.defineIcon("unlock", fg.strings[0]), this.defineIcon("unsee", vg.strings[0]), this.defineIcon("wand", bg.strings[0]), this.defineIcon("wrong", gg.strings[0]);
  }
}
var _g = Object.getOwnPropertyDescriptor, yg = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? _g(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = n(r) || r);
  return r;
};
let _c = class extends Js {
  constructor() {
    super(), this.registry = new mg();
  }
};
_c = yg([
  g("uui-icon-registry-essential")
], _c);
var wg = Object.defineProperty, xg = Object.getOwnPropertyDescriptor, Br = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? xg(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && wg(t, i, r), r;
};
let Ye = class extends re(_) {
  constructor() {
    super(), this.accept = "", this.multiple = !1, this._files = [], this._updateFileWrappers = (e) => {
      let t = [];
      for (const i of e)
        this.multiple ? t.push(i) : t = [i];
      this._files = t;
    }, this.addEventListener("dragenter", () => this._setShowDropzone(!0)), this.addEventListener("dragleave", () => this._setShowDropzone(!1)), this.addEventListener("drop", () => this._setShowDropzone(!1));
  }
  get value() {
    return super.value;
  }
  set value(e) {
    if (super.value = e, e instanceof FormData) {
      const t = this.multiple ? e.getAll(this.name) : [e.get(this.name)];
      this._updateFileWrappers(t);
      return;
    }
    if (e instanceof File) {
      this._updateFileWrappers([e]);
      return;
    }
  }
  connectedCallback() {
    super.connectedCallback(), C(this, "uui-icon"), C(this, "uui-file-dropzone"), C(this, "uui-button"), C(this, "uui-action-bar"), C(this, "uui-file-preview");
  }
  getFormElement() {
    return this._dropZone;
  }
  /**
   * Removes focus from the input.
   */
  async blur() {
    await this.updateComplete, this._dropzone.blur();
  }
  /**
   * This method enables <label for="..."> to focus the input
   */
  async focus() {
    await this.updateComplete, this._dropzone.focus();
  }
  async click() {
    await this.updateComplete, this._dropzone.browse();
  }
  _handleClick(e) {
    e.stopImmediatePropagation(), this._dropzone.browse();
  }
  async _handleFilesChange(e) {
    const i = e.detail.files.filter(
      (r) => r instanceof File || r.isFile
    );
    if (!this.multiple) {
      const r = i[0], n = r instanceof File ? r : await this._getFile(r);
      if (this.value instanceof File) {
        this.value = n;
        return;
      }
      if (this.value instanceof FormData) {
        this.value.delete(this.name), this.value.append(this.name, n), this._updateFileWrappers([n]);
        return;
      }
    }
    let o = this.value;
    if (i.length > 0 && !(this.value instanceof FormData) && (o = new FormData()), o instanceof FormData)
      for (const r of i) {
        const s = r instanceof File;
        o.append(this.name, s ? r : await this._getFile(r));
      }
    this.value = o;
  }
  async _getFile(e) {
    return await new Promise(
      (t, i) => e.file(t, i)
    );
  }
  _removeFile(e) {
    const t = this._files[e];
    if (this.value instanceof FormData) {
      const o = this.value.getAll(this.name).filter((r) => r !== t);
      if (o.length === 0)
        this.value = "";
      else {
        this.value.delete(this.name);
        for (const r of o)
          this.value.append(this.name, r);
      }
      this._updateFileWrappers(o);
    }
    this.value instanceof File && (this.value = "", this._updateFileWrappers([]));
  }
  _setShowDropzone(e) {
    e ? this._dropZone.style.display = "flex" : this._dropZone.style.display = "none";
  }
  _renderFileItem(e, t) {
    return c`<uui-file-preview .file="${e}">
      <uui-action-bar slot="actions">
        <uui-button
          @click=${() => this._removeFile(t)}
          color="danger"
          label=${`Delete ${e.name}`}>
          <uui-icon name="delete" .fallback=${Lf.strings[0]}></uui-icon>
        </uui-button>
      </uui-action-bar>
    </uui-file-preview>`;
  }
  _renderFiles() {
    return c`${Kl(
      this._files,
      (e) => e.name + e.size,
      (e, t) => this._renderFileItem(e, t)
    )}`;
  }
  render() {
    return c`
      <uui-file-dropzone
        id="dropzone"
        ?multiple=${this.multiple}
        .accept=${this.accept}
        @change=${this._handleFilesChange}
        label="Drop files here"></uui-file-dropzone>
      <div id="files">
        ${this._renderFiles()}
        ${this._files.length === 0 || this.multiple ? c`<uui-button
              @click=${this._handleClick}
              id="add-button"
              look="placeholder"
              label="Add"></uui-button>` : S}
      </div>
    `;
  }
};
Ye.styles = [
  b`
      :host {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        box-sizing: border-box;
        border: 1px solid var(--uui-color-border,#d8d7d9);
      }

      #input {
        position: absolute;
        width: 0px;
        height: 0px;
        opacity: 0;
        display: none;
      }

      #files {
        display: grid;
        box-sizing: border-box;
        justify-items: center;
        width: 100%;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        grid-auto-rows: min-content;
        gap: 16px;
        padding: 16px;
        overflow: auto;
        max-height: 100%;
      }

      #dropzone {
        display: none;
        position: absolute;
        inset: 0px;
        z-index: 10;
        justify-content: center;
        align-items: center;
      }

      #add-button {
        width: 150px;
        height: 150px;
        display: flex;
        padding: 16px;
        box-sizing: border-box;
        justify-content: center;
        align-items: stretch;
      }
    `
];
Br([
  U("#dropzone")
], Ye.prototype, "_dropzone", 2);
Br([
  U("#dropzone")
], Ye.prototype, "_dropZone", 2);
Br([
  l({ type: String })
], Ye.prototype, "accept", 2);
Br([
  l({ type: Boolean })
], Ye.prototype, "multiple", 2);
Br([
  w()
], Ye.prototype, "_files", 2);
Ye = Br([
  g("uui-input-file")
], Ye);
class Zi extends L {
  constructor(t, i = {}) {
    super(t, {
      bubbles: !0,
      ...i
    });
  }
}
Zi.CHANGE = "change";
Zi.INPUT = "input";
var $g = Object.defineProperty, kg = Object.getOwnPropertyDescriptor, rd = (e) => {
  throw TypeError(e);
}, it = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? kg(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && $g(t, i, r), r;
}, Cg = (e, t, i) => t.has(e) || rd("Cannot " + i), Eg = (e, t, i) => t.has(e) ? rd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Pg = (e, t, i) => (Cg(e, t, "access private method"), i), Va, od;
let H = class extends re(
  ie("", _),
  ""
) {
  constructor() {
    super(), Eg(this, Va), this.minlengthMessage = (e) => `${e} characters left`, this.maxlengthMessage = (e, t) => `Maximum length exceeded (${t}/${e} characters)`, this.disabled = !1, this.readonly = !1, this.placeholder = "", this.autoWidth = !1, this.inputMode = "text", this.tabIndex = 0, this._type = "text", this.addEventListener("mousedown", () => {
      this.style.setProperty("--uui-show-focus-outline", "0");
    }), this.addEventListener("blur", () => {
      this.style.setProperty("--uui-show-focus-outline", "");
    }), this.addEventListener("keydown", Pg(this, Va, od)), this.addValidator(
      "tooShort",
      () => {
        const e = this.minlengthMessage;
        return typeof e == "function" ? e(
          this.minlength ? this.minlength - String(this.value).length : 0
        ) : e;
      },
      () => !!this.minlength && String(this.value).length < this.minlength
    ), this.addValidator(
      "tooLong",
      () => {
        const e = this.maxlengthMessage;
        return typeof e == "function" ? e(this.maxlength ?? 0, String(this.value).length) : e;
      },
      () => !!this.maxlength && String(this.value).length > this.maxlength
    ), this.updateComplete.then(() => {
      this.addFormControlElement(this._input);
    });
  }
  get type() {
    return this._type;
  }
  set type(e) {
    this._type = e;
  }
  /**
   * Removes focus from the input.
   */
  async blur() {
    await this.updateComplete, this._input.blur();
  }
  /**
   * This method enables <label for="..."> to focus the input
   */
  async focus() {
    await this.updateComplete, this._input.focus();
  }
  /**
   * Selects all the text in the input.
   */
  async select() {
    await this.updateComplete, this._input.select();
  }
  getFormElement() {
    var e;
    return (e = this.shadowRoot) == null ? void 0 : e.querySelector("input");
  }
  onInput(e) {
    e.stopPropagation(), this.value = e.target.value, this.dispatchEvent(new Zi(Zi.INPUT));
  }
  onChange(e) {
    e.stopPropagation(), this.pristine = !1, this.dispatchEvent(new Zi(Zi.CHANGE));
  }
  renderPrepend() {
    return c`<slot name="prepend"></slot>`;
  }
  renderAppend() {
    return c`<slot name="append"></slot>`;
  }
  render() {
    return c`
      ${this.renderPrepend()}
      ${this.autoWidth ? this.renderInputWithAutoWidth() : this.renderInput()}
      ${this.renderAppend()}
    `;
  }
  renderInputWithAutoWidth() {
    return c`<div id="control">
      ${this.renderInput()}${this.renderAutoWidthBackground()}
    </div>`;
  }
  renderInput() {
    return c`<input
      id="input"
      .type=${this.type}
      .value=${this.value}
      .name=${this.name}
      pattern=${k(this.pattern)}
      min=${k(this.min)}
      max=${k(this.max)}
      step=${k(this.step)}
      spellcheck=${this.spellcheck}
      autocomplete=${k(this.autocomplete)}
      placeholder=${k(this.placeholder)}
      aria-label=${k(this.label)}
      inputmode=${k(this.inputMode)}
      ?disabled=${this.disabled}
      ?autofocus=${this.autofocus}
      ?required=${this.required}
      ?readonly=${this.readonly}
      tabindex=${k(this.tabIndex)}
      @input=${this.onInput}
      @change=${this.onChange} />`;
  }
  renderAutoWidthBackground() {
    return c` <div id="auto" aria-hidden="true">${this.renderText()}</div>`;
  }
  renderText() {
    return c`${this.value.length > 0 ? this.value : this.placeholder}`;
  }
};
Va = /* @__PURE__ */ new WeakSet();
od = function(e) {
  this.type !== "color" && e.key == "Enter" && this.submit();
};
H.formAssociated = !0;
H.styles = [
  b`
      :host {
        position: relative;
        display: inline-flex;
        align-items: stretch;
        height: var(--uui-input-height, var(--uui-size-11,33px));
        text-align: left;
        color: var(--uui-color-text,#060606);
        color-scheme: var(--uui-color-scheme, normal);
        box-sizing: border-box;
        background-color: var(
          --uui-input-background-color,
          var(--uui-color-surface,#fff)
        );
        border: var(--uui-input-border-width, 1px) solid
          var(--uui-input-border-color, var(--uui-color-border,#d8d7d9));
        border-radius: var(--uui-border-radius,3px);

        --uui-button-height: 100%;
        --auto-width-text-margin-right: 0;
        --auto-width-text-margin-left: 0;
      }

      #control {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        flex-grow: 1;
      }

      #auto {
        border: 0 1px solid transparent;
        visibility: hidden;
        white-space: pre;
        z-index: -1;
        height: 0px;
        padding: 0 var(--uui-size-space-3,9px);
        margin: 0 var(--auto-width-text-margin-right) 0
          var(--auto-width-text-margin-left);
      }

      :host([auto-width]) #input {
        width: 10px;
        min-width: 100%;
      }

      :host(:hover) {
        border-color: var(
          --uui-input-border-color-hover,
          var(--uui-color-border-standalone,#c2c2c2)
        );
      }
      /* TODO: Fix so we dont get double outline when there is focus on things in the slot. */
      :host(:focus-within) {
        border-color: var(
          --uui-input-border-color-focus,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }
      :host(:focus) {
        border-color: var(
          --uui-input-border-color-focus,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
      }
      :host([disabled]) {
        background-color: var(
          --uui-input-background-color-disabled,
          var(--uui-color-disabled,#f3f3f5)
        );
        border-color: var(
          --uui-input-border-color-disabled,
          var(--uui-color-disabled,#f3f3f5)
        );

        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) input {
        -webkit-text-fill-color: var(
          --uui-color-disabled-contrast,#c4c4c4
        ); /* required on Safari and IOS */
      }
      :host([readonly]) {
        background-color: var(
          --uui-input-background-color-readonly,
          var(--uui-color-disabled,#f3f3f5)
        );
        border-color: var(
          --uui-input-border-color-readonly,
          var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ))
        );
      }

      :host(:not([pristine]):invalid),
      /* polyfill support */
      :host(:not([pristine])[internals-invalid]) {
        border-color: var(--uui-color-invalid,#d42054);
      }

      input {
        font-family: inherit;
        padding: 1px var(--uui-size-space-3,9px);
        font-size: inherit;
        color: inherit;
        border-radius: var(--uui-border-radius,3px);
        box-sizing: border-box;
        border: none;
        background: none;
        width: 100%;
        height: inherit;
        text-align: inherit;
        outline: none;
      }

      input[type='password']::-ms-reveal {
        display: none;
      }

      /* TODO: make sure color looks good, or remove it as an option as we want to provide color-picker component */
      input[type='color'] {
        width: 30px;
        padding: 0;
        border: none;
      }

      slot[name='prepend'],
      slot[name='append'] {
        display: flex;
        align-items: center;
        line-height: 1;
        height: 100%;
      }

      ::slotted(uui-input),
      ::slotted(uui-input-lock) {
        height: 100%;
        --uui-input-border-width: 0;
      }
    `
];
it([
  l()
], H.prototype, "min", 2);
it([
  l({ type: Number })
], H.prototype, "minlength", 2);
it([
  l({ attribute: "minlength-message" })
], H.prototype, "minlengthMessage", 2);
it([
  l()
], H.prototype, "max", 2);
it([
  l({ type: Number })
], H.prototype, "maxlength", 2);
it([
  l({ attribute: "maxlength-message" })
], H.prototype, "maxlengthMessage", 2);
it([
  l({ type: Number })
], H.prototype, "step", 2);
it([
  l({ type: Boolean, reflect: !0 })
], H.prototype, "disabled", 2);
it([
  l({ type: Boolean, reflect: !0 })
], H.prototype, "readonly", 2);
it([
  l()
], H.prototype, "placeholder", 2);
it([
  l()
], H.prototype, "autocomplete", 2);
it([
  l({ type: Boolean, reflect: !0, attribute: "auto-width" })
], H.prototype, "autoWidth", 2);
it([
  l({ type: String })
], H.prototype, "type", 1);
it([
  l({ attribute: "inputmode" })
], H.prototype, "inputMode", 2);
it([
  l({ type: String })
], H.prototype, "pattern", 2);
it([
  l({ type: Number, reflect: !1, attribute: "tabindex" })
], H.prototype, "tabIndex", 2);
it([
  U("#input")
], H.prototype, "_input", 2);
H = it([
  g("uui-input")
], H);
class ja extends L {
  constructor(t, i = {}) {
    super(t, {
      bubbles: !0,
      ...i
    });
  }
}
ja.LOCK_CHANGE = "lock-change";
var Sg = Object.defineProperty, Ag = Object.getOwnPropertyDescriptor, sd = (e) => {
  throw TypeError(e);
}, Ln = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Ag(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Sg(t, i, r), r;
}, nd = (e, t, i) => t.has(e) || sd("Cannot " + i), Og = (e, t, i) => (nd(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Ig = (e, t, i) => t.has(e) ? sd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ug = (e, t, i, o) => (nd(e, t, "write to private field"), t.set(e, i), i), Es;
let wr = class extends H {
  constructor() {
    super(), Ig(this, Es, !0), this.unlockLabel = "Unlock input", this.lockLabel = "Lock input", this.readonly = !0, this.tabIndex = -1;
  }
  set locked(e) {
    Ug(this, Es, e), this.tabIndex = e ? -1 : 0;
  }
  get locked() {
    return Og(this, Es);
  }
  connectedCallback() {
    super.connectedCallback(), C(this, "uui-icon"), C(this, "uui-button");
  }
  _onLockToggle() {
    var e;
    this.readonly = this.locked = !this.locked, this.pristine = !1, this.dispatchEvent(new ja(ja.LOCK_CHANGE)), this.locked || (e = this._input) == null || e.focus();
  }
  renderIcon() {
    return this.locked === !0 ? c`<uui-icon name="lock" .fallback=${Nf.strings[0]}></uui-icon>` : c`<uui-icon
          name="unlock"
          .fallback=${jf.strings[0]}></uui-icon>`;
  }
  renderPrepend() {
    return c`<uui-button
      .disabled=${this.disabled}
      @click=${this._onLockToggle}
      compact
      id="lock"
      label="${this.locked ? this.unlockLabel : this.lockLabel}">
      ${this.renderIcon()}
    </uui-button>`;
  }
};
Es = /* @__PURE__ */ new WeakMap();
wr.styles = [
  ...H.styles,
  b`
      #lock {
        height: 100%;

        --uui-button-padding-left-factor: 0.75;
        --uui-button-padding-right-factor: 0.75;
        font-size: 12px;
      }

      :host([locked]) #input {
        cursor: not-allowed;
        opacity: 0.55;
      }
    `
];
Ln([
  l({ type: Boolean, reflect: !0 })
], wr.prototype, "locked", 1);
Ln([
  l({ type: String, reflect: !1, attribute: "unlock-label" })
], wr.prototype, "unlockLabel", 2);
Ln([
  l({ type: String, reflect: !1, attribute: "lock-label" })
], wr.prototype, "lockLabel", 2);
wr = Ln([
  g("uui-input-lock")
], wr);
var zg = Object.defineProperty, Mg = Object.getOwnPropertyDescriptor, Yl = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Mg(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && zg(t, i, r), r;
};
let So = class extends H {
  constructor() {
    super(...arguments), this.passwordType = "password";
  }
  get type() {
    return this.passwordType;
  }
  set type(e) {
    this.passwordType = e;
  }
  _onPasswordToggle() {
    this.passwordType === "password" ? this.passwordType = "text" : this.passwordType = "password";
  }
  connectedCallback() {
    super.connectedCallback(), C(this, "uui-icon"), C(this, "uui-button"), this.hasAttribute("spellcheck") || (this.spellcheck = !1);
  }
  renderIcon() {
    return this.passwordType === "password" ? c`<uui-icon name="see" .fallback=${Bf.strings[0]}></uui-icon>` : c`<uui-icon
          name="unsee"
          .fallback=${Rf.strings[0]}></uui-icon>`;
  }
  renderAppend() {
    return c`<uui-button
      .disabled=${this.disabled}
      @click=${this._onPasswordToggle}
      compact
      label="${this.passwordType === "password" ? "Show password" : "Hide password"}"
      id="eye">
      ${this.renderIcon()}
    </uui-button>`;
  }
};
So.styles = [
  ...H.styles,
  b`
      #eye {
        height: 100%;
        margin-left: -6px;
      }

      #clear:hover {
        color: black;
      }
    `
];
Yl([
  w()
], So.prototype, "passwordType", 2);
Yl([
  l()
], So.prototype, "type", 1);
So = Yl([
  g("uui-input-password")
], So);
var Tg = Object.getOwnPropertyDescriptor, Dg = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Tg(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = n(r) || r);
  return r;
};
let Ra = class extends _ {
  render() {
    return c`<slot></slot>`;
  }
};
Ra.styles = [
  b`
      :host {
        display: inline-block;
        font-family: inherit;
        font-size: var(--uui-size-4,12px);
        color: var(--uui-color-text,#060606);
      }

      ::slotted(*:first-child)uui-key {
        margin-left: 0px;
      }

      ::slotted(*:last-child)uui-key {
        margin-right: 0px;
      }
    `
];
Ra = Dg([
  g("uui-keyboard-shortcut")
], Ra);
var Lg = Object.getOwnPropertyDescriptor, Ng = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Lg(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = n(r) || r);
  return r;
};
let Fa = class extends _ {
  render() {
    return c`<slot></slot>`;
  }
};
Fa.styles = [
  b`
      :host {
        background: var(--uui-color-surface,#fff);
        border: 1px solid var(--uui-color-border,#d8d7d9);
        font-family: inherit;
        font-size: var(--uui-type-small-size,12px);
        color: var(--uui-color-text,#060606);
        border-radius: 5px;
        margin: 0px 5px;
        padding: 5px 7px;
        box-sizing: border-box;
        user-select: none;
        text-transform: lowercase;
      }
    `
];
Fa = Ng([
  g("uui-key")
], Fa);
var Hg = Object.defineProperty, Bg = Object.getOwnPropertyDescriptor, Nn = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Bg(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Hg(t, i, r), r;
};
let xr = class extends _ {
  constructor() {
    super(), this.disabled = !1, this.for = null, this.required = !1, this.addEventListener("click", this._onClick);
  }
  _onClick() {
    if (this.disabled) return;
    const e = this.getForElement();
    e && (e.focus(), e.click());
  }
  getForElement() {
    if (typeof this.for == "string") {
      const e = this.getRootNode();
      return (e == null ? void 0 : e.getElementById(this.for)) || null;
    }
    return this.for || null;
  }
  render() {
    return c`
      <slot></slot>
      ${this.required ? c`<div id="required">*</div>` : ""}
    `;
  }
};
xr.styles = [
  b`
      :host {
        font-weight: 700;
      }
      :host([for]) {
        cursor: pointer;
      }
      :host([disabled]) {
        cursor: default;
      }
      #required {
        display: inline;
        color: var(--uui-color-danger,#d42054);
        font-weight: 900;
      }
    `
];
Nn([
  l({ type: Boolean, reflect: !0 })
], xr.prototype, "disabled", 2);
Nn([
  l({ reflect: !0, attribute: !0 })
], xr.prototype, "for", 2);
Nn([
  l({ type: Boolean, reflect: !0 })
], xr.prototype, "required", 2);
xr = Nn([
  g("uui-label")
], xr);
var Vg = Object.defineProperty, jg = Object.getOwnPropertyDescriptor, Xl = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? jg(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Vg(t, i, r), r;
};
let Ao = class extends _ {
  constructor() {
    super(...arguments), this._progress = 0, this._animationDuration = 1;
  }
  get progress() {
    return this._progress;
  }
  set progress(e) {
    const t = this._progress;
    this._progress = T(e, 0, 100), this.requestUpdate("progress", t);
  }
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(e) {
    const t = this._animationDuration;
    this._animationDuration = e >= 0 ? e : 1, this.requestUpdate("animationDuration", t);
  }
  render() {
    return c`
      ${this.progress ? c`<div
            id="bar"
            style="max-width: ${this.progress.toString()}%;"></div>` : ""}
      <div
        id="bar-anim"
        class=${this.progress ? "" : "animate"}
        style="animation-duration: ${this.animationDuration}s"></div>
      <div id="bar-background"></div>
    `;
  }
};
Ao.styles = [
  b`
      :host {
        position: relative;
        display: block;
        width: 100%;
        height: 4px;
        overflow: hidden;
        color: var(--uui-color-default,#1b264f);
      }

      #bar,
      #bar-anim,
      #bar-background {
        position: absolute;
        inset: 0; /* top, left, bottom and right = 0*/
        height: 100%;
      }

      #bar-background,
      #bar {
        background: currentColor;
      }

      #bar {
        transition: max-width 120ms ease;
      }

      #bar-background {
        opacity: 0.3;
      }

      #bar-anim {
        transform: scaleX(0.4);
        animation: bar-loading 1s infinite linear;
        background: linear-gradient(
          -90deg,
          white 0%,
          white 25%,
          transparent 100%
        );
      }

      #bar-anim.animate {
        background: linear-gradient(
          -90deg,
          currentColor 0%,
          currentColor 25%,
          transparent 100%
        );
      }

      @keyframes bar-loading {
        0% {
          transform-origin: -175% 0%;
        }
        100% {
          transform-origin: 175% 0%;
        }
      }
    `
];
Xl([
  l({ type: Number })
], Ao.prototype, "progress", 1);
Xl([
  l({ type: Number })
], Ao.prototype, "animationDuration", 1);
Ao = Xl([
  g("uui-loader-bar")
], Ao);
var Rg = Object.defineProperty, Fg = Object.getOwnPropertyDescriptor, Zl = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Fg(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Rg(t, i, r), r;
};
let Oo = class extends _ {
  constructor() {
    super(...arguments), this.progress = 0, this.showProgress = !1, this._resizeObserver = new ResizeObserver(() => this.onResize()), this._isLarge = !1;
  }
  _circleStyle() {
    return this.progress ? { strokeDasharray: `${this.progress} 100` } : { strokeDasharray: "100 100" };
  }
  firstUpdated() {
    this._resizeObserver.observe(this);
  }
  disconnectedCallback() {
    this._resizeObserver.disconnect();
  }
  onResize() {
    const e = this.clientHeight >= 30;
    this._isLarge != e && (this._isLarge = e, this.requestUpdate());
  }
  renderProgress() {
    return this._isLarge && this.progress && this.showProgress ? c`<span id="progress-display">${this.progress}</span>` : "";
  }
  render() {
    return c`
      <svg
        id="spinner"
        class=${this.progress ? "" : "animate"}
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg">
        <circle id="bg" cx="50%" cy="50%" r="16" />
        <g>
          <circle
            id="circle"
            cx="50%"
            cy="50%"
            r="16"
            style=${Pe(this._circleStyle())} />
        </g>
      </svg>
      ${this.renderProgress()}
    `;
  }
};
Oo.styles = [
  b`
      :host {
        vertical-align: middle;
        line-height: 0;
        overflow: hidden;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 1em;
        height: 1em;
        color: var(--uui-color-default,#1b264f);
      }

      #spinner {
        width: 100%;
        height: 100%;
      }
      #spinner g {
        transform-origin: 50% 50%;
        animation: 18s linear infinite spinner-animation;
      }
      #spinner.animate g {
        animation: 800ms linear infinite spinner-animation;
      }

      @keyframes spinner-animation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      #spinner.animate #circle {
        animation: 1400ms ease-in infinite circle-animation;
        /** ease-in */
      }

      @keyframes circle-animation {
        0% {
          stroke-dashoffset: -55;
        }
        38% {
          stroke-dashoffset: -88;
        }
        100% {
          stroke-dashoffset: -55;
        }
      }

      svg circle {
        fill: transparent;
        stroke: currentColor;
        stroke-width: 6px;
      }

      #bg {
        opacity: 0.5;
      }

      #circle {
        stroke-linecap: round;
        stroke-dasharray: 0 0;

        transform-origin: 50% 50%;
        transform: rotate(-90deg);
        transition: stroke-dasharray 120ms ease;
      }

      #progress-display {
        position: absolute;
        left: 0;
        top: 50%;
        right: 0;
        stroke: currentColor;
        transform: translateY(-50%);
        font-size: 0.3em;
        font-weight: 700;
        text-align: center;

        /* Center the text */
        padding-top: 0.09em;
      }
    `
];
Zl([
  l({ type: Number })
], Oo.prototype, "progress", 2);
Zl([
  l({ type: Boolean, reflect: !0, attribute: "show-progress" })
], Oo.prototype, "showProgress", 2);
Oo = Zl([
  g("uui-loader-circle")
], Oo);
var Wg = Object.getOwnPropertyDescriptor, Gg = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Wg(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = n(r) || r);
  return r;
};
let Wa = class extends _ {
  render() {
    return c`
      <div></div>
      <div></div>
      <div></div>
    `;
  }
};
Wa.styles = [
  b`
      :host {
        color: var(--uui-color-default,#1b264f);
      }

      div {
        display: inline-block;
        width: var(--uui-size-2,6px);
        height: var(--uui-size-2,6px);
        border: 2px solid currentColor;
        border-radius: 100%;
        animation: loaderAnimation 1.4s infinite;
      }

      div:nth-child(1n) {
        animation-delay: 0s;
      }

      div:nth-child(2n) {
        animation-delay: 0.15s;
      }

      div:nth-child(3n) {
        animation-delay: 0.3s;
      }

      @keyframes loaderAnimation {
        0% {
          transform: scale(0.5);
          background-color: currentColor;
        }
        50% {
          transform: scale(1);
          background-color: transparent;
        }
        100% {
          transform: scale(0.5);
          background-color: currentColor;
        }
      }
    `
];
Wa = Gg([
  g("uui-loader")
], Wa);
class je extends L {
}
je.SHOW_CHILDREN = "show-children";
je.HIDE_CHILDREN = "hide-children";
je.CLICK_LABEL = "click-label";
var qg = Object.defineProperty, Kg = Object.getOwnPropertyDescriptor, ad = (e) => {
  throw TypeError(e);
}, Vt = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Kg(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && qg(t, i, r), r;
}, Yg = (e, t, i) => t.has(e) || ad("Cannot " + i), Xg = (e, t, i) => t.has(e) ? ad("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), yc = (e, t, i) => (Yg(e, t, "access private method"), i), Ps, Ga;
let yt = class extends An(
  Ur(Ko(ie("label", _)))
) {
  constructor() {
    super(...arguments), Xg(this, Ps), this.disabled = !1, this.showChildren = !1, this.hasChildren = !1, this.loading = !1, this.caretLabel = "Reveal the underlying items", this.iconSlotHasContent = !1, this._labelButtonChanged = (e) => {
      this.selectableTarget = e || this;
    }, this._iconSlotChanged = (e) => {
      this.iconSlotHasContent = e.target.assignedNodes({ flatten: !0 }).length > 0;
    }, this._onCaretClicked = () => {
      const e = this.showChildren ? je.HIDE_CHILDREN : je.SHOW_CHILDREN, t = new je(e, { cancelable: !0 });
      this.dispatchEvent(t), !t.defaultPrevented && (this.showChildren = !this.showChildren);
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.hasAttribute("role") || this.setAttribute("role", "menu"), C(this, "uui-symbol-expand"), C(this, "uui-loader-bar");
  }
  async focus() {
    var e, t, i;
    await this.updateComplete, (i = (t = (e = this.shadowRoot) == null ? void 0 : e.querySelector("#label-button")) == null ? void 0 : t.focus) == null || i.call(t);
  }
  _renderLabelInside() {
    return c` <slot
        name="icon"
        id="icon"
        style=${this.iconSlotHasContent ? "" : "display: none;"}
        @slotchange=${this._iconSlotChanged}></slot>
      ${this.renderLabel()}
      <slot name="badge" id="badge"> </slot>`;
  }
  _renderLabelAsAnchor() {
    return this.disabled ? c` <span id="label-button" ${bs(this._labelButtonChanged)}>
        ${this._renderLabelInside()}
      </span>` : c` <a
      id="label-button"
      ${bs(this._labelButtonChanged)}
      href=${k(this.href)}
      target=${k(this.target || void 0)}
      rel=${k(
      this.rel || k(
        this.target === "_blank" ? "noopener noreferrer" : void 0
      )
    )}
      @click=${yc(this, Ps, Ga)}
      ?disabled=${this.disabled}
      aria-label="${this.label}">
      ${this._renderLabelInside()}
    </a>`;
  }
  _renderLabelAsButton() {
    return c` <button
      id="label-button"
      ${bs(this._labelButtonChanged)}
      @click=${yc(this, Ps, Ga)}
      ?disabled=${this.disabled}
      aria-label="${this.label}">
      ${this._renderLabelInside()}
    </button>`;
  }
  render() {
    return c`
      <div id="menu-item" aria-label="menuitem" role="menuitem">
        ${this.hasChildren ? c`<button
              id="caret-button"
              aria-label=${this.caretLabel}
              @click=${this._onCaretClicked}>
              <uui-symbol-expand
                aria-hidden="true"
                ?open=${this.showChildren}></uui-symbol-expand>
            </button>` : ""}
        ${this.href && this.selectOnly !== !0 && this.selectable !== !0 ? this._renderLabelAsAnchor() : this._renderLabelAsButton()}

        <div id="label-button-background"></div>
        <slot id="actions-container" name="actions"></slot>
        ${this.loading ? c`<uui-loader-bar id="loader"></uui-loader-bar>` : ""}
      </div>
      ${this.showChildren ? c`<slot></slot>` : ""}
    `;
  }
};
Ps = /* @__PURE__ */ new WeakSet();
Ga = function() {
  if (this.selectOnly) return;
  const e = new je(je.CLICK_LABEL);
  this.dispatchEvent(e);
};
yt.styles = [
  b`
      :host {
        box-sizing: border-box;
        display: block;
        --uui-menu-item-child-indent: calc(var(--uui-menu-item-indent, 0) + 1);
        user-select: none;
        --flat-structure-reversed: calc(
          1 - var(--uui-menu-item-flat-structure, 0)
        );
      }

      #menu-item {
        position: relative;
        padding-left: calc(var(--uui-menu-item-indent, 0) * var(--uui-size-4,12px));
        display: grid;
        grid-template-columns:
          calc(var(--flat-structure-reversed) * var(--uui-size-8,24px))
          1fr;
        grid-template-rows: 1fr;
        white-space: nowrap;
      }

      /** Not active, not selected, not disabled: */
      :host(:not([active], [selected], [disabled], [select-mode='highlight']))
        #menu-item
        #label-button:hover
        ~ #label-button-background,
      :host(:not([active], [selected], [disabled]))
        #menu-item
        #caret-button:hover {
        background-color: var(
          --uui-menu-item-background-color-hover,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
      }
      :host(:not([active], [selected], [disabled]))
        #menu-item
        #label-button:hover,
      :host(:not([active], [selected])) #menu-item #caret-button:hover {
        color: var(
          --uui-menu-item-color-hover,
          var(--uui-color-interactive-emphasis,#3544b1)
        );
      }

      /** Active */
      :host([active]) #label-button,
      :host([active]) #caret-button {
        color: var(
          --uui-menu-item-color-active,
          var(--uui-color-current-contrast,#1b264f)
        );
      }
      :host([active]) #label-button-background {
        background-color: var(
          --uui-menu-item-background-color-active,
          var(--uui-color-current,#f5c1bc)
        );
      }
      :host([active]) #label-button:hover ~ #label-button-background,
      :host([active]) #caret-button:hover {
        background-color: var(
          --uui-menu-item-background-color-active-hover,
          var(--uui-color-current-emphasis,rgb(
    248,
    214,
    211
  ))
        );
      }

      /** Disabled */
      :host([disabled]) #menu-item {
        background-color: var(
          --uui-menu-item-background-color-disabled,
          var(--uui-color-disabled,#f3f3f5)
        );
      }

      /** Selected */
      :host([selected]:not([select-mode='highlight'], [disabled]))
        #label-button,
      :host([selected]:not([select-mode='highlight'], [disabled]))
        #caret-button {
        color: var(
          --uui-menu-item-color-selected,
          var(--uui-color-selected-contrast,#fff)
        );
      }
      :host([selected]:not([select-mode='highlight'], [disabled]))
        #label-button-background {
        background-color: var(
          --uui-menu-item-background-color-selected,
          var(--uui-color-selected,#3544b1)
        );
      }
      /** Selected, not highlight mode */
      :host([selected]:not([select-mode='highlight'], [disabled]))
        #label-button:hover
        ~ #label-button-background,
      :host([selected]:not([select-mode='highlight'], [disabled]))
        #caret-button:hover {
        background-color: var(
          --uui-menu-item-background-color-selected-hover,
          var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ))
        );
      }

      /** highlight mode, default */
      :host([select-mode='highlight']:not([disabled], [active], [selectable]))
        #menu-item
        #label-button:hover
        ~ #label-button-background {
        border-radius: var(--uui-border-radius,3px);
        background-color: var(
          --uui-menu-item-background-color-highlight,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
      }

      /** highlight mode, active */
      :host([select-mode='highlight'][active]:not([disabled]))
        #menu-item
        #label-button-background {
        border-radius: var(--uui-border-radius,3px);
      }

      /** highlight mode, active & selected */
      :host([select-mode='highlight'][active][selected]:not([disabled]))
        #menu-item
        #label-button:hover
        ~ #label-button-background {
        border-radius: var(--uui-border-radius,3px);
        background-color: var(
          --uui-menu-item-background-color-highlight-active-selected,
          var(--uui-color-current-emphasis,rgb(
    248,
    214,
    211
  ))
        );
      }

      /** highlight mode, selected */
      :host([select-mode='highlight'][selected]:not([disabled]))
        #menu-item
        #label-button,
      :host([select-mode='highlight'][selected]:not([disabled]))
        #menu-item
        #caret-button {
        color: var(
          --uui-menu-item-color-highlight-selected,
          var(--uui-color-interactive,#1b264f)
        );
      }
      :host([select-mode='highlight'][selectable][selected]:not([disabled]))
        #menu-item
        #label-button:hover {
        color: var(
          --uui-menu-item-background-color-highlight-selectable-selected,
          var(--uui-color-interactive-emphasis,#3544b1)
        );
      }

      /** highlight mode, selected, selectable caret hover */
      :host([selected][selectable][select-mode='highlight']:not([active]))
        #menu-item
        #caret-button:hover {
        border-radius: var(--uui-border-radius,3px);
        background-color: var(
          --uui-menu-item-background-color-highlight-selectable-selected,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
        color: var(
          --uui-menu-item-color-highlight-selectable-selected,
          var(--uui-color-interactive-emphasis,#3544b1)
        );
      }

      /** Highlight borders */

      :host([select-mode='highlight']:not([disabled]))
        #menu-item
        #label-button-background::after {
        border-radius: var(--uui-border-radius,3px);
        position: absolute;
        content: '';
        inset: 1px;
        border: 2px solid
          var(--uui-menu-item-border-color-highlight, var(--uui-color-selected,#3544b1));
        opacity: 0;
      }

      :host([select-mode='highlight'][selectable][selected]:not([disabled]))
        #menu-item
        #caret-button:hover::after {
        border-top-left-radius: var(--uui-border-radius,3px);
        border-bottom-left-radius: var(--uui-border-radius,3px);
        position: absolute;
        content: '';
        inset: 1px 0 1px 1px;
        border: 2px solid
          var(--uui-menu-item-border-color-highlight, var(--uui-color-selected,#3544b1));
        border-right: none;
      }

      :host([select-mode='highlight'][selected]:not([disabled]))
        #menu-item
        #label-button-background::after {
        opacity: 1;
      }

      :host([select-mode='highlight'][selectable]:not([disabled]))
        #menu-item
        #label-button:hover
        ~ #label-button-background::after {
        opacity: 0.33;
      }
      :host([select-mode='highlight'][selected]:not([disabled]))
        #menu-item
        #label-button:hover
        ~ #label-button-background::after {
        opacity: 0.66;
      }

      /** Buttons */

      :host([disabled]) #label-button {
        cursor: default;
        opacity: 0.5;
      }

      button {
        display: inline-flex;
        align-items: center;

        font-family: inherit;
        font-size: inherit;

        padding: 0;
        text-align: left;
        border: none;
        color: inherit;
        background-color: transparent;
        cursor: pointer;
        min-height: var(--uui-size-12,36px);
        z-index: 1;
      }

      #label-button {
        position: relative;
        flex-grow: 1;
        grid-column-start: 2;
        white-space: nowrap;
        overflow: hidden;
        padding-right: var(--uui-size-space-3,9px);
        padding-left: calc(
          var(--uui-menu-item-flat-structure) * var(--uui-size-space-3,9px)
        );
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        color: currentColor;
        min-height: var(--uui-size-12,36px);
        z-index: 1;
        font-weight: inherit;
      }

      #label-button .label {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      span#label-button {
        pointer-events: none; /* avoid hovering state on this. */
      }

      #caret-button {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
        padding-inline-end: 3px;
        color: var(--uui-color-interactive,#1b264f);
      }

      #label-button-background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: var(--uui-menu-item-border-radius, 0px);
      }

      #actions-container {
        opacity: 0;
        width: 0;
        grid-column-start: 3;
        overflow: hidden;
      }
      :host(:not([disabled])) #menu-item:hover #actions-container,
      :host(:not([disabled])) #menu-item:focus #actions-container,
      :host(:not([disabled])) #menu-item:focus-within #actions-container {
        opacity: 1;
        width: auto;
      }

      #loader {
        position: absolute;
        width: 100%;
        bottom: 0;
      }

      #icon {
        display: inline-flex;
        margin-right: var(--uui-size-2,6px);
      }

      #badge {
        font-size: 12px;
        --uui-badge-position: relative;
        --uui-badge-position: auto;
        display: block;
        margin-left: 6px;
      }

      /** Focus styling */

      :host([select-mode='highlight']) #label-button:focus-visible {
        outline: none;
        overflow: initial;
      }

      :host([select-mode='highlight']) #label-button:focus-visible::after {
        content: '';
        border-radius: calc(var(--uui-border-radius,3px) - 1px);
        position: absolute;
        inset: 3px 3px 3px -5px;
        border: 2px solid var(--uui-color-focus,#3879ff);
      }

      :host([select-mode='highlight']) #caret-button:focus-visible {
        outline: none;
        overflow: initial;
      }

      :host([select-mode='highlight']) #caret-button:focus-visible::after {
        content: '';
        position: absolute;
        inset: 3px;
        border-radius: calc(var(--uui-border-radius,3px) - 1px);
        border: 2px solid var(--uui-color-focus,#3879ff);
      }

      /** Slots */

      slot:not([name]) {
        position: relative;
        display: block;
        width: 100%;
      }
      slot:not([name]) {
        --uui-menu-item-indent: var(--uui-menu-item-child-indent);
      }

      slot[name='actions'] {
        display: flex;
        align-items: center;
        --uui-button-height: calc(var(--uui-size-base-unit) * 4);
        margin-right: var(--uui-size-base-unit);
      }
    `
];
Vt([
  l({ type: Boolean, reflect: !0 })
], yt.prototype, "disabled", 2);
Vt([
  l({ type: Boolean, reflect: !0, attribute: "show-children" })
], yt.prototype, "showChildren", 2);
Vt([
  l({ type: Boolean, attribute: "has-children" })
], yt.prototype, "hasChildren", 2);
Vt([
  l({ type: Boolean, attribute: "loading" })
], yt.prototype, "loading", 2);
Vt([
  l({ type: String })
], yt.prototype, "href", 2);
Vt([
  l({ type: String })
], yt.prototype, "target", 2);
Vt([
  l({ type: String })
], yt.prototype, "rel", 2);
Vt([
  l({ type: String, attribute: "select-mode", reflect: !0 })
], yt.prototype, "selectMode", 2);
Vt([
  l({ type: String, attribute: "caret-label" })
], yt.prototype, "caretLabel", 2);
Vt([
  w()
], yt.prototype, "iconSlotHasContent", 2);
yt = Vt([
  g("uui-menu-item")
], yt);
var Zg = Object.defineProperty, Jg = Object.getOwnPropertyDescriptor, Vr = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Jg(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Zg(t, i, r), r;
};
const Qg = "uui:modal-open", oo = "uui:modal-close", t0 = "uui:modal-close-end";
class Mt extends _ {
  constructor() {
    super(...arguments), this.isOpen = !1, this.isClosing = !1, this.index = 0, this.uniqueIndex = 0, this._transitionDuration = 250, this.open = (t) => {
      t == null || t.preventDefault(), t == null || t.stopImmediatePropagation();
      const i = new CustomEvent(Qg, {
        cancelable: !0
      }), o = new CustomEvent("open", {
        cancelable: !0
      });
      this.dispatchEvent(i), this.dispatchEvent(o), !(i.defaultPrevented || o.defaultPrevented) && this._openModal();
    }, this.close = (t) => {
      t == null || t.preventDefault(), t == null || t.stopImmediatePropagation();
      const i = new CustomEvent(oo, {
        cancelable: !0
      });
      this.dispatchEvent(i), !i.defaultPrevented && this.forceClose();
    };
  }
  get transitionDuration() {
    return this._transitionDuration;
  }
  set transitionDuration(t) {
    this._transitionDuration = t, this.style.setProperty(
      "--uui-modal-transition-duration",
      this._transitionDuration + "ms"
    );
  }
  firstUpdated(t) {
    super.firstUpdated(t), this.isClosing || this.open();
  }
  _openModal() {
    var t, i;
    this.isOpen = !0, (t = this._dialogElement) == null || t.showModal(), (i = this._dialogElement) == null || i.addEventListener("cancel", this.close);
  }
  forceClose() {
    var t;
    this.isClosing = !0, this.isOpen = !1, (t = this._dialogElement) == null || t.close(), this.dispatchEvent(new CustomEvent("close-end")), this.dispatchEvent(new CustomEvent(t0)), this.remove();
  }
}
Mt.styles = [
  b`
      dialog {
        display: block;
        margin: 0;
        padding: 0;
        max-width: unset;
        max-height: unset;
        border: none;
        background: none;
        color: var(--uui-color-text,#060606);
      }
      dialog::backdrop {
        background: none;
        opacity: 0;
      }
      dialog::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: var(--uui-modal-color-backdrop, rgba(0, 0, 0, 0.5));
        pointer-events: none;
        opacity: 1;
        transition: opacity var(--uui-modal-transition-duration, 250ms);
        z-index: 1;
      }
      :host([index='0']) dialog::after {
        opacity: 0;
      }
    `
];
Vr([
  U("dialog")
], Mt.prototype, "_dialogElement", 2);
Vr([
  l({ type: Boolean, reflect: !0, attribute: "is-open" })
], Mt.prototype, "isOpen", 2);
Vr([
  l({ type: Boolean, reflect: !0, attribute: "is-closing" })
], Mt.prototype, "isClosing", 2);
Vr([
  l({ type: Number, reflect: !0 })
], Mt.prototype, "index", 2);
Vr([
  l({ type: Number, reflect: !0, attribute: "unique-index" })
], Mt.prototype, "uniqueIndex", 2);
Vr([
  l({ type: Number, attribute: "transition-duration" })
], Mt.prototype, "transitionDuration", 1);
var e0 = Object.defineProperty, i0 = Object.getOwnPropertyDescriptor, ld = (e) => {
  throw TypeError(e);
}, ud = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? i0(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && e0(t, i, r), r;
}, r0 = (e, t, i) => t.has(e) || ld("Cannot " + i), wc = (e, t, i) => (r0(e, t, "read from private field"), i ? i.call(e) : t.get(e)), o0 = (e, t, i) => t.has(e) ? ld("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ss, qa;
let Io = class extends Mt {
  constructor() {
    super(...arguments), o0(this, Ss), this.size = "full";
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.style.setProperty("--uui-modal-offset", -wc(this, Ss, qa) + "px");
  }
  updated(e) {
    super.updated(e), this.uniqueIndex > 10 ? this.setAttribute("hide", "") : this.removeAttribute("hide");
  }
  forceClose() {
    this.isClosing || (this.isClosing = !0, this.style.setProperty("--uui-modal-offset", -wc(this, Ss, qa) + "px"), setTimeout(() => {
      super.forceClose();
    }, this.transitionDuration));
  }
  render() {
    return c`<dialog>
      <slot></slot>
    </dialog>`;
  }
};
Ss = /* @__PURE__ */ new WeakSet();
qa = function() {
  var e;
  return ((e = this._dialogElement) == null ? void 0 : e.getBoundingClientRect().width) ?? 0;
};
Io.styles = [
  ...Mt.styles,
  b`
      :host {
        outline: none;
        --uui-modal-sidebar-left-gap: 24px;
        --uui-modal-sidebar-background: var(--uui-color-surface,#fff);
      }
      @media (min-width: 600px) {
        :host {
          --uui-modal-sidebar-left-gap: 64px;
        }
      }
      dialog {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        max-width: calc(100% - var(--uui-modal-sidebar-left-gap));
        margin-left: auto;
        right: var(--uui-modal-offset);
        transition: right var(--uui-modal-transition-duration, 250ms);
        background: var(
          --uui-modal-sidebar-background,
          var(--uui-color-surface,#fff)
        );
      }
      :host([index='0']) dialog {
        box-shadow: var(--uui-shadow-depth-5,0 19px 38px rgba(0,0,0,0.30) , 0 15px 12px rgba(0,0,0,0.22));
      }
      :host(:not([index='0'])) dialog {
        outline: 1px solid rgba(0, 0, 0, 0.1);
      }
      :host([hide]) dialog {
        display: none;
      }
      :host([size='large']) dialog {
        max-width: min(1200px, calc(100% - var(--uui-modal-sidebar-left-gap)));
      }
      :host([size='medium']) dialog {
        max-width: min(800px, calc(100% - var(--uui-modal-sidebar-left-gap)));
      }
      :host([size='small']) dialog {
        max-width: min(500px, calc(100% - var(--uui-modal-sidebar-left-gap)));
      }
    `
];
ud([
  l({ reflect: !0 })
], Io.prototype, "size", 2);
Io = ud([
  g("uui-modal-sidebar")
], Io);
var s0 = Object.defineProperty, n0 = Object.getOwnPropertyDescriptor, cd = (e) => {
  throw TypeError(e);
}, jr = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? n0(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && s0(t, i, r), r;
}, hd = (e, t, i) => t.has(e) || cd("Cannot " + i), Yr = (e, t, i) => (hd(e, t, "read from private field"), i ? i.call(e) : t.get(e)), ha = (e, t, i) => t.has(e) ? cd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), cs = (e, t, i) => (hd(e, t, "access private method"), i), Ka, Fi, Wi, Ya, Xa;
let Xe = class extends _ {
  constructor() {
    super(), ha(this, Wi), this.sidebarGap = 64, this.transitionDurationMS = 250, ha(this, Ka, () => {
      var o;
      const e = this._modals ?? [];
      if (this._modals = ((o = this.modalSlot) == null ? void 0 : o.assignedElements({ flatten: !0 }).filter(
        (r) => r instanceof Mt
      )) ?? [], e.filter(
        (r) => this._modals.indexOf(r) === -1
      ).forEach(
        (r) => r.removeEventListener(oo, Yr(this, Fi))
      ), this._modals.filter(
        (r) => e.indexOf(r) === -1
      ).forEach(
        (r) => r.addEventListener(oo, Yr(this, Fi))
      ), this._sidebars = this._modals.filter(
        (r) => r instanceof Io
      ), this._modals.length === 0) {
        this.removeAttribute("backdrop");
        return;
      }
      cs(this, Wi, Ya).call(this), cs(this, Wi, Xa).call(this);
    }), ha(this, Fi, (e) => {
      var t;
      if (e.stopImmediatePropagation(), (t = e.target) == null || t.removeEventListener(
        oo,
        Yr(this, Fi)
      ), !this._modals || this._modals.length <= 1) {
        this.removeAttribute("backdrop");
        return;
      }
      cs(this, Wi, Ya).call(this), cs(this, Wi, Xa).call(this);
    }), this.addEventListener(oo, Yr(this, Fi));
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.style.setProperty(
      "--uui-modal-transition-duration",
      this.transitionDurationMS + "ms"
    );
  }
  render() {
    return c`<slot @slotchange=${Yr(this, Ka)}></slot>`;
  }
};
Ka = /* @__PURE__ */ new WeakMap();
Fi = /* @__PURE__ */ new WeakMap();
Wi = /* @__PURE__ */ new WeakSet();
Ya = function() {
  var t;
  this.setAttribute("backdrop", "");
  const e = ((t = this._modals) == null ? void 0 : t.filter((i) => !i.isClosing).reverse()) ?? [];
  e == null || e.forEach((i, o) => {
    i.index = o, i.transitionDuration = this.transitionDurationMS;
  }), e == null || e.forEach((i) => {
    const o = e == null ? void 0 : e.filter(
      (r) => r.constructor.name === i.constructor.name
    );
    i.uniqueIndex = (o == null ? void 0 : o.indexOf(i)) ?? 0;
  });
};
Xa = function() {
  requestAnimationFrame(() => {
    var i, o, r, s, n;
    let e = 0;
    const t = ((i = this._sidebars) == null ? void 0 : i.filter((a) => !a.isClosing).reverse()) ?? [];
    for (let a = 0; a < t.length; a++) {
      const u = t[a], h = t[a + 1], f = e;
      if (u.updateComplete.then(() => {
        u.style.setProperty(
          "--uui-modal-offset",
          f + "px"
        );
      }), h != null && h.hasAttribute("hide")) break;
      const d = ((r = (o = u.shadowRoot) == null ? void 0 : o.querySelector("dialog")) == null ? void 0 : r.getBoundingClientRect().width) ?? 0, x = ((n = (s = h == null ? void 0 : h.shadowRoot) == null ? void 0 : s.querySelector("dialog")) == null ? void 0 : n.getBoundingClientRect().width) ?? 0, v = d + e + this.sidebarGap - x;
      e = v > 0 ? v : 0;
    }
  });
};
Xe.styles = b`
    :host {
      position: fixed;
      --uui-modal-color-backdrop: rgba(0, 0, 0, 0.5);
    }
    :host::after {
      content: '';
      position: fixed;
      inset: 0;
      background-color: var(--uui-modal-color-backdrop, rgba(0, 0, 0, 0.5));
      opacity: 0;
      pointer-events: none;
      transition: opacity var(--uui-modal-transition-duration, 250ms);
    }
    :host([backdrop])::after {
      opacity: 1;
    }
  `;
jr([
  U("slot")
], Xe.prototype, "modalSlot", 2);
jr([
  w()
], Xe.prototype, "_modals", 2);
jr([
  w()
], Xe.prototype, "_sidebars", 2);
jr([
  l({ type: Number })
], Xe.prototype, "sidebarGap", 2);
jr([
  l({ type: Number })
], Xe.prototype, "transitionDurationMS", 2);
Xe = jr([
  g("uui-modal-container")
], Xe);
var a0 = Object.getOwnPropertyDescriptor, l0 = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? a0(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = n(r) || r);
  return r;
};
let Za = class extends Mt {
  render() {
    return c`
      <dialog>
        <slot></slot>
      </dialog>
    `;
  }
};
Za.styles = [
  ...Mt.styles,
  b`
      :host {
        outline: none;
        --uui-modal-dialog-background: var(--uui-color-surface,#fff);
      }
      dialog {
        margin: auto;
        max-width: 100%;
        max-height: 100%;
        border-radius: var(
          --uui-modal-dialog-border-radius,
          calc(var(--uui-border-radius,3px) * 4)
        );
        background: var(
          --uui-modal-dialog-background,
          var(--uui-color-surface,#fff)
        );
      }
      :host([index='0']) dialog {
        box-shadow: var(--uui-shadow-depth-5,0 19px 38px rgba(0,0,0,0.30) , 0 15px 12px rgba(0,0,0,0.22));
      }
      :host(:not([index='0'])) dialog {
        outline: 1px solid rgba(0, 0, 0, 0.1);
      }
    `
];
Za = l0([
  g("uui-modal-dialog")
], Za);
class fi extends L {
  constructor(t, i = {}) {
    super(t, {
      bubbles: !0,
      ...i
    });
  }
}
fi.CHANGE = "change";
var u0 = Object.defineProperty, c0 = Object.getOwnPropertyDescriptor, xt = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? c0(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && u0(t, i, r), r;
};
const h0 = 45, da = (e, t, i) => Math.min(Math.max(e, t), i), d0 = (e, t) => Array.from({ length: t - e + 1 }, (i, o) => e + o);
let ht = class extends _ {
  constructor() {
    super(...arguments), this._observer = new ResizeObserver(this._calculateRange.bind(this)), this.label = "", this.ariaLabel = "", this.firstLabel = "First", this.previousLabel = "Previous", this.nextLabel = "Next", this.lastLabel = "Last", this._total = 100, this._range = 0, this._visiblePages = [], this._current = 1;
  }
  connectedCallback() {
    super.connectedCallback(), this.hasAttribute("role") || this.setAttribute("role", "navigation"), this._visiblePages = this._generateVisiblePages(this.current), C(this, "uui-button"), C(this, "uui-button-group");
  }
  disconnectedCallback() {
    this._observer.disconnect();
  }
  firstUpdated() {
    this._observer.observe(this._pagesGroup), this.updateLabel(), this._calculateRange();
  }
  willUpdate(e) {
    (e.has("current") || e.has("label")) && this.updateLabel();
  }
  updateLabel() {
    this.ariaLabel = `${this.label || "Pagination navigation"}. Current page: ${this.current}.`;
  }
  _calculateRange() {
    const e = this.offsetWidth, t = Array.from(this._navButtons).reduce(
      (r, s) => r + s.getBoundingClientRect().width,
      0
    ), o = (e - t) / h0 / 2;
    this._range = Math.max(1, Math.floor(o)), this._visiblePages = this._generateVisiblePages(this.current);
  }
  _generateVisiblePages(e) {
    const t = e < this._range ? 1 : e < this.total - this._range ? e - this._range : this.total - this._range * 2, i = e <= this._range ? this._range * 2 + 1 : e < this.total - this._range ? e + this._range : this.total;
    return d0(
      da(t, 1, this.total),
      da(i, 1, this.total)
    );
  }
  get total() {
    return this._total;
  }
  set total(e) {
    this._total = e, this._visiblePages = this._generateVisiblePages(this._current), this.requestUpdate("total", e);
  }
  get current() {
    return this._current;
  }
  set current(e) {
    const t = this._current;
    this._current = da(e, 1, this.total), this._visiblePages = this._generateVisiblePages(this._current), this.requestUpdate("current", t);
  }
  /**
   * This method will change the page to a next one.
   * @memberof UUIPaginationElement
   */
  goToNextPage() {
    this.current++, this.dispatchEvent(new fi(fi.CHANGE));
  }
  /**
   * Change the page to a previous one.
   * @memberof UUIPaginationElement
   */
  goToPreviousPage() {
    this.current--, this.dispatchEvent(new fi(fi.CHANGE));
  }
  /**
   * Change the page to the one passed as an argument to this method.
   * @param {number} page
   * @memberof UUIPaginationElement
   */
  goToPage(e) {
    this.current = e, this.dispatchEvent(new fi(fi.CHANGE));
  }
  /** When having limited display of page-buttons and clicking a page-button that changes the current range, the focus stays on the position of the clicked button which is not anymore representing the number clicked, therefore we move focus to the button that represents the current page. */
  focusActivePage() {
    requestAnimationFrame(() => {
      const e = this.renderRoot.querySelector(".active");
      e && e.focus();
    });
  }
  renderFirst() {
    return c`<uui-button
      compact
      look="outline"
      class="nav"
      role="listitem"
      label=${this.firstLabel}
      ?disabled=${this._current === 1}
      @click=${() => this.goToPage(1)}></uui-button>`;
  }
  renderPrevious() {
    return c`<uui-button
      compact
      look="outline"
      class="nav"
      role="listitem"
      label=${this.previousLabel}
      ?disabled=${this._current === 1}
      @click=${this.goToPreviousPage}></uui-button>`;
  }
  renderNext() {
    return c`<uui-button
      compact
      look="outline"
      role="listitem"
      class="nav"
      label=${this.nextLabel}
      ?disabled=${this._current === this.total}
      @click=${this.goToNextPage}></uui-button>`;
  }
  renderLast() {
    return c`
      <uui-button
        compact
        look="outline"
        role="listitem"
        class="nav"
        label=${this.lastLabel}
        ?disabled=${this.total === this._current}
        @click=${() => this.goToPage(this.total)}></uui-button>
    `;
  }
  renderDots() {
    return c`<uui-button
      compact
      look="outline"
      role="listitem"
      tabindex="-1"
      class="dots"
      label="More pages"
      >...</uui-button
    > `;
  }
  renderPage(e) {
    return c`<uui-button
      compact
      look="outline"
      role="listitem"
      label="Go to page ${e}"
      class=${"page" + (e === this._current ? " active" : "")}
      tabindex=${e === this._current ? "-1" : ""}
      @click=${() => {
      e !== this._current && (this.goToPage(e), this.focusActivePage());
    }}>
      ${e}
    </uui-button>`;
  }
  renderNavigationLeft() {
    return c` ${this.renderFirst()} ${this.renderPrevious()}
    ${this._visiblePages.includes(1) ? "" : this.renderDots()}`;
  }
  renderNavigationRight() {
    return c`${this._visiblePages.includes(this.total) ? "" : this.renderDots()}
    ${this.renderNext()} ${this.renderLast()}`;
  }
  render() {
    return c`<uui-button-group role="list" id="pages">
      ${this.renderNavigationLeft()}
      ${this._visiblePages.map(
      (e) => this.renderPage(e)
    )}
      ${this.renderNavigationRight()}
    </uui-button-group>
    `;
  }
};
ht.styles = [
  b`
      uui-button-group {
        width: 100%;
      }

      uui-button {
        --uui-button-border-color: var(--uui-color-border-standalone,#c2c2c2);
        --uui-button-border-color-hover: var(--uui-color-interactive-emphasis,#3544b1);
        --uui-button-border-color-disabled: var(--uui-color-border-standalone,#c2c2c2);
      }

      .page {
        min-width: 36px;
        max-width: 72px;
      }
      .page.active {
        --uui-button-background-color: var(--uui-color-current,#f5c1bc);
      }

      .nav {
        min-width: 72px;
      }

      .dots {
        pointer-events: none;
      }

      .active {
        pointer-events: none;
      }
    `
];
xt([
  Dp("uui-button.nav")
], ht.prototype, "_navButtons", 2);
xt([
  U("#pages")
], ht.prototype, "_pagesGroup", 2);
xt([
  l()
], ht.prototype, "label", 2);
xt([
  l({ reflect: !0, attribute: "aria-label" })
], ht.prototype, "ariaLabel", 2);
xt([
  l()
], ht.prototype, "firstLabel", 2);
xt([
  l()
], ht.prototype, "previousLabel", 2);
xt([
  l()
], ht.prototype, "nextLabel", 2);
xt([
  l()
], ht.prototype, "lastLabel", 2);
xt([
  l({ type: Number })
], ht.prototype, "total", 1);
xt([
  w()
], ht.prototype, "_range", 2);
xt([
  w()
], ht.prototype, "_visiblePages", 2);
xt([
  l({ type: Number })
], ht.prototype, "current", 1);
ht = xt([
  g("uui-pagination")
], ht);
class Ja extends L {
}
Ja.CLOSE = "close";
var p0 = Object.defineProperty, f0 = Object.getOwnPropertyDescriptor, Zo = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? f0(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && p0(t, i, r), r;
};
function hs(e, t, i) {
  return e < t ? t : e > i ? i : e;
}
let Oi = class extends _ {
  constructor() {
    super(...arguments), this.scrollEventHandler = this._updatePlacement.bind(this), this._open = !1, this._placement = "bottom-start", this._currentPlacement = null, this._scrollParents = [], this.margin = 0, this._onTriggerSlotChanged = (e) => {
      this._trigger = e.target.assignedElements({
        flatten: !0
      })[0];
    }, this._intersectionCallback = (e) => {
      e.forEach((t) => {
        t.isIntersecting === !1 && (this._startScrollListener(), this._updatePlacement());
      });
    }, this._onKeyUp = (e) => {
      if (e.key === "Escape") {
        this._triggerPopoverClose();
        return;
      }
    }, this._onDocumentClick = (e) => {
      e.composedPath().includes(this) || this._triggerPopoverClose();
    };
  }
  get placement() {
    return this._placement;
  }
  set placement(e) {
    const t = this._placement;
    this._placement = e || "bottom-start", this._currentPlacement = null, this._updatePlacement(), this.requestUpdate("placement", t);
  }
  get open() {
    return this._open;
  }
  set open(e) {
    const t = this._open;
    this._open = e, e ? this._openPopover() : this._closePopover(), this.requestUpdate("open", t);
  }
  connectedCallback() {
    super.connectedCallback(), this._getScrollParents();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("mousedown", this._onDocumentClick), document.removeEventListener("keyup", this._onKeyUp), document.removeEventListener("scroll", this.scrollEventHandler), this.intersectionObserver && (this.intersectionObserver.disconnect(), delete this.intersectionObserver), this._scrollParents = [];
  }
  _openPopover() {
    this.containerElement && (this.containerElement.style.opacity = "0", document.addEventListener("mousedown", this._onDocumentClick), document.addEventListener("keyup", this._onKeyUp), this._currentPlacement = null, requestAnimationFrame(() => {
      this._updatePlacement(), this._createIntersectionObserver(), this.containerElement.style.opacity = "1";
    }));
  }
  _closePopover() {
    this.intersectionObserver && (this.intersectionObserver.disconnect(), delete this.intersectionObserver), document.removeEventListener("mousedown", this._onDocumentClick), document.removeEventListener("keyup", this._onKeyUp), this._currentPlacement = null;
  }
  // Use this when changing the open state from within this component.
  _triggerPopoverClose() {
    const e = new Ja(Ja.CLOSE, {
      cancelable: !0
    });
    this.dispatchEvent(e), !e.defaultPrevented && (this.open = !1);
  }
  _getScrollParents() {
    const e = this.shadowRoot.host;
    let t = getComputedStyle(e);
    if (t.position === "fixed")
      return;
    const i = t.position === "absolute", o = /(auto|scroll)/;
    let r = e;
    for (; r = r.parentElement; )
      if (t = getComputedStyle(r), !(i && t.position === "static") && (o.test(t.overflow + t.overflowY + t.overflowX) && this._scrollParents.push(r), t.position === "fixed"))
        return;
    this._scrollParents.push(document.body);
  }
  _createIntersectionObserver() {
    if (this.intersectionObserver)
      return;
    const e = {
      root: null,
      rootMargin: "0px",
      threshold: 1
    };
    this.intersectionObserver = new IntersectionObserver(
      this._intersectionCallback,
      e
    ), this.intersectionObserver.observe(this.containerElement);
  }
  _startScrollListener() {
    this._scrollParents.forEach((e) => {
      e.addEventListener("scroll", this.scrollEventHandler);
    }), document.addEventListener("scroll", this.scrollEventHandler);
  }
  _stopScrollListener() {
    this._scrollParents.forEach((e) => {
      e.removeEventListener("scroll", this.scrollEventHandler);
    }), document.removeEventListener("scroll", this.scrollEventHandler);
  }
  _updatePlacement() {
    var o, r;
    if (!this.shadowRoot)
      return;
    const e = this.containerElement;
    if (!e)
      return;
    const t = (o = this.containerElement) == null ? void 0 : o.getBoundingClientRect(), i = (r = this._trigger) == null ? void 0 : r.getBoundingClientRect();
    if (i != null && t != null) {
      const s = this._scrollParents.map(
        (Rt) => Rt.getBoundingClientRect()
      );
      this._currentPlacement = this._currentPlacement || this._placement, this._placement !== "auto" && (this._currentPlacement = this._managePlacementFlip(
        this._currentPlacement,
        t,
        s
      ));
      let n = this._currentPlacement.indexOf("top") !== -1, a = this._currentPlacement.indexOf("bottom") !== -1, u = this._currentPlacement.indexOf("left") !== -1, h = this._currentPlacement.indexOf("right") !== -1;
      const f = this._currentPlacement.indexOf("-start") !== -1, d = this._currentPlacement.indexOf("-end") !== -1;
      let x = 0.5, v = 0.5, $ = 0.5, O = 0.5, D = 0, ot = 0;
      if (this.placement === "auto") {
        const Rt = this._scrollParents[0], Gr = Rt.clientWidth, li = Rt.clientHeight, Ni = i.x - t.width, Hi = Gr - (i.x + i.width) - t.width, Wn = i.y - t.height, es = li - (i.y + i.height) - t.height;
        let is = 0.5, rs = 0.5;
        const pp = Math.max(Ni, Hi);
        let ku = Math.max(Wn, es);
        es > Wn && es > this.margin && (ku += 9999), pp > ku ? (Ni > Hi ? (is = 0, u = !0) : (is = 1, h = !0), D = this.margin) : (Wn > es ? (rs = 0, n = !0) : (rs = 1, a = !0), ot = this.margin), x = is, v = rs, $ = 1 - is, O = 1 - rs;
      } else
        n && (O = 1, v = 0), a && (O = 0, v = 1), (n || a) && (ot = this.margin, f && ($ = 0, x = 0), d && ($ = 1, x = 1)), u && ($ = 1, x = 0), h && ($ = 0, x = 1), (u || h) && (D = this.margin, f && (O = 0, v = 0), d && (O = 1, v = 1));
      const le = -t.width * $ + i.width * x - D * ($ * 2 - 1), ts = -t.height * O + i.height * v - ot * (O * 2 - 1);
      let ni = le, ai = ts;
      n || a ? (this._scrollParents.forEach((Rt, Gr) => {
        const li = Rt === document.body ? 0 : s[Gr].x, Ni = -i.x + li, Hi = Rt.clientWidth - i.x - i.width + le + li - (t.width - i.width) * (1 - x);
        ni = hs(ni, Ni, Hi);
      }), ni = hs(ni, -t.width, i.width)) : (u || h) && (this._scrollParents.forEach((Rt, Gr) => {
        const li = Rt === document.body ? 0 : s[Gr].y, Ni = -i.y + li, Hi = Rt.clientHeight - i.y - i.height + ts + li - (t.height - i.height) * (1 - v);
        ai = hs(ai, Ni, Hi);
      }), ai = hs(ai, -t.height, i.height)), (this._positionX !== ni || this._positionY !== ai) && (this._positionX = ni, this._positionY = ai, le === ni && ts === ai && this._stopScrollListener(), e.style.left = `${this._positionX}px`, e.style.top = `${this._positionY}px`);
    }
  }
  _managePlacementFlip(e, t, i) {
    const r = e.split("-"), s = r[0], n = r[1] || null;
    let a;
    return this._scrollParents.some((u, h) => {
      const f = u === document.body ? 0 : i[h].x, d = u === document.body ? 0 : i[h].y;
      return s === "top" && t.y - 2 <= d ? (a = "bottom", !0) : s === "bottom" && t.y + t.height + 2 >= u.clientHeight + d ? (a = "top", !0) : s === "left" && t.x - 2 <= f ? (a = "right", !0) : s === "right" && t.x + t.width + 2 >= u.clientWidth + f ? (a = "left", !0) : !1;
    }), a ? (this._startScrollListener(), a + (n ? `-${n}` : "")) : e;
  }
  render() {
    return c`
      <slot
        id="trigger"
        name="trigger"
        @slotchange=${this._onTriggerSlotChanged}></slot>
      <div id="container">
        ${this._open ? c`<slot name="popover"></slot>` : ""}
      </div>
    `;
  }
};
Oi.styles = [
  b`
      :host {
        position: relative;
        display: inline-block;
        width: 100%;
      }
      #container {
        position: absolute;
        width: 100%;
        z-index: var(--uui-popover-z-index, 1);
      }
      slot[name='popover'] {
        display: block;
      }
      #trigger {
        position: relative;
        width: 100%;
      }

      slot[name='trigger']::slotted(uui-button) {
        --uui-button-border-radius: var(
          --uui-popover-toggle-slot-button-border-radius
        );
        --uui-button-merge-border-left: var(
          --uui-popover-toggle-slot-button-merge-border-left
        );
      }
    `
];
Zo([
  U("#container")
], Oi.prototype, "containerElement", 2);
Zo([
  l({ type: Number })
], Oi.prototype, "margin", 2);
Zo([
  l({ type: String, reflect: !0 })
], Oi.prototype, "placement", 1);
Zo([
  l({ type: Boolean, reflect: !0 })
], Oi.prototype, "open", 1);
Oi = Zo([
  g("uui-popover")
], Oi);
var v0 = Object.defineProperty, b0 = Object.getOwnPropertyDescriptor, dd = (e) => {
  throw TypeError(e);
}, Di = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? b0(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && v0(t, i, r), r;
}, Jl = (e, t, i) => t.has(e) || dd("Cannot " + i), M = (e, t, i) => (Jl(e, t, "read from private field"), i ? i.call(e) : t.get(e)), pe = (e, t, i) => t.has(e) ? dd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), ds = (e, t, i, o) => (Jl(e, t, "write to private field"), t.set(e, i), i), Te = (e, t, i) => (Jl(e, t, "access private method"), i), we, $r, vi, so, As, $e, no, Qa, Gt, tl, pd, el, fd, il;
let Oe = class extends _ {
  constructor() {
    super(...arguments), pe(this, Gt), this.margin = 0, this._placement = "bottom-start", this._open = !1, this._actualPlacement = this._placement, pe(this, we, null), pe(this, $r, []), pe(this, vi, null), pe(this, so, { width: 0, height: 0 }), pe(this, As, (e) => {
      var t;
      if (this._open = e.newState === "open", ds(this, we, Tf(
        this,
        "popovertarget",
        this.id
      )), Te(this, Gt, fd).call(this), (t = M(this, we)) == null || t.dispatchEvent(
        new CustomEvent("uui-popover-before-toggle", {
          bubbles: !1,
          composed: !1,
          detail: {
            oldState: e.oldState,
            newState: e.newState
          }
        })
      ), !this._open) {
        Te(this, Gt, el).call(this);
        return;
      }
      Te(this, Gt, pd).call(this), requestAnimationFrame(() => {
        M(this, $e).call(this);
      });
    }), pe(this, $e, () => {
      this._open && (this._actualPlacement = this._placement, this.style.opacity = "0", M(this, no).call(this, 3));
    }), pe(this, no, (e) => {
      if (M(this, Qa).call(this), e--, M(this, we) === null) return;
      const t = this._actualPlacement.indexOf("top") !== -1, i = this._actualPlacement.indexOf("bottom") !== -1, o = this._actualPlacement.indexOf("left") !== -1, r = this._actualPlacement.indexOf("right") !== -1, s = this._actualPlacement.indexOf("-start") !== -1, n = this._actualPlacement.indexOf("-end") !== -1, a = M(this, we).getBoundingClientRect(), u = this.getBoundingClientRect();
      let h = 0, f = 0;
      i && (h = a.top + a.height, s && (f = a.left), n && (f = a.left + a.width - u.width), !s && !n && (f = a.left + a.width / 2 - u.width / 2)), t && (h = a.top - u.height, s && (f = a.left), n && (f = a.left + a.width - u.width), !s && !n && (f = a.left + a.width / 2 - u.width / 2)), o && (f = a.left - u.width, s && (h = a.top), n && (h = a.top + a.height - u.height), !s && !n && (h = a.top + a.height / 2 - u.height / 2)), r && (f = a.left + a.width, s && (h = a.top), n && (h = a.top + a.height - u.height), !s && !n && (h = a.top + a.height / 2 - u.height / 2));
      const d = window.innerWidth, x = window.innerHeight, v = Math.min(
        0,
        a.top + a.height
      ), $ = Math.max(
        Math.min(h, x - u.height),
        a.top - u.height
      );
      if (Math.max(v, $) !== h && (t || i) && e > 0) {
        Te(this, Gt, tl).call(this), M(this, no).call(this, e);
        return;
      }
      h = Math.max(v, $);
      const D = Math.min(
        0,
        a.left + a.width
      ), ot = Math.max(
        Math.min(f, d - u.width),
        a.left - u.width
      ), le = Math.max(D, ot);
      if (le !== f && (o || r) && e > 0) {
        Te(this, Gt, tl).call(this), M(this, no).call(this, e);
        return;
      }
      f = le, (h + u.height < 0 || h > x || f + u.width < 0 || f > d) && this.hidePopover(), this.style.transform = `translate(${f}px, ${h}px)`, this.style.opacity = "1";
    }), pe(this, Qa, () => {
      const e = {
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left"
      };
      let t = this._actualPlacement.split("-")[0];
      t = e[t] || t, t = t.charAt(0).toUpperCase() + t.slice(1);
      const i = `padding${t}`;
      this.style.padding = "0", this.style[i] = `${this.margin}px`;
    });
  }
  get open() {
    return this._open;
  }
  get placement() {
    return this._placement;
  }
  set placement(e) {
    this._placement = e, this._actualPlacement = e, M(this, $e).call(this);
  }
  connectedCallback() {
    this.hasAttribute("popover") || this.setAttribute("popover", ""), super.connectedCallback(), this.addEventListener("beforetoggle", M(this, As)), M(this, vi) || (ds(this, vi, new ResizeObserver((e) => {
      const t = e[0], i = t.contentRect.width, o = t.contentRect.height;
      i === M(this, so).width && o === M(this, so).height || (ds(this, so, { width: i, height: o }), M(this, $e).call(this));
    })), M(this, vi).observe(this));
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), this.removeEventListener("beforetoggle", M(this, As)), Te(this, Gt, el).call(this), (e = M(this, vi)) == null || e.disconnect(), ds(this, vi, null);
  }
  render() {
    return c`<slot></slot>`;
  }
};
we = /* @__PURE__ */ new WeakMap();
$r = /* @__PURE__ */ new WeakMap();
vi = /* @__PURE__ */ new WeakMap();
so = /* @__PURE__ */ new WeakMap();
As = /* @__PURE__ */ new WeakMap();
$e = /* @__PURE__ */ new WeakMap();
no = /* @__PURE__ */ new WeakMap();
Qa = /* @__PURE__ */ new WeakMap();
Gt = /* @__PURE__ */ new WeakSet();
tl = function() {
  const [e, t] = this._actualPlacement.split("-"), i = e === "top" ? "bottom" : e === "bottom" ? "top" : e === "left" ? "right" : "left";
  this._actualPlacement = `${i}-${t}`;
};
pd = function() {
  M(this, $r).forEach((e) => {
    e.addEventListener("scroll", M(this, $e), { passive: !0 });
  }), document.addEventListener("scroll", M(this, $e), { passive: !0 });
};
el = function() {
  M(this, $r).forEach((e) => {
    e.removeEventListener("scroll", M(this, $e));
  }), document.removeEventListener("scroll", M(this, $e));
};
fd = function() {
  if (!M(this, we)) return;
  let e = getComputedStyle(M(this, we));
  if (e.position === "fixed")
    return;
  const t = e.position === "absolute", i = /(auto|scroll)/;
  let o = M(this, we);
  for (; o; ) {
    if (e = getComputedStyle(o), t && e.position === "static") {
      o = Te(this, Gt, il).call(this, o);
      continue;
    }
    if (i.test(e.overflow + e.overflowY + e.overflowX) && M(this, $r).push(o), e.position === "fixed")
      return;
    o = Te(this, Gt, il).call(this, o);
  }
  M(this, $r).push(document.body);
};
il = function(e) {
  var t;
  return e != null && e.parentElement ? e.parentElement : (t = e == null ? void 0 : e.getRootNode()) == null ? void 0 : t.host;
};
Oe.styles = [
  b`
      :host {
        margin: 0;
        width: fit-content;
        height: fit-content;
        border: none;
        border-radius: 0;
        padding: 0;
        background-color: none;
        background: none;
        overflow: visible;
        color: var(--uui-color-text,#060606);
      }
    `
];
Di([
  l({ type: Number })
], Oe.prototype, "margin", 2);
Di([
  l({ type: Boolean })
], Oe.prototype, "open", 1);
Di([
  l({ type: String, reflect: !0 })
], Oe.prototype, "placement", 1);
Di([
  w()
], Oe.prototype, "_placement", 2);
Di([
  w()
], Oe.prototype, "_open", 2);
Di([
  w()
], Oe.prototype, "_actualPlacement", 2);
Oe = Di([
  g("uui-popover-container")
], Oe);
var g0 = Object.defineProperty, m0 = Object.getOwnPropertyDescriptor, vd = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? m0(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && g0(t, i, r), r;
};
const _0 = (e, t, i) => Math.min(Math.max(e, t), i);
let Qs = class extends _ {
  constructor() {
    super(...arguments), this._progress = 0;
  }
  get progress() {
    return this._progress;
  }
  set progress(e) {
    const t = this._progress;
    this._progress = _0(e, 0, 100), this.requestUpdate("progress", t);
  }
  _getProgressStyle() {
    return { width: `${this._progress}%` };
  }
  render() {
    return c`
      <div id="bar" style=${Pe(this._getProgressStyle())}></div>
    `;
  }
};
Qs.styles = [
  b`
      :host {
        width: 100%;
        height: 4px;
        position: relative;
        overflow: hidden;
        background: var(--uui-color-surface-alt,#f3f3f5);
        border-radius: 100px;
        display: inline-block;
      }

      #bar {
        transition: width 250ms ease;
        background: var(--uui-color-positive,#0b8152);
        height: 100%;
        width: 0%;
      }
    `
];
vd([
  l({ type: Number })
], Qs.prototype, "progress", 1);
Qs = vd([
  g("uui-progress-bar")
], Qs);
class Uo extends L {
  constructor(t, i = {}) {
    super(t, {
      bubbles: !0,
      ...i
    });
  }
}
Uo.CHANGE = "change";
var y0 = Object.defineProperty, w0 = Object.getOwnPropertyDescriptor, bd = (e) => {
  throw TypeError(e);
}, si = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? w0(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && y0(t, i, r), r;
}, x0 = (e, t, i) => t.has(e) || bd("Cannot " + i), $0 = (e, t, i) => t.has(e) ? bd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), k0 = (e, t, i) => (x0(e, t, "access private method"), i), rl, gd;
let Nt = class extends _ {
  constructor() {
    super(...arguments), $0(this, rl), this.name = "", this.value = "", this.label = "", this.checked = !1, this.disabled = !1, this.readonly = !1;
  }
  focus() {
    this._inputElement.focus();
  }
  click() {
    this._inputElement.click();
  }
  /**
   * Call to uncheck the element
   * @method uncheck
   */
  uncheck() {
    this.checked = !1;
  }
  /**
   * Call to check the element.
   * @method uncheck
   */
  check() {
    this.checked = !0;
  }
  /**
   * Call to make the element focusable, this sets tabindex to 0.
   * @method makeFocusable
   */
  makeFocusable() {
    this.disabled || this.removeAttribute("tabindex");
  }
  /**
   * Call to make the element focusable, this sets tabindex to -1.
   * @method makeUnfocusable
   */
  makeUnfocusable() {
    this.disabled || this.setAttribute("tabindex", "-1");
  }
  render() {
    return c` <label>
      <input
        id="input"
        type="radio"
        name=${this.name}
        value=${this.value}
        .checked=${this.checked}
        .disabled=${this.disabled || this.readonly}
        @change=${k0(this, rl, gd)} />
      <div id="button"></div>
      <div id="label">
        ${this.label ? c`<span>${this.label}</span>` : c`<slot></slot>`}
      </div>
    </label>`;
  }
};
rl = /* @__PURE__ */ new WeakSet();
gd = function(e) {
  e.stopPropagation();
  const t = this._inputElement.checked;
  this.checked = t, t && this.focus(), this.dispatchEvent(new Uo(Uo.CHANGE));
};
Nt.styles = [
  On,
  b`
      :host {
        display: block;
        box-sizing: border-box;
        font-family: inherit;
        color: currentColor;
        --uui-radio-button-size: var(--uui-size-6,18px);
        margin: var(--uui-size-2,6px) 0;
      }

      label {
        position: relative;
        box-sizing: border-box;
        user-select: none;
        display: flex;
        align-items: center;
        cursor: pointer;
        line-height: 18px;
      }

      :host([readonly]) label {
        cursor: default;
      }

      #input {
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0;
      }

      .label {
        margin-top: 2px;
      }

      #button {
        box-sizing: border-box;
        display: inline-block;
        width: var(--uui-radio-button-size, 18px);
        height: var(--uui-radio-button-size, 18px);
        background-color: var(--uui-color-surface,#fff);
        border: 1px solid var(--uui-color-border-standalone,#c2c2c2);
        border-radius: 100%;
        margin-right: calc(var(--uui-size-2,6px) * 2);
        position: relative;
        flex: 0 0 var(--uui-radio-button-size);
      }

      #button::after {
        content: '';
        width: calc(var(--uui-radio-button-size) / 2);
        height: calc(var(--uui-radio-button-size) / 2);
        background-color: var(--uui-color-selected,#3544b1);
        border-radius: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: all 0.15s ease-in-out;
      }

      :host(:hover) #button {
        border: 1px solid var(--uui-color-border-emphasis,#a1a1a1);
      }

      :host(:focus) {
        outline: none;
      }
      :host(:focus-within) input:focus-visible + #button {
        outline: 2px solid var(--uui-color-focus,#3879ff);
      }

      input:checked ~ #button::after {
        transform: translate(-50%, -50%) scale(1);
      }

      input:checked ~ #button {
        border: 1px solid var(--uui-color-selected,#3544b1);
      }

      input:checked:hover ~ #button {
        border: 1px solid var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      input:checked:hover ~ #button::after {
        background-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      :host([disabled]) label {
        cursor: not-allowed;
        opacity: 0.5;
      }
      :host([disabled]) .label {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      :host([disabled]) input ~ #button {
        border: 1px solid var(--uui-color-disabled-contrast,#c4c4c4);
      }

      :host([disabled]) input:checked ~ #button {
        border: 1px solid var(--uui-color-disabled-contrast,#c4c4c4);
      }

      :host([disabled]) input:checked ~ #button::after {
        background-color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      :host([disabled]:active) #button {
        animation: ${In};
      }

      @media (prefers-reduced-motion) {
        :host([disabled]:active) #button {
          animation: none;
        }

        #button::after {
          transition: none;
        }
      }
    `
];
si([
  U("#input")
], Nt.prototype, "_inputElement", 2);
si([
  l({ type: String })
], Nt.prototype, "name", 2);
si([
  l({ type: String })
], Nt.prototype, "value", 2);
si([
  l({ type: String })
], Nt.prototype, "label", 2);
si([
  l({ type: Boolean, reflect: !0 })
], Nt.prototype, "checked", 2);
si([
  l({ type: Boolean, reflect: !0 })
], Nt.prototype, "disabled", 2);
si([
  l({ type: Boolean, reflect: !0 })
], Nt.prototype, "readonly", 2);
Nt = si([
  g("uui-radio")
], Nt);
class ol extends L {
  constructor(t, i = {}) {
    super(t, {
      bubbles: !0,
      ...i
    });
  }
}
ol.CHANGE = "change";
var C0 = Object.defineProperty, E0 = Object.getOwnPropertyDescriptor, md = (e) => {
  throw TypeError(e);
}, Ql = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? E0(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && C0(t, i, r), r;
}, tu = (e, t, i) => t.has(e) || md("Cannot " + i), P = (e, t, i) => (tu(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Ie = (e, t, i) => t.has(e) ? md("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Os = (e, t, i, o) => (tu(e, t, "write to private field"), t.set(e, i), i), F = (e, t, i) => (tu(e, t, "access private method"), i), q, N, sl, nl, tn, en, al, V, _d, eu, ll, iu, ru, _i, yd, wd, zo;
const P0 = "ArrowLeft", S0 = "ArrowUp", A0 = "ArrowRight", O0 = "ArrowDown", I0 = " ", U0 = "Enter";
let kr = class extends re(_, "") {
  constructor() {
    super(), Ie(this, V), this.disabled = !1, this.readonly = !1, Ie(this, q, null), Ie(this, N, []), Ie(this, sl, (e) => {
      var t;
      (t = P(this, N)) == null || t.forEach((i) => {
        i !== e.target ? i.makeUnfocusable() : i.makeFocusable();
      });
    }), Ie(this, nl, (e) => {
      var t;
      this.contains(e.relatedTarget) || P(this, q) === null && ((t = P(this, N)) == null || t.forEach((i) => {
        i.makeFocusable();
      }));
    }), Ie(this, tn, () => {
      this.pristine = !1;
    }), Ie(this, en, (e) => {
      e.target.checked === !0 && (this.value = e.target.value, F(this, V, zo).call(this));
    }), Ie(this, al, (e) => {
      var t;
      switch (e.key) {
        case P0:
        case S0: {
          e.preventDefault(), F(this, V, yd).call(this);
          break;
        }
        case A0:
        case O0: {
          e.preventDefault(), F(this, V, wd).call(this);
          break;
        }
        case I0: {
          P(this, q) === null && (this.value = (t = F(this, V, _i).call(this, 1, !1)) == null ? void 0 : t.value, F(this, V, zo).call(this));
          break;
        }
        case U0:
          this.submit();
      }
    }), this.addEventListener("keydown", P(this, al)), this.addEventListener("focusin", P(this, sl)), this.addEventListener("focusout", P(this, nl)), this.updateComplete.then(() => {
      F(this, V, ll).call(this, this.value);
    });
  }
  get value() {
    return super.value;
  }
  set value(e) {
    super.value = e, F(this, V, ll).call(this, e);
  }
  connectedCallback() {
    super.connectedCallback(), this.hasAttribute("role") || this.setAttribute("role", "radiogroup");
  }
  updated(e) {
    super.updated(e), e.has("disabled") && F(this, V, iu).call(this, this.disabled), e.has("readonly") && F(this, V, ru).call(this, this.readonly), e.has("name") && F(this, V, eu).call(this, e.get("name"));
  }
  /**
   * This method enables <label for="..."> to focus the select
   */
  async focus() {
    var e, t;
    await this.updateComplete, P(this, q) !== null ? (e = P(this, N)[P(this, q)]) == null || e.focus() : (t = F(this, V, _i).call(this, 1, !1)) == null || t.focus();
  }
  async blur() {
    var e, t;
    await this.updateComplete, P(this, q) !== null ? (e = P(this, N)[P(this, q)]) == null || e.blur() : (t = F(this, V, _i).call(this, 1, !1)) == null || t.blur();
  }
  async click() {
    var e, t;
    await this.updateComplete, P(this, q) !== null ? (e = P(this, N)[P(this, q)]) == null || e.click() : (t = F(this, V, _i).call(this, 1, !1)) == null || t.click();
  }
  getFormElement() {
    if (P(this, N) && P(this, q))
      return P(this, N)[P(this, q)];
  }
  render() {
    return c` <slot @slotchange=${F(this, V, _d)}></slot> `;
  }
};
q = /* @__PURE__ */ new WeakMap();
N = /* @__PURE__ */ new WeakMap();
sl = /* @__PURE__ */ new WeakMap();
nl = /* @__PURE__ */ new WeakMap();
tn = /* @__PURE__ */ new WeakMap();
en = /* @__PURE__ */ new WeakMap();
al = /* @__PURE__ */ new WeakMap();
V = /* @__PURE__ */ new WeakSet();
_d = function(e) {
  var i;
  if (e.stopPropagation(), (i = P(this, N)) == null || i.forEach((o) => {
    o.removeEventListener(
      Uo.CHANGE,
      // @ts-ignore TODO: fix typescript error
      P(this, en)
    ), o.removeEventListener("blur", P(this, tn));
  }), Os(this, q, null), Os(this, N, e.target.assignedElements({ flatten: !0 }).filter((o) => o instanceof Nt)), P(this, N).length === 0) return;
  P(this, N).forEach((o) => {
    o.addEventListener(
      Uo.CHANGE,
      // @ts-ignore TODO: fix typescript error
      P(this, en)
    ), o.addEventListener("blur", P(this, tn));
  }), F(this, V, eu).call(this, this.name), this.disabled && F(this, V, iu).call(this, !0), this.readonly && F(this, V, ru).call(this, !0);
  const t = P(this, N).filter((o) => o.checked === !0);
  if (t.length > 1 && (P(this, N).forEach((o) => {
    o.checked = !1;
  }), this.value = "", console.error(
    "There can only be one checked radio among the <" + this.nodeName + "> children",
    this
  )), t.length === 1) {
    const o = t[0];
    this.value = o.value, Os(this, q, P(this, N).indexOf(o));
  }
};
eu = function(e) {
  var t;
  (t = P(this, N)) == null || t.forEach((i) => i.name = e);
};
ll = function(e) {
  const t = [];
  P(this, N).forEach((i, o) => {
    i.value === e ? (i.checked = !0, i.makeFocusable(), Os(this, q, o)) : (i.checked = !1, t.push(i));
  }), P(this, q) !== null && t.forEach((i) => i.makeUnfocusable());
};
iu = function(e) {
  var t;
  (t = P(this, N)) == null || t.forEach((i) => i.disabled = e);
};
ru = function(e) {
  var t;
  (t = P(this, N)) == null || t.forEach((i) => i.readonly = e);
};
_i = function(e = 1, t = !0) {
  if (!P(this, N) || P(this, N).length === 0) return null;
  const i = P(this, N).length;
  let o = P(this, q) ?? 0;
  for (let r = 0; r < i + 1; r++) {
    if (!t || r > 0) {
      const s = P(this, N)[o];
      if (!s.disabled && !s.readonly)
        return s;
    }
    o = (o + e + i) % i;
  }
  return null;
};
yd = function() {
  var e, t;
  this.value = ((e = F(this, V, _i).call(this, -1)) == null ? void 0 : e.value) ?? "", (t = P(this, N)[P(this, q) ?? 0]) == null || t.focus(), F(this, V, zo).call(this);
};
wd = function() {
  var e, t;
  this.value = ((e = F(this, V, _i).call(this)) == null ? void 0 : e.value) ?? "", (t = P(this, N)[P(this, q) ?? 0]) == null || t.focus(), F(this, V, zo).call(this);
};
zo = function() {
  this.pristine = !1, this.dispatchEvent(new ol(ol.CHANGE));
};
kr.formAssociated = !0;
kr.styles = [
  b`
      :host {
        display: inline-block;
        padding-right: 3px;
        border: 1px solid transparent;
        border-radius: var(--uui-border-radius,3px);
      }

      :host(:not([pristine]):invalid),
      /* polyfill support */
      :host(:not([pristine])[internals-invalid]) {
        border: 1px solid var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
    `
];
Ql([
  l({ type: Boolean, reflect: !0 })
], kr.prototype, "disabled", 2);
Ql([
  l({ type: Boolean, reflect: !0 })
], kr.prototype, "readonly", 2);
kr = Ql([
  g("uui-radio-group")
], kr);
class Wt extends L {
  constructor(t, i = {}) {
    super(t, {
      bubbles: !0,
      ...i
    });
  }
}
Wt.INPUT = "input";
Wt.CHANGE = "change";
var z0 = Object.defineProperty, M0 = Object.getOwnPropertyDescriptor, xd = (e) => {
  throw TypeError(e);
}, R = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? M0(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && z0(t, i, r), r;
}, $d = (e, t, i) => t.has(e) || xd("Cannot " + i), T0 = (e, t, i) => ($d(e, t, "read from private field"), i ? i.call(e) : t.get(e)), xc = (e, t, i) => t.has(e) ? xd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Bi = (e, t, i) => ($d(e, t, "access private method"), i), ze, bi, ul;
const pa = {
  TOP: 3,
  CENTER: 2
}, Xr = 18, rr = 3, xe = 12, D0 = 24, fa = (e) => {
  const t = e.toString().indexOf(".");
  return t >= 0 ? e.toString().length - t - 1 : 0;
};
let B = class extends re(_, "") {
  /** Constructor and Validator */
  constructor() {
    super(), xc(this, ze), this.disabled = !1, this.readonly = !1, this._min = 0, this._max = 0, this.hideStepValues = !1, this._step = 1, this._movement = !1, this.startPoint = {
      mouse: 0,
      low: 0,
      high: 0
    }, this._lowInputValue = 0, this._highInputValue = 0, this._trackWidth = 0, this._lowValuePercentStart = 0, this._highValuePercentEnd = 100, xc(this, ul, (e) => {
      e.key == "Enter" && this.submit();
    }), this._onTouchStart = (e) => {
      if (this.disabled) return;
      const t = e.composedPath()[0];
      if (t !== this._outerTrack)
        if (t === this._innerColor || t === this._innerColorThumb)
          window.addEventListener("touchend", this._onTouchEnd), window.addEventListener("touchcancel", this._onTouchEnd), window.addEventListener("touchmove", this._onTouchMove), this._movement = !0, this._saveStartPoints(e.touches[0].pageX);
        else {
          const i = this._getClickedValue(e.touches[0].pageX), o = Math.abs(this._lowInputValue - i), r = Math.abs(this._highInputValue - i);
          o < r ? this.setValueLow(i) : this.setValueHigh(i);
        }
    }, this._onTouchMove = (e) => {
      this._dragBothValuesByMousePos(e.touches[0].pageX);
    }, this._onTouchEnd = () => {
      this._movement = !1, this.onChanged(), window.removeEventListener("touchend", this._onTouchEnd), window.removeEventListener("touchcancel", this._onTouchEnd), window.removeEventListener("touchmove", this._onTouchMove);
    }, this._onMouseDown = (e) => {
      if (this.disabled || this.readonly) return;
      const t = e.composedPath()[0];
      if (t !== this._outerTrack)
        if (t === this._innerColor || t === this._innerColorThumb)
          window.addEventListener("mouseup", this._onMouseUp), window.addEventListener("mousemove", this._onMouseMove), this._movement = !0, this._saveStartPoints(e.pageX);
        else {
          const i = this._getClickedValue(e.pageX), o = Math.abs(this._lowInputValue - i), r = Math.abs(this._highInputValue - i);
          o < r ? this.setValueLow(i) : this.setValueHigh(i);
        }
    }, this._onMouseMove = (e) => {
      e.preventDefault(), this._dragBothValuesByMousePos(e.pageX);
    }, this._onMouseUp = () => {
      this._movement = !1, this.onChanged(), window.removeEventListener("mouseup", this._onMouseUp), window.removeEventListener("mousemove", this._onMouseMove);
    }, this.addEventListener("keydown", T0(this, ul)), this.addEventListener("mousedown", this._onMouseDown), this.addEventListener("touchstart", this._onTouchStart), window.addEventListener("resize", () => {
      var e;
      this._trackWidth = (e = this._outerTrack) == null ? void 0 : e.offsetWidth;
    });
  }
  get min() {
    return this._min;
  }
  set min(e) {
    this._min = e, Bi(this, ze, bi).call(this);
  }
  get max() {
    return this._max;
  }
  set max(e) {
    this._max = e, Bi(this, ze, bi).call(this);
  }
  get step() {
    return this._step;
  }
  set step(e) {
    this._step = e, Bi(this, ze, bi).call(this);
  }
  get minGap() {
    return this._minGap;
  }
  set minGap(e) {
    this._minGap = e, Bi(this, ze, bi).call(this);
  }
  get maxGap() {
    return this._maxGap;
  }
  set maxGap(e) {
    this._maxGap = e, Bi(this, ze, bi).call(this);
  }
  get value() {
    return super.value;
  }
  set value(e) {
    super.value = e, Bi(this, ze, bi).call(this);
  }
  setValueLow(e) {
    e = T(
      e,
      this.maxGap ? this._highInputValue - this.maxGap > this.min ? this._highInputValue - this.maxGap : this.min : this.min,
      this.minGap ? this._highInputValue - this.minGap : this._highInputValue - this.step
    ), this.setValue(e, this._highInputValue);
  }
  setValueHigh(e) {
    e = T(
      e,
      this.minGap ? this._lowInputValue + this.minGap : this._lowInputValue + this.step,
      this.maxGap ? this.maxGap + this._lowInputValue < this.max ? this.maxGap + this._lowInputValue : this.max : this.max
    ), this.setValue(this._lowInputValue, e);
  }
  setValue(e, t, i) {
    if (i) {
      const o = this.startPoint.high - this.startPoint.low;
      e = T(e, this.min, this.max - o), t = T(t, this.min + o, this.max);
    }
    this._inputLow.value = e.toString(), this._inputHigh.value = t.toString(), this.value = `${e},${t}`;
  }
  getFormElement() {
    return this._currentFocus ? this._currentFocus : this._inputLow;
  }
  async focus() {
    await this.updateComplete, this.getFormElement().focus();
  }
  async blur() {
    await this.updateComplete, this.getFormElement().blur();
  }
  connectedCallback() {
    super.connectedCallback(), this.value || (this.value = `${this._min},${this._max}`);
  }
  firstUpdated(e) {
    super.updated(e), this._trackWidth = this._outerTrack.offsetWidth, this._runPropertiesChecks();
  }
  _runPropertiesChecks() {
    if (new RegExp(/^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/).test(this.value) || console.error("Range slider (Value error occurred): Bad input"), this._highInputValue === this._lowInputValue && console.error(
      "Range slider (Value error occurred): Low-end and high-end value should never be equal. Use <uui-slider></uui-slider> instead."
    ), this._lowInputValue > this._highInputValue && console.error(
      "Range slider (Value error occurred): Low-end value should never be higher than high-end value."
    ), (this._highInputValue > this._max || this._highInputValue < this._min) && (this.setValueHigh(this._max), console.warn(
      `Conflict with the high-end value and max value. High-end value has been converted to the max value (${this._max})`
    )), (this._lowInputValue < this._min || this._lowInputValue > this._max) && (this.setValueLow(this._min), console.warn(
      `Conflict with the low-end value and min value. Low-end value has been converted to the min value (${this._min})`
    )), this._step <= 0 && (this._step = 1, console.warn(
      "Property step needs a value higher than 0. Converted the step value to 1 (default)"
    )), (this._max - this._min) / this._step % 1 !== 0 && console.error(
      "Conflict with step value and the min and max values. May experience bad side effects"
    ), this._minGap && this._minGap < this._step && (this._minGap = void 0, console.warn(
      "Conflict with min-gap and step value. The min-gap needs to be higher than the step value. Removed the min-gap property."
    )), this._minGap && this._maxGap && this._minGap > this._maxGap && (this._minGap = void 0, this._maxGap = void 0, console.warn(
      "Conflict with min-gap and max-gap. Removed the min-gap and max-gap properties."
    )), this._minGap && this._max - this._min < this._minGap && (this._minGap = void 0, console.warn(
      "Conflict with the min-gap and the total range. Removed the min-gap."
    )), this._maxGap && this._highInputValue - this._lowInputValue > this._maxGap && (this.setValueHigh(this._lowInputValue + this._maxGap), console.warn(
      `Conflict with value and max-gap. High-end value has been converted to the highest possible value based on the low-end value and the max gap value (${this._highInputValue})`
    )), this._minGap && this._highInputValue - this._lowInputValue < this._minGap) {
      const t = this._minGap;
      this._highInputValue - t < this._min ? (this.setValueHigh(this._lowInputValue + t), console.warn(
        `Conflict with value and min gap. High-end value has been converted to the lowest possible value based on the low-end value and the min gap value (${this._highInputValue}).`
      )) : (this.setValueLow(this._highInputValue - t), console.warn(
        `Conflict with value and min gap. Low-end value has been converted to the highest possible value based on the high-end value and the min gap value (${this._lowInputValue}).`
      ));
    }
  }
  _updateInnerColor() {
    const e = this._max - this._min, t = this._lowInputValue - this._min, i = this._highInputValue - this._min, o = t / e * 100, r = 100 - i / e * 100;
    this._lowValuePercentStart = T(o, 0, 100), this._highValuePercentEnd = T(r, 0, 100);
  }
  _getClickedValue(e) {
    const t = this._outerTrack.getBoundingClientRect().left, r = (e - t - xe) / (this._trackWidth - xe * 2) * (this._max - this._min) + this._min;
    return Math.round(r / this._step) * this._step;
  }
  /** Drag both thumbs logics */
  _saveStartPoints(e) {
    this.startPoint = {
      mouse: e,
      low: this._lowInputValue,
      high: this._highInputValue
    };
  }
  _dragBothValuesByMousePos(e) {
    const t = this._outerTrack.offsetWidth, i = e - this.startPoint.mouse, o = this._max - this._min, r = i / (t + xe * 2), s = Math.round(r * o / this._step) * this._step, n = this.startPoint.low + s, a = this.startPoint.high + s;
    this.setValue(n, a, !0), this.dispatchEvent(new Wt(Wt.INPUT));
  }
  /** Input Events */
  _onLowInput(e) {
    this.disabled && e.preventDefault(), this.readonly && e.preventDefault(), this._currentFocus = this._inputLow;
    const t = Number(e.target.value);
    this.setValueLow(t), this.dispatchEvent(new Wt(Wt.INPUT));
  }
  _onHighInput(e) {
    this.disabled && e.preventDefault(), this.readonly && e.preventDefault(), this._currentFocus = this._inputHigh;
    const t = Number(e.target.value);
    this.setValueHigh(t), this.dispatchEvent(new Wt(Wt.INPUT));
  }
  /** Change Events */
  _onLowChange() {
    this.setValueLow(Number(this._inputLow.value)), this.onChanged();
  }
  _onHighChange() {
    this.setValueHigh(Number(this._inputHigh.value)), this.onChanged();
  }
  onChanged() {
    this.pristine = !1, this.dispatchEvent(new Wt(Wt.CHANGE));
  }
  /** Render */
  render() {
    return c`
      <div id="range-slider">
        ${this._renderNativeInputs()}
        <div id="inner-track">
          <div
            id="inner-color-thumb"
            class="${this._movement ? "active" : ""}"
            style="left: ${this._lowValuePercentStart}%; right: ${this._highValuePercentEnd}%">
            ${this._renderThumbValues()}
            <div class="${this._movement ? "color active" : "color"}"></div>
          </div>
          ${this._renderSteps()}
        </div>
      </div>
    `;
  }
  _renderThumbValues() {
    return c`<div class="thumb-values">
      <span
        ><span
          >${this._lowInputValue.toFixed(fa(this._step))}</span
        ></span
      >
      <span
        ><span
          >${this._highInputValue.toFixed(fa(this._step))}</span
        ></span
      >
    </div>`;
  }
  _renderSteps() {
    const e = (this._max - this._min) / this._step, t = (this._trackWidth - xe * 2) / e;
    if (t < D0 || e % 1 !== 0) return;
    let i = 0;
    const o = new Array(e + 1).fill(t).map((r) => r * i++);
    return c`<div class="step-wrapper">
      <svg height="100%" width="100%">
        <rect x="9" y="9" height="${rr}" rx="2" />
        ${this._renderStepCircles(o)}
      </svg>
      ${this._renderStepValues(e)}
    </div>`;
  }
  _renderStepValues(e) {
    if (this.hideStepValues || e > 20) return;
    let t = 0;
    const i = new Array(e + 1).fill(this._step).map(
      (o) => (this._min + o * t++).toFixed(fa(this._step))
    );
    return c`<div class="step-values">
      ${i.map((o) => c`<span><span>${o}</span></span>`)}
    </div>`;
  }
  _renderStepCircles(e) {
    const t = this._trackWidth / (this._max - this._min);
    return y`${e.map((i) => {
      const o = i + xe, r = this._lowInputValue - this._min, s = this._highInputValue - this._min;
      return o / t >= r && o / t <= s ? y`<circle class="track-step filled" cx="${o}" cy="${rr * 2}" r="4.5" />` : y`<circle class="track-step regular" cx="${o}" cy="${rr * 2}" r="4.5" />`;
    })}`;
  }
  _renderNativeInputs() {
    return c` <div class="native-wrapper">
      <input
        id="inputLow"
        class="${this._movement ? "focus" : ""}"
        type="range"
        min=${this._min}
        max=${this._max}
        step=${this._step}
        .value=${this._lowInputValue.toString()}
        aria-label="${this.label} low-end value"
        ?disabled="${this.disabled || this.readonly}"
        @input=${this._onLowInput}
        @change=${this._onLowChange} />
      <input
        id="inputHigh"
        class="${this._movement ? "focus" : ""}"
        type="range"
        min="${this._min}"
        max="${this._max}"
        step="${this._step}"
        .value=${this._highInputValue.toString()}
        aria-label="${this.label} high-end value"
        ?disabled="${this.disabled || this.readonly}"
        @input=${this._onHighInput}
        @change=${this._onHighChange} />
    </div>`;
  }
};
ze = /* @__PURE__ */ new WeakSet();
bi = function() {
  const e = this.value.split(",");
  let t = Number(e[0]) || 0, i = Number(e[1]) || 0;
  i = T(i, this._min, this._max), t = this._min + Math.round((t - this._min) / this._step) * this._step, i = this._min + Math.round((i - this._min) / this._step) * this._step, this._lowInputValue = T(
    t,
    this._min,
    this._minGap ? i - this._minGap : i - this._step
  ), this._highInputValue = T(
    i,
    this._minGap ? this._lowInputValue + this._minGap : this._lowInputValue + this._step,
    Math.min(this._maxGap ? t + this._maxGap : this._max, this._max)
  ), this._updateInnerColor(), this.requestUpdate();
};
ul = /* @__PURE__ */ new WeakMap();
B.formAssociated = !0;
B.styles = [
  b`
      :host {
        --color-interactive: var(--uui-color-selected,#3544b1);
        --color-hover: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
        --color-focus: var(--uui-color-focus,#3879ff);
        min-height: 30px;
      }

      :host([error]) {
        --color-interactive: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
        --color-hover: var(--uui-color-invalid,#d42054);
      }

      #range-slider {
        min-height: 30px;
        box-sizing: border-box;
        position: relative;
        display: flex;
        align-items: center;
      }

      /** Track */

      #inner-track {
        user-select: none;
        background-color: var(--uui-color-border-standalone,#c2c2c2);
        position: absolute;
        height: 3px;
        left: ${xe}px; /* Match TRACK_MARGIN */
        right: ${xe}px; /* Match TRACK_MARGIN */
      }

      :host(:not([disabled]):hover) #inner-track,
      :host(:not([disabled]):active) #inner-track {
        background-color: var(--uui-color-border-emphasis,#a1a1a1);
      }

      #inner-color-thumb {
        margin: -9px 0 0;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: ${Xr}px;
        cursor: grab;
        user-select: none;
        z-index: ${pa.CENTER};
      }

      :host([disabled]) #inner-color-thumb,
      :host([readonly]) #inner-color-thumb {
        cursor: default;
      }

      /** Colored part of track */

      :host([disabled]) #range-slider #inner-color-thumb .color {
        background-color: var(--uui-palette-mine-grey,#3e3e3e) !important;
      }

      #inner-color-thumb:focus .color {
        background-color: var(--color-focus);
      }

      #inner-color-thumb:hover .color,
      #inner-color-thumb .color.active {
        background-color: var(--color-hover);
      }

      :host(:not([readonly])) #inner-color-thumb:hover .color {
        height: ${rr * 2}px;
        background-color: var(--color-hover);
        transform: translateY(-${rr / 2}px);
      }

      .color {
        user-select: none;
        position: absolute;
        inset-inline: 0;
        height: ${rr}px;
        top: 50%;
        transform: translateY(0);
        background-color: var(--color-interactive);
        transition: height 60ms;
      }

      :host([error]) .color {
        background-color: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
      :host([error]) #inner-color-thumb:hover ~ .color,
      :host([error]) #inner-color-thumb:focus ~ .color {
        background-color: var(--uui-color-invalid-emphasis,rgb(
    226,
    60,
    107
  ));
      }

      /** Steps */
      .step-wrapper {
        margin: 0 ${-1 * xe}px;
        height: 11px;
        position: absolute;
        left: 0;
        right: 0;
        top: -10px;
      }

      /** Step circles */
      .track-step {
        fill: var(--uui-color-border,#d8d7d9);
      }

      :host(:not([disabled]):hover) #inner-track .track-step.regular,
      :host(:not([disabled]):active) #inner-track .track-step.regular {
        fill: var(--uui-color-border-emphasis,#a1a1a1);
      }

      :host .track-step.filled {
        fill: var(--color-interactive);
      }

      :host([error]) .track-step.filled {
        fill: var(--uui-color-invalid-emphasis,rgb(
    226,
    60,
    107
  ));
      }

      :host #inner-color-thumb.active ~ .step-wrapper .track-step.filled,
      :host #inner-color-thumb:hover ~ .step-wrapper .track-step.filled {
        fill: var(--color-hover);
      }

      :host([disabled]) #range-slider .track-step.filled {
        fill: var(--uui-palette-mine-grey,#3e3e3e) !important;
      }

      /** Step values */

      .step-values {
        box-sizing: border-box;
        margin: 0 ${xe}px; /* Match TRACK_MARGIN */
        display: flex;
        justify-content: space-between;
        font-size: var(--uui-type-small-size,12px);
      }

      .step-values > span {
        position: relative;
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      .step-values > span > span {
        position: absolute;
        transform: translateX(-50%);
      }

      /** Input */

      .native-wrapper {
        position: relative;
        width: 100%;
        inset-inline: 0px;
        margin: -22px 5px 0 1px;
      }

      input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        pointer-events: none;
        position: absolute;
        cursor: pointer;
        background-color: transparent;
        inset-inline: 0;
        width: 100%;
        border-radius: 20px;
      }

      input:focus-within {
        outline: none;
      }

      /** Thumb values */
      .thumb-values {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        color: var(--color-interactive);
        font-weight: bold;
        transition: 120ms opacity;
        opacity: 0;
      }

      .thumb-values > span {
        width: 0;
      }

      .thumb-values > span > span {
        bottom: 15px;
        position: absolute;
        transform: translateX(-50%);
      }

      :host([disabled]) .thumb-values {
        color: var(--uui-palette-mine-grey,#3e3e3e);
      }

      :host([readonly]) .thumb-values {
        opacity: 1;
      }

      #range-slider:hover .thumb-values {
        opacity: 1;
      }

      /** Native thumbs */
      /** Chrome */
      input::-webkit-slider-thumb {
        -webkit-appearance: none;
        pointer-events: all;
        cursor: grab;
        position: relative;
        z-index: ${pa.TOP};
        width: ${Xr}px;
        height: ${Xr}px;
        border-radius: 24px;
        border: none;
        background-color: var(--color-interactive);
        overflow: visible;
        box-shadow:
          inset 0 0 0 2px var(--color-interactive),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }

      :host([disabled]) input::-webkit-slider-thumb,
      :host([readonly]) input::-webkit-slider-thumb {
        cursor: default;
      }

      input:focus-within::-webkit-slider-thumb,
      input.focus::-webkit-slider-thumb {
        background-color: var(--color-focus);
        box-shadow:
          inset 0 0 0 2px var(--color-focus),
          inset 0 0 0 4px var(--uui-color-surface,#fff),
          0 0 0 2px var(--color-focus);
      }
      input::-webkit-slider-thumb:hover {
        background-color: var(--color-hover);
        box-shadow:
          inset 0 0 0 2px var(--color-hover),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }

      :host([disabled]) #range-slider input::-webkit-slider-thumb {
        background-color: var(--uui-palette-mine-grey,#3e3e3e);
        box-shadow:
          inset 0 0 0 2px var(--uui-palette-mine-grey,#3e3e3e),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }

      /** Mozilla */

      input::-moz-range-thumb {
        -moz-appearance: none;
        pointer-events: all;
        cursor: grab;
        position: relative;
        z-index: ${pa.TOP};
        width: ${Xr}px;
        height: ${Xr}px;
        border-radius: 24px;
        border: none;
        background-color: var(--color-interactive);
        overflow: visible;
        box-shadow:
          inset 0 0 0 2px var(--color-interactive),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }
      :host([disabled]) input::-moz-range-thumb,
      :host([readonly]) input::-moz-range-thumb {
        cursor: default;
      }

      input:focus-within::-moz-range-thumb,
      input.focus::-moz-range-thumb {
        background-color: var(--color-focus);
        box-shadow:
          inset 0 0 0 2px var(--color-focus),
          inset 0 0 0 4px var(--uui-color-surface,#fff),
          0 0 0 2px var(--color-focus);
      }
      input::-moz-range-thumb:hover {
        background-color: var(--color-hover);
        box-shadow:
          inset 0 0 0 2px var(--color-hover),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }

      :host([disabled]) #range-slider input::-moz-range-thumb {
        background-color: var(--uui-palette-mine-grey,#3e3e3e);
        box-shadow:
          inset 0 0 0 2px var(--uui-palette-mine-grey,#3e3e3e),
          inset 0 0 0 4px var(--uui-color-surface,#fff);
      }
    `
];
R([
  l({ type: String })
], B.prototype, "label", 2);
R([
  l({ type: Boolean, reflect: !0 })
], B.prototype, "disabled", 2);
R([
  l({ type: Boolean, reflect: !0 })
], B.prototype, "readonly", 2);
R([
  l({ type: Number })
], B.prototype, "min", 1);
R([
  l({ type: Number })
], B.prototype, "max", 1);
R([
  l({ type: Boolean, attribute: "hide-step-values" })
], B.prototype, "hideStepValues", 2);
R([
  l({ type: Number })
], B.prototype, "step", 1);
R([
  l({ type: Number, attribute: "min-gap" })
], B.prototype, "minGap", 1);
R([
  l({ type: Number, attribute: "max-gap" })
], B.prototype, "maxGap", 1);
R([
  l({ type: String })
], B.prototype, "value", 1);
R([
  w()
], B.prototype, "_movement", 2);
R([
  w()
], B.prototype, "_lowInputValue", 2);
R([
  w()
], B.prototype, "_highInputValue", 2);
R([
  w()
], B.prototype, "_trackWidth", 2);
R([
  w()
], B.prototype, "_lowValuePercentStart", 2);
R([
  w()
], B.prototype, "_highValuePercentEnd", 2);
R([
  U("#range-slider")
], B.prototype, "_outerTrack", 2);
R([
  U("#inputLow")
], B.prototype, "_inputLow", 2);
R([
  U("#inputHigh")
], B.prototype, "_inputHigh", 2);
R([
  U(".color")
], B.prototype, "_innerColor", 2);
R([
  U("#inner-color-thumb")
], B.prototype, "_innerColorThumb", 2);
B = R([
  g("uui-range-slider")
], B);
var L0 = Object.getOwnPropertyDescriptor, N0 = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? L0(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = n(r) || r);
  return r;
};
let cl = class extends _ {
  render() {
    return c`<slot></slot>`;
  }
};
cl.styles = [
  b`
      :host {
        display: block;
      }

      ::slotted(*:not(:first-child)) {
        margin-top: 1px;
      }
      ::slotted(*:not(:first-child))::before {
        content: '';
        position: absolute;
        top: -1px;
        left: 0;
        right: 0;
        border-top: 1px solid var(--uui-color-border,#d8d7d9);
      }
    `
];
cl = N0([
  g("uui-ref-list")
], cl);
class ao extends L {
}
ao.OPEN = "open";
var H0 = Object.defineProperty, B0 = Object.getOwnPropertyDescriptor, Hn = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? B0(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && H0(t, i, r), r;
};
let Ze = class extends An(
  Ur(_)
) {
  constructor() {
    super(...arguments), this.disabled = !1, this.readonly = !1, this.error = !1;
  }
  handleOpenClick(e) {
    e.stopPropagation(), this.dispatchEvent(new ao(ao.OPEN));
  }
  handleOpenKeydown(e) {
    e.key !== " " && e.key !== "Enter" || (e.preventDefault(), e.stopPropagation(), this.dispatchEvent(new ao(ao.OPEN)));
  }
};
Ze.styles = [
  b`
      :host {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-size: var(--uui-font-size);

        box-sizing: border-box;
        border-radius: var(--uui-border-radius,3px);
        background-color: var(--uui-color-surface,#fff);
        --uui-card-before-opacity: 0;
        transition: --uui-card-before-opacity 120ms;
      }

      :host([selectable]:focus-visible) {
        outline-color: var(--uui-color-focus,#3879ff);
        outline-width: var(--uui-card-border-width);
        outline-style: solid;
        outline-offset: var(--uui-card-border-width);
      }

      :host([error]) {
        border: 2px solid var(--uui-color-invalid,#d42054);
        box-shadow:
          0 0 4px 0 var(--uui-color-invalid,#d42054),
          inset 0 0 2px 0 var(--uui-color-invalid,#d42054);
      }

      :host([standalone]) {
        border: 1px solid var(--uui-color-border,#d8d7d9);
      }

      :host([selectable]) {
        cursor: pointer;
      }
      :host([selectable]) #select-border {
        position: absolute;
        z-index: 2;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        pointer-events: none;
        opacity: 0;
        transition: opacity 120ms;
      }
      :host([selectable]) #select-border::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 2px solid var(--uui-color-selected,#3544b1);
        border-radius: calc(var(--uui-border-radius,3px) + 2px);
        box-shadow:
          0 0 4px 0 var(--uui-color-selected,#3544b1),
          inset 0 0 2px 0 var(--uui-color-selected,#3544b1);
      }
      :host([selected]) #select-border {
        opacity: 1;
      }
      :host([selectable]:not([selected]):hover) #select-border {
        opacity: 0.33;
      }
      :host([selectable][selected]:hover) #select-border {
        opacity: 0.8;
      }

      :host([selectable]:not([selected])) #open-part:hover + #select-border {
        opacity: 0;
      }
      :host([selectable][selected]) #open-part:hover + #select-border {
        opacity: 1;
      }

      :host([selectable]:not([selected]):hover) #select-border::after {
        animation: not-selected--hover 1.2s infinite;
      }
      @keyframes not-selected--hover {
        0%,
        100% {
          opacity: 0.66;
        }
        50% {
          opacity: 1;
        }
      }

      :host([selectable][selected]:hover) #select-border::after {
        animation: selected--hover 1.4s infinite;
      }
      @keyframes selected--hover {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.66;
        }
      }
      :host([selectable]) #open-part:hover + #select-border::after {
        animation: none;
      }

      :host([select-only]) *,
      :host([select-only]) ::slotted(*) {
        pointer-events: none;
      }

      button {
        font-size: inherit;
        font-family: inherit;
        border: 0;
        padding: 0;
        background-color: transparent;
        text-align: left;
        color: var(--uui-color-text,#060606);
      }
      a {
        text-decoration: none;
        color: inherit;
      }

      button:focus,
      a:focus {
        outline-color: var(--uui-color-focus,#3879ff);
        outline-width: var(--uui-card-border-width);
        outline-style: solid;
        outline-offset: var(--uui-card-border-width);
        border-radius: var(--uui-border-radius,3px);
      }

      slot[name='actions'] {
        display: flex;
        align-items: center;
        --uui-button-height: calc(var(--uui-size-2,6px) * 4);
        margin-right: var(--uui-size-2,6px);
      }
      #tag-container {
        margin: calc(var(--uui-size-2,6px));
      }
      #actions-container {
        margin: calc(var(--uui-size-2,6px));
        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:hover) #actions-container,
      :host(:focus) #actions-container,
      :host(:focus-within) #actions-container {
        opacity: 1;
      }

      :host([standalone]:not([disabled]):hover) {
        border-color: var(--uui-color-border-emphasis,#a1a1a1);
      }

      :host([disabled]) #open-part {
        cursor: default;
      }

      :host([standalone][disabled]) {
        border-color: var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ));
      }

      slot[name='tag'] {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
    `
];
Hn([
  l({ type: Boolean, reflect: !0 })
], Ze.prototype, "disabled", 2);
Hn([
  l({ type: Boolean, reflect: !0 })
], Ze.prototype, "readonly", 2);
Hn([
  l({ type: Boolean, reflect: !0 })
], Ze.prototype, "error", 2);
Ze = Hn([
  g("uui-ref")
], Ze);
var V0 = Object.defineProperty, j0 = Object.getOwnPropertyDescriptor, kd = (e) => {
  throw TypeError(e);
}, Li = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? j0(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && V0(t, i, r), r;
}, R0 = (e, t, i) => t.has(e) || kd("Cannot " + i), F0 = (e, t, i) => t.has(e) ? kd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Re = (e, t, i) => (R0(e, t, "access private method"), i), Qt, Cd, Ed, Bn, Pd, Sd, Ad;
let W = class extends Ze {
  constructor() {
    super(...arguments), F0(this, Qt), this.name = "", this.detail = "", this._iconSlotHasContent = !1, this.fallbackIcon = `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    id="icon">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
  </svg>`;
  }
  connectedCallback() {
    super.connectedCallback(), C(this, "uui-icon");
  }
  renderDetail() {
    return c`<small id="detail"
      >${this.detail}<slot name="detail"></slot
    ></small>`;
  }
  render() {
    return c`
      ${Re(this, Qt, Ad).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>

      <slot></slot>
      <slot name="tag" id="tag-container"></slot>
      <slot name="actions" id="actions-container"></slot>
    `;
  }
};
Qt = /* @__PURE__ */ new WeakSet();
Cd = function(e) {
  this._iconSlotHasContent = e.target.assignedNodes({ flatten: !0 }).length > 0;
};
Ed = function() {
  return c`<uui-icon .svg="${this.fallbackIcon}"></uui-icon>`;
};
Bn = function() {
  return c`
      <span id="content" class="uui-text">
        <span id="icon">
          <slot name="icon" @slotchange=${Re(this, Qt, Cd)}></slot>
          ${this._iconSlotHasContent === !1 ? Re(this, Qt, Ed).call(this) : ""}
        </span>
        <div id="info">
          <div id="name">${this.name}<slot name="name"></slot></div>
          ${this.renderDetail()}
        </div>
      </span>
    `;
};
Pd = function() {
  return c`<a
      id="open-part"
      class="uui-text"
      tabindex=${this.disabled ? S : "0"}
      href=${k(this.disabled ? void 0 : this.href)}
      target=${k(this.target || void 0)}
      rel=${k(
    this.rel || k(
      this.target === "_blank" ? "noopener noreferrer" : void 0
    )
  )}>
      ${Re(this, Qt, Bn).call(this)}
    </a>`;
};
Sd = function() {
  return c`
      <button
        type="button"
        id="open-part"
        class="uui-text"
        tabindex="0"
        @click=${this.handleOpenClick}
        @keydown=${this.handleOpenKeydown}
        ?disabled=${this.disabled}>
        ${Re(this, Qt, Bn).call(this)}
      </button>
    `;
};
Ad = function() {
  return this.readonly ? c`${Re(this, Qt, Bn).call(this)}` : this.href ? Re(this, Qt, Pd).call(this) : Re(this, Qt, Sd).call(this);
};
W.styles = [
  ...Ze.styles,
  b`
      :host {
        min-width: 250px;
        padding: 1px;
      }

      #content {
        display: flex;
        flex-grow: 1;
        align-items: center;
        line-height: 1.2em;
        padding: calc(var(--uui-size-3,9px));
      }

      #open-part {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
        display: flex;
        flex-grow: 1;
      }

      #icon {
        font-size: 1.2em;
        margin-right: var(--uui-size-1,3px);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      #info {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        height: 100%;
        padding-left: var(--uui-size-2,6px);
        margin-top: 1px;
      }

      #detail {
        opacity: 0.6;
        line-height: 1.2em;
      }

      :host([selectable]) #open-part {
        flex-grow: 0;
        padding: 0;
        margin: calc(var(--uui-size-2,6px));

        #content {
          padding: 0;
        }
      }

      :host(:not([disabled])) #open-part:hover #icon {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      :host(:not([disabled])) #open-part:hover #name {
        text-decoration: underline;
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }
      :host(:not([disabled])) #open-part:hover #detail {
        color: var(--uui-color-interactive-emphasis,#3544b1);
      }

      :host([disabled]) #icon {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) #name {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) #detail {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
    `
];
Li([
  l({ type: String })
], W.prototype, "name", 2);
Li([
  l({ type: String })
], W.prototype, "detail", 2);
Li([
  l({ type: String })
], W.prototype, "href", 2);
Li([
  l({ type: String })
], W.prototype, "target", 2);
Li([
  l({ type: String })
], W.prototype, "rel", 2);
Li([
  w()
], W.prototype, "_iconSlotHasContent", 2);
W = Li([
  g("uui-ref-node")
], W);
var W0 = Object.defineProperty, G0 = Object.getOwnPropertyDescriptor, Od = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? G0(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && W0(t, i, r), r;
};
let rn = class extends W {
  constructor() {
    super(...arguments), this.fallbackIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M142.212 397.267l106.052-48.024L398.479 199.03l-26.405-26.442-90.519 90.517-15.843-15.891 90.484-90.486-16.204-16.217-150.246 150.243-47.534 106.513zm74.904-100.739l23.285-23.283 3.353 22.221 22.008 3.124-23.283 23.313-46.176 20.991 20.813-46.366zm257.6-173.71L416.188 64.3l-49.755 49.785 58.504 58.503 49.779-49.77zM357.357 300.227h82.826v116.445H68.929V300.227h88.719v-30.648H38.288v177.733h432.537V269.578H357.357v30.649z"></path></svg>', this.alias = "";
  }
  renderDetail() {
    const e = [];
    return this.alias !== "" && e.push(this.alias), this.detail !== "" && e.push(this.detail), c`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`;
  }
};
rn.styles = [...W.styles];
Od([
  l({ type: String })
], rn.prototype, "alias", 2);
rn = Od([
  g("uui-ref-node-data-type")
], rn);
var q0 = Object.defineProperty, K0 = Object.getOwnPropertyDescriptor, Id = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? K0(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && q0(t, i, r), r;
};
let on = class extends W {
  constructor() {
    super(...arguments), this.fallbackIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M49.035 60.434h413.93v33.592H49.035zm0 82.005h86.578v86.577H49.035zm163.677 0h86.576v86.577h-86.576zm163.676 0h86.576v86.577h-86.576zM49.035 282.984h413.93v33.593H49.035zm0 82.006h86.578v86.576H49.035zm163.677 0h86.576v86.576h-86.576zm163.676 0h86.576v86.576h-86.576z"></path></svg>', this.alias = "";
  }
  renderDetail() {
    const e = [];
    return this.alias !== "" && e.push(this.alias), this.detail !== "" && e.push(this.detail), c`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`;
  }
};
on.styles = [...W.styles];
Id([
  l({ type: String })
], on.prototype, "alias", 2);
on = Id([
  g("uui-ref-node-document-type")
], on);
var Y0 = Object.getOwnPropertyDescriptor, X0 = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Y0(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = n(r) || r);
  return r;
};
let hl = class extends W {
  constructor() {
    super(...arguments), this.fallbackIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M444.72 215.28H67.28c-11.04 0-20-8.96-20-20V64.896c0-11.04 8.96-20 20-20h377.44c11.04 0 20 8.96 20 20V195.28c0 11.056-8.96 20-20 20zm-357.44-40h337.44V84.896H87.28v90.384zm185.504 215.696c0-6.848.704-13.504 1.936-20H87.28v-90.384h337.44v12.496a108.098 108.098 0 0140 31.36v-63.856c0-11.04-8.96-20-20-20H67.28c-11.04 0-20 8.96-20 20v130.384c0 11.04 8.96 20 20 20h207.44c-1.232-6.496-1.936-13.152-1.936-20zm107.552-76.128c-41.968 0-76.112 34.16-76.112 76.128s34.144 76.128 76.112 76.128 76.128-34.16 76.128-76.128-34.144-76.128-76.128-76.128zm46.016 80.464a7.293 7.293 0 01-7.296 7.296h-27.072v27.088a7.293 7.293 0 01-7.296 7.296H376a7.293 7.293 0 01-7.296-7.296v-27.088h-27.072a7.293 7.293 0 01-7.296-7.296v-8.672a7.293 7.293 0 017.296-7.296h27.072v-27.088A7.293 7.293 0 01376 344.96h8.688a7.293 7.293 0 017.296 7.296v27.088h27.072a7.293 7.293 0 017.296 7.296v8.672z"></path></svg>';
  }
};
hl.styles = [...W.styles];
hl = X0([
  g("uui-ref-node-form")
], hl);
var Z0 = Object.defineProperty, J0 = Object.getOwnPropertyDescriptor, Ud = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? J0(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Z0(t, i, r), r;
};
let sn = class extends W {
  constructor() {
    super(...arguments), this.fallbackIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M331.135 98.375c3.677 14.798 4.045 16.031 3.702 31.225-.138 5.855-3.5 32.936-2.586 41.242.751 6.851 2.46 7.395 5.162 13.041 4.705 9.824 3.13 23.376 1.325 33.282-.988 5.42-3.076 13.136-6.248 17.561-3.497 4.876-10.498 4.913-13.592 10.602-4.459 8.195-1.941 19.692-4.752 28.54-3.193 10.033-11.325 10.738-11.938 23.867 3.986.562 7.962 1.134 11.938 1.703 3.99 8.484 11.297 25.552 18.759 30.688 6.25 1.705 12.505 3.411 18.752 5.113 21.907 8.982 46.251 19.732 68.204 28.987 19.991 8.434 43.927 11.439 51.151 32.396 0 14.229 1.343 47.849.976 66.497H36.514c-.367-18.648.974-52.268.974-66.497 7.226-20.957 31.16-23.963 51.151-32.396 21.953-9.255 46.297-20.005 68.201-28.987 6.25-1.702 12.506-3.408 18.754-5.113 7.461-5.136 14.77-22.203 18.76-30.688l8.877-2.158c-2.017-11.206-8.954-12.078-11.845-20.01a91882.59 91882.59 0 00-3.408-35.806c.055.563-8.163-1.497-9.238-2.171-11.58-7.256-11.816-36.723-12.931-48.978-.508-5.603 7.283-10.193 5.118-20.465-12.69-60.138 5.486-88.282 34.229-97.614 19.95-8.083 57.198-23.074 91.941-1.703l8.621 7.991 13.952 2.405c7 4.041 11.465 17.446 11.465 17.446z"></path></svg>', this.groupName = "";
  }
  renderDetail() {
    const e = [];
    return this.detail !== "" && e.push(this.detail), this.groupName !== "" && e.push(this.groupName), c`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`;
  }
};
sn.styles = [...W.styles];
Ud([
  l({ type: String, attribute: "group-name" })
], sn.prototype, "groupName", 2);
sn = Ud([
  g("uui-ref-node-member")
], sn);
var Q0 = Object.defineProperty, tm = Object.getOwnPropertyDescriptor, ou = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? tm(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Q0(t, i, r), r;
};
let Mo = class extends W {
  constructor() {
    super(...arguments), this.fallbackIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M161.08 106.29l-70.073 40.452 165.498 95.545 70.076-40.453L161.08 106.29zm259.851 41.077L255.435 51.815l-63.578 36.709 165.499 95.542 63.575-36.699zm-150.11 122.19V459.43l164.966-95.238V174.32l-164.966 95.237zM75.082 364.191l164.959 95.234V268.32L75.082 173.09v191.101z"></path></svg>', this.version = "", this.author = "";
  }
  renderDetail() {
    const e = [];
    return this.detail !== "" && e.push(this.detail), this.version !== "" && e.push(this.version), this.author !== "" && e.push(this.author), c`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`;
  }
};
Mo.styles = [...W.styles];
ou([
  l({ type: String })
], Mo.prototype, "version", 2);
ou([
  l({ type: String })
], Mo.prototype, "author", 2);
Mo = ou([
  g("uui-ref-node-package")
], Mo);
var em = Object.defineProperty, im = Object.getOwnPropertyDescriptor, zd = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? im(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && em(t, i, r), r;
};
let nn = class extends W {
  constructor() {
    super(...arguments), this.fallbackIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M331.135 98.375c3.677 14.798 4.045 16.031 3.702 31.225-.138 5.855-3.5 32.936-2.586 41.242.751 6.851 2.46 7.395 5.162 13.041 4.705 9.824 3.13 23.376 1.325 33.282-.988 5.42-3.076 13.136-6.248 17.561-3.497 4.876-10.498 4.913-13.592 10.602-4.459 8.195-1.941 19.692-4.752 28.54-3.193 10.033-11.325 10.738-11.938 23.867 3.986.562 7.962 1.134 11.938 1.703 3.99 8.484 11.297 25.552 18.759 30.688 6.25 1.705 12.505 3.411 18.752 5.113 21.907 8.982 46.251 19.732 68.204 28.987 19.991 8.434 43.927 11.439 51.151 32.396 0 14.229 1.343 47.849.976 66.497H36.514c-.367-18.648.974-52.268.974-66.497 7.226-20.957 31.16-23.963 51.151-32.396 21.953-9.255 46.297-20.005 68.201-28.987 6.25-1.702 12.506-3.408 18.754-5.113 7.461-5.136 14.77-22.203 18.76-30.688l8.877-2.158c-2.017-11.206-8.954-12.078-11.845-20.01a91882.59 91882.59 0 00-3.408-35.806c.055.563-8.163-1.497-9.238-2.171-11.58-7.256-11.816-36.723-12.931-48.978-.508-5.603 7.283-10.193 5.118-20.465-12.69-60.138 5.486-88.282 34.229-97.614 19.95-8.083 57.198-23.074 91.941-1.703l8.621 7.991 13.952 2.405c7 4.041 11.465 17.446 11.465 17.446z"></path></svg>', this.groupName = "";
  }
  renderDetail() {
    const e = [];
    return this.detail !== "" && e.push(this.detail), this.groupName !== "" && e.push(this.groupName), c`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`;
  }
};
nn.styles = [...W.styles];
zd([
  l({ type: String, attribute: "group-name" })
], nn.prototype, "groupName", 2);
nn = zd([
  g("uui-ref-node-user")
], nn);
var rm = Object.defineProperty, om = Object.getOwnPropertyDescriptor, Md = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? om(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && rm(t, i, r), r;
};
let an = class extends _ {
  constructor() {
    super(...arguments), this.enforceScroll = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.hasAttribute("tabindex") || this.setAttribute("tabindex", "0");
  }
  render() {
    return c`<slot></slot>`;
  }
};
an.styles = [
  b`
      :host {
        display: block;
        scrollbar-width: thin;
        scrollbar-color: var(--uui-color-disabled-contrast,#c4c4c4)
          var(--uui-color-surface,#fff);
        overflow-y: auto;
      }

      :host([enforce-scroll]) {
        overflow-y: scroll;
      }

      :host::-webkit-scrollbar {
        width: 6px;
        height: 6px; /* needed for horizontal scrollbar */
      }

      :host::-webkit-scrollbar-track {
        background: var(--uui-color-surface,#fff);
        border-radius: 3px;
      }
      :host::-webkit-scrollbar-thumb {
        background-color: var(--uui-color-disabled-contrast,#c4c4c4);
        border-radius: 3px;
      }
    `
];
Md([
  l({ type: Boolean, reflect: !0, attribute: "enforce-scroll" })
], an.prototype, "enforceScroll", 2);
an = Md([
  g("uui-scroll-container")
], an);
class dl extends L {
  constructor(t, i = {}) {
    super(t, {
      bubbles: !0,
      ...i
    });
  }
}
dl.CHANGE = "change";
var sm = Object.defineProperty, nm = Object.getOwnPropertyDescriptor, jt = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? nm(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && sm(t, i, r), r;
};
let wt = class extends re(_, "") {
  constructor() {
    super(), this.placeholder = "", this.disabled = !1, this.readonly = !1, this.error = !1, this.options = [], this._groups = [], this.disabledGroups = "", this._disabledGroups = [], this._values = [], this.addEventListener("mousedown", () => {
      this.style.setProperty("--uui-show-focus-outline", "0");
    }), this.addEventListener("blur", () => {
      this.style.setProperty("--uui-show-focus-outline", "");
    });
  }
  /**
   * This method enables <label for="..."> to focus the select
   */
  async focus() {
    await this.updateComplete, this._input.focus();
  }
  async blur() {
    await this.updateComplete, this._input.blur();
  }
  /**
   * This method enables <label for="..."> to open the select
   */
  async click() {
    await this.updateComplete, this._input.click();
  }
  getFormElement() {
    return this._input;
  }
  connectedCallback() {
    super.connectedCallback(), this.label || console.warn(this.tagName + " needs a `label`", this);
  }
  _createDisabledGroups() {
    this.disabledGroups.length !== 0 && (this._disabledGroups = this.disabledGroups.split(","));
  }
  _extractGroups() {
    this.options.length !== 0 && (this._groups = Array.from(
      new Set(
        this.options.filter((e) => e.group).map((e) => e.group)
      )
    ));
  }
  willUpdate(e) {
    if (e.has("options")) {
      this._extractGroups(), this._values = this.options.map((i) => i.value);
      const t = this.options.find((i) => i.selected);
      this.value = t ? t.value : "";
    }
    e.has("value") && (this.value = this._values.includes(this.value) ? this.value : ""), e.has("disabledGroups") && this._createDisabledGroups();
  }
  setValue(e) {
    e.stopPropagation();
    const t = e.target;
    e.target && (this.value = t.value), this.dispatchEvent(
      new dl(dl.CHANGE, {
        bubbles: !0,
        composed: !1
      })
    );
  }
  _renderOption(e, t, i, o) {
    return c`<option
      value="${t}"
      ?selected=${i}
      ?disabled=${o}>
      ${e}
    </option>`;
  }
  _renderGrouped() {
    return this._groups.length === 0 ? S : c`
      ${this._groups.map(
      (e) => c`<optgroup
            label=${e}
            ?disabled=${this._disabledGroups.some(
        (t) => t.toLowerCase() === e.toLowerCase()
      )}>
            ${this.options.map(
        (t) => t.group === e ? this._renderOption(
          t.name,
          t.value,
          t.selected,
          t.disabled
        ) : ""
      )}
          </optgroup>`
    )}
    `;
  }
  _getDisplayValue() {
    var e;
    return ((e = this.options.find((t) => t.value === this.value)) == null ? void 0 : e.name) || this.value;
  }
  render() {
    return this.readonly ? c`<span>${this._getDisplayValue()}</span>` : c` <select
      id="native"
      aria-label=${this.label}
      @change=${this.setValue}
      ?disabled=${this.disabled}
      .name=${this.name}
      .value=${this.value}>
      <option disabled selected value="" hidden>${this.placeholder}</option>
      ${this._renderGrouped()}
      ${this.options.filter((e) => !e.group).map(
      (e) => this._renderOption(
        e.name,
        e.value,
        e.selected,
        e.disabled
      )
    )}
    </select>`;
  }
};
wt.styles = [
  b`
      :host {
        display: inline-block;
        position: relative;
        font-family: inherit;
      }

      #native {
        display: inline-block;
        font-family: inherit;
        font-size: var(--uui-select-font-size, inherit);
        height: var(--uui-select-height, var(--uui-size-11,33px));
        padding: var(--uui-select-padding-y, var(--uui-size-1,3px))
          var(--uui-select-padding-x, var(--uui-size-2,6px));
        color: var(--uui-select-text-color, var(--uui-color-text,#060606));
        box-sizing: border-box;
        border-radius: var(--uui-border-radius,3px);
        border: 1px solid
          var(--uui-select-border-color, var(--uui-color-border,#d8d7d9));
        transition: all 150ms ease;
        width: 100%;
        background-color: var(
          --uui-select-background-color,
          var(--uui-color-surface,#fff)
        );
      }

      #native:focus {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-select-outline-color, var(--uui-color-focus,#3879ff));
      }

      #native[disabled] {
        cursor: not-allowed;
        background-color: var(
          --uui-select-disabled-background-color,
          var(--uui-color-disabled,#f3f3f5)
        );
      }

      #native:hover {
        border: 1px solid
          var(--uui-select-border-color-hover, var(--uui-color-border-emphasis,#a1a1a1));
      }

      option:checked {
        background: var(
          --uui-select-selected-option-background-color,
          var(--uui-color-selected,#3544b1)
        );
        color: var(
          --uui-select-selected-option-color,
          var(--uui-color-selected-contrast,#fff)
        );
      }

      #caret {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
      }

      :host([error]) #native {
        border: 1px solid var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }

      :host([error]) #native[disabled] {
        border: 1px solid var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
    `
];
jt([
  l({ type: String })
], wt.prototype, "label", 2);
jt([
  l()
], wt.prototype, "placeholder", 2);
jt([
  l({ type: Boolean, reflect: !0 })
], wt.prototype, "disabled", 2);
jt([
  l({ type: Boolean, reflect: !0 })
], wt.prototype, "readonly", 2);
jt([
  l({ type: Boolean, reflect: !0 })
], wt.prototype, "error", 2);
jt([
  l({ type: Array, attribute: !1 })
], wt.prototype, "options", 2);
jt([
  w()
], wt.prototype, "_groups", 2);
jt([
  l()
], wt.prototype, "disabledGroups", 2);
jt([
  w()
], wt.prototype, "_disabledGroups", 2);
jt([
  U("#native")
], wt.prototype, "_input", 2);
wt = jt([
  g("uui-select")
], wt);
const am = b`
  input[type='range'] {
    left: 0;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 2;

    height: 100%;
    -webkit-appearance: none;
    margin: 0px;
    padding: 0px;
    border: 0 none;
    background: transparent;
    color: transparent;
    overflow: visible;
    border: none;
  }
  input[type='range']:focus {
    outline: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 100%;
    -webkit-appearance: none;
    margin: 0px;
    padding: 0px;
    border: none;
    background: transparent;
    color: transparent;
    overflow: visible;
    order: none;
  }

  input[type='range']:focus::-webkit-slider-runnable-track {
    background: transparent;
    border: none;
  }

  input[type='range']::-moz-range-track {
    width: 100%;
    height: 100%;
    -moz-appearance: none;
    margin: 0px;
    padding: 0px;
    border: 0 none;
    background: transparent;
    color: transparent;
    overflow: visible;
  }

  input[type='range']::-ms-track {
    width: 100%;
    height: 100%;
    -webkit-appearance: none;
    margin: 0px;
    padding: 0px;
    border: 0 none;
    background: transparent;
    color: transparent;
    overflow: visible;
  }
  input[type='range']::-ms-fill-lower,
  input[type='range']::-ms-fill-upper {
    background: transparent;
    border: 0 none;
  }

  input[type='range']::-ms-tooltip {
    display: none;
  }

  input[type='range']::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 12px;
    border: 0 none;
    background: transparent;
    cursor: pointer;
  }

  input[type='range']::-webkit-slider-thumb {
    width: 18px;
    height: 18px;
    border-radius: 12px;
    border: 0 none;
    background: transparent;
    cursor: pointer;
    -webkit-appearance: none;
  }

  input[type='range']::-ms-thumb {
    width: 18px;
    height: 18px;
    border-radius: 12px;
    border: 0 none;
    background: transparent;
    cursor: pointer;
  }

  input[type='range']:focus::-ms-fill-lower {
    background: transparent;
  }
  input[type='range']:focus::-ms-fill-upper {
    background: transparent;
  }
`;
class Ji extends L {
  constructor(t, i = {}) {
    super(t, {
      bubbles: !0,
      ...i
    });
  }
}
Ji.INPUT = "input";
Ji.CHANGE = "change";
var lm = Object.defineProperty, um = Object.getOwnPropertyDescriptor, Td = (e) => {
  throw TypeError(e);
}, dt = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? um(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && lm(t, i, r), r;
}, su = (e, t, i) => t.has(e) || Td("Cannot " + i), $c = (e, t, i) => (su(e, t, "read from private field"), i ? i.call(e) : t.get(e)), va = (e, t, i) => t.has(e) ? Td("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), kc = (e, t, i, o) => (su(e, t, "write to private field"), t.set(e, i), i), cm = (e, t, i) => (su(e, t, "access private method"), i), Is, Us, pl, Dd;
const bo = 12, Cc = 24, hm = (e, t, i) => Array.from({ length: (t - e) / i + 1 }, (o, r) => e + r * i), dm = (e) => {
  const t = e.toString().indexOf(".");
  return t >= 0 ? e.toString().length - t - 1 : 0;
};
let tt = class extends re(_, "") {
  constructor() {
    super(), va(this, pl), va(this, Is, 0), this.hideStepValues = !1, this.hideValueLabel = !1, this.min = 0, this.max = 100, va(this, Us, 1), this.disabled = !1, this.readonly = !1, this._stepWidth = 0, this.onWindowResize = () => {
      this._stepWidth = this._calculateStepWidth();
    }, this._steps = [], this._sliderPosition = "0%", this.addEventListener("mousedown", () => {
      this.style.setProperty("--uui-show-focus-outline", "0");
    }), this.addEventListener("blur", () => {
      this.style.setProperty("--uui-show-focus-outline", "");
    }), this.addEventListener("keydown", cm(this, pl, Dd));
  }
  get step() {
    return $c(this, Us);
  }
  set step(e) {
    kc(this, Us, e), kc(this, Is, (e.toString().split(".")[1] || []).length);
  }
  get value() {
    return super.value;
  }
  set value(e) {
    if (e instanceof File)
      return;
    const t = super.value;
    let i = e ? parseFloat(e) : 0;
    i = Math.min(Math.max(i, this.min), this.max), this.step > 0 && (i = Math.round(i / this.step) * this.step), super.value = i.toFixed($c(this, Is)).toString(), this._calculateSliderPosition(), this.requestUpdate("value", t);
  }
  /**
   * This method enables <label for="..."> to focus the select
   */
  async focus() {
    await this.updateComplete, this._input.focus();
  }
  async blur() {
    await this.updateComplete, this._input.blur();
  }
  /**
   * This method enables <label for="..."> to open the select
   */
  async click() {
    await this.updateComplete, this._input.click();
  }
  getFormElement() {
    return this._input;
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("resize", this.onWindowResize), this.label || console.warn(this.tagName + " needs a `label`", this);
  }
  disconnectedCallback() {
    window.removeEventListener("resize", this.onWindowResize), super.disconnectedCallback();
  }
  firstUpdated() {
    this._calculateSliderPosition(), this._updateSteps();
  }
  updated(e) {
    super.updated(e), (e.get("max") || e.get("min") || e.get("step")) && (this.value = this.value, this._updateSteps());
  }
  _updateSteps() {
    this._steps = hm(this.min, this.max, this.step), this._stepWidth = this._calculateStepWidth();
  }
  _calculateStepWidth() {
    return (this._track.getBoundingClientRect().width - bo * 2) / (this._steps.length - 1);
  }
  _calculateSliderPosition() {
    const e = (parseFloat(super.value || "0") - this.min) / (this.max - this.min);
    this._sliderPosition = `${Math.floor(e * 1e5) / 1e3}%`;
  }
  _onInput(e) {
    e.stopPropagation(), this.value = this._input.value, this.dispatchEvent(new Ji(Ji.INPUT));
  }
  _onChange(e) {
    e.stopPropagation(), this.pristine = !1, this.dispatchEvent(new Ji(Ji.CHANGE));
  }
  renderTrackSteps() {
    return y`
  ${this._steps.map((e) => {
      if (this._stepWidth >= Cc) {
        const t = Math.round(
          bo + this._stepWidth * this._steps.indexOf(e)
        );
        return y`<circle class="track-step" cx="${t}" cy="50%" r="4.5" />`;
      }
      return y``;
    })}
`;
  }
  renderStepValues() {
    return this.hideStepValues ? S : c`<div id="step-values">
      ${this._steps.map(
      (e) => c` <span
            ><span>
              ${this._steps.length <= 20 && this._stepWidth >= Cc ? e.toFixed(dm(this.step)) : S}
            </span></span
          >`
    )}
    </div>`;
  }
  render() {
    return c`
      <input
        id="input"
        type="range"
        min="${this.min}"
        max="${this.max}"
        .value="${this.value}"
        aria-label="${this.label}"
        step="${+this.step}"
        ?disabled=${this.disabled || this.readonly}
        ?readonly=${this.readonly}
        @input=${this._onInput}
        @change=${this._onChange} />
      <div id="track" aria-hidden="true">
        <svg height="100%" width="100%">
          <rect x="9" y="9" height="3" rx="2" />
          ${this.renderTrackSteps()}
        </svg>

        <div id="track-inner" aria-hidden="true">
          <div id="thumb" style=${Pe({ left: this._sliderPosition })}>
            ${this.hideValueLabel ? null : c`<div id="thumb-label">${this.value}</div>`}
          </div>
        </div>
      </div>
      ${this.renderStepValues()}
    `;
  }
};
Is = /* @__PURE__ */ new WeakMap();
Us = /* @__PURE__ */ new WeakMap();
pl = /* @__PURE__ */ new WeakSet();
Dd = function(e) {
  e.key == "Enter" && this.submit();
};
tt.formAssociated = !0;
tt.styles = [
  Sf,
  am,
  b`
      :host {
        display: inline-block;
        width: 100%;
        position: relative;
        min-height: 30px;
        user-select: none;
      }

      input {
        box-sizing: border-box;
        height: 18px;
      }

      #track {
        position: relative;
        height: 18px;
        width: 100%;
        display: flex;
      }

      #track svg {
        height: 21px;
        border-radius: 10px;
        background-color: var(--uui-color-surface,#fff);
      }
      #track svg rect {
        width: calc(100% - 18px);
        fill: var(--uui-color-border-standalone,#c2c2c2);
      }
      input:hover ~ #track svg rect {
        fill: var(--uui-color-border-emphasis,#a1a1a1);
      }

      input:focus ~ #track #thumb {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }

      .track-step {
        fill: var(--uui-color-border,#d8d7d9);
      }

      input:hover ~ #track svg .track-step {
        fill: var(--uui-color-border-emphasis,#a1a1a1);
      }

      #track-inner {
        position: absolute;
        left: ${bo}px; /* Match TRACK_MARGIN */
        right: ${bo}px; /* Match TRACK_MARGIN */
      }

      #thumb {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 2px;
        bottom: 0;
        left: 0;
        height: 17px;
        width: 17px;
        margin-left: -8px;
        margin-right: -8px;
        border-radius: 50%;
        box-sizing: border-box;

        background-color: var(--uui-color-surface,#fff);
        border: 2px solid var(--uui-color-selected,#3544b1);
      }
      :host([disabled]) #thumb {
        background-color: var(--uui-color-disabled,#f3f3f5);
        border-color: var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ));
      }

      #thumb:after {
        content: '';
        height: 9px;
        width: 9px;
        border-radius: 50%;
        background-color: var(--uui-color-selected,#3544b1);
      }

      :host([disabled]) #thumb:after {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }

      #thumb-label {
        position: absolute;
        box-sizing: border-box;
        font-weight: 700;
        bottom: 15px;
        left: 50%;
        width: 40px;
        margin-left: -20px;
        text-align: center;
        opacity: 0;
        transition: 120ms opacity;
        color: var(--uui-color-selected,#3544b1);
      }

      input:focus ~ #track #thumb-label,
      input:hover ~ #track #thumb-label {
        opacity: 1;
      }

      #step-values {
        margin: 0 ${bo}px; /* Match TRACK_MARGIN */
        margin-top: 6px;
        display: flex;
        align-items: flex-end;
        box-sizing: border-box;
      }

      #step-values > span {
        flex-basis: 0;
        flex-grow: 1;
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      #step-values > span > span {
        transform: translateX(-50%);
        display: inline-block;
        text-align: center;
        font-size: var(--uui-type-small-size,12px);
      }

      #step-values > span:last-child {
        width: 0;
        flex-grow: 0;
      }

      :host(:not([pristine]):invalid) #thumb {
        border-color: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
      :host(:not([pristine]):invalid) #thumb:after {
        background-color: var(--uui-color-invalid,#d42054);
      }

      // readonly
      :host([readonly]) #thumb {
        background-color: var(--uui-color-disabled,#f3f3f5);
        border-color: var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ));
      }

      :host([readonly]) #thumb-label {
        opacity: 1;
      }
    `
];
dt([
  l({ type: Boolean, attribute: "hide-step-values" })
], tt.prototype, "hideStepValues", 2);
dt([
  l({ type: Boolean, attribute: "hide-value-label" })
], tt.prototype, "hideValueLabel", 2);
dt([
  l({ type: Number })
], tt.prototype, "min", 2);
dt([
  l({ type: Number })
], tt.prototype, "max", 2);
dt([
  l({ type: Number })
], tt.prototype, "step", 1);
dt([
  l({ type: String })
], tt.prototype, "value", 1);
dt([
  l({ type: Boolean, reflect: !0 })
], tt.prototype, "disabled", 2);
dt([
  l({ type: Boolean, reflect: !0 })
], tt.prototype, "readonly", 2);
dt([
  l({ type: String })
], tt.prototype, "label", 2);
dt([
  U("#input")
], tt.prototype, "_input", 2);
dt([
  U("#track")
], tt.prototype, "_track", 2);
dt([
  w()
], tt.prototype, "_stepWidth", 2);
dt([
  w()
], tt.prototype, "_steps", 2);
dt([
  w()
], tt.prototype, "_sliderPosition", 2);
tt = dt([
  g("uui-slider")
], tt);
var pm = Object.defineProperty, fm = Object.getOwnPropertyDescriptor, Ld = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? fm(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && pm(t, i, r), r;
};
let ln = class extends _ {
  constructor() {
    super(...arguments), this.open = !1;
  }
  render() {
    return c`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="m4 9 8 8 8-8"></path>
    </svg>`;
  }
};
ln.styles = [
  b`
      :host {
        display: inline-flex;
        width: 12px;
        vertical-align: middle;
      }

      svg {
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
        transition: transform 100ms cubic-bezier(0.1, 0, 0.9, 1);
        width: 100%;
        height: 100%;
      }

      :host([open]) svg {
        transform: rotate(0deg);
      }
    `
];
Ld([
  l({ type: Boolean, reflect: !0 })
], ln.prototype, "open", 2);
ln = Ld([
  g("uui-symbol-expand")
], ln);
var vm = Object.defineProperty, bm = Object.getOwnPropertyDescriptor, nu = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? bm(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && vm(t, i, r), r;
};
let To = class extends _ {
  constructor() {
    super(...arguments), this.src = "", this.alt = "";
  }
  connectedCallback() {
    super.connectedCallback(), C(this, "uui-icon");
  }
  render() {
    return this.src ? c`<img src=${this.src} alt=${this.alt} />` : c`<uui-icon
          name="picture"
          .fallback=${Hf.strings[0]}></uui-icon>`;
  }
};
To.styles = [
  b`
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }

      img {
        object-fit: contain;
        height: 100%;
        width: 100%;
      }

      uui-icon {
        width: 100%;
        height: 100%;
        max-width: 100%;
        display: flex;
        max-height: 100%;
        justify-content: center;
        color: var(--uui-color-surface,#fff);
        background: var(--uui-color-surface-alt,#f3f3f5);
      }
    `
];
nu([
  l({ type: String })
], To.prototype, "src", 2);
nu([
  l({ type: String })
], To.prototype, "alt", 2);
To = nu([
  g("uui-symbol-file-thumbnail")
], To);
var gm = Object.defineProperty, mm = Object.getOwnPropertyDescriptor, Nd = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? mm(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && gm(t, i, r), r;
};
let un = class extends _ {
  constructor() {
    super(...arguments), this.type = "";
  }
  render() {
    return c`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="0.6"
        stroke-linecap="round"
        stroke-linejoin="round"
        id="icon">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      </svg>

      ${this.type ? c`<small id="file-type" class="uui-small"
            >${this.type.toUpperCase()}</small
          >` : ""}
    `;
  }
};
un.styles = [
  Or,
  b`
      :host {
        position: relative;
        display: block;
        box-sizing: border-box;
      }

      #file-type {
        position: absolute;
        bottom: 20%;
        left: 12%;
        margin-left: calc(var(--uui-size-3,9px) * -1);
        padding: 0px var(--uui-size-3,9px);
        font-weight: 700;
        background-color: var(--uui-color-surface-alt,#f3f3f5);
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-radius: var(--uui-border-radius,3px);
      }

      #icon {
        width: 100%;
        color: var(--uui-color-border-standalone,#c2c2c2);
      }
    `
];
Nd([
  l({ type: String })
], un.prototype, "type", 2);
un = Nd([
  g("uui-symbol-file")
], un);
var _m = Object.getOwnPropertyDescriptor, ym = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? _m(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = n(r) || r);
  return r;
};
let fl = class extends _ {
  render() {
    return c`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="0.6"
      stroke-linecap="round"
      stroke-linejoin="round"
      id="icon">
      <path
        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>`;
  }
};
fl.styles = [
  b`
      :host {
        display: block;
        position: relative;
        box-sizing: border-box;
      }

      #icon {
        width: 100%;
        color: var(--uui-color-border-standalone,#c2c2c2);
      }
    `
];
fl = ym([
  g("uui-symbol-folder")
], fl);
var wm = Object.defineProperty, xm = Object.getOwnPropertyDescriptor, Hd = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? xm(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && wm(t, i, r), r;
};
let cn = class extends _ {
  constructor() {
    super(...arguments), this.open = !1;
  }
  render() {
    return y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      ${this.open === !0 ? y`<path d="M457.915 242.222H269.053l-.004-78.416c0-33.277-12.63-63.824-33.538-86.175-20.82-22.357-50.579-36.756-83.391-36.731-32.814-.024-62.57 14.375-83.391 36.731-20.915 22.351-33.541 52.897-33.547 86.175v103.859H96.19v-13.476l-35.656-35.656H96.19v-54.728c0-17.765 6.717-33.406 17.084-44.502 10.463-11.09 23.927-17.37 38.845-17.394 14.916.024 28.375 6.304 38.837 17.394 10.375 11.096 17.092 26.738 17.087 44.502v78.416h-26.189c-9.159 0-16.582 7.426-16.582 16.585v194.53c0 9.158 7.423 16.583 16.582 16.583h276.06c9.164 0 16.587-7.425 16.587-16.583v-194.53c.001-9.159-7.422-16.584-16.586-16.584z"></path>` : y`<path d="M404.84 246.573h-22.084l-.002-73.603c0-36.675-13.921-70.311-36.917-94.892-22.91-24.584-55.547-40.367-91.539-40.336-36.003-.031-68.643 15.752-91.55 40.336-23.001 24.582-36.918 58.217-36.925 94.892v73.603h-22.082c-9.16 0-16.585 7.421-16.585 16.583v194.531c0 9.158 7.425 16.585 16.585 16.585H404.84c9.162 0 16.586-7.427 16.586-16.585V263.156c0-9.161-7.424-16.583-16.586-16.583zm-218.013-73.602c0-21.167 8.012-39.893 20.468-53.219 12.552-13.316 28.896-20.982 47.003-21.007 18.095.025 34.438 7.685 46.987 21.007 12.455 13.326 20.467 32.052 20.467 53.219v73.603H186.827v-73.603z"></path>`}
    </svg>`;
  }
};
cn.styles = [
  b`
      :host {
        display: inline-block;
        vertical-align: middle;
        width: 1em;
      }

      svg {
        fill: currentColor;
      }
    `
];
Hd([
  l({ type: Boolean, reflect: !0 })
], cn.prototype, "open", 2);
cn = Hd([
  g("uui-symbol-lock")
], cn);
var $m = Object.getOwnPropertyDescriptor, km = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? $m(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = n(r) || r);
  return r;
};
let vl = class extends _ {
  render() {
    return y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle cx="17" cy="50" r="9"></circle>
      <circle cx="50" cy="50" r="9"></circle>
      <circle cx="83" cy="50" r="9"></circle>
    </svg>`;
  }
};
vl.styles = [
  b`
      :host {
        display: inline-block;
        vertical-align: bottom;
        width: 1.15em;
        height: 1.15em;
      }

      svg {
        fill: currentColor;
      }
    `
];
vl = km([
  g("uui-symbol-more")
], vl);
var Cm = Object.defineProperty, Em = Object.getOwnPropertyDescriptor, Bd = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Em(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Cm(t, i, r), r;
};
let hn = class extends Ko(_) {
  constructor() {
    super(...arguments), this.descending = !1;
  }
  render() {
    return c` <svg
        id="up"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path d="m4 9 8 8 8-8"></path>
      </svg>
      <svg
        id="down"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path d="m4 9 8 8 8-8"></path>
      </svg>`;
  }
};
hn.styles = [
  b`
      :host {
        position: relative;
        display: inline-block;
        width: 0.9em;
        height: 1em;
        //vertical-align: middle;
        pointer-events: none;
      }

      svg {
        position: absolute;
        left: 0;
        top: 50%;
        width: 0.9em;
        transform-origin: 50% 50%;
        transition:
          transform 120ms ease-in-out,
          opacity 120ms,
          margin-top 240ms;
        opacity: 0;
        margin-top: -8em;
      }

      #up {
        transform: rotate(180deg);
        margin-top: -1.05em;
      }
      #down {
        margin-top: -0.55em;
      }
      :host([active]) #up {
        margin-top: calc(-0.8em - (0.25em * var(--uui-symbol-sort-hover, 0)));
      }
      :host([active]) #down {
        margin-top: calc(-0.8em + (0.25em * var(--uui-symbol-sort-hover, 0)));
      }

      :host(:hover) {
        --uui-symbol-sort-hover: 1;
      }
      :host(:not([active])) #up,
      :host(:not([active])) #down {
        opacity: calc(0.25 * var(--uui-symbol-sort-hover, 0));
      }

      :host([active]:not([descending])) #down {
        opacity: 1;
      }
      :host([active]:not([descending])) #up {
        opacity: calc(0.25 * var(--uui-symbol-sort-hover, 0));
      }

      :host([active][descending]) #up {
        opacity: 1;
      }
      :host([active][descending]) #down {
        opacity: calc(0.25 * var(--uui-symbol-sort-hover, 0));
      }
    `
];
Bd([
  l({ type: Boolean, reflect: !0 })
], hn.prototype, "descending", 2);
hn = Bd([
  g("uui-symbol-sort")
], hn);
var Pm = Object.getOwnPropertyDescriptor, Sm = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Pm(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = n(r) || r);
  return r;
};
let bl = class extends _ {
  /* consider select-only attribute on this level? */
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "table");
  }
  render() {
    return c`<slot></slot>`;
  }
};
bl.styles = [
  b`
      :host {
        display: table;
        width: 100%;
        border-radius: var(--uui-border-radius,3px);
        background-color: var(--uui-color-surface,#fff);
        cursor: default;
      }
    `
];
bl = Sm([
  g("uui-table")
], bl);
var Am = Object.defineProperty, Om = Object.getOwnPropertyDescriptor, Vn = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Om(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Am(t, i, r), r;
};
let Je = class extends _ {
  constructor() {
    super(...arguments), this.disableChildInteraction = !1, this.noPadding = !1, this.clipText = !1, this._observer = new ResizeObserver(() => {
      this._detectOverflow();
    });
  }
  _detectOverflow() {
    this.scrollWidth > this.clientWidth ? this.setAttribute("title", this.innerText) : this.removeAttribute("title");
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "cell");
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._observer.disconnect();
  }
  updated(e) {
    super.updated(e), e.has("clipText") && (this.clipText ? (this._detectOverflow(), this._observer.observe(this)) : this._observer.disconnect());
  }
  render() {
    return c` <slot @slotchange=${this._detectOverflow}></slot>`;
  }
};
Je.styles = [
  b`
      :host {
        position: relative;
        display: table-cell;
        height: var(--uui-table-cell-height, var(--uui-size-12,36px));
        padding: var(
          --uui-table-cell-padding,
          var(--uui-size-3,9px) var(--uui-size-5,15px)
        );
        border-top: 1px solid var(--uui-color-border,#d8d7d9);
        vertical-align: middle;
      }

      :host([clip-text]) {
        max-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        box-sizing: border-box;
      }

      :host([disable-child-interaction]) ::slotted(*) {
        pointer-events: none;
      }

      :host([disable-child-interaction])::after {
        content: '';
        position: absolute;
        inset: 0;
      }

      :host([no-padding]) {
        padding: 0;
      }
    `
];
Vn([
  l({
    type: Boolean,
    reflect: !0,
    attribute: "disable-child-interaction"
  })
], Je.prototype, "disableChildInteraction", 2);
Vn([
  l({ type: Boolean, reflect: !0, attribute: "no-padding" })
], Je.prototype, "noPadding", 2);
Vn([
  l({ type: Boolean, reflect: !0, attribute: "clip-text" })
], Je.prototype, "clipText", 2);
Je = Vn([
  g("uui-table-cell")
], Je);
var Im = Object.getOwnPropertyDescriptor, Um = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Im(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = n(r) || r);
  return r;
};
let gl = class extends _ {
};
gl.styles = [
  b`
      :host {
        display: table-column;
      }
    `
];
gl = Um([
  g("uui-table-column")
], gl);
var zm = Object.getOwnPropertyDescriptor, Mm = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? zm(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = n(r) || r);
  return r;
};
let ml = class extends Je {
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "columnheader");
  }
};
ml.styles = [
  ...Je.styles,
  b`
      :host {
        border-top: none;
      }
    `
];
ml = Mm([
  g("uui-table-head-cell")
], ml);
var Tm = Object.getOwnPropertyDescriptor, Dm = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Tm(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = n(r) || r);
  return r;
};
let _l = class extends _ {
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "row");
  }
  render() {
    return c`<slot></slot>`;
  }
};
_l.styles = [
  b`
      :host {
        display: table-header-group;
        font-weight: bold;
      }
    `
];
_l = Dm([
  g("uui-table-head")
], _l);
var Lm = Object.defineProperty, Nm = Object.getOwnPropertyDescriptor, Vd = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Nm(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Lm(t, i, r), r;
};
let dn = class extends An(
  Ur(_)
) {
  constructor() {
    super();
    let e = !1;
    this.addEventListener("blur", () => {
      e === !1 && this.style.setProperty("--uui-show-focus-outline", "1"), e = !1;
    }), this.addEventListener("mousedown", () => {
      this.style.setProperty("--uui-show-focus-outline", "0"), e = !0;
    }), this.addEventListener("mouseup", () => {
      e = !1;
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "row");
  }
  updated(e) {
    e.has("selectOnly") && this.updateChildSelectOnly();
  }
  updateChildSelectOnly() {
    this.slotCellNodes && this.slotCellNodes.forEach((e) => {
      e.disableChildInteraction !== void 0 && (e.disableChildInteraction = this.selectOnly);
    });
  }
  render() {
    return c` <slot @slotchanged=${this.updateChildSelectOnly}></slot> `;
  }
};
dn.styles = [
  b`
      :host {
        display: table-row;
        position: relative;
        outline-offset: -3px;
      }

      :host([selectable]) {
        cursor: pointer;
      }

      :host(:focus) {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }
      :host([selected]) {
        outline: 2px solid
          var(--uui-table-row-color-selected, var(--uui-color-selected,#3544b1));
      }
      :host([selected]:focus) {
        outline-color: var(--uui-color-focus,#3879ff);
      }
    `
];
Vd([
  ri({
    flatten: !0,
    selector: "uui-table-cell, [uui-table-cell], [role=cell]"
  })
], dn.prototype, "slotCellNodes", 2);
dn = Vd([
  g("uui-table-row")
], dn);
var Hm = Object.defineProperty, Bm = Object.getOwnPropertyDescriptor, Rr = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Bm(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Hm(t, i, r), r;
};
let Qe = class extends Ko(ie("", _)) {
  constructor() {
    super(), this.disabled = !1, this.orientation = "horizontal", this.addEventListener("click", this.onHostClick);
  }
  onHostClick(e) {
    this.disabled && (e.preventDefault(), e.stopImmediatePropagation());
  }
  render() {
    return this.href ? c`
          <a
            id="button"
            href=${k(this.disabled ? void 0 : this.href)}
            target=${k(this.target || void 0)}
            rel=${k(
      this.rel || k(
        this.target === "_blank" ? "noopener noreferrer" : void 0
      )
    )}
            role="tab">
            <slot name="icon"></slot>
            ${this.renderLabel()}
            <slot name="extra"></slot>
          </a>
        ` : c`
          <button
            type="button"
            id="button"
            ?disabled=${this.disabled}
            role="tab">
            <slot name="icon"></slot>
            ${this.renderLabel()}
            <slot name="extra"></slot>
          </button>
        `;
  }
};
Qe.styles = [
  b`
      :host {
        color: var(--uui-tab-text, var(--uui-color-interactive,#1b264f));
        font-family: inherit;
        width: fit-content;
      }

      #button {
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        min-height: var(--uui-size-12,36px);
        min-width: 70px;
        padding: var(--uui-size-3,9px)
          var(--uui-tab-padding-horizontal, var(--uui-size-5,15px));
        border: none;
        font-size: inherit;
        background: none;
        color: inherit;
        cursor: pointer;
        font-family: inherit;

        /* for anchor tag: */
        text-decoration: none;
        line-height: normal;
      }

      :host([orientation='vertical']) #button {
        min-height: var(--uui-size-14,42px);
        padding: var(--uui-size-2,6px)
          var(--uui-tab-padding-horizontal, var(--uui-size-5,15px));
      }

      :host(:not([disabled])) #button:hover {
        color: var(--uui-tab-text-hover, var(--uui-color-default-emphasis,#3544b1));
      }

      :host(:not([disabled])) #button:active {
        box-shadow:
          inset 0 2px 4px rgba(0, 0, 0, 0.15),
          0 1px 2px rgba(0, 0, 0, 0.05);
      }

      :host([active]) {
        color: var(--uui-tab-text-active, unset);
      }

      :host([disabled]) #button {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
        cursor: default;
      }

      #button::before {
        content: '';
        position: absolute;
        background-color: var(--uui-color-current,#f5c1bc);
        opacity: 0;
      }
      :host([active]) #button::before {
        opacity: 1;
      }

      /* HORIZONTAL */
      :host([orientation='horizontal']) #button::before {
        left: auto;
        right: auto;
        border-radius: var(--uui-border-radius,3px) var(--uui-border-radius,3px) 0 0;
        height: 0px;
        width: calc(100% - 14px);
        bottom: 0;
        transition:
          opacity linear 120ms,
          height ease-in-out 120ms;
      }
      :host([active][orientation='horizontal']) #button::before {
        height: 4px;
      }

      /* VERTICAL */
      :host([orientation='vertical']) #button::before {
        top: auto;
        bottom: auto;
        border-radius: 0 var(--uui-border-radius,3px) var(--uui-border-radius,3px) 0;
        height: calc(100% - 12px);
        width: 0px;
        left: 0;
        transition:
          opacity linear 120ms,
          width ease-in-out 120ms;
      }
      :host([active][orientation='vertical']) #button::before {
        width: 4px;
      }

      #button:hover::before {
        background-color: var(--uui-color-current-emphasis,rgb(
    248,
    214,
    211
  ));
      }
      :host([disabled]) #button::before {
        background-color: var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ));
      }

      slot[name='icon']::slotted(*) {
        font-size: 20px;
        margin-bottom: var(--uui-size-2,6px);
      }

      slot.label {
        /* TODO: Find a better selector */
        text-align: center;
        display: flex;
        width: 100%;
        flex-direction: column;
      }

      :host([orientation='vertical']) slot.label {
        text-align: left;
      }
    `
];
Rr([
  l({ type: Boolean, reflect: !0 })
], Qe.prototype, "disabled", 2);
Rr([
  l({ type: String })
], Qe.prototype, "href", 2);
Rr([
  l({ type: String })
], Qe.prototype, "target", 2);
Rr([
  l({ type: String })
], Qe.prototype, "rel", 2);
Rr([
  l({ type: String, reflect: !0 })
], Qe.prototype, "orientation", 2);
Qe = Rr([
  g("uui-tab")
], Qe);
var Vm = Object.defineProperty, jm = Object.getOwnPropertyDescriptor, jd = (e) => {
  throw TypeError(e);
}, Fr = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? jm(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Vm(t, i, r), r;
}, au = (e, t, i) => t.has(e) || jd("Cannot " + i), I = (e, t, i) => (au(e, t, "read from private field"), i ? i.call(e) : t.get(e)), Ft = (e, t, i) => t.has(e) ? jd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), go = (e, t, i, o) => (au(e, t, "write to private field"), t.set(e, i), i), _t = (e, t, i) => (au(e, t, "access private method"), i), jn, te, ke, or, Cr, pn, Do, mo, ut, Rd, Fd, lu, Wd, Er, Rn, Gd, uu, yl;
let ti = class extends _ {
  constructor() {
    super(...arguments), Ft(this, ut), Ft(this, jn, 0), this.dropdownContentDirection = "vertical", Ft(this, te, []), Ft(this, ke, []), Ft(this, or, /* @__PURE__ */ new Map()), Ft(this, Cr, []), Ft(this, pn, new ResizeObserver(_t(this, ut, Fd).bind(this))), Ft(this, Do, []), Ft(this, mo, !1), Ft(this, Er, (e) => {
      const t = e.currentTarget;
      if (_t(this, ut, yl).call(this, t)) {
        t.active = !0;
        const i = I(this, or).get(t);
        i && (i.active = !0), [
          ...I(this, te),
          ...I(this, ke)
        ].filter((s) => s !== t && s !== i).forEach((s) => {
          _t(this, ut, yl).call(this, s) && (s.active = !1);
        }), I(this, ke).some(
          (s) => s.active && s !== i
        ) ? this._moreButtonElement.classList.add("active-inside") : this._moreButtonElement.classList.remove("active-inside");
      }
    });
  }
  connectedCallback() {
    super.connectedCallback(), _t(this, ut, Rd).call(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), I(this, pn).unobserve(this), _t(this, ut, lu).call(this);
  }
  render() {
    return c`
      <div id="main">
        <div id="grid" role="tablist">
          <slot @slotchange=${_t(this, ut, Wd)}></slot>
        </div>
        <uui-button
          popovertarget="popover-container"
          style="display: none"
          id="more-button"
          label="More"
          compact>
          <uui-symbol-more></uui-symbol-more>
        </uui-button>
      </div>
      <uui-popover-container
        id="popover-container"
        popover
        placement="bottom-end">
        <div id="hidden-tabs-container" role="tablist">
          ${Kl(I(this, ke), (e) => c`${e}`)}
        </div>
      </uui-popover-container>
    `;
  }
};
jn = /* @__PURE__ */ new WeakMap();
te = /* @__PURE__ */ new WeakMap();
ke = /* @__PURE__ */ new WeakMap();
or = /* @__PURE__ */ new WeakMap();
Cr = /* @__PURE__ */ new WeakMap();
pn = /* @__PURE__ */ new WeakMap();
Do = /* @__PURE__ */ new WeakMap();
mo = /* @__PURE__ */ new WeakMap();
ut = /* @__PURE__ */ new WeakSet();
Rd = async function() {
  C(this, "uui-button"), C(this, "uui-popover-container"), C(this, "uui-symbol-more"), await this.updateComplete, I(this, pn).observe(this._mainElement);
};
Fd = function(e) {
  const t = Number.parseFloat(
    this.style.getPropertyValue("--uui-tab-group-gap")
  );
  (Number.isNaN(t) ? 0 : t) !== I(this, jn) ? _t(this, ut, Rn).call(this) : _t(this, ut, uu).call(this, e[0].contentBoxSize[0].inlineSize);
};
lu = function() {
  I(this, te).forEach((e) => {
    e.removeEventListener("click", I(this, Er)), I(this, Do).forEach((t) => t.disconnect());
  }), I(this, Do).length = 0, I(this, Cr).length = 0;
};
Wd = function() {
  _t(this, ut, lu).call(this), _t(this, ut, Gd).call(this), I(this, te).forEach((e) => {
    e.addEventListener("click", I(this, Er));
    const t = new ResizeObserver(
      _t(this, ut, Rn).bind(this)
    );
    t.observe(e), I(this, Do).push(t);
  });
};
Er = /* @__PURE__ */ new WeakMap();
Rn = async function() {
  if (I(this, mo)) return;
  go(this, mo, !0), requestAnimationFrame(() => {
    go(this, mo, !1);
  }), await this.updateComplete;
  const e = Number.parseFloat(
    this.style.getPropertyValue("--uui-tab-group-gap")
  ), t = Number.isNaN(e) ? 0 : e;
  go(this, jn, t);
  let i = 0;
  for (let r = 0; r < I(this, te).length; r++)
    I(this, te)[r].style.display = "", i += I(this, te)[r].offsetWidth, I(this, Cr)[r] = i, i += t;
  const o = 2;
  this._mainElement.style.width = i - t + o + "px", _t(this, ut, uu).call(this, this._mainElement.offsetWidth);
};
Gd = function() {
  go(this, te, this._slottedNodes ? this._slottedNodes : []), _t(this, ut, Rn).call(this);
};
uu = function(e) {
  const t = this._moreButtonElement.offsetWidth, i = e - (t || 0);
  I(this, ke).forEach((s) => {
    s.removeEventListener("click", I(this, Er));
  }), go(this, ke, []), I(this, or).clear();
  let o = !1;
  const r = I(this, Cr).length;
  for (let s = 0; s < r; s++) {
    const n = I(this, Cr)[s], a = I(this, te)[s];
    if (n <= (s === r - 1 ? e : i))
      a.style.display = "";
    else {
      const u = a.cloneNode(!0);
      u.addEventListener("click", I(this, Er)), u.classList.add("hidden-tab"), u.style.display = "", u.orientation = this.dropdownContentDirection, I(this, or).set(u, a), I(this, or).set(a, u), I(this, ke).push(u), a.style.display = "none", a.active && (o = !0);
    }
  }
  I(this, ke).length === 0 ? (this._moreButtonElement.style.display = "none", this._popoverContainerElement.hidePopover()) : this._moreButtonElement.style.display = "", o ? this._moreButtonElement.classList.add("active-inside") : this._moreButtonElement.classList.remove("active-inside"), this.requestUpdate();
};
yl = function(e) {
  return typeof e == "object" && "active" in e && typeof e.active == "boolean";
};
ti.styles = [
  b`
      :host {
        min-width: 0;
        display: flex;
        height: 100%;
      }

      #main {
        display: flex;
        justify-content: space-between;
        overflow: hidden;
      }

      #grid {
        width: 1fr;
        display: flex;
        height: 100%;
        min-height: 48px;
        overflow: hidden;
        text-wrap: nowrap;
        color: var(--uui-tab-text);
        gap: var(--uui-tab-group-gap, 0);
      }

      #popover-container {
        --uui-tab-text: var(--uui-tab-group-dropdown-tab-text, unset);
        --uui-tab-text-hover: var(
          --uui-tab-group-dropdown-tab-text-hover,
          unset
        );
        --uui-tab-text-active: var(
          --uui-tab-group-dropdown-tab-text-active,
          unset
        );
      }

      ::slotted(*:not(:last-of-type)) {
        border-right: 1px solid var(--uui-tab-divider, none);
      }

      .hidden-tab {
        width: 100%;
      }

      #hidden-tabs-container {
        width: fit-content;
        display: flex;
        flex-direction: column;
        background-color: var(
          --uui-tab-group-dropdown-background,
          var(--uui-color-surface,#fff)
        );
        border-radius: var(--uui-border-radius,3px);
        box-shadow: var(--uui-shadow-depth-3,0 10px 20px rgba(0,0,0,0.19) , 0 6px 6px rgba(0,0,0,0.23));
        overflow: hidden;
      }
      :host([dropdown-direction='horizontal']) #hidden-tabs-container {
        flex-direction: row;
      }

      #more-button {
        position: relative;

        --uui-button-contrast: var(--uui-tab-text);
        --uui-button-contrast-hover: var(--uui-tab-text-hover);
        --uui-button-background-color: transparent;
        --uui-button-background-color-hover: transparent;
      }
      #more-button::before {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        background-color: var(--uui-color-current,#f5c1bc);
        height: 0px;
        border-radius: 3px 3px 0 0;
        opacity: 0;
        transition:
          opacity ease-in 120ms,
          height ease-in 120ms;
      }
      #more-button.active-inside::before {
        opacity: 1;
        height: 4px;
        transition:
          opacity 120ms,
          height ease-out 120ms;
      }
    `
];
Fr([
  U("#more-button")
], ti.prototype, "_moreButtonElement", 2);
Fr([
  U("#popover-container")
], ti.prototype, "_popoverContainerElement", 2);
Fr([
  U("#main")
], ti.prototype, "_mainElement", 2);
Fr([
  ri({
    flatten: !0,
    selector: "uui-tab, [uui-tab], [role=tab]"
  })
], ti.prototype, "_slottedNodes", 2);
Fr([
  l({
    type: String,
    reflect: !0,
    attribute: "dropdown-content-direction"
  })
], ti.prototype, "dropdownContentDirection", 2);
ti = Fr([
  g("uui-tab-group")
], ti);
var Rm = Object.defineProperty, Fm = Object.getOwnPropertyDescriptor, cu = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Fm(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Rm(t, i, r), r;
};
let Lo = class extends _ {
  constructor() {
    super(...arguments), this.color = "default", this.look = "primary";
  }
  render() {
    return c`<slot></slot>`;
  }
};
Lo.styles = [
  b`
      :host {
        display: inline-block;
        font-size: var(--uui-tag-font-size, var(--uui-type-small-size,12px));
        font-weight: 700;
        line-height: 1;
        padding: var(
          --uui-tag-padding,
          var(--uui-size-space-1,3px) calc(var(--uui-size-space-1,3px) + 0.5em)
        );
        border-radius: 100px;
        user-select: none;
        border-radius: var(--uui-tag-border-radius, var(--uui-size-4,12px));
        border: 1px solid var(--uui-tag-border-color, transparent);
      }

      slot {
        display: block;
        align-content: center;
        margin: 2px;
      }

      :host {
        --color: var(--uui-color-default,#1b264f);
        --color-standalone: var(--uui-color-default-standalone,rgb(
    28,
    35,
    59
  ));
        --color-contrast: var(--uui-color-default-contrast,#fff);
      }
      :host([color='positive']) {
        --color: var(--uui-color-positive,#0b8152);
        --color-standalone: var(--uui-color-positive-standalone,rgb(
    10,
    115,
    73
  ));
        --color-contrast: var(--uui-color-positive-contrast,#fff);
      }
      :host([color='warning']) {
        --color: var(--uui-color-warning,#fbd142);
        --color-standalone: var(--uui-color-warning-standalone,#a17700);
        --color-contrast: var(--uui-color-warning-contrast,#000);
      }
      :host([color='danger']) {
        --color: var(--uui-color-danger,#d42054);
        --color-standalone: var(--uui-color-danger-standalone,rgb(
    191,
    33,
    78
  ));
        --color-contrast: var(--uui-color-danger-contrast,white);
      }
      :host([color='invalid']) {
        --color: var(--uui-color-invalid,#d42054);
        --color-standalone: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
        --color-contrast: var(--uui-color-invalid-contrast,white);
      }

      :host {
        background-color: var(--uui-color-surface,#fff);
        color: var(--color-standalone);
        border-color: transparent;
      }
      :host([look='primary']) {
        background-color: var(--color);
        color: var(--color-contrast);
        border-color: transparent;
      }
      :host([look='secondary']) {
        background-color: var(--uui-color-surface-alt,#f3f3f5);
        color: var(--color-standalone);
        border-color: transparent;
      }
      :host([look='outline']) {
        background-color: transparent;
        color: var(--color-standalone);
        border-color: var(--color-standalone);
      }
      :host([look='placeholder']) {
        border-style: dashed;
        background-color: transparent;
        color: var(--color-standalone);
        border-color: var(--uui-color-border-standalone,#c2c2c2);
      }
    `
];
cu([
  l({ reflect: !0 })
], Lo.prototype, "color", 2);
cu([
  l({ reflect: !0 })
], Lo.prototype, "look", 2);
Lo = cu([
  g("uui-tag")
], Lo);
class fn extends L {
  constructor(t, i = {}) {
    super(t, {
      bubbles: !0,
      ...i
    });
  }
}
fn.CHANGE = "change";
fn.INPUT = "input";
var Wm = Object.defineProperty, Gm = Object.getOwnPropertyDescriptor, lt = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Gm(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Wm(t, i, r), r;
};
let K = class extends re(_, "") {
  constructor() {
    super(), this.placeholder = "", this.disabled = !1, this.readonly = !1, this.name = "", this.error = !1, this.minlengthMessage = (e) => `${e} characters left`, this.maxlengthMessage = (e, t) => `Maximum ${e} characters, ${t} too many.`, this.autoHeight = !1, this.addEventListener("mousedown", () => {
      this.style.setProperty("--uui-show-focus-outline", "0");
    }), this.addEventListener("blur", () => {
      this.style.setProperty("--uui-show-focus-outline", "");
    }), this.addValidator(
      "tooShort",
      () => {
        const e = this.minlengthMessage;
        return typeof e == "function" ? e(
          this.minlength ? this.minlength - String(this.value).length : 0
        ) : e;
      },
      () => !!this.minlength && this.value.length < this.minlength
    ), this.addValidator(
      "tooLong",
      () => {
        const e = this.maxlengthMessage;
        return typeof e == "function" ? e(this.maxlength ?? 0, String(this.value).length) : e;
      },
      () => !!this.maxlength && this.value.length > this.maxlength
    );
  }
  connectedCallback() {
    super.connectedCallback(), this.label || console.warn(this.tagName + " needs a `label`", this), this.autoHeight && requestAnimationFrame(() => {
      this.autoUpdateHeight();
    });
  }
  /**
   * This method enables <label for="..."> to focus the select
   */
  async focus() {
    await this.updateComplete, this._textarea.focus();
  }
  async blur() {
    await this.updateComplete, this._textarea.blur();
  }
  /**
   * This method enables <label for="..."> to open the select
   */
  async click() {
    await this.updateComplete, this._textarea.click();
  }
  getFormElement() {
    return this._textarea;
  }
  onInput(e) {
    this.value = e.target.value, this.autoHeight && this.autoUpdateHeight();
  }
  onChange(e) {
    e.stopPropagation(), this.pristine = !1, this.dispatchEvent(new fn(fn.CHANGE));
  }
  autoUpdateHeight() {
    const e = this.shadowRoot.host, t = this._textarea, i = e.scrollTop, o = getComputedStyle(e).height;
    e.style.display = "block", e.style.height = o, t.style.height = "auto", t.scrollHeight + 2 > t.clientHeight ? t.style.height = t.scrollHeight + 2 + "px" : t.scrollHeight + 2 < t.clientHeight && t.style.removeProperty("height"), e.style.removeProperty("display"), e.style.removeProperty("height"), e.scrollTop = i;
  }
  render() {
    return c`
      <textarea
        id="textarea"
        rows=${k(this.rows)}
        cols=${k(this.cols)}
        .value=${this.value}
        .name=${this.name}
        wrap=${k(this.wrap)}
        placeholder=${this.placeholder}
        aria-label=${this.label}
        .disabled=${this.disabled}
        ?readonly=${this.readonly}
        @input=${this.onInput}
        @change=${this.onChange}>
      </textarea>
    `;
  }
};
K.formAssociated = !0;
K.styles = [
  b`
      :host {
        position: relative;
      }
      :host([error]) textarea,
      :host([error]) textarea[disabled] {
        border: 1px solid var(--uui-color-invalid,#d42054) !important;
      }
      :host(:not([pristine]):invalid) textarea,
      /* polyfill support */
      :host(:not([pristine])[internals-invalid]) textarea {
        border-color: var(--uui-color-invalid,#d42054);
      }
      :host([auto-height]) textarea {
        resize: none;
      }

      .label {
        display: inline-block;
        margin-bottom: var(--uui-size-1,3px);
        font-weight: bold;
      }

      textarea[readonly] {
        border-color: var(
          --uui-textarea-border-color-readonly,
          var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ))
        );
        background-color: var(
          --uui-textarea-background-color-readonly,
          var(--uui-color-disabled,#f3f3f5)
        );
      }
      textarea[disabled] {
        cursor: not-allowed;
        background-color: var(
          --uui-textarea-background-color-disabled,
          var(--uui-color-disabled,#f3f3f5)
        );
        border-color: var(
          --uui-textarea-border-color-disabled,
          var(--uui-color-disabled,#f3f3f5)
        );

        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      textarea {
        color: var(--uui-color-text,#060606);
        font-family: inherit;
        line-height: var(--uui-size-6,18px);
        box-sizing: border-box;
        min-width: 100%;
        max-width: 100%;
        font-size: inherit;
        padding: var(--uui-size-2,6px);
        border: 1px solid
          var(--uui-textarea-border-color, var(--uui-color-border,#d8d7d9)); /** Note: Specified border size is needed and hardcoded in autoUpdateHeight() */
        border-radius: var(--uui-border-radius,3px);
        outline: none;
        min-height: var(--uui-textarea-min-height);
        max-height: var(--uui-textarea-max-height);
        background-color: var(
          --uui-textarea-background-color,
          var(--uui-color-surface,#fff)
        );
      }
      :host(:hover)
        textarea:not([readonly]):not([disabled])
        :host(:focus-within)
        textarea,
      :host(:focus) textarea {
        border-color: var(
          --uui-textarea-border-color,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
      }
      textarea:focus {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }
    `
];
lt([
  l()
], K.prototype, "placeholder", 2);
lt([
  l({ type: Boolean, reflect: !0 })
], K.prototype, "disabled", 2);
lt([
  l({ type: Boolean, reflect: !0 })
], K.prototype, "readonly", 2);
lt([
  l({ type: String })
], K.prototype, "name", 2);
lt([
  l({ type: Boolean, reflect: !0 })
], K.prototype, "error", 2);
lt([
  l({ type: Number })
], K.prototype, "minlength", 2);
lt([
  l({ attribute: "minlength-message" })
], K.prototype, "minlengthMessage", 2);
lt([
  l({ type: Number })
], K.prototype, "maxlength", 2);
lt([
  l({ attribute: "maxlength-message" })
], K.prototype, "maxlengthMessage", 2);
lt([
  U("#textarea")
], K.prototype, "_textarea", 2);
lt([
  l({ type: Boolean, attribute: "auto-height", reflect: !0 })
], K.prototype, "autoHeight", 2);
lt([
  l({ type: String })
], K.prototype, "label", 2);
lt([
  l({ type: Number })
], K.prototype, "rows", 2);
lt([
  l({ type: Number })
], K.prototype, "cols", 2);
lt([
  l({ type: String })
], K.prototype, "wrap", 2);
K = lt([
  g("uui-textarea")
], K);
class ft extends L {
}
ft.OPENING = "opening";
ft.OPENED = "opened";
ft.CLOSING = "closing";
ft.CLOSED = "closed";
var qm = Object.defineProperty, Km = Object.getOwnPropertyDescriptor, Wr = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Km(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && qm(t, i, r), r;
};
let ei = class extends _ {
  constructor() {
    super(), this.color = "", this._autoClose = null, this._onOpenTimerComplete = () => {
      this._open && (this.open = !1);
    }, this._timer = null, this._pauseTimer = !1, this.isOpen = !1, this._open = !1, this._animate = !1, this._requestAnimationUpdate = 0, this.addEventListener("keyup", (e) => {
      e.key === "Escape" && (this.open = !1);
    });
  }
  get autoClose() {
    return this._autoClose;
  }
  set autoClose(e) {
    var t;
    this._autoClose = e, e !== null ? (this._timer === null ? this._timer = new Mf(this._onOpenTimerComplete, e) : this._timer.setDuration(e), this._pauseTimer === !1 && this.isOpen === !0 && this._animate === !1 && this._timer.start()) : ((t = this._timer) == null || t.destroy(), this._timer = null);
  }
  /**
   * Pause the auto close timer.
   */
  pauseAutoClose() {
    this._pauseTimer = !0, this._timer !== null && this._timer.pause();
  }
  /**
   * Resume the auto close timer.
   */
  resumeAutoClose() {
    this._pauseTimer = !1, this._timer !== null && this.isOpen === !0 && this._animate === !1 && this._timer.restart();
  }
  get open() {
    return this._open;
  }
  set open(e) {
    e === !0 ? this._makeOpen() : this._makeClose();
  }
  connectedCallback() {
    super.connectedCallback(), C(this, "uui-button"), C(this, "uui-icon");
  }
  _getAnimationDuration() {
    return parseInt(
      getComputedStyle(this).getPropertyValue(
        "--uui-toast-notification-animation-duration"
      ),
      10
    ) || 480;
  }
  _makeOpen() {
    this._open !== !0 && (this._open = !0, this.updateComplete.then(() => {
      this._open === !0 && (cancelAnimationFrame(this._requestAnimationUpdate), this._requestAnimationUpdate = requestAnimationFrame(() => {
        clearTimeout(this._animationTimeout), this.isOpen = !0, this.setAttribute("is-open", ""), this.style.height = this._toastEl.getBoundingClientRect().height + "px", this._animate = !0, this.dispatchEvent(
          new ft(ft.OPENING)
        ), this._animationTimeout = window.setTimeout(() => {
          var e;
          this.isOpen === !0 && (this.style.height = "auto", this._animate = !1, this._pauseTimer === !1 && ((e = this._timer) == null || e.start()), this.dispatchEvent(
            new ft(ft.OPENED)
          ));
        }, this._getAnimationDuration());
      }));
    }));
  }
  _makeClose() {
    var t;
    if (this._open === !1)
      return;
    const e = new ft(
      ft.CLOSING,
      { cancelable: !0 }
    );
    this.dispatchEvent(e), e.defaultPrevented !== !0 && (this._open = !1, (t = this._timer) == null || t.pause(), cancelAnimationFrame(this._requestAnimationUpdate), this.isOpen === !0 && (this._requestAnimationUpdate = requestAnimationFrame(() => {
      clearTimeout(this._animationTimeout), this.isOpen = !1, this.removeAttribute("is-open"), this.style.height = this._toastEl.getBoundingClientRect().height + "px", this._animate = !0, requestAnimationFrame(() => {
        this.style.height = "0";
      }), this._animationTimeout = window.setTimeout(() => {
        this.isOpen === !1 && (this._animate = !1, this.dispatchEvent(
          new ft(ft.CLOSED)
        ), this.parentNode && this.parentNode.removeChild(this));
      }, this._getAnimationDuration());
    })));
  }
  render() {
    return c`
      <div id="toast" class=${this._animate ? "animate" : ""}>
        <div>
          <div id="close">
            <uui-button
              .label=${"close"}
              .color=${this.color}
              .look=${this.color ? "primary" : "default"}
              @click=${() => this.open = !1}>
              <uui-icon
                name="remove"
                .fallback=${Bl.strings[0]}></uui-icon>
            </uui-button>
          </div>
          <slot></slot>
        </div>
      </div>
    `;
  }
};
ei.styles = [
  Or,
  b`
      :host {
        --uui-toast-notification-margin: var(--uui-size-space-2,6px);

        position: relative;
        display: block;
        width: 100%;
        max-width: 400px;
        margin: 0 var(--uui-toast-notification-margin);
        box-sizing: border-box;

        height: 0;
        pointer-events: none;

        transition: height
          var(--uui-toast-notification-animation-duration, 480ms) ease-in-out;
      }
      :host([is-open]) {
        pointer-events: all;
        transition-timing-function: cubic-bezier(
          0.19,
          1,
          0.22,
          1
        ); /* easeOutExpo */
      }

      #toast {
        position: relative;
        display: block;
        padding: calc(var(--uui-toast-notification-margin) * 0.5) 0;
        width: 100%;
        max-width: 400px;
      }
      #toast.animate {
        position: absolute;
      }

      #toast > div {
        position: relative;
        display: block;

        box-sizing: border-box;
        box-shadow: var(--uui-shadow-depth-1,0 1px 3px rgba(0,0,0,0.12) , 0 1px 2px rgba(0,0,0,0.24));
        background-color: var(--uui-color-surface,#fff);
        padding: var(--uui-size-layout-1,24px);
        padding-right: var(--uui-size-layout-1,24px);
        padding-left: var(--uui-size-layout-3,42px);
        border-radius: calc(var(--uui-border-radius,3px) * 2);

        opacity: 0;
        transition: opacity
          var(--uui-toast-notification-animation-duration, 480ms);
      }
      :host([is-open]) #toast > div {
        opacity: 1;
      }

      #close {
        float: right;
        margin-top: -6px;
        margin-left: var(--uui-size-space-1,3px);
        margin-bottom: -4px;
      }

      #close > uui-button {
        --uui-button-border-radius: 50px 50px 50px 50px;
        --uui-button-padding-left-factor: 1.5;
        --uui-button-padding-right-factor: 1.5;
      }

      :host #toast > div {
        background-color: var(--uui-color-surface,#fff);
        color: var(--uui-color-text,#060606);
        border-color: var(--uui-color-surface,#fff);
      }
      :host([color='default']) #toast > div {
        background-color: var(--uui-color-default,#1b264f);
        color: var(--uui-color-default-contrast,#fff);
        border-color: var(--uui-color-default-standalone,rgb(
    28,
    35,
    59
  ));
      }
      :host([color='positive']) #toast > div {
        background-color: var(--uui-color-positive,#0b8152);
        color: var(--uui-color-positive-contrast,#fff);
        border-color: var(--uui-color-positive-standalone,rgb(
    10,
    115,
    73
  ));
      }
      :host([color='warning']) #toast > div {
        background-color: var(--uui-color-warning,#fbd142);
        color: var(--uui-color-warning-contrast,#000);
        border-color: var(--uui-color-warning-standalone,#a17700);
      }
      :host([color='danger']) #toast > div {
        background-color: var(--uui-color-danger,#d42054);
        color: var(--uui-color-danger-contrast,white);
        border-color: var(--uui-color-danger-standalone,rgb(
    191,
    33,
    78
  ));
      }
      :host([color='invalid']) #toast > div {
        background-color: var(--uui-color-invalid,#d42054);
        color: var(--uui-color-invalid-contrast,white);
        border-color: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
    `
];
Wr([
  l({ reflect: !0 })
], ei.prototype, "color", 2);
Wr([
  l({ type: Number })
], ei.prototype, "autoClose", 1);
Wr([
  U("#toast")
], ei.prototype, "_toastEl", 2);
Wr([
  w()
], ei.prototype, "_animate", 2);
Wr([
  l({ type: Boolean, reflect: !0 })
], ei.prototype, "open", 1);
ei = Wr([
  g("uui-toast-notification")
], ei);
var Ym = Object.defineProperty, Xm = Object.getOwnPropertyDescriptor, qd = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Xm(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Ym(t, i, r), r;
};
let vn = class extends _ {
  constructor() {
    super(...arguments), this._autoClose = null, this._autoClosePause = !1, this.pauseAutoClose = () => {
      var e;
      this._autoClosePause = !0, (e = this._toasts) == null || e.forEach((t) => t.pauseAutoClose());
    }, this.resumeAutoClose = () => {
      var e;
      this.matches(":focus-within:not(:focus)") === !1 && (this._autoClosePause = !1, (e = this._toasts) == null || e.forEach((t) => t.resumeAutoClose()));
    }, this.onToastClosed = (e) => {
      this.removeToast(e.target);
    }, this._toasts = [], this.onSlotChanged = (e) => {
      const t = [...this._toasts];
      this._toasts = e.target.assignedElements({ flatten: !0 }).filter(
        (r) => r.nodeName === "UUI-TOAST-NOTIFICATION"
      ), t.filter(
        (r) => this._toasts.indexOf(r) === -1
      ).forEach((r) => {
        r.removeEventListener(
          ft.CLOSED,
          this.onToastClosed
        ), r.removeEventListener("mouseenter", this.pauseAutoClose), r.removeEventListener("mouseleave", this.resumeAutoClose), r.removeEventListener("focus", this.pauseAutoClose), r.removeEventListener("blur", this.resumeAutoClose);
      }), this._toasts.filter(
        (r) => t.indexOf(r) === -1
      ).forEach((r) => {
        r.addEventListener(
          ft.CLOSED,
          this.onToastClosed
        ), r.addEventListener("mouseenter", this.pauseAutoClose), r.addEventListener("mouseleave", this.resumeAutoClose), r.addEventListener("focus", this.pauseAutoClose), r.addEventListener("blur", this.resumeAutoClose), this._autoClose && (r.autoClose = this._autoClose), this._autoClosePause === !0 && r.pauseAutoClose(), r.open = !0;
      });
    };
  }
  get autoClose() {
    return this._autoClose;
  }
  set autoClose(e) {
    var t;
    this._autoClose = e, (t = this._toasts) == null || t.forEach((i) => i.autoClose = e);
  }
  /**
   * Instantly remove a toast element.
   * @param  {UUIToastNotificationElement} toast The toast element to remove
   */
  removeToast(e) {
    if (!e)
      e = this._toasts[this._toasts.length - 1];
    else if (this._toasts.indexOf(e) === -1) {
      console.warn(
        "Toast-notification",
        e,
        "could not be removed as it is not a child of this toast-notification-container",
        this
      );
      return;
    }
    this.removeChild(e);
  }
  /**
   * Close a toast element, this will animate out and then be removed.
   * @param  {UUIToastNotificationElement} toast The toast element to close and remove
   */
  closeToast(e) {
    let t = e;
    t || (t = this._toasts[this._toasts.length - 1]), t.open = !1;
  }
  render() {
    return c` <slot @slotchange=${this.onSlotChanged}></slot> `;
  }
};
vn.styles = [
  b`
      :host {
        position: absolute;
        overflow: hidden;
        max-width: 100%;
        height: 100%;

        pointer-events: none;
        box-sizing: border-box;
      }

      slot {
        display: flex;
        flex-direction: column;
        align-items: end;

        height: 100%;
        box-sizing: border-box;

        padding-top: var(--uui-size-space-1,3px);
        padding-bottom: var(--uui-size-space-1,3px);
      }
      :host([bottom-up]) slot {
        justify-content: end;
      }
      :host([left-align]) slot {
        align-items: start;
      }
    `
];
qd([
  l({ type: Number, reflect: !0, attribute: "auto-close" })
], vn.prototype, "_autoClose", 2);
vn = qd([
  g("uui-toast-notification-container")
], vn);
var Zm = Object.defineProperty, Jm = Object.getOwnPropertyDescriptor, hu = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Jm(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && Zm(t, i, r), r;
};
let No = class extends _ {
  constructor() {
    super(...arguments), this.headline = "", this._headlineSlotHasContent = !1, this._headlineSlotChanged = (e) => {
      this._headlineSlotHasContent = e.target.assignedNodes({ flatten: !0 }).length > 0;
    };
  }
  render() {
    return c`
      <div id="message" class="uui-text">
        <h5
          style=${this._headlineSlotHasContent || this.headline && this.headline !== "" ? "" : "display: none"}>
          ${this.headline}
          <slot name="headline" @slotchange=${this._headlineSlotChanged}></slot>
        </h5>
        <slot></slot>
        <slot id="actions" name="actions"></slot>
      </div>
    `;
  }
};
No.styles = [
  Or,
  b`
      #message {
        margin-bottom: calc(var(--uui-size-space-1,3px) * -1);
      }
      #message::after {
        content: '';
        display: block;
        clear: both;
      }
      #actions {
        /*
        display: flex;
        width: 100%;
        justify-content: flex-end;
        */
        display: block;
        float: right;

        margin-top: var(--uui-size-space-4,12px);
        margin-bottom: calc(var(--uui-size-space-2,6px) * -1);
      }
    `
];
hu([
  l({ type: String })
], No.prototype, "headline", 2);
hu([
  w()
], No.prototype, "_headlineSlotHasContent", 2);
No = hu([
  g("uui-toast-notification-layout")
], No);
var Qm = Object.getOwnPropertyDescriptor, t1 = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Qm(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = n(r) || r);
  return r;
};
let bn = class extends Ht {
  constructor() {
    super("switch");
  }
  renderCheckbox() {
    return c`
      <div id="toggle">
        <div id="icon-checked">${Un}</div>
        <div id="icon-unchecked">${Bl}</div>
      </div>
    `;
  }
};
bn.formAssociated = !0;
bn.styles = [
  ...Ht.styles,
  On,
  b`
      :host {
        --uui-toggle-size: 18px;
        --uui-toggle-switch-width: calc(2 * var(--uui-toggle-size));
      }

      #toggle {
        position: relative;
        grid-area: 'input';
        display: flex;
        align-items: center;

        flex-shrink: 0;

        width: var(--uui-toggle-switch-width);
        height: var(--uui-toggle-size);
        border-radius: 100px;

        background-color: var(
          --uui-toggle-background-color,
          var(--uui-color-border,#d8d7d9)
        );
        border: 1px solid
          var(--uui-toggle-border-color, var(--uui-color-border-standalone,#c2c2c2));
        font-size: calc(var(--uui-toggle-size) * 0.6);
      }

      label:hover input:not([disabled]) ~ #toggle {
        border-color: var(
          --uui-toggle-border-color-hover,
          var(--uui-color-border-emphasis,#a1a1a1)
        );
        background-color: var(
          --uui-toggle-background-color-hover,
          var(--uui-color-border,#d8d7d9)
        );
      }

      label:focus #toggle {
        border-color: var(
          --uui-toggle-border-color-focus,
          var(--uui-color-focus,#3879ff)
        );
        background-color: var(
          --uui-toggle-background-color-focus,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
      }

      input:checked ~ #toggle {
        background-color: var(--uui-color-selected,#3544b1);
      }

      label:hover input:checked:not([disabled]) ~ #toggle {
        background-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      label:focus input:checked ~ #toggle {
        background-color: var(--uui-color-selected-emphasis,rgb(
    70,
    86,
    200
  ));
      }

      #icon-checked,
      #icon-unchecked {
        position: absolute;
        vertical-align: middle;
        width: 1em;
        height: 1em;
        line-height: 0;
        transition: color 120ms;
      }

      #icon-checked {
        margin-left: -0.5em;
        left: calc(var(--uui-toggle-size) * 0.5);
        color: var(--uui-color-interactive,#1b264f);
      }

      #icon-unchecked {
        margin-right: -0.5em;
        right: calc(var(--uui-toggle-size) * 0.5);
        color: var(--uui-color-interactive,#1b264f);
      }

      input:checked ~ #toggle #icon-checked {
        color: var(--uui-color-selected-contrast,#fff);
      }

      #toggle::after {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: calc(var(--uui-toggle-size) - 4px);
        height: calc(var(--uui-toggle-size) - 4px);
        border-radius: 100px;
        background-color: var(--uui-color-selected-contrast,#fff);
        transition:
          width 120ms ease,
          left 120ms ease,
          transform 120ms ease,
          background-color 120ms;
      }

      input:checked ~ #toggle::after {
        left: calc(100% - 2px);
        transform: translateX(-100%);
      }

      input:focus ~ #toggle {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }

      :host(:not([disabled], [readonly])) label:active #toggle::after {
        /** Stretch when mouse down */
        width: calc(1.06 * var(--uui-toggle-size));
      }

      :host([disabled]) #toggle {
        background-color: var(--uui-color-disabled-standalone,rgb(
    226,
    226,
    226
  ));
      }
      :host([disabled]) input:checked ~ #toggle {
        background-color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) #toggle::after {
        background-color: var(--uui-color-disabled,#f3f3f5);
      }
      :host([disabled]) #toggle #icon-unchecked {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
      :host([disabled]) label:active #toggle {
        animation: ${In};
      }
      :host([disabled]) input:checked #toggle #icon-checked {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }

      :host(:not([pristine]):invalid) #toggle,
      :host(:not([pristine]):invalid) label:hover #toggle,
      /* polyfill support */
      :host(:not([pristine])[internals-invalid]) #toggle,
      :host(:not([pristine])[internals-invalid]) label:hover #toggle {
        border: 1px solid var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
    `
];
bn = t1([
  g("uui-toggle")
], bn);
var e1 = Object.getOwnPropertyDescriptor, i1 = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? e1(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = n(r) || r);
  return r;
};
let wl = class extends _ {
  render() {
    return c`<slot></slot>`;
  }
};
wl.styles = [
  b`
      :host(:not(:focus-within)) {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        clip: rect(0 0 0 0) !important;
        clip-path: inset(50%) !important;
        border: none !important;
        overflow: hidden !important;
        white-space: nowrap !important;
        padding: 0 !important;
      }
    `
];
wl = i1([
  g("uui-visually-hidden")
], wl);
class r1 {
  constructor() {
    this.TOKEN_KEY = "umb:userAuthTokenResponse", this.TOKEN_REFRESH_THRESHOLD = 300 * 1e3;
  }
  // 5 minutes in milliseconds
  /**
   * Gets the current auth token from localStorage
   */
  getToken() {
    try {
      const t = localStorage.getItem(this.TOKEN_KEY);
      return t ? JSON.parse(t) : null;
    } catch (t) {
      return console.error("Error parsing token from localStorage:", t), null;
    }
  }
  /**
   * Stores token with timestamp
   */
  storeToken(t) {
    const i = {
      ...t,
      stored_at: Date.now()
    };
    localStorage.setItem(this.TOKEN_KEY, JSON.stringify(i));
  }
  /**
   * Checks if the current token is valid and not expired
   */
  isTokenValid() {
    const t = this.getToken();
    if (!t)
      return !1;
    if (t.expires_in != null && t.stored_at != null) {
      const i = typeof t.expires_in == "string" ? parseInt(t.expires_in) : t.expires_in;
      if ((typeof t.stored_at == "string" ? parseInt(t.stored_at) : t.stored_at) + i * 1e3 <= Date.now())
        return !1;
    }
    return !0;
  }
  /**
   * Checks if the token needs to be refreshed (within 5 minutes of expiration)
   */
  shouldRefreshToken() {
    const t = this.getToken();
    if (!t)
      return !1;
    if (t.expires_in != null && t.stored_at != null) {
      const i = typeof t.expires_in == "string" ? parseInt(t.expires_in) : t.expires_in;
      return (typeof t.stored_at == "string" ? parseInt(t.stored_at) : t.stored_at) + i * 1e3 - Date.now() <= this.TOKEN_REFRESH_THRESHOLD;
    }
    return !1;
  }
  /**
   * Refreshes the access token using the refresh token
   */
  async refreshToken() {
    const t = this.getToken();
    if (!(t != null && t.refresh_token))
      return !1;
    try {
      const i = await fetch("/umbraco/management/api/v1/security/back-office/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: t.refresh_token
        })
      });
      if (!i.ok)
        throw new Error(`Token refresh failed: ${i.status}`);
      const o = await i.json();
      return this.storeToken(o), !0;
    } catch (i) {
      return console.error("Error refreshing token:", i), !1;
    }
  }
  /**
   * Makes an authenticated HTTP request with automatic token refresh
   */
  async authenticatedFetch(t, i = {}) {
    if (this.shouldRefreshToken() && !await this.refreshToken())
      throw new Error("Unable to refresh token. User may need to log in again.");
    if (!this.isTokenValid())
      throw new Error("User is not authenticated. Please log in.");
    const o = this.getToken();
    if (!o)
      throw new Error("No authentication token available.");
    const r = {
      ...i.headers,
      Authorization: `Bearer ${o.access_token}`,
      "Content-Type": "application/json"
    }, s = await fetch(t, {
      ...i,
      headers: r
    });
    if (s.status === 401) {
      if (await this.refreshToken()) {
        const a = this.getToken();
        if (a) {
          const u = {
            ...i.headers,
            Authorization: `Bearer ${a.access_token}`,
            "Content-Type": "application/json"
          };
          return fetch(t, {
            ...i,
            headers: u
          });
        }
      }
      throw new Error("Authentication failed. Please log in again.");
    }
    return s;
  }
  /**
   * Clears the authentication token (for logout)
   */
  clearToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const zs = globalThis, du = zs.ShadowRoot && (zs.ShadyCSS === void 0 || zs.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Kd = Symbol(), Ec = /* @__PURE__ */ new WeakMap();
let o1 = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== Kd) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (du && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = Ec.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && Ec.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const s1 = (e) => new o1(typeof e == "string" ? e : e + "", void 0, Kd), n1 = (e, t) => {
  if (du) e.adoptedStyleSheets = t.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet);
  else for (const i of t) {
    const o = document.createElement("style"), r = zs.litNonce;
    r !== void 0 && o.setAttribute("nonce", r), o.textContent = i.cssText, e.appendChild(o);
  }
}, Pc = du ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let i = "";
  for (const o of t.cssRules) i += o.cssText;
  return s1(i);
})(e) : e;
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const { is: a1, defineProperty: l1, getOwnPropertyDescriptor: u1, getOwnPropertyNames: c1, getOwnPropertySymbols: h1, getPrototypeOf: d1 } = Object, Fe = globalThis, Sc = Fe.trustedTypes, p1 = Sc ? Sc.emptyScript : "", ba = Fe.reactiveElementPolyfillSupport, _o = (e, t) => e, gn = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? p1 : null;
      break;
    case Object:
    case Array:
      e = e == null ? e : JSON.stringify(e);
  }
  return e;
}, fromAttribute(e, t) {
  let i = e;
  switch (t) {
    case Boolean:
      i = e !== null;
      break;
    case Number:
      i = e === null ? null : Number(e);
      break;
    case Object:
    case Array:
      try {
        i = JSON.parse(e);
      } catch {
        i = null;
      }
  }
  return i;
} }, pu = (e, t) => !a1(e, t), Ac = { attribute: !0, type: String, converter: gn, reflect: !1, useDefault: !1, hasChanged: pu };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), Fe.litPropertyMetadata ?? (Fe.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Gi = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, i = Ac) {
    if (i.state && (i.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((i = Object.create(i)).wrapped = !0), this.elementProperties.set(t, i), !i.noAccessor) {
      const o = Symbol(), r = this.getPropertyDescriptor(t, o, i);
      r !== void 0 && l1(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, i, o) {
    const { get: r, set: s } = u1(this.prototype, t) ?? { get() {
      return this[i];
    }, set(n) {
      this[i] = n;
    } };
    return { get: r, set(n) {
      const a = r == null ? void 0 : r.call(this);
      s == null || s.call(this, n), this.requestUpdate(t, a, o);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Ac;
  }
  static _$Ei() {
    if (this.hasOwnProperty(_o("elementProperties"))) return;
    const t = d1(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(_o("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(_o("properties"))) {
      const i = this.properties, o = [...c1(i), ...h1(i)];
      for (const r of o) this.createProperty(r, i[r]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const i = litPropertyMetadata.get(t);
      if (i !== void 0) for (const [o, r] of i) this.elementProperties.set(o, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [i, o] of this.elementProperties) {
      const r = this._$Eu(i, o);
      r !== void 0 && this._$Eh.set(r, i);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const i = [];
    if (Array.isArray(t)) {
      const o = new Set(t.flat(1 / 0).reverse());
      for (const r of o) i.unshift(Pc(r));
    } else t !== void 0 && i.push(Pc(t));
    return i;
  }
  static _$Eu(t, i) {
    const o = i.attribute;
    return o === !1 ? void 0 : typeof o == "string" ? o : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((i) => this.enableUpdating = i), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((i) => i(this));
  }
  addController(t) {
    var i;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((i = t.hostConnected) == null || i.call(t));
  }
  removeController(t) {
    var i;
    (i = this._$EO) == null || i.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), i = this.constructor.elementProperties;
    for (const o of i.keys()) this.hasOwnProperty(o) && (t.set(o, this[o]), delete this[o]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return n1(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((i) => {
      var o;
      return (o = i.hostConnected) == null ? void 0 : o.call(i);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((i) => {
      var o;
      return (o = i.hostDisconnected) == null ? void 0 : o.call(i);
    });
  }
  attributeChangedCallback(t, i, o) {
    this._$AK(t, o);
  }
  _$ET(t, i) {
    var s;
    const o = this.constructor.elementProperties.get(t), r = this.constructor._$Eu(t, o);
    if (r !== void 0 && o.reflect === !0) {
      const n = (((s = o.converter) == null ? void 0 : s.toAttribute) !== void 0 ? o.converter : gn).toAttribute(i, o.type);
      this._$Em = t, n == null ? this.removeAttribute(r) : this.setAttribute(r, n), this._$Em = null;
    }
  }
  _$AK(t, i) {
    var s, n;
    const o = this.constructor, r = o._$Eh.get(t);
    if (r !== void 0 && this._$Em !== r) {
      const a = o.getPropertyOptions(r), u = typeof a.converter == "function" ? { fromAttribute: a.converter } : ((s = a.converter) == null ? void 0 : s.fromAttribute) !== void 0 ? a.converter : gn;
      this._$Em = r, this[r] = u.fromAttribute(i, a.type) ?? ((n = this._$Ej) == null ? void 0 : n.get(r)) ?? null, this._$Em = null;
    }
  }
  requestUpdate(t, i, o) {
    var r;
    if (t !== void 0) {
      const s = this.constructor, n = this[t];
      if (o ?? (o = s.getPropertyOptions(t)), !((o.hasChanged ?? pu)(n, i) || o.useDefault && o.reflect && n === ((r = this._$Ej) == null ? void 0 : r.get(t)) && !this.hasAttribute(s._$Eu(t, o)))) return;
      this.C(t, i, o);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, i, { useDefault: o, reflect: r, wrapped: s }, n) {
    o && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, n ?? i ?? this[t]), s !== !0 || n !== void 0) || (this._$AL.has(t) || (this.hasUpdated || o || (i = void 0), this._$AL.set(t, i)), r === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (i) {
      Promise.reject(i);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var o;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [s, n] of this._$Ep) this[s] = n;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [s, n] of r) {
        const { wrapped: a } = n, u = this[s];
        a !== !0 || this._$AL.has(s) || u === void 0 || this.C(s, void 0, n, u);
      }
    }
    let t = !1;
    const i = this._$AL;
    try {
      t = this.shouldUpdate(i), t ? (this.willUpdate(i), (o = this._$EO) == null || o.forEach((r) => {
        var s;
        return (s = r.hostUpdate) == null ? void 0 : s.call(r);
      }), this.update(i)) : this._$EM();
    } catch (r) {
      throw t = !1, this._$EM(), r;
    }
    t && this._$AE(i);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var i;
    (i = this._$EO) == null || i.forEach((o) => {
      var r;
      return (r = o.hostUpdated) == null ? void 0 : r.call(o);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((i) => this._$ET(i, this[i]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
Gi.elementStyles = [], Gi.shadowRootOptions = { mode: "open" }, Gi[_o("elementProperties")] = /* @__PURE__ */ new Map(), Gi[_o("finalized")] = /* @__PURE__ */ new Map(), ba == null || ba({ ReactiveElement: Gi }), (Fe.reactiveElementVersions ?? (Fe.reactiveElementVersions = [])).push("2.1.0");
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const yo = globalThis, mn = yo.trustedTypes, Oc = mn ? mn.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, Yd = "$lit$", Ne = `lit$${Math.random().toFixed(9).slice(2)}$`, Xd = "?" + Ne, f1 = `<${Xd}>`, Ii = document, Ho = () => Ii.createComment(""), Bo = (e) => e === null || typeof e != "object" && typeof e != "function", fu = Array.isArray, v1 = (e) => fu(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", ga = `[ 	
\f\r]`, Zr = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ic = /-->/g, Uc = />/g, pi = RegExp(`>|${ga}(?:([^\\s"'>=/]+)(${ga}*=${ga}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), zc = /'/g, Mc = /"/g, Zd = /^(?:script|style|textarea|title)$/i, Pr = Symbol.for("lit-noChange"), J = Symbol.for("lit-nothing"), Tc = /* @__PURE__ */ new WeakMap(), yi = Ii.createTreeWalker(Ii, 129);
function Jd(e, t) {
  if (!fu(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Oc !== void 0 ? Oc.createHTML(t) : t;
}
const b1 = (e, t) => {
  const i = e.length - 1, o = [];
  let r, s = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = Zr;
  for (let a = 0; a < i; a++) {
    const u = e[a];
    let h, f, d = -1, x = 0;
    for (; x < u.length && (n.lastIndex = x, f = n.exec(u), f !== null); ) x = n.lastIndex, n === Zr ? f[1] === "!--" ? n = Ic : f[1] !== void 0 ? n = Uc : f[2] !== void 0 ? (Zd.test(f[2]) && (r = RegExp("</" + f[2], "g")), n = pi) : f[3] !== void 0 && (n = pi) : n === pi ? f[0] === ">" ? (n = r ?? Zr, d = -1) : f[1] === void 0 ? d = -2 : (d = n.lastIndex - f[2].length, h = f[1], n = f[3] === void 0 ? pi : f[3] === '"' ? Mc : zc) : n === Mc || n === zc ? n = pi : n === Ic || n === Uc ? n = Zr : (n = pi, r = void 0);
    const v = n === pi && e[a + 1].startsWith("/>") ? " " : "";
    s += n === Zr ? u + f1 : d >= 0 ? (o.push(h), u.slice(0, d) + Yd + u.slice(d) + Ne + v) : u + Ne + (d === -2 ? a : v);
  }
  return [Jd(e, s + (e[i] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), o];
};
let xl = class Qd {
  constructor({ strings: t, _$litType$: i }, o) {
    let r;
    this.parts = [];
    let s = 0, n = 0;
    const a = t.length - 1, u = this.parts, [h, f] = b1(t, i);
    if (this.el = Qd.createElement(h, o), yi.currentNode = this.el.content, i === 2 || i === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (r = yi.nextNode()) !== null && u.length < a; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) for (const d of r.getAttributeNames()) if (d.endsWith(Yd)) {
          const x = f[n++], v = r.getAttribute(d).split(Ne), $ = /([.?@])?(.*)/.exec(x);
          u.push({ type: 1, index: s, name: $[2], strings: v, ctor: $[1] === "." ? m1 : $[1] === "?" ? _1 : $[1] === "@" ? y1 : Fn }), r.removeAttribute(d);
        } else d.startsWith(Ne) && (u.push({ type: 6, index: s }), r.removeAttribute(d));
        if (Zd.test(r.tagName)) {
          const d = r.textContent.split(Ne), x = d.length - 1;
          if (x > 0) {
            r.textContent = mn ? mn.emptyScript : "";
            for (let v = 0; v < x; v++) r.append(d[v], Ho()), yi.nextNode(), u.push({ type: 2, index: ++s });
            r.append(d[x], Ho());
          }
        }
      } else if (r.nodeType === 8) if (r.data === Xd) u.push({ type: 2, index: s });
      else {
        let d = -1;
        for (; (d = r.data.indexOf(Ne, d + 1)) !== -1; ) u.push({ type: 7, index: s }), d += Ne.length - 1;
      }
      s++;
    }
  }
  static createElement(t, i) {
    const o = Ii.createElement("template");
    return o.innerHTML = t, o;
  }
};
function Sr(e, t, i = e, o) {
  var n, a;
  if (t === Pr) return t;
  let r = o !== void 0 ? (n = i._$Co) == null ? void 0 : n[o] : i._$Cl;
  const s = Bo(t) ? void 0 : t._$litDirective$;
  return (r == null ? void 0 : r.constructor) !== s && ((a = r == null ? void 0 : r._$AO) == null || a.call(r, !1), s === void 0 ? r = void 0 : (r = new s(e), r._$AT(e, i, o)), o !== void 0 ? (i._$Co ?? (i._$Co = []))[o] = r : i._$Cl = r), r !== void 0 && (t = Sr(e, r._$AS(e, t.values), r, o)), t;
}
let g1 = class {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: i } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? Ii).importNode(t, !0);
    yi.currentNode = o;
    let r = yi.nextNode(), s = 0, n = 0, a = i[0];
    for (; a !== void 0; ) {
      if (s === a.index) {
        let u;
        a.type === 2 ? u = new vu(r, r.nextSibling, this, e) : a.type === 1 ? u = new a.ctor(r, a.name, a.strings, this, e) : a.type === 6 && (u = new w1(r, this, e)), this._$AV.push(u), a = i[++n];
      }
      s !== (a == null ? void 0 : a.index) && (r = yi.nextNode(), s++);
    }
    return yi.currentNode = Ii, o;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}, vu = class tp {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, i, o, r) {
    this.type = 2, this._$AH = J, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = o, this.options = r, this._$Cv = (r == null ? void 0 : r.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const i = this._$AM;
    return i !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = i.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, i = this) {
    t = Sr(this, t, i), Bo(t) ? t === J || t == null || t === "" ? (this._$AH !== J && this._$AR(), this._$AH = J) : t !== this._$AH && t !== Pr && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : v1(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== J && Bo(this._$AH) ? this._$AA.nextSibling.data = t : this.T(Ii.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var s;
    const { values: i, _$litType$: o } = t, r = typeof o == "number" ? this._$AC(t) : (o.el === void 0 && (o.el = xl.createElement(Jd(o.h, o.h[0]), this.options)), o);
    if (((s = this._$AH) == null ? void 0 : s._$AD) === r) this._$AH.p(i);
    else {
      const n = new g1(r, this), a = n.u(this.options);
      n.p(i), this.T(a), this._$AH = n;
    }
  }
  _$AC(t) {
    let i = Tc.get(t.strings);
    return i === void 0 && Tc.set(t.strings, i = new xl(t)), i;
  }
  k(t) {
    fu(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let o, r = 0;
    for (const s of t) r === i.length ? i.push(o = new tp(this.O(Ho()), this.O(Ho()), this, this.options)) : o = i[r], o._$AI(s), r++;
    r < i.length && (this._$AR(o && o._$AB.nextSibling, r), i.length = r);
  }
  _$AR(t = this._$AA.nextSibling, i) {
    var o;
    for ((o = this._$AP) == null ? void 0 : o.call(this, !1, !0, i); t && t !== this._$AB; ) {
      const r = t.nextSibling;
      t.remove(), t = r;
    }
  }
  setConnected(t) {
    var i;
    this._$AM === void 0 && (this._$Cv = t, (i = this._$AP) == null || i.call(this, t));
  }
}, Fn = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, i, o, r, s) {
    this.type = 1, this._$AH = J, this._$AN = void 0, this.element = t, this.name = i, this._$AM = r, this.options = s, o.length > 2 || o[0] !== "" || o[1] !== "" ? (this._$AH = Array(o.length - 1).fill(new String()), this.strings = o) : this._$AH = J;
  }
  _$AI(t, i = this, o, r) {
    const s = this.strings;
    let n = !1;
    if (s === void 0) t = Sr(this, t, i, 0), n = !Bo(t) || t !== this._$AH && t !== Pr, n && (this._$AH = t);
    else {
      const a = t;
      let u, h;
      for (t = s[0], u = 0; u < s.length - 1; u++) h = Sr(this, a[o + u], i, u), h === Pr && (h = this._$AH[u]), n || (n = !Bo(h) || h !== this._$AH[u]), h === J ? t = J : t !== J && (t += (h ?? "") + s[u + 1]), this._$AH[u] = h;
    }
    n && !r && this.j(t);
  }
  j(t) {
    t === J ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
};
class m1 extends Fn {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === J ? void 0 : t;
  }
}
class _1 extends Fn {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== J);
  }
}
class y1 extends Fn {
  constructor(t, i, o, r, s) {
    super(t, i, o, r, s), this.type = 5;
  }
  _$AI(t, i = this) {
    if ((t = Sr(this, t, i, 0) ?? J) === Pr) return;
    const o = this._$AH, r = t === J && o !== J || t.capture !== o.capture || t.once !== o.once || t.passive !== o.passive, s = t !== J && (o === J || r);
    r && this.element.removeEventListener(this.name, this, o), s && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var i;
    typeof this._$AH == "function" ? this._$AH.call(((i = this.options) == null ? void 0 : i.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class w1 {
  constructor(t, i, o) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = o;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Sr(this, t);
  }
}
const ma = yo.litHtmlPolyfillSupport;
ma == null || ma(xl, vu), (yo.litHtmlVersions ?? (yo.litHtmlVersions = [])).push("3.3.0");
const x1 = (e, t, i) => {
  const o = (i == null ? void 0 : i.renderBefore) ?? t;
  let r = o._$litPart$;
  if (r === void 0) {
    const s = (i == null ? void 0 : i.renderBefore) ?? null;
    o._$litPart$ = r = new vu(t.insertBefore(Ho(), s), s, void 0, i ?? {});
  }
  return r._$AI(e), r;
};
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Ei = globalThis;
let wo = class extends Gi {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = x1(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
  }
  render() {
    return Pr;
  }
};
var Wc;
wo._$litElement$ = !0, wo.finalized = !0, (Wc = Ei.litElementHydrateSupport) == null || Wc.call(Ei, { LitElement: wo });
const _a = Ei.litElementPolyfillSupport;
_a == null || _a({ LitElement: wo });
(Ei.litElementVersions ?? (Ei.litElementVersions = [])).push("4.2.0");
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const $1 = { attribute: !0, type: String, converter: gn, reflect: !1, hasChanged: pu }, k1 = (e = $1, t, i) => {
  const { kind: o, metadata: r } = i;
  let s = globalThis.litPropertyMetadata.get(r);
  if (s === void 0 && globalThis.litPropertyMetadata.set(r, s = /* @__PURE__ */ new Map()), o === "setter" && ((e = Object.create(e)).wrapped = !0), s.set(i.name, e), o === "accessor") {
    const { name: n } = i;
    return { set(a) {
      const u = t.get.call(this);
      t.set.call(this, a), this.requestUpdate(n, u, e);
    }, init(a) {
      return a !== void 0 && this.C(n, void 0, e, a), a;
    } };
  }
  if (o === "setter") {
    const { name: n } = i;
    return function(a) {
      const u = this[n];
      t.call(this, a), this.requestUpdate(n, u, e);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function ep(e) {
  return (t, i) => typeof i == "object" ? k1(e, t, i) : ((o, r, s) => {
    const n = r.hasOwnProperty(s);
    return r.constructor.createProperty(s, o), n ? Object.getOwnPropertyDescriptor(r, s) : void 0;
  })(e, t, i);
}
const C1 = "en";
var Vo, He, Kt, jo, Ro, kn, ip;
class E1 {
  constructor() {
    E(this, kn);
    E(this, Vo);
    E(this, He);
    E(this, Kt);
    E(this, jo);
    E(this, Ro);
    this.connectedControllers = /* @__PURE__ */ new Set(), m(this, He, /* @__PURE__ */ new Set()), m(this, Kt, void 0), this.localizations = /* @__PURE__ */ new Map(), this.documentDirection = document.documentElement.dir || "ltr", this.documentLanguage = document.documentElement.lang || navigator.language, m(this, jo, this.registerLocalization.bind(this)), this.updateAll = () => {
      const t = document.documentElement.dir || "ltr", i = document.documentElement.lang || navigator.language;
      this.documentDirection === t && this.documentLanguage === i || (this.documentDirection = t, this.documentLanguage = i, this.connectedControllers.forEach((o) => {
        o.documentUpdate();
      }), p(this, Kt) && (cancelAnimationFrame(p(this, Kt)), m(this, Kt, void 0)), p(this, He).clear());
    }, m(this, Ro, () => {
      m(this, Kt, void 0), this.connectedControllers.forEach((t) => {
        t.keysChanged(p(this, He));
      }), p(this, He).clear();
    }), m(this, Vo, new MutationObserver(this.updateAll)), p(this, Vo).observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["dir", "lang"]
    });
  }
  get fallback() {
    return this.localizations.get(C1);
  }
  appendConsumer(t) {
    this.connectedControllers.has(t) || this.connectedControllers.add(t);
  }
  removeConsumer(t) {
    this.connectedControllers.delete(t);
  }
  /**
   * Registers one or more translations
   * @param t
   */
  registerLocalization(t) {
    const i = t.$code.toLowerCase();
    this.localizations.has(i) ? this.localizations.set(i, { ...this.localizations.get(i), ...t }) : this.localizations.set(i, t);
    const o = Object.keys(t);
    for (const r of o)
      p(this, He).add(r);
    $t(this, kn, ip).call(this);
  }
  registerManyLocalizations(t) {
    t.map(p(this, jo));
  }
}
Vo = new WeakMap(), He = new WeakMap(), Kt = new WeakMap(), jo = new WeakMap(), Ro = new WeakMap(), kn = new WeakSet(), /**
 * Request an update of all consumers of the keys defined in #changedKeys.
 * This waits one frame, which ensures that multiple changes are collected into one.
 */
ip = function() {
  p(this, Kt) || m(this, Kt, requestAnimationFrame(p(this, Ro)));
};
const Ue = new E1(), P1 = Symbol();
var sr, fe, Yt;
class S1 {
  constructor(t) {
    E(this, sr);
    E(this, fe);
    E(this, Yt);
    this.controllerAlias = P1, m(this, Yt, new Array()), m(this, sr, t), m(this, fe, t.getHostElement()), p(this, sr).addUmbController(this);
  }
  hostConnected() {
    Ue.appendConsumer(this);
  }
  hostDisconnected() {
    Ue.removeConsumer(this);
  }
  destroy() {
    var t;
    (t = p(this, sr)) == null || t.removeUmbController(this), m(this, fe, void 0), p(this, Yt).length = 0;
  }
  documentUpdate() {
    var t, i;
    (i = (t = p(this, fe)) == null ? void 0 : t.requestUpdate) == null || i.call(t);
  }
  keysChanged(t) {
    var o, r;
    p(this, Yt).find((s) => t.has(s)) && ((r = (o = p(this, fe)) == null ? void 0 : o.requestUpdate) == null || r.call(o));
  }
  /**
   * Gets the host element's directionality as determined by the `dir` attribute. The return value is transformed to
   * lowercase.
   * @returns {string} - the directionality.
   */
  dir() {
    var t;
    return `${((t = p(this, fe)) == null ? void 0 : t.dir) || Ue.documentDirection}`.toLowerCase();
  }
  /**
   * Gets the host element's language as determined by the `lang` attribute. The return value is transformed to
   * lowercase.
   * @returns {string} - the language code.
   */
  lang() {
    var t;
    return `${((t = p(this, fe)) == null ? void 0 : t.lang) || Ue.documentLanguage}`.toLowerCase();
  }
  getLocalizationData(t) {
    var a;
    const i = new Intl.Locale(t), o = i == null ? void 0 : i.language.toLowerCase(), r = ((a = i == null ? void 0 : i.region) == null ? void 0 : a.toLowerCase()) ?? "", s = Ue.localizations.get(`${o}-${r}`), n = Ue.localizations.get(o);
    return { locale: i, language: o, region: r, primary: s, secondary: n };
  }
  /**
   * Outputs a translated term.
   * @param {string} key - the localization key, the indicator of what localization entry you want to retrieve.
   * @param {...any} args - the arguments to parse for this localization entry.
   * @returns {string} - the translated term as a string.
   */
  term(t, ...i) {
    var n;
    p(this, Yt).includes(t) || p(this, Yt).push(t);
    const { primary: o, secondary: r } = this.getLocalizationData(this.lang());
    let s;
    if (o != null && o[t])
      s = o[t];
    else if (r != null && r[t])
      s = r[t];
    else if ((n = Ue.fallback) != null && n[t])
      s = Ue.fallback[t];
    else
      return String(t);
    return typeof s == "function" ? s(...i) : (typeof s == "string" && i.length && (s = s.replace(/(%(\d+)%|\{(\d+)\})/g, (a, u, h, f) => {
      const d = h || f;
      return typeof i[d] < "u" ? String(i[d]) : a;
    })), s);
  }
  /**
   * Outputs a localized date in the specified format.
   * @param {Date} dateToFormat - the date to format.
   * @param {Intl.DateTimeFormatOptions} options - the options to use when formatting the date.
   * @returns {string}
   */
  date(t, i) {
    return t = new Date(t), new Intl.DateTimeFormat(this.lang(), i).format(t);
  }
  /**
   * Outputs a localized number in the specified format.
   * @param {number | string} numberToFormat - the number or string to format.
   * @param {Intl.NumberFormatOptions} options - the options to use when formatting the number.
   * @returns {string} - the formatted number.
   */
  number(t, i) {
    return t = Number(t), isNaN(t) ? "" : new Intl.NumberFormat(this.lang(), i).format(t);
  }
  /**
   * Outputs a localized time in relative format.
   * @example "in 2 days"
   * @param {number} value - the value to format.
   * @param {Intl.RelativeTimeFormatUnit} unit - the unit of time to format.
   * @param {Intl.RelativeTimeFormatOptions} options - the options to use when formatting the time.
   * @returns {string} - the formatted time.
   */
  relativeTime(t, i, o) {
    return new Intl.RelativeTimeFormat(this.lang(), o).format(t, i);
  }
  /**
   * Outputs a localized compounded time in a duration format.
   * @example "2 days, 3 hours and 5 minutes"
   * @param {Date} fromDate - the date to compare from.
   * @param {Date} toDate - the date to compare to, usually the current date (default: current date).
   * @param {object} options - the options to use when formatting the time.
   * @returns {string} - the formatted time, example: "2 days, 3 hours, 5 minutes"
   */
  duration(t, i, o) {
    const r = new Date(t), s = new Date(i ?? Date.now()), n = Math.abs(r.getTime() - s.getTime()), a = Math.abs(Math.floor(n / 1e3));
    if (!("DurationFormat" in Intl))
      return `${a} seconds`;
    const u = Math.floor(n / (1e3 * 60 * 60 * 24)), h = Math.floor(n % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)), f = Math.floor(n % (1e3 * 60 * 60) / (1e3 * 60)), d = Math.floor(n % (1e3 * 60) / 1e3), x = {
      style: "long",
      ...o
    }, v = new Intl.DurationFormat(this.lang(), x);
    return u === 0 && h === 0 && f === 0 ? v.format({ seconds: a }) : v.format({
      days: u,
      hours: h,
      minutes: f,
      seconds: d
    });
  }
  /**
   * Outputs a localized list of values in the specified format.
   * @example "one, two, and three"
   * @param {Iterable<string>} values - the values to format.
   * @param {Intl.ListFormatOptions} options - the options to use when formatting the list.
   * @returns {string} - the formatted list.
   */
  list(t, i) {
    return new Intl.ListFormat(this.lang(), i).format(t);
  }
  // TODO: for V.16 we should set type to be string | undefined. [NL]
  /**
   * Translates a string containing one or more terms. The terms should be prefixed with a `#` character.
   * If the term is found in the localization set, it will be replaced with the localized term.
   * If the term is not found, the original term will be returned.
   * @param {string | null | undefined} text The text to translate.
   * @param {...any} args The arguments to parse for this localization entry.
   * @returns {string} The translated text.
   */
  string(t, ...i) {
    if (typeof t != "string")
      return "";
    const o = /#\w+/g;
    return t.replace(o, (s) => {
      const n = s.slice(1);
      p(this, Yt).includes(n) || p(this, Yt).push(n);
      const a = this.term(n, ...i);
      return a === n ? s : a;
    });
  }
}
sr = new WeakMap(), fe = new WeakMap(), Yt = new WeakMap();
const A1 = (e) => {
  var i, o;
  class t extends e {
    constructor() {
      super(...arguments);
      E(this, i, []);
      E(this, o, !1);
    }
    getHostElement() {
    }
    /**
     * Tests if a controller is assigned to this element.
     * @param {UmbController} ctrl - The controller to check for.
     * @returns {boolean} - true if the controller is assigned
     */
    hasUmbController(n) {
      return p(this, i).indexOf(n) !== -1;
    }
    /**
     * Retrieve controllers matching a filter of this element.
     * @param {Function} filterMethod - filter method
     * @returns {Array<UmbController>} - currently assigned controllers passing the filter method.
     */
    getUmbControllers(n) {
      return p(this, i).filter(n);
    }
    /**
     * Append a controller to this element.
     * @param {UmbController} ctrl - the controller to append to this host.
     */
    addUmbController(n) {
      p(this, i).indexOf(n) === -1 && (this.removeUmbControllerByAlias(n.controllerAlias), p(this, i).push(n), p(this, o) && Promise.resolve().then(() => {
        p(this, o) && p(this, i).includes(n) && n.hostConnected();
      }));
    }
    /**
     * Remove a controller from this element.
     * Notice this will also destroy the controller.
     * @param {UmbController} ctrl - The controller to remove and destroy from this host.
     */
    removeUmbController(n) {
      const a = p(this, i).indexOf(n);
      a !== -1 && (p(this, i).splice(a, 1), p(this, o) && n.hostDisconnected(), n.destroy());
    }
    /**
     * Remove a controller from this element by its alias.
     * Notice this will also destroy the controller.
     * @param {string | symbol} controllerAlias
     */
    removeUmbControllerByAlias(n) {
      n && p(this, i).forEach((a) => {
        a.controllerAlias === n && this.removeUmbController(a);
      });
    }
    hostConnected() {
      m(this, o, !0), p(this, i).forEach((n) => n.hostConnected());
    }
    hostDisconnected() {
      m(this, o, !1), p(this, i).forEach((n) => n.hostDisconnected());
    }
    destroy() {
      var u;
      let n, a = null;
      for (; n = p(this, i)[0]; ) {
        if (n.destroy(), n === a)
          throw new Error(`Controller with controller alias: '${(u = n.controllerAlias) == null ? void 0 : u.toString()}' and class name: '${n.constructor.name}', does not remove it self when destroyed. This can cause memory leaks. Please fix this issue.\r
This usually occurs when you have a destroy() method that doesn't call super.destroy().`);
        a = n;
      }
      p(this, i).length = 0, m(this, o, !1);
    }
  }
  return i = new WeakMap(), o = new WeakMap(), t;
}, O1 = (e) => {
  class t extends A1(e) {
    getHostElement() {
      return this;
    }
    connectedCallback() {
      var o;
      (o = super.connectedCallback) == null || o.call(this), this.hostConnected();
    }
    disconnectedCallback() {
      var o;
      (o = super.disconnectedCallback) == null || o.call(this), this.hostDisconnected();
    }
  }
  return t;
}, _n = "umb:context-provide";
class bu extends Event {
  constructor(t) {
    super(_n, { bubbles: !0, composed: !0 }), this.contextAlias = t;
  }
  clone() {
    return new bu(this.contextAlias);
  }
}
const I1 = (e) => e.type === _n, yn = "umb:context-unprovided";
class U1 extends Event {
  constructor(t, i) {
    super(yn, { bubbles: !0, composed: !0 }), this.contextAlias = t, this.instance = i;
  }
}
const z1 = (e) => e.type === yn, Ms = "umb:context-request", ya = "umb:debug-contexts";
class gu extends Event {
  constructor(t, i, o, r = !0) {
    super(Ms, { bubbles: !0, composed: !0, cancelable: !0 }), this.contextAlias = t, this.apiAlias = i, this.callback = o, this.stopAtContextMatch = r;
  }
  clone() {
    return new gu(this.contextAlias, this.apiAlias, this.callback, this.stopAtContextMatch);
  }
}
var Xt, Fo, nr, ve, be, Zt, Et, gt, pt, ge, wi, xi, et, $l, rp, Dt, op, kl, Cl, ar, lr, El;
class M1 {
  /**
   * Creates an instance of UmbContextConsumer.
   * @param {Element} host - The host element.
   * @param {string} contextIdentifier - The context identifier, an alias or a Context Token.
   * @param {UmbContextCallback} callback - The callback.
   * @memberof UmbContextConsumer
   */
  constructor(t, i, o) {
    E(this, et);
    E(this, Xt);
    E(this, Fo);
    E(this, nr);
    E(this, ve);
    E(this, be);
    E(this, Zt);
    E(this, Et);
    E(this, gt);
    E(this, pt);
    E(this, ge);
    E(this, wi);
    E(this, xi);
    E(this, Dt);
    E(this, ar);
    E(this, lr);
    var s;
    m(this, nr, !0), this._onResponse = (n) => {
      if (p(this, pt) === n)
        return $t(this, et, $l).call(this), !0;
      if (n === void 0)
        throw new Error("Not allowed to set context api instance to undefined.");
      if (p(this, xi)) {
        if (p(this, xi).call(this, n))
          return this.setInstance(n), !0;
      } else
        return this.setInstance(n), !0;
      return !1;
    }, m(this, Dt, window), m(this, ar, (n) => {
      I1(n) && p(this, ge) === n.contextAlias && this.request();
    }), m(this, lr, (n) => {
      z1(n) && p(this, ge) === n.contextAlias && n.instance === p(this, pt) && $t(this, et, El).call(this);
    }), typeof t == "function" ? this._retrieveHost = t : this._retrieveHost = () => t;
    const r = i.toString().split("#");
    m(this, ge, r[0]), m(this, wi, r[1] ?? "default"), m(this, ve, o), m(this, xi, (s = i.getDiscriminator) == null ? void 0 : s.call(i));
  }
  get instance() {
    return p(this, pt);
  }
  getHostElement() {
    return this._retrieveHost();
  }
  /**
   * @public
   * @memberof UmbContextConsumer
   * @description Make the consumption skip the contexts provided by the Host element.
   * @returns {UmbContextConsumer} - The current instance of the UmbContextConsumer.
   */
  skipHost() {
    return m(this, Fo, !0), this;
  }
  /**
   * @public
   * @memberof UmbContextConsumer
   * @description Pass beyond any context aliases that matches this.
   * The default behavior is to stop at first Context Alias match, this is to avoid receiving unforeseen descending contexts.
   * @returns {UmbContextConsumer} - The current instance of the UmbContextConsumer.
   */
  passContextAliasMatches() {
    return m(this, nr, !1), this;
  }
  async setInstance(t) {
    var i;
    m(this, pt, t), $t(this, et, op).call(this, t.getHostElement()), await ((i = p(this, ve)) == null ? void 0 : i.call(this, t)), $t(this, et, $l).call(this);
  }
  /**
   * @public
   * @memberof UmbContextConsumer
   * @param {UmbContextConsumerAsPromiseOptionsType} options - Prevent the promise from timing out.
   * @description Get the context as a promise.
   * @returns {UmbContextConsumer} - A promise that resolves when the context is consumed.
   */
  asPromise(t) {
    return p(this, be) ?? m(this, be, new Promise((i, o) => {
      p(this, pt) ? (m(this, Zt, void 0), m(this, Et, void 0), m(this, gt, void 0), i(p(this, pt))) : (m(this, Zt, t), m(this, Et, i), m(this, gt, o));
    }));
  }
  /**
   * @public
   * @memberof UmbContextConsumer
   * @description Request the context from the host element.
   */
  request() {
    var i, o, r;
    p(this, Xt) !== void 0 && cancelAnimationFrame(p(this, Xt));
    const t = new gu(p(this, ge), p(this, wi), this._onResponse, p(this, nr));
    (o = p(this, Fo) ? (i = this._retrieveHost()) == null ? void 0 : i.parentNode : this._retrieveHost()) == null || o.dispatchEvent(t), p(this, Et) && ((r = p(this, Zt)) == null ? void 0 : r.preventTimeout) !== !0 && m(this, Xt, requestAnimationFrame(() => {
      $t(this, et, rp).call(this), m(this, Xt, void 0);
    }));
  }
  hostConnected() {
    $t(this, et, kl).call(this), this.request();
  }
  hostDisconnected() {
    var t;
    if (p(this, Xt) !== void 0 && (cancelAnimationFrame(p(this, Xt)), m(this, Xt, void 0)), $t(this, et, El).call(this), p(this, gt)) {
      const i = this._retrieveHost();
      p(this, gt).call(this, `Context request was cancelled, host was disconnected. (Context Alias: ${p(this, ge)} with API Alias: ${p(this, wi)}). Controller is hosted on ${((t = i == null ? void 0 : i.parentNode) == null ? void 0 : t.nodeName) ?? "Not attached node"} > ${i == null ? void 0 : i.nodeName}`);
    }
    m(this, be, void 0), m(this, Zt, void 0), m(this, Et, void 0), m(this, gt, void 0), $t(this, et, Cl).call(this), m(this, Dt, window);
  }
  destroy() {
    this.hostDisconnected(), this._retrieveHost = void 0, m(this, ve, void 0), m(this, be, void 0), m(this, Zt, void 0), m(this, Et, void 0), m(this, gt, void 0), m(this, pt, void 0), m(this, xi, void 0);
  }
}
Xt = new WeakMap(), Fo = new WeakMap(), nr = new WeakMap(), ve = new WeakMap(), be = new WeakMap(), Zt = new WeakMap(), Et = new WeakMap(), gt = new WeakMap(), pt = new WeakMap(), ge = new WeakMap(), wi = new WeakMap(), xi = new WeakMap(), et = new WeakSet(), $l = function() {
  p(this, Et) && p(this, pt) !== void 0 && (p(this, Et).call(this, p(this, pt)), m(this, be, void 0), m(this, Zt, void 0), m(this, Et, void 0), m(this, gt, void 0)), p(this, ve) || this.destroy();
}, rp = function() {
  var t, i;
  if (p(this, gt)) {
    const o = this._retrieveHost();
    (i = p(this, gt)) == null || i.call(this, `Context could not be found. (Context Alias: ${p(this, ge)} with API Alias: ${p(this, wi)}). Controller is hosted on ${((t = o == null ? void 0 : o.parentNode) == null ? void 0 : t.nodeName) ?? "Not attached node"} > ${o == null ? void 0 : o.nodeName}`), m(this, be, void 0), m(this, Zt, void 0), m(this, Et, void 0), m(this, gt, void 0);
  }
  p(this, ve) || this.destroy();
}, Dt = new WeakMap(), op = function(t) {
  $t(this, et, Cl).call(this), m(this, Dt, t ?? window), $t(this, et, kl).call(this);
}, kl = function() {
  p(this, Dt).addEventListener(_n, p(this, ar)), p(this, Dt).addEventListener(yn, p(this, lr));
}, Cl = function() {
  p(this, Dt) && (p(this, Dt).removeEventListener(_n, p(this, ar)), p(this, Dt).removeEventListener(yn, p(this, lr)));
}, ar = new WeakMap(), lr = new WeakMap(), El = function() {
  var t;
  p(this, pt) !== void 0 && (m(this, pt, void 0), (t = p(this, ve)) == null || t.call(this, void 0));
};
var Cn, ur;
class Dc extends M1 {
  constructor(i, o, r) {
    super(() => i.getHostElement(), o, r);
    E(this, Cn, Symbol());
    E(this, ur);
    m(this, ur, i), i.addUmbController(this);
  }
  get controllerAlias() {
    return p(this, Cn);
  }
  destroy() {
    var i;
    (i = p(this, ur)) == null || i.removeUmbController(this), m(this, ur, void 0), super.destroy();
  }
}
Cn = new WeakMap(), ur = new WeakMap();
var mt, me, Wo, _e, cr, hr;
class T1 {
  /**
   * Creates an instance of UmbContextProvider.
   * @param {EventTarget} eventTarget - the host element for this context provider
   * @param {string | UmbContextToken} contextIdentifier - a string or token to identify the context
   * @param {*} instance - the instance to provide
   * @memberof UmbContextProvider
   */
  constructor(t, i, o) {
    E(this, mt);
    E(this, me);
    E(this, Wo);
    E(this, _e);
    /**
     * @private
     * @param {UmbContextRequestEvent} event - the event to handle
     * @memberof UmbContextProvider
     */
    E(this, cr, (t) => {
      t.contextAlias === p(this, me) && (t.stopAtContextMatch && t.stopPropagation(), p(this, Wo) === t.apiAlias && t.callback(p(this, _e)) && t.stopImmediatePropagation());
    });
    /**
     * @private
     * @param {UmbContextRequestEvent} event - the event to append awareness to
     * @memberof UmbContextProvider
     */
    E(this, hr, (t) => {
      t.instances || (t.instances = /* @__PURE__ */ new Map()), t.instances.has(p(this, me)) || t.instances.set(p(this, me), p(this, _e));
    });
    m(this, mt, t);
    const r = i.toString().split("#");
    m(this, me, r[0]), m(this, Wo, r[1] ?? "default"), m(this, _e, o);
  }
  /**
   * Method to enable comparing the context providers by the instance they provide.
   * Note this method should have a unique name for the provider controller, for it not to be confused with a consumer.
   * @returns {*}
   */
  providerInstance() {
    return p(this, _e);
  }
  /**
   * @memberof UmbContextProvider
   */
  hostConnected() {
    p(this, mt).addEventListener(Ms, p(this, cr)), p(this, mt).addEventListener(ya, p(this, hr)), p(this, mt).dispatchEvent(new bu(p(this, me)));
  }
  /**
   * @memberof UmbContextProvider
   */
  hostDisconnected() {
    p(this, mt).removeEventListener(Ms, p(this, cr)), p(this, mt).removeEventListener(ya, p(this, hr)), p(this, mt).dispatchEvent(new U1(p(this, me), p(this, _e)));
  }
  destroy() {
    var t, i;
    (t = p(this, mt)) == null || t.removeEventListener(Ms, p(this, cr)), (i = p(this, mt)) == null || i.removeEventListener(ya, p(this, hr)), m(this, _e, void 0), m(this, mt, void 0);
  }
}
mt = new WeakMap(), me = new WeakMap(), Wo = new WeakMap(), _e = new WeakMap(), cr = new WeakMap(), hr = new WeakMap();
var $i, Go;
class D1 extends T1 {
  constructor(i, o, r) {
    var n, a, u, h;
    super(i.getHostElement(), o, r);
    E(this, $i);
    E(this, Go);
    m(this, $i, i), m(this, Go, o.toString() + "_" + ((n = r.constructor) == null ? void 0 : n.name));
    const s = i.getUmbControllers((f) => f.controllerAlias === this.controllerAlias);
    if (s.length > 0 && ((u = (a = s[0]).providerInstance) == null ? void 0 : u.call(a)) === r)
      throw new Error(`Context API: The context of '${this.controllerAlias}' and instance '${((h = r.constructor) == null ? void 0 : h.name) ?? "unnamed"}' is already provided by another Context Provider Controller.`);
    i.addUmbController(this);
  }
  get controllerAlias() {
    return p(this, Go);
  }
  destroy() {
    if (p(this, $i)) {
      const i = p(this, $i);
      m(this, $i, void 0), i.removeUmbController(this);
    }
    super.destroy();
  }
}
$i = new WeakMap(), Go = new WeakMap();
var ki, ye, Jt;
class L1 {
  constructor(t, i) {
    E(this, ki);
    E(this, ye);
    E(this, Jt);
    m(this, ki, t), i && (m(this, ye, i), m(this, Jt, t.subscribe(i)));
  }
  /**
   * provides a promise which is resolved ones the observer got a value that is not undefined.
   * Notice this promise will resolve immediately if the Observable holds an empty array or empty string.
   *
   */
  asPromise() {
    return new Promise((t) => {
      let i = !0, o = !1;
      const r = p(this, ki).subscribe((s) => {
        s !== void 0 && (i ? o = !0 : (r.unsubscribe(), p(this, ye) || this.destroy()), t(s));
      });
      i = !1, o && (r.unsubscribe(), p(this, ye) || this.destroy());
    });
  }
  hostConnected() {
    var t;
    (t = p(this, Jt)) != null && t.closed && p(this, ye) && m(this, Jt, p(this, ki).subscribe(p(this, ye)));
  }
  hostDisconnected() {
    var t;
    (t = p(this, Jt)) == null || t.unsubscribe();
  }
  destroy() {
    p(this, Jt) && (p(this, Jt).unsubscribe(), m(this, ye, void 0), m(this, Jt, void 0)), m(this, ki, void 0);
  }
}
ki = new WeakMap(), ye = new WeakMap(), Jt = new WeakMap();
var dr, qo;
class N1 extends L1 {
  constructor(i, o, r, s) {
    super(o, r);
    E(this, dr);
    E(this, qo);
    m(this, dr, i), m(this, qo, s), i.addUmbController(this);
  }
  get controllerAlias() {
    return p(this, qo);
  }
  destroy() {
    var i;
    (i = p(this, dr)) == null || i.removeUmbController(this), m(this, dr, void 0), super.destroy();
  }
}
dr = new WeakMap(), qo = new WeakMap();
var Pl = function(e, t) {
  return Pl = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, o) {
    i.__proto__ = o;
  } || function(i, o) {
    for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (i[r] = o[r]);
  }, Pl(e, t);
};
function ae(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Pl(e, t);
  function i() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i());
}
function Sl(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, i = t && e[t], o = 0;
  if (i) return i.call(e);
  if (e && typeof e.length == "number") return { next: function() {
    return e && o >= e.length && (e = void 0), { value: e && e[o++], done: !e };
  } };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function wn(e, t) {
  var i = typeof Symbol == "function" && e[Symbol.iterator];
  if (!i) return e;
  var o = i.call(e), r, s = [], n;
  try {
    for (; (t === void 0 || t-- > 0) && !(r = o.next()).done; ) s.push(r.value);
  } catch (a) {
    n = { error: a };
  } finally {
    try {
      r && !r.done && (i = o.return) && i.call(o);
    } finally {
      if (n) throw n.error;
    }
  }
  return s;
}
function xn(e, t, i) {
  if (arguments.length === 2) for (var o = 0, r = t.length, s; o < r; o++) (s || !(o in t)) && (s || (s = Array.prototype.slice.call(t, 0, o)), s[o] = t[o]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function Ce(e) {
  return typeof e == "function";
}
function mu(e) {
  var t = function(o) {
    Error.call(o), o.stack = new Error().stack;
  }, i = e(t);
  return i.prototype = Object.create(Error.prototype), i.prototype.constructor = i, i;
}
var wa = mu(function(e) {
  return function(t) {
    e(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(i, o) {
      return o + 1 + ") " + i.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function $n(e, t) {
  if (e) {
    var i = e.indexOf(t);
    0 <= i && e.splice(i, 1);
  }
}
var Jo = function() {
  function e(t) {
    this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var t, i, o, r, s;
    if (!this.closed) {
      this.closed = !0;
      var n = this._parentage;
      if (n) if (this._parentage = null, Array.isArray(n)) try {
        for (var a = Sl(n), u = a.next(); !u.done; u = a.next()) {
          var h = u.value;
          h.remove(this);
        }
      } catch (O) {
        t = { error: O };
      } finally {
        try {
          u && !u.done && (i = a.return) && i.call(a);
        } finally {
          if (t) throw t.error;
        }
      }
      else n.remove(this);
      var f = this.initialTeardown;
      if (Ce(f)) try {
        f();
      } catch (O) {
        s = O instanceof wa ? O.errors : [O];
      }
      var d = this._finalizers;
      if (d) {
        this._finalizers = null;
        try {
          for (var x = Sl(d), v = x.next(); !v.done; v = x.next()) {
            var $ = v.value;
            try {
              Lc($);
            } catch (O) {
              s = s ?? [], O instanceof wa ? s = xn(xn([], wn(s)), wn(O.errors)) : s.push(O);
            }
          }
        } catch (O) {
          o = { error: O };
        } finally {
          try {
            v && !v.done && (r = x.return) && r.call(x);
          } finally {
            if (o) throw o.error;
          }
        }
      }
      if (s) throw new wa(s);
    }
  }, e.prototype.add = function(t) {
    var i;
    if (t && t !== this) if (this.closed) Lc(t);
    else {
      if (t instanceof e) {
        if (t.closed || t._hasParent(this)) return;
        t._addParent(this);
      }
      (this._finalizers = (i = this._finalizers) !== null && i !== void 0 ? i : []).push(t);
    }
  }, e.prototype._hasParent = function(t) {
    var i = this._parentage;
    return i === t || Array.isArray(i) && i.includes(t);
  }, e.prototype._addParent = function(t) {
    var i = this._parentage;
    this._parentage = Array.isArray(i) ? (i.push(t), i) : i ? [i, t] : t;
  }, e.prototype._removeParent = function(t) {
    var i = this._parentage;
    i === t ? this._parentage = null : Array.isArray(i) && $n(i, t);
  }, e.prototype.remove = function(t) {
    var i = this._finalizers;
    i && $n(i, t), t instanceof e && t._removeParent(this);
  }, e.EMPTY = function() {
    var t = new e();
    return t.closed = !0, t;
  }(), e;
}(), sp = Jo.EMPTY;
function np(e) {
  return e instanceof Jo || e && "closed" in e && Ce(e.remove) && Ce(e.add) && Ce(e.unsubscribe);
}
function Lc(e) {
  Ce(e) ? e() : e.unsubscribe();
}
var H1 = { Promise: void 0 }, B1 = { setTimeout: function(e, t) {
  for (var i = [], o = 2; o < arguments.length; o++) i[o - 2] = arguments[o];
  return setTimeout.apply(void 0, xn([e, t], wn(i)));
}, clearTimeout: function(e) {
  return clearTimeout(e);
}, delegate: void 0 };
function V1(e) {
  B1.setTimeout(function() {
    throw e;
  });
}
function Nc() {
}
function Ts(e) {
  e();
}
var _u = function(e) {
  ae(t, e);
  function t(i) {
    var o = e.call(this) || this;
    return o.isStopped = !1, i ? (o.destination = i, np(i) && i.add(o)) : o.destination = F1, o;
  }
  return t.create = function(i, o, r) {
    return new Al(i, o, r);
  }, t.prototype.next = function(i) {
    this.isStopped || this._next(i);
  }, t.prototype.error = function(i) {
    this.isStopped || (this.isStopped = !0, this._error(i));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
  }, t.prototype._next = function(i) {
    this.destination.next(i);
  }, t.prototype._error = function(i) {
    try {
      this.destination.error(i);
    } finally {
      this.unsubscribe();
    }
  }, t.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, t;
}(Jo), j1 = function() {
  function e(t) {
    this.partialObserver = t;
  }
  return e.prototype.next = function(t) {
    var i = this.partialObserver;
    if (i.next) try {
      i.next(t);
    } catch (o) {
      ps(o);
    }
  }, e.prototype.error = function(t) {
    var i = this.partialObserver;
    if (i.error) try {
      i.error(t);
    } catch (o) {
      ps(o);
    }
    else ps(t);
  }, e.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete) try {
      t.complete();
    } catch (i) {
      ps(i);
    }
  }, e;
}(), Al = function(e) {
  ae(t, e);
  function t(i, o, r) {
    var s = e.call(this) || this, n;
    return Ce(i) || !i ? n = { next: i ?? void 0, error: o ?? void 0, complete: r ?? void 0 } : n = i, s.destination = new j1(n), s;
  }
  return t;
}(_u);
function ps(e) {
  V1(e);
}
function R1(e) {
  throw e;
}
var F1 = { closed: !0, next: Nc, error: R1, complete: Nc }, W1 = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function G1(e) {
  return e;
}
function q1(e) {
  return e.length === 0 ? G1 : e.length === 1 ? e[0] : function(t) {
    return e.reduce(function(i, o) {
      return o(i);
    }, t);
  };
}
var Hc = function() {
  function e(t) {
    t && (this._subscribe = t);
  }
  return e.prototype.lift = function(t) {
    var i = new e();
    return i.source = this, i.operator = t, i;
  }, e.prototype.subscribe = function(t, i, o) {
    var r = this, s = Y1(t) ? t : new Al(t, i, o);
    return Ts(function() {
      var n = r, a = n.operator, u = n.source;
      s.add(a ? a.call(s, u) : u ? r._subscribe(s) : r._trySubscribe(s));
    }), s;
  }, e.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (i) {
      t.error(i);
    }
  }, e.prototype.forEach = function(t, i) {
    var o = this;
    return i = Bc(i), new i(function(r, s) {
      var n = new Al({ next: function(a) {
        try {
          t(a);
        } catch (u) {
          s(u), n.unsubscribe();
        }
      }, error: s, complete: r });
      o.subscribe(n);
    });
  }, e.prototype._subscribe = function(t) {
    var i;
    return (i = this.source) === null || i === void 0 ? void 0 : i.subscribe(t);
  }, e.prototype[W1] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
    return q1(t)(this);
  }, e.prototype.toPromise = function(t) {
    var i = this;
    return t = Bc(t), new t(function(o, r) {
      var s;
      i.subscribe(function(n) {
        return s = n;
      }, function(n) {
        return r(n);
      }, function() {
        return o(s);
      });
    });
  }, e.create = function(t) {
    return new e(t);
  }, e;
}();
function Bc(e) {
  var t;
  return (t = e ?? H1.Promise) !== null && t !== void 0 ? t : Promise;
}
function K1(e) {
  return e && Ce(e.next) && Ce(e.error) && Ce(e.complete);
}
function Y1(e) {
  return e && e instanceof _u || K1(e) && np(e);
}
(function(e) {
  ae(t, e);
  function t(i, o, r, s, n, a) {
    var u = e.call(this, i) || this;
    return u.onFinalize = n, u.shouldUnsubscribe = a, u._next = o ? function(h) {
      try {
        o(h);
      } catch (f) {
        i.error(f);
      }
    } : e.prototype._next, u._error = s ? function(h) {
      try {
        s(h);
      } catch (f) {
        i.error(f);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._error, u._complete = r ? function() {
      try {
        r();
      } catch (h) {
        i.error(h);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._complete, u;
  }
  return t.prototype.unsubscribe = function() {
    var i;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var o = this.closed;
      e.prototype.unsubscribe.call(this), !o && ((i = this.onFinalize) === null || i === void 0 || i.call(this));
    }
  }, t;
})(_u);
var X1 = mu(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), yu = function(e) {
  ae(t, e);
  function t() {
    var i = e.call(this) || this;
    return i.closed = !1, i.currentObservers = null, i.observers = [], i.isStopped = !1, i.hasError = !1, i.thrownError = null, i;
  }
  return t.prototype.lift = function(i) {
    var o = new Vc(this, this);
    return o.operator = i, o;
  }, t.prototype._throwIfClosed = function() {
    if (this.closed) throw new X1();
  }, t.prototype.next = function(i) {
    var o = this;
    Ts(function() {
      var r, s;
      if (o._throwIfClosed(), !o.isStopped) {
        o.currentObservers || (o.currentObservers = Array.from(o.observers));
        try {
          for (var n = Sl(o.currentObservers), a = n.next(); !a.done; a = n.next()) {
            var u = a.value;
            u.next(i);
          }
        } catch (h) {
          r = { error: h };
        } finally {
          try {
            a && !a.done && (s = n.return) && s.call(n);
          } finally {
            if (r) throw r.error;
          }
        }
      }
    });
  }, t.prototype.error = function(i) {
    var o = this;
    Ts(function() {
      if (o._throwIfClosed(), !o.isStopped) {
        o.hasError = o.isStopped = !0, o.thrownError = i;
        for (var r = o.observers; r.length; ) r.shift().error(i);
      }
    });
  }, t.prototype.complete = function() {
    var i = this;
    Ts(function() {
      if (i._throwIfClosed(), !i.isStopped) {
        i.isStopped = !0;
        for (var o = i.observers; o.length; ) o.shift().complete();
      }
    });
  }, t.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(t.prototype, "observed", { get: function() {
    var i;
    return ((i = this.observers) === null || i === void 0 ? void 0 : i.length) > 0;
  }, enumerable: !1, configurable: !0 }), t.prototype._trySubscribe = function(i) {
    return this._throwIfClosed(), e.prototype._trySubscribe.call(this, i);
  }, t.prototype._subscribe = function(i) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(i), this._innerSubscribe(i);
  }, t.prototype._innerSubscribe = function(i) {
    var o = this, r = this, s = r.hasError, n = r.isStopped, a = r.observers;
    return s || n ? sp : (this.currentObservers = null, a.push(i), new Jo(function() {
      o.currentObservers = null, $n(a, i);
    }));
  }, t.prototype._checkFinalizedStatuses = function(i) {
    var o = this, r = o.hasError, s = o.thrownError, n = o.isStopped;
    r ? i.error(s) : n && i.complete();
  }, t.prototype.asObservable = function() {
    var i = new Hc();
    return i.source = this, i;
  }, t.create = function(i, o) {
    return new Vc(i, o);
  }, t;
}(Hc), Vc = function(e) {
  ae(t, e);
  function t(i, o) {
    var r = e.call(this) || this;
    return r.destination = i, r.source = o, r;
  }
  return t.prototype.next = function(i) {
    var o, r;
    (r = (o = this.destination) === null || o === void 0 ? void 0 : o.next) === null || r === void 0 || r.call(o, i);
  }, t.prototype.error = function(i) {
    var o, r;
    (r = (o = this.destination) === null || o === void 0 ? void 0 : o.error) === null || r === void 0 || r.call(o, i);
  }, t.prototype.complete = function() {
    var i, o;
    (o = (i = this.destination) === null || i === void 0 ? void 0 : i.complete) === null || o === void 0 || o.call(i);
  }, t.prototype._subscribe = function(i) {
    var o, r;
    return (r = (o = this.source) === null || o === void 0 ? void 0 : o.subscribe(i)) !== null && r !== void 0 ? r : sp;
  }, t;
}(yu);
(function(e) {
  ae(t, e);
  function t(i) {
    var o = e.call(this) || this;
    return o._value = i, o;
  }
  return Object.defineProperty(t.prototype, "value", { get: function() {
    return this.getValue();
  }, enumerable: !1, configurable: !0 }), t.prototype._subscribe = function(i) {
    var o = e.prototype._subscribe.call(this, i);
    return !o.closed && i.next(this._value), o;
  }, t.prototype.getValue = function() {
    var i = this, o = i.hasError, r = i.thrownError, s = i._value;
    if (o) throw r;
    return this._throwIfClosed(), s;
  }, t.prototype.next = function(i) {
    e.prototype.next.call(this, this._value = i);
  }, t;
})(yu);
var wu = { now: function() {
  return (wu.delegate || Date).now();
}, delegate: void 0 };
(function(e) {
  ae(t, e);
  function t(i, o, r) {
    i === void 0 && (i = 1 / 0), o === void 0 && (o = 1 / 0), r === void 0 && (r = wu);
    var s = e.call(this) || this;
    return s._bufferSize = i, s._windowTime = o, s._timestampProvider = r, s._buffer = [], s._infiniteTimeWindow = !0, s._infiniteTimeWindow = o === 1 / 0, s._bufferSize = Math.max(1, i), s._windowTime = Math.max(1, o), s;
  }
  return t.prototype.next = function(i) {
    var o = this, r = o.isStopped, s = o._buffer, n = o._infiniteTimeWindow, a = o._timestampProvider, u = o._windowTime;
    r || (s.push(i), !n && s.push(a.now() + u)), this._trimBuffer(), e.prototype.next.call(this, i);
  }, t.prototype._subscribe = function(i) {
    this._throwIfClosed(), this._trimBuffer();
    for (var o = this._innerSubscribe(i), r = this, s = r._infiniteTimeWindow, n = r._buffer, a = n.slice(), u = 0; u < a.length && !i.closed; u += s ? 1 : 2) i.next(a[u]);
    return this._checkFinalizedStatuses(i), o;
  }, t.prototype._trimBuffer = function() {
    var i = this, o = i._bufferSize, r = i._timestampProvider, s = i._buffer, n = i._infiniteTimeWindow, a = (n ? 1 : 2) * o;
    if (o < 1 / 0 && a < s.length && s.splice(0, s.length - a), !n) {
      for (var u = r.now(), h = 0, f = 1; f < s.length && s[f] <= u; f += 2) h = f;
      h && s.splice(0, h + 1);
    }
  }, t;
})(yu);
var Z1 = function(e) {
  ae(t, e);
  function t(i, o) {
    return e.call(this) || this;
  }
  return t.prototype.schedule = function(i, o) {
    return this;
  }, t;
}(Jo), jc = { setInterval: function(e, t) {
  for (var i = [], o = 2; o < arguments.length; o++) i[o - 2] = arguments[o];
  return setInterval.apply(void 0, xn([e, t], wn(i)));
}, clearInterval: function(e) {
  return clearInterval(e);
}, delegate: void 0 }, J1 = function(e) {
  ae(t, e);
  function t(i, o) {
    var r = e.call(this, i, o) || this;
    return r.scheduler = i, r.work = o, r.pending = !1, r;
  }
  return t.prototype.schedule = function(i, o) {
    var r;
    if (o === void 0 && (o = 0), this.closed) return this;
    this.state = i;
    var s = this.id, n = this.scheduler;
    return s != null && (this.id = this.recycleAsyncId(n, s, o)), this.pending = !0, this.delay = o, this.id = (r = this.id) !== null && r !== void 0 ? r : this.requestAsyncId(n, this.id, o), this;
  }, t.prototype.requestAsyncId = function(i, o, r) {
    return r === void 0 && (r = 0), jc.setInterval(i.flush.bind(i, this), r);
  }, t.prototype.recycleAsyncId = function(i, o, r) {
    if (r === void 0 && (r = 0), r != null && this.delay === r && this.pending === !1) return o;
    o != null && jc.clearInterval(o);
  }, t.prototype.execute = function(i, o) {
    if (this.closed) return new Error("executing a cancelled action");
    this.pending = !1;
    var r = this._execute(i, o);
    if (r) return r;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, t.prototype._execute = function(i, o) {
    var r = !1, s;
    try {
      this.work(i);
    } catch (n) {
      r = !0, s = n || new Error("Scheduled action threw falsy error");
    }
    if (r) return this.unsubscribe(), s;
  }, t.prototype.unsubscribe = function() {
    if (!this.closed) {
      var i = this, o = i.id, r = i.scheduler, s = r.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, $n(s, this), o != null && (this.id = this.recycleAsyncId(r, o, null)), this.delay = null, e.prototype.unsubscribe.call(this);
    }
  }, t;
}(Z1), Rc = function() {
  function e(t, i) {
    i === void 0 && (i = e.now), this.schedulerActionCtor = t, this.now = i;
  }
  return e.prototype.schedule = function(t, i, o) {
    return i === void 0 && (i = 0), new this.schedulerActionCtor(this, t).schedule(o, i);
  }, e.now = wu.now, e;
}(), Q1 = function(e) {
  ae(t, e);
  function t(i, o) {
    o === void 0 && (o = Rc.now);
    var r = e.call(this, i, o) || this;
    return r.actions = [], r._active = !1, r;
  }
  return t.prototype.flush = function(i) {
    var o = this.actions;
    if (this._active) {
      o.push(i);
      return;
    }
    var r;
    this._active = !0;
    do
      if (r = i.execute(i.state, i.delay)) break;
    while (i = o.shift());
    if (this._active = !1, r) {
      for (; i = o.shift(); ) i.unsubscribe();
      throw r;
    }
  }, t;
}(Rc);
new Q1(J1);
mu(function(e) {
  return function() {
    e(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function t_(e) {
  let t = 0, i = 0;
  const o = e.length;
  for (; i < o; )
    t = (t << 5) - t + e.charCodeAt(i++), t |= 0;
  return t;
}
const e_ = (e) => {
  var i;
  class t extends O1(e) {
    constructor() {
      super(...arguments);
      E(this, i);
    }
    get localize() {
      return p(this, i) ?? m(this, i, new S1(this));
    }
    observe(s, n, a) {
      if (a === void 0 && n ? a = t_(n.toString()) : a === null && (a = void 0), s)
        return new N1(this, s, n, a);
      n == null || n(void 0), this.removeUmbControllerByAlias(a);
    }
    provideContext(s, n) {
      return new D1(this, s, n);
    }
    consumeContext(s, n) {
      return new Dc(this, s, n);
    }
    async getContext(s, n) {
      const a = new Dc(this, s);
      return n && (n.passContextAliasMatches && a.passContextAliasMatches(), n.skipHost && a.skipHost()), a.asPromise(n);
    }
  }
  return i = new WeakMap(), t;
};
var ap = function(e, t, i, o) {
  var r = arguments.length, s = r < 3 ? t : o === null ? o = Object.getOwnPropertyDescriptor(t, i) : o, n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(e, t, i, o);
  else for (var a = e.length - 1; a >= 0; a--) (n = e[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(t, i, s) : n(t, i)) || s);
  return r > 3 && s && Object.defineProperty(t, i, s), s;
};
class xu extends e_(wo) {
  constructor() {
    super(...arguments), this.dir = "", this.lang = "";
  }
}
ap([
  ep()
], xu.prototype, "dir", void 0);
ap([
  ep()
], xu.prototype, "lang", void 0);
var i_ = Object.defineProperty, r_ = Object.getOwnPropertyDescriptor, lp = (e) => {
  throw TypeError(e);
}, Qo = (e, t, i, o) => {
  for (var r = o > 1 ? void 0 : o ? r_(t, i) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (r = (o ? n(t, i, r) : n(r)) || r);
  return o && r && i_(t, i, r), r;
}, o_ = (e, t, i) => t.has(e) || lp("Cannot " + i), s_ = (e, t, i) => t.has(e) ? lp("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), De = (e, t, i) => (o_(e, t, "access private method"), i), qt, $u, up, cp, hp, Ol, dp;
let Ui = class extends xu {
  constructor() {
    super(...arguments), s_(this, qt), this.authService = new r1(), this.tours = [], this.showNewTourForm = !1, this.errorMessage = "", this.isLoading = !1;
  }
  connectedCallback() {
    super.connectedCallback(), De(this, qt, $u).call(this);
  }
  render() {
    return c`
      <div class="uui-text uui-font">
        <uui-modal-container>
          <uui-modal-sidebar size="medium">
            <div class="container uui-font uui-text">
                <div class="header">
                  <h1>uTours Visual Editor</h1>
                  <div class="button-group">
                    <uui-button @click=${De(this, qt, dp)} look="secondary" color="default">
                      <uui-icon name="refresh"></uui-icon>
                      Refresh
                    </uui-button>
                  </div>
                </div>

                ${this.errorMessage ? c`
                  <uui-box color="danger">
                    <p>Error: ${this.errorMessage}</p>
                  </uui-box>
                ` : ""}

                ${this.isLoading ? c`
                  <div class="loading-state">
                    <uui-loader></uui-loader>
                    <p>Loading tours...</p>
                  </div>
                ` : ""}

                <p>Editor loaded successfully! Tours count: ${this.tours.length}</p>

                <div class="tour-list">
                  ${this.tours.length > 0 ? this.tours.map((e) => c`
                        <div class="tour-item">
                          <h2>${e.name}</h2>
                          <button @click="${De(this, qt, cp)}" data-id="${e.id}">Delete</button>
                        </div>
                      `) : this.isLoading ? "" : c`
                        <div class="empty-state">
                          <p>No tours found. Create your first tour!</p>
                        </div>
                      `}
                </div>

                <div class="button-group" style="margin-top: var(--uui-size-space-4);">
                  <uui-button @click=${De(this, qt, Ol)} look="primary">
                    <uui-icon name="${this.showNewTourForm ? "close" : "add"}"></uui-icon>
                    ${this.showNewTourForm ? "Cancel" : "Add New Tour"}
                  </uui-button>
                </div>

                ${this.showNewTourForm ? c`
                  <div class="new-tour-form">
                    <uui-input placeholder="Tour name" label="Tour Name"></uui-input>
                    <div class="button-group" style="margin-top: var(--uui-size-space-3);">
                      <uui-button @click=${De(this, qt, hp)} look="primary">
                        <uui-icon name="check"></uui-icon>
                        Save Tour
                      </uui-button>
                      <uui-button @click=${De(this, qt, Ol)} look="secondary">
                        Cancel
                      </uui-button>
                    </div>
                  </div>
                ` : ""}
            </div>
          </uui-modal-sidebar>
        </uui-modal-container>
      </div>
    `;
  }
};
qt = /* @__PURE__ */ new WeakSet();
$u = async function() {
  try {
    if (!this.authService.isTokenValid()) {
      this.errorMessage = "Please log in to the Umbraco backoffice to use this feature.";
      return;
    }
    if (this.authService.shouldRefreshToken() && !await this.authService.refreshToken()) {
      this.errorMessage = "Your session has expired. Please log in again.";
      return;
    }
    await De(this, qt, up).call(this);
  } catch (e) {
    console.error("Error during authentication check:", e), this.errorMessage = "Failed to authenticate. Please try refreshing the page.";
  }
};
up = async function() {
  this.isLoading = !0, this.errorMessage = "";
  try {
    if (!this.authService.isTokenValid())
      throw new Error("User is not authenticated. Please log in to the Umbraco backoffice.");
    const e = await this.authService.authenticatedFetch("/umbraco/management/api/v1/utours");
    if (!e.ok)
      throw new Error(`Failed to fetch tours: ${e.status} ${e.statusText}`);
    const t = await e.json();
    this.tours = t || [];
  } catch (e) {
    console.error("Error fetching tours:", e), this.errorMessage = e instanceof Error ? e.message : "An unknown error occurred", this.tours = [];
  } finally {
    this.isLoading = !1;
  }
};
cp = async function(e) {
  const i = e.currentTarget.getAttribute("data-id");
  if (!i) {
    console.error("No tour ID found");
    return;
  }
  try {
    if (!this.authService.isTokenValid())
      throw new Error("User is not authenticated. Please log in to the Umbraco backoffice.");
    const o = await this.authService.authenticatedFetch(`/umbraco/management/api/v1/utours/${i}`, {
      method: "DELETE"
    });
    if (o.status === 200)
      this.tours = this.tours.filter((r) => r.id !== i);
    else
      throw new Error(`Failed to delete tour: ${o.status} ${o.statusText}`);
  } catch (o) {
    this.errorMessage = o instanceof Error ? o.message : "An unknown error occurred while deleting the tour";
  }
};
hp = async function() {
  var i;
  this.errorMessage = "";
  const e = (i = this.shadowRoot) == null ? void 0 : i.querySelector(".new-tour-form uui-input"), t = e == null ? void 0 : e.value;
  if (!t) {
    this.errorMessage = "Tour name is required";
    return;
  }
  try {
    if (!this.authService.isTokenValid())
      throw new Error("User is not authenticated. Please log in to the Umbraco backoffice.");
    const o = await this.authService.authenticatedFetch("/umbraco/management/api/v1/utours", {
      method: "POST",
      body: JSON.stringify(t)
    });
    if (!o.ok)
      throw new Error(`Failed to save tour: ${o.status} ${o.statusText}`);
    const r = await o.json();
    this.tours = [...this.tours, r], this.showNewTourForm = !1, e && (e.value = "");
  } catch (o) {
    console.error("Error saving new tour:", o), this.errorMessage = o instanceof Error ? o.message : "An unknown error occurred";
  }
};
Ol = function() {
  this.showNewTourForm = !this.showNewTourForm;
};
dp = async function() {
  await De(this, qt, $u).call(this);
};
Ui.styles = [
  Or,
  b`
      .container {
        background-color: var(--uui-color-surface);
        padding: var(--uui-size-space-4);
        font-family: var(--uui-font-family);
        color: var(--uui-color-text);
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--uui-size-space-4);
        padding-bottom: var(--uui-size-space-3);
        border-bottom: 1px solid var(--uui-color-border);
      }

      .header h1 {
        margin: 0;
        font-size: var(--uui-type-h2-size);
        font-weight: var(--uui-font-weight-bold);
        color: var(--uui-color-text-headline);
      }

      .new-tour-form {
        margin-top: var(--uui-size-space-4);
        padding: var(--uui-size-space-4);
        border: 1px solid var(--uui-color-border);
        border-radius: var(--uui-border-radius);
        background-color: var(--uui-color-surface-alt);
        box-shadow: var(--uui-shadow-depth-1);
      }

      .new-tour-form uui-input {
        width: 100%;
        margin-bottom: var(--uui-size-space-3);
      }

      .new-tour-form uui-button {
        margin-left: var(--uui-size-space-2);
      }

      .button-group {
        display: flex;
        gap: var(--uui-size-space-2);
        align-items: center;
      }

      .tour-list {
        margin-top: var(--uui-size-space-4);
      }

      .tour-item {
        padding: var(--uui-size-space-3);
        margin-bottom: var(--uui-size-space-2);
        border: 1px solid var(--uui-color-border);
        border-radius: var(--uui-border-radius);
        background-color: var(--uui-color-surface);
        transition: var(--uui-transition-default);
      }

      .tour-item:hover {
        background-color: var(--uui-color-surface-emphasis);
        border-color: var(--uui-color-border-emphasis);
      }

      .tour-item h2 {
        margin: 0 0 var(--uui-size-space-2) 0;
        font-size: var(--uui-type-h5-size);
        color: var(--uui-color-text-headline);
      }

      .loading-state {
        display: flex;
        align-items: center;
        gap: var(--uui-size-space-2);
        padding: var(--uui-size-space-3);
        color: var(--uui-color-text-alt);
      }

      .empty-state {
        text-align: center;
        padding: var(--uui-size-space-6);
        color: var(--uui-color-text-alt);
      }

      uui-box {
        margin-bottom: var(--uui-size-space-3);
      }
  `
];
Qo([
  w()
], Ui.prototype, "tours", 2);
Qo([
  w()
], Ui.prototype, "showNewTourForm", 2);
Qo([
  w()
], Ui.prototype, "errorMessage", 2);
Qo([
  w()
], Ui.prototype, "isLoading", 2);
Ui = Qo([
  Up("utours-editor")
], Ui);
export {
  Ui as UToursEditor
};
//# sourceMappingURL=utours-editor.es.js.map

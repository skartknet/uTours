(function(U,j){typeof exports=="object"&&typeof module<"u"?j(exports):typeof define=="function"&&define.amd?define(["exports"],j):(U=typeof globalThis<"u"?globalThis:U||self,j(U.UToursEditor={}))})(this,function(U){"use strict";var np=U=>{throw TypeError(U)};var _u=(U,j,nt)=>j.has(U)||np("Cannot "+nt);var p=(U,j,nt)=>(_u(U,j,"read from private field"),nt?nt.call(U):j.get(U)),S=(U,j,nt)=>j.has(U)?np("Cannot add the same private member more than once"):j instanceof WeakSet?j.add(U):j.set(U,nt),m=(U,j,nt,Bi)=>(_u(U,j,"write to private field"),Bi?Bi.call(U,nt):j.set(U,nt),nt),Lt=(U,j,nt)=>(_u(U,j,"access private method"),nt);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var rp,op,Yo,li,se,Xo,Zo,Vn,cp,Hr,Ee,ne,ae,Jo,Br,Pe,Se,le,Dt,kt,_t,Ae,zi,Mi,ot,yu,hp,Wt,dp,wu,xu,Vr,jr,$u,jn,Rr,Ct,Oe,Qo,Ie,Fr,Wr,Ti,ts,Di,Ue,ue,Gr,es;const j=globalThis,nt=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Bi=Symbol(),ku=new WeakMap;let Cu=class{constructor(t,i,o){if(this._$cssResult$=!0,o!==Bi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(nt&&t===void 0){const o=i!==void 0&&i.length===1;o&&(t=ku.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&ku.set(i,t))}return t}toString(){return this.cssText}};const Me=e=>new Cu(typeof e=="string"?e:e+"",void 0,Bi),b=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((o,r,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[s+1],e[0]);return new Cu(i,e,Bi)},pp=(e,t)=>{if(nt)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const o=document.createElement("style"),r=j.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=i.cssText,e.appendChild(o)}},Eu=nt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const o of t.cssRules)i+=o.cssText;return Me(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:fp,defineProperty:vp,getOwnPropertyDescriptor:bp,getOwnPropertyNames:gp,getOwnPropertySymbols:mp,getPrototypeOf:_p}=Object,Te=globalThis,Pu=Te.trustedTypes,yp=Pu?Pu.emptyScript:"",qn=Te.reactiveElementPolyfillSupport,Yr=(e,t)=>e,rs={toAttribute(e,t){switch(t){case Boolean:e=e?yp:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Kn=(e,t)=>!fp(e,t),Su={attribute:!0,type:String,converter:rs,reflect:!1,useDefault:!1,hasChanged:Kn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Te.litPropertyMetadata??(Te.litPropertyMetadata=new WeakMap);let Vi=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=Su){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(t,i),!i.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(t,o,i);r!==void 0&&vp(this.prototype,t,r)}}static getPropertyDescriptor(t,i,o){const{get:r,set:s}=bp(this.prototype,t)??{get(){return this[i]},set(n){this[i]=n}};return{get:r,set(n){const a=r==null?void 0:r.call(this);s==null||s.call(this,n),this.requestUpdate(t,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Su}static _$Ei(){if(this.hasOwnProperty(Yr("elementProperties")))return;const t=_p(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Yr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Yr("properties"))){const i=this.properties,o=[...gp(i),...mp(i)];for(const r of o)this.createProperty(r,i[r])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[o,r]of i)this.elementProperties.set(o,r)}this._$Eh=new Map;for(const[i,o]of this.elementProperties){const r=this._$Eu(i,o);r!==void 0&&this._$Eh.set(r,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const r of o)i.unshift(Eu(r))}else t!==void 0&&i.push(Eu(t));return i}static _$Eu(t,i){const o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$EO)==null||i.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const o of i.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pp(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var o;return(o=i.hostConnected)==null?void 0:o.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(i=>{var o;return(o=i.hostDisconnected)==null?void 0:o.call(i)})}attributeChangedCallback(t,i,o){this._$AK(t,o)}_$ET(t,i){var s;const o=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,o);if(r!==void 0&&o.reflect===!0){const n=(((s=o.converter)==null?void 0:s.toAttribute)!==void 0?o.converter:rs).toAttribute(i,o.type);this._$Em=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,i){var s,n;const o=this.constructor,r=o._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const a=o.getPropertyOptions(r),u=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:rs;this._$Em=r;const h=u.fromAttribute(i,a.type);this[r]=h??((n=this._$Ej)==null?void 0:n.get(r))??h,this._$Em=null}}requestUpdate(t,i,o){var r;if(t!==void 0){const s=this.constructor,n=this[t];if(o??(o=s.getPropertyOptions(t)),!((o.hasChanged??Kn)(n,i)||o.useDefault&&o.reflect&&n===((r=this._$Ej)==null?void 0:r.get(t))&&!this.hasAttribute(s._$Eu(t,o))))return;this.C(t,i,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,i,{useDefault:o,reflect:r,wrapped:s},n){o&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??i??this[t]),s!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(i=void 0),this._$AL.set(t,i)),r===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,n]of r){const{wrapped:a}=n,u=this[s];a!==!0||this._$AL.has(s)||u===void 0||this.C(s,void 0,n,u)}}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(o=this._$EO)==null||o.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(i)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(i)}willUpdate(t){}_$AE(t){var i;(i=this._$EO)==null||i.forEach(o=>{var r;return(r=o.hostUpdated)==null?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(i=>this._$ET(i,this[i]))),this._$EM()}updated(t){}firstUpdated(t){}};Vi.elementStyles=[],Vi.shadowRootOptions={mode:"open"},Vi[Yr("elementProperties")]=new Map,Vi[Yr("finalized")]=new Map,qn==null||qn({ReactiveElement:Vi}),(Te.reactiveElementVersions??(Te.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xr=globalThis,os=Xr.trustedTypes,Au=os?os.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ou="$lit$",De=`lit$${Math.random().toFixed(9).slice(2)}$`,Iu="?"+De,wp=`<${Iu}>`,ui=document,Zr=()=>ui.createComment(""),Jr=e=>e===null||typeof e!="object"&&typeof e!="function",Yn=Array.isArray,xp=e=>Yn(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Xn=`[ 	
\f\r]`,Qr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Uu=/-->/g,zu=/>/g,ci=RegExp(`>|${Xn}(?:([^\\s"'>=/]+)(${Xn}*=${Xn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mu=/'/g,Tu=/"/g,Du=/^(?:script|style|textarea|title)$/i,Lu=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),c=Lu(1),y=Lu(2),bt=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),Nu=new WeakMap,hi=ui.createTreeWalker(ui,129);function Hu(e,t){if(!Yn(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Au!==void 0?Au.createHTML(t):t}const $p=(e,t)=>{const i=e.length-1,o=[];let r,s=t===2?"<svg>":t===3?"<math>":"",n=Qr;for(let a=0;a<i;a++){const u=e[a];let h,f,d=-1,x=0;for(;x<u.length&&(n.lastIndex=x,f=n.exec(u),f!==null);)x=n.lastIndex,n===Qr?f[1]==="!--"?n=Uu:f[1]!==void 0?n=zu:f[2]!==void 0?(Du.test(f[2])&&(r=RegExp("</"+f[2],"g")),n=ci):f[3]!==void 0&&(n=ci):n===ci?f[0]===">"?(n=r??Qr,d=-1):f[1]===void 0?d=-2:(d=n.lastIndex-f[2].length,h=f[1],n=f[3]===void 0?ci:f[3]==='"'?Tu:Mu):n===Tu||n===Mu?n=ci:n===Uu||n===zu?n=Qr:(n=ci,r=void 0);const v=n===ci&&e[a+1].startsWith("/>")?" ":"";s+=n===Qr?u+wp:d>=0?(o.push(h),u.slice(0,d)+Ou+u.slice(d)+De+v):u+De+(d===-2?a:v)}return[Hu(e,s+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};let Zn=class ap{constructor({strings:t,_$litType$:i},o){let r;this.parts=[];let s=0,n=0;const a=t.length-1,u=this.parts,[h,f]=$p(t,i);if(this.el=ap.createElement(h,o),hi.currentNode=this.el.content,i===2||i===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=hi.nextNode())!==null&&u.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(Ou)){const x=f[n++],v=r.getAttribute(d).split(De),$=/([.?@])?(.*)/.exec(x);u.push({type:1,index:s,name:$[2],strings:v,ctor:$[1]==="."?Cp:$[1]==="?"?Ep:$[1]==="@"?Pp:ss}),r.removeAttribute(d)}else d.startsWith(De)&&(u.push({type:6,index:s}),r.removeAttribute(d));if(Du.test(r.tagName)){const d=r.textContent.split(De),x=d.length-1;if(x>0){r.textContent=os?os.emptyScript:"";for(let v=0;v<x;v++)r.append(d[v],Zr()),hi.nextNode(),u.push({type:2,index:++s});r.append(d[x],Zr())}}}else if(r.nodeType===8)if(r.data===Iu)u.push({type:2,index:s});else{let d=-1;for(;(d=r.data.indexOf(De,d+1))!==-1;)u.push({type:7,index:s}),d+=De.length-1}s++}}static createElement(t,i){const o=ui.createElement("template");return o.innerHTML=t,o}};function ji(e,t,i=e,o){var n,a;if(t===bt)return t;let r=o!==void 0?(n=i._$Co)==null?void 0:n[o]:i._$Cl;const s=Jr(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),s===void 0?r=void 0:(r=new s(e),r._$AT(e,i,o)),o!==void 0?(i._$Co??(i._$Co=[]))[o]=r:i._$Cl=r),r!==void 0&&(t=ji(e,r._$AS(e,t.values),r,o)),t}let kp=class{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:o}=this._$AD,r=((t==null?void 0:t.creationScope)??ui).importNode(i,!0);hi.currentNode=r;let s=hi.nextNode(),n=0,a=0,u=o[0];for(;u!==void 0;){if(n===u.index){let h;u.type===2?h=new Ri(s,s.nextSibling,this,t):u.type===1?h=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(h=new Sp(s,this,t)),this._$AV.push(h),u=o[++a]}n!==(u==null?void 0:u.index)&&(s=hi.nextNode(),n++)}return hi.currentNode=ui,r}p(t){let i=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,i),i+=o.strings.length-2):o._$AI(t[i])),i++}};class Ri{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,o,r){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=o,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=ji(this,t,i),Jr(t)?t===E||t==null||t===""?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==bt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):xp(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==E&&Jr(this._$AH)?this._$AA.nextSibling.data=t:this.T(ui.createTextNode(t)),this._$AH=t}$(t){var s;const{values:i,_$litType$:o}=t,r=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Zn.createElement(Hu(o.h,o.h[0]),this.options)),o);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(i);else{const n=new kp(r,this),a=n.u(this.options);n.p(i),this.T(a),this._$AH=n}}_$AC(t){let i=Nu.get(t.strings);return i===void 0&&Nu.set(t.strings,i=new Zn(t)),i}k(t){Yn(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,r=0;for(const s of t)r===i.length?i.push(o=new Ri(this.O(Zr()),this.O(Zr()),this,this.options)):o=i[r],o._$AI(s),r++;r<i.length&&(this._$AR(o&&o._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,i){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,i);t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}}let ss=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,o,r,s){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=r,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=E}_$AI(t,i=this,o,r){const s=this.strings;let n=!1;if(s===void 0)t=ji(this,t,i,0),n=!Jr(t)||t!==this._$AH&&t!==bt,n&&(this._$AH=t);else{const a=t;let u,h;for(t=s[0],u=0;u<s.length-1;u++)h=ji(this,a[o+u],i,u),h===bt&&(h=this._$AH[u]),n||(n=!Jr(h)||h!==this._$AH[u]),h===E?t=E:t!==E&&(t+=(h??"")+s[u+1]),this._$AH[u]=h}n&&!r&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Cp=class extends ss{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}},Ep=class extends ss{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E)}};class Pp extends ss{constructor(t,i,o,r,s){super(t,i,o,r,s),this.type=5}_$AI(t,i=this){if((t=ji(this,t,i,0)??E)===bt)return;const o=this._$AH,r=t===E&&o!==E||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==E&&(o===E||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}}let Sp=class{constructor(t,i,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){ji(this,t)}};const Ap={I:Ri},Jn=Xr.litHtmlPolyfillSupport;Jn==null||Jn(Zn,Ri),(Xr.litHtmlVersions??(Xr.litHtmlVersions=[])).push("3.3.1");const Op=(e,t,i)=>{const o=(i==null?void 0:i.renderBefore)??t;let r=o._$litPart$;if(r===void 0){const s=(i==null?void 0:i.renderBefore)??null;o._$litPart$=r=new Ri(t.insertBefore(Zr(),s),s,void 0,i??{})}return r._$AI(e),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const di=globalThis;let _=class extends Vi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;const t=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=t.firstChild),t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Op(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return bt}};_._$litElement$=!0,_.finalized=!0,(rp=di.litElementHydrateSupport)==null||rp.call(di,{LitElement:_});const Qn=di.litElementPolyfillSupport;Qn==null||Qn({LitElement:_}),(di.litElementVersions??(di.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ip=e=>(t,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Up={attribute:!0,type:String,converter:rs,reflect:!1,hasChanged:Kn},zp=(e=Up,t,i)=>{const{kind:o,metadata:r}=i;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(i.name,e),o==="accessor"){const{name:n}=i;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,u,e)},init(a){return a!==void 0&&this.C(n,void 0,e,a),a}}}if(o==="setter"){const{name:n}=i;return function(a){const u=this[n];t.call(this,a),this.requestUpdate(n,u,e)}}throw Error("Unsupported decorator location: "+o)};function l(e){return(t,i)=>typeof i=="object"?zp(e,t,i):((o,r,s)=>{const n=r.hasOwnProperty(s);return r.constructor.createProperty(s,o),n?Object.getOwnPropertyDescriptor(r,s):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function w(e){return l({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ta=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function z(e,t){return(i,o,r)=>{const s=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(e))??null};return ta(i,o,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Mp;function Tp(e){return(t,i)=>ta(t,i,{get(){return(this.renderRoot??Mp??(Mp=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Le(e){return(t,i)=>{const{slot:o,selector:r}=e??{},s="slot"+(o?`[name=${o}]`:":not([name])");return ta(t,i,{get(){var u;const n=(u=this.renderRoot)==null?void 0:u.querySelector(s),a=(n==null?void 0:n.assignedElements(e))??[];return r===void 0?a:a.filter(h=>h.matches(r))}})}}var Dp=`.uui-h1,
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
`;const Fi=Me(Dp);b`
  @keyframes uui-blink {
    0%,
    100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }
`,Me("uui-blink 0.9s infinite both"),b`
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
`,Me("pulse 0.8s ease-in-out infinite both"),b`
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
`,Me("uui-horizontal-shake 600ms ease backwards");let Bu=class extends Event{constructor(t,i={}){super(t,{...i}),this.detail=i.detail||{}}},Vu=class extends Bu{constructor(t,i={}){super(t,{bubbles:!0,...i})}};Vu.VALID="valid",Vu.INVALID="invalid";let ju=class extends Bu{constructor(t,i={}){super(t,{bubbles:!0,cancelable:!0,...i})}};ju.SELECTED="selected",ju.DESELECTED="deselected";function g(e,t){return i=>{if(e.indexOf("-")>0===!1){console.error(`${e} is not a valid custom element name. A custom element name should consist of at least two words separated by a hyphen.`);return}window.customElements.get(e)||window.customElements.define(e,i,t)}}var Lp=Object.getOwnPropertyDescriptor,Np=(e,t,i,o)=>{for(var r=o>1?void 0:o?Lp(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let to=class extends _{render(){return c`<slot></slot>`}};to.styles=[b`
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
    `],to=Np([g("uui-button-group")],to);var Hp=Object.getOwnPropertyDescriptor,Bp=(e,t,i,o)=>{for(var r=o>1?void 0:o?Hp(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let ea=class extends to{};ea.styles=[...to.styles,b`
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
    `],ea=Bp([g("uui-action-bar")],ea);var Vp=Object.defineProperty,jp=Object.getOwnPropertyDescriptor,ns=(e,t,i,o)=>{for(var r=o>1?void 0:o?jp(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Vp(t,i,r),r};let Wi=class extends _{constructor(){super(...arguments),this._avatarArray=[],this.limit=0}firstUpdated(){this._setAvatarArray()}_onSlotChange(){this._setAvatarArray(),this._updateAvatarVisibility()}_setAvatarArray(){this._avatarArray=this._avatarNodes?this._avatarNodes:[]}updated(e){e.has("limit")&&this._updateAvatarVisibility()}_updateAvatarVisibility(){this._avatarArray.forEach((e,t)=>{e.style.display=t<this.limit||this.limit===0?"":"none"})}_isLimitExceeded(){return this.limit!==0&&this._avatarArray.length>this.limit}render(){return c`
      <slot @slotchange=${this._onSlotChange}></slot>
      ${this._isLimitExceeded()?c`<small id="overflow-indication">+${this._avatarArray.length-this.limit}</small>`:""}
    `}};Wi.styles=[b`
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
    `],ns([Le({selector:"uui-avatar, [uui-avatar]",flatten:!0})],Wi.prototype,"_avatarNodes",2),ns([w()],Wi.prototype,"_avatarArray",2),ns([l({type:Number,attribute:!0})],Wi.prototype,"limit",2),Wi=ns([g("uui-avatar-group")],Wi);var Rp=Object.defineProperty,Fp=Object.getOwnPropertyDescriptor,Gi=(e,t,i,o)=>{for(var r=o>1?void 0:o?Fp(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Rp(t,i,r),r};let Ne=class extends _{constructor(){super(...arguments),this.overflow=!0,this.imgSrc="",this.imgSrcset="",this.name=""}get _initials(){var e;return((e=this.initials)==null?void 0:e.substring(0,3))||this.createInitials(this.name)}connectedCallback(){super.connectedCallback(),this.name||console.warn(this.tagName+" needs a `name`",this)}createInitials(e){let t="";if(!e)return t;const o=[...e.matchAll(/(?:^|\s)(.)/g)].map(r=>r[1]).join("");return o!=null&&o.length?(t=o[0].charAt(0),o.length>1&&(t+=o[o.length-1].charAt(0)),t.toUpperCase()):t}renderImage(){return c` <img
      src="${this.imgSrc}"
      srcset="${this.imgSrcset}"
      alt="${this._initials}"
      title="${this.name}" />`}render(){return c`
      ${this.imgSrc?this.renderImage():""}
      ${this.imgSrc?"":this._initials}
      <slot></slot>
    `}};Ne.styles=[b`
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
    `],Gi([l({type:Boolean,attribute:!0,reflect:!0})],Ne.prototype,"overflow",2),Gi([l({type:String,attribute:"img-src"})],Ne.prototype,"imgSrc",2),Gi([l({type:String,attribute:"img-srcset"})],Ne.prototype,"imgSrcset",2),Gi([l({type:String,reflect:!0})],Ne.prototype,"name",2),Gi([l({type:String})],Ne.prototype,"initials",2),Ne=Gi([g("uui-avatar")],Ne);var Wp=Object.defineProperty,Gp=Object.getOwnPropertyDescriptor,as=(e,t,i,o)=>{for(var r=o>1?void 0:o?Gp(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Wp(t,i,r),r};let qi=class extends _{constructor(){super(...arguments),this.color="default",this.look="primary",this.attention=!1}render(){return c` <slot></slot> `}};qi.styles=[b`
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
    `],as([l({reflect:!0})],qi.prototype,"color",2),as([l({reflect:!0})],qi.prototype,"look",2),as([l({type:Boolean,reflect:!0})],qi.prototype,"attention",2),qi=as([g("uui-badge")],qi);var qp=Object.defineProperty,Kp=(e,t,i,o)=>{for(var r=void 0,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(t,i,r)||r);return r&&qp(t,i,r),r};const eo=e=>{class t extends e{constructor(){super(...arguments),this.active=!1}}return Kp([l({type:Boolean,reflect:!0})],t.prototype,"active"),t};var Yp=Object.defineProperty,Ru=(e,t,i,o)=>{for(var r=void 0,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(t,i,r)||r);return r&&Yp(t,i,r),r};const Gt=(e,t)=>{class i extends t{constructor(){super(...arguments),this._labelSlotHasContent=!1}firstUpdated(r){super.firstUpdated(r),this.label||console.warn(this.tagName+" needs a `label`",this)}labelSlotChanged(r){this._labelSlotHasContent=r.target.assignedNodes({flatten:!0}).length>0}renderLabel(){return c`
        ${this._labelSlotHasContent===!1?c`<span class="label">${this.label}</span>`:""}
        <slot
          class="label"
          style=${this._labelSlotHasContent?"":"display: none"}
          name=${e||""}
          @slotchange=${this.labelSlotChanged}></slot>
      `}}return Ru([l({type:String})],i.prototype,"label"),Ru([w()],i.prototype,"_labelSlotHasContent"),i};let Xp=class extends Event{constructor(t,i={}){super(t,{...i}),this.detail=i.detail||{}}},Ki=class extends Xp{constructor(t,i={}){super(t,{bubbles:!0,cancelable:!0,...i})}};Ki.SELECTED="selected",Ki.DESELECTED="deselected";var Zp=Object.defineProperty,Jp=Object.getOwnPropertyDescriptor,Fu=e=>{throw TypeError(e)},Wu=(e,t,i,o)=>{for(var r=o>1?void 0:o?Jp(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Zp(t,i,r),r},ia=(e,t,i)=>t.has(e)||Fu("Cannot "+i),at=(e,t,i)=>(ia(e,t,"read from private field"),i?i.call(e):t.get(e)),ls=(e,t,i)=>t.has(e)?Fu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Qp=(e,t,i,o)=>(ia(e,t,"write to private field"),t.set(e,i),i),us=(e,t,i)=>(ia(e,t,"access private method"),i);const Yi=e=>{var t,i,o,r,s,n,a;class u extends e{constructor(...f){super(...f),ls(this,r),this._selectable=!1,this.deselectable=!0,this.selected=!1,ls(this,t,this),ls(this,i,d=>{d.code!=="Space"&&d.code!=="Enter"||d.composedPath().indexOf(at(this,t))===0&&at(this,o).call(this,d)}),ls(this,o,d=>{if((this._selectable||this.deselectable&&this.selected)===!1)return;const v=d.composedPath();at(this,t)===this&&v.some(O=>{const N=O.tagName;return N==="A"||N==="BUTTON"||N==="INPUT"||N==="TEXTAREA"||N==="SELECT"})||v.indexOf(at(this,t))!==-1&&(d.type==="keydown"&&d.preventDefault(),us(this,r,s).call(this))}),this.addEventListener("click",at(this,o)),this.addEventListener("keydown",at(this,i))}get selectable(){return this._selectable}set selectable(f){const d=this._selectable;d!==f&&(this._selectable=f,at(this,t)===this&&at(this,t).setAttribute("tabindex",`${f?"0":"-1"}`),this.requestUpdate("selectable",d))}get selectableTarget(){return at(this,t)}set selectableTarget(f){const d=at(this,t);d.removeAttribute("tabindex"),d.removeEventListener("click",at(this,o)),d.removeEventListener("keydown",at(this,i)),Qp(this,t,f),at(this,t)===this&&at(this,t).setAttribute("tabindex",this._selectable?"0":"-1"),f.addEventListener("click",at(this,o)),f.addEventListener("keydown",at(this,i))}}return t=new WeakMap,i=new WeakMap,o=new WeakMap,r=new WeakSet,s=function(){this.selectable&&(this.deselectable===!1?us(this,r,n).call(this):this.selected?us(this,r,a).call(this):us(this,r,n).call(this))},n=function(){if(!this.selectable)return;const h=new Ki(Ki.SELECTED);this.dispatchEvent(h),!h.defaultPrevented&&(this.selected=!0)},a=function(){if(!this.deselectable)return;const h=new Ki(Ki.DESELECTED);this.dispatchEvent(h),!h.defaultPrevented&&(this.selected=!1)},Wu([l({type:Boolean,reflect:!0})],u.prototype,"selectable",1),Wu([l({type:Boolean,reflect:!0})],u.prototype,"selected",2),u};var tf=Object.defineProperty,ef=Object.getOwnPropertyDescriptor,rf=(e,t,i,o)=>{for(var r=ef(t,i),s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(t,i,r)||r);return r&&tf(t,i,r),r};const cs=e=>{class t extends e{constructor(){super(...arguments),this._selectOnly=!1}get selectOnly(){return this._selectOnly}set selectOnly(o){const r=this._selectOnly;this._selectOnly=o,this.requestUpdate("selectOnly",r)}}return rf([l({type:Boolean,reflect:!0,attribute:"select-only"})],t.prototype,"selectOnly"),t};let Gu=class extends Event{constructor(t,i={}){super(t,{...i}),this.detail=i.detail||{}}},He=class extends Gu{constructor(t,i={}){super(t,{bubbles:!0,...i})}};He.VALID="valid",He.INVALID="invalid";let qu=class extends Gu{constructor(t,i={}){super(t,{bubbles:!0,cancelable:!0,...i})}};qu.SELECTED="selected",qu.DESELECTED="deselected";var of=Object.defineProperty,sf=Object.getOwnPropertyDescriptor,Ku=e=>{throw TypeError(e)},pi=(e,t,i,o)=>{for(var r=o>1?void 0:o?sf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&of(t,i,r),r},ra=(e,t,i)=>t.has(e)||Ku("Cannot "+i),M=(e,t,i)=>(ra(e,t,"read from private field"),i?i.call(e):t.get(e)),fi=(e,t,i)=>t.has(e)?Ku("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),oa=(e,t,i,o)=>(ra(e,t,"write to private field"),t.set(e,i),i),hs=(e,t,i)=>(ra(e,t,"access private method"),i);const nf=["customError","valueMissing","badInput","typeMismatch","patternMismatch","rangeOverflow","rangeUnderflow","stepMismatch","tooLong","tooShort"],qt=(e,t)=>{var i,o,r,s,n,a,u,h,f;class d extends e{constructor(...v){super(...v),fi(this,a),this.name="",fi(this,i,{}),this._pristine=!1,this.required=!1,this.requiredMessage="This field is required",this.error=!1,this.errorMessage="This field is invalid",fi(this,o,t),fi(this,r,null),fi(this,s,[]),fi(this,n,[]),fi(this,f,()=>{this.pristine=!1}),this._internals=this.attachInternals(),this.pristine=!0,this.addValidator("valueMissing",()=>this.requiredMessage,()=>this.hasAttribute("required")&&this.hasValue()===!1),this.addValidator("customError",()=>this.errorMessage,()=>this.error),this.addEventListener("blur",()=>{this.pristine=!1,this.checkValidity()})}get value(){return M(this,o)}set value(v){const $=M(this,o);oa(this,o,v),"ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype&&this._internals.setFormValue(M(this,o)??null),this.requestUpdate("value",$)}set pristine(v){this._pristine!==v&&(this._pristine=v,v?this.setAttribute("pristine",""):this.removeAttribute("pristine"),hs(this,a,h).call(this))}get pristine(){return this._pristine}hasValue(){return this.value!==this.getDefaultValue()}focusFirstInvalidElement(){const v=M(this,n).find($=>$.validity.valid===!1);v?"focusFirstInvalidElement"in v?v.focusFirstInvalidElement():v.focus():this.focus()}disconnectedCallback(){super.disconnectedCallback(),hs(this,a,u).call(this)}addValidator(v,$,O){const N={flagKey:v,getMessageMethod:$,checkMethod:O,weight:nf.indexOf(v)};return M(this,s).push(N),M(this,s).sort((ht,ze)=>ht.weight>ze.weight?1:ze.weight>ht.weight?-1:0),N}removeValidator(v){const $=M(this,s).indexOf(v);$!==-1&&M(this,s).splice($,1)}addFormControlElement(v){M(this,n).push(v),v.addEventListener(He.INVALID,()=>{this._runValidators()}),v.addEventListener(He.VALID,()=>{this._runValidators()}),this._pristine===!1&&(v.checkValidity(),this._runValidators())}setCustomValidity(v){this._customValidityObject&&this.removeValidator(this._customValidityObject),v!=null&&v!==""&&(this._customValidityObject=this.addValidator("customError",()=>v,()=>!0)),this._runValidators()}_runValidators(){oa(this,i,{});let v,$;M(this,s).some(N=>N.checkMethod()?(M(this,i)[N.flagKey]=!0,v=N.getMessageMethod(),!0):!1),v||M(this,n).some(N=>{let ht;for(ht in N.validity)if(ht!=="valid"&&N.validity[ht])return M(this,i)[ht]=!0,v=N.validationMessage,$??($=N),!0;return!1});const O=Object.values(M(this,i)).includes(!0);M(this,i).valid=!O,this._internals.setValidity(M(this,i),v,$??this.getFormElement()??void 0),hs(this,a,h).call(this)}updated(v){super.updated(v),this._runValidators()}submit(){var v;(v=M(this,r))==null||v.requestSubmit()}formAssociatedCallback(){hs(this,a,u).call(this),oa(this,r,this._internals.form),M(this,r)&&(M(this,r).hasAttribute("submit-invalid")&&(this.pristine=!1),M(this,r).addEventListener("submit",M(this,f)))}formResetCallback(){this.pristine=!0,this.value=this.getInitialValue()??this.getDefaultValue()}getDefaultValue(){return t}getInitialValue(){return this.getAttribute("value")}checkValidity(){var v;this.pristine=!1,this._runValidators();for(const $ in M(this,n))if(M(this,n)[$].checkValidity()===!1)return!1;return(v=this._internals)==null?void 0:v.checkValidity()}get validity(){return M(this,i)}get validationMessage(){var v;return(v=this._internals)==null?void 0:v.validationMessage}}return i=new WeakMap,o=new WeakMap,r=new WeakMap,s=new WeakMap,n=new WeakMap,a=new WeakSet,u=function(){M(this,r)&&M(this,r).removeEventListener("submit",M(this,f))},h=function(){this._pristine!==!0&&(M(this,i).valid?this.dispatchEvent(new He(He.VALID)):this.dispatchEvent(new He(He.INVALID)))},f=new WeakMap,d.formAssociated=!0,pi([l({type:String})],d.prototype,"name",2),pi([l()],d.prototype,"value",1),pi([l({type:Boolean,reflect:!0,attribute:"pristine"})],d.prototype,"pristine",1),pi([l({type:Boolean,reflect:!0})],d.prototype,"required",2),pi([l({type:String,attribute:"required-message"})],d.prototype,"requiredMessage",2),pi([l({type:Boolean,reflect:!0})],d.prototype,"error",2),pi([l({type:String,attribute:"error-message"})],d.prototype,"errorMessage",2),d},af=(e,t,i)=>{let o=e;for(;o!==null;){const r=o instanceof HTMLElement&&o.hasAttribute(t)&&o.getAttribute(t)===i,s=o.querySelector(`[${t}="${i}"]`)!==null;if(r)return o;if(s)return o.querySelector(`[${t}="${i}"]`);o=o.parentElement||o.parentNode||o.host||null}return null};var lf=Object.defineProperty,Yu=e=>{throw TypeError(e)},uf=(e,t,i,o)=>{for(var r=void 0,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(t,i,r)||r);return r&&lf(t,i,r),r},Xu=(e,t,i)=>t.has(e)||Yu("Cannot "+i),Zu=(e,t,i)=>(Xu(e,t,"read from private field"),t.get(e)),Ju=(e,t,i)=>t.has(e)?Yu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),cf=(e,t,i,o)=>(Xu(e,t,"write to private field"),t.set(e,i),i);const hf=e=>{var t,i;class o extends e{constructor(...s){super(...s),Ju(this,t,!1),this._togglePopover=()=>{if(!this.popoverContainerElement)return;const n=af(this,"id",this.popoverContainerElement);n&&(Zu(this,t)?n.hidePopover():n.showPopover())},Ju(this,i,n=>{requestAnimationFrame(()=>{cf(this,t,n.detail.newState==="open")})}),this.addEventListener("uui-popover-before-toggle",Zu(this,i))}}return t=new WeakMap,i=new WeakMap,uf([l({type:String,attribute:"popovertarget"})],o.prototype,"popoverContainerElement"),o};class L extends Event{constructor(t,i={}){super(t,{...i}),this.detail=i.detail||{}}}class Xi extends L{constructor(t,i={}){super(t,{bubbles:!0,...i})}}Xi.VALID="valid",Xi.INVALID="invalid";class Be extends L{constructor(t,i={}){super(t,{bubbles:!0,cancelable:!0,...i})}}Be.SELECTED="selected",Be.DESELECTED="deselected";class sa extends L{constructor(t,i={}){super(t,{bubbles:!0,...i})}}sa.CHANGE="change";var df=Object.defineProperty,pf=Object.getOwnPropertyDescriptor,Qu=e=>{throw TypeError(e)},Zi=(e,t,i,o)=>{for(var r=o>1?void 0:o?pf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&df(t,i,r),r},ff=(e,t,i)=>t.has(e)||Qu("Cannot "+i),vf=(e,t,i)=>t.has(e)?Qu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),bf=(e,t,i)=>(ff(e,t,"access private method"),i),na,tc;class Nt extends qt(Gt("",_),""){constructor(t="checkbox"){super(),vf(this,na),this._value="",this.labelPosition="right",this._checked=!1,this.indeterminate=!1,this.disabled=!1,this.readonly=!1,this._value===""&&(this._value="on"),this.inputRole=t,this.addEventListener("keydown",bf(this,na,tc))}get value(){return this._value}set value(t){const i=super.value;this._value=t,"ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype&&this._internals.setFormValue(this._checked&&this.name!==""?this._value:null),this.requestUpdate("value",i)}get checked(){return this._checked}set checked(t){const i=this._checked;this._checked=t,this._internals.setFormValue(this._checked&&this.name!==""?this._value?this._value:"on":null),this.requestUpdate("checked",i)}getFormElement(){return this._input}hasValue(){return this.checked}formResetCallback(){super.formResetCallback(),this.checked=this.hasAttribute("checked")}firstUpdated(t){var r;super.firstUpdated(t);const i=(r=this.shadowRoot)==null?void 0:r.querySelector("label");let o=!1;this._input.addEventListener("blur",()=>{o===!1&&this.style.setProperty("--uui-show-focus-outline","1"),o=!1}),i.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0"),o=!0}),i.addEventListener("mouseup",()=>{o=!1})}async focus(){await this.updateComplete,this._input.focus()}async click(){await this.updateComplete,this._input.click()}_onInputChange(t){t.stopPropagation(),this.pristine=!1,this.checked=this._input.checked,this.indeterminate=this._input.indeterminate,this.dispatchEvent(new sa(sa.CHANGE))}render(){return c`
      <label>
        <input
          id="input"
          type="checkbox"
          @change="${this._onInputChange}"
          .disabled=${this.disabled||this.readonly}
          .checked=${this.checked}
          .indeterminate=${this.indeterminate}
          aria-checked="${this.checked?"true":"false"}"
          aria-label=${this.label}
          role="${this.inputRole}" />
        ${this.renderCheckbox()} ${this.renderLabel()}
      </label>
    `}}na=new WeakSet,tc=function(e){e.key=="Enter"&&this.submit()},Nt.styles=[b`
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
    `],Zi([l({type:String,attribute:"label-position",reflect:!0})],Nt.prototype,"labelPosition",2),Zi([l({type:Boolean})],Nt.prototype,"checked",1),Zi([l({type:Boolean,reflect:!0})],Nt.prototype,"indeterminate",2),Zi([l({type:Boolean,reflect:!0})],Nt.prototype,"disabled",2),Zi([l({type:Boolean,reflect:!0})],Nt.prototype,"readonly",2),Zi([z("#input")],Nt.prototype,"_input",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ec=Symbol.for(""),gf=e=>{if((e==null?void 0:e.r)===ec)return e==null?void 0:e._$litStatic$},ic=e=>({_$litStatic$:e,r:ec}),rc=new Map,mf=e=>(t,...i)=>{const o=i.length;let r,s;const n=[],a=[];let u,h=0,f=!1;for(;h<o;){for(u=t[h];h<o&&(s=i[h],(r=gf(s))!==void 0);)u+=r+t[++h],f=!0;h!==o&&a.push(s),n.push(u),h++}if(h===o&&n.push(t[o]),f){const d=n.join("$$lit$$");(t=rc.get(d))===void 0&&(n.raw=n,rc.set(d,t=n)),i=a}return e(t,...i)},oc=mf(c);var _f=Object.defineProperty,yf=Object.getOwnPropertyDescriptor,vi=(e,t,i,o)=>{for(var r=o>1?void 0:o?yf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&_f(t,i,r),r};function aa(e){return e?e.assignedNodes({flatten:!0}).length>0:!1}let he=class extends _{constructor(){super(...arguments),this.headline=null,this._headlineVariantTag="h5",this._headlineSlotHasContent=!1,this._headlineSlotChanged=e=>{this._headlineSlotHasContent=aa(e.target)},this._headerSlotHasContent=!1,this._headerSlotChanged=e=>{this._headerSlotHasContent=aa(e.target)},this._headerActionsSlotHasContent=!1,this._headerActionsSlotChanged=e=>{this._headerActionsSlotHasContent=aa(e.target)}}set headlineVariant(e){this._headlineVariantTag=e}get headlineVariant(){return this._headlineVariantTag}renderHeader(){return oc`<div
      id="header"
      class="uui-text"
      style=${this._headerSlotHasContent||this._headlineSlotHasContent||this._headerActionsSlotHasContent||this.headline!==null?"":"display: none"}>
      <${ic(this._headlineVariantTag)}
        id="headline"
        class="uui-h5"
        style=${this._headlineSlotHasContent||this.headline!==null?"":"display: none"}>
        ${this.headline}
        <slot name="headline" @slotchange=${this._headlineSlotChanged}></slot>
      </${ic(this._headlineVariantTag)}>
      <slot name="header" @slotchange=${this._headerSlotChanged}></slot>
      <slot name="header-actions" @slotchange=${this._headerActionsSlotChanged}></slot>
    </div>`}render(){return oc`
      ${this.renderHeader()}
      <slot></slot>
    `}};he.styles=[Fi,b`
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
    `],vi([l({type:String})],he.prototype,"headline",2),vi([l({attribute:"headline-variant"})],he.prototype,"headlineVariant",1),vi([w()],he.prototype,"_headlineVariantTag",2),vi([w()],he.prototype,"_headlineSlotHasContent",2),vi([w()],he.prototype,"_headerSlotHasContent",2),vi([w()],he.prototype,"_headerActionsSlotHasContent",2),he=vi([g("uui-box")],he);var wf=Object.defineProperty,xf=Object.getOwnPropertyDescriptor,la=(e,t,i,o)=>{for(var r=o>1?void 0:o?xf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&wf(t,i,r),r};let Ji=class extends _{constructor(){super(...arguments),this.lastItem=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}renderLinkAndSeparator(){const e=this.href?c`<a id="link" href=${this.href}><slot></slot></a>`:c`<span id="link"><slot></slot></span>`;return c`${e}<span part="separator"></span>`}renderCurrent(){return c`<span id="last-item"><slot></slot></span>`}render(){return c`${this.lastItem?this.renderCurrent():this.renderLinkAndSeparator()}`}};Ji.styles=[b`
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
    `],la([l()],Ji.prototype,"href",2),la([l({type:Boolean,attribute:"last-item"})],Ji.prototype,"lastItem",2),Ji=la([g("uui-breadcrumb-item")],Ji);var $f=Object.defineProperty,kf=Object.getOwnPropertyDescriptor,sc=(e,t,i,o)=>{for(var r=o>1?void 0:o?kf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&$f(t,i,r),r};let ds=class extends _{elementIsBreadcrumbItem(e){return e instanceof Ji}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label","breadcrumb"),this.setAttribute("role","navigation")}handleSlotChange(){if(this.slotNodes.length>0){const e=this.slotNodes[this.slotNodes.length-1];e.setAttribute("aria-current","page"),this.elementIsBreadcrumbItem(e)&&(e.lastItem=!0)}}render(){return c`<ol id="breadcrumbs-list">
      <slot @slotchange=${this.handleSlotChange}></slot>
    </ol>`}};ds.styles=[b`
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
    `],sc([Le({flatten:!0,selector:"uui-breadcrumb-item, [uui-breadcrumb-item], [role=listitem]"})],ds.prototype,"slotNodes",2),ds=sc([g("uui-breadcrumbs")],ds);const Cf=b`
  @keyframes uui-blink {
    0%,
    100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }
`,Ef=Me("uui-blink 0.9s infinite both"),Pf=b`
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
`;Me("pulse 0.8s ease-in-out infinite both");const ps=b`
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
`,fs=Me("uui-horizontal-shake 600ms ease backwards");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Qi=e=>(...t)=>({_$litDirective$:e,values:t});let tr=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,o){this._$Ct=t,this._$AM=i,this._$Ci=o}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nc="important",Sf=" !"+nc,de=Qi(class extends tr{constructor(e){var t;if(super(e),e.type!==Ht.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const o=e[i];return o==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:i}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]==null&&(this.ft.delete(o),o.includes("-")?i.removeProperty(o):i[o]=null);for(const o in t){const r=t[o];if(r!=null){this.ft.add(o);const s=typeof r=="string"&&r.endsWith(Sf);o.includes("-")||s?i.setProperty(o,s?r.slice(0,-11):r,s?nc:""):i[o]=r}}return bt}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=e=>e??E;class ua extends L{constructor(t,i={}){super(t,{bubbles:!0,composed:!0,...i})}}ua.CLICK="click";var Af=Object.defineProperty,Of=Object.getOwnPropertyDescriptor,ac=e=>{throw TypeError(e)},bi=(e,t,i,o)=>{for(var r=o>1?void 0:o?Of(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Af(t,i,r),r},If=(e,t,i)=>t.has(e)||ac("Cannot "+i),Uf=(e,t,i)=>t.has(e)?ac("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),vs=(e,t,i)=>(If(e,t,"access private method"),i),er,ca,lc,uc;let pe=class extends _{constructor(){super(...arguments),Uf(this,er),this._position=0,this.vertical=!1}_onMouseMove(e){this._position=(this.vertical?e.offsetY:e.offsetX)-5}_handleClick(e){var t,i;e.preventDefault(),e.stopImmediatePropagation(),(i=(t=e.target)==null?void 0:t.blur)==null||i.call(t),this.dispatchEvent(new ua(ua.CLICK))}render(){return this.href?vs(this,er,lc).call(this):vs(this,er,uc).call(this)}};er=new WeakSet,ca=function(){return c`
      <div
        id="plus"
        style=${de({left:this.vertical?"":this._position+"px",top:this.vertical?this._position+"px":""})}>
        <svg
          id="plus-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512">
          <path
            d="M420.592 214.291H296.104V89.804h-83.102v124.487H88.518v83.104h124.484v124.488h83.102V297.395h124.488z" />
        </svg>
      </div>
    `},lc=function(){return c`<a
      id="button-wrapper"
      @mousemove=${this._onMouseMove}
      href=${k(this.href)}
      target=${k(this.target||void 0)}
      rel=${k(this.rel||k(this.target==="_blank"?"noopener noreferrer":void 0))}
      aria-label=${this.label?this.label:"create new element"}>
      ${vs(this,er,ca).call(this)}
    </a>`},uc=function(){return c`
      <button
        id="button-wrapper"
        @mousemove=${this._onMouseMove}
        @click=${this._handleClick}
        aria-label=${this.label?this.label:"create new element"}>
        ${vs(this,er,ca).call(this)}
      </button>
    `},pe.styles=[Cf,b`
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
        animation: ${Ef};
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
    `],bi([w()],pe.prototype,"_position",2),bi([l({type:String})],pe.prototype,"label",2),bi([l({type:Boolean,reflect:!0})],pe.prototype,"vertical",2),bi([l({type:String})],pe.prototype,"href",2),bi([l({type:String})],pe.prototype,"target",2),bi([l({type:String})],pe.prototype,"rel",2),pe=bi([g("uui-button-inline-create")],pe);class zf{constructor(t,i){this._callback=t,this._timerId=null,this._remaining=null,this._onComplete=()=>{this._remaining=null,this._callback()},this.setDuration(i)}setDuration(t){this._duration=t,this._timerId!==null&&this.restart()}start(){this._timerId===null&&this.resume()}restart(){this._remaining=this._duration,this.resume()}pause(){this._timerId!==null&&(window.clearTimeout(this._timerId),this._timerId=null,this._remaining!==null&&(this._remaining-=Date.now()-this._startTime))}resume(){this._timerId!==null&&window.clearTimeout(this._timerId),this._remaining===null&&(this._remaining=this._duration),this._startTime=Date.now(),this._timerId=window.setTimeout(this._onComplete,this._remaining)}destroy(){this.pause()}}const C=(e,t,i=`This element has to be present for ${e.nodeName} to work appropriate.`)=>{customElements.get(t)||console.warn(`%c ${e.nodeName} requires ${t} element to be registered!`,"font-weight: bold;",i,e)},cc=(e,t)=>{function i(r){const s=e.getBoundingClientRect(),n=e.ownerDocument.defaultView,a=s.left+n.scrollX,u=s.top+n.scrollY;let h;if("TouchEvent"in window&&r instanceof TouchEvent)h=r.touches[0];else if(r instanceof MouseEvent)h=r;else return;const f=h.pageX-a,d=h.pageY-u;t!=null&&t.onMove&&t.onMove(f,d)}function o(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",o),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",o),t!=null&&t.initialEvent&&i(t.initialEvent)},T=(e,t,i)=>Math.min(Math.max(e,t),i),hc=(e,t,i)=>i+t-e,Mf=(e,t,i)=>{let o=e;for(;o!==null;){const r=o instanceof HTMLElement&&o.hasAttribute(t)&&o.getAttribute(t)===i,s=o.querySelector(`[${t}="${i}"]`)!==null;if(r)return o;if(s)return o.querySelector(`[${t}="${i}"]`);o=o.parentElement||o.parentNode||o.host||null}return null};function Tf(e){return e?e.assignedNodes({flatten:!0}).length>0:!1}y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>`,y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>`,y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>`;const bs=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>`;y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>`,y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>`,y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m2 22 1-1h3l9-9" /><path d="M3 21v-3l9-9" /><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" /></svg>`,y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" /><path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" /><path d="M15 2v5h5" /></svg>`;const Df=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>`;y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>`,y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>`,y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>`,y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>`,y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /><path d="M2 10h20" /></svg>`,y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`,y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>`,y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>`;const Lf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>`;y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="4" height="16" x="6" y="4" /><rect width="4" height="16" x="14" y="4" /></svg>`;const Nf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>`;y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>`;const ha=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>`;y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>`;const Hf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>`;y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>`;const Bf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>`;y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>`;const Vf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></svg>`,jf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg>`;y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2" /><path d="M15 16v-2" /><path d="M8 9h2" /><path d="M20 9h2" /><path d="M17.8 11.8 19 13" /><path d="M15 9h0" /><path d="M17.8 6.2 19 5" /><path d="m3 21 9-9" /><path d="M12.2 6.2 11 5" /></svg>`;const Rf=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`;var Ff=Object.defineProperty,Wf=Object.getOwnPropertyDescriptor,dc=e=>{throw TypeError(e)},Bt=(e,t,i,o)=>{for(var r=o>1?void 0:o?Wf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Ff(t,i,r),r},pc=(e,t,i)=>t.has(e)||dc("Cannot "+i),Gf=(e,t,i)=>(pc(e,t,"read from private field"),t.get(e)),qf=(e,t,i)=>t.has(e)?dc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Kf=(e,t,i,o)=>(pc(e,t,"write to private field"),t.set(e,i),i),gs;let dt=class extends qt(Gt("",hf(_))){constructor(){super(),this.type="button",this.disabled=!1,this.look="default",this.color="default",this.compact=!1,this.state=void 0,qf(this,gs),this.addEventListener("click",this._onHostClick)}getFormElement(){return this._button}async focus(){await this.updateComplete,this._button.focus()}async blur(){await this.updateComplete,this._button.blur()}async click(){await this.updateComplete,this._button.click()}_onHostClick(e){var t;if(this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}if((t=this._internals)!=null&&t.form)switch(this.type){case"reset":this._internals.form.reset();break;case"button":break;default:this._internals.form.requestSubmit?this._internals.form.requestSubmit():this._internals.form.dispatchEvent(new SubmitEvent("submit"));break}this._togglePopover()}updated(e){super.updated(e),e.has("state")&&(clearTimeout(Gf(this,gs)),(this.state==="success"||this.state==="failed")&&Kf(this,gs,setTimeout(()=>this.state=void 0,2e3)))}renderState(){let e;switch(this.state){case"waiting":C(this,"uui-loader-circle"),e=c`<uui-loader-circle id="loader"></uui-loader-circle>`;break;case"success":C(this,"uui-icon"),e=c`<uui-icon
          name="check"
          .fallback=${bs.strings[0]}></uui-icon>`;break;case"failed":C(this,"uui-icon"),e=c`<uui-icon
          name="wrong"
          .fallback=${Rf.strings[0]}></uui-icon>`;break;default:return E}return c`<div id="state">${e}</div>`}render(){return this.href?c`
          <a
            id="button"
            aria-label=${k(this.label)}
            href=${k(this.disabled?void 0:this.href)}
            target=${k(this.target||void 0)}
            rel=${k(this.rel||k(this.target==="_blank"?"noopener noreferrer":void 0))}>
            ${this.renderState()} ${this.renderLabel()}
            <slot name="extra"></slot>
          </a>
        `:c`
          <button
            id="button"
            type=${this.type}
            ?disabled=${this.disabled}
            aria-label=${k(this.label)}>
            ${this.renderState()} ${this.renderLabel()}
            <slot name="extra"></slot>
          </button>
        `}};gs=new WeakMap,dt.styles=[ps,b`
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
        animation: ${fs};
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
    `],Bt([l({type:String,reflect:!0})],dt.prototype,"type",2),Bt([l({type:Boolean,reflect:!0})],dt.prototype,"disabled",2),Bt([l({reflect:!0})],dt.prototype,"look",2),Bt([l({reflect:!0})],dt.prototype,"color",2),Bt([l({type:Boolean,reflect:!0})],dt.prototype,"compact",2),Bt([l({type:String,reflect:!0})],dt.prototype,"state",2),Bt([l({type:String})],dt.prototype,"href",2),Bt([l({type:String})],dt.prototype,"target",2),Bt([l({type:String})],dt.prototype,"rel",2),Bt([z("#button")],dt.prototype,"_button",2),dt=Bt([g("uui-button")],dt);class ir extends L{constructor(){super(...arguments),this.text=null}}ir.COPIED="copied",ir.COPYING="copying";var Yf=Object.defineProperty,Xf=Object.getOwnPropertyDescriptor,fc=e=>{throw TypeError(e)},ms=(e,t,i,o)=>{for(var r=o>1?void 0:o?Xf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Yf(t,i,r),r},vc=(e,t,i)=>t.has(e)||fc("Cannot "+i),da=(e,t,i)=>(vc(e,t,"read from private field"),i?i.call(e):t.get(e)),bc=(e,t,i)=>t.has(e)?fc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Zf=(e,t,i,o)=>(vc(e,t,"write to private field"),t.set(e,i),i),io,pa;let rr=class extends dt{constructor(){super(),this.text="",this.copyFrom="",this.animationStateDelay=250,bc(this,io),bc(this,pa,async()=>{this.state="waiting";let e=this.text;if(this.copyFrom){const i=document.getElementById(this.copyFrom);if(i)"value"in i?e=i.value:e=i.textContent??i.innerText??"";else{console.error(`Element ID ${this.copyFrom} not found to copy from`),this.state="failed";return}}const t=new ir(ir.COPYING);t.text=e,this.dispatchEvent(t),t.text!=null&&(e=t.text);try{await navigator.clipboard.writeText(e);const i=new ir(ir.COPIED);i.text=e,this.dispatchEvent(i),Zf(this,io,setTimeout(()=>{this.state="success"},this.animationStateDelay))}catch(i){this.state="failed",console.error("Error copying to clipboard",i)}}),C(this,"uui-icon"),this.addEventListener("click",da(this,pa))}disconnectedCallback(){super.disconnectedCallback(),da(this,io)&&clearTimeout(da(this,io))}renderLabel(){return c`
      <slot class="label">
        <uui-icon name="copy"></uui-icon>
      </slot>
    `}};io=new WeakMap,pa=new WeakMap,rr.styles=dt.styles,ms([l({type:String})],rr.prototype,"text",2),ms([l({type:String,attribute:"copy-from"})],rr.prototype,"copyFrom",2),ms([l({type:Number,attribute:"animation-state-delay"})],rr.prototype,"animationStateDelay",2),rr=ms([g("uui-button-copy-text")],rr);class ro extends L{}ro.OPEN="open";var Jf=Object.defineProperty,Qf=Object.getOwnPropertyDescriptor,or=(e,t,i,o)=>{for(var r=o>1?void 0:o?Qf(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Jf(t,i,r),r};let lt=class extends cs(Yi(_)){constructor(){super(...arguments),this.disabled=!1,this.error=!1}handleOpenClick(e){this.disabled||(e.stopPropagation(),this.dispatchEvent(new ro(ro.OPEN)))}handleOpenKeydown(e){this.disabled||e.key==="Enter"&&(e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new ro(ro.OPEN)))}render(){return c`<slot id="open-part"></slot>
      <div id="select-border"></div>`}};lt.styles=[Fi,b`
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
    `],or([l({type:Boolean,reflect:!0,attribute:"disabled"})],lt.prototype,"disabled",2),or([l({type:Boolean,reflect:!0})],lt.prototype,"error",2),or([l({type:String})],lt.prototype,"href",2),or([l({type:String})],lt.prototype,"target",2),or([l({type:String})],lt.prototype,"rel",2),lt=or([g("uui-card")],lt);var tv=Object.defineProperty,ev=Object.getOwnPropertyDescriptor,gc=e=>{throw TypeError(e)},_s=(e,t,i,o)=>{for(var r=o>1?void 0:o?ev(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&tv(t,i,r),r},iv=(e,t,i)=>t.has(e)||gc("Cannot "+i),rv=(e,t,i)=>t.has(e)?gc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),oo=(e,t,i)=>(iv(e,t,"access private method"),i),gi,mc,_c,yc,fa;let sr=class extends lt{constructor(){super(...arguments),rv(this,gi),this.name=""}get background(){}set background(e){this.style.backgroundColor=e??""}render(){return c`
      ${oo(this,gi,yc).call(this)}
      ${this.href?oo(this,gi,_c).call(this):oo(this,gi,mc).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>

      <slot name="tag"></slot>
      <slot name="actions"></slot>
    `}};gi=new WeakSet,mc=function(){return c`
      <button
        id="open-part"
        class="uui-text"
        tabindex=${this.disabled?E:"0"}
        @click=${this.handleOpenClick}
        @keydown=${this.handleOpenKeydown}>
        ${oo(this,gi,fa).call(this)}
      </button>
    `},_c=function(){return c`
      <a
        id="open-part"
        class="uui-text"
        tabindex=${this.disabled?E:"0"}
        href=${k(this.disabled?void 0:this.href)}
        target=${k(this.target||void 0)}
        rel=${k(this.rel||k(this.target==="_blank"?"noopener noreferrer":void 0))}>
        ${oo(this,gi,fa).call(this)}
      </a>
    `},yc=function(){return c`<div id="portrait">
      <slot></slot>
    </div> `},fa=function(){return c`
      <div id="content">
        <span title="${this.name}" id="name">${this.name}</span>
        <small title="${this.description}">${this.description}<slot name="description"></slot></small>
      </div></div>
    `},sr.styles=[...lt.styles,b`
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
    `],_s([l({type:String})],sr.prototype,"name",2),_s([l({type:String})],sr.prototype,"description",2),_s([l({type:String,attribute:"background"})],sr.prototype,"background",1),sr=_s([g("uui-card-block-type")],sr);var ov=Object.defineProperty,sv=Object.getOwnPropertyDescriptor,wc=e=>{throw TypeError(e)},ys=(e,t,i,o)=>{for(var r=o>1?void 0:o?sv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ov(t,i,r),r},nv=(e,t,i)=>t.has(e)||wc("Cannot "+i),av=(e,t,i)=>t.has(e)?wc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),ws=(e,t,i)=>(nv(e,t,"access private method"),i),nr,va,xc,$c;let ar=class extends lt{constructor(){super(...arguments),av(this,nr),this.name="",this.detail="",this._iconSlotHasContent=!1,this.fallbackIcon=`<svg
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
  </svg>`}_onSlotIconChange(e){this._iconSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0}_renderFallbackIcon(){return C(this,"uui-icon"),c`<uui-icon .svg="${this.fallbackIcon}"></uui-icon>`}renderDetail(){return c`<small id="detail"
        >${this.detail}<slot name="detail"></slot></small
      ><slot id="default"></slot>`}render(){return c`
      ${this.href?ws(this,nr,$c).call(this):ws(this,nr,xc).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>

      <slot name="tag"></slot>
      <slot name="actions"></slot>
    `}};nr=new WeakSet,va=function(){return c`
      <span id="content" class="uui-text">
        <span id="item">
          <span id="icon">
            <slot name="icon" @slotchange=${this._onSlotIconChange}></slot>
            ${this._iconSlotHasContent===!1?this._renderFallbackIcon():""}
          </span>
          <div title="${this.name}" id="name">
            ${this.name}<slot name="name"></slot>
          </div>
        </span>
        ${this.renderDetail()}
      </span>
    `},xc=function(){return c`<button
      id="open-part"
      tabindex=${this.disabled?E:0}
      @click=${this.handleOpenClick}
      @keydown=${this.handleOpenKeydown}>
      ${ws(this,nr,va).call(this)}
    </button>`},$c=function(){return c`<a
      id="open-part"
      tabindex=${this.disabled?E:0}
      href=${k(this.disabled?void 0:this.href)}
      target=${k(this.target||void 0)}
      rel=${k(this.rel||k(this.target==="_blank"?"noopener noreferrer":void 0))}>
      ${ws(this,nr,va).call(this)}
    </a>`},ar.styles=[...lt.styles,b`
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
    `],ys([l({type:String})],ar.prototype,"name",2),ys([l({type:String})],ar.prototype,"detail",2),ys([w()],ar.prototype,"_iconSlotHasContent",2),ar=ys([g("uui-card-content-node")],ar);var lv=Object.defineProperty,uv=Object.getOwnPropertyDescriptor,kc=e=>{throw TypeError(e)},so=(e,t,i,o)=>{for(var r=o>1?void 0:o?uv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&lv(t,i,r),r},cv=(e,t,i)=>t.has(e)||kc("Cannot "+i),hv=(e,t,i)=>t.has(e)?kc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),xs=(e,t,i)=>(cv(e,t,"access private method"),i),lr,Cc,Ec,ba;let mi=class extends lt{constructor(){super(...arguments),hv(this,lr),this.name="",this.fileExt="",this.hasPreview=!1}connectedCallback(){super.connectedCallback(),C(this,"uui-symbol-folder"),C(this,"uui-symbol-file")}queryPreviews(e){this.hasPreview=e.composedPath()[0].assignedElements({flatten:!0}).length>0}renderMedia(){return this.hasPreview===!0?"":this.fileExt===""?c`<uui-symbol-folder id="entity-symbol"></uui-symbol-folder>`:c`<uui-symbol-file
      id="entity-symbol"
      type="${this.fileExt}"></uui-symbol-file>`}render(){return c` ${this.renderMedia()}
      <slot @slotchange=${this.queryPreviews}></slot>
      ${this.href?xs(this,lr,Ec).call(this):xs(this,lr,Cc).call(this)}
      <!-- Select border must be right after .open-part -->
      <div id="select-border"></div>

      <slot name="tag"></slot>
      <slot name="actions"></slot>`}};lr=new WeakSet,Cc=function(){return c`
      <button
        id="open-part"
        tabindex=${this.disabled?E:"0"}
        @click=${this.handleOpenClick}
        @keydown=${this.handleOpenKeydown}>
        ${xs(this,lr,ba).call(this)}
      </button>
    `},Ec=function(){return c`
      <a
        id="open-part"
        tabindex=${this.disabled?E:"0"}
        href=${k(this.disabled?void 0:this.href)}
        target=${k(this.target||void 0)}
        rel=${k(this.rel||k(this.target==="_blank"?"noopener noreferrer":void 0))}>
        ${xs(this,lr,ba).call(this)}
      </a>
    `},ba=function(){return c`
      <div id="content" class="uui-text">
        <!--
        TODO: Implement info box when pop-out is ready
        -->
        <span id="name" title="${this.name}">${this.name}</span>
        <small id="detail">${this.detail}<slot name="detail"></slot></small>
      </div>
    `},mi.styles=[...lt.styles,b`
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
    `],so([l({type:String})],mi.prototype,"name",2),so([l({type:String})],mi.prototype,"detail",2),so([l({type:String,attribute:"file-ext"})],mi.prototype,"fileExt",2),so([w()],mi.prototype,"hasPreview",2),mi=so([g("uui-card-media")],mi);var dv=Object.defineProperty,pv=Object.getOwnPropertyDescriptor,Pc=e=>{throw TypeError(e)},ga=(e,t,i,o)=>{for(var r=o>1?void 0:o?pv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&dv(t,i,r),r},fv=(e,t,i)=>t.has(e)||Pc("Cannot "+i),vv=(e,t,i)=>t.has(e)?Pc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),$s=(e,t,i)=>(fv(e,t,"access private method"),i),ur,Sc,Ac,ma;let no=class extends lt{constructor(){super(...arguments),vv(this,ur),this.name="",this._avatarSlotHasContent=!1,this._avatarSlotChanged=e=>{this._avatarSlotHasContent=Tf(e.target)}}connectedCallback(){super.connectedCallback(),C(this,"uui-avatar")}render(){return c`
      ${this.href?$s(this,ur,Ac).call(this):$s(this,ur,Sc).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>
      <slot name="tag"></slot>
      <slot name="actions"></slot>
    `}};ur=new WeakSet,Sc=function(){return c`<div
      id="open-part"
      tabindex=${this.disabled?E:"0"}
      @click=${this.handleOpenClick}
      @keydown=${this.handleOpenKeydown}>
      ${$s(this,ur,ma).call(this)}
    </div>`},Ac=function(){return c`<a
      id="open-part"
      tabindex=${this.disabled?E:"0"}
      href=${k(this.disabled?void 0:this.href)}
      target=${k(this.target||void 0)}
      rel=${k(this.rel||k(this.target==="_blank"?"noopener noreferrer":void 0))}>
      ${$s(this,ur,ma).call(this)}
    </a>`},ma=function(){return c`<div id="content">
      ${this._avatarSlotHasContent?E:c`<uui-avatar
            class="avatar"
            name=${this.name}
            size="m"></uui-avatar>`}
      <slot
        name="avatar"
        class="avatar"
        @slotchange=${this._avatarSlotChanged}></slot>
      <span title="${this.name}">${this.name}</span>
      <slot></slot>
    </div>`},no.styles=[...lt.styles,b`
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
    `],ga([l({type:String})],no.prototype,"name",2),ga([w()],no.prototype,"_avatarSlotHasContent",2),no=ga([g("uui-card-user")],no);var bv=Object.defineProperty,gv=Object.getOwnPropertyDescriptor,Oc=(e,t,i,o)=>{for(var r=o>1?void 0:o?gv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&bv(t,i,r),r};let ks=class extends _{constructor(){super(),this.open=!1,console.error("´uui-caret´ is deprecated, please use ´uui-symbol-expand´ or ´uui-symbol-sort´")}render(){return c`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="m4 9 8 8 8-8"></path>
    </svg>`}};ks.styles=[b`
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
    `],Oc([l({type:Boolean,reflect:!0})],ks.prototype,"open",2),ks=Oc([g("uui-caret")],ks);var mv=Object.getOwnPropertyDescriptor,_v=(e,t,i,o)=>{for(var r=o>1?void 0:o?mv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Cs=class extends Nt{renderCheckbox(){return c`
      <div id="ticker">
        <div id="icon-check">
          ${this.indeterminate?Bf:bs}
        </div>
      </div>
    `}};Cs.formAssociated=!0,Cs.styles=[...Nt.styles,ps,b`
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
        animation: ${fs};
      }
      :host([disabled]) input:checked + #ticker #icon-check,
      :host([disabled]) input:indeterminate + #ticker #icon-check {
        color: var(--uui-color-disabled-contrast,#c4c4c4);
      }
    `],Cs=_v([g("uui-checkbox")],Cs);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _a=Qi(class extends tr{constructor(e){var t;if(super(e),e.type!==Ht.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var o,r;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((o=this.nt)!=null&&o.has(s))&&this.st.add(s);return this.render(t)}const i=e.element.classList;for(const s of this.st)s in t||(i.remove(s),this.st.delete(s));for(const s in t){const n=!!t[s];n===this.st.has(s)||(r=this.nt)!=null&&r.has(s)||(n?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return bt}});var yv={grad:.9,turn:360,rad:360/(2*Math.PI)},fe=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},Z=function(e,t,i){return t===void 0&&(t=0),i===void 0&&(i=Math.pow(10,t)),Math.round(i*e)/i+0},Et=function(e,t,i){return t===void 0&&(t=0),i===void 0&&(i=1),e>i?i:e>t?e:t},Ic=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},Uc=function(e){return{r:Et(e.r,0,255),g:Et(e.g,0,255),b:Et(e.b,0,255),a:Et(e.a)}},ya=function(e){return{r:Z(e.r),g:Z(e.g),b:Z(e.b),a:Z(e.a,3)}},wv=/^#([0-9a-f]{3,8})$/i,Es=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},zc=function(e){var t=e.r,i=e.g,o=e.b,r=e.a,s=Math.max(t,i,o),n=s-Math.min(t,i,o),a=n?s===t?(i-o)/n:s===i?2+(o-t)/n:4+(t-i)/n:0;return{h:60*(a<0?a+6:a),s:s?n/s*100:0,v:s/255*100,a:r}},Mc=function(e){var t=e.h,i=e.s,o=e.v,r=e.a;t=t/360*6,i/=100,o/=100;var s=Math.floor(t),n=o*(1-i),a=o*(1-(t-s)*i),u=o*(1-(1-t+s)*i),h=s%6;return{r:255*[o,a,n,n,u,o][h],g:255*[u,o,o,a,n,n][h],b:255*[n,n,u,o,o,a][h],a:r}},Tc=function(e){return{h:Ic(e.h),s:Et(e.s,0,100),l:Et(e.l,0,100),a:Et(e.a)}},Dc=function(e){return{h:Z(e.h),s:Z(e.s),l:Z(e.l),a:Z(e.a,3)}},Lc=function(e){return Mc((i=(t=e).s,{h:t.h,s:(i*=((o=t.l)<50?o:100-o)/100)>0?2*i/(o+i)*100:0,v:o+i,a:t.a}));var t,i,o},ao=function(e){return{h:(t=zc(e)).h,s:(r=(200-(i=t.s))*(o=t.v)/100)>0&&r<200?i*o/100/(r<=100?r:200-r)*100:0,l:r/2,a:t.a};var t,i,o,r},xv=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,$v=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,kv=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Cv=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Nc={string:[[function(e){var t=wv.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Z(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?Z(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=kv.exec(e)||Cv.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:Uc({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=xv.exec(e)||$v.exec(e);if(!t)return null;var i,o,r=Tc({h:(i=t[1],o=t[2],o===void 0&&(o="deg"),Number(i)*(yv[o]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return Lc(r)},"hsl"]],object:[[function(e){var t=e.r,i=e.g,o=e.b,r=e.a,s=r===void 0?1:r;return fe(t)&&fe(i)&&fe(o)?Uc({r:Number(t),g:Number(i),b:Number(o),a:Number(s)}):null},"rgb"],[function(e){var t=e.h,i=e.s,o=e.l,r=e.a,s=r===void 0?1:r;if(!fe(t)||!fe(i)||!fe(o))return null;var n=Tc({h:Number(t),s:Number(i),l:Number(o),a:Number(s)});return Lc(n)},"hsl"],[function(e){var t=e.h,i=e.s,o=e.v,r=e.a,s=r===void 0?1:r;if(!fe(t)||!fe(i)||!fe(o))return null;var n=function(a){return{h:Ic(a.h),s:Et(a.s,0,100),v:Et(a.v,0,100),a:Et(a.a)}}({h:Number(t),s:Number(i),v:Number(o),a:Number(s)});return Mc(n)},"hsv"]]},Hc=function(e,t){for(var i=0;i<t.length;i++){var o=t[i][0](e);if(o)return[o,t[i][1]]}return[null,void 0]},Ev=function(e){return typeof e=="string"?Hc(e.trim(),Nc.string):typeof e=="object"&&e!==null?Hc(e,Nc.object):[null,void 0]},wa=function(e,t){var i=ao(e);return{h:i.h,s:Et(i.s+100*t,0,100),l:i.l,a:i.a}},xa=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},Bc=function(e,t){var i=ao(e);return{h:i.h,s:i.s,l:Et(i.l+100*t,0,100),a:i.a}},Vc=function(){function e(t){this.parsed=Ev(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return Z(xa(this.rgba),2)},e.prototype.isDark=function(){return xa(this.rgba)<.5},e.prototype.isLight=function(){return xa(this.rgba)>=.5},e.prototype.toHex=function(){return t=ya(this.rgba),i=t.r,o=t.g,r=t.b,n=(s=t.a)<1?Es(Z(255*s)):"","#"+Es(i)+Es(o)+Es(r)+n;var t,i,o,r,s,n},e.prototype.toRgb=function(){return ya(this.rgba)},e.prototype.toRgbString=function(){return t=ya(this.rgba),i=t.r,o=t.g,r=t.b,(s=t.a)<1?"rgba("+i+", "+o+", "+r+", "+s+")":"rgb("+i+", "+o+", "+r+")";var t,i,o,r,s},e.prototype.toHsl=function(){return Dc(ao(this.rgba))},e.prototype.toHslString=function(){return t=Dc(ao(this.rgba)),i=t.h,o=t.s,r=t.l,(s=t.a)<1?"hsla("+i+", "+o+"%, "+r+"%, "+s+")":"hsl("+i+", "+o+"%, "+r+"%)";var t,i,o,r,s},e.prototype.toHsv=function(){return t=zc(this.rgba),{h:Z(t.h),s:Z(t.s),v:Z(t.v),a:Z(t.a,3)};var t},e.prototype.invert=function(){return Pt({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),Pt(wa(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),Pt(wa(this.rgba,-t))},e.prototype.grayscale=function(){return Pt(wa(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),Pt(Bc(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),Pt(Bc(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?Pt({r:(i=this.rgba).r,g:i.g,b:i.b,a:t}):Z(this.rgba.a,3);var i},e.prototype.hue=function(t){var i=ao(this.rgba);return typeof t=="number"?Pt({h:t,s:i.s,l:i.l,a:i.a}):Z(i.h)},e.prototype.isEqual=function(t){return this.toHex()===Pt(t).toHex()},e}(),Pt=function(e){return e instanceof Vc?e:new Vc(e)};class $a extends L{constructor(t,i={}){super(t,{bubbles:!0,...i})}}$a.CHANGE="change";var Pv=Object.defineProperty,Sv=Object.getOwnPropertyDescriptor,Kt=(e,t,i,o)=>{for(var r=o>1?void 0:o?Sv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Pv(t,i,r),r};let St=class extends _{constructor(){super(...arguments),this.isDraggingGridHandle=!1,this.disabled=!1,this.readonly=!1,this.hue=0,this.saturation=0,this.lightness=0,this.brightness=0,this.alpha=100,this._value="#000"}get value(){return this._value}set value(e){const t=this._value;this._value=e,this.requestUpdate("value",t);try{const i=Pt(e);if(i.isValid()){const{h:o,s:r,l:s,a:n}=i.toHsl();o!==0&&(this.hue=o),this.lightness=s,this.saturation=r,this.brightness=this.getBrightness(s),this.alpha=n*100}}catch(i){console.error("Something went wrong parsing the color string.",i)}}handleGridDrag(e){if(this.disabled||this.readonly)return;const t=this.shadowRoot.querySelector(".color-area"),i=t.querySelector(".color-area__handle"),{width:o,height:r}=t.getBoundingClientRect();i.focus(),e.preventDefault(),e.stopPropagation(),this.isDraggingGridHandle=!0,cc(t,{onMove:(s,n)=>{isNaN(s)||isNaN(n)||(this.saturation=T(s/o*100,0,100),this.brightness=T(100-n/r*100,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues())},onStop:()=>this.isDraggingGridHandle=!1,initialEvent:e})}handleGridKeyDown(e){if(this.disabled)return;const t=e.shiftKey?10:1;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=T(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=T(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=T(this.brightness+t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=T(this.brightness-t,0,100),this.lightness=this.getLightness(this.brightness),this.syncValues())}getBrightness(e){return T(-1*(200*e/(this.saturation-200)),0,100)}getLightness(e){return T((200-this.saturation)*e/100*5/10,0,100)}syncValues(){const e=Pt({h:this.hue,s:this.saturation,l:this.lightness,a:this.alpha/100});this._value=e.toRgbString(),this.dispatchEvent(new $a($a.CHANGE))}getHexString(e,t,i,o=100){const r=Pt(`hsla(${e}, ${t}%, ${i}%, ${o/100})`);return r.isValid()?r.toHex():""}render(){const e=this.saturation,t=100-this.brightness;return c`
      <div
        part="grid"
        class="color-area"
        style=${de({backgroundColor:this.getHexString(this.hue,100,50)})}
        @mousedown=${this.handleGridDrag}
        @touchstart=${this.handleGridDrag}>
        <span
          part="grid-handle"
          class=${_a({"color-area__handle":!0,"color-area__handle--dragging":this.isDraggingGridHandle})}
          style=${de({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.lightness,this.alpha)})}
          role="application"
          tabindex=${k(this.disabled?void 0:"0")}
          aria-label="HSB"
          @keydown=${this.handleGridKeyDown}></span>
      </div>
    `}};St.styles=[b`
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
    `],Kt([w()],St.prototype,"isDraggingGridHandle",2),Kt([l({type:Boolean,reflect:!0})],St.prototype,"disabled",2),Kt([l({type:Boolean,reflect:!0})],St.prototype,"readonly",2),Kt([l({type:Number})],St.prototype,"hue",2),Kt([l({type:Number})],St.prototype,"saturation",2),Kt([l({type:Number})],St.prototype,"lightness",2),Kt([l({type:Number})],St.prototype,"brightness",2),Kt([l({type:Number})],St.prototype,"alpha",2),Kt([l({type:String})],St.prototype,"value",1),St=Kt([g("uui-color-area")],St);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Av}=Ap,jc=e=>e.strings===void 0,Rc=()=>document.createComment(""),lo=(e,t,i)=>{var s;const o=e._$AA.parentNode,r=t===void 0?e._$AB:t._$AA;if(i===void 0){const n=o.insertBefore(Rc(),r),a=o.insertBefore(Rc(),r);i=new Av(n,a,e,e.options)}else{const n=i._$AB.nextSibling,a=i._$AM,u=a!==e;if(u){let h;(s=i._$AQ)==null||s.call(i,e),i._$AM=e,i._$AP!==void 0&&(h=e._$AU)!==a._$AU&&i._$AP(h)}if(n!==r||u){let h=i._$AA;for(;h!==n;){const f=h.nextSibling;o.insertBefore(h,r),h=f}}}return i},_i=(e,t,i=e)=>(e._$AI(t,i),e),Ov={},Fc=(e,t=Ov)=>e._$AH=t,Iv=e=>e._$AH,ka=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Uv=Qi(class extends tr{constructor(e){if(super(e),e.type!==Ht.PROPERTY&&e.type!==Ht.ATTRIBUTE&&e.type!==Ht.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!jc(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===bt||t===E)return t;const i=e.element,o=e.name;if(e.type===Ht.PROPERTY){if(t===i[o])return bt}else if(e.type===Ht.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(o))return bt}else if(e.type===Ht.ATTRIBUTE&&i.getAttribute(o)===t+"")return bt;return Fc(e),t}});var zv={grad:.9,turn:360,rad:360/(2*Math.PI)},ve=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},J=function(e,t,i){return t===void 0&&(t=0),i===void 0&&(i=Math.pow(10,t)),Math.round(i*e)/i+0},At=function(e,t,i){return t===void 0&&(t=0),i===void 0&&(i=1),e>i?i:e>t?e:t},Wc=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},Gc=function(e){return{r:At(e.r,0,255),g:At(e.g,0,255),b:At(e.b,0,255),a:At(e.a)}},Ca=function(e){return{r:J(e.r),g:J(e.g),b:J(e.b),a:J(e.a,3)}},Mv=/^#([0-9a-f]{3,8})$/i,Ps=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},qc=function(e){var t=e.r,i=e.g,o=e.b,r=e.a,s=Math.max(t,i,o),n=s-Math.min(t,i,o),a=n?s===t?(i-o)/n:s===i?2+(o-t)/n:4+(t-i)/n:0;return{h:60*(a<0?a+6:a),s:s?n/s*100:0,v:s/255*100,a:r}},Kc=function(e){var t=e.h,i=e.s,o=e.v,r=e.a;t=t/360*6,i/=100,o/=100;var s=Math.floor(t),n=o*(1-i),a=o*(1-(t-s)*i),u=o*(1-(1-t+s)*i),h=s%6;return{r:255*[o,a,n,n,u,o][h],g:255*[u,o,o,a,n,n][h],b:255*[n,n,u,o,o,a][h],a:r}},Yc=function(e){return{h:Wc(e.h),s:At(e.s,0,100),l:At(e.l,0,100),a:At(e.a)}},Xc=function(e){return{h:J(e.h),s:J(e.s),l:J(e.l),a:J(e.a,3)}},Zc=function(e){return Kc((i=(t=e).s,{h:t.h,s:(i*=((o=t.l)<50?o:100-o)/100)>0?2*i/(o+i)*100:0,v:o+i,a:t.a}));var t,i,o},uo=function(e){return{h:(t=qc(e)).h,s:(r=(200-(i=t.s))*(o=t.v)/100)>0&&r<200?i*o/100/(r<=100?r:200-r)*100:0,l:r/2,a:t.a};var t,i,o,r},Tv=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Dv=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Lv=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Nv=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ea={string:[[function(e){var t=Mv.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?J(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?J(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=Lv.exec(e)||Nv.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:Gc({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=Tv.exec(e)||Dv.exec(e);if(!t)return null;var i,o,r=Yc({h:(i=t[1],o=t[2],o===void 0&&(o="deg"),Number(i)*(zv[o]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return Zc(r)},"hsl"]],object:[[function(e){var t=e.r,i=e.g,o=e.b,r=e.a,s=r===void 0?1:r;return ve(t)&&ve(i)&&ve(o)?Gc({r:Number(t),g:Number(i),b:Number(o),a:Number(s)}):null},"rgb"],[function(e){var t=e.h,i=e.s,o=e.l,r=e.a,s=r===void 0?1:r;if(!ve(t)||!ve(i)||!ve(o))return null;var n=Yc({h:Number(t),s:Number(i),l:Number(o),a:Number(s)});return Zc(n)},"hsl"],[function(e){var t=e.h,i=e.s,o=e.v,r=e.a,s=r===void 0?1:r;if(!ve(t)||!ve(i)||!ve(o))return null;var n=function(a){return{h:Wc(a.h),s:At(a.s,0,100),v:At(a.v,0,100),a:At(a.a)}}({h:Number(t),s:Number(i),v:Number(o),a:Number(s)});return Kc(n)},"hsv"]]},Jc=function(e,t){for(var i=0;i<t.length;i++){var o=t[i][0](e);if(o)return[o,t[i][1]]}return[null,void 0]},Hv=function(e){return typeof e=="string"?Jc(e.trim(),Ea.string):typeof e=="object"&&e!==null?Jc(e,Ea.object):[null,void 0]},Pa=function(e,t){var i=uo(e);return{h:i.h,s:At(i.s+100*t,0,100),l:i.l,a:i.a}},Sa=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},Qc=function(e,t){var i=uo(e);return{h:i.h,s:i.s,l:At(i.l+100*t,0,100),a:i.a}},Ss=function(){function e(t){this.parsed=Hv(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return J(Sa(this.rgba),2)},e.prototype.isDark=function(){return Sa(this.rgba)<.5},e.prototype.isLight=function(){return Sa(this.rgba)>=.5},e.prototype.toHex=function(){return t=Ca(this.rgba),i=t.r,o=t.g,r=t.b,n=(s=t.a)<1?Ps(J(255*s)):"","#"+Ps(i)+Ps(o)+Ps(r)+n;var t,i,o,r,s,n},e.prototype.toRgb=function(){return Ca(this.rgba)},e.prototype.toRgbString=function(){return t=Ca(this.rgba),i=t.r,o=t.g,r=t.b,(s=t.a)<1?"rgba("+i+", "+o+", "+r+", "+s+")":"rgb("+i+", "+o+", "+r+")";var t,i,o,r,s},e.prototype.toHsl=function(){return Xc(uo(this.rgba))},e.prototype.toHslString=function(){return t=Xc(uo(this.rgba)),i=t.h,o=t.s,r=t.l,(s=t.a)<1?"hsla("+i+", "+o+"%, "+r+"%, "+s+")":"hsl("+i+", "+o+"%, "+r+"%)";var t,i,o,r,s},e.prototype.toHsv=function(){return t=qc(this.rgba),{h:J(t.h),s:J(t.s),v:J(t.v),a:J(t.a,3)};var t},e.prototype.invert=function(){return Vt({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),Vt(Pa(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),Vt(Pa(this.rgba,-t))},e.prototype.grayscale=function(){return Vt(Pa(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),Vt(Qc(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),Vt(Qc(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?Vt({r:(i=this.rgba).r,g:i.g,b:i.b,a:t}):J(this.rgba.a,3);var i},e.prototype.hue=function(t){var i=uo(this.rgba);return typeof t=="number"?Vt({h:t,s:i.s,l:i.l,a:i.a}):J(i.h)},e.prototype.isEqual=function(t){return this.toHex()===Vt(t).toHex()},e}(),Vt=function(e){return e instanceof Ss?e:new Ss(e)},th=[],Bv=function(e){e.forEach(function(t){th.indexOf(t)<0&&(t(Ss,Ea),th.push(t))})};function Vv(e,t){var i={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},o={};for(var r in i)o[i[r]]=r;var s={};e.prototype.toName=function(n){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var a,u,h=o[this.toHex()];if(h)return h;if(n!=null&&n.closest){var f=this.toRgb(),d=1/0,x="black";if(!s.length)for(var v in i)s[v]=new e(i[v]).toRgb();for(var $ in i){var O=(a=f,u=s[$],Math.pow(a.r-u.r,2)+Math.pow(a.g-u.g,2)+Math.pow(a.b-u.b,2));O<d&&(d=O,x=$)}return x}},t.string.push([function(n){var a=n.toLowerCase(),u=a==="transparent"?"#0000":i[a];return u?new e(u).toRgb():null},"name"])}class co extends L{constructor(t,i={}){super(t,{bubbles:!0,...i})}}co.CHANGE="change";var jv=Object.defineProperty,Rv=Object.getOwnPropertyDescriptor,G=(e,t,i,o)=>{for(var r=o>1?void 0:o?Rv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&jv(t,i,r),r};Bv([Vv]);const eh="EyeDropper"in window;let R=class extends Gt("label",_){constructor(){super(...arguments),this._value="",this.inputValue="",this.hue=0,this.saturation=0,this.lightness=0,this.alpha=100,this._colord=Vt("hsl(0, 0%, 0%)"),this.format="hex",this.name="",this.size="medium",this.noFormatToggle=!1,this.inline=!1,this.disabled=!1,this.opacity=!1,this.readonly=!1,this.uppercase=!1,this.swatches=["#d0021b","#f5a623","#f8e71c","#8b572a","#7ed321","#417505","#bd10e0","#9013fe","#4a90e2","#50e3c2","#b8e986","#000","#444","#888","#ccc","#fff"]}set value(e){this.value!==e&&this.setColor(e),this._value=e}get value(){return this._value}connectedCallback(){super.connectedCallback(),C(this,"uui-icon"),C(this,"uui-icon-registry-essential"),C(this,"uui-input"),C(this,"uui-button"),C(this,"uui-button-group"),C(this,"uui-color-swatches"),C(this,"uui-color-swatch"),C(this,"uui-color-area"),C(this,"uui-color-slider"),C(this,"uui-popover-container")}getFormattedValue(e){const t=this.opacity?`${e}a`:e,i=this._colord.toHex(),o=i.length>7?i.substring(0,i.length-2):i,{r,g:s,b:n}=this._colord.toRgb(),{h:a,s:u,l:h}=this._colord.toHsl(),{v:f}=this._colord.toHsv(),d=this._colord.alpha();switch(t){case"hex":return this.setLetterCase(o);case"hexa":return this.setLetterCase(i);case"rgb":return this.setLetterCase(`rgb(${r}, ${s}, ${n})`);case"rgba":return this.setLetterCase(this._colord.toRgbString());case"hsl":return this.setLetterCase(`hsl(${a}, ${u}%, ${h}%)`);case"hsla":return this.setLetterCase(this._colord.toHslString());case"hsv":return this.setLetterCase(`hsv(${a}, ${u}%, ${h}%)`);case"hsva":return this.setLetterCase(`hsva(${a}, ${u}%, ${f}%, ${d})`);default:return""}}getBrightness(e){return T(-1*(200*e/(this.saturation-200)),0,100)}getLightness(e){return T((200-this.saturation)*e/100*5/10,0,100)}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this._syncValues()}handleAlphaChange(e){var o;e.stopPropagation(),(o=this._swatches)==null||o.resetSelection();const t=e.target,i={h:this.hue,s:this.saturation,l:this.lightness,a:Math.round(t.value)/100};this.setColor(i)}handleHueChange(e){var o;e.stopPropagation(),(o=this._swatches)==null||o.resetSelection();const i={h:e.target.value,s:this.saturation,l:this.lightness,a:this.alpha/100};this.setColor(i)}handleGridChange(e){var o;e.stopPropagation(),(o=this._swatches)==null||o.resetSelection();const t=e.target,i={h:this.hue,s:t.saturation,l:t.lightness,a:this.alpha/100};this.setColor(i)}handleInputChange(e){var t;e.stopImmediatePropagation(),(t=this._swatches)==null||t.resetSelection(),this.inputValue=this._input.value,this.setColor(this.inputValue)}handleInputKeyDown(e){var t;e.stopImmediatePropagation(),e.key==="Enter"&&((t=this._swatches)==null||t.resetSelection(),this.inputValue=this._input.value,this.setColor(this.inputValue),setTimeout(()=>this._input.select()))}handleColorSwatchChange(e){e.stopImmediatePropagation();const t=e.target;this.setColor(t.value)}handleCopy(){navigator.clipboard.writeText(this._input.value).then(()=>{this._previewButton.classList.add("color-picker__preview-color--copied"),this._previewButton.addEventListener("animationend",()=>{this._previewButton.classList.remove("color-picker__preview-color--copied")})})}handleEyeDropper(){if(!eh)return;new EyeDropper().open().then(t=>this.setColor(t.sRGBHex)).catch(()=>{})}setColor(e){if(e===this.value)return;if(!e)return this.alpha=100,this.inputValue="",this._value=e,this.dispatchEvent(new co(co.CHANGE)),!0;const t=new Ss(e),{h:i,s:o,l:r,a:s}=t.toHsl();this.hue=i,this.saturation=o,this.lightness=r,this.alpha=this.opacity?s*100:100;const n=e;return n&&n.h&&(this.hue=n.h),this._colord=t,this._syncValues(),this.dispatchEvent(new co(co.CHANGE)),!0}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}getHexString(e,t,i,o=100){const r=Vt(`hsla(${e}, ${t}%, ${i}%, ${o/100})`);return r.isValid()?r.toHex():""}_syncValues(){this.inputValue=this.getFormattedValue(this.format),this._value=this.inputValue}_renderColorPicker(){return c`
      <div
        class=${_a({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled})}
        aria-disabled=${this.disabled?"true":"false"}>
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
            ${this.opacity?c`
                  <uui-color-slider
                    label="alpha"
                    class="opacity-slider"
                    .value=${Math.round(this.alpha)}
                    type="opacity"
                    .color=${this.getHexString(this.hue,this.saturation,this.lightness)}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    @change=${this.handleAlphaChange}>
                  </uui-color-slider>
                `:""}
          </div>
          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            title="Copy"
            aria-label="Copy"
            style=${de({"--preview-color":`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`})}
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
            .value=${Uv(this.inputValue)}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            @keydown=${this.handleInputKeyDown}
            @change=${this.handleInputChange}>
          </uui-input>
          <uui-button-group>
            ${this.noFormatToggle?"":c`<uui-button
                  label="Toggle color format"
                  @click=${this.handleFormatToggle}
                  class="color-picker__toggle-format"
                  ?disabled=${this.disabled}
                  compact>
                  <span>${this.format}</span>
                </uui-button>`}
            ${eh?c`<uui-button
                  label="Select a color"
                  ?disabled=${this.disabled||this.readonly}
                  @click=${this.handleEyeDropper}
                  compact>
                  <uui-icon-registry-essential>
                    <uui-icon name="colorpicker"></uui-icon>
                  </uui-icon-registry-essential>
                </uui-button>`:""}
          </uui-button-group>
        </div>
        ${this._renderSwatches()}
      </div>
    `}_renderSwatches(){var e;return(e=this.swatches)!=null&&e.length?c`<uui-color-swatches
      id="swatches"
      class="color-picker__swatches"
      label="Swatches"
      ?disabled=${this.disabled}
      ?readonly=${this.readonly}
      @change=${this.handleColorSwatchChange}>
      ${this.swatches.map(t=>c`<uui-color-swatch label="${t}" .value=${t}>
          </uui-color-swatch>`)}
    </uui-color-swatches>`:E}_renderPreviewButton(){return c`<button
        type="button"
        part="trigger"
        aria-label="${this.label||"Open Color picker"}"
        class=${_a({"color-picker__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-picker__transparent-bg":!0})}
        style=${de({"--preview-color":`hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha/100})`})}
        ?disabled=${this.disabled}
        aria-haspopup="true"
        aria-expanded="false"
        popovertarget="color-picker-popover"></button>
      <uui-popover-container id="color-picker-popover">
        ${this._renderColorPicker()}
      </uui-popover-container>`}render(){return this.inline?this._renderColorPicker():this._renderPreviewButton()}};R.styles=[b`
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
    `],G([z('[part="input"]')],R.prototype,"_input",2),G([z(".color-picker__preview")],R.prototype,"_previewButton",2),G([z("#swatches")],R.prototype,"_swatches",2),G([w()],R.prototype,"inputValue",2),G([w()],R.prototype,"hue",2),G([w()],R.prototype,"saturation",2),G([w()],R.prototype,"lightness",2),G([w()],R.prototype,"alpha",2),G([w()],R.prototype,"_colord",2),G([l()],R.prototype,"value",1),G([l()],R.prototype,"format",2),G([l()],R.prototype,"name",2),G([l()],R.prototype,"size",2),G([l({attribute:"no-format-toggle",type:Boolean})],R.prototype,"noFormatToggle",2),G([l({type:Boolean,reflect:!0})],R.prototype,"inline",2),G([l({type:Boolean,reflect:!0})],R.prototype,"disabled",2),G([l({type:Boolean})],R.prototype,"opacity",2),G([l({type:Boolean,reflect:!0})],R.prototype,"readonly",2),G([l({type:Boolean})],R.prototype,"uppercase",2),G([l({attribute:!1})],R.prototype,"swatches",2),R=G([g("uui-color-picker")],R);var Fv={grad:.9,turn:360,rad:360/(2*Math.PI)},be=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},Q=function(e,t,i){return t===void 0&&(t=0),i===void 0&&(i=Math.pow(10,t)),Math.round(i*e)/i+0},Ot=function(e,t,i){return t===void 0&&(t=0),i===void 0&&(i=1),e>i?i:e>t?e:t},ih=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},rh=function(e){return{r:Ot(e.r,0,255),g:Ot(e.g,0,255),b:Ot(e.b,0,255),a:Ot(e.a)}},Aa=function(e){return{r:Q(e.r),g:Q(e.g),b:Q(e.b),a:Q(e.a,3)}},Wv=/^#([0-9a-f]{3,8})$/i,As=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},oh=function(e){var t=e.r,i=e.g,o=e.b,r=e.a,s=Math.max(t,i,o),n=s-Math.min(t,i,o),a=n?s===t?(i-o)/n:s===i?2+(o-t)/n:4+(t-i)/n:0;return{h:60*(a<0?a+6:a),s:s?n/s*100:0,v:s/255*100,a:r}},sh=function(e){var t=e.h,i=e.s,o=e.v,r=e.a;t=t/360*6,i/=100,o/=100;var s=Math.floor(t),n=o*(1-i),a=o*(1-(t-s)*i),u=o*(1-(1-t+s)*i),h=s%6;return{r:255*[o,a,n,n,u,o][h],g:255*[u,o,o,a,n,n][h],b:255*[n,n,u,o,o,a][h],a:r}},nh=function(e){return{h:ih(e.h),s:Ot(e.s,0,100),l:Ot(e.l,0,100),a:Ot(e.a)}},ah=function(e){return{h:Q(e.h),s:Q(e.s),l:Q(e.l),a:Q(e.a,3)}},lh=function(e){return sh((i=(t=e).s,{h:t.h,s:(i*=((o=t.l)<50?o:100-o)/100)>0?2*i/(o+i)*100:0,v:o+i,a:t.a}));var t,i,o},ho=function(e){return{h:(t=oh(e)).h,s:(r=(200-(i=t.s))*(o=t.v)/100)>0&&r<200?i*o/100/(r<=100?r:200-r)*100:0,l:r/2,a:t.a};var t,i,o,r},Gv=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,qv=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Kv=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Yv=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,uh={string:[[function(e){var t=Wv.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Q(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?Q(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=Kv.exec(e)||Yv.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:rh({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=Gv.exec(e)||qv.exec(e);if(!t)return null;var i,o,r=nh({h:(i=t[1],o=t[2],o===void 0&&(o="deg"),Number(i)*(Fv[o]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return lh(r)},"hsl"]],object:[[function(e){var t=e.r,i=e.g,o=e.b,r=e.a,s=r===void 0?1:r;return be(t)&&be(i)&&be(o)?rh({r:Number(t),g:Number(i),b:Number(o),a:Number(s)}):null},"rgb"],[function(e){var t=e.h,i=e.s,o=e.l,r=e.a,s=r===void 0?1:r;if(!be(t)||!be(i)||!be(o))return null;var n=nh({h:Number(t),s:Number(i),l:Number(o),a:Number(s)});return lh(n)},"hsl"],[function(e){var t=e.h,i=e.s,o=e.v,r=e.a,s=r===void 0?1:r;if(!be(t)||!be(i)||!be(o))return null;var n=function(a){return{h:ih(a.h),s:Ot(a.s,0,100),v:Ot(a.v,0,100),a:Ot(a.a)}}({h:Number(t),s:Number(i),v:Number(o),a:Number(s)});return sh(n)},"hsv"]]},ch=function(e,t){for(var i=0;i<t.length;i++){var o=t[i][0](e);if(o)return[o,t[i][1]]}return[null,void 0]},Xv=function(e){return typeof e=="string"?ch(e.trim(),uh.string):typeof e=="object"&&e!==null?ch(e,uh.object):[null,void 0]},Oa=function(e,t){var i=ho(e);return{h:i.h,s:Ot(i.s+100*t,0,100),l:i.l,a:i.a}},Ia=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},hh=function(e,t){var i=ho(e);return{h:i.h,s:i.s,l:Ot(i.l+100*t,0,100),a:i.a}},Ua=function(){function e(t){this.parsed=Xv(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return Q(Ia(this.rgba),2)},e.prototype.isDark=function(){return Ia(this.rgba)<.5},e.prototype.isLight=function(){return Ia(this.rgba)>=.5},e.prototype.toHex=function(){return t=Aa(this.rgba),i=t.r,o=t.g,r=t.b,n=(s=t.a)<1?As(Q(255*s)):"","#"+As(i)+As(o)+As(r)+n;var t,i,o,r,s,n},e.prototype.toRgb=function(){return Aa(this.rgba)},e.prototype.toRgbString=function(){return t=Aa(this.rgba),i=t.r,o=t.g,r=t.b,(s=t.a)<1?"rgba("+i+", "+o+", "+r+", "+s+")":"rgb("+i+", "+o+", "+r+")";var t,i,o,r,s},e.prototype.toHsl=function(){return ah(ho(this.rgba))},e.prototype.toHslString=function(){return t=ah(ho(this.rgba)),i=t.h,o=t.s,r=t.l,(s=t.a)<1?"hsla("+i+", "+o+"%, "+r+"%, "+s+")":"hsl("+i+", "+o+"%, "+r+"%)";var t,i,o,r,s},e.prototype.toHsv=function(){return t=oh(this.rgba),{h:Q(t.h),s:Q(t.s),v:Q(t.v),a:Q(t.a,3)};var t},e.prototype.invert=function(){return ge({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),ge(Oa(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),ge(Oa(this.rgba,-t))},e.prototype.grayscale=function(){return ge(Oa(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),ge(hh(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),ge(hh(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?ge({r:(i=this.rgba).r,g:i.g,b:i.b,a:t}):Q(this.rgba.a,3);var i},e.prototype.hue=function(t){var i=ho(this.rgba);return typeof t=="number"?ge({h:t,s:i.s,l:i.l,a:i.a}):Q(i.h)},e.prototype.isEqual=function(t){return this.toHex()===ge(t).toHex()},e}(),ge=function(e){return e instanceof Ua?e:new Ua(e)};class za extends L{constructor(t,i={}){super(t,{bubbles:!0,...i})}}za.CHANGE="change";var Zv=Object.defineProperty,Jv=Object.getOwnPropertyDescriptor,Yt=(e,t,i,o)=>{for(var r=o>1?void 0:o?Jv(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Zv(t,i,r),r};let It=class extends Gt("label",_){constructor(){super(...arguments),this.type="hue",this.color="",this.min=0,this.max=100,this.precision=1,this.vertical=!1,this.value=0,this.readonly=!1,this.disabled=!1}willUpdate(e){if(e.has("type")&&(this.type==="hue"?this.max=this.max??360:this.type==="saturation"?this.max=this.max??100:this.type==="lightness"?this.max=this.max??100:this.type==="opacity"&&(this.max=this.max??100),this.precision=this.precision??1,this.color)){const t=new Ua(this.color),{h:i,s:o,l:r}=t.toHsl(),s=this.type==="saturation"?`linear-gradient(to ${this.vertical?"top":"right"}, hsl(${i}, 0%, ${r}%), hsl(${i}, 100%, ${r}%))`:this.type==="lightness"?`linear-gradient(to ${this.vertical?"top":"right"}, hsl(${i}, ${o}%, 0%), hsl(${i}, ${o}%, 100%))`:null;this.style.setProperty("--uui-slider-background-image",s)}}firstUpdated(){this.container=this.shadowRoot.querySelector("#color-slider"),this.handle=this.container.querySelector("#color-slider__handle")}handleDrag(e){if(this.disabled||this.readonly||!this.container||!this.handle)return;const{width:t,height:i}=this.container.getBoundingClientRect();this.handle.focus(),e.preventDefault(),cc(this.container,{onMove:(o,r)=>{this.vertical?this.value=hc(T(r/i*this.max,this.min,this.max),this.min,this.max):this.value=T(o/t*this.max,this.min,this.max),this.syncValues()},initialEvent:e})}handleClick(e){this.disabled||this.readonly||(this.value=this.getValueFromMousePosition(e),this.syncValues())}handleKeyDown(e){const t=e.shiftKey?10:1;e.key==="ArrowLeft"?(e.preventDefault(),this.value=T(this.value-t,this.min,this.max),this.syncValues()):e.key==="ArrowRight"?(e.preventDefault(),this.value=T(this.value+t,this.min,this.max),this.syncValues()):e.key==="ArrowUp"?(e.preventDefault(),this.value=T(this.value+t,this.min,this.max),this.syncValues()):e.key==="ArrowDown"?(e.preventDefault(),this.value=T(this.value-t,this.min,this.max),this.syncValues()):e.key==="Home"?(e.preventDefault(),this.value=this.min,this.syncValues()):e.key==="End"&&(e.preventDefault(),this.value=this.max,this.syncValues())}getValueFromMousePosition(e){return this.vertical?this.getValueFromYCoordinate(e.clientY):this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.vertical?this.getValueFromYCoordinate(e.touches[0].clientY):this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const{left:t,width:i}=this.container.getBoundingClientRect();return T(this.roundToPrecision((e-t)/i*this.max),this.min,this.max)}getValueFromYCoordinate(e){const{top:t,height:i}=this.container.getBoundingClientRect();return T(this.roundToPrecision((e-t)/i*this.max),this.min,this.max)}roundToPrecision(e){const t=1/this.precision;return Math.ceil(e*t)/t}syncValues(){this.dispatchEvent(new za(za.CHANGE))}get cssPropCurrentValue(){return this.value===0?this.vertical?100:0:100/(this.vertical?this.max/hc(this.value,this.min,this.max):this.max/this.value)}render(){return c` <div
        part="slider"
        id="color-slider"
        role="slider"
        aria-label="${this.label}"
        aria-orientation="${this.vertical?"vertical":"horizontal"}"
        aria-valuemin="${Math.round(this.min)}"
        aria-valuemax="${Math.round(this.max)}"
        aria-valuenow="${Math.round(this.value)}"
        @click=${this.handleClick}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
        @keydown=${this.handleKeyDown}>
        ${this.type==="opacity"?c`<div
              id="current-hue"
              style=${de({backgroundImage:`linear-gradient(to ${this.vertical?"top":"right"},
            transparent 0%,
            ${this.color} 100%
            )`})}></div>`:""}
        <!-- <slot name="detail"> </slot> -->
        <span
          id="color-slider__handle"
          style="--current-value: ${this.cssPropCurrentValue}%;"
          tabindex=${k(this.disabled?void 0:"0")}>
        </span>
      </div>
      ${Math.round(this.value)}`}};It.styles=[b`
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
    `],Yt([l({reflect:!0})],It.prototype,"type",2),Yt([l()],It.prototype,"color",2),Yt([l({type:Number})],It.prototype,"min",2),Yt([l({type:Number})],It.prototype,"max",2),Yt([l({type:Number})],It.prototype,"precision",2),Yt([l({type:Boolean,reflect:!0})],It.prototype,"vertical",2),Yt([l()],It.prototype,"value",2),Yt([l({type:Boolean,reflect:!0})],It.prototype,"readonly",2),Yt([l({type:Boolean,reflect:!0})],It.prototype,"disabled",2),It=Yt([g("uui-color-slider")],It);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const po=(e,t)=>{var o;const i=e._$AN;if(i===void 0)return!1;for(const r of i)(o=r._$AO)==null||o.call(r,t,!1),po(r,t);return!0},Os=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},dh=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),eb(t)}};function Qv(e){this._$AN!==void 0?(Os(this),this._$AM=e,dh(this)):this._$AM=e}function tb(e,t=!1,i=0){const o=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(o))for(let s=i;s<o.length;s++)po(o[s],!1),Os(o[s]);else o!=null&&(po(o,!1),Os(o));else po(this,e)}const eb=e=>{e.type==Ht.CHILD&&(e._$AP??(e._$AP=tb),e._$AQ??(e._$AQ=Qv))};class ib extends tr{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,o){super._$AT(t,i,o),dh(this),this.isConnected=t._$AU}_$AO(t,i=!0){var o,r;t!==this.isConnected&&(this.isConnected=t,t?(o=this.reconnected)==null||o.call(this):(r=this.disconnected)==null||r.call(this)),i&&(po(this,t),Os(this))}setValue(t){if(jc(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}const Ma=new WeakMap,Is=Qi(class extends ib{render(e){return E}update(e,[t]){var o;const i=t!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=(o=e.options)==null?void 0:o.host,this.rt(this.ct=e.element)),E}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let i=Ma.get(t);i===void 0&&(i=new WeakMap,Ma.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,t;return typeof this.G=="function"?(e=Ma.get(this.ht??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var rb=Object.defineProperty,ob=Object.getOwnPropertyDescriptor,ph=e=>{throw TypeError(e)},cr=(e,t,i,o)=>{for(var r=o>1?void 0:o?ob(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&rb(t,i,r),r},sb=(e,t,i)=>t.has(e)||ph("Cannot "+i),nb=(e,t,i)=>t.has(e)?ph("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),ab=(e,t,i)=>(sb(e,t,"access private method"),i),Ta,fh;let Ve=class extends Gt("label",Yi(eo(_))){constructor(){super(),nb(this,Ta),this.disabled=!1,this.readonly=!1,this.showLabel=!1,this.addEventListener("click",this._setAriaAttributes)}get value(){return this._value??""}set value(e){const t=this._value;this._value=e,this.requestUpdate("value",t)}get color(){return this._color}set color(e){const t=this._color;this._color=e,this.requestUpdate("color",t)}_setAriaAttributes(){this.selectable&&this.setAttribute("aria-checked",this.selected.toString())}firstUpdated(){this._setAriaAttributes()}willUpdate(e){(e.has("disabled")||e.has("readonly"))&&this.selectable&&(this.selectable=!this.disabled&&!this.readonly,this.deselectable=!this.disabled&&!this.readonly),(e.has("selectable")||e.has("selected"))&&this._setAriaAttributes()}focus(e){var t;(t=this.selectableTarget)==null||t.focus(e)}render(){return c`
      <button
        id="swatch"
        ${Is(ab(this,Ta,fh))}
        aria-label=${this.label}
        ?disabled="${this.disabled}"
        title="${this.label}">
        <div class="color-swatch color-swatch--transparent-bg">
          <div
            class="color-swatch__color"
            style="background: var(--uui-swatch-color, ${this.color??this.value})"></div>
          <div
            class="color-swatch__check"
            style="color: var(--uui-swatch-color, ${this.color??this.value})">
            ${bs}
          </div>
        </div>
        ${this._renderWithLabel()}
      </button>
    `}_renderWithLabel(){return this.showLabel?c`<div class="color-swatch__label">
      <strong>${this.renderLabel()}</strong>
      ${this.value}
    </div>`:E}};Ta=new WeakSet,fh=function(e){this.selectableTarget=e||this},Ve.styles=[b`
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
    `],cr([l()],Ve.prototype,"value",1),cr([l()],Ve.prototype,"color",1),cr([l({type:Boolean,reflect:!0})],Ve.prototype,"disabled",2),cr([l({type:Boolean,reflect:!0})],Ve.prototype,"readonly",2),cr([l({type:Boolean,attribute:"show-label",reflect:!0})],Ve.prototype,"showLabel",2),Ve=cr([g("uui-color-swatch")],Ve);class fo extends L{constructor(t,i={}){super(t,{bubbles:!0,...i})}}fo.CHANGE="change";var lb=Object.defineProperty,ub=Object.getOwnPropertyDescriptor,vo=(e,t,i,o)=>{for(var r=o>1?void 0:o?ub(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&lb(t,i,r),r};let yi=class extends Gt("label",_){constructor(){super(),this.value="",this.disabled=!1,this.readonly=!1,this._onSelected=e=>{const t=e.target;this._swatches.includes(t)&&(this._selectedElement&&(this._selectedElement.selected=!1,this._selectedElement.active=!1,this._selectedElement=void 0),this._selectedElement=t,this._activeElement=this._selectedElement,this.value=this._selectedElement.value||"",this.dispatchEvent(new fo(fo.CHANGE)))},this._onDeselected=e=>{const t=e.target;this._swatches.includes(t)&&(this._activeElement===t&&(this._activeElement=void 0),this._selectedElement===t&&(this._selectedElement.selected=!1,this._selectedElement.active=!1,this._selectedElement=void 0,this.value="",this.dispatchEvent(new fo(fo.CHANGE))))},this.addEventListener(Be.SELECTED,this._onSelected),this.addEventListener(Be.DESELECTED,this._onDeselected)}get _activeElement(){return this.__activeElement}set _activeElement(e){this.__activeElement&&(this.__activeElement.active=!1),e&&(e.active=!0,this.__activeElement=e)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup"),this.setAttribute("aria-label",this.label)}willUpdate(e){e.has("label")&&this.setAttribute("aria-label",this.label)}_handleSlotChange(){!this._swatches||this._swatches.length===0||this._swatches.forEach(e=>{e.setAttribute("aria-checked","false"),e.setAttribute("role","radio"),this.disabled?e.setAttribute("disabled",""):e.setAttribute("selectable","selectable"),this.readonly&&e.setAttribute("readonly",""),this.value!==""&&e.value===this.value&&(e.selected=!0,e.setAttribute("aria-checked","true"),this._selectedElement=e,this._activeElement=this._selectedElement)})}resetSelection(){this._swatches.forEach(e=>{e.selected=!1,e.active=!1,e.selectable=!e.disabled}),this._activeElement=void 0,this._selectedElement=void 0,this.value=""}render(){return c`<slot @slotchange=${this._handleSlotChange}></slot>`}};yi.styles=[b`
      :host {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
      }
    `],vo([l()],yi.prototype,"value",2),vo([l({type:Boolean,reflect:!0})],yi.prototype,"disabled",2),vo([l({type:Boolean,reflect:!0})],yi.prototype,"readonly",2),vo([Le({selector:"uui-color-swatch"})],yi.prototype,"_swatches",2),yi=vo([g("uui-color-swatches")],yi);class Ut extends L{constructor(t,i={}){super(t,{bubbles:!0,...i})}}Ut.CHANGE="change",Ut.INNER_SLOT_CHANGE="inner-slot-change";var cb=Object.defineProperty,hb=Object.getOwnPropertyDescriptor,vh=e=>{throw TypeError(e)},je=(e,t,i,o)=>{for(var r=o>1?void 0:o?hb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&cb(t,i,r),r},db=(e,t,i)=>t.has(e)||vh("Cannot "+i),pb=(e,t,i)=>t.has(e)?vh("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),bh=(e,t,i)=>(db(e,t,"access private method"),i),Us,Da;let Xt=class extends _{constructor(){super(...arguments),pb(this,Us),this.displayValue="",this._value="",this._activeElementValue=null,this._onSlotChange=()=>{bh(this,Us,Da).call(this),this._updateSelection(),this.dispatchEvent(new Ut(Ut.INNER_SLOT_CHANGE))},this._onSelected=e=>{this._selectedElement&&(this._selectedElement.selected=!1,this._selectedElement.active=!1,this._selectedElement=void 0),this._selectedElement=e.composedPath()[0],this.value=this._selectedElement.value||"",this.displayValue=this._selectedElement.displayValue||"",this.dispatchEvent(new Ut(Ut.CHANGE))},this._onDeselected=e=>{const t=e.composedPath()[0];this._selectedElement===t&&(this.value="",this.displayValue="",this.dispatchEvent(new Ut(Ut.CHANGE)))},this._moveIndex=e=>{const t=Math.min(Math.max(this._getActiveIndex+e,0),this._options.length-1);this._goToIndex(t)},this._onKeyDown=e=>{var t;if(!(this._options.length<=0))switch(e.key){case"ArrowUp":e.preventDefault(),e.ctrlKey?this._moveIndex(-10):this._moveIndex(-1);break;case"ArrowDown":e.preventDefault(),e.ctrlKey?this._moveIndex(10):this._moveIndex(1);break;case"Home":{e.preventDefault(),this._goToIndex(0);break}case"Enter":{e.preventDefault(),(t=this._getActiveElement)==null||t.click();break}case"End":{e.preventDefault(),this._goToIndex(this._options.length-1);break}}}}get value(){return this._value}set value(e){if(this._value===e)return;const t=this._value;this._value=e,this._updateSelection(),this.requestUpdate("value",t)}get for(){return this._for}set for(e){this._for&&this._for.removeEventListener("keydown",this._onKeyDown),this._for=e,this._for&&this._for.addEventListener("keydown",this._onKeyDown)}connectedCallback(){super.connectedCallback(),this._for||(this._for=this),this.addEventListener(Be.SELECTED,this._onSelected),this.addEventListener(Be.DESELECTED,this._onDeselected)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),this.removeEventListener(Be.SELECTED,this._onSelected),this.removeEventListener(Be.DESELECTED,this._onDeselected)}_updateSelection(){this.displayValue="";for(const e of this._options)e.value===this._value?(this.displayValue=e.displayValue||"",e.selected=!0):e.selected=!1}get _getActiveIndex(){return this._activeElementValue===null?-1:this._options.findIndex(e=>e.value===this._activeElementValue)}get _getActiveElement(){return this._activeElementValue===null?null:this._options.find(e=>e.value===this._activeElementValue)}_goToIndex(e){if(this._options.length===0)return;e=Math.min(Math.max(e,0),this._options.length-1);const t=this._options[e];this._activeElementValue=t.value,bh(this,Us,Da).call(this),t&&t.scrollIntoView({behavior:"auto",block:"nearest",inline:"nearest"})}render(){return c` <slot @slotchange=${this._onSlotChange}></slot> `}};Us=new WeakSet,Da=function(){for(let t=0;t<this._activeOptions.length;t++)this._activeOptions[t].active=!1;const e=this._getActiveElement;e?e.active=!0:this._goToIndex(0)},Xt.styles=[b`
      :host {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
      }
    `],je([l()],Xt.prototype,"value",1),je([l({type:String})],Xt.prototype,"displayValue",2),je([l({attribute:!1})],Xt.prototype,"for",1),je([Le({flatten:!0,selector:"uui-combobox-list-option:not([disabled])"})],Xt.prototype,"_options",2),je([Le({flatten:!0,selector:"uui-combobox-list-option[active]"})],Xt.prototype,"_activeOptions",2),je([w()],Xt.prototype,"_value",2),je([w()],Xt.prototype,"_activeElementValue",2),Xt=je([g("uui-combobox-list")],Xt);var fb=Object.defineProperty,vb=Object.getOwnPropertyDescriptor,hr=(e,t,i,o)=>{for(var r=o>1?void 0:o?vb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&fb(t,i,r),r};let Re=class extends Yi(eo(_)){constructor(){super(),this._disabled=!1,this._displayValue="",this.selectable=!0,this.deselectable=!1}get value(){var e;return this._value?this._value:((e=this.textContent)==null?void 0:e.trim())||""}set value(e){const t=this._value;this._value=e,this.requestUpdate("value",t)}get displayValue(){var e;return this._displayValue?this._displayValue:((e=this.textContent)==null?void 0:e.trim())||""}set displayValue(e){const t=this._displayValue;this._displayValue=e,this.requestUpdate("displayValue",t)}get disabled(){return this._disabled}set disabled(e){const t=this._disabled;this._disabled=e,this.selectable=!this._disabled,this.requestUpdate("disabled",t)}render(){return c`<slot></slot>`}};Re.styles=[b`
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
    `],hr([w()],Re.prototype,"_disabled",2),hr([w()],Re.prototype,"_displayValue",2),hr([l({type:String})],Re.prototype,"value",1),hr([l({type:String,attribute:"display-value"})],Re.prototype,"displayValue",1),hr([l({type:Boolean,reflect:!0})],Re.prototype,"disabled",1),Re=hr([g("uui-combobox-list-option")],Re);class zt extends L{constructor(t,i={}){super(t,{bubbles:!0,...i})}}zt.SEARCH="search",zt.CHANGE="change";var bb=Object.defineProperty,gb=Object.getOwnPropertyDescriptor,gh=e=>{throw TypeError(e)},ut=(e,t,i,o)=>{for(var r=o>1?void 0:o?gb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&bb(t,i,r),r},La=(e,t,i)=>t.has(e)||gh("Cannot "+i),A=(e,t,i)=>(La(e,t,"read from private field"),i?i.call(e):t.get(e)),st=(e,t,i)=>t.has(e)?gh("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),mh=(e,t,i,o)=>(La(e,t,"write to private field"),t.set(e,i),i),zs=(e,t,i)=>(La(e,t,"access private method"),i),gt,dr,pr,_h,bo,Ms,Ts,Ds,Na,Ls,Ns,Ha,Hs,fr,Ba,Bs,Vs,Va,js;let tt=class extends qt(_,""){constructor(){super(...arguments),st(this,pr),this.closeLabel="Close",this.disabled=!1,this.hideExpandSymbol=!1,this.readonly=!1,this.placeholder="",st(this,gt),st(this,dr),this._displayValue="",this._search="",this._isPhone=!1,this._isOpen=!1,st(this,bo,()=>{this._isPhone=A(this,dr).matches}),st(this,Ts,()=>requestAnimationFrame(()=>this._input.focus())),st(this,Ds,()=>requestAnimationFrame(()=>{var e;(e=this.shadowRoot)!=null&&e.activeElement||A(this,fr).call(this)})),st(this,Na,e=>{e.preventDefault(),e.stopImmediatePropagation(),this.search=e.target.value,this.dispatchEvent(new zt(zt.SEARCH)),A(this,Hs).call(this)}),st(this,Ls,()=>{var e;this.value&&this.value!==((e=A(this,gt))==null?void 0:e.value)&&zs(this,pr,Ms).call(this)}),st(this,Ns,()=>{var e;this.value=((e=A(this,gt))==null?void 0:e.value)||"",this.search=this.value?this.search:"",A(this,fr).call(this),this.dispatchEvent(new zt(zt.CHANGE))}),st(this,Ha,()=>{this.readonly||(this.open=!this.open)}),st(this,Hs,()=>{this.open||this.readonly||(this.open=!0)}),st(this,fr,()=>{this.open&&(this.open=!1,this.search="",this._input.value=this._displayValue,this.dispatchEvent(new zt(zt.SEARCH)))}),st(this,Ba,e=>{this.open===!1&&e.key==="Enter"&&(e.preventDefault(),e.stopImmediatePropagation()),(e.key==="ArrowUp"||e.key==="ArrowDown")&&A(this,Hs).call(this),(e.key==="Escape"||e.key==="Enter")&&A(this,fr).call(this)}),st(this,Bs,e=>{e.key&&e.key!=="Enter"||(e.preventDefault(),e.stopImmediatePropagation(),this.value="",this.search="",this._input.value=this._displayValue,this._input.focus(),this.dispatchEvent(new zt(zt.SEARCH)),this.dispatchEvent(new zt(zt.CHANGE)))}),st(this,Vs,()=>c` <uui-input
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
      @click=${A(this,Ha)}
      @input=${A(this,Na)}
      @keydown=${A(this,Ba)}>
      <slot name="input-prepend" slot="prepend"></slot>
      ${A(this,Va).call(this)}
      ${this.hideExpandSymbol?E:c`<div id="expand-symbol-wrapper" slot="append">
            <uui-symbol-expand .open=${this._isOpen}></uui-symbol-expand>
          </div>`}
      <slot name="input-append" slot="append"></slot>
    </uui-input>`),st(this,Va,()=>this.disabled||this.readonly?E:c`<uui-button
      id="clear-button"
      @click=${A(this,Bs)}
      @keydown=${A(this,Bs)}
      label="clear"
      slot="append"
      compact
      style="height: 100%;"
      tabindex=${this.value||this.search?"":"-1"}
      class=${this.value||this.search?"visible":""}>
      <uui-icon name="remove" .fallback=${ha.strings[0]}></uui-icon>
    </uui-button>`),st(this,js,()=>c`<div id="dropdown">
      <uui-scroll-container tabindex="-1" id="scroll-container">
        <slot @slotchange=${zs(this,pr,_h)}></slot>
      </uui-scroll-container>
    </div>`)}get value(){return super.value}set value(e){super.value=e,typeof e=="string"&&zs(this,pr,Ms).call(this)}get search(){return this._search}set search(e){if(this.search===e)return;const t=this._search;this._search=e,this.requestUpdate("search",t)}get open(){return this._isOpen}set open(e){const t=e;this._isOpen=e;const i=this._comboboxPopoverElement;if(i)if(e){const o=this._input.offsetWidth;i.style.setProperty("--popover-width",`${o}px`),i.showPopover()}else i.hidePopover();this.requestUpdate("open",t)}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",A(this,Ds)),this.addEventListener("mousedown",A(this,Ts)),mh(this,dr,window.matchMedia("(max-width: 600px)")),A(this,bo).call(this),A(this,dr).addEventListener("change",A(this,bo)),C(this,"uui-icon"),C(this,"uui-input"),C(this,"uui-button"),C(this,"uui-combobox-list"),C(this,"uui-scroll-container"),C(this,"uui-popover-container"),C(this,"uui-symbol-expand")}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",A(this,Ds)),this.removeEventListener("mousedown",A(this,Ts)),A(this,dr).removeEventListener("change",A(this,bo))}getFormElement(){return this._input}async focus(){await this.updateComplete,this._input.focus()}async blur(){await this.updateComplete,this._input.blur()}async click(){await this.updateComplete,this._input.click()}render(){return this._isPhone&&this.open?c` <div id="phone-wrapper">
        <uui-button label="close" look="primary" @click=${A(this,fr)}>
          ${this.closeLabel}
        </uui-button>
        ${A(this,Vs).call(this)} ${A(this,js).call(this)}
      </div>`:c`
        ${A(this,Vs).call(this)}
        <uui-popover-container
          id="combobox-popover"
          popover="manual"
          placement="bottom-end">
          ${A(this,js).call(this)}
        </uui-popover-container>
      `}};gt=new WeakMap,dr=new WeakMap,pr=new WeakSet,_h=function(){var t;A(this,gt)&&(A(this,gt).removeEventListener(Ut.CHANGE,A(this,Ns)),A(this,gt).removeEventListener(Ut.INNER_SLOT_CHANGE,A(this,Ls)));const e=(t=this._comboboxListElements)==null?void 0:t[0];e&&(mh(this,gt,e),A(this,gt).for=this,A(this,gt).addEventListener(Ut.CHANGE,A(this,Ns)),A(this,gt).addEventListener(Ut.INNER_SLOT_CHANGE,A(this,Ls))),this.updateComplete.then(()=>{zs(this,pr,Ms).call(this)})},bo=new WeakMap,Ms=function(){A(this,gt)&&(A(this,gt).value=this.value,requestAnimationFrame(()=>this._displayValue=A(this,gt).displayValue||""))},Ts=new WeakMap,Ds=new WeakMap,Na=new WeakMap,Ls=new WeakMap,Ns=new WeakMap,Ha=new WeakMap,Hs=new WeakMap,fr=new WeakMap,Ba=new WeakMap,Bs=new WeakMap,Vs=new WeakMap,Va=new WeakMap,js=new WeakMap,tt.styles=[b`
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
    `],ut([l({attribute:"value",reflect:!0})],tt.prototype,"value",1),ut([l({type:String})],tt.prototype,"search",1),ut([l({type:Boolean})],tt.prototype,"open",1),ut([l({type:String,attribute:"close-label"})],tt.prototype,"closeLabel",2),ut([l({type:Boolean,reflect:!0})],tt.prototype,"disabled",2),ut([l({type:Boolean,reflect:!1,attribute:"hide-expand-symbol"})],tt.prototype,"hideExpandSymbol",2),ut([l({type:Boolean,reflect:!0})],tt.prototype,"readonly",2),ut([l()],tt.prototype,"placeholder",2),ut([z("#combobox-input")],tt.prototype,"_input",2),ut([z("#combobox-popover")],tt.prototype,"_comboboxPopoverElement",2),ut([Le({flatten:!0,selector:"uui-combobox-list"})],tt.prototype,"_comboboxListElements",2),ut([w()],tt.prototype,"_displayValue",2),ut([w()],tt.prototype,"_search",2),ut([w()],tt.prototype,"_isPhone",2),ut([w()],tt.prototype,"_isOpen",2),tt=ut([g("uui-combobox")],tt);var mb=Object.defineProperty,_b=Object.getOwnPropertyDescriptor,ja=(e,t,i,o)=>{for(var r=o>1?void 0:o?_b(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&mb(t,i,r),r};let go=class extends _{constructor(){super(...arguments),this.headline=null,this._headlineSlotHasContent=!1,this._headlineSlotChanged=e=>{this._headlineSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0}}renderHeadline(){return c` <h3
      style=${this._headlineSlotHasContent||this.headline!==null?"":"display: none"}>
      ${this.headline}
      <slot name="headline" @slotchange=${this._headlineSlotChanged}></slot>
    </h3>`}renderContent(){return c`<slot></slot>`}renderActions(){return c`<slot id="actions" name="actions"></slot>`}render(){return c`${this.renderHeadline()} ${this.renderContent()}
    ${this.renderActions()} `}};go.styles=[b`
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
    `],ja([l({type:String})],go.prototype,"headline",2),ja([w()],go.prototype,"_headlineSlotHasContent",2),go=ja([g("uui-dialog-layout")],go);var yb=Object.getOwnPropertyDescriptor,wb=(e,t,i,o)=>{for(var r=o>1?void 0:o?yb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Ra=class extends _{render(){return c`<slot></slot>`}};Ra.styles=[b`
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
    `],Ra=wb([g("uui-dialog")],Ra);var xb=Object.defineProperty,$b=Object.getOwnPropertyDescriptor,yh=(e,t,i,o)=>{for(var r=o>1?void 0:o?$b(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&xb(t,i,r),r};let Rs=class extends _{constructor(){super(...arguments),this.error=!1}render(){return c`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      id="upload-icon">
      <path
        d=${this.error?"M254.501 38.16c-120.308 0-217.838 97.53-217.838 217.838 0 120.31 97.53 217.838 217.838 217.838 120.31 0 217.838-97.528 217.838-217.838 0-120.308-97.528-217.838-217.838-217.838zm151.667 217.838c0 29.861-8.711 57.708-23.671 81.209L173.293 128.002c23.499-14.961 51.345-23.67 81.208-23.67 83.629.001 151.667 68.037 151.667 151.666zm-303.332 0c0-29.859 8.71-57.707 23.67-81.204l209.201 209.201c-23.498 14.96-51.346 23.671-81.206 23.671-83.632 0-151.665-68.04-151.665-151.668z":"M206.491 364.184h99.013V223.676h92.922L255.997 51.111 113.575 223.676h92.916zM85.043 398.311h341.912v62.578H85.043z"} />
    </svg> `}};Rs.styles=[b`
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
    `],yh([l({type:Boolean,reflect:!0})],Rs.prototype,"error",2),Rs=yh([g("uui-symbol-file-dropzone")],Rs);class mo extends L{constructor(t,i={}){super(t,{bubbles:!0,...i})}}mo.CHANGE="change";var kb=Object.defineProperty,Cb=Object.getOwnPropertyDescriptor,vr=(e,t,i,o)=>{for(var r=o>1?void 0:o?Cb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&kb(t,i,r),r};let Fe=class extends Gt("",_){constructor(){super(),this._acceptedFileExtensions=[],this._acceptedMimeTypes=[],this._accept="",this.disallowFolderUpload=!1,this.multiple=!1,this.addEventListener("dragenter",this._onDragEnter,!1),this.addEventListener("dragleave",this._onDragLeave,!1),this.addEventListener("dragover",this._onDragOver,!1),this.addEventListener("drop",this._onDrop,!1)}set accept(e){if(e){const i=[],o=[];e.split(",").forEach(r=>{r=r.trim().toLowerCase(),/[a-z]+\/[a-z*]/s.test(r)?i.push(r):o.push(r.replace(/^\./,""))}),this._acceptedMimeTypes=i,this._acceptedFileExtensions=o}else this._acceptedMimeTypes=[],this._acceptedFileExtensions=[];const t=this._accept;this._accept=e,this.requestUpdate("accept",t)}get accept(){return this._accept}browse(){this._input.click()}async _getAllEntries(e){const t=[...e],i=[],o=[];for(const r of t){if((r==null?void 0:r.kind)!=="file")continue;const s=this._getEntry(r);if(s)if(s.isDirectory){if(!this.disallowFolderUpload&&this.multiple){const n=await this._mkdir(s);i.push(n)}}else{const n=r.getAsFile();if(!n)continue;this._isAccepted(n)&&o.push(n)}}return{files:o,folders:i}}_getEntry(e){let t=null;return"webkitGetAsEntry"in e?t=e.webkitGetAsEntry():"getAsEntry"in e&&(t=e.getAsEntry()),t}async _mkdir(e){const t=e.createReader(),i=[],o=[],r=n=>new Promise((a,u)=>{n.readEntries(async h=>{if(!h.length){a();return}for(const f of h)if(f.isFile){const d=await this._getAsFile(f);this._isAccepted(d)&&o.push(d)}else if(f.isDirectory){const d=await this._mkdir(f);i.push(d)}await r(n),a()},u)});return await r(t),{folderName:e.name,folders:i,files:o}}_isAccepted(e){if(this._acceptedFileExtensions.length===0&&this._acceptedMimeTypes.length===0)return!0;const t=e.type.toLowerCase(),i=e.name.split(".").pop();if(i&&this._acceptedFileExtensions.includes(i.toLowerCase()))return!0;for(const o of this._acceptedMimeTypes){if(t===o)return!0;if(o.endsWith("/*")&&t.startsWith(o.replace("*","")))return!0}return!1}async _getAsFile(e){return new Promise((t,i)=>e.file(t,i))}async _onDrop(e){var i;e.preventDefault(),this._dropzone.classList.remove("hover");const t=(i=e.dataTransfer)==null?void 0:i.items;if(t){const o=await this._getAllEntries(t);if(this.multiple===!1&&o.files.length&&(o.files=[o.files[0]],o.folders=[]),!o.files.length&&!o.folders.length)return;this.dispatchEvent(new mo(mo.CHANGE,{detail:o}))}}_onDragOver(e){e.preventDefault()}_onDragEnter(e){this._dropzone.classList.add("hover"),e.preventDefault()}_onDragLeave(e){this._dropzone.classList.remove("hover"),e.preventDefault()}_onFileInputChange(){const e=this._input.files?Array.from(this._input.files):[];this.multiple===!1&&e.length>1&&e.splice(1,e.length-1);const t=e.filter(i=>this._isAccepted(i));t.length&&this.dispatchEvent(new mo(mo.CHANGE,{detail:{files:t,folders:[]}}))}render(){return c`
      <div id="dropzone">
        <uui-symbol-file-dropzone id="symbol"></uui-symbol-file-dropzone>
        ${this.renderLabel()}
        <input
          @click=${e=>e.stopImmediatePropagation()}
          id="input"
          type="file"
          accept=${this.accept}
          ?multiple=${this.multiple}
          @change=${this._onFileInputChange}
          aria-label="${this.label}" />
        <slot></slot>
      </div>
    `}};Fe.styles=[b`
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
    `],vr([z("#input")],Fe.prototype,"_input",2),vr([z("#dropzone")],Fe.prototype,"_dropzone",2),vr([l({type:String})],Fe.prototype,"accept",1),vr([l({type:Boolean,reflect:!0,attribute:"disallow-folder-upload"})],Fe.prototype,"disallowFolderUpload",2),vr([l({type:Boolean})],Fe.prototype,"multiple",2),Fe=vr([g("uui-file-dropzone")],Fe);class Eb{static humanFileSize(t,i=!1,o=1){const r=i?1e3:1024;if(Math.abs(t)<r)return t+" B";const s=i?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];let n=-1;const a=10**o;do t/=r,++n;while(Math.round(Math.abs(t)*a)/a>=r&&n<s.length-1);return t.toFixed(o)+" "+s[n]}}var Pb=Object.defineProperty,Sb=Object.getOwnPropertyDescriptor,Zt=(e,t,i,o)=>{for(var r=o>1?void 0:o?Sb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Pb(t,i,r),r};let Mt=class extends _{constructor(){super(...arguments),this._name="",this._url="",this._extension="",this._src="",this._size=0,this._isDirectory=!1}get file(){return this._file}set file(e){const t=this._file;e instanceof File&&(this._name=e.name.split(".")[0],this._extension=e.name.split(".")[1],this._isDirectory=!1,this._size=e.size,this._isFileAnImage(e)&&(this._isImage=!0,this._getThumbnail(e).then(i=>{this._src=i})),this.requestUpdate("file",t))}connectedCallback(){super.connectedCallback(),C(this,"uui-symbol-file-thumbnail"),C(this,"uui-symbol-folder"),C(this,"uui-symbol-file")}_openSource(){window.open(this._url,"_blank")}_fileTypeTemplate(){return this._isDirectory?c`<uui-symbol-folder id="file-symbol"></uui-symbol-folder>`:this._isImage?c`<uui-symbol-file-thumbnail
        .src=${this._src}
        .alt=${this._name}
        id="file-symbol"></uui-symbol-file-thumbnail>`:c`<uui-symbol-file
      id="file-symbol"
      .type=${this._extension}></uui-symbol-file>`}_renderLongName(){const t=this._name.substring(0,this._name.length-6),i=this._name.substring(this._name.length-6,this._name.length);return c`
      <span
        id="file-name"
        class=${this._url?"has-source":""}
        @click=${()=>this._url?this._openSource():""}
        @keydown=${()=>""}>
        <span id="file-name-start">${t}</span>
        <span id="file-name-end">${i}</span>
      </span>
    `}_isFileAnImage(e){return e?e.type.split("/")[0]==="image":!1}async _getThumbnail(e){return await new Promise(t=>{const i=new FileReader;i.readAsDataURL(e),i.onload=()=>{t(i.result)}})}render(){return c`
      <slot id="actions" name="actions"></slot>
      ${this._fileTypeTemplate()}
      <div id="file-info">
        ${this._renderLongName()}
        <span id="file-size">
          ${this._size&&!this._isDirectory?c`${Eb.humanFileSize(this._size,!0)}`:""}
        </span>
      </div>
    `}};Mt.styles=[b`
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
    `],Zt([w()],Mt.prototype,"_name",2),Zt([w()],Mt.prototype,"_url",2),Zt([w()],Mt.prototype,"_extension",2),Zt([w()],Mt.prototype,"_src",2),Zt([w()],Mt.prototype,"_size",2),Zt([w()],Mt.prototype,"_isDirectory",2),Zt([w()],Mt.prototype,"_file",2),Zt([w()],Mt.prototype,"_isImage",2),Zt([l({attribute:!1})],Mt.prototype,"file",1),Mt=Zt([g("uui-file-preview")],Mt);var Ab=Object.defineProperty,Ob=Object.getOwnPropertyDescriptor,Fs=(e,t,i,o)=>{for(var r=o>1?void 0:o?Ob(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Ab(t,i,r),r};let br=class extends _{constructor(){super(...arguments),this.description=null,this._labelSlotHasContent=!1,this._labelSlotChanged=e=>{this._labelSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0},this._descriptionSlotHasContent=!1,this._descriptionSlotChanged=e=>{this._descriptionSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0}}connectedCallback(){super.connectedCallback(),C(this,"uui-form-validation-message")}render(){return c`
      <div id="label" style=${this._labelSlotHasContent?"":"display: none"}>
        <slot name="label" @slotchange=${this._labelSlotChanged}></slot>
      </div>
      <div
        id="description"
        style=${this._descriptionSlotHasContent||this.description!==null?"":"display: none"}>
        ${this.description}
        <slot
          name="description"
          @slotchange=${this._descriptionSlotChanged}></slot>
      </div>
      <uui-form-validation-message>
        <slot></slot>
        <slot name="message" slot="message"></slot>
      </uui-form-validation-message>
    `}};br.styles=[b`
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
    `],Fs([l({type:String})],br.prototype,"description",2),Fs([w()],br.prototype,"_labelSlotHasContent",2),Fs([w()],br.prototype,"_descriptionSlotHasContent",2),br=Fs([g("uui-form-layout-item")],br);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wh=(e,t,i)=>{const o=new Map;for(let r=t;r<=i;r++)o.set(e[r],r);return o},Fa=Qi(class extends tr{constructor(e){if(super(e),e.type!==Ht.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let o;i===void 0?i=t:t!==void 0&&(o=t);const r=[],s=[];let n=0;for(const a of e)r[n]=o?o(a,n):n,s[n]=i(a,n),n++;return{values:s,keys:r}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,o]){const r=Iv(e),{values:s,keys:n}=this.dt(t,i,o);if(!Array.isArray(r))return this.ut=n,s;const a=this.ut??(this.ut=[]),u=[];let h,f,d=0,x=r.length-1,v=0,$=s.length-1;for(;d<=x&&v<=$;)if(r[d]===null)d++;else if(r[x]===null)x--;else if(a[d]===n[v])u[v]=_i(r[d],s[v]),d++,v++;else if(a[x]===n[$])u[$]=_i(r[x],s[$]),x--,$--;else if(a[d]===n[$])u[$]=_i(r[d],s[$]),lo(e,u[$+1],r[d]),d++,$--;else if(a[x]===n[v])u[v]=_i(r[x],s[v]),lo(e,r[d],r[x]),x--,v++;else if(h===void 0&&(h=wh(n,v,$),f=wh(a,d,x)),h.has(a[d]))if(h.has(a[x])){const O=f.get(n[v]),N=O!==void 0?r[O]:null;if(N===null){const ht=lo(e,r[d]);_i(ht,s[v]),u[v]=ht}else u[v]=_i(N,s[v]),lo(e,r[d],N),r[O]=null;v++}else ka(r[x]),x--;else ka(r[d]),d++;for(;v<=$;){const O=lo(e,u[$+1]);_i(O,s[v]),u[v++]=O}for(;d<=x;){const O=r[d++];O!==null&&ka(O)}return this.ut=n,Fc(e,u),bt}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Wa extends tr{constructor(t){if(super(t),this.it=E,t.type!==Ht.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===E||t==null)return this._t=void 0,this.it=t;if(t===bt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}Wa.directiveName="unsafeHTML",Wa.resultType=1;const Ws=Qi(Wa);var Ib=Object.defineProperty,Ub=Object.getOwnPropertyDescriptor,xh=(e,t,i,o)=>{for(var r=o>1?void 0:o?Ub(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Ib(t,i,r),r};let Gs=class extends _{constructor(){super(),this._for=null,this._messages=new Map,this._onControlInvalid=e=>{const t=e.composedPath()[0];t.pristine===!1?this._messages.set(t,t.validationMessage):this._messages.delete(t),this.requestUpdate("_messages")},this._onControlValid=e=>{const t=e.composedPath()[0];this._messages.delete(t),this.requestUpdate("_messages")},this.for===null&&(this.for=this)}get for(){return this._for}set for(e){let t=null;if(typeof e=="string"){const r=this.getRootNode();t=r==null?void 0:r.getElementById(e)}else e instanceof HTMLElement&&(t=e);const i=t??this,o=this._for;o!==i&&(o!==null&&(o.removeEventListener(Xi.INVALID,this._onControlInvalid),o.removeEventListener(Xi.VALID,this._onControlValid)),this._for=i,this._for.addEventListener(Xi.INVALID,this._onControlInvalid),this._for.addEventListener(Xi.VALID,this._onControlValid))}render(){return c`
      <slot></slot>
      <div id="messages">
        ${Fa(this._messages,e=>c`<div>${Ws(e[1])}</div>`)}
        <slot name="message"></slot>
      </div>
    `}};Gs.styles=[b`
      #messages {
        color: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
      }
    `],xh([l({reflect:!1,attribute:!0})],Gs.prototype,"for",1),Gs=xh([g("uui-form-validation-message")],Gs);var zb=Object.getOwnPropertyDescriptor,Mb=(e,t,i,o)=>{for(var r=o>1?void 0:o?zb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let $h=class extends _{constructor(){super(...arguments),this._formElement=null}getFormElement(){return this._formElement}_onSlotChanged(e){this._formElement&&(this._formElement.removeEventListener("submit",this._onSubmit),this._formElement.removeEventListener("reset",this._onReset));const t=e.target.assignedNodes({flatten:!0}).filter(i=>i instanceof HTMLFormElement);this._formElement=t.length>0?t[0]:null,this._formElement&&(this._formElement.setAttribute("novalidate",""),this._formElement.addEventListener("submit",this._onSubmit),this._formElement.addEventListener("reset",this._onReset))}_onSubmit(e){if(e.target===null)return;const t=e.target;if(!t.checkValidity()){t.setAttribute("submit-invalid","");return}t.removeAttribute("submit-invalid")}_onReset(e){e.target!==null&&e.target.removeAttribute("submit-invalid")}render(){return c`<slot @slotchange=${this._onSlotChanged}></slot>`}};$h=Mb([g("uui-form")],$h);class _o extends L{constructor(t,i={}){super(t,{bubbles:!0,composed:!0,...i}),this.icon=null}acceptRequest(t){this.icon=t,this.stopImmediatePropagation()}}_o.ICON_REQUEST="icon-request";var Tb=Object.defineProperty,Db=Object.getOwnPropertyDescriptor,wi=(e,t,i,o)=>{for(var r=o>1?void 0:o?Db(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Tb(t,i,r),r};let me=class extends _{constructor(){super(...arguments),this._name=null,this._retrievedNameIcon=!1,this._nameSvg=null,this.label="",this.svg=null,this.fallback=null,this._useFallback=!1}get name(){return this._name}set name(e){this._name=e,this.shadowRoot&&this.requestIcon()}requestIcon(){if(this._name!==""&&this._name!==null){const e=new _o(_o.ICON_REQUEST,{detail:{iconName:this._name}});this.dispatchEvent(e),e.icon!==null?(this._retrievedNameIcon=!0,e.icon.then(t=>{this._useFallback=!1,this._nameSvg=t})):(this._retrievedNameIcon=!1,this._useFallback=!0)}}connectedCallback(){super.connectedCallback(),this._retrievedNameIcon===!1&&this.requestIcon()}disconnectedCallback(){this._retrievedNameIcon=!1}firstUpdated(){this._retrievedNameIcon===!1&&this.requestIcon(),typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}render(){return this._useFallback===!0?this.fallback===null?c`<slot name="fallback"></slot>`:c`${Ws(this.fallback)}`:this._nameSvg!==null?c`${Ws(this._nameSvg)}`:this.svg!==null?c`${Ws(this.svg)}`:c`<slot></slot>`}};me.styles=[b`
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
    `],wi([w()],me.prototype,"_nameSvg",2),wi([l()],me.prototype,"label",2),wi([l()],me.prototype,"name",1),wi([l({attribute:!1})],me.prototype,"svg",2),wi([l({attribute:!1})],me.prototype,"fallback",2),wi([w()],me.prototype,"_useFallback",2),me=wi([g("uui-icon")],me);class kh{constructor(t){this.promise=new Promise((i,o)=>{this.resolve=i,this.reject=o}),t&&this.resolve(t)}set svg(t){this.resolve(t)}}class Ch{constructor(){this.icons={},this._onIconRequest=t=>{const i=this.getIcon(t.detail.iconName);i!==null&&t.acceptRequest(i)}}attach(t){t.addEventListener(_o.ICON_REQUEST,this._onIconRequest)}detach(t){t.removeEventListener(_o.ICON_REQUEST,this._onIconRequest)}defineIcon(t,i){if(this.icons[t]){this.icons[t].svg=i;return}this.icons[t]=new kh(i)}getIcon(t){return this.icons[t]||this.acceptIcon(t)?this.icons[t].promise:null}provideIcon(t){return this.icons[t]=new kh}acceptIcon(t){return!1}getIconNames(){return Object.keys(this.icons)}}var Lb=Object.defineProperty,Nb=Object.getOwnPropertyDescriptor,Eh=(e,t,i,o)=>{for(var r=o>1?void 0:o?Nb(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Lb(t,i,r),r};let qs=class extends _{constructor(){super(),this._icons={},this._registry=new Ch,this._registry.attach(this)}get icons(){return this._icons}set icons(e){this._icons=e,this._registry&&Object.entries(this._icons).forEach(([t,i])=>this._registry.defineIcon(t,i))}get registry(){return this._registry}set registry(e){this.registry&&this.registry.detach(this),e.attach(this),this._registry=e}render(){return c`<slot></slot>`}};Eh([l({attribute:!1})],qs.prototype,"_icons",2),qs=Eh([g("uui-icon-registry")],qs);const Hb=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,Bb=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>`,Vb=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>`,jb=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>`,Rb=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>`,Fb=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>`,Wb=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>`,Gb=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m2 22 1-1h3l9-9" /><path d="M3 21v-3l9-9" /><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" /></svg>`,qb=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" /><path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" /><path d="M15 2v5h5" /></svg>`,Kb=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>`,Yb=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>`,Xb=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>`,Zb=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>`,Jb=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>`,Qb=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /><path d="M2 10h20" /></svg>`,tg=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`,eg=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>`,ig=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>`,rg=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>`,og=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="4" height="16" x="6" y="4" /><rect width="4" height="16" x="14" y="4" /></svg>`,sg=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>`,ng=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>`,ag=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>`,lg=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>`,ug=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>`,cg=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>`,hg=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>`,dg=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>`,pg=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></svg>`,fg=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg>`,vg=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2" /><path d="M15 16v-2" /><path d="M8 9h2" /><path d="M20 9h2" /><path d="M17.8 11.8 19 13" /><path d="M15 9h0" /><path d="M17.8 6.2 19 5" /><path d="m3 21 9-9" /><path d="M12.2 6.2 11 5" /></svg>`,bg=y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`;class gg extends Ch{constructor(){super(),this.defineIcon("add",Hb.strings[0]),this.defineIcon("alert",Bb.strings[0]),this.defineIcon("attachment",Vb.strings[0]),this.defineIcon("calendar",jb.strings[0]),this.defineIcon("check",Rb.strings[0]),this.defineIcon("clipboard",Fb.strings[0]),this.defineIcon("code",Wb.strings[0]),this.defineIcon("colorpicker",Gb.strings[0]),this.defineIcon("copy",qb.strings[0]),this.defineIcon("delete",Kb.strings[0]),this.defineIcon("document",Yb.strings[0]),this.defineIcon("download",Xb.strings[0]),this.defineIcon("edit",Zb.strings[0]),this.defineIcon("favorite",Jb.strings[0]),this.defineIcon("folder",Qb.strings[0]),this.defineIcon("forbidden",tg.strings[0]),this.defineIcon("info",eg.strings[0]),this.defineIcon("link",ig.strings[0]),this.defineIcon("lock",rg.strings[0]),this.defineIcon("pause",og.strings[0]),this.defineIcon("picture",sg.strings[0]),this.defineIcon("play",ng.strings[0]),this.defineIcon("remove",ag.strings[0]),this.defineIcon("search",lg.strings[0]),this.defineIcon("see",ug.strings[0]),this.defineIcon("settings",cg.strings[0]),this.defineIcon("subtract",hg.strings[0]),this.defineIcon("sync",dg.strings[0]),this.defineIcon("unlock",pg.strings[0]),this.defineIcon("unsee",fg.strings[0]),this.defineIcon("wand",vg.strings[0]),this.defineIcon("wrong",bg.strings[0])}}var mg=Object.getOwnPropertyDescriptor,_g=(e,t,i,o)=>{for(var r=o>1?void 0:o?mg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Ph=class extends qs{constructor(){super(),this.registry=new gg}};Ph=_g([g("uui-icon-registry-essential")],Ph);var yg=Object.defineProperty,wg=Object.getOwnPropertyDescriptor,gr=(e,t,i,o)=>{for(var r=o>1?void 0:o?wg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&yg(t,i,r),r};let We=class extends qt(_){constructor(){super(),this.accept="",this.multiple=!1,this._files=[],this._updateFileWrappers=e=>{let t=[];for(const i of e)this.multiple?t.push(i):t=[i];this._files=t},this.addEventListener("dragenter",()=>this._setShowDropzone(!0)),this.addEventListener("dragleave",()=>this._setShowDropzone(!1)),this.addEventListener("drop",()=>this._setShowDropzone(!1))}get value(){return super.value}set value(e){if(super.value=e,e instanceof FormData){const t=this.multiple?e.getAll(this.name):[e.get(this.name)];this._updateFileWrappers(t);return}if(e instanceof File){this._updateFileWrappers([e]);return}}connectedCallback(){super.connectedCallback(),C(this,"uui-icon"),C(this,"uui-file-dropzone"),C(this,"uui-button"),C(this,"uui-action-bar"),C(this,"uui-file-preview")}getFormElement(){return this._dropZone}async blur(){await this.updateComplete,this._dropzone.blur()}async focus(){await this.updateComplete,this._dropzone.focus()}async click(){await this.updateComplete,this._dropzone.browse()}_handleClick(e){e.stopImmediatePropagation(),this._dropzone.browse()}async _handleFilesChange(e){const i=e.detail.files.filter(r=>r instanceof File||r.isFile);if(!this.multiple){const r=i[0],n=r instanceof File?r:await this._getFile(r);if(this.value instanceof File){this.value=n;return}if(this.value instanceof FormData){this.value.delete(this.name),this.value.append(this.name,n),this._updateFileWrappers([n]);return}}let o=this.value;if(i.length>0&&!(this.value instanceof FormData)&&(o=new FormData),o instanceof FormData)for(const r of i){const s=r instanceof File;o.append(this.name,s?r:await this._getFile(r))}this.value=o}async _getFile(e){return await new Promise((t,i)=>e.file(t,i))}_removeFile(e){const t=this._files[e];if(this.value instanceof FormData){const o=this.value.getAll(this.name).filter(r=>r!==t);if(o.length===0)this.value="";else{this.value.delete(this.name);for(const r of o)this.value.append(this.name,r)}this._updateFileWrappers(o)}this.value instanceof File&&(this.value="",this._updateFileWrappers([]))}_setShowDropzone(e){e?this._dropZone.style.display="flex":this._dropZone.style.display="none"}_renderFileItem(e,t){return c`<uui-file-preview .file="${e}">
      <uui-action-bar slot="actions">
        <uui-button
          @click=${()=>this._removeFile(t)}
          color="danger"
          label=${`Delete ${e.name}`}>
          <uui-icon name="delete" .fallback=${Df.strings[0]}></uui-icon>
        </uui-button>
      </uui-action-bar>
    </uui-file-preview>`}_renderFiles(){return c`${Fa(this._files,e=>e.name+e.size,(e,t)=>this._renderFileItem(e,t))}`}render(){return c`
      <uui-file-dropzone
        id="dropzone"
        ?multiple=${this.multiple}
        .accept=${this.accept}
        @change=${this._handleFilesChange}
        label="Drop files here"></uui-file-dropzone>
      <div id="files">
        ${this._renderFiles()}
        ${this._files.length===0||this.multiple?c`<uui-button
              @click=${this._handleClick}
              id="add-button"
              look="placeholder"
              label="Add"></uui-button>`:E}
      </div>
    `}};We.styles=[b`
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
    `],gr([z("#dropzone")],We.prototype,"_dropzone",2),gr([z("#dropzone")],We.prototype,"_dropZone",2),gr([l({type:String})],We.prototype,"accept",2),gr([l({type:Boolean})],We.prototype,"multiple",2),gr([w()],We.prototype,"_files",2),We=gr([g("uui-input-file")],We);class mr extends L{constructor(t,i={}){super(t,{bubbles:!0,...i})}}mr.CHANGE="change",mr.INPUT="input";var xg=Object.defineProperty,$g=Object.getOwnPropertyDescriptor,Sh=e=>{throw TypeError(e)},et=(e,t,i,o)=>{for(var r=o>1?void 0:o?$g(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&xg(t,i,r),r},kg=(e,t,i)=>t.has(e)||Sh("Cannot "+i),Cg=(e,t,i)=>t.has(e)?Sh("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Eg=(e,t,i)=>(kg(e,t,"access private method"),i),Ga,Ah;let B=class extends qt(Gt("",_),""){constructor(){super(),Cg(this,Ga),this.minlengthMessage=e=>`${e} characters left`,this.maxlengthMessage=(e,t)=>`Maximum length exceeded (${t}/${e} characters)`,this.disabled=!1,this.readonly=!1,this.placeholder="",this.autoWidth=!1,this.inputMode="text",this.tabIndex=0,this._type="text",this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0")}),this.addEventListener("blur",()=>{this.style.setProperty("--uui-show-focus-outline","")}),this.addEventListener("keydown",Eg(this,Ga,Ah)),this.addValidator("tooShort",()=>{const e=this.minlengthMessage;return typeof e=="function"?e(this.minlength?this.minlength-String(this.value).length:0):e},()=>!!this.minlength&&String(this.value).length<this.minlength),this.addValidator("tooLong",()=>{const e=this.maxlengthMessage;return typeof e=="function"?e(this.maxlength??0,String(this.value).length):e},()=>!!this.maxlength&&String(this.value).length>this.maxlength),this.updateComplete.then(()=>{this.addFormControlElement(this._input)})}get type(){return this._type}set type(e){this._type=e}async blur(){await this.updateComplete,this._input.blur()}async focus(){await this.updateComplete,this._input.focus()}async select(){await this.updateComplete,this._input.select()}getFormElement(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("input")}onInput(e){e.stopPropagation(),this.value=e.target.value,this.dispatchEvent(new mr(mr.INPUT))}onChange(e){e.stopPropagation(),this.pristine=!1,this.dispatchEvent(new mr(mr.CHANGE))}renderPrepend(){return c`<slot name="prepend"></slot>`}renderAppend(){return c`<slot name="append"></slot>`}render(){return c`
      ${this.renderPrepend()}
      ${this.autoWidth?this.renderInputWithAutoWidth():this.renderInput()}
      ${this.renderAppend()}
    `}renderInputWithAutoWidth(){return c`<div id="control">
      ${this.renderInput()}${this.renderAutoWidthBackground()}
    </div>`}renderInput(){return c`<input
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
      @change=${this.onChange} />`}renderAutoWidthBackground(){return c` <div id="auto" aria-hidden="true">${this.renderText()}</div>`}renderText(){return c`${this.value.length>0?this.value:this.placeholder}`}};Ga=new WeakSet,Ah=function(e){this.type!=="color"&&e.key=="Enter"&&this.submit()},B.formAssociated=!0,B.styles=[b`
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
    `],et([l()],B.prototype,"min",2),et([l({type:Number})],B.prototype,"minlength",2),et([l({attribute:"minlength-message"})],B.prototype,"minlengthMessage",2),et([l()],B.prototype,"max",2),et([l({type:Number})],B.prototype,"maxlength",2),et([l({attribute:"maxlength-message"})],B.prototype,"maxlengthMessage",2),et([l({type:Number})],B.prototype,"step",2),et([l({type:Boolean,reflect:!0})],B.prototype,"disabled",2),et([l({type:Boolean,reflect:!0})],B.prototype,"readonly",2),et([l()],B.prototype,"placeholder",2),et([l()],B.prototype,"autocomplete",2),et([l({type:Boolean,reflect:!0,attribute:"auto-width"})],B.prototype,"autoWidth",2),et([l({type:String})],B.prototype,"type",1),et([l({attribute:"inputmode"})],B.prototype,"inputMode",2),et([l({type:String})],B.prototype,"pattern",2),et([l({type:Number,reflect:!1,attribute:"tabindex"})],B.prototype,"tabIndex",2),et([z("#input")],B.prototype,"_input",2),B=et([g("uui-input")],B);class qa extends L{constructor(t,i={}){super(t,{bubbles:!0,...i})}}qa.LOCK_CHANGE="lock-change";var Pg=Object.defineProperty,Sg=Object.getOwnPropertyDescriptor,Oh=e=>{throw TypeError(e)},Ks=(e,t,i,o)=>{for(var r=o>1?void 0:o?Sg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Pg(t,i,r),r},Ih=(e,t,i)=>t.has(e)||Oh("Cannot "+i),Ag=(e,t,i)=>(Ih(e,t,"read from private field"),i?i.call(e):t.get(e)),Og=(e,t,i)=>t.has(e)?Oh("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Ig=(e,t,i,o)=>(Ih(e,t,"write to private field"),t.set(e,i),i),Ys;let _r=class extends B{constructor(){super(),Og(this,Ys,!0),this.unlockLabel="Unlock input",this.lockLabel="Lock input",this.readonly=!0,this.tabIndex=-1}set locked(e){Ig(this,Ys,e),this.tabIndex=e?-1:0}get locked(){return Ag(this,Ys)}connectedCallback(){super.connectedCallback(),C(this,"uui-icon"),C(this,"uui-button")}_onLockToggle(){var e;this.readonly=this.locked=!this.locked,this.pristine=!1,this.dispatchEvent(new qa(qa.LOCK_CHANGE)),this.locked||(e=this._input)==null||e.focus()}renderIcon(){return this.locked===!0?c`<uui-icon name="lock" .fallback=${Lf.strings[0]}></uui-icon>`:c`<uui-icon
          name="unlock"
          .fallback=${Vf.strings[0]}></uui-icon>`}renderPrepend(){return c`<uui-button
      .disabled=${this.disabled}
      @click=${this._onLockToggle}
      compact
      id="lock"
      label="${this.locked?this.unlockLabel:this.lockLabel}">
      ${this.renderIcon()}
    </uui-button>`}};Ys=new WeakMap,_r.styles=[...B.styles,b`
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
    `],Ks([l({type:Boolean,reflect:!0})],_r.prototype,"locked",1),Ks([l({type:String,reflect:!1,attribute:"unlock-label"})],_r.prototype,"unlockLabel",2),Ks([l({type:String,reflect:!1,attribute:"lock-label"})],_r.prototype,"lockLabel",2),_r=Ks([g("uui-input-lock")],_r);var Ug=Object.defineProperty,zg=Object.getOwnPropertyDescriptor,Ka=(e,t,i,o)=>{for(var r=o>1?void 0:o?zg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Ug(t,i,r),r};let yo=class extends B{constructor(){super(...arguments),this.passwordType="password"}get type(){return this.passwordType}set type(e){this.passwordType=e}_onPasswordToggle(){this.passwordType==="password"?this.passwordType="text":this.passwordType="password"}connectedCallback(){super.connectedCallback(),C(this,"uui-icon"),C(this,"uui-button"),this.hasAttribute("spellcheck")||(this.spellcheck=!1)}renderIcon(){return this.passwordType==="password"?c`<uui-icon name="see" .fallback=${Hf.strings[0]}></uui-icon>`:c`<uui-icon
          name="unsee"
          .fallback=${jf.strings[0]}></uui-icon>`}renderAppend(){return c`<uui-button
      .disabled=${this.disabled}
      @click=${this._onPasswordToggle}
      compact
      label="${this.passwordType==="password"?"Show password":"Hide password"}"
      id="eye">
      ${this.renderIcon()}
    </uui-button>`}};yo.styles=[...B.styles,b`
      #eye {
        height: 100%;
        margin-left: -6px;
      }

      #clear:hover {
        color: black;
      }
    `],Ka([w()],yo.prototype,"passwordType",2),Ka([l()],yo.prototype,"type",1),yo=Ka([g("uui-input-password")],yo);var Mg=Object.getOwnPropertyDescriptor,Tg=(e,t,i,o)=>{for(var r=o>1?void 0:o?Mg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Ya=class extends _{render(){return c`<slot></slot>`}};Ya.styles=[b`
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
    `],Ya=Tg([g("uui-keyboard-shortcut")],Ya);var Dg=Object.getOwnPropertyDescriptor,Lg=(e,t,i,o)=>{for(var r=o>1?void 0:o?Dg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Xa=class extends _{render(){return c`<slot></slot>`}};Xa.styles=[b`
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
    `],Xa=Lg([g("uui-key")],Xa);var Ng=Object.defineProperty,Hg=Object.getOwnPropertyDescriptor,Xs=(e,t,i,o)=>{for(var r=o>1?void 0:o?Hg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Ng(t,i,r),r};let yr=class extends _{constructor(){super(),this.disabled=!1,this.for=null,this.required=!1,this.addEventListener("click",this._onClick)}_onClick(){if(this.disabled)return;const e=this.getForElement();e&&(e.focus(),e.click())}getForElement(){if(typeof this.for=="string"){const e=this.getRootNode();return(e==null?void 0:e.getElementById(this.for))||null}return this.for||null}render(){return c`
      <slot></slot>
      ${this.required?c`<div id="required">*</div>`:""}
    `}};yr.styles=[b`
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
    `],Xs([l({type:Boolean,reflect:!0})],yr.prototype,"disabled",2),Xs([l({reflect:!0,attribute:!0})],yr.prototype,"for",2),Xs([l({type:Boolean,reflect:!0})],yr.prototype,"required",2),yr=Xs([g("uui-label")],yr);var Bg=Object.defineProperty,Vg=Object.getOwnPropertyDescriptor,Za=(e,t,i,o)=>{for(var r=o>1?void 0:o?Vg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Bg(t,i,r),r};let wo=class extends _{constructor(){super(...arguments),this._progress=0,this._animationDuration=1}get progress(){return this._progress}set progress(e){const t=this._progress;this._progress=T(e,0,100),this.requestUpdate("progress",t)}get animationDuration(){return this._animationDuration}set animationDuration(e){const t=this._animationDuration;this._animationDuration=e>=0?e:1,this.requestUpdate("animationDuration",t)}render(){return c`
      ${this.progress?c`<div
            id="bar"
            style="max-width: ${this.progress.toString()}%;"></div>`:""}
      <div
        id="bar-anim"
        class=${this.progress?"":"animate"}
        style="animation-duration: ${this.animationDuration}s"></div>
      <div id="bar-background"></div>
    `}};wo.styles=[b`
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
    `],Za([l({type:Number})],wo.prototype,"progress",1),Za([l({type:Number})],wo.prototype,"animationDuration",1),wo=Za([g("uui-loader-bar")],wo);var jg=Object.defineProperty,Rg=Object.getOwnPropertyDescriptor,Ja=(e,t,i,o)=>{for(var r=o>1?void 0:o?Rg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&jg(t,i,r),r};let xo=class extends _{constructor(){super(...arguments),this.progress=0,this.showProgress=!1,this._resizeObserver=new ResizeObserver(()=>this.onResize()),this._isLarge=!1}_circleStyle(){return this.progress?{strokeDasharray:`${this.progress} 100`}:{strokeDasharray:"100 100"}}firstUpdated(){this._resizeObserver.observe(this)}disconnectedCallback(){this._resizeObserver.disconnect()}onResize(){const e=this.clientHeight>=30;this._isLarge!=e&&(this._isLarge=e,this.requestUpdate())}renderProgress(){return this._isLarge&&this.progress&&this.showProgress?c`<span id="progress-display">${this.progress}</span>`:""}render(){return c`
      <svg
        id="spinner"
        class=${this.progress?"":"animate"}
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg">
        <circle id="bg" cx="50%" cy="50%" r="16" />
        <g>
          <circle
            id="circle"
            cx="50%"
            cy="50%"
            r="16"
            style=${de(this._circleStyle())} />
        </g>
      </svg>
      ${this.renderProgress()}
    `}};xo.styles=[b`
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
    `],Ja([l({type:Number})],xo.prototype,"progress",2),Ja([l({type:Boolean,reflect:!0,attribute:"show-progress"})],xo.prototype,"showProgress",2),xo=Ja([g("uui-loader-circle")],xo);var Fg=Object.getOwnPropertyDescriptor,Wg=(e,t,i,o)=>{for(var r=o>1?void 0:o?Fg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Qa=class extends _{render(){return c`
      <div></div>
      <div></div>
      <div></div>
    `}};Qa.styles=[b`
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
    `],Qa=Wg([g("uui-loader")],Qa);class Ge extends L{}Ge.SHOW_CHILDREN="show-children",Ge.HIDE_CHILDREN="hide-children",Ge.CLICK_LABEL="click-label";var Gg=Object.defineProperty,qg=Object.getOwnPropertyDescriptor,Uh=e=>{throw TypeError(e)},jt=(e,t,i,o)=>{for(var r=o>1?void 0:o?qg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Gg(t,i,r),r},Kg=(e,t,i)=>t.has(e)||Uh("Cannot "+i),Yg=(e,t,i)=>t.has(e)?Uh("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),zh=(e,t,i)=>(Kg(e,t,"access private method"),i),Zs,tl;let yt=class extends cs(Yi(eo(Gt("label",_)))){constructor(){super(...arguments),Yg(this,Zs),this.disabled=!1,this.showChildren=!1,this.hasChildren=!1,this.loading=!1,this.caretLabel="Reveal the underlying items",this.iconSlotHasContent=!1,this._labelButtonChanged=e=>{this.selectableTarget=e||this},this._iconSlotChanged=e=>{this.iconSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0},this._onCaretClicked=()=>{const e=this.showChildren?Ge.HIDE_CHILDREN:Ge.SHOW_CHILDREN,t=new Ge(e,{cancelable:!0});this.dispatchEvent(t),!t.defaultPrevented&&(this.showChildren=!this.showChildren)}}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","menu"),C(this,"uui-symbol-expand"),C(this,"uui-loader-bar")}async focus(){var e,t,i;await this.updateComplete,(i=(t=(e=this.shadowRoot)==null?void 0:e.querySelector("#label-button"))==null?void 0:t.focus)==null||i.call(t)}_renderLabelInside(){return c` <slot
        name="icon"
        id="icon"
        style=${this.iconSlotHasContent?"":"display: none;"}
        @slotchange=${this._iconSlotChanged}></slot>
      ${this.renderLabel()}
      <slot name="badge" id="badge"> </slot>`}_renderLabelAsAnchor(){return this.disabled?c` <span id="label-button" ${Is(this._labelButtonChanged)}>
        ${this._renderLabelInside()}
      </span>`:c` <a
      id="label-button"
      ${Is(this._labelButtonChanged)}
      href=${k(this.href)}
      target=${k(this.target||void 0)}
      rel=${k(this.rel||k(this.target==="_blank"?"noopener noreferrer":void 0))}
      @click=${zh(this,Zs,tl)}
      ?disabled=${this.disabled}
      aria-label="${this.label}">
      ${this._renderLabelInside()}
    </a>`}_renderLabelAsButton(){return c` <button
      id="label-button"
      ${Is(this._labelButtonChanged)}
      @click=${zh(this,Zs,tl)}
      ?disabled=${this.disabled}
      aria-label="${this.label}">
      ${this._renderLabelInside()}
    </button>`}render(){return c`
      <div id="menu-item" aria-label="menuitem" role="menuitem">
        ${this.hasChildren?c`<button
              id="caret-button"
              aria-label=${this.caretLabel}
              @click=${this._onCaretClicked}>
              <uui-symbol-expand
                aria-hidden="true"
                ?open=${this.showChildren}></uui-symbol-expand>
            </button>`:""}
        ${this.href&&this.selectOnly!==!0&&this.selectable!==!0?this._renderLabelAsAnchor():this._renderLabelAsButton()}

        <div id="label-button-background"></div>
        <slot id="actions-container" name="actions"></slot>
        ${this.loading?c`<uui-loader-bar id="loader"></uui-loader-bar>`:""}
      </div>
      ${this.showChildren?c`<slot></slot>`:""}
    `}};Zs=new WeakSet,tl=function(){if(this.selectOnly)return;const e=new Ge(Ge.CLICK_LABEL);this.dispatchEvent(e)},yt.styles=[b`
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
    `],jt([l({type:Boolean,reflect:!0})],yt.prototype,"disabled",2),jt([l({type:Boolean,reflect:!0,attribute:"show-children"})],yt.prototype,"showChildren",2),jt([l({type:Boolean,attribute:"has-children"})],yt.prototype,"hasChildren",2),jt([l({type:Boolean,attribute:"loading"})],yt.prototype,"loading",2),jt([l({type:String})],yt.prototype,"href",2),jt([l({type:String})],yt.prototype,"target",2),jt([l({type:String})],yt.prototype,"rel",2),jt([l({type:String,attribute:"select-mode",reflect:!0})],yt.prototype,"selectMode",2),jt([l({type:String,attribute:"caret-label"})],yt.prototype,"caretLabel",2),jt([w()],yt.prototype,"iconSlotHasContent",2),yt=jt([g("uui-menu-item")],yt);var Xg=Object.defineProperty,Zg=Object.getOwnPropertyDescriptor,wr=(e,t,i,o)=>{for(var r=o>1?void 0:o?Zg(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Xg(t,i,r),r};const Jg="uui:modal-open",$o="uui:modal-close",Qg="uui:modal-close-end";class Tt extends _{constructor(){super(...arguments),this.isOpen=!1,this.isClosing=!1,this.index=0,this.uniqueIndex=0,this._transitionDuration=250,this.open=t=>{t==null||t.preventDefault(),t==null||t.stopImmediatePropagation();const i=new CustomEvent(Jg,{cancelable:!0}),o=new CustomEvent("open",{cancelable:!0});this.dispatchEvent(i),this.dispatchEvent(o),!(i.defaultPrevented||o.defaultPrevented)&&this._openModal()},this.close=t=>{t==null||t.preventDefault(),t==null||t.stopImmediatePropagation();const i=new CustomEvent($o,{cancelable:!0});this.dispatchEvent(i),!i.defaultPrevented&&this.forceClose()}}get transitionDuration(){return this._transitionDuration}set transitionDuration(t){this._transitionDuration=t,this.style.setProperty("--uui-modal-transition-duration",this._transitionDuration+"ms")}firstUpdated(t){super.firstUpdated(t),this.isClosing||this.open()}_openModal(){var t,i;this.isOpen=!0,(t=this._dialogElement)==null||t.showModal(),(i=this._dialogElement)==null||i.addEventListener("cancel",this.close)}forceClose(){var t;this.isClosing=!0,this.isOpen=!1,(t=this._dialogElement)==null||t.close(),this.dispatchEvent(new CustomEvent("close-end")),this.dispatchEvent(new CustomEvent(Qg)),this.remove()}}Tt.styles=[b`
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
    `],wr([z("dialog")],Tt.prototype,"_dialogElement",2),wr([l({type:Boolean,reflect:!0,attribute:"is-open"})],Tt.prototype,"isOpen",2),wr([l({type:Boolean,reflect:!0,attribute:"is-closing"})],Tt.prototype,"isClosing",2),wr([l({type:Number,reflect:!0})],Tt.prototype,"index",2),wr([l({type:Number,reflect:!0,attribute:"unique-index"})],Tt.prototype,"uniqueIndex",2),wr([l({type:Number,attribute:"transition-duration"})],Tt.prototype,"transitionDuration",1);var t0=Object.defineProperty,e0=Object.getOwnPropertyDescriptor,Mh=e=>{throw TypeError(e)},Th=(e,t,i,o)=>{for(var r=o>1?void 0:o?e0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&t0(t,i,r),r},i0=(e,t,i)=>t.has(e)||Mh("Cannot "+i),Dh=(e,t,i)=>(i0(e,t,"read from private field"),i?i.call(e):t.get(e)),r0=(e,t,i)=>t.has(e)?Mh("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Js,el;let ko=class extends Tt{constructor(){super(...arguments),r0(this,Js),this.size="full"}firstUpdated(e){super.firstUpdated(e),this.style.setProperty("--uui-modal-offset",-Dh(this,Js,el)+"px")}updated(e){super.updated(e),this.uniqueIndex>10?this.setAttribute("hide",""):this.removeAttribute("hide")}forceClose(){this.isClosing||(this.isClosing=!0,this.style.setProperty("--uui-modal-offset",-Dh(this,Js,el)+"px"),setTimeout(()=>{super.forceClose()},this.transitionDuration))}render(){return c`<dialog>
      <slot></slot>
    </dialog>`}};Js=new WeakSet,el=function(){var e;return((e=this._dialogElement)==null?void 0:e.getBoundingClientRect().width)??0},ko.styles=[...Tt.styles,b`
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
    `],Th([l({reflect:!0})],ko.prototype,"size",2),ko=Th([g("uui-modal-sidebar")],ko);var o0=Object.defineProperty,s0=Object.getOwnPropertyDescriptor,Lh=e=>{throw TypeError(e)},xr=(e,t,i,o)=>{for(var r=o>1?void 0:o?s0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&o0(t,i,r),r},Nh=(e,t,i)=>t.has(e)||Lh("Cannot "+i),Co=(e,t,i)=>(Nh(e,t,"read from private field"),i?i.call(e):t.get(e)),il=(e,t,i)=>t.has(e)?Lh("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Qs=(e,t,i)=>(Nh(e,t,"access private method"),i),rl,$r,kr,ol,sl;let qe=class extends _{constructor(){super(),il(this,kr),this.sidebarGap=64,this.transitionDurationMS=250,il(this,rl,()=>{var o;const e=this._modals??[];if(this._modals=((o=this.modalSlot)==null?void 0:o.assignedElements({flatten:!0}).filter(r=>r instanceof Tt))??[],e.filter(r=>this._modals.indexOf(r)===-1).forEach(r=>r.removeEventListener($o,Co(this,$r))),this._modals.filter(r=>e.indexOf(r)===-1).forEach(r=>r.addEventListener($o,Co(this,$r))),this._sidebars=this._modals.filter(r=>r instanceof ko),this._modals.length===0){this.removeAttribute("backdrop");return}Qs(this,kr,ol).call(this),Qs(this,kr,sl).call(this)}),il(this,$r,e=>{var t;if(e.stopImmediatePropagation(),(t=e.target)==null||t.removeEventListener($o,Co(this,$r)),!this._modals||this._modals.length<=1){this.removeAttribute("backdrop");return}Qs(this,kr,ol).call(this),Qs(this,kr,sl).call(this)}),this.addEventListener($o,Co(this,$r))}firstUpdated(e){super.firstUpdated(e),this.style.setProperty("--uui-modal-transition-duration",this.transitionDurationMS+"ms")}render(){return c`<slot @slotchange=${Co(this,rl)}></slot>`}};rl=new WeakMap,$r=new WeakMap,kr=new WeakSet,ol=function(){var t;this.setAttribute("backdrop","");const e=((t=this._modals)==null?void 0:t.filter(i=>!i.isClosing).reverse())??[];e==null||e.forEach((i,o)=>{i.index=o,i.transitionDuration=this.transitionDurationMS}),e==null||e.forEach(i=>{const o=e==null?void 0:e.filter(r=>r.constructor.name===i.constructor.name);i.uniqueIndex=(o==null?void 0:o.indexOf(i))??0})},sl=function(){requestAnimationFrame(()=>{var i,o,r,s,n;let e=0;const t=((i=this._sidebars)==null?void 0:i.filter(a=>!a.isClosing).reverse())??[];for(let a=0;a<t.length;a++){const u=t[a],h=t[a+1],f=e;if(u.updateComplete.then(()=>{u.style.setProperty("--uui-modal-offset",f+"px")}),h!=null&&h.hasAttribute("hide"))break;const d=((r=(o=u.shadowRoot)==null?void 0:o.querySelector("dialog"))==null?void 0:r.getBoundingClientRect().width)??0,x=((n=(s=h==null?void 0:h.shadowRoot)==null?void 0:s.querySelector("dialog"))==null?void 0:n.getBoundingClientRect().width)??0,v=d+e+this.sidebarGap-x;e=v>0?v:0}})},qe.styles=b`
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
  `,xr([z("slot")],qe.prototype,"modalSlot",2),xr([w()],qe.prototype,"_modals",2),xr([w()],qe.prototype,"_sidebars",2),xr([l({type:Number})],qe.prototype,"sidebarGap",2),xr([l({type:Number})],qe.prototype,"transitionDurationMS",2),qe=xr([g("uui-modal-container")],qe);var n0=Object.getOwnPropertyDescriptor,a0=(e,t,i,o)=>{for(var r=o>1?void 0:o?n0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let nl=class extends Tt{render(){return c`
      <dialog>
        <slot></slot>
      </dialog>
    `}};nl.styles=[...Tt.styles,b`
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
    `],nl=a0([g("uui-modal-dialog")],nl);class xi extends L{constructor(t,i={}){super(t,{bubbles:!0,...i})}}xi.CHANGE="change";var l0=Object.defineProperty,u0=Object.getOwnPropertyDescriptor,wt=(e,t,i,o)=>{for(var r=o>1?void 0:o?u0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&l0(t,i,r),r};const c0=45,al=(e,t,i)=>Math.min(Math.max(e,t),i),h0=(e,t)=>Array.from({length:t-e+1},(i,o)=>e+o);let pt=class extends _{constructor(){super(...arguments),this._observer=new ResizeObserver(this._calculateRange.bind(this)),this.label="",this.ariaLabel="",this.firstLabel="First",this.previousLabel="Previous",this.nextLabel="Next",this.lastLabel="Last",this._total=100,this._range=0,this._visiblePages=[],this._current=1}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","navigation"),this._visiblePages=this._generateVisiblePages(this.current),C(this,"uui-button"),C(this,"uui-button-group")}disconnectedCallback(){this._observer.disconnect()}firstUpdated(){this._observer.observe(this._pagesGroup),this.updateLabel(),this._calculateRange()}willUpdate(e){(e.has("current")||e.has("label"))&&this.updateLabel()}updateLabel(){this.ariaLabel=`${this.label||"Pagination navigation"}. Current page: ${this.current}.`}_calculateRange(){const e=this.offsetWidth,t=Array.from(this._navButtons).reduce((r,s)=>r+s.getBoundingClientRect().width,0),o=(e-t)/c0/2;this._range=Math.max(1,Math.floor(o)),this._visiblePages=this._generateVisiblePages(this.current)}_generateVisiblePages(e){const t=e<this._range?1:e<this.total-this._range?e-this._range:this.total-this._range*2,i=e<=this._range?this._range*2+1:e<this.total-this._range?e+this._range:this.total;return h0(al(t,1,this.total),al(i,1,this.total))}get total(){return this._total}set total(e){this._total=e,this._visiblePages=this._generateVisiblePages(this._current),this.requestUpdate("total",e)}get current(){return this._current}set current(e){const t=this._current;this._current=al(e,1,this.total),this._visiblePages=this._generateVisiblePages(this._current),this.requestUpdate("current",t)}goToNextPage(){this.current++,this.dispatchEvent(new xi(xi.CHANGE))}goToPreviousPage(){this.current--,this.dispatchEvent(new xi(xi.CHANGE))}goToPage(e){this.current=e,this.dispatchEvent(new xi(xi.CHANGE))}focusActivePage(){requestAnimationFrame(()=>{const e=this.renderRoot.querySelector(".active");e&&e.focus()})}renderFirst(){return c`<uui-button
      compact
      look="outline"
      class="nav"
      role="listitem"
      label=${this.firstLabel}
      ?disabled=${this._current===1}
      @click=${()=>this.goToPage(1)}></uui-button>`}renderPrevious(){return c`<uui-button
      compact
      look="outline"
      class="nav"
      role="listitem"
      label=${this.previousLabel}
      ?disabled=${this._current===1}
      @click=${this.goToPreviousPage}></uui-button>`}renderNext(){return c`<uui-button
      compact
      look="outline"
      role="listitem"
      class="nav"
      label=${this.nextLabel}
      ?disabled=${this._current===this.total}
      @click=${this.goToNextPage}></uui-button>`}renderLast(){return c`
      <uui-button
        compact
        look="outline"
        role="listitem"
        class="nav"
        label=${this.lastLabel}
        ?disabled=${this.total===this._current}
        @click=${()=>this.goToPage(this.total)}></uui-button>
    `}renderDots(){return c`<uui-button
      compact
      look="outline"
      role="listitem"
      tabindex="-1"
      class="dots"
      label="More pages"
      >...</uui-button
    > `}renderPage(e){return c`<uui-button
      compact
      look="outline"
      role="listitem"
      label="Go to page ${e}"
      class=${"page"+(e===this._current?" active":"")}
      tabindex=${e===this._current?"-1":""}
      @click=${()=>{e!==this._current&&(this.goToPage(e),this.focusActivePage())}}>
      ${e}
    </uui-button>`}renderNavigationLeft(){return c` ${this.renderFirst()} ${this.renderPrevious()}
    ${this._visiblePages.includes(1)?"":this.renderDots()}`}renderNavigationRight(){return c`${this._visiblePages.includes(this.total)?"":this.renderDots()}
    ${this.renderNext()} ${this.renderLast()}`}render(){return c`<uui-button-group role="list" id="pages">
      ${this.renderNavigationLeft()}
      ${this._visiblePages.map(e=>this.renderPage(e))}
      ${this.renderNavigationRight()}
    </uui-button-group>
    `}};pt.styles=[b`
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
    `],wt([Tp("uui-button.nav")],pt.prototype,"_navButtons",2),wt([z("#pages")],pt.prototype,"_pagesGroup",2),wt([l()],pt.prototype,"label",2),wt([l({reflect:!0,attribute:"aria-label"})],pt.prototype,"ariaLabel",2),wt([l()],pt.prototype,"firstLabel",2),wt([l()],pt.prototype,"previousLabel",2),wt([l()],pt.prototype,"nextLabel",2),wt([l()],pt.prototype,"lastLabel",2),wt([l({type:Number})],pt.prototype,"total",1),wt([w()],pt.prototype,"_range",2),wt([w()],pt.prototype,"_visiblePages",2),wt([l({type:Number})],pt.prototype,"current",1),pt=wt([g("uui-pagination")],pt);class ll extends L{}ll.CLOSE="close";var d0=Object.defineProperty,p0=Object.getOwnPropertyDescriptor,Eo=(e,t,i,o)=>{for(var r=o>1?void 0:o?p0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&d0(t,i,r),r};function tn(e,t,i){return e<t?t:e>i?i:e}let $i=class extends _{constructor(){super(...arguments),this.scrollEventHandler=this._updatePlacement.bind(this),this._open=!1,this._placement="bottom-start",this._currentPlacement=null,this._scrollParents=[],this.margin=0,this._onTriggerSlotChanged=e=>{this._trigger=e.target.assignedElements({flatten:!0})[0]},this._intersectionCallback=e=>{e.forEach(t=>{t.isIntersecting===!1&&(this._startScrollListener(),this._updatePlacement())})},this._onKeyUp=e=>{if(e.key==="Escape"){this._triggerPopoverClose();return}},this._onDocumentClick=e=>{e.composedPath().includes(this)||this._triggerPopoverClose()}}get placement(){return this._placement}set placement(e){const t=this._placement;this._placement=e||"bottom-start",this._currentPlacement=null,this._updatePlacement(),this.requestUpdate("placement",t)}get open(){return this._open}set open(e){const t=this._open;this._open=e,e?this._openPopover():this._closePopover(),this.requestUpdate("open",t)}connectedCallback(){super.connectedCallback(),this._getScrollParents()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._onDocumentClick),document.removeEventListener("keyup",this._onKeyUp),document.removeEventListener("scroll",this.scrollEventHandler),this.intersectionObserver&&(this.intersectionObserver.disconnect(),delete this.intersectionObserver),this._scrollParents=[]}_openPopover(){this.containerElement&&(this.containerElement.style.opacity="0",document.addEventListener("mousedown",this._onDocumentClick),document.addEventListener("keyup",this._onKeyUp),this._currentPlacement=null,requestAnimationFrame(()=>{this._updatePlacement(),this._createIntersectionObserver(),this.containerElement.style.opacity="1"}))}_closePopover(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),delete this.intersectionObserver),document.removeEventListener("mousedown",this._onDocumentClick),document.removeEventListener("keyup",this._onKeyUp),this._currentPlacement=null}_triggerPopoverClose(){const e=new ll(ll.CLOSE,{cancelable:!0});this.dispatchEvent(e),!e.defaultPrevented&&(this.open=!1)}_getScrollParents(){const e=this.shadowRoot.host;let t=getComputedStyle(e);if(t.position==="fixed")return;const i=t.position==="absolute",o=/(auto|scroll)/;let r=e;for(;r=r.parentElement;)if(t=getComputedStyle(r),!(i&&t.position==="static")&&(o.test(t.overflow+t.overflowY+t.overflowX)&&this._scrollParents.push(r),t.position==="fixed"))return;this._scrollParents.push(document.body)}_createIntersectionObserver(){if(this.intersectionObserver)return;const e={root:null,rootMargin:"0px",threshold:1};this.intersectionObserver=new IntersectionObserver(this._intersectionCallback,e),this.intersectionObserver.observe(this.containerElement)}_startScrollListener(){this._scrollParents.forEach(e=>{e.addEventListener("scroll",this.scrollEventHandler)}),document.addEventListener("scroll",this.scrollEventHandler)}_stopScrollListener(){this._scrollParents.forEach(e=>{e.removeEventListener("scroll",this.scrollEventHandler)}),document.removeEventListener("scroll",this.scrollEventHandler)}_updatePlacement(){var o,r;if(!this.shadowRoot)return;const e=this.containerElement;if(!e)return;const t=(o=this.containerElement)==null?void 0:o.getBoundingClientRect(),i=(r=this._trigger)==null?void 0:r.getBoundingClientRect();if(i!=null&&t!=null){const s=this._scrollParents.map(ce=>ce.getBoundingClientRect());this._currentPlacement=this._currentPlacement||this._placement,this._placement!=="auto"&&(this._currentPlacement=this._managePlacementFlip(this._currentPlacement,t,s));let n=this._currentPlacement.indexOf("top")!==-1,a=this._currentPlacement.indexOf("bottom")!==-1,u=this._currentPlacement.indexOf("left")!==-1,h=this._currentPlacement.indexOf("right")!==-1;const f=this._currentPlacement.indexOf("-start")!==-1,d=this._currentPlacement.indexOf("-end")!==-1;let x=.5,v=.5,$=.5,O=.5,N=0,ht=0;if(this.placement==="auto"){const ce=this._scrollParents[0],is=ce.clientWidth,Hi=ce.clientHeight,qr=i.x-t.width,Kr=is-(i.x+i.width)-t.width,mu=i.y-t.height,Fn=Hi-(i.y+i.height)-t.height;let Wn=.5,Gn=.5;const s_=Math.max(qr,Kr);let sp=Math.max(mu,Fn);Fn>mu&&Fn>this.margin&&(sp+=9999),s_>sp?(qr>Kr?(Wn=0,u=!0):(Wn=1,h=!0),N=this.margin):(mu>Fn?(Gn=0,n=!0):(Gn=1,a=!0),ht=this.margin),x=Wn,v=Gn,$=1-Wn,O=1-Gn}else n&&(O=1,v=0),a&&(O=0,v=1),(n||a)&&(ht=this.margin,f&&($=0,x=0),d&&($=1,x=1)),u&&($=1,x=0),h&&($=0,x=1),(u||h)&&(N=this.margin,f&&(O=0,v=0),d&&(O=1,v=1));const ze=-t.width*$+i.width*x-N*($*2-1),Rn=-t.height*O+i.height*v-ht*(O*2-1);let Li=ze,Ni=Rn;n||a?(this._scrollParents.forEach((ce,is)=>{const Hi=ce===document.body?0:s[is].x,qr=-i.x+Hi,Kr=ce.clientWidth-i.x-i.width+ze+Hi-(t.width-i.width)*(1-x);Li=tn(Li,qr,Kr)}),Li=tn(Li,-t.width,i.width)):(u||h)&&(this._scrollParents.forEach((ce,is)=>{const Hi=ce===document.body?0:s[is].y,qr=-i.y+Hi,Kr=ce.clientHeight-i.y-i.height+Rn+Hi-(t.height-i.height)*(1-v);Ni=tn(Ni,qr,Kr)}),Ni=tn(Ni,-t.height,i.height)),(this._positionX!==Li||this._positionY!==Ni)&&(this._positionX=Li,this._positionY=Ni,ze===Li&&Rn===Ni&&this._stopScrollListener(),e.style.left=`${this._positionX}px`,e.style.top=`${this._positionY}px`)}}_managePlacementFlip(e,t,i){const r=e.split("-"),s=r[0],n=r[1]||null;let a;return this._scrollParents.some((u,h)=>{const f=u===document.body?0:i[h].x,d=u===document.body?0:i[h].y;return s==="top"&&t.y-2<=d?(a="bottom",!0):s==="bottom"&&t.y+t.height+2>=u.clientHeight+d?(a="top",!0):s==="left"&&t.x-2<=f?(a="right",!0):s==="right"&&t.x+t.width+2>=u.clientWidth+f?(a="left",!0):!1}),a?(this._startScrollListener(),a+(n?`-${n}`:"")):e}render(){return c`
      <slot
        id="trigger"
        name="trigger"
        @slotchange=${this._onTriggerSlotChanged}></slot>
      <div id="container">
        ${this._open?c`<slot name="popover"></slot>`:""}
      </div>
    `}};$i.styles=[b`
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
    `],Eo([z("#container")],$i.prototype,"containerElement",2),Eo([l({type:Number})],$i.prototype,"margin",2),Eo([l({type:String,reflect:!0})],$i.prototype,"placement",1),Eo([l({type:Boolean,reflect:!0})],$i.prototype,"open",1),$i=Eo([g("uui-popover")],$i);var f0=Object.defineProperty,v0=Object.getOwnPropertyDescriptor,Hh=e=>{throw TypeError(e)},ki=(e,t,i,o)=>{for(var r=o>1?void 0:o?v0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&f0(t,i,r),r},ul=(e,t,i)=>t.has(e)||Hh("Cannot "+i),D=(e,t,i)=>(ul(e,t,"read from private field"),i?i.call(e):t.get(e)),_e=(e,t,i)=>t.has(e)?Hh("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),en=(e,t,i,o)=>(ul(e,t,"write to private field"),t.set(e,i),i),Ke=(e,t,i)=>(ul(e,t,"access private method"),i),ye,Cr,Ci,Po,rn,we,So,cl,Jt,hl,Bh,dl,Vh,pl;let xe=class extends _{constructor(){super(...arguments),_e(this,Jt),this.margin=0,this._placement="bottom-start",this._open=!1,this._actualPlacement=this._placement,_e(this,ye,null),_e(this,Cr,[]),_e(this,Ci,null),_e(this,Po,{width:0,height:0}),_e(this,rn,e=>{var t;if(this._open=e.newState==="open",en(this,ye,Mf(this,"popovertarget",this.id)),Ke(this,Jt,Vh).call(this),(t=D(this,ye))==null||t.dispatchEvent(new CustomEvent("uui-popover-before-toggle",{bubbles:!1,composed:!1,detail:{oldState:e.oldState,newState:e.newState}})),!this._open){Ke(this,Jt,dl).call(this);return}Ke(this,Jt,Bh).call(this),requestAnimationFrame(()=>{D(this,we).call(this)})}),_e(this,we,()=>{this._open&&(this._actualPlacement=this._placement,this.style.opacity="0",D(this,So).call(this,3))}),_e(this,So,e=>{if(D(this,cl).call(this),e--,D(this,ye)===null)return;const t=this._actualPlacement.indexOf("top")!==-1,i=this._actualPlacement.indexOf("bottom")!==-1,o=this._actualPlacement.indexOf("left")!==-1,r=this._actualPlacement.indexOf("right")!==-1,s=this._actualPlacement.indexOf("-start")!==-1,n=this._actualPlacement.indexOf("-end")!==-1,a=D(this,ye).getBoundingClientRect(),u=this.getBoundingClientRect();let h=0,f=0;i&&(h=a.top+a.height,s&&(f=a.left),n&&(f=a.left+a.width-u.width),!s&&!n&&(f=a.left+a.width/2-u.width/2)),t&&(h=a.top-u.height,s&&(f=a.left),n&&(f=a.left+a.width-u.width),!s&&!n&&(f=a.left+a.width/2-u.width/2)),o&&(f=a.left-u.width,s&&(h=a.top),n&&(h=a.top+a.height-u.height),!s&&!n&&(h=a.top+a.height/2-u.height/2)),r&&(f=a.left+a.width,s&&(h=a.top),n&&(h=a.top+a.height-u.height),!s&&!n&&(h=a.top+a.height/2-u.height/2));const d=window.innerWidth,x=window.innerHeight,v=Math.min(0,a.top+a.height),$=Math.max(Math.min(h,x-u.height),a.top-u.height);if(Math.max(v,$)!==h&&(t||i)&&e>0){Ke(this,Jt,hl).call(this),D(this,So).call(this,e);return}h=Math.max(v,$);const N=Math.min(0,a.left+a.width),ht=Math.max(Math.min(f,d-u.width),a.left-u.width),ze=Math.max(N,ht);if(ze!==f&&(o||r)&&e>0){Ke(this,Jt,hl).call(this),D(this,So).call(this,e);return}f=ze,(h+u.height<0||h>x||f+u.width<0||f>d)&&this.hidePopover(),this.style.transform=`translate(${f}px, ${h}px)`,this.style.opacity="1"}),_e(this,cl,()=>{const e={top:"bottom",bottom:"top",left:"right",right:"left"};let t=this._actualPlacement.split("-")[0];t=e[t]||t,t=t.charAt(0).toUpperCase()+t.slice(1);const i=`padding${t}`;this.style.padding="0",this.style[i]=`${this.margin}px`})}get open(){return this._open}get placement(){return this._placement}set placement(e){this._placement=e,this._actualPlacement=e,D(this,we).call(this)}connectedCallback(){this.hasAttribute("popover")||this.setAttribute("popover",""),super.connectedCallback(),this.addEventListener("beforetoggle",D(this,rn)),D(this,Ci)||(en(this,Ci,new ResizeObserver(e=>{const t=e[0],i=t.contentRect.width,o=t.contentRect.height;i===D(this,Po).width&&o===D(this,Po).height||(en(this,Po,{width:i,height:o}),D(this,we).call(this))})),D(this,Ci).observe(this))}disconnectedCallback(){var e;super.disconnectedCallback(),this.removeEventListener("beforetoggle",D(this,rn)),Ke(this,Jt,dl).call(this),(e=D(this,Ci))==null||e.disconnect(),en(this,Ci,null)}render(){return c`<slot></slot>`}};ye=new WeakMap,Cr=new WeakMap,Ci=new WeakMap,Po=new WeakMap,rn=new WeakMap,we=new WeakMap,So=new WeakMap,cl=new WeakMap,Jt=new WeakSet,hl=function(){const[e,t]=this._actualPlacement.split("-"),i=e==="top"?"bottom":e==="bottom"?"top":e==="left"?"right":"left";this._actualPlacement=`${i}-${t}`},Bh=function(){D(this,Cr).forEach(e=>{e.addEventListener("scroll",D(this,we),{passive:!0})}),document.addEventListener("scroll",D(this,we),{passive:!0})},dl=function(){D(this,Cr).forEach(e=>{e.removeEventListener("scroll",D(this,we))}),document.removeEventListener("scroll",D(this,we))},Vh=function(){if(!D(this,ye))return;let e=getComputedStyle(D(this,ye));if(e.position==="fixed")return;const t=e.position==="absolute",i=/(auto|scroll)/;let o=D(this,ye);for(;o;){if(e=getComputedStyle(o),t&&e.position==="static"){o=Ke(this,Jt,pl).call(this,o);continue}if(i.test(e.overflow+e.overflowY+e.overflowX)&&D(this,Cr).push(o),e.position==="fixed")return;o=Ke(this,Jt,pl).call(this,o)}D(this,Cr).push(document.body)},pl=function(e){var t;return e!=null&&e.parentElement?e.parentElement:(t=e==null?void 0:e.getRootNode())==null?void 0:t.host},xe.styles=[b`
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
    `],ki([l({type:Number})],xe.prototype,"margin",2),ki([l({type:Boolean})],xe.prototype,"open",1),ki([l({type:String,reflect:!0})],xe.prototype,"placement",1),ki([w()],xe.prototype,"_placement",2),ki([w()],xe.prototype,"_open",2),ki([w()],xe.prototype,"_actualPlacement",2),xe=ki([g("uui-popover-container")],xe);var b0=Object.defineProperty,g0=Object.getOwnPropertyDescriptor,jh=(e,t,i,o)=>{for(var r=o>1?void 0:o?g0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&b0(t,i,r),r};const m0=(e,t,i)=>Math.min(Math.max(e,t),i);let on=class extends _{constructor(){super(...arguments),this._progress=0}get progress(){return this._progress}set progress(e){const t=this._progress;this._progress=m0(e,0,100),this.requestUpdate("progress",t)}_getProgressStyle(){return{width:`${this._progress}%`}}render(){return c`
      <div id="bar" style=${de(this._getProgressStyle())}></div>
    `}};on.styles=[b`
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
    `],jh([l({type:Number})],on.prototype,"progress",1),on=jh([g("uui-progress-bar")],on);class Ao extends L{constructor(t,i={}){super(t,{bubbles:!0,...i})}}Ao.CHANGE="change";var _0=Object.defineProperty,y0=Object.getOwnPropertyDescriptor,Rh=e=>{throw TypeError(e)},Ye=(e,t,i,o)=>{for(var r=o>1?void 0:o?y0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&_0(t,i,r),r},w0=(e,t,i)=>t.has(e)||Rh("Cannot "+i),x0=(e,t,i)=>t.has(e)?Rh("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),$0=(e,t,i)=>(w0(e,t,"access private method"),i),fl,Fh;let Rt=class extends _{constructor(){super(...arguments),x0(this,fl),this.name="",this.value="",this.label="",this.checked=!1,this.disabled=!1,this.readonly=!1}focus(){this._inputElement.focus()}click(){this._inputElement.click()}uncheck(){this.checked=!1}check(){this.checked=!0}makeFocusable(){this.disabled||this.removeAttribute("tabindex")}makeUnfocusable(){this.disabled||this.setAttribute("tabindex","-1")}render(){return c` <label>
      <input
        id="input"
        type="radio"
        name=${this.name}
        value=${this.value}
        .checked=${this.checked}
        .disabled=${this.disabled||this.readonly}
        @change=${$0(this,fl,Fh)} />
      <div id="button"></div>
      <div id="label">
        ${this.label?c`<span>${this.label}</span>`:c`<slot></slot>`}
      </div>
    </label>`}};fl=new WeakSet,Fh=function(e){e.stopPropagation();const t=this._inputElement.checked;this.checked=t,t&&this.focus(),this.dispatchEvent(new Ao(Ao.CHANGE))},Rt.styles=[ps,b`
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
        animation: ${fs};
      }

      @media (prefers-reduced-motion) {
        :host([disabled]:active) #button {
          animation: none;
        }

        #button::after {
          transition: none;
        }
      }
    `],Ye([z("#input")],Rt.prototype,"_inputElement",2),Ye([l({type:String})],Rt.prototype,"name",2),Ye([l({type:String})],Rt.prototype,"value",2),Ye([l({type:String})],Rt.prototype,"label",2),Ye([l({type:Boolean,reflect:!0})],Rt.prototype,"checked",2),Ye([l({type:Boolean,reflect:!0})],Rt.prototype,"disabled",2),Ye([l({type:Boolean,reflect:!0})],Rt.prototype,"readonly",2),Rt=Ye([g("uui-radio")],Rt);class vl extends L{constructor(t,i={}){super(t,{bubbles:!0,...i})}}vl.CHANGE="change";var k0=Object.defineProperty,C0=Object.getOwnPropertyDescriptor,Wh=e=>{throw TypeError(e)},bl=(e,t,i,o)=>{for(var r=o>1?void 0:o?C0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&k0(t,i,r),r},gl=(e,t,i)=>t.has(e)||Wh("Cannot "+i),P=(e,t,i)=>(gl(e,t,"read from private field"),i?i.call(e):t.get(e)),Xe=(e,t,i)=>t.has(e)?Wh("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),sn=(e,t,i,o)=>(gl(e,t,"write to private field"),t.set(e,i),i),q=(e,t,i)=>(gl(e,t,"access private method"),i),Y,H,ml,_l,nn,an,yl,F,Gh,wl,xl,$l,kl,Ei,qh,Kh,Oo;const E0="ArrowLeft",P0="ArrowUp",S0="ArrowRight",A0="ArrowDown",O0=" ",I0="Enter";let Er=class extends qt(_,""){constructor(){super(),Xe(this,F),this.disabled=!1,this.readonly=!1,Xe(this,Y,null),Xe(this,H,[]),Xe(this,ml,e=>{var t;(t=P(this,H))==null||t.forEach(i=>{i!==e.target?i.makeUnfocusable():i.makeFocusable()})}),Xe(this,_l,e=>{var t;this.contains(e.relatedTarget)||P(this,Y)===null&&((t=P(this,H))==null||t.forEach(i=>{i.makeFocusable()}))}),Xe(this,nn,()=>{this.pristine=!1}),Xe(this,an,e=>{e.target.checked===!0&&(this.value=e.target.value,q(this,F,Oo).call(this))}),Xe(this,yl,e=>{var t;switch(e.key){case E0:case P0:{e.preventDefault(),q(this,F,qh).call(this);break}case S0:case A0:{e.preventDefault(),q(this,F,Kh).call(this);break}case O0:{P(this,Y)===null&&(this.value=(t=q(this,F,Ei).call(this,1,!1))==null?void 0:t.value,q(this,F,Oo).call(this));break}case I0:this.submit()}}),this.addEventListener("keydown",P(this,yl)),this.addEventListener("focusin",P(this,ml)),this.addEventListener("focusout",P(this,_l)),this.updateComplete.then(()=>{q(this,F,xl).call(this,this.value)})}get value(){return super.value}set value(e){super.value=e,q(this,F,xl).call(this,e)}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","radiogroup")}updated(e){super.updated(e),e.has("disabled")&&q(this,F,$l).call(this,this.disabled),e.has("readonly")&&q(this,F,kl).call(this,this.readonly),e.has("name")&&q(this,F,wl).call(this,e.get("name"))}async focus(){var e,t;await this.updateComplete,P(this,Y)!==null?(e=P(this,H)[P(this,Y)])==null||e.focus():(t=q(this,F,Ei).call(this,1,!1))==null||t.focus()}async blur(){var e,t;await this.updateComplete,P(this,Y)!==null?(e=P(this,H)[P(this,Y)])==null||e.blur():(t=q(this,F,Ei).call(this,1,!1))==null||t.blur()}async click(){var e,t;await this.updateComplete,P(this,Y)!==null?(e=P(this,H)[P(this,Y)])==null||e.click():(t=q(this,F,Ei).call(this,1,!1))==null||t.click()}getFormElement(){if(P(this,H)&&P(this,Y))return P(this,H)[P(this,Y)]}render(){return c` <slot @slotchange=${q(this,F,Gh)}></slot> `}};Y=new WeakMap,H=new WeakMap,ml=new WeakMap,_l=new WeakMap,nn=new WeakMap,an=new WeakMap,yl=new WeakMap,F=new WeakSet,Gh=function(e){var i;if(e.stopPropagation(),(i=P(this,H))==null||i.forEach(o=>{o.removeEventListener(Ao.CHANGE,P(this,an)),o.removeEventListener("blur",P(this,nn))}),sn(this,Y,null),sn(this,H,e.target.assignedElements({flatten:!0}).filter(o=>o instanceof Rt)),P(this,H).length===0)return;P(this,H).forEach(o=>{o.addEventListener(Ao.CHANGE,P(this,an)),o.addEventListener("blur",P(this,nn))}),q(this,F,wl).call(this,this.name),this.disabled&&q(this,F,$l).call(this,!0),this.readonly&&q(this,F,kl).call(this,!0);const t=P(this,H).filter(o=>o.checked===!0);if(t.length>1&&(P(this,H).forEach(o=>{o.checked=!1}),this.value="",console.error("There can only be one checked radio among the <"+this.nodeName+"> children",this)),t.length===1){const o=t[0];this.value=o.value,sn(this,Y,P(this,H).indexOf(o))}},wl=function(e){var t;(t=P(this,H))==null||t.forEach(i=>i.name=e)},xl=function(e){const t=[];P(this,H).forEach((i,o)=>{i.value===e?(i.checked=!0,i.makeFocusable(),sn(this,Y,o)):(i.checked=!1,t.push(i))}),P(this,Y)!==null&&t.forEach(i=>i.makeUnfocusable())},$l=function(e){var t;(t=P(this,H))==null||t.forEach(i=>i.disabled=e)},kl=function(e){var t;(t=P(this,H))==null||t.forEach(i=>i.readonly=e)},Ei=function(e=1,t=!0){if(!P(this,H)||P(this,H).length===0)return null;const i=P(this,H).length;let o=P(this,Y)??0;for(let r=0;r<i+1;r++){if(!t||r>0){const s=P(this,H)[o];if(!s.disabled&&!s.readonly)return s}o=(o+e+i)%i}return null},qh=function(){var e,t;this.value=((e=q(this,F,Ei).call(this,-1))==null?void 0:e.value)??"",(t=P(this,H)[P(this,Y)??0])==null||t.focus(),q(this,F,Oo).call(this)},Kh=function(){var e,t;this.value=((e=q(this,F,Ei).call(this))==null?void 0:e.value)??"",(t=P(this,H)[P(this,Y)??0])==null||t.focus(),q(this,F,Oo).call(this)},Oo=function(){this.pristine=!1,this.dispatchEvent(new vl(vl.CHANGE))},Er.formAssociated=!0,Er.styles=[b`
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
    `],bl([l({type:Boolean,reflect:!0})],Er.prototype,"disabled",2),bl([l({type:Boolean,reflect:!0})],Er.prototype,"readonly",2),Er=bl([g("uui-radio-group")],Er);class Qt extends L{constructor(t,i={}){super(t,{bubbles:!0,...i})}}Qt.INPUT="input",Qt.CHANGE="change";var U0=Object.defineProperty,z0=Object.getOwnPropertyDescriptor,Yh=e=>{throw TypeError(e)},W=(e,t,i,o)=>{for(var r=o>1?void 0:o?z0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&U0(t,i,r),r},Xh=(e,t,i)=>t.has(e)||Yh("Cannot "+i),M0=(e,t,i)=>(Xh(e,t,"read from private field"),i?i.call(e):t.get(e)),Zh=(e,t,i)=>t.has(e)?Yh("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Pr=(e,t,i)=>(Xh(e,t,"access private method"),i),Ze,Pi,Cl;const El={TOP:3,CENTER:2},Io=18,Sr=3,$e=12,T0=24,Pl=e=>{const t=e.toString().indexOf(".");return t>=0?e.toString().length-t-1:0};let V=class extends qt(_,""){constructor(){super(),Zh(this,Ze),this.disabled=!1,this.readonly=!1,this._min=0,this._max=0,this.hideStepValues=!1,this._step=1,this._movement=!1,this.startPoint={mouse:0,low:0,high:0},this._lowInputValue=0,this._highInputValue=0,this._trackWidth=0,this._lowValuePercentStart=0,this._highValuePercentEnd=100,Zh(this,Cl,e=>{e.key=="Enter"&&this.submit()}),this._onTouchStart=e=>{if(this.disabled)return;const t=e.composedPath()[0];if(t!==this._outerTrack)if(t===this._innerColor||t===this._innerColorThumb)window.addEventListener("touchend",this._onTouchEnd),window.addEventListener("touchcancel",this._onTouchEnd),window.addEventListener("touchmove",this._onTouchMove),this._movement=!0,this._saveStartPoints(e.touches[0].pageX);else{const i=this._getClickedValue(e.touches[0].pageX),o=Math.abs(this._lowInputValue-i),r=Math.abs(this._highInputValue-i);o<r?this.setValueLow(i):this.setValueHigh(i)}},this._onTouchMove=e=>{this._dragBothValuesByMousePos(e.touches[0].pageX)},this._onTouchEnd=()=>{this._movement=!1,this.onChanged(),window.removeEventListener("touchend",this._onTouchEnd),window.removeEventListener("touchcancel",this._onTouchEnd),window.removeEventListener("touchmove",this._onTouchMove)},this._onMouseDown=e=>{if(this.disabled||this.readonly)return;const t=e.composedPath()[0];if(t!==this._outerTrack)if(t===this._innerColor||t===this._innerColorThumb)window.addEventListener("mouseup",this._onMouseUp),window.addEventListener("mousemove",this._onMouseMove),this._movement=!0,this._saveStartPoints(e.pageX);else{const i=this._getClickedValue(e.pageX),o=Math.abs(this._lowInputValue-i),r=Math.abs(this._highInputValue-i);o<r?this.setValueLow(i):this.setValueHigh(i)}},this._onMouseMove=e=>{e.preventDefault(),this._dragBothValuesByMousePos(e.pageX)},this._onMouseUp=()=>{this._movement=!1,this.onChanged(),window.removeEventListener("mouseup",this._onMouseUp),window.removeEventListener("mousemove",this._onMouseMove)},this.addEventListener("keydown",M0(this,Cl)),this.addEventListener("mousedown",this._onMouseDown),this.addEventListener("touchstart",this._onTouchStart),window.addEventListener("resize",()=>{var e;this._trackWidth=(e=this._outerTrack)==null?void 0:e.offsetWidth})}get min(){return this._min}set min(e){this._min=e,Pr(this,Ze,Pi).call(this)}get max(){return this._max}set max(e){this._max=e,Pr(this,Ze,Pi).call(this)}get step(){return this._step}set step(e){this._step=e,Pr(this,Ze,Pi).call(this)}get minGap(){return this._minGap}set minGap(e){this._minGap=e,Pr(this,Ze,Pi).call(this)}get maxGap(){return this._maxGap}set maxGap(e){this._maxGap=e,Pr(this,Ze,Pi).call(this)}get value(){return super.value}set value(e){super.value=e,Pr(this,Ze,Pi).call(this)}setValueLow(e){e=T(e,this.maxGap?this._highInputValue-this.maxGap>this.min?this._highInputValue-this.maxGap:this.min:this.min,this.minGap?this._highInputValue-this.minGap:this._highInputValue-this.step),this.setValue(e,this._highInputValue)}setValueHigh(e){e=T(e,this.minGap?this._lowInputValue+this.minGap:this._lowInputValue+this.step,this.maxGap?this.maxGap+this._lowInputValue<this.max?this.maxGap+this._lowInputValue:this.max:this.max),this.setValue(this._lowInputValue,e)}setValue(e,t,i){if(i){const o=this.startPoint.high-this.startPoint.low;e=T(e,this.min,this.max-o),t=T(t,this.min+o,this.max)}this._inputLow.value=e.toString(),this._inputHigh.value=t.toString(),this.value=`${e},${t}`}getFormElement(){return this._currentFocus?this._currentFocus:this._inputLow}async focus(){await this.updateComplete,this.getFormElement().focus()}async blur(){await this.updateComplete,this.getFormElement().blur()}connectedCallback(){super.connectedCallback(),this.value||(this.value=`${this._min},${this._max}`)}firstUpdated(e){super.updated(e),this._trackWidth=this._outerTrack.offsetWidth,this._runPropertiesChecks()}_runPropertiesChecks(){if(new RegExp(/^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/).test(this.value)||console.error("Range slider (Value error occurred): Bad input"),this._highInputValue===this._lowInputValue&&console.error("Range slider (Value error occurred): Low-end and high-end value should never be equal. Use <uui-slider></uui-slider> instead."),this._lowInputValue>this._highInputValue&&console.error("Range slider (Value error occurred): Low-end value should never be higher than high-end value."),(this._highInputValue>this._max||this._highInputValue<this._min)&&(this.setValueHigh(this._max),console.warn(`Conflict with the high-end value and max value. High-end value has been converted to the max value (${this._max})`)),(this._lowInputValue<this._min||this._lowInputValue>this._max)&&(this.setValueLow(this._min),console.warn(`Conflict with the low-end value and min value. Low-end value has been converted to the min value (${this._min})`)),this._step<=0&&(this._step=1,console.warn("Property step needs a value higher than 0. Converted the step value to 1 (default)")),(this._max-this._min)/this._step%1!==0&&console.error("Conflict with step value and the min and max values. May experience bad side effects"),this._minGap&&this._minGap<this._step&&(this._minGap=void 0,console.warn("Conflict with min-gap and step value. The min-gap needs to be higher than the step value. Removed the min-gap property.")),this._minGap&&this._maxGap&&this._minGap>this._maxGap&&(this._minGap=void 0,this._maxGap=void 0,console.warn("Conflict with min-gap and max-gap. Removed the min-gap and max-gap properties.")),this._minGap&&this._max-this._min<this._minGap&&(this._minGap=void 0,console.warn("Conflict with the min-gap and the total range. Removed the min-gap.")),this._maxGap&&this._highInputValue-this._lowInputValue>this._maxGap&&(this.setValueHigh(this._lowInputValue+this._maxGap),console.warn(`Conflict with value and max-gap. High-end value has been converted to the highest possible value based on the low-end value and the max gap value (${this._highInputValue})`)),this._minGap&&this._highInputValue-this._lowInputValue<this._minGap){const t=this._minGap;this._highInputValue-t<this._min?(this.setValueHigh(this._lowInputValue+t),console.warn(`Conflict with value and min gap. High-end value has been converted to the lowest possible value based on the low-end value and the min gap value (${this._highInputValue}).`)):(this.setValueLow(this._highInputValue-t),console.warn(`Conflict with value and min gap. Low-end value has been converted to the highest possible value based on the high-end value and the min gap value (${this._lowInputValue}).`))}}_updateInnerColor(){const e=this._max-this._min,t=this._lowInputValue-this._min,i=this._highInputValue-this._min,o=t/e*100,r=100-i/e*100;this._lowValuePercentStart=T(o,0,100),this._highValuePercentEnd=T(r,0,100)}_getClickedValue(e){const t=this._outerTrack.getBoundingClientRect().left,r=(e-t-$e)/(this._trackWidth-$e*2)*(this._max-this._min)+this._min;return Math.round(r/this._step)*this._step}_saveStartPoints(e){this.startPoint={mouse:e,low:this._lowInputValue,high:this._highInputValue}}_dragBothValuesByMousePos(e){const t=this._outerTrack.offsetWidth,i=e-this.startPoint.mouse,o=this._max-this._min,r=i/(t+$e*2),s=Math.round(r*o/this._step)*this._step,n=this.startPoint.low+s,a=this.startPoint.high+s;this.setValue(n,a,!0),this.dispatchEvent(new Qt(Qt.INPUT))}_onLowInput(e){this.disabled&&e.preventDefault(),this.readonly&&e.preventDefault(),this._currentFocus=this._inputLow;const t=Number(e.target.value);this.setValueLow(t),this.dispatchEvent(new Qt(Qt.INPUT))}_onHighInput(e){this.disabled&&e.preventDefault(),this.readonly&&e.preventDefault(),this._currentFocus=this._inputHigh;const t=Number(e.target.value);this.setValueHigh(t),this.dispatchEvent(new Qt(Qt.INPUT))}_onLowChange(){this.setValueLow(Number(this._inputLow.value)),this.onChanged()}_onHighChange(){this.setValueHigh(Number(this._inputHigh.value)),this.onChanged()}onChanged(){this.pristine=!1,this.dispatchEvent(new Qt(Qt.CHANGE))}render(){return c`
      <div id="range-slider">
        ${this._renderNativeInputs()}
        <div id="inner-track">
          <div
            id="inner-color-thumb"
            class="${this._movement?"active":""}"
            style="left: ${this._lowValuePercentStart}%; right: ${this._highValuePercentEnd}%">
            ${this._renderThumbValues()}
            <div class="${this._movement?"color active":"color"}"></div>
          </div>
          ${this._renderSteps()}
        </div>
      </div>
    `}_renderThumbValues(){return c`<div class="thumb-values">
      <span
        ><span
          >${this._lowInputValue.toFixed(Pl(this._step))}</span
        ></span
      >
      <span
        ><span
          >${this._highInputValue.toFixed(Pl(this._step))}</span
        ></span
      >
    </div>`}_renderSteps(){const e=(this._max-this._min)/this._step,t=(this._trackWidth-$e*2)/e;if(t<T0||e%1!==0)return;let i=0;const o=new Array(e+1).fill(t).map(r=>r*i++);return c`<div class="step-wrapper">
      <svg height="100%" width="100%">
        <rect x="9" y="9" height="${Sr}" rx="2" />
        ${this._renderStepCircles(o)}
      </svg>
      ${this._renderStepValues(e)}
    </div>`}_renderStepValues(e){if(this.hideStepValues||e>20)return;let t=0;const i=new Array(e+1).fill(this._step).map(o=>(this._min+o*t++).toFixed(Pl(this._step)));return c`<div class="step-values">
      ${i.map(o=>c`<span><span>${o}</span></span>`)}
    </div>`}_renderStepCircles(e){const t=this._trackWidth/(this._max-this._min);return y`${e.map(i=>{const o=i+$e,r=this._lowInputValue-this._min,s=this._highInputValue-this._min;return o/t>=r&&o/t<=s?y`<circle class="track-step filled" cx="${o}" cy="${Sr*2}" r="4.5" />`:y`<circle class="track-step regular" cx="${o}" cy="${Sr*2}" r="4.5" />`})}`}_renderNativeInputs(){return c` <div class="native-wrapper">
      <input
        id="inputLow"
        class="${this._movement?"focus":""}"
        type="range"
        min=${this._min}
        max=${this._max}
        step=${this._step}
        .value=${this._lowInputValue.toString()}
        aria-label="${this.label} low-end value"
        ?disabled="${this.disabled||this.readonly}"
        @input=${this._onLowInput}
        @change=${this._onLowChange} />
      <input
        id="inputHigh"
        class="${this._movement?"focus":""}"
        type="range"
        min="${this._min}"
        max="${this._max}"
        step="${this._step}"
        .value=${this._highInputValue.toString()}
        aria-label="${this.label} high-end value"
        ?disabled="${this.disabled||this.readonly}"
        @input=${this._onHighInput}
        @change=${this._onHighChange} />
    </div>`}};Ze=new WeakSet,Pi=function(){const e=this.value.split(",");let t=Number(e[0])||0,i=Number(e[1])||0;i=T(i,this._min,this._max),t=this._min+Math.round((t-this._min)/this._step)*this._step,i=this._min+Math.round((i-this._min)/this._step)*this._step,this._lowInputValue=T(t,this._min,this._minGap?i-this._minGap:i-this._step),this._highInputValue=T(i,this._minGap?this._lowInputValue+this._minGap:this._lowInputValue+this._step,Math.min(this._maxGap?t+this._maxGap:this._max,this._max)),this._updateInnerColor(),this.requestUpdate()},Cl=new WeakMap,V.formAssociated=!0,V.styles=[b`
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
        left: ${$e}px; /* Match TRACK_MARGIN */
        right: ${$e}px; /* Match TRACK_MARGIN */
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
        height: ${Io}px;
        cursor: grab;
        user-select: none;
        z-index: ${El.CENTER};
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
        height: ${Sr*2}px;
        background-color: var(--color-hover);
        transform: translateY(-${Sr/2}px);
      }

      .color {
        user-select: none;
        position: absolute;
        inset-inline: 0;
        height: ${Sr}px;
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
        margin: 0 ${-1*$e}px;
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
        margin: 0 ${$e}px; /* Match TRACK_MARGIN */
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
        z-index: ${El.TOP};
        width: ${Io}px;
        height: ${Io}px;
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
        z-index: ${El.TOP};
        width: ${Io}px;
        height: ${Io}px;
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
    `],W([l({type:String})],V.prototype,"label",2),W([l({type:Boolean,reflect:!0})],V.prototype,"disabled",2),W([l({type:Boolean,reflect:!0})],V.prototype,"readonly",2),W([l({type:Number})],V.prototype,"min",1),W([l({type:Number})],V.prototype,"max",1),W([l({type:Boolean,attribute:"hide-step-values"})],V.prototype,"hideStepValues",2),W([l({type:Number})],V.prototype,"step",1),W([l({type:Number,attribute:"min-gap"})],V.prototype,"minGap",1),W([l({type:Number,attribute:"max-gap"})],V.prototype,"maxGap",1),W([l({type:String})],V.prototype,"value",1),W([w()],V.prototype,"_movement",2),W([w()],V.prototype,"_lowInputValue",2),W([w()],V.prototype,"_highInputValue",2),W([w()],V.prototype,"_trackWidth",2),W([w()],V.prototype,"_lowValuePercentStart",2),W([w()],V.prototype,"_highValuePercentEnd",2),W([z("#range-slider")],V.prototype,"_outerTrack",2),W([z("#inputLow")],V.prototype,"_inputLow",2),W([z("#inputHigh")],V.prototype,"_inputHigh",2),W([z(".color")],V.prototype,"_innerColor",2),W([z("#inner-color-thumb")],V.prototype,"_innerColorThumb",2),V=W([g("uui-range-slider")],V);var D0=Object.getOwnPropertyDescriptor,L0=(e,t,i,o)=>{for(var r=o>1?void 0:o?D0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Sl=class extends _{render(){return c`<slot></slot>`}};Sl.styles=[b`
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
    `],Sl=L0([g("uui-ref-list")],Sl);class Uo extends L{}Uo.OPEN="open";var N0=Object.defineProperty,H0=Object.getOwnPropertyDescriptor,ln=(e,t,i,o)=>{for(var r=o>1?void 0:o?H0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&N0(t,i,r),r};let Je=class extends cs(Yi(_)){constructor(){super(...arguments),this.disabled=!1,this.readonly=!1,this.error=!1}handleOpenClick(e){e.stopPropagation(),this.dispatchEvent(new Uo(Uo.OPEN))}handleOpenKeydown(e){e.key!==" "&&e.key!=="Enter"||(e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new Uo(Uo.OPEN)))}};Je.styles=[b`
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
    `],ln([l({type:Boolean,reflect:!0})],Je.prototype,"disabled",2),ln([l({type:Boolean,reflect:!0})],Je.prototype,"readonly",2),ln([l({type:Boolean,reflect:!0})],Je.prototype,"error",2),Je=ln([g("uui-ref")],Je);var B0=Object.defineProperty,V0=Object.getOwnPropertyDescriptor,Jh=e=>{throw TypeError(e)},Si=(e,t,i,o)=>{for(var r=o>1?void 0:o?V0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&B0(t,i,r),r},j0=(e,t,i)=>t.has(e)||Jh("Cannot "+i),R0=(e,t,i)=>t.has(e)?Jh("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Qe=(e,t,i)=>(j0(e,t,"access private method"),i),te,Qh,td,un,ed,id,rd;let K=class extends Je{constructor(){super(...arguments),R0(this,te),this.name="",this.detail="",this._iconSlotHasContent=!1,this.fallbackIcon=`<svg
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
  </svg>`}connectedCallback(){super.connectedCallback(),C(this,"uui-icon")}renderDetail(){return c`<small id="detail"
      >${this.detail}<slot name="detail"></slot
    ></small>`}render(){return c`
      ${Qe(this,te,rd).call(this)}
      <!-- Select border must be right after #open-part -->
      <div id="select-border"></div>

      <slot></slot>
      <slot name="tag" id="tag-container"></slot>
      <slot name="actions" id="actions-container"></slot>
    `}};te=new WeakSet,Qh=function(e){this._iconSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0},td=function(){return c`<uui-icon .svg="${this.fallbackIcon}"></uui-icon>`},un=function(){return c`
      <span id="content" class="uui-text">
        <span id="icon">
          <slot name="icon" @slotchange=${Qe(this,te,Qh)}></slot>
          ${this._iconSlotHasContent===!1?Qe(this,te,td).call(this):""}
        </span>
        <div id="info">
          <div id="name">${this.name}<slot name="name"></slot></div>
          ${this.renderDetail()}
        </div>
      </span>
    `},ed=function(){return c`<a
      id="open-part"
      class="uui-text"
      tabindex=${this.disabled?E:"0"}
      href=${k(this.disabled?void 0:this.href)}
      target=${k(this.target||void 0)}
      rel=${k(this.rel||k(this.target==="_blank"?"noopener noreferrer":void 0))}>
      ${Qe(this,te,un).call(this)}
    </a>`},id=function(){return c`
      <button
        type="button"
        id="open-part"
        class="uui-text"
        tabindex="0"
        @click=${this.handleOpenClick}
        @keydown=${this.handleOpenKeydown}
        ?disabled=${this.disabled}>
        ${Qe(this,te,un).call(this)}
      </button>
    `},rd=function(){return this.readonly?c`${Qe(this,te,un).call(this)}`:this.href?Qe(this,te,ed).call(this):Qe(this,te,id).call(this)},K.styles=[...Je.styles,b`
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
    `],Si([l({type:String})],K.prototype,"name",2),Si([l({type:String})],K.prototype,"detail",2),Si([l({type:String})],K.prototype,"href",2),Si([l({type:String})],K.prototype,"target",2),Si([l({type:String})],K.prototype,"rel",2),Si([w()],K.prototype,"_iconSlotHasContent",2),K=Si([g("uui-ref-node")],K);var F0=Object.defineProperty,W0=Object.getOwnPropertyDescriptor,od=(e,t,i,o)=>{for(var r=o>1?void 0:o?W0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&F0(t,i,r),r};let cn=class extends K{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M142.212 397.267l106.052-48.024L398.479 199.03l-26.405-26.442-90.519 90.517-15.843-15.891 90.484-90.486-16.204-16.217-150.246 150.243-47.534 106.513zm74.904-100.739l23.285-23.283 3.353 22.221 22.008 3.124-23.283 23.313-46.176 20.991 20.813-46.366zm257.6-173.71L416.188 64.3l-49.755 49.785 58.504 58.503 49.779-49.77zM357.357 300.227h82.826v116.445H68.929V300.227h88.719v-30.648H38.288v177.733h432.537V269.578H357.357v30.649z"></path></svg>',this.alias=""}renderDetail(){const e=[];return this.alias!==""&&e.push(this.alias),this.detail!==""&&e.push(this.detail),c`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`}};cn.styles=[...K.styles],od([l({type:String})],cn.prototype,"alias",2),cn=od([g("uui-ref-node-data-type")],cn);var G0=Object.defineProperty,q0=Object.getOwnPropertyDescriptor,sd=(e,t,i,o)=>{for(var r=o>1?void 0:o?q0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&G0(t,i,r),r};let hn=class extends K{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M49.035 60.434h413.93v33.592H49.035zm0 82.005h86.578v86.577H49.035zm163.677 0h86.576v86.577h-86.576zm163.676 0h86.576v86.577h-86.576zM49.035 282.984h413.93v33.593H49.035zm0 82.006h86.578v86.576H49.035zm163.677 0h86.576v86.576h-86.576zm163.676 0h86.576v86.576h-86.576z"></path></svg>',this.alias=""}renderDetail(){const e=[];return this.alias!==""&&e.push(this.alias),this.detail!==""&&e.push(this.detail),c`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`}};hn.styles=[...K.styles],sd([l({type:String})],hn.prototype,"alias",2),hn=sd([g("uui-ref-node-document-type")],hn);var K0=Object.getOwnPropertyDescriptor,Y0=(e,t,i,o)=>{for(var r=o>1?void 0:o?K0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Al=class extends K{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M444.72 215.28H67.28c-11.04 0-20-8.96-20-20V64.896c0-11.04 8.96-20 20-20h377.44c11.04 0 20 8.96 20 20V195.28c0 11.056-8.96 20-20 20zm-357.44-40h337.44V84.896H87.28v90.384zm185.504 215.696c0-6.848.704-13.504 1.936-20H87.28v-90.384h337.44v12.496a108.098 108.098 0 0140 31.36v-63.856c0-11.04-8.96-20-20-20H67.28c-11.04 0-20 8.96-20 20v130.384c0 11.04 8.96 20 20 20h207.44c-1.232-6.496-1.936-13.152-1.936-20zm107.552-76.128c-41.968 0-76.112 34.16-76.112 76.128s34.144 76.128 76.112 76.128 76.128-34.16 76.128-76.128-34.144-76.128-76.128-76.128zm46.016 80.464a7.293 7.293 0 01-7.296 7.296h-27.072v27.088a7.293 7.293 0 01-7.296 7.296H376a7.293 7.293 0 01-7.296-7.296v-27.088h-27.072a7.293 7.293 0 01-7.296-7.296v-8.672a7.293 7.293 0 017.296-7.296h27.072v-27.088A7.293 7.293 0 01376 344.96h8.688a7.293 7.293 0 017.296 7.296v27.088h27.072a7.293 7.293 0 017.296 7.296v8.672z"></path></svg>'}};Al.styles=[...K.styles],Al=Y0([g("uui-ref-node-form")],Al);var X0=Object.defineProperty,Z0=Object.getOwnPropertyDescriptor,nd=(e,t,i,o)=>{for(var r=o>1?void 0:o?Z0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&X0(t,i,r),r};let dn=class extends K{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M331.135 98.375c3.677 14.798 4.045 16.031 3.702 31.225-.138 5.855-3.5 32.936-2.586 41.242.751 6.851 2.46 7.395 5.162 13.041 4.705 9.824 3.13 23.376 1.325 33.282-.988 5.42-3.076 13.136-6.248 17.561-3.497 4.876-10.498 4.913-13.592 10.602-4.459 8.195-1.941 19.692-4.752 28.54-3.193 10.033-11.325 10.738-11.938 23.867 3.986.562 7.962 1.134 11.938 1.703 3.99 8.484 11.297 25.552 18.759 30.688 6.25 1.705 12.505 3.411 18.752 5.113 21.907 8.982 46.251 19.732 68.204 28.987 19.991 8.434 43.927 11.439 51.151 32.396 0 14.229 1.343 47.849.976 66.497H36.514c-.367-18.648.974-52.268.974-66.497 7.226-20.957 31.16-23.963 51.151-32.396 21.953-9.255 46.297-20.005 68.201-28.987 6.25-1.702 12.506-3.408 18.754-5.113 7.461-5.136 14.77-22.203 18.76-30.688l8.877-2.158c-2.017-11.206-8.954-12.078-11.845-20.01a91882.59 91882.59 0 00-3.408-35.806c.055.563-8.163-1.497-9.238-2.171-11.58-7.256-11.816-36.723-12.931-48.978-.508-5.603 7.283-10.193 5.118-20.465-12.69-60.138 5.486-88.282 34.229-97.614 19.95-8.083 57.198-23.074 91.941-1.703l8.621 7.991 13.952 2.405c7 4.041 11.465 17.446 11.465 17.446z"></path></svg>',this.groupName=""}renderDetail(){const e=[];return this.detail!==""&&e.push(this.detail),this.groupName!==""&&e.push(this.groupName),c`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`}};dn.styles=[...K.styles],nd([l({type:String,attribute:"group-name"})],dn.prototype,"groupName",2),dn=nd([g("uui-ref-node-member")],dn);var J0=Object.defineProperty,Q0=Object.getOwnPropertyDescriptor,Ol=(e,t,i,o)=>{for(var r=o>1?void 0:o?Q0(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&J0(t,i,r),r};let zo=class extends K{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M161.08 106.29l-70.073 40.452 165.498 95.545 70.076-40.453L161.08 106.29zm259.851 41.077L255.435 51.815l-63.578 36.709 165.499 95.542 63.575-36.699zm-150.11 122.19V459.43l164.966-95.238V174.32l-164.966 95.237zM75.082 364.191l164.959 95.234V268.32L75.082 173.09v191.101z"></path></svg>',this.version="",this.author=""}renderDetail(){const e=[];return this.detail!==""&&e.push(this.detail),this.version!==""&&e.push(this.version),this.author!==""&&e.push(this.author),c`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`}};zo.styles=[...K.styles],Ol([l({type:String})],zo.prototype,"version",2),Ol([l({type:String})],zo.prototype,"author",2),zo=Ol([g("uui-ref-node-package")],zo);var tm=Object.defineProperty,em=Object.getOwnPropertyDescriptor,ad=(e,t,i,o)=>{for(var r=o>1?void 0:o?em(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&tm(t,i,r),r};let pn=class extends K{constructor(){super(...arguments),this.fallbackIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M331.135 98.375c3.677 14.798 4.045 16.031 3.702 31.225-.138 5.855-3.5 32.936-2.586 41.242.751 6.851 2.46 7.395 5.162 13.041 4.705 9.824 3.13 23.376 1.325 33.282-.988 5.42-3.076 13.136-6.248 17.561-3.497 4.876-10.498 4.913-13.592 10.602-4.459 8.195-1.941 19.692-4.752 28.54-3.193 10.033-11.325 10.738-11.938 23.867 3.986.562 7.962 1.134 11.938 1.703 3.99 8.484 11.297 25.552 18.759 30.688 6.25 1.705 12.505 3.411 18.752 5.113 21.907 8.982 46.251 19.732 68.204 28.987 19.991 8.434 43.927 11.439 51.151 32.396 0 14.229 1.343 47.849.976 66.497H36.514c-.367-18.648.974-52.268.974-66.497 7.226-20.957 31.16-23.963 51.151-32.396 21.953-9.255 46.297-20.005 68.201-28.987 6.25-1.702 12.506-3.408 18.754-5.113 7.461-5.136 14.77-22.203 18.76-30.688l8.877-2.158c-2.017-11.206-8.954-12.078-11.845-20.01a91882.59 91882.59 0 00-3.408-35.806c.055.563-8.163-1.497-9.238-2.171-11.58-7.256-11.816-36.723-12.931-48.978-.508-5.603 7.283-10.193 5.118-20.465-12.69-60.138 5.486-88.282 34.229-97.614 19.95-8.083 57.198-23.074 91.941-1.703l8.621 7.991 13.952 2.405c7 4.041 11.465 17.446 11.465 17.446z"></path></svg>',this.groupName=""}renderDetail(){const e=[];return this.detail!==""&&e.push(this.detail),this.groupName!==""&&e.push(this.groupName),c`<small id="detail"
      >${e.join(" | ")}<slot name="detail"></slot
    ></small>`}};pn.styles=[...K.styles],ad([l({type:String,attribute:"group-name"})],pn.prototype,"groupName",2),pn=ad([g("uui-ref-node-user")],pn);var im=Object.defineProperty,rm=Object.getOwnPropertyDescriptor,ld=(e,t,i,o)=>{for(var r=o>1?void 0:o?rm(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&im(t,i,r),r};let fn=class extends _{constructor(){super(...arguments),this.enforceScroll=!1}connectedCallback(){super.connectedCallback(),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")}render(){return c`<slot></slot>`}};fn.styles=[b`
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
    `],ld([l({type:Boolean,reflect:!0,attribute:"enforce-scroll"})],fn.prototype,"enforceScroll",2),fn=ld([g("uui-scroll-container")],fn);class Il extends L{constructor(t,i={}){super(t,{bubbles:!0,...i})}}Il.CHANGE="change";var om=Object.defineProperty,sm=Object.getOwnPropertyDescriptor,Ft=(e,t,i,o)=>{for(var r=o>1?void 0:o?sm(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&om(t,i,r),r};let xt=class extends qt(_,""){constructor(){super(),this.placeholder="",this.disabled=!1,this.readonly=!1,this.error=!1,this.options=[],this._groups=[],this.disabledGroups="",this._disabledGroups=[],this._values=[],this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0")}),this.addEventListener("blur",()=>{this.style.setProperty("--uui-show-focus-outline","")})}async focus(){await this.updateComplete,this._input.focus()}async blur(){await this.updateComplete,this._input.blur()}async click(){await this.updateComplete,this._input.click()}getFormElement(){return this._input}connectedCallback(){super.connectedCallback(),this.label||console.warn(this.tagName+" needs a `label`",this)}_createDisabledGroups(){this.disabledGroups.length!==0&&(this._disabledGroups=this.disabledGroups.split(","))}_extractGroups(){this.options.length!==0&&(this._groups=Array.from(new Set(this.options.filter(e=>e.group).map(e=>e.group))))}willUpdate(e){if(e.has("options")){this._extractGroups(),this._values=this.options.map(i=>i.value);const t=this.options.find(i=>i.selected);this.value=t?t.value:""}e.has("value")&&(this.value=this._values.includes(this.value)?this.value:""),e.has("disabledGroups")&&this._createDisabledGroups()}setValue(e){e.stopPropagation();const t=e.target;e.target&&(this.value=t.value),this.dispatchEvent(new Il(Il.CHANGE,{bubbles:!0,composed:!1}))}_renderOption(e,t,i,o){return c`<option
      value="${t}"
      ?selected=${i}
      ?disabled=${o}>
      ${e}
    </option>`}_renderGrouped(){return this._groups.length===0?E:c`
      ${this._groups.map(e=>c`<optgroup
            label=${e}
            ?disabled=${this._disabledGroups.some(t=>t.toLowerCase()===e.toLowerCase())}>
            ${this.options.map(t=>t.group===e?this._renderOption(t.name,t.value,t.selected,t.disabled):"")}
          </optgroup>`)}
    `}_getDisplayValue(){var e;return((e=this.options.find(t=>t.value===this.value))==null?void 0:e.name)||this.value}render(){return this.readonly?c`<span>${this._getDisplayValue()}</span>`:c` <select
      id="native"
      aria-label=${this.label}
      @change=${this.setValue}
      ?disabled=${this.disabled}
      .name=${this.name}
      .value=${this.value}>
      <option disabled selected value="" hidden>${this.placeholder}</option>
      ${this._renderGrouped()}
      ${this.options.filter(e=>!e.group).map(e=>this._renderOption(e.name,e.value,e.selected,e.disabled))}
    </select>`}};xt.styles=[b`
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
    `],Ft([l({type:String})],xt.prototype,"label",2),Ft([l()],xt.prototype,"placeholder",2),Ft([l({type:Boolean,reflect:!0})],xt.prototype,"disabled",2),Ft([l({type:Boolean,reflect:!0})],xt.prototype,"readonly",2),Ft([l({type:Boolean,reflect:!0})],xt.prototype,"error",2),Ft([l({type:Array,attribute:!1})],xt.prototype,"options",2),Ft([w()],xt.prototype,"_groups",2),Ft([l()],xt.prototype,"disabledGroups",2),Ft([w()],xt.prototype,"_disabledGroups",2),Ft([z("#native")],xt.prototype,"_input",2),xt=Ft([g("uui-select")],xt);const nm=b`
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
`;class Ar extends L{constructor(t,i={}){super(t,{bubbles:!0,...i})}}Ar.INPUT="input",Ar.CHANGE="change";var am=Object.defineProperty,lm=Object.getOwnPropertyDescriptor,ud=e=>{throw TypeError(e)},ft=(e,t,i,o)=>{for(var r=o>1?void 0:o?lm(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&am(t,i,r),r},Ul=(e,t,i)=>t.has(e)||ud("Cannot "+i),cd=(e,t,i)=>(Ul(e,t,"read from private field"),i?i.call(e):t.get(e)),zl=(e,t,i)=>t.has(e)?ud("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),hd=(e,t,i,o)=>(Ul(e,t,"write to private field"),t.set(e,i),i),um=(e,t,i)=>(Ul(e,t,"access private method"),i),vn,bn,Ml,dd;const Mo=12,pd=24,cm=(e,t,i)=>Array.from({length:(t-e)/i+1},(o,r)=>e+r*i),hm=e=>{const t=e.toString().indexOf(".");return t>=0?e.toString().length-t-1:0};let it=class extends qt(_,""){constructor(){super(),zl(this,Ml),zl(this,vn,0),this.hideStepValues=!1,this.hideValueLabel=!1,this.min=0,this.max=100,zl(this,bn,1),this.disabled=!1,this.readonly=!1,this._stepWidth=0,this.onWindowResize=()=>{this._stepWidth=this._calculateStepWidth()},this._steps=[],this._sliderPosition="0%",this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0")}),this.addEventListener("blur",()=>{this.style.setProperty("--uui-show-focus-outline","")}),this.addEventListener("keydown",um(this,Ml,dd))}get step(){return cd(this,bn)}set step(e){hd(this,bn,e),hd(this,vn,(e.toString().split(".")[1]||[]).length)}get value(){return super.value}set value(e){if(e instanceof File)return;const t=super.value;let i=e?parseFloat(e):0;i=Math.min(Math.max(i,this.min),this.max),this.step>0&&(i=Math.round(i/this.step)*this.step),super.value=i.toFixed(cd(this,vn)).toString(),this._calculateSliderPosition(),this.requestUpdate("value",t)}async focus(){await this.updateComplete,this._input.focus()}async blur(){await this.updateComplete,this._input.blur()}async click(){await this.updateComplete,this._input.click()}getFormElement(){return this._input}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.onWindowResize),this.label||console.warn(this.tagName+" needs a `label`",this)}disconnectedCallback(){window.removeEventListener("resize",this.onWindowResize),super.disconnectedCallback()}firstUpdated(){this._calculateSliderPosition(),this._updateSteps()}updated(e){super.updated(e),(e.get("max")||e.get("min")||e.get("step"))&&(this.value=this.value,this._updateSteps())}_updateSteps(){this._steps=cm(this.min,this.max,this.step),this._stepWidth=this._calculateStepWidth()}_calculateStepWidth(){return(this._track.getBoundingClientRect().width-Mo*2)/(this._steps.length-1)}_calculateSliderPosition(){const e=(parseFloat(super.value||"0")-this.min)/(this.max-this.min);this._sliderPosition=`${Math.floor(e*1e5)/1e3}%`}_onInput(e){e.stopPropagation(),this.value=this._input.value,this.dispatchEvent(new Ar(Ar.INPUT))}_onChange(e){e.stopPropagation(),this.pristine=!1,this.dispatchEvent(new Ar(Ar.CHANGE))}renderTrackSteps(){return y`
  ${this._steps.map(e=>{if(this._stepWidth>=pd){const t=Math.round(Mo+this._stepWidth*this._steps.indexOf(e));return y`<circle class="track-step" cx="${t}" cy="50%" r="4.5" />`}return y``})}
`}renderStepValues(){return this.hideStepValues?E:c`<div id="step-values">
      ${this._steps.map(e=>c` <span
            ><span>
              ${this._steps.length<=20&&this._stepWidth>=pd?e.toFixed(hm(this.step)):E}
            </span></span
          >`)}
    </div>`}render(){return c`
      <input
        id="input"
        type="range"
        min="${this.min}"
        max="${this.max}"
        .value="${this.value}"
        aria-label="${this.label}"
        step="${+this.step}"
        ?disabled=${this.disabled||this.readonly}
        ?readonly=${this.readonly}
        @input=${this._onInput}
        @change=${this._onChange} />
      <div id="track" aria-hidden="true">
        <svg height="100%" width="100%">
          <rect x="9" y="9" height="3" rx="2" />
          ${this.renderTrackSteps()}
        </svg>

        <div id="track-inner" aria-hidden="true">
          <div id="thumb" style=${de({left:this._sliderPosition})}>
            ${this.hideValueLabel?null:c`<div id="thumb-label">${this.value}</div>`}
          </div>
        </div>
      </div>
      ${this.renderStepValues()}
    `}};vn=new WeakMap,bn=new WeakMap,Ml=new WeakSet,dd=function(e){e.key=="Enter"&&this.submit()},it.formAssociated=!0,it.styles=[Pf,nm,b`
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
        left: ${Mo}px; /* Match TRACK_MARGIN */
        right: ${Mo}px; /* Match TRACK_MARGIN */
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
        margin: 0 ${Mo}px; /* Match TRACK_MARGIN */
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
    `],ft([l({type:Boolean,attribute:"hide-step-values"})],it.prototype,"hideStepValues",2),ft([l({type:Boolean,attribute:"hide-value-label"})],it.prototype,"hideValueLabel",2),ft([l({type:Number})],it.prototype,"min",2),ft([l({type:Number})],it.prototype,"max",2),ft([l({type:Number})],it.prototype,"step",1),ft([l({type:String})],it.prototype,"value",1),ft([l({type:Boolean,reflect:!0})],it.prototype,"disabled",2),ft([l({type:Boolean,reflect:!0})],it.prototype,"readonly",2),ft([l({type:String})],it.prototype,"label",2),ft([z("#input")],it.prototype,"_input",2),ft([z("#track")],it.prototype,"_track",2),ft([w()],it.prototype,"_stepWidth",2),ft([w()],it.prototype,"_steps",2),ft([w()],it.prototype,"_sliderPosition",2),it=ft([g("uui-slider")],it);var dm=Object.defineProperty,pm=Object.getOwnPropertyDescriptor,fd=(e,t,i,o)=>{for(var r=o>1?void 0:o?pm(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&dm(t,i,r),r};let gn=class extends _{constructor(){super(...arguments),this.open=!1}render(){return c`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="m4 9 8 8 8-8"></path>
    </svg>`}};gn.styles=[b`
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
    `],fd([l({type:Boolean,reflect:!0})],gn.prototype,"open",2),gn=fd([g("uui-symbol-expand")],gn);var fm=Object.defineProperty,vm=Object.getOwnPropertyDescriptor,Tl=(e,t,i,o)=>{for(var r=o>1?void 0:o?vm(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&fm(t,i,r),r};let To=class extends _{constructor(){super(...arguments),this.src="",this.alt=""}connectedCallback(){super.connectedCallback(),C(this,"uui-icon")}render(){return this.src?c`<img src=${this.src} alt=${this.alt} />`:c`<uui-icon
          name="picture"
          .fallback=${Nf.strings[0]}></uui-icon>`}};To.styles=[b`
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
    `],Tl([l({type:String})],To.prototype,"src",2),Tl([l({type:String})],To.prototype,"alt",2),To=Tl([g("uui-symbol-file-thumbnail")],To);var bm=Object.defineProperty,gm=Object.getOwnPropertyDescriptor,vd=(e,t,i,o)=>{for(var r=o>1?void 0:o?gm(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&bm(t,i,r),r};let mn=class extends _{constructor(){super(...arguments),this.type=""}render(){return c`
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

      ${this.type?c`<small id="file-type" class="uui-small"
            >${this.type.toUpperCase()}</small
          >`:""}
    `}};mn.styles=[Fi,b`
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
    `],vd([l({type:String})],mn.prototype,"type",2),mn=vd([g("uui-symbol-file")],mn);var mm=Object.getOwnPropertyDescriptor,_m=(e,t,i,o)=>{for(var r=o>1?void 0:o?mm(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Dl=class extends _{render(){return c`<svg
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
    </svg>`}};Dl.styles=[b`
      :host {
        display: block;
        position: relative;
        box-sizing: border-box;
      }

      #icon {
        width: 100%;
        color: var(--uui-color-border-standalone,#c2c2c2);
      }
    `],Dl=_m([g("uui-symbol-folder")],Dl);var ym=Object.defineProperty,wm=Object.getOwnPropertyDescriptor,bd=(e,t,i,o)=>{for(var r=o>1?void 0:o?wm(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&ym(t,i,r),r};let _n=class extends _{constructor(){super(...arguments),this.open=!1}render(){return y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      ${this.open===!0?y`<path d="M457.915 242.222H269.053l-.004-78.416c0-33.277-12.63-63.824-33.538-86.175-20.82-22.357-50.579-36.756-83.391-36.731-32.814-.024-62.57 14.375-83.391 36.731-20.915 22.351-33.541 52.897-33.547 86.175v103.859H96.19v-13.476l-35.656-35.656H96.19v-54.728c0-17.765 6.717-33.406 17.084-44.502 10.463-11.09 23.927-17.37 38.845-17.394 14.916.024 28.375 6.304 38.837 17.394 10.375 11.096 17.092 26.738 17.087 44.502v78.416h-26.189c-9.159 0-16.582 7.426-16.582 16.585v194.53c0 9.158 7.423 16.583 16.582 16.583h276.06c9.164 0 16.587-7.425 16.587-16.583v-194.53c.001-9.159-7.422-16.584-16.586-16.584z"></path>`:y`<path d="M404.84 246.573h-22.084l-.002-73.603c0-36.675-13.921-70.311-36.917-94.892-22.91-24.584-55.547-40.367-91.539-40.336-36.003-.031-68.643 15.752-91.55 40.336-23.001 24.582-36.918 58.217-36.925 94.892v73.603h-22.082c-9.16 0-16.585 7.421-16.585 16.583v194.531c0 9.158 7.425 16.585 16.585 16.585H404.84c9.162 0 16.586-7.427 16.586-16.585V263.156c0-9.161-7.424-16.583-16.586-16.583zm-218.013-73.602c0-21.167 8.012-39.893 20.468-53.219 12.552-13.316 28.896-20.982 47.003-21.007 18.095.025 34.438 7.685 46.987 21.007 12.455 13.326 20.467 32.052 20.467 53.219v73.603H186.827v-73.603z"></path>`}
    </svg>`}};_n.styles=[b`
      :host {
        display: inline-block;
        vertical-align: middle;
        width: 1em;
      }

      svg {
        fill: currentColor;
      }
    `],bd([l({type:Boolean,reflect:!0})],_n.prototype,"open",2),_n=bd([g("uui-symbol-lock")],_n);var xm=Object.getOwnPropertyDescriptor,$m=(e,t,i,o)=>{for(var r=o>1?void 0:o?xm(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Ll=class extends _{render(){return y`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle cx="17" cy="50" r="9"></circle>
      <circle cx="50" cy="50" r="9"></circle>
      <circle cx="83" cy="50" r="9"></circle>
    </svg>`}};Ll.styles=[b`
      :host {
        display: inline-block;
        vertical-align: bottom;
        width: 1.15em;
        height: 1.15em;
      }

      svg {
        fill: currentColor;
      }
    `],Ll=$m([g("uui-symbol-more")],Ll);var km=Object.defineProperty,Cm=Object.getOwnPropertyDescriptor,gd=(e,t,i,o)=>{for(var r=o>1?void 0:o?Cm(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&km(t,i,r),r};let yn=class extends eo(_){constructor(){super(...arguments),this.descending=!1}render(){return c` <svg
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
      </svg>`}};yn.styles=[b`
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
    `],gd([l({type:Boolean,reflect:!0})],yn.prototype,"descending",2),yn=gd([g("uui-symbol-sort")],yn);var Em=Object.getOwnPropertyDescriptor,Pm=(e,t,i,o)=>{for(var r=o>1?void 0:o?Em(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Nl=class extends _{connectedCallback(){super.connectedCallback(),this.setAttribute("role","table")}render(){return c`<slot></slot>`}};Nl.styles=[b`
      :host {
        display: table;
        width: 100%;
        border-radius: var(--uui-border-radius,3px);
        background-color: var(--uui-color-surface,#fff);
        cursor: default;
      }
    `],Nl=Pm([g("uui-table")],Nl);var Sm=Object.defineProperty,Am=Object.getOwnPropertyDescriptor,wn=(e,t,i,o)=>{for(var r=o>1?void 0:o?Am(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Sm(t,i,r),r};let ti=class extends _{constructor(){super(...arguments),this.disableChildInteraction=!1,this.noPadding=!1,this.clipText=!1,this._observer=new ResizeObserver(()=>{this._detectOverflow()})}_detectOverflow(){this.scrollWidth>this.clientWidth?this.setAttribute("title",this.innerText):this.removeAttribute("title")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","cell")}disconnectedCallback(){super.disconnectedCallback(),this._observer.disconnect()}updated(e){super.updated(e),e.has("clipText")&&(this.clipText?(this._detectOverflow(),this._observer.observe(this)):this._observer.disconnect())}render(){return c` <slot @slotchange=${this._detectOverflow}></slot>`}};ti.styles=[b`
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
    `],wn([l({type:Boolean,reflect:!0,attribute:"disable-child-interaction"})],ti.prototype,"disableChildInteraction",2),wn([l({type:Boolean,reflect:!0,attribute:"no-padding"})],ti.prototype,"noPadding",2),wn([l({type:Boolean,reflect:!0,attribute:"clip-text"})],ti.prototype,"clipText",2),ti=wn([g("uui-table-cell")],ti);var Om=Object.getOwnPropertyDescriptor,Im=(e,t,i,o)=>{for(var r=o>1?void 0:o?Om(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Hl=class extends _{};Hl.styles=[b`
      :host {
        display: table-column;
      }
    `],Hl=Im([g("uui-table-column")],Hl);var Um=Object.getOwnPropertyDescriptor,zm=(e,t,i,o)=>{for(var r=o>1?void 0:o?Um(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Bl=class extends ti{connectedCallback(){super.connectedCallback(),this.setAttribute("role","columnheader")}};Bl.styles=[...ti.styles,b`
      :host {
        border-top: none;
      }
    `],Bl=zm([g("uui-table-head-cell")],Bl);var Mm=Object.getOwnPropertyDescriptor,Tm=(e,t,i,o)=>{for(var r=o>1?void 0:o?Mm(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Vl=class extends _{connectedCallback(){super.connectedCallback(),this.setAttribute("role","row")}render(){return c`<slot></slot>`}};Vl.styles=[b`
      :host {
        display: table-header-group;
        font-weight: bold;
      }
    `],Vl=Tm([g("uui-table-head")],Vl);var Dm=Object.defineProperty,Lm=Object.getOwnPropertyDescriptor,md=(e,t,i,o)=>{for(var r=o>1?void 0:o?Lm(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Dm(t,i,r),r};let xn=class extends cs(Yi(_)){constructor(){super();let e=!1;this.addEventListener("blur",()=>{e===!1&&this.style.setProperty("--uui-show-focus-outline","1"),e=!1}),this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0"),e=!0}),this.addEventListener("mouseup",()=>{e=!1})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","row")}updated(e){e.has("selectOnly")&&this.updateChildSelectOnly()}updateChildSelectOnly(){this.slotCellNodes&&this.slotCellNodes.forEach(e=>{e.disableChildInteraction!==void 0&&(e.disableChildInteraction=this.selectOnly)})}render(){return c` <slot @slotchanged=${this.updateChildSelectOnly}></slot> `}};xn.styles=[b`
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
    `],md([Le({flatten:!0,selector:"uui-table-cell, [uui-table-cell], [role=cell]"})],xn.prototype,"slotCellNodes",2),xn=md([g("uui-table-row")],xn);var Nm=Object.defineProperty,Hm=Object.getOwnPropertyDescriptor,Or=(e,t,i,o)=>{for(var r=o>1?void 0:o?Hm(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Nm(t,i,r),r};let ei=class extends eo(Gt("",_)){constructor(){super(),this.disabled=!1,this.orientation="horizontal",this.addEventListener("click",this.onHostClick)}onHostClick(e){this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}render(){return this.href?c`
          <a
            id="button"
            href=${k(this.disabled?void 0:this.href)}
            target=${k(this.target||void 0)}
            rel=${k(this.rel||k(this.target==="_blank"?"noopener noreferrer":void 0))}
            role="tab">
            <slot name="icon"></slot>
            ${this.renderLabel()}
            <slot name="extra"></slot>
          </a>
        `:c`
          <button
            type="button"
            id="button"
            ?disabled=${this.disabled}
            role="tab">
            <slot name="icon"></slot>
            ${this.renderLabel()}
            <slot name="extra"></slot>
          </button>
        `}};ei.styles=[b`
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
    `],Or([l({type:Boolean,reflect:!0})],ei.prototype,"disabled",2),Or([l({type:String})],ei.prototype,"href",2),Or([l({type:String})],ei.prototype,"target",2),Or([l({type:String})],ei.prototype,"rel",2),Or([l({type:String,reflect:!0})],ei.prototype,"orientation",2),ei=Or([g("uui-tab")],ei);var Bm=Object.defineProperty,Vm=Object.getOwnPropertyDescriptor,_d=e=>{throw TypeError(e)},Ir=(e,t,i,o)=>{for(var r=o>1?void 0:o?Vm(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Bm(t,i,r),r},jl=(e,t,i)=>t.has(e)||_d("Cannot "+i),I=(e,t,i)=>(jl(e,t,"read from private field"),i?i.call(e):t.get(e)),ee=(e,t,i)=>t.has(e)?_d("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Do=(e,t,i,o)=>(jl(e,t,"write to private field"),t.set(e,i),i),$t=(e,t,i)=>(jl(e,t,"access private method"),i),$n,ie,ke,Ur,zr,kn,Lo,No,vt,yd,wd,Rl,xd,Mr,Cn,$d,Fl,Wl;let ii=class extends _{constructor(){super(...arguments),ee(this,vt),ee(this,$n,0),this.dropdownContentDirection="vertical",ee(this,ie,[]),ee(this,ke,[]),ee(this,Ur,new Map),ee(this,zr,[]),ee(this,kn,new ResizeObserver($t(this,vt,wd).bind(this))),ee(this,Lo,[]),ee(this,No,!1),ee(this,Mr,e=>{const t=e.currentTarget;if($t(this,vt,Wl).call(this,t)){t.active=!0;const i=I(this,Ur).get(t);i&&(i.active=!0),[...I(this,ie),...I(this,ke)].filter(s=>s!==t&&s!==i).forEach(s=>{$t(this,vt,Wl).call(this,s)&&(s.active=!1)}),I(this,ke).some(s=>s.active&&s!==i)?this._moreButtonElement.classList.add("active-inside"):this._moreButtonElement.classList.remove("active-inside")}})}connectedCallback(){super.connectedCallback(),$t(this,vt,yd).call(this)}disconnectedCallback(){super.disconnectedCallback(),I(this,kn).unobserve(this),$t(this,vt,Rl).call(this)}render(){return c`
      <div id="main">
        <div id="grid" role="tablist">
          <slot @slotchange=${$t(this,vt,xd)}></slot>
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
          ${Fa(I(this,ke),e=>c`${e}`)}
        </div>
      </uui-popover-container>
    `}};$n=new WeakMap,ie=new WeakMap,ke=new WeakMap,Ur=new WeakMap,zr=new WeakMap,kn=new WeakMap,Lo=new WeakMap,No=new WeakMap,vt=new WeakSet,yd=async function(){C(this,"uui-button"),C(this,"uui-popover-container"),C(this,"uui-symbol-more"),await this.updateComplete,I(this,kn).observe(this._mainElement)},wd=function(e){const t=Number.parseFloat(this.style.getPropertyValue("--uui-tab-group-gap"));(Number.isNaN(t)?0:t)!==I(this,$n)?$t(this,vt,Cn).call(this):$t(this,vt,Fl).call(this,e[0].contentBoxSize[0].inlineSize)},Rl=function(){I(this,ie).forEach(e=>{e.removeEventListener("click",I(this,Mr)),I(this,Lo).forEach(t=>t.disconnect())}),I(this,Lo).length=0,I(this,zr).length=0},xd=function(){$t(this,vt,Rl).call(this),$t(this,vt,$d).call(this),I(this,ie).forEach(e=>{e.addEventListener("click",I(this,Mr));const t=new ResizeObserver($t(this,vt,Cn).bind(this));t.observe(e),I(this,Lo).push(t)})},Mr=new WeakMap,Cn=async function(){if(I(this,No))return;Do(this,No,!0),requestAnimationFrame(()=>{Do(this,No,!1)}),await this.updateComplete;const e=Number.parseFloat(this.style.getPropertyValue("--uui-tab-group-gap")),t=Number.isNaN(e)?0:e;Do(this,$n,t);let i=0;for(let r=0;r<I(this,ie).length;r++)I(this,ie)[r].style.display="",i+=I(this,ie)[r].offsetWidth,I(this,zr)[r]=i,i+=t;const o=2;this._mainElement.style.width=i-t+o+"px",$t(this,vt,Fl).call(this,this._mainElement.offsetWidth)},$d=function(){Do(this,ie,this._slottedNodes?this._slottedNodes:[]),$t(this,vt,Cn).call(this)},Fl=function(e){const t=this._moreButtonElement.offsetWidth,i=e-(t||0);I(this,ke).forEach(s=>{s.removeEventListener("click",I(this,Mr))}),Do(this,ke,[]),I(this,Ur).clear();let o=!1;const r=I(this,zr).length;for(let s=0;s<r;s++){const n=I(this,zr)[s],a=I(this,ie)[s];if(n<=(s===r-1?e:i))a.style.display="";else{const u=a.cloneNode(!0);u.addEventListener("click",I(this,Mr)),u.classList.add("hidden-tab"),u.style.display="",u.orientation=this.dropdownContentDirection,I(this,Ur).set(u,a),I(this,Ur).set(a,u),I(this,ke).push(u),a.style.display="none",a.active&&(o=!0)}}I(this,ke).length===0?(this._moreButtonElement.style.display="none",this._popoverContainerElement.hidePopover()):this._moreButtonElement.style.display="",o?this._moreButtonElement.classList.add("active-inside"):this._moreButtonElement.classList.remove("active-inside"),this.requestUpdate()},Wl=function(e){return typeof e=="object"&&"active"in e&&typeof e.active=="boolean"},ii.styles=[b`
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
    `],Ir([z("#more-button")],ii.prototype,"_moreButtonElement",2),Ir([z("#popover-container")],ii.prototype,"_popoverContainerElement",2),Ir([z("#main")],ii.prototype,"_mainElement",2),Ir([Le({flatten:!0,selector:"uui-tab, [uui-tab], [role=tab]"})],ii.prototype,"_slottedNodes",2),Ir([l({type:String,reflect:!0,attribute:"dropdown-content-direction"})],ii.prototype,"dropdownContentDirection",2),ii=Ir([g("uui-tab-group")],ii);var jm=Object.defineProperty,Rm=Object.getOwnPropertyDescriptor,Gl=(e,t,i,o)=>{for(var r=o>1?void 0:o?Rm(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&jm(t,i,r),r};let Ho=class extends _{constructor(){super(...arguments),this.color="default",this.look="primary"}render(){return c`<slot></slot>`}};Ho.styles=[b`
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
    `],Gl([l({reflect:!0})],Ho.prototype,"color",2),Gl([l({reflect:!0})],Ho.prototype,"look",2),Ho=Gl([g("uui-tag")],Ho);class En extends L{constructor(t,i={}){super(t,{bubbles:!0,...i})}}En.CHANGE="change",En.INPUT="input";var Fm=Object.defineProperty,Wm=Object.getOwnPropertyDescriptor,ct=(e,t,i,o)=>{for(var r=o>1?void 0:o?Wm(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Fm(t,i,r),r};let X=class extends qt(_,""){constructor(){super(),this.placeholder="",this.disabled=!1,this.readonly=!1,this.name="",this.error=!1,this.minlengthMessage=e=>`${e} characters left`,this.maxlengthMessage=(e,t)=>`Maximum ${e} characters, ${t} too many.`,this.autoHeight=!1,this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0")}),this.addEventListener("blur",()=>{this.style.setProperty("--uui-show-focus-outline","")}),this.addValidator("tooShort",()=>{const e=this.minlengthMessage;return typeof e=="function"?e(this.minlength?this.minlength-String(this.value).length:0):e},()=>!!this.minlength&&this.value.length<this.minlength),this.addValidator("tooLong",()=>{const e=this.maxlengthMessage;return typeof e=="function"?e(this.maxlength??0,String(this.value).length):e},()=>!!this.maxlength&&this.value.length>this.maxlength)}connectedCallback(){super.connectedCallback(),this.label||console.warn(this.tagName+" needs a `label`",this),this.autoHeight&&requestAnimationFrame(()=>{this.autoUpdateHeight()})}async focus(){await this.updateComplete,this._textarea.focus()}async blur(){await this.updateComplete,this._textarea.blur()}async click(){await this.updateComplete,this._textarea.click()}getFormElement(){return this._textarea}onInput(e){this.value=e.target.value,this.autoHeight&&this.autoUpdateHeight()}onChange(e){e.stopPropagation(),this.pristine=!1,this.dispatchEvent(new En(En.CHANGE))}autoUpdateHeight(){const e=this.shadowRoot.host,t=this._textarea,i=e.scrollTop,o=getComputedStyle(e).height;e.style.display="block",e.style.height=o,t.style.height="auto",t.scrollHeight+2>t.clientHeight?t.style.height=t.scrollHeight+2+"px":t.scrollHeight+2<t.clientHeight&&t.style.removeProperty("height"),e.style.removeProperty("display"),e.style.removeProperty("height"),e.scrollTop=i}render(){return c`
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
    `}};X.formAssociated=!0,X.styles=[b`
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
    `],ct([l()],X.prototype,"placeholder",2),ct([l({type:Boolean,reflect:!0})],X.prototype,"disabled",2),ct([l({type:Boolean,reflect:!0})],X.prototype,"readonly",2),ct([l({type:String})],X.prototype,"name",2),ct([l({type:Boolean,reflect:!0})],X.prototype,"error",2),ct([l({type:Number})],X.prototype,"minlength",2),ct([l({attribute:"minlength-message"})],X.prototype,"minlengthMessage",2),ct([l({type:Number})],X.prototype,"maxlength",2),ct([l({attribute:"maxlength-message"})],X.prototype,"maxlengthMessage",2),ct([z("#textarea")],X.prototype,"_textarea",2),ct([l({type:Boolean,attribute:"auto-height",reflect:!0})],X.prototype,"autoHeight",2),ct([l({type:String})],X.prototype,"label",2),ct([l({type:Number})],X.prototype,"rows",2),ct([l({type:Number})],X.prototype,"cols",2),ct([l({type:String})],X.prototype,"wrap",2),X=ct([g("uui-textarea")],X);class mt extends L{}mt.OPENING="opening",mt.OPENED="opened",mt.CLOSING="closing",mt.CLOSED="closed";var Gm=Object.defineProperty,qm=Object.getOwnPropertyDescriptor,Tr=(e,t,i,o)=>{for(var r=o>1?void 0:o?qm(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Gm(t,i,r),r};let ri=class extends _{constructor(){super(),this.color="",this._autoClose=null,this._onOpenTimerComplete=()=>{this._open&&(this.open=!1)},this._timer=null,this._pauseTimer=!1,this.isOpen=!1,this._open=!1,this._animate=!1,this._requestAnimationUpdate=0,this.addEventListener("keyup",e=>{e.key==="Escape"&&(this.open=!1)})}get autoClose(){return this._autoClose}set autoClose(e){var t;this._autoClose=e,e!==null?(this._timer===null?this._timer=new zf(this._onOpenTimerComplete,e):this._timer.setDuration(e),this._pauseTimer===!1&&this.isOpen===!0&&this._animate===!1&&this._timer.start()):((t=this._timer)==null||t.destroy(),this._timer=null)}pauseAutoClose(){this._pauseTimer=!0,this._timer!==null&&this._timer.pause()}resumeAutoClose(){this._pauseTimer=!1,this._timer!==null&&this.isOpen===!0&&this._animate===!1&&this._timer.restart()}get open(){return this._open}set open(e){e===!0?this._makeOpen():this._makeClose()}connectedCallback(){super.connectedCallback(),C(this,"uui-button"),C(this,"uui-icon")}_getAnimationDuration(){return parseInt(getComputedStyle(this).getPropertyValue("--uui-toast-notification-animation-duration"),10)||480}_makeOpen(){this._open!==!0&&(this._open=!0,this.updateComplete.then(()=>{this._open===!0&&(cancelAnimationFrame(this._requestAnimationUpdate),this._requestAnimationUpdate=requestAnimationFrame(()=>{clearTimeout(this._animationTimeout),this.isOpen=!0,this.setAttribute("is-open",""),this.style.height=this._toastEl.getBoundingClientRect().height+"px",this._animate=!0,this.dispatchEvent(new mt(mt.OPENING)),this._animationTimeout=window.setTimeout(()=>{var e;this.isOpen===!0&&(this.style.height="auto",this._animate=!1,this._pauseTimer===!1&&((e=this._timer)==null||e.start()),this.dispatchEvent(new mt(mt.OPENED)))},this._getAnimationDuration())}))}))}_makeClose(){var t;if(this._open===!1)return;const e=new mt(mt.CLOSING,{cancelable:!0});this.dispatchEvent(e),e.defaultPrevented!==!0&&(this._open=!1,(t=this._timer)==null||t.pause(),cancelAnimationFrame(this._requestAnimationUpdate),this.isOpen===!0&&(this._requestAnimationUpdate=requestAnimationFrame(()=>{clearTimeout(this._animationTimeout),this.isOpen=!1,this.removeAttribute("is-open"),this.style.height=this._toastEl.getBoundingClientRect().height+"px",this._animate=!0,requestAnimationFrame(()=>{this.style.height="0"}),this._animationTimeout=window.setTimeout(()=>{this.isOpen===!1&&(this._animate=!1,this.dispatchEvent(new mt(mt.CLOSED)),this.parentNode&&this.parentNode.removeChild(this))},this._getAnimationDuration())})))}render(){return c`
      <div id="toast" class=${this._animate?"animate":""}>
        <div>
          <div id="close">
            <uui-button
              .label=${"close"}
              .color=${this.color}
              .look=${this.color?"primary":"default"}
              @click=${()=>this.open=!1}>
              <uui-icon
                name="remove"
                .fallback=${ha.strings[0]}></uui-icon>
            </uui-button>
          </div>
          <slot></slot>
        </div>
      </div>
    `}};ri.styles=[Fi,b`
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
    `],Tr([l({reflect:!0})],ri.prototype,"color",2),Tr([l({type:Number})],ri.prototype,"autoClose",1),Tr([z("#toast")],ri.prototype,"_toastEl",2),Tr([w()],ri.prototype,"_animate",2),Tr([l({type:Boolean,reflect:!0})],ri.prototype,"open",1),ri=Tr([g("uui-toast-notification")],ri);var Km=Object.defineProperty,Ym=Object.getOwnPropertyDescriptor,kd=(e,t,i,o)=>{for(var r=o>1?void 0:o?Ym(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Km(t,i,r),r};let Pn=class extends _{constructor(){super(...arguments),this._autoClose=null,this._autoClosePause=!1,this.pauseAutoClose=()=>{var e;this._autoClosePause=!0,(e=this._toasts)==null||e.forEach(t=>t.pauseAutoClose())},this.resumeAutoClose=()=>{var e;this.matches(":focus-within:not(:focus)")===!1&&(this._autoClosePause=!1,(e=this._toasts)==null||e.forEach(t=>t.resumeAutoClose()))},this.onToastClosed=e=>{this.removeToast(e.target)},this._toasts=[],this.onSlotChanged=e=>{const t=[...this._toasts];this._toasts=e.target.assignedElements({flatten:!0}).filter(r=>r.nodeName==="UUI-TOAST-NOTIFICATION"),t.filter(r=>this._toasts.indexOf(r)===-1).forEach(r=>{r.removeEventListener(mt.CLOSED,this.onToastClosed),r.removeEventListener("mouseenter",this.pauseAutoClose),r.removeEventListener("mouseleave",this.resumeAutoClose),r.removeEventListener("focus",this.pauseAutoClose),r.removeEventListener("blur",this.resumeAutoClose)}),this._toasts.filter(r=>t.indexOf(r)===-1).forEach(r=>{r.addEventListener(mt.CLOSED,this.onToastClosed),r.addEventListener("mouseenter",this.pauseAutoClose),r.addEventListener("mouseleave",this.resumeAutoClose),r.addEventListener("focus",this.pauseAutoClose),r.addEventListener("blur",this.resumeAutoClose),this._autoClose&&(r.autoClose=this._autoClose),this._autoClosePause===!0&&r.pauseAutoClose(),r.open=!0})}}get autoClose(){return this._autoClose}set autoClose(e){var t;this._autoClose=e,(t=this._toasts)==null||t.forEach(i=>i.autoClose=e)}removeToast(e){if(!e)e=this._toasts[this._toasts.length-1];else if(this._toasts.indexOf(e)===-1){console.warn("Toast-notification",e,"could not be removed as it is not a child of this toast-notification-container",this);return}this.removeChild(e)}closeToast(e){let t=e;t||(t=this._toasts[this._toasts.length-1]),t.open=!1}render(){return c` <slot @slotchange=${this.onSlotChanged}></slot> `}};Pn.styles=[b`
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
    `],kd([l({type:Number,reflect:!0,attribute:"auto-close"})],Pn.prototype,"_autoClose",2),Pn=kd([g("uui-toast-notification-container")],Pn);var Xm=Object.defineProperty,Zm=Object.getOwnPropertyDescriptor,ql=(e,t,i,o)=>{for(var r=o>1?void 0:o?Zm(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&Xm(t,i,r),r};let Bo=class extends _{constructor(){super(...arguments),this.headline="",this._headlineSlotHasContent=!1,this._headlineSlotChanged=e=>{this._headlineSlotHasContent=e.target.assignedNodes({flatten:!0}).length>0}}render(){return c`
      <div id="message" class="uui-text">
        <h5
          style=${this._headlineSlotHasContent||this.headline&&this.headline!==""?"":"display: none"}>
          ${this.headline}
          <slot name="headline" @slotchange=${this._headlineSlotChanged}></slot>
        </h5>
        <slot></slot>
        <slot id="actions" name="actions"></slot>
      </div>
    `}};Bo.styles=[Fi,b`
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
    `],ql([l({type:String})],Bo.prototype,"headline",2),ql([w()],Bo.prototype,"_headlineSlotHasContent",2),Bo=ql([g("uui-toast-notification-layout")],Bo);var Jm=Object.getOwnPropertyDescriptor,Qm=(e,t,i,o)=>{for(var r=o>1?void 0:o?Jm(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Sn=class extends Nt{constructor(){super("switch")}renderCheckbox(){return c`
      <div id="toggle">
        <div id="icon-checked">${bs}</div>
        <div id="icon-unchecked">${ha}</div>
      </div>
    `}};Sn.formAssociated=!0,Sn.styles=[...Nt.styles,ps,b`
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
        animation: ${fs};
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
    `],Sn=Qm([g("uui-toggle")],Sn);var t1=Object.getOwnPropertyDescriptor,e1=(e,t,i,o)=>{for(var r=o>1?void 0:o?t1(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=n(r)||r);return r};let Kl=class extends _{render(){return c`<slot></slot>`}};Kl.styles=[b`
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
    `],Kl=e1([g("uui-visually-hidden")],Kl);class i1{constructor(){this.TOKEN_KEY="umb:userAuthTokenResponse",this.TOKEN_REFRESH_THRESHOLD=300*1e3}getToken(){try{const t=localStorage.getItem(this.TOKEN_KEY);return t?JSON.parse(t):null}catch(t){return console.error("Error parsing token from localStorage:",t),null}}storeToken(t){const i={...t,stored_at:Date.now()};localStorage.setItem(this.TOKEN_KEY,JSON.stringify(i))}isTokenValid(){const t=this.getToken();if(!t)return!1;if(t.expires_in!=null&&t.stored_at!=null){const i=typeof t.expires_in=="string"?parseInt(t.expires_in):t.expires_in;if((typeof t.stored_at=="string"?parseInt(t.stored_at):t.stored_at)+i*1e3<=Date.now())return!1}return!0}shouldRefreshToken(){const t=this.getToken();if(!t)return!1;if(t.expires_in!=null&&t.stored_at!=null){const i=typeof t.expires_in=="string"?parseInt(t.expires_in):t.expires_in;return(typeof t.stored_at=="string"?parseInt(t.stored_at):t.stored_at)+i*1e3-Date.now()<=this.TOKEN_REFRESH_THRESHOLD}return!1}async refreshToken(){const t=this.getToken();if(!(t!=null&&t.refresh_token))return!1;try{const i=await fetch("/umbraco/management/api/v1/security/back-office/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"refresh_token",refresh_token:t.refresh_token})});if(!i.ok)throw new Error(`Token refresh failed: ${i.status}`);const o=await i.json();return this.storeToken(o),!0}catch(i){return console.error("Error refreshing token:",i),!1}}async authenticatedFetch(t,i={}){if(this.shouldRefreshToken()&&!await this.refreshToken())throw new Error("Unable to refresh token. User may need to log in again.");if(!this.isTokenValid())throw new Error("User is not authenticated. Please log in.");const o=this.getToken();if(!o)throw new Error("No authentication token available.");const r={...i.headers,Authorization:`Bearer ${o.access_token}`,"Content-Type":"application/json"},s=await fetch(t,{...i,headers:r});if(s.status===401){if(await this.refreshToken()){const a=this.getToken();if(a){const u={...i.headers,Authorization:`Bearer ${a.access_token}`,"Content-Type":"application/json"};return fetch(t,{...i,headers:u})}}throw new Error("Authentication failed. Please log in again.")}return s}clearToken(){localStorage.removeItem(this.TOKEN_KEY)}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const An=globalThis,Yl=An.ShadowRoot&&(An.ShadyCSS===void 0||An.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Cd=Symbol(),Ed=new WeakMap;let r1=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Cd)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Yl&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Ed.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ed.set(t,e))}return e}toString(){return this.cssText}};const o1=e=>new r1(typeof e=="string"?e:e+"",void 0,Cd),s1=(e,t)=>{if(Yl)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const o=document.createElement("style"),r=An.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=i.cssText,e.appendChild(o)}},Pd=Yl?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const o of t.cssRules)i+=o.cssText;return o1(i)})(e):e;/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{is:n1,defineProperty:a1,getOwnPropertyDescriptor:l1,getOwnPropertyNames:u1,getOwnPropertySymbols:c1,getPrototypeOf:h1}=Object,oi=globalThis,Sd=oi.trustedTypes,d1=Sd?Sd.emptyScript:"",Xl=oi.reactiveElementPolyfillSupport,Vo=(e,t)=>e,On={toAttribute(e,t){switch(t){case Boolean:e=e?d1:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Zl=(e,t)=>!n1(e,t),Ad={attribute:!0,type:String,converter:On,reflect:!1,useDefault:!1,hasChanged:Zl};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),oi.litPropertyMetadata??(oi.litPropertyMetadata=new WeakMap);let Dr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=Ad){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(t,i),!i.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(t,o,i);r!==void 0&&a1(this.prototype,t,r)}}static getPropertyDescriptor(t,i,o){const{get:r,set:s}=l1(this.prototype,t)??{get(){return this[i]},set(n){this[i]=n}};return{get:r,set(n){const a=r==null?void 0:r.call(this);s==null||s.call(this,n),this.requestUpdate(t,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ad}static _$Ei(){if(this.hasOwnProperty(Vo("elementProperties")))return;const t=h1(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Vo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Vo("properties"))){const i=this.properties,o=[...u1(i),...c1(i)];for(const r of o)this.createProperty(r,i[r])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[o,r]of i)this.elementProperties.set(o,r)}this._$Eh=new Map;for(const[i,o]of this.elementProperties){const r=this._$Eu(i,o);r!==void 0&&this._$Eh.set(r,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const r of o)i.unshift(Pd(r))}else t!==void 0&&i.push(Pd(t));return i}static _$Eu(t,i){const o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$EO)==null||i.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const o of i.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s1(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var o;return(o=i.hostConnected)==null?void 0:o.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(i=>{var o;return(o=i.hostDisconnected)==null?void 0:o.call(i)})}attributeChangedCallback(t,i,o){this._$AK(t,o)}_$ET(t,i){var s;const o=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,o);if(r!==void 0&&o.reflect===!0){const n=(((s=o.converter)==null?void 0:s.toAttribute)!==void 0?o.converter:On).toAttribute(i,o.type);this._$Em=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,i){var s,n;const o=this.constructor,r=o._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const a=o.getPropertyOptions(r),u=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:On;this._$Em=r,this[r]=u.fromAttribute(i,a.type)??((n=this._$Ej)==null?void 0:n.get(r))??null,this._$Em=null}}requestUpdate(t,i,o){var r;if(t!==void 0){const s=this.constructor,n=this[t];if(o??(o=s.getPropertyOptions(t)),!((o.hasChanged??Zl)(n,i)||o.useDefault&&o.reflect&&n===((r=this._$Ej)==null?void 0:r.get(t))&&!this.hasAttribute(s._$Eu(t,o))))return;this.C(t,i,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,i,{useDefault:o,reflect:r,wrapped:s},n){o&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??i??this[t]),s!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(i=void 0),this._$AL.set(t,i)),r===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,n]of r){const{wrapped:a}=n,u=this[s];a!==!0||this._$AL.has(s)||u===void 0||this.C(s,void 0,n,u)}}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(o=this._$EO)==null||o.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(i)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(i)}willUpdate(t){}_$AE(t){var i;(i=this._$EO)==null||i.forEach(o=>{var r;return(r=o.hostUpdated)==null?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(i=>this._$ET(i,this[i]))),this._$EM()}updated(t){}firstUpdated(t){}};Dr.elementStyles=[],Dr.shadowRootOptions={mode:"open"},Dr[Vo("elementProperties")]=new Map,Dr[Vo("finalized")]=new Map,Xl==null||Xl({ReactiveElement:Dr}),(oi.reactiveElementVersions??(oi.reactiveElementVersions=[])).push("2.1.0");/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const jo=globalThis,In=jo.trustedTypes,Od=In?In.createPolicy("lit-html",{createHTML:e=>e}):void 0,Id="$lit$",si=`lit$${Math.random().toFixed(9).slice(2)}$`,Ud="?"+si,p1=`<${Ud}>`,Ai=document,Ro=()=>Ai.createComment(""),Fo=e=>e===null||typeof e!="object"&&typeof e!="function",Jl=Array.isArray,f1=e=>Jl(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Ql=`[ 	
\f\r]`,Wo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zd=/-->/g,Md=/>/g,Oi=RegExp(`>|${Ql}(?:([^\\s"'>=/]+)(${Ql}*=${Ql}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Td=/'/g,Dd=/"/g,Ld=/^(?:script|style|textarea|title)$/i,Lr=Symbol.for("lit-noChange"),rt=Symbol.for("lit-nothing"),Nd=new WeakMap,Ii=Ai.createTreeWalker(Ai,129);function Hd(e,t){if(!Jl(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Od!==void 0?Od.createHTML(t):t}const v1=(e,t)=>{const i=e.length-1,o=[];let r,s=t===2?"<svg>":t===3?"<math>":"",n=Wo;for(let a=0;a<i;a++){const u=e[a];let h,f,d=-1,x=0;for(;x<u.length&&(n.lastIndex=x,f=n.exec(u),f!==null);)x=n.lastIndex,n===Wo?f[1]==="!--"?n=zd:f[1]!==void 0?n=Md:f[2]!==void 0?(Ld.test(f[2])&&(r=RegExp("</"+f[2],"g")),n=Oi):f[3]!==void 0&&(n=Oi):n===Oi?f[0]===">"?(n=r??Wo,d=-1):f[1]===void 0?d=-2:(d=n.lastIndex-f[2].length,h=f[1],n=f[3]===void 0?Oi:f[3]==='"'?Dd:Td):n===Dd||n===Td?n=Oi:n===zd||n===Md?n=Wo:(n=Oi,r=void 0);const v=n===Oi&&e[a+1].startsWith("/>")?" ":"";s+=n===Wo?u+p1:d>=0?(o.push(h),u.slice(0,d)+Id+u.slice(d)+si+v):u+si+(d===-2?a:v)}return[Hd(e,s+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};let tu=class lp{constructor({strings:t,_$litType$:i},o){let r;this.parts=[];let s=0,n=0;const a=t.length-1,u=this.parts,[h,f]=v1(t,i);if(this.el=lp.createElement(h,o),Ii.currentNode=this.el.content,i===2||i===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=Ii.nextNode())!==null&&u.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(Id)){const x=f[n++],v=r.getAttribute(d).split(si),$=/([.?@])?(.*)/.exec(x);u.push({type:1,index:s,name:$[2],strings:v,ctor:$[1]==="."?g1:$[1]==="?"?m1:$[1]==="@"?_1:Un}),r.removeAttribute(d)}else d.startsWith(si)&&(u.push({type:6,index:s}),r.removeAttribute(d));if(Ld.test(r.tagName)){const d=r.textContent.split(si),x=d.length-1;if(x>0){r.textContent=In?In.emptyScript:"";for(let v=0;v<x;v++)r.append(d[v],Ro()),Ii.nextNode(),u.push({type:2,index:++s});r.append(d[x],Ro())}}}else if(r.nodeType===8)if(r.data===Ud)u.push({type:2,index:s});else{let d=-1;for(;(d=r.data.indexOf(si,d+1))!==-1;)u.push({type:7,index:s}),d+=si.length-1}s++}}static createElement(t,i){const o=Ai.createElement("template");return o.innerHTML=t,o}};function Nr(e,t,i=e,o){var n,a;if(t===Lr)return t;let r=o!==void 0?(n=i._$Co)==null?void 0:n[o]:i._$Cl;const s=Fo(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),s===void 0?r=void 0:(r=new s(e),r._$AT(e,i,o)),o!==void 0?(i._$Co??(i._$Co=[]))[o]=r:i._$Cl=r),r!==void 0&&(t=Nr(e,r._$AS(e,t.values),r,o)),t}let b1=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=((e==null?void 0:e.creationScope)??Ai).importNode(t,!0);Ii.currentNode=o;let r=Ii.nextNode(),s=0,n=0,a=i[0];for(;a!==void 0;){if(s===a.index){let u;a.type===2?u=new eu(r,r.nextSibling,this,e):a.type===1?u=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(u=new y1(r,this,e)),this._$AV.push(u),a=i[++n]}s!==(a==null?void 0:a.index)&&(r=Ii.nextNode(),s++)}return Ii.currentNode=Ai,o}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},eu=class up{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,o,r){this.type=2,this._$AH=rt,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=o,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=Nr(this,t,i),Fo(t)?t===rt||t==null||t===""?(this._$AH!==rt&&this._$AR(),this._$AH=rt):t!==this._$AH&&t!==Lr&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):f1(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==rt&&Fo(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ai.createTextNode(t)),this._$AH=t}$(t){var s;const{values:i,_$litType$:o}=t,r=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=tu.createElement(Hd(o.h,o.h[0]),this.options)),o);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(i);else{const n=new b1(r,this),a=n.u(this.options);n.p(i),this.T(a),this._$AH=n}}_$AC(t){let i=Nd.get(t.strings);return i===void 0&&Nd.set(t.strings,i=new tu(t)),i}k(t){Jl(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,r=0;for(const s of t)r===i.length?i.push(o=new up(this.O(Ro()),this.O(Ro()),this,this.options)):o=i[r],o._$AI(s),r++;r<i.length&&(this._$AR(o&&o._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,i){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,i);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}},Un=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,o,r,s){this.type=1,this._$AH=rt,this._$AN=void 0,this.element=t,this.name=i,this._$AM=r,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=rt}_$AI(t,i=this,o,r){const s=this.strings;let n=!1;if(s===void 0)t=Nr(this,t,i,0),n=!Fo(t)||t!==this._$AH&&t!==Lr,n&&(this._$AH=t);else{const a=t;let u,h;for(t=s[0],u=0;u<s.length-1;u++)h=Nr(this,a[o+u],i,u),h===Lr&&(h=this._$AH[u]),n||(n=!Fo(h)||h!==this._$AH[u]),h===rt?t=rt:t!==rt&&(t+=(h??"")+s[u+1]),this._$AH[u]=h}n&&!r&&this.j(t)}j(t){t===rt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};class g1 extends Un{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===rt?void 0:t}}class m1 extends Un{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==rt)}}class _1 extends Un{constructor(t,i,o,r,s){super(t,i,o,r,s),this.type=5}_$AI(t,i=this){if((t=Nr(this,t,i,0)??rt)===Lr)return;const o=this._$AH,r=t===rt&&o!==rt||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==rt&&(o===rt||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}}class y1{constructor(t,i,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){Nr(this,t)}}const iu=jo.litHtmlPolyfillSupport;iu==null||iu(tu,eu),(jo.litHtmlVersions??(jo.litHtmlVersions=[])).push("3.3.0");const w1=(e,t,i)=>{const o=(i==null?void 0:i.renderBefore)??t;let r=o._$litPart$;if(r===void 0){const s=(i==null?void 0:i.renderBefore)??null;o._$litPart$=r=new eu(t.insertBefore(Ro(),s),s,void 0,i??{})}return r._$AI(e),r};/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Ui=globalThis;let Go=class extends Dr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=w1(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Lr}};Go._$litElement$=!0,Go.finalized=!0,(op=Ui.litElementHydrateSupport)==null||op.call(Ui,{LitElement:Go});const ru=Ui.litElementPolyfillSupport;ru==null||ru({LitElement:Go}),(Ui.litElementVersions??(Ui.litElementVersions=[])).push("4.2.0");/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const x1={attribute:!0,type:String,converter:On,reflect:!1,hasChanged:Zl},$1=(e=x1,t,i)=>{const{kind:o,metadata:r}=i;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(i.name,e),o==="accessor"){const{name:n}=i;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,u,e)},init(a){return a!==void 0&&this.C(n,void 0,e,a),a}}}if(o==="setter"){const{name:n}=i;return function(a){const u=this[n];t.call(this,a),this.requestUpdate(n,u,e)}}throw Error("Unsupported decorator location: "+o)};function Bd(e){return(t,i)=>typeof i=="object"?$1(e,t,i):((o,r,s)=>{const n=r.hasOwnProperty(s);return r.constructor.createProperty(s,o),n?Object.getOwnPropertyDescriptor(r,s):void 0})(e,t,i)}const k1="en";class C1{constructor(){S(this,Vn);S(this,Yo);S(this,li);S(this,se);S(this,Xo);S(this,Zo);this.connectedControllers=new Set,m(this,li,new Set),m(this,se,void 0),this.localizations=new Map,this.documentDirection=document.documentElement.dir||"ltr",this.documentLanguage=document.documentElement.lang||navigator.language,m(this,Xo,this.registerLocalization.bind(this)),this.updateAll=()=>{const t=document.documentElement.dir||"ltr",i=document.documentElement.lang||navigator.language;this.documentDirection===t&&this.documentLanguage===i||(this.documentDirection=t,this.documentLanguage=i,this.connectedControllers.forEach(o=>{o.documentUpdate()}),p(this,se)&&(cancelAnimationFrame(p(this,se)),m(this,se,void 0)),p(this,li).clear())},m(this,Zo,()=>{m(this,se,void 0),this.connectedControllers.forEach(t=>{t.keysChanged(p(this,li))}),p(this,li).clear()}),m(this,Yo,new MutationObserver(this.updateAll)),p(this,Yo).observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}get fallback(){return this.localizations.get(k1)}appendConsumer(t){this.connectedControllers.has(t)||this.connectedControllers.add(t)}removeConsumer(t){this.connectedControllers.delete(t)}registerLocalization(t){const i=t.$code.toLowerCase();this.localizations.has(i)?this.localizations.set(i,{...this.localizations.get(i),...t}):this.localizations.set(i,t);const o=Object.keys(t);for(const r of o)p(this,li).add(r);Lt(this,Vn,cp).call(this)}registerManyLocalizations(t){t.map(p(this,Xo))}}Yo=new WeakMap,li=new WeakMap,se=new WeakMap,Xo=new WeakMap,Zo=new WeakMap,Vn=new WeakSet,cp=function(){p(this,se)||m(this,se,requestAnimationFrame(p(this,Zo)))};const ni=new C1,E1=Symbol();class P1{constructor(t){S(this,Hr);S(this,Ee);S(this,ne);this.controllerAlias=E1,m(this,ne,new Array),m(this,Hr,t),m(this,Ee,t.getHostElement()),p(this,Hr).addUmbController(this)}hostConnected(){ni.appendConsumer(this)}hostDisconnected(){ni.removeConsumer(this)}destroy(){var t;(t=p(this,Hr))==null||t.removeUmbController(this),m(this,Ee,void 0),p(this,ne).length=0}documentUpdate(){var t,i;(i=(t=p(this,Ee))==null?void 0:t.requestUpdate)==null||i.call(t)}keysChanged(t){var o,r;p(this,ne).find(s=>t.has(s))&&((r=(o=p(this,Ee))==null?void 0:o.requestUpdate)==null||r.call(o))}dir(){var t;return`${((t=p(this,Ee))==null?void 0:t.dir)||ni.documentDirection}`.toLowerCase()}lang(){var t;return`${((t=p(this,Ee))==null?void 0:t.lang)||ni.documentLanguage}`.toLowerCase()}getLocalizationData(t){var a;const i=new Intl.Locale(t),o=i==null?void 0:i.language.toLowerCase(),r=((a=i==null?void 0:i.region)==null?void 0:a.toLowerCase())??"",s=ni.localizations.get(`${o}-${r}`),n=ni.localizations.get(o);return{locale:i,language:o,region:r,primary:s,secondary:n}}term(t,...i){var n;p(this,ne).includes(t)||p(this,ne).push(t);const{primary:o,secondary:r}=this.getLocalizationData(this.lang());let s;if(o!=null&&o[t])s=o[t];else if(r!=null&&r[t])s=r[t];else if((n=ni.fallback)!=null&&n[t])s=ni.fallback[t];else return String(t);return typeof s=="function"?s(...i):(typeof s=="string"&&i.length&&(s=s.replace(/(%(\d+)%|\{(\d+)\})/g,(a,u,h,f)=>{const d=h||f;return typeof i[d]<"u"?String(i[d]):a})),s)}date(t,i){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),i).format(t)}number(t,i){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),i).format(t)}relativeTime(t,i,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,i)}duration(t,i,o){const r=new Date(t),s=new Date(i??Date.now()),n=Math.abs(r.getTime()-s.getTime()),a=Math.abs(Math.floor(n/1e3));if(!("DurationFormat"in Intl))return`${a} seconds`;const u=Math.floor(n/(1e3*60*60*24)),h=Math.floor(n%(1e3*60*60*24)/(1e3*60*60)),f=Math.floor(n%(1e3*60*60)/(1e3*60)),d=Math.floor(n%(1e3*60)/1e3),x={style:"long",...o},v=new Intl.DurationFormat(this.lang(),x);return u===0&&h===0&&f===0?v.format({seconds:a}):v.format({days:u,hours:h,minutes:f,seconds:d})}list(t,i){return new Intl.ListFormat(this.lang(),i).format(t)}string(t,...i){if(typeof t!="string")return"";const o=/#\w+/g;return t.replace(o,s=>{const n=s.slice(1);p(this,ne).includes(n)||p(this,ne).push(n);const a=this.term(n,...i);return a===n?s:a})}}Hr=new WeakMap,Ee=new WeakMap,ne=new WeakMap;const S1=e=>{var i,o;class t extends e{constructor(){super(...arguments);S(this,i,[]);S(this,o,!1)}getHostElement(){}hasUmbController(n){return p(this,i).indexOf(n)!==-1}getUmbControllers(n){return p(this,i).filter(n)}addUmbController(n){p(this,i).indexOf(n)===-1&&(this.removeUmbControllerByAlias(n.controllerAlias),p(this,i).push(n),p(this,o)&&Promise.resolve().then(()=>{p(this,o)&&p(this,i).includes(n)&&n.hostConnected()}))}removeUmbController(n){const a=p(this,i).indexOf(n);a!==-1&&(p(this,i).splice(a,1),p(this,o)&&n.hostDisconnected(),n.destroy())}removeUmbControllerByAlias(n){n&&p(this,i).forEach(a=>{a.controllerAlias===n&&this.removeUmbController(a)})}hostConnected(){m(this,o,!0),p(this,i).forEach(n=>n.hostConnected())}hostDisconnected(){m(this,o,!1),p(this,i).forEach(n=>n.hostDisconnected())}destroy(){var u;let n,a=null;for(;n=p(this,i)[0];){if(n.destroy(),n===a)throw new Error(`Controller with controller alias: '${(u=n.controllerAlias)==null?void 0:u.toString()}' and class name: '${n.constructor.name}', does not remove it self when destroyed. This can cause memory leaks. Please fix this issue.\r
This usually occurs when you have a destroy() method that doesn't call super.destroy().`);a=n}p(this,i).length=0,m(this,o,!1)}}return i=new WeakMap,o=new WeakMap,t},A1=e=>{class t extends S1(e){getHostElement(){return this}connectedCallback(){var o;(o=super.connectedCallback)==null||o.call(this),this.hostConnected()}disconnectedCallback(){var o;(o=super.disconnectedCallback)==null||o.call(this),this.hostDisconnected()}}return t},zn="umb:context-provide";class ou extends Event{constructor(t){super(zn,{bubbles:!0,composed:!0}),this.contextAlias=t}clone(){return new ou(this.contextAlias)}}const O1=e=>e.type===zn,Mn="umb:context-unprovided";class I1 extends Event{constructor(t,i){super(Mn,{bubbles:!0,composed:!0}),this.contextAlias=t,this.instance=i}}const U1=e=>e.type===Mn,Tn="umb:context-request",su="umb:debug-contexts";class nu extends Event{constructor(t,i,o,r=!0){super(Tn,{bubbles:!0,composed:!0,cancelable:!0}),this.contextAlias=t,this.apiAlias=i,this.callback=o,this.stopAtContextMatch=r}clone(){return new nu(this.contextAlias,this.apiAlias,this.callback,this.stopAtContextMatch)}}class z1{constructor(t,i,o){S(this,ot);S(this,ae);S(this,Jo);S(this,Br);S(this,Pe);S(this,Se);S(this,le);S(this,Dt);S(this,kt);S(this,_t);S(this,Ae);S(this,zi);S(this,Mi);S(this,Wt);S(this,Vr);S(this,jr);var s;m(this,Br,!0),this._onResponse=n=>{if(p(this,_t)===n)return Lt(this,ot,yu).call(this),!0;if(n===void 0)throw new Error("Not allowed to set context api instance to undefined.");if(p(this,Mi)){if(p(this,Mi).call(this,n))return this.setInstance(n),!0}else return this.setInstance(n),!0;return!1},m(this,Wt,window),m(this,Vr,n=>{O1(n)&&p(this,Ae)===n.contextAlias&&this.request()}),m(this,jr,n=>{U1(n)&&p(this,Ae)===n.contextAlias&&n.instance===p(this,_t)&&Lt(this,ot,$u).call(this)}),typeof t=="function"?this._retrieveHost=t:this._retrieveHost=()=>t;const r=i.toString().split("#");m(this,Ae,r[0]),m(this,zi,r[1]??"default"),m(this,Pe,o),m(this,Mi,(s=i.getDiscriminator)==null?void 0:s.call(i))}get instance(){return p(this,_t)}getHostElement(){return this._retrieveHost()}skipHost(){return m(this,Jo,!0),this}passContextAliasMatches(){return m(this,Br,!1),this}async setInstance(t){var i;m(this,_t,t),Lt(this,ot,dp).call(this,t.getHostElement()),await((i=p(this,Pe))==null?void 0:i.call(this,t)),Lt(this,ot,yu).call(this)}asPromise(t){return p(this,Se)??m(this,Se,new Promise((i,o)=>{p(this,_t)?(m(this,le,void 0),m(this,Dt,void 0),m(this,kt,void 0),i(p(this,_t))):(m(this,le,t),m(this,Dt,i),m(this,kt,o))}))}request(){var i,o,r;p(this,ae)!==void 0&&cancelAnimationFrame(p(this,ae));const t=new nu(p(this,Ae),p(this,zi),this._onResponse,p(this,Br));(o=p(this,Jo)?(i=this._retrieveHost())==null?void 0:i.parentNode:this._retrieveHost())==null||o.dispatchEvent(t),p(this,Dt)&&((r=p(this,le))==null?void 0:r.preventTimeout)!==!0&&m(this,ae,requestAnimationFrame(()=>{Lt(this,ot,hp).call(this),m(this,ae,void 0)}))}hostConnected(){Lt(this,ot,wu).call(this),this.request()}hostDisconnected(){var t;if(p(this,ae)!==void 0&&(cancelAnimationFrame(p(this,ae)),m(this,ae,void 0)),Lt(this,ot,$u).call(this),p(this,kt)){const i=this._retrieveHost();p(this,kt).call(this,`Context request was cancelled, host was disconnected. (Context Alias: ${p(this,Ae)} with API Alias: ${p(this,zi)}). Controller is hosted on ${((t=i==null?void 0:i.parentNode)==null?void 0:t.nodeName)??"Not attached node"} > ${i==null?void 0:i.nodeName}`)}m(this,Se,void 0),m(this,le,void 0),m(this,Dt,void 0),m(this,kt,void 0),Lt(this,ot,xu).call(this),m(this,Wt,window)}destroy(){this.hostDisconnected(),this._retrieveHost=void 0,m(this,Pe,void 0),m(this,Se,void 0),m(this,le,void 0),m(this,Dt,void 0),m(this,kt,void 0),m(this,_t,void 0),m(this,Mi,void 0)}}ae=new WeakMap,Jo=new WeakMap,Br=new WeakMap,Pe=new WeakMap,Se=new WeakMap,le=new WeakMap,Dt=new WeakMap,kt=new WeakMap,_t=new WeakMap,Ae=new WeakMap,zi=new WeakMap,Mi=new WeakMap,ot=new WeakSet,yu=function(){p(this,Dt)&&p(this,_t)!==void 0&&(p(this,Dt).call(this,p(this,_t)),m(this,Se,void 0),m(this,le,void 0),m(this,Dt,void 0),m(this,kt,void 0)),p(this,Pe)||this.destroy()},hp=function(){var t,i;if(p(this,kt)){const o=this._retrieveHost();(i=p(this,kt))==null||i.call(this,`Context could not be found. (Context Alias: ${p(this,Ae)} with API Alias: ${p(this,zi)}). Controller is hosted on ${((t=o==null?void 0:o.parentNode)==null?void 0:t.nodeName)??"Not attached node"} > ${o==null?void 0:o.nodeName}`),m(this,Se,void 0),m(this,le,void 0),m(this,Dt,void 0),m(this,kt,void 0)}p(this,Pe)||this.destroy()},Wt=new WeakMap,dp=function(t){Lt(this,ot,xu).call(this),m(this,Wt,t??window),Lt(this,ot,wu).call(this)},wu=function(){p(this,Wt).addEventListener(zn,p(this,Vr)),p(this,Wt).addEventListener(Mn,p(this,jr))},xu=function(){p(this,Wt)&&(p(this,Wt).removeEventListener(zn,p(this,Vr)),p(this,Wt).removeEventListener(Mn,p(this,jr)))},Vr=new WeakMap,jr=new WeakMap,$u=function(){var t;p(this,_t)!==void 0&&(m(this,_t,void 0),(t=p(this,Pe))==null||t.call(this,void 0))};class Vd extends z1{constructor(i,o,r){super(()=>i.getHostElement(),o,r);S(this,jn,Symbol());S(this,Rr);m(this,Rr,i),i.addUmbController(this)}get controllerAlias(){return p(this,jn)}destroy(){var i;(i=p(this,Rr))==null||i.removeUmbController(this),m(this,Rr,void 0),super.destroy()}}jn=new WeakMap,Rr=new WeakMap;class M1{constructor(t,i,o){S(this,Ct);S(this,Oe);S(this,Qo);S(this,Ie);S(this,Fr,t=>{t.contextAlias===p(this,Oe)&&(t.stopAtContextMatch&&t.stopPropagation(),p(this,Qo)===t.apiAlias&&t.callback(p(this,Ie))&&t.stopImmediatePropagation())});S(this,Wr,t=>{t.instances||(t.instances=new Map),t.instances.has(p(this,Oe))||t.instances.set(p(this,Oe),p(this,Ie))});m(this,Ct,t);const r=i.toString().split("#");m(this,Oe,r[0]),m(this,Qo,r[1]??"default"),m(this,Ie,o)}providerInstance(){return p(this,Ie)}hostConnected(){p(this,Ct).addEventListener(Tn,p(this,Fr)),p(this,Ct).addEventListener(su,p(this,Wr)),p(this,Ct).dispatchEvent(new ou(p(this,Oe)))}hostDisconnected(){p(this,Ct).removeEventListener(Tn,p(this,Fr)),p(this,Ct).removeEventListener(su,p(this,Wr)),p(this,Ct).dispatchEvent(new I1(p(this,Oe),p(this,Ie)))}destroy(){var t,i;(t=p(this,Ct))==null||t.removeEventListener(Tn,p(this,Fr)),(i=p(this,Ct))==null||i.removeEventListener(su,p(this,Wr)),m(this,Ie,void 0),m(this,Ct,void 0)}}Ct=new WeakMap,Oe=new WeakMap,Qo=new WeakMap,Ie=new WeakMap,Fr=new WeakMap,Wr=new WeakMap;class T1 extends M1{constructor(i,o,r){var n,a,u,h;super(i.getHostElement(),o,r);S(this,Ti);S(this,ts);m(this,Ti,i),m(this,ts,o.toString()+"_"+((n=r.constructor)==null?void 0:n.name));const s=i.getUmbControllers(f=>f.controllerAlias===this.controllerAlias);if(s.length>0&&((u=(a=s[0]).providerInstance)==null?void 0:u.call(a))===r)throw new Error(`Context API: The context of '${this.controllerAlias}' and instance '${((h=r.constructor)==null?void 0:h.name)??"unnamed"}' is already provided by another Context Provider Controller.`);i.addUmbController(this)}get controllerAlias(){return p(this,ts)}destroy(){if(p(this,Ti)){const i=p(this,Ti);m(this,Ti,void 0),i.removeUmbController(this)}super.destroy()}}Ti=new WeakMap,ts=new WeakMap;class D1{constructor(t,i){S(this,Di);S(this,Ue);S(this,ue);m(this,Di,t),i&&(m(this,Ue,i),m(this,ue,t.subscribe(i)))}asPromise(){return new Promise(t=>{let i=!0,o=!1;const r=p(this,Di).subscribe(s=>{s!==void 0&&(i?o=!0:(r.unsubscribe(),p(this,Ue)||this.destroy()),t(s))});i=!1,o&&(r.unsubscribe(),p(this,Ue)||this.destroy())})}hostConnected(){var t;(t=p(this,ue))!=null&&t.closed&&p(this,Ue)&&m(this,ue,p(this,Di).subscribe(p(this,Ue)))}hostDisconnected(){var t;(t=p(this,ue))==null||t.unsubscribe()}destroy(){p(this,ue)&&(p(this,ue).unsubscribe(),m(this,Ue,void 0),m(this,ue,void 0)),m(this,Di,void 0)}}Di=new WeakMap,Ue=new WeakMap,ue=new WeakMap;class L1 extends D1{constructor(i,o,r,s){super(o,r);S(this,Gr);S(this,es);m(this,Gr,i),m(this,es,s),i.addUmbController(this)}get controllerAlias(){return p(this,es)}destroy(){var i;(i=p(this,Gr))==null||i.removeUmbController(this),m(this,Gr,void 0),super.destroy()}}Gr=new WeakMap,es=new WeakMap;var au=function(e,t){return au=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,o){i.__proto__=o}||function(i,o){for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(i[r]=o[r])},au(e,t)};function re(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");au(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}function lu(e){var t=typeof Symbol=="function"&&Symbol.iterator,i=t&&e[t],o=0;if(i)return i.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Dn(e,t){var i=typeof Symbol=="function"&&e[Symbol.iterator];if(!i)return e;var o=i.call(e),r,s=[],n;try{for(;(t===void 0||t-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(a){n={error:a}}finally{try{r&&!r.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}return s}function Ln(e,t,i){if(arguments.length===2)for(var o=0,r=t.length,s;o<r;o++)(s||!(o in t))&&(s||(s=Array.prototype.slice.call(t,0,o)),s[o]=t[o]);return e.concat(s||Array.prototype.slice.call(t))}typeof SuppressedError=="function"&&SuppressedError;function Ce(e){return typeof e=="function"}function uu(e){var t=function(o){Error.call(o),o.stack=new Error().stack},i=e(t);return i.prototype=Object.create(Error.prototype),i.prototype.constructor=i,i}var cu=uu(function(e){return function(t){e(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(i,o){return o+1+") "+i.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function Nn(e,t){if(e){var i=e.indexOf(t);0<=i&&e.splice(i,1)}}var qo=function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,i,o,r,s;if(!this.closed){this.closed=!0;var n=this._parentage;if(n)if(this._parentage=null,Array.isArray(n))try{for(var a=lu(n),u=a.next();!u.done;u=a.next()){var h=u.value;h.remove(this)}}catch(O){t={error:O}}finally{try{u&&!u.done&&(i=a.return)&&i.call(a)}finally{if(t)throw t.error}}else n.remove(this);var f=this.initialTeardown;if(Ce(f))try{f()}catch(O){s=O instanceof cu?O.errors:[O]}var d=this._finalizers;if(d){this._finalizers=null;try{for(var x=lu(d),v=x.next();!v.done;v=x.next()){var $=v.value;try{Fd($)}catch(O){s=s??[],O instanceof cu?s=Ln(Ln([],Dn(s)),Dn(O.errors)):s.push(O)}}}catch(O){o={error:O}}finally{try{v&&!v.done&&(r=x.return)&&r.call(x)}finally{if(o)throw o.error}}}if(s)throw new cu(s)}},e.prototype.add=function(t){var i;if(t&&t!==this)if(this.closed)Fd(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(i=this._finalizers)!==null&&i!==void 0?i:[]).push(t)}},e.prototype._hasParent=function(t){var i=this._parentage;return i===t||Array.isArray(i)&&i.includes(t)},e.prototype._addParent=function(t){var i=this._parentage;this._parentage=Array.isArray(i)?(i.push(t),i):i?[i,t]:t},e.prototype._removeParent=function(t){var i=this._parentage;i===t?this._parentage=null:Array.isArray(i)&&Nn(i,t)},e.prototype.remove=function(t){var i=this._finalizers;i&&Nn(i,t),t instanceof e&&t._removeParent(this)},e.EMPTY=function(){var t=new e;return t.closed=!0,t}(),e}(),jd=qo.EMPTY;function Rd(e){return e instanceof qo||e&&"closed"in e&&Ce(e.remove)&&Ce(e.add)&&Ce(e.unsubscribe)}function Fd(e){Ce(e)?e():e.unsubscribe()}var N1={Promise:void 0},H1={setTimeout:function(e,t){for(var i=[],o=2;o<arguments.length;o++)i[o-2]=arguments[o];return setTimeout.apply(void 0,Ln([e,t],Dn(i)))},clearTimeout:function(e){return clearTimeout(e)},delegate:void 0};function B1(e){H1.setTimeout(function(){throw e})}function Wd(){}function Hn(e){e()}var hu=function(e){re(t,e);function t(i){var o=e.call(this)||this;return o.isStopped=!1,i?(o.destination=i,Rd(i)&&i.add(o)):o.destination=R1,o}return t.create=function(i,o,r){return new du(i,o,r)},t.prototype.next=function(i){this.isStopped||this._next(i)},t.prototype.error=function(i){this.isStopped||(this.isStopped=!0,this._error(i))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(i){this.destination.next(i)},t.prototype._error=function(i){try{this.destination.error(i)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(qo),V1=function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var i=this.partialObserver;if(i.next)try{i.next(t)}catch(o){Bn(o)}},e.prototype.error=function(t){var i=this.partialObserver;if(i.error)try{i.error(t)}catch(o){Bn(o)}else Bn(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(i){Bn(i)}},e}(),du=function(e){re(t,e);function t(i,o,r){var s=e.call(this)||this,n;return Ce(i)||!i?n={next:i??void 0,error:o??void 0,complete:r??void 0}:n=i,s.destination=new V1(n),s}return t}(hu);function Bn(e){B1(e)}function j1(e){throw e}var R1={closed:!0,next:Wd,error:j1,complete:Wd},F1=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function W1(e){return e}function G1(e){return e.length===0?W1:e.length===1?e[0]:function(t){return e.reduce(function(i,o){return o(i)},t)}}var Gd=function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var i=new e;return i.source=this,i.operator=t,i},e.prototype.subscribe=function(t,i,o){var r=this,s=K1(t)?t:new du(t,i,o);return Hn(function(){var n=r,a=n.operator,u=n.source;s.add(a?a.call(s,u):u?r._subscribe(s):r._trySubscribe(s))}),s},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(i){t.error(i)}},e.prototype.forEach=function(t,i){var o=this;return i=qd(i),new i(function(r,s){var n=new du({next:function(a){try{t(a)}catch(u){s(u),n.unsubscribe()}},error:s,complete:r});o.subscribe(n)})},e.prototype._subscribe=function(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)},e.prototype[F1]=function(){return this},e.prototype.pipe=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return G1(t)(this)},e.prototype.toPromise=function(t){var i=this;return t=qd(t),new t(function(o,r){var s;i.subscribe(function(n){return s=n},function(n){return r(n)},function(){return o(s)})})},e.create=function(t){return new e(t)},e}();function qd(e){var t;return(t=e??N1.Promise)!==null&&t!==void 0?t:Promise}function q1(e){return e&&Ce(e.next)&&Ce(e.error)&&Ce(e.complete)}function K1(e){return e&&e instanceof hu||q1(e)&&Rd(e)}(function(e){re(t,e);function t(i,o,r,s,n,a){var u=e.call(this,i)||this;return u.onFinalize=n,u.shouldUnsubscribe=a,u._next=o?function(h){try{o(h)}catch(f){i.error(f)}}:e.prototype._next,u._error=s?function(h){try{s(h)}catch(f){i.error(f)}finally{this.unsubscribe()}}:e.prototype._error,u._complete=r?function(){try{r()}catch(h){i.error(h)}finally{this.unsubscribe()}}:e.prototype._complete,u}return t.prototype.unsubscribe=function(){var i;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var o=this.closed;e.prototype.unsubscribe.call(this),!o&&((i=this.onFinalize)===null||i===void 0||i.call(this))}},t})(hu);var Y1=uu(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),pu=function(e){re(t,e);function t(){var i=e.call(this)||this;return i.closed=!1,i.currentObservers=null,i.observers=[],i.isStopped=!1,i.hasError=!1,i.thrownError=null,i}return t.prototype.lift=function(i){var o=new Kd(this,this);return o.operator=i,o},t.prototype._throwIfClosed=function(){if(this.closed)throw new Y1},t.prototype.next=function(i){var o=this;Hn(function(){var r,s;if(o._throwIfClosed(),!o.isStopped){o.currentObservers||(o.currentObservers=Array.from(o.observers));try{for(var n=lu(o.currentObservers),a=n.next();!a.done;a=n.next()){var u=a.value;u.next(i)}}catch(h){r={error:h}}finally{try{a&&!a.done&&(s=n.return)&&s.call(n)}finally{if(r)throw r.error}}}})},t.prototype.error=function(i){var o=this;Hn(function(){if(o._throwIfClosed(),!o.isStopped){o.hasError=o.isStopped=!0,o.thrownError=i;for(var r=o.observers;r.length;)r.shift().error(i)}})},t.prototype.complete=function(){var i=this;Hn(function(){if(i._throwIfClosed(),!i.isStopped){i.isStopped=!0;for(var o=i.observers;o.length;)o.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var i;return((i=this.observers)===null||i===void 0?void 0:i.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(i){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,i)},t.prototype._subscribe=function(i){return this._throwIfClosed(),this._checkFinalizedStatuses(i),this._innerSubscribe(i)},t.prototype._innerSubscribe=function(i){var o=this,r=this,s=r.hasError,n=r.isStopped,a=r.observers;return s||n?jd:(this.currentObservers=null,a.push(i),new qo(function(){o.currentObservers=null,Nn(a,i)}))},t.prototype._checkFinalizedStatuses=function(i){var o=this,r=o.hasError,s=o.thrownError,n=o.isStopped;r?i.error(s):n&&i.complete()},t.prototype.asObservable=function(){var i=new Gd;return i.source=this,i},t.create=function(i,o){return new Kd(i,o)},t}(Gd),Kd=function(e){re(t,e);function t(i,o){var r=e.call(this)||this;return r.destination=i,r.source=o,r}return t.prototype.next=function(i){var o,r;(r=(o=this.destination)===null||o===void 0?void 0:o.next)===null||r===void 0||r.call(o,i)},t.prototype.error=function(i){var o,r;(r=(o=this.destination)===null||o===void 0?void 0:o.error)===null||r===void 0||r.call(o,i)},t.prototype.complete=function(){var i,o;(o=(i=this.destination)===null||i===void 0?void 0:i.complete)===null||o===void 0||o.call(i)},t.prototype._subscribe=function(i){var o,r;return(r=(o=this.source)===null||o===void 0?void 0:o.subscribe(i))!==null&&r!==void 0?r:jd},t}(pu);(function(e){re(t,e);function t(i){var o=e.call(this)||this;return o._value=i,o}return Object.defineProperty(t.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),t.prototype._subscribe=function(i){var o=e.prototype._subscribe.call(this,i);return!o.closed&&i.next(this._value),o},t.prototype.getValue=function(){var i=this,o=i.hasError,r=i.thrownError,s=i._value;if(o)throw r;return this._throwIfClosed(),s},t.prototype.next=function(i){e.prototype.next.call(this,this._value=i)},t})(pu);var fu={now:function(){return(fu.delegate||Date).now()},delegate:void 0};(function(e){re(t,e);function t(i,o,r){i===void 0&&(i=1/0),o===void 0&&(o=1/0),r===void 0&&(r=fu);var s=e.call(this)||this;return s._bufferSize=i,s._windowTime=o,s._timestampProvider=r,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=o===1/0,s._bufferSize=Math.max(1,i),s._windowTime=Math.max(1,o),s}return t.prototype.next=function(i){var o=this,r=o.isStopped,s=o._buffer,n=o._infiniteTimeWindow,a=o._timestampProvider,u=o._windowTime;r||(s.push(i),!n&&s.push(a.now()+u)),this._trimBuffer(),e.prototype.next.call(this,i)},t.prototype._subscribe=function(i){this._throwIfClosed(),this._trimBuffer();for(var o=this._innerSubscribe(i),r=this,s=r._infiniteTimeWindow,n=r._buffer,a=n.slice(),u=0;u<a.length&&!i.closed;u+=s?1:2)i.next(a[u]);return this._checkFinalizedStatuses(i),o},t.prototype._trimBuffer=function(){var i=this,o=i._bufferSize,r=i._timestampProvider,s=i._buffer,n=i._infiniteTimeWindow,a=(n?1:2)*o;if(o<1/0&&a<s.length&&s.splice(0,s.length-a),!n){for(var u=r.now(),h=0,f=1;f<s.length&&s[f]<=u;f+=2)h=f;h&&s.splice(0,h+1)}},t})(pu);var X1=function(e){re(t,e);function t(i,o){return e.call(this)||this}return t.prototype.schedule=function(i,o){return this},t}(qo),Yd={setInterval:function(e,t){for(var i=[],o=2;o<arguments.length;o++)i[o-2]=arguments[o];return setInterval.apply(void 0,Ln([e,t],Dn(i)))},clearInterval:function(e){return clearInterval(e)},delegate:void 0},Z1=function(e){re(t,e);function t(i,o){var r=e.call(this,i,o)||this;return r.scheduler=i,r.work=o,r.pending=!1,r}return t.prototype.schedule=function(i,o){var r;if(o===void 0&&(o=0),this.closed)return this;this.state=i;var s=this.id,n=this.scheduler;return s!=null&&(this.id=this.recycleAsyncId(n,s,o)),this.pending=!0,this.delay=o,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(n,this.id,o),this},t.prototype.requestAsyncId=function(i,o,r){return r===void 0&&(r=0),Yd.setInterval(i.flush.bind(i,this),r)},t.prototype.recycleAsyncId=function(i,o,r){if(r===void 0&&(r=0),r!=null&&this.delay===r&&this.pending===!1)return o;o!=null&&Yd.clearInterval(o)},t.prototype.execute=function(i,o){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(i,o);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(i,o){var r=!1,s;try{this.work(i)}catch(n){r=!0,s=n||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),s},t.prototype.unsubscribe=function(){if(!this.closed){var i=this,o=i.id,r=i.scheduler,s=r.actions;this.work=this.state=this.scheduler=null,this.pending=!1,Nn(s,this),o!=null&&(this.id=this.recycleAsyncId(r,o,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},t}(X1),Xd=function(){function e(t,i){i===void 0&&(i=e.now),this.schedulerActionCtor=t,this.now=i}return e.prototype.schedule=function(t,i,o){return i===void 0&&(i=0),new this.schedulerActionCtor(this,t).schedule(o,i)},e.now=fu.now,e}(),J1=function(e){re(t,e);function t(i,o){o===void 0&&(o=Xd.now);var r=e.call(this,i,o)||this;return r.actions=[],r._active=!1,r}return t.prototype.flush=function(i){var o=this.actions;if(this._active){o.push(i);return}var r;this._active=!0;do if(r=i.execute(i.state,i.delay))break;while(i=o.shift());if(this._active=!1,r){for(;i=o.shift();)i.unsubscribe();throw r}},t}(Xd);new J1(Z1),uu(function(e){return function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}});function Q1(e){let t=0,i=0;const o=e.length;for(;i<o;)t=(t<<5)-t+e.charCodeAt(i++),t|=0;return t}const t_=e=>{var i;class t extends A1(e){constructor(){super(...arguments);S(this,i)}get localize(){return p(this,i)??m(this,i,new P1(this))}observe(s,n,a){if(a===void 0&&n?a=Q1(n.toString()):a===null&&(a=void 0),s)return new L1(this,s,n,a);n==null||n(void 0),this.removeUmbControllerByAlias(a)}provideContext(s,n){return new T1(this,s,n)}consumeContext(s,n){return new Vd(this,s,n)}async getContext(s,n){const a=new Vd(this,s);return n&&(n.passContextAliasMatches&&a.passContextAliasMatches(),n.skipHost&&a.skipHost()),a.asPromise(n)}}return i=new WeakMap,t};var Zd=function(e,t,i,o){var r=arguments.length,s=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};class vu extends t_(Go){constructor(){super(...arguments),this.dir="",this.lang=""}}Zd([Bd()],vu.prototype,"dir",void 0),Zd([Bd()],vu.prototype,"lang",void 0);var e_=Object.defineProperty,i_=Object.getOwnPropertyDescriptor,Jd=e=>{throw TypeError(e)},Ko=(e,t,i,o)=>{for(var r=o>1?void 0:o?i_(t,i):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(r=(o?n(t,i,r):n(r))||r);return o&&r&&e_(t,i,r),r},r_=(e,t,i)=>t.has(e)||Jd("Cannot "+i),o_=(e,t,i)=>t.has(e)?Jd("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),ai=(e,t,i)=>(r_(e,t,"access private method"),i),oe,bu,Qd,tp,ep,gu,ip;U.UToursEditor=class extends vu{constructor(){super(...arguments),o_(this,oe),this.authService=new i1,this.tours=[],this.showNewTourForm=!1,this.errorMessage="",this.isLoading=!1}connectedCallback(){super.connectedCallback(),ai(this,oe,bu).call(this)}render(){return c`
      <div class="uui-text uui-font">
        <uui-modal-container>
          <uui-modal-sidebar size="medium">
            <div class="container uui-font uui-text">
                <div class="header">
                  <h1>uTours Visual Editor</h1>
                  <div class="button-group">
                    <uui-button @click=${ai(this,oe,ip)} look="secondary" color="default">
                      <uui-icon name="refresh"></uui-icon>
                      Refresh
                    </uui-button>
                  </div>
                </div>

                ${this.errorMessage?c`
                  <uui-box color="danger">
                    <p>Error: ${this.errorMessage}</p>
                  </uui-box>
                `:""}

                ${this.isLoading?c`
                  <div class="loading-state">
                    <uui-loader></uui-loader>
                    <p>Loading tours...</p>
                  </div>
                `:""}

                <p>Editor loaded successfully! Tours count: ${this.tours.length}</p>

                <div class="tour-list">
                  ${this.tours.length>0?this.tours.map(t=>c`
                        <div class="tour-item">
                          <h2>${t.name}</h2>
                          <button @click="${ai(this,oe,tp)}" data-id="${t.id}">Delete</button>
                        </div>
                      `):this.isLoading?"":c`
                        <div class="empty-state">
                          <p>No tours found. Create your first tour!</p>
                        </div>
                      `}
                </div>

                <div class="button-group" style="margin-top: var(--uui-size-space-4);">
                  <uui-button @click=${ai(this,oe,gu)} look="primary">
                    <uui-icon name="${this.showNewTourForm?"close":"add"}"></uui-icon>
                    ${this.showNewTourForm?"Cancel":"Add New Tour"}
                  </uui-button>
                </div>

                ${this.showNewTourForm?c`
                  <div class="new-tour-form">
                    <uui-input placeholder="Tour name" label="Tour Name"></uui-input>
                    <div class="button-group" style="margin-top: var(--uui-size-space-3);">
                      <uui-button @click=${ai(this,oe,ep)} look="primary">
                        <uui-icon name="check"></uui-icon>
                        Save Tour
                      </uui-button>
                      <uui-button @click=${ai(this,oe,gu)} look="secondary">
                        Cancel
                      </uui-button>
                    </div>
                  </div>
                `:""}
            </div>
          </uui-modal-sidebar>
        </uui-modal-container>
      </div>
    `}},oe=new WeakSet,bu=async function(){try{if(!this.authService.isTokenValid()){this.errorMessage="Please log in to the Umbraco backoffice to use this feature.";return}if(this.authService.shouldRefreshToken()&&!await this.authService.refreshToken()){this.errorMessage="Your session has expired. Please log in again.";return}await ai(this,oe,Qd).call(this)}catch(e){console.error("Error during authentication check:",e),this.errorMessage="Failed to authenticate. Please try refreshing the page."}},Qd=async function(){this.isLoading=!0,this.errorMessage="";try{if(!this.authService.isTokenValid())throw new Error("User is not authenticated. Please log in to the Umbraco backoffice.");const e=await this.authService.authenticatedFetch("/umbraco/management/api/v1/utours");if(!e.ok)throw new Error(`Failed to fetch tours: ${e.status} ${e.statusText}`);const t=await e.json();this.tours=t||[]}catch(e){console.error("Error fetching tours:",e),this.errorMessage=e instanceof Error?e.message:"An unknown error occurred",this.tours=[]}finally{this.isLoading=!1}},tp=async function(e){const i=e.currentTarget.getAttribute("data-id");if(!i){console.error("No tour ID found");return}try{if(!this.authService.isTokenValid())throw new Error("User is not authenticated. Please log in to the Umbraco backoffice.");const o=await this.authService.authenticatedFetch(`/umbraco/management/api/v1/utours/${i}`,{method:"DELETE"});if(o.status===200)this.tours=this.tours.filter(r=>r.id!==i);else throw new Error(`Failed to delete tour: ${o.status} ${o.statusText}`)}catch(o){this.errorMessage=o instanceof Error?o.message:"An unknown error occurred while deleting the tour"}},ep=async function(){var i;this.errorMessage="";const e=(i=this.shadowRoot)==null?void 0:i.querySelector(".new-tour-form uui-input"),t=e==null?void 0:e.value;if(!t){this.errorMessage="Tour name is required";return}try{if(!this.authService.isTokenValid())throw new Error("User is not authenticated. Please log in to the Umbraco backoffice.");const o=await this.authService.authenticatedFetch("/umbraco/management/api/v1/utours",{method:"POST",body:JSON.stringify(t)});if(!o.ok)throw new Error(`Failed to save tour: ${o.status} ${o.statusText}`);const r=await o.json();this.tours=[...this.tours,r],this.showNewTourForm=!1,e&&(e.value="")}catch(o){console.error("Error saving new tour:",o),this.errorMessage=o instanceof Error?o.message:"An unknown error occurred"}},gu=function(){this.showNewTourForm=!this.showNewTourForm},ip=async function(){await ai(this,oe,bu).call(this)},U.UToursEditor.styles=[Fi,b`
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
  `],Ko([w()],U.UToursEditor.prototype,"tours",2),Ko([w()],U.UToursEditor.prototype,"showNewTourForm",2),Ko([w()],U.UToursEditor.prototype,"errorMessage",2),Ko([w()],U.UToursEditor.prototype,"isLoading",2),U.UToursEditor=Ko([Ip("utours-editor")],U.UToursEditor),Object.defineProperty(U,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=utours-editor.umd.js.map

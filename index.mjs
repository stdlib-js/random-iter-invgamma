// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.1.0-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.1.0-esm/index.mjs";import{factory as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-invgamma@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function u(f,c,v){var g,b,x,y,w;if(!o(f))throw new TypeError(a("0pt71,NQ",f));if(!o(c))throw new TypeError(a("0pt72,Go",c));if(arguments.length>2){if(!d(v))throw new TypeError(a("0pt2V,FD",v));if(g=i({},v),l(g,"iter")){if(!m(g.iter))throw new TypeError(a("0pt2t,G9","iter",g.iter))}else g.iter=p;x=h(f,c,g),void 0===g.prng&&!1!==g.copy&&(g.state=x.state)}else x=h(f,c),g={iter:p,state:x.state};return w=0,t(b={},"next",G),t(b,"return",L),g&&g.prng?(t(b,"seed",null),t(b,"seedLength",null),s(b,"state",n(null),r),t(b,"stateLength",null),t(b,"byteLength",null)):(e(b,"seed",P),e(b,"seedLength",R),s(b,"state",D,F),e(b,"stateLength",E),e(b,"byteLength",T)),t(b,"PRNG",x.PRNG),j&&t(b,j,N),b;function G(){return w+=1,y||w>g.iter?{done:!0}:{value:x(),done:!1}}function L(t){return y=!0,arguments.length?{value:t,done:!0}:{done:!0}}function N(){return u(f,c,g)}function P(){return x.PRNG.seed}function R(){return x.PRNG.seedLength}function E(){return x.PRNG.stateLength}function T(){return x.PRNG.byteLength}function D(){return x.PRNG.state}function F(t){x.PRNG.state=t}}export{u as default};
//# sourceMappingURL=index.mjs.map

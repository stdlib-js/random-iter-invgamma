// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.14-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.0.8-esm/index.mjs";import{factory as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-invgamma@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function u(f,c,g){var b,v,x,y,w;if(!o(f))throw new TypeError(a("0pt71,NQ",f));if(!o(c))throw new TypeError(a("0pt72,Go",c));if(arguments.length>2){if(!d(g))throw new TypeError(a("0pt2V,FD",g));if(b=i({},g),l(b,"iter")){if(!m(b.iter))throw new TypeError(a("0pt2t,G9","iter",b.iter))}else b.iter=p;x=h(f,c,b),void 0===b.prng&&!1!==b.copy&&(b.state=x.state)}else x=h(f,c),b={iter:p,state:x.state};return w=0,t(v={},"next",G),t(v,"return",L),b&&b.prng?(t(v,"seed",null),t(v,"seedLength",null),s(v,"state",n(null),r),t(v,"stateLength",null),t(v,"byteLength",null)):(e(v,"seed",P),e(v,"seedLength",R),s(v,"state",D,F),e(v,"stateLength",E),e(v,"byteLength",T)),t(v,"PRNG",x.PRNG),j&&t(v,j,N),v;function G(){return w+=1,y||w>b.iter?{done:!0}:{value:x(),done:!1}}function L(t){return y=!0,arguments.length?{value:t,done:!0}:{done:!0}}function N(){return u(f,c,b)}function P(){return x.PRNG.seed}function R(){return x.PRNG.seedLength}function E(){return x.PRNG.stateLength}function T(){return x.PRNG.byteLength}function D(){return x.PRNG.state}function F(t){x.PRNG.state=t}}export{u as default};
//# sourceMappingURL=index.mjs.map

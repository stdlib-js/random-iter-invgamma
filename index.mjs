// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.2.1-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.2.1-esm/index.mjs";import{factory as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-invgamma@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function u(f,v,c){var g,b,x,y,w;if(!o(f))throw new TypeError(a("0pt71",f));if(!o(v))throw new TypeError(a("0pt72",v));if(arguments.length>2){if(!d(c))throw new TypeError(a("0pt2V",c));if(g=i({},c),l(g,"iter")){if(!m(g.iter))throw new TypeError(a("0pt2t","iter",g.iter))}else g.iter=p;x=h(f,v,g),void 0===g.prng&&!1!==g.copy&&(g.state=x.state)}else x=h(f,v),g={iter:p,state:x.state};return w=0,t(b={},"next",(function(){if(w+=1,y||w>g.iter)return{done:!0};return{value:x(),done:!1}})),t(b,"return",(function(t){if(y=!0,arguments.length)return{value:t,done:!0};return{done:!0}})),g&&g.prng?(t(b,"seed",null),t(b,"seedLength",null),s(b,"state",n(null),r),t(b,"stateLength",null),t(b,"byteLength",null)):(e(b,"seed",(function(){return x.PRNG.seed})),e(b,"seedLength",(function(){return x.PRNG.seedLength})),s(b,"state",(function(){return x.PRNG.state}),(function(t){x.PRNG.state=t})),e(b,"stateLength",(function(){return x.PRNG.stateLength})),e(b,"byteLength",(function(){return x.PRNG.byteLength}))),t(b,"PRNG",x.PRNG),j&&t(b,j,(function(){return u(f,v,g)})),b}export{u as default};
//# sourceMappingURL=index.mjs.map

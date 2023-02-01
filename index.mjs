// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chi-entropy@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chi-kurtosis@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chi-mean@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chi-mode@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chi-skewness@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chi-stdev@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chi-variance@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chi-cdf@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chi-logpdf@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chi-pdf@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-chi-quantile@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function f(){var s;if(!(this instanceof f))return 0===arguments.length?new f:new f(arguments[0]);if(arguments.length){if(!i(s=arguments[0]))throw new TypeError(u("invalid argument. Rate parameter must be a positive number. Value: `%s`.",s))}else s=1;return t(this,"k",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!i(t))throw new TypeError(u("invalid assignment. Must be a positive number. Value: `%s`.",t));s=t}}),this}e(f.prototype,"entropy",(function(){return n(this.k)})),e(f.prototype,"kurtosis",(function(){return r(this.k)})),e(f.prototype,"mean",(function(){return o(this.k)})),e(f.prototype,"mode",(function(){return d(this.k)})),e(f.prototype,"skewness",(function(){return m(this.k)})),e(f.prototype,"stdev",(function(){return p(this.k)})),e(f.prototype,"variance",(function(){return h(this.k)})),s(f.prototype,"cdf",(function(t){return l(t,this.k)})),s(f.prototype,"logpdf",(function(t){return a(t,this.k)})),s(f.prototype,"pdf",(function(t){return c(t,this.k)})),s(f.prototype,"quantile",(function(t){return j(t,this.k)}));export{f as default};
//# sourceMappingURL=index.mjs.map

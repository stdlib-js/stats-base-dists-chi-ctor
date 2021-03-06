/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var defineProperty = require( '@stdlib/utils-define-property' );
var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );
var isPositive = require( '@stdlib/assert-is-positive-number' ).isPrimitive;
var entropy = require( '@stdlib/stats-base-dists-chi-entropy' );
var kurtosis = require( '@stdlib/stats-base-dists-chi-kurtosis' );
var mean = require( '@stdlib/stats-base-dists-chi-mean' );
var mode = require( '@stdlib/stats-base-dists-chi-mode' );
var skewness = require( '@stdlib/stats-base-dists-chi-skewness' );
var stdev = require( '@stdlib/stats-base-dists-chi-stdev' );
var variance = require( '@stdlib/stats-base-dists-chi-variance' );
var cdf = require( '@stdlib/stats-base-dists-chi-cdf' );
var logpdf = require( '@stdlib/stats-base-dists-chi-logpdf' );
var pdf = require( '@stdlib/stats-base-dists-chi-pdf' );
var quantile = require( '@stdlib/stats-base-dists-chi-quantile' );
var format = require( '@stdlib/string-format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated CDF
*/
function chiCDF( x ) {
	return cdf( x, this.k );
}

/**
* Evaluates the natural logarithm of the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPDF
*/
function chiLogPDF( x ) {
	return logpdf( x, this.k );
}

/**
* Evaluates the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PDF
*/
function chiPDF( x ) {
	return pdf( x, this.k );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function chiQuantile( p ) {
	return quantile( p, this.k );
}


// MAIN //

/**
* Chi distribution constructor.
*
* @constructor
* @param {PositiveNumber} [k=1.0] - degrees of freedom
* @throws {TypeError} `k` must be a positive number
* @returns {Chi} distribution instance
*
* @example
* var chi = new Chi( 1.0 );
*
* var y = chi.cdf( 0.8 );
* // returns ~0.576
*
* var v = chi.mode;
* // returns 0.0
*/
function Chi() {
	var k;
	if ( !(this instanceof Chi) ) {
		if ( arguments.length === 0 ) {
			return new Chi();
		}
		return new Chi( arguments[ 0 ] );
	}
	if ( arguments.length ) {
		k = arguments[ 0 ];
		if ( !isPositive( k ) ) {
			throw new TypeError( format( 'invalid argument. Rate parameter must be a positive number. Value: `%s`.', k ) );
		}
	} else {
		k = 1.0;
	}
	defineProperty( this, 'k', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return k;
		},
		'set': function set( value ) {
			if ( !isPositive( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive number. Value: `%s`.', value ) );
			}
			k = value;
		}
	});
	return this;
}

/**
* Chi distribution differential entropy.
*
* @name entropy
* @memberof Chi.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var chi = new Chi( 4.0 );
*
* var v = chi.entropy;
* // returns ~1.019
*/
setReadOnlyAccessor( Chi.prototype, 'entropy', function get() {
	return entropy( this.k );
});

/**
* Chi distribution excess kurtosis.
*
* @name kurtosis
* @memberof Chi.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var chi = new Chi( 4.0 );
*
* var v = chi.kurtosis;
* // returns ~0.059
*/
setReadOnlyAccessor( Chi.prototype, 'kurtosis', function get() {
	return kurtosis( this.k );
});

/**
* Chi distribution expected value.
*
* @name mean
* @memberof Chi.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var chi = new Chi( 4.0 );
*
* var v = chi.mean;
* // returns ~1.88
*/
setReadOnlyAccessor( Chi.prototype, 'mean', function get() {
	return mean( this.k );
});

/**
* Chi distribution mode.
*
* @name mode
* @memberof Chi.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var chi = new Chi( 4.0 );
*
* var v = chi.mode;
* // returns ~1.732
*/
setReadOnlyAccessor( Chi.prototype, 'mode', function get() {
	return mode( this.k );
});

/**
* Chi distribution skewness.
*
* @name skewness
* @memberof Chi.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var chi = new Chi( 4.0 );
*
* var v = chi.skewness;
* // returns ~0.406
*/
setReadOnlyAccessor( Chi.prototype, 'skewness', function get() {
	return skewness( this.k );
});

/**
* Chi distribution standard deviation.
*
* @name stdev
* @memberof Chi.prototype
* @type {number}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var chi = new Chi( 4.0 );
*
* var v = chi.stdev;
* // returns ~0.682
*/
setReadOnlyAccessor( Chi.prototype, 'stdev', function get() {
	return stdev( this.k );
});

/**
* Chi distribution variance.
*
* @name variance
* @memberof Chi.prototype
* @type {number}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var chi = new Chi( 4.0 );
*
* var v = chi.variance;
* // returns ~0.466
*/
setReadOnlyAccessor( Chi.prototype, 'variance', function get() {
	return variance( this.k );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Chi.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var chi = new Chi( 2.0 );
*
* var v = chi.cdf( 0.5 );
* // returns ~0.118
*/
setReadOnly( Chi.prototype, 'cdf', chiCDF );

/**
* Evaluates the natural logarithm of the probability density function (PDF).
*
* @name logpdf
* @memberof Chi.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var chi = new Chi( 2.0 );
*
* var v = chi.logpdf( 0.8 );
* // returns ~-0.543
*/
setReadOnly( Chi.prototype, 'logpdf', chiLogPDF );

/**
* Evaluates the probability density function (PDF).
*
* @name pdf
* @memberof Chi.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var chi = new Chi( 2.0 );
*
* var v = chi.pdf( 0.8 );
* // returns ~0.581
*/
setReadOnly( Chi.prototype, 'pdf', chiPDF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof Chi.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var chi = new Chi( 2.0 );
*
* var v = chi.quantile( 0.5 );
* // returns ~1.177
*/
setReadOnly( Chi.prototype, 'quantile', chiQuantile );


// EXPORTS //

module.exports = Chi;

'use strict';

let P = require('bluebird');

/**
 * This module exports object with the following properties:
 *
 * defer - a function to create bluebird deferred object: var deferred = q.defer(); ... deferred.resolve(...); or deferred.reject(...);
 * Promise - bluebird library it self
 */
let q = {
	defer: defer,
	Promise: P
};

function defer() {
	let resolve, reject;
	let promise = new P(function () {
		resolve = arguments[0];
		reject = arguments[1];
	});

	return {
		resolve: resolve,
		reject: reject,
		promise: promise
	};
}

module.exports = q;

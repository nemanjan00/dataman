const url = require("url");

/**
 * @typedef {import('./interface')} StorageInterface
 */

/**
 * @typedef {!function(!string):!StorageInterface} StorageFactory
 */

/**
 * @type {StorageFactory}
 */
module.exports = (connectionUrl) => {
	console.log(url.parse(connectionUrl));
	const storage = {};

	return storage;
};


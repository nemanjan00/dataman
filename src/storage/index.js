const url = require("url");

/**
 * @typedef {import('./interface')} StorageInterface
 */

/**
 * Create storage instance
 *
 * @param {string} connectionUrl
 * @returns {StorageInterface} storage
 */
module.exports = (connectionUrl) => {
	console.log(url.parse(connectionUrl));
	const storage = {};

	return storage;
};


const url = require("url");
const engines = require("./engines");

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
	const connection = url.parse(connectionUrl);
	const storage = engines[connection.protocol.split(":")[0]] || engines.main;

	return storage(connectionUrl);
};


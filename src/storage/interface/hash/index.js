/* istanbul ignore file */

module.exports = {
	/**
	 * Set element value
	 * @param {string} name Name
	 * @param {string|number|boolean} element Element
	 * @returns {Promise<boolean>}
	 */
	set: function(hashName, element) {
		console.log("This is interface, do not call it", hashName, element);
	},

	/**
	 * Get value
	 * @param {string} name Name
	 * @returns {Promise}
	 */
	get: function(hashName) {
		console.log("This is interface, do not call it", hashName);
	},

	/**
	 * Delete
	 * @param {string} name Name
	 * @returns {Promise}
	 */
	delete: function(name) {
		console.log("This is interface, do not call it", name);
	}
};


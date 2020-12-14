/* istanbul ignore file */

module.exports = {
	/**
	 * Set element value
	 * @param {string} name Name
	 * @param {string|number|boolean} element Element
	 * @returns {Promise<boolean>}
	 */
	set: function(name, element) {
		console.log("This is interface, do not call it", name, element);
	},

	/**
	 * Get value
	 * @param {string} name Name
	 * @returns {Promise}
	 */
	get: function(name) {
		console.log("This is interface, do not call it", name);
	},

	/**
	 * Delete
	 * @param {string} name Name
	 * @returns {Promise}
	 */
	delete: function(name) {
		console.log("This is interface, do not call it", name);
	},
	
	/**
	 * Expire
	 * @param {string} name Name
	 * @returns {Promise}
	 */
	expire: function(name, seconds) {
		console.log("This is interface, do not call it", name, seconds);
	}
};


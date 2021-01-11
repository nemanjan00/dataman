/* istanbul ignore file */

module.exports = {
	/**
	 * Add element to set
	 * @param {string} setName Name of set
	 * @param {string|number|boolean} element Element to add
	 * @returns {Promise<boolean>}
	 */
	add: function(setName, element) {
		console.log("This is interface, do not call it", setName, element);
	},

	/**
	 * Delete element from set
	 * @param {string} setName Name of set
	 * @returns {Promise}
	 */
	delete: function(setName, element) {
		console.log("This is interface, do not call it", setName, element);
	},

	/**
	 * Check if element exists in set
	 * @param {string} setName Name of set
	 * @returns {Promise<number>}
	 */
	exists: function(setName, element) {
		console.log("This is interface, do not call it", setName, element);
	},

	/**
	 * Get all set members
	 * @param {string} name Name
	 * @returns {Promise}
	 */
	get: function(setName) {
		console.log("This is interface, do not call it", setName);
	}
};


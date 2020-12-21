/* istanbul ignore file */

module.exports = {
	/**
	 * Push element to list
	 * @param {string} listName Name of the list
	 * @param {string|number|boolean} element Element to push
	 * @returns {Promise<boolean>}
	 */
	push: function(listName, element) {
		console.log("This is interface, do not call it", listName, element);
	},

	/**
	 * Pop element from list
	 * @param {string} listName Name of the list
	 * @returns {Promise}
	 */
	pop: function(listName) {
		console.log("This is interface, do not call it", listName);
	},

	/**
	 * Get list length
	 * @param {string} listName Name of the list
	 * @returns {Promise<number>}
	 */
	length: function(listName) {
		console.log("This is interface, do not call it", listName);
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
	 * lrange
	 * @param {String} name Name
	 * @param {Number} start list start index
	 * @param {Number} stop list stop index
	 * @returns {Promise}
	 */
	lrange: function(name, start, stop) {
		console.log("This is interface, do not call it", name, start, stop);
	}
};



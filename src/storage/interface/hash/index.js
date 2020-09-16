module.exports = {
	/**
	 * Set element value
	 * @param {string} name Name
	 * @param {string|number|boolean} element Element
	 * @returns {Promise<boolean>}
	 */
	set: function(queueName, element) {
		console.log("This is interface, do not call it", queueName, element);
	},

	/**
	 * Get value
	 * @param {string} name Name
	 * @returns {Promise}
	 */
	get: function(queueName) {
		console.log("This is interface, do not call it", queueName);
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


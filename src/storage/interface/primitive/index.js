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
	 * Get multiple values value
	 * @param {string[]} names Names
	 * @returns {Promise}
	 */
	multiGet: function(name) {
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
	},

	/**
	 * Set key to hold string value if key does not exist. In that case, it is equal to SET. When key already holds a value, no operation is performed. SETNX is short for "SET if Not eXists".
	 * @param {string} name Name
	 * @param {string|number|boolean} element Element
	 * @returns {Promise} 1 if the key was set or 0 if the key was not set
	 */
	setnx: function(name, element) {
		console.log("This is interface, do not call it", name, element);
	}
};


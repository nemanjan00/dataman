/* istanbul ignore file */

module.exports = {
	/**
	 * Push element to queue
	 * @param {string} queueName Name of the queue
	 * @param {string|number|boolean} element Element to push
	 * @returns {Promise<boolean>}
	 */
	push: function(queueName, element) {
		console.log("This is interface, do not call it", queueName, element);
	},

	/**
	 * Pop element from queue
	 * @param {string} queueName Name of the queue
	 * @returns {Promise}
	 */
	pop: function(queueName) {
		console.log("This is interface, do not call it", queueName);
	},

	/**
	 * Get queue length
	 * @param {string} queueName Name of the queue
	 * @returns {Promise<number>}
	 */
	length: function(queueName) {
		console.log("This is interface, do not call it", queueName);
	},

	/**
	 * delete
	 * @param {string} name name
	 * @returns {promise}
	 */
	delete: function(name) {
		console.log("this is interface, do not call it", name);
	}
};


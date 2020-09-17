module.exports = () => {
	return {
		push: function(queueName, element) {
			console.log("This is interface, do not call it", queueName, element);
		},

		pop: function(queueName) {
			console.log("This is interface, do not call it", queueName);
		},

		length: function(queueName) {
			console.log("This is interface, do not call it", queueName);
		},

		delete: function(name) {
			console.log("this is interface, do not call it", name);
		}
	};
};


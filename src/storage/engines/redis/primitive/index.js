module.exports = () => {
	return {
		set: function(name, element) {
			console.log("This is interface, do not call it", name, element);
		},

		get: function(name) {
			console.log("This is interface, do not call it", name);
		},

		delete: function(name) {
			console.log("This is interface, do not call it", name);
		}
	};
};


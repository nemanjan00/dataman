module.exports = () => {
	return {
		set: function(hashName, element) {
			console.log("This is interface, do not call it", hashName, element);
		},

		get: function(hashName) {
			console.log("This is interface, do not call it", hashName);
		},

		delete: function(name) {
			console.log("This is interface, do not call it", name);
		}
	};
};


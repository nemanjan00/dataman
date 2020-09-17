module.exports = () => {
	return {
		push: function(listName, element) {
			console.log("This is interface, do not call it", listName, element);
		},

		pop: function(listName) {
			console.log("This is interface, do not call it", listName);
		},

		length: function(listName) {
			console.log("This is interface, do not call it", listName);
		},

		delete: function(name) {
			console.log("This is interface, do not call it", name);
		}
	};
};



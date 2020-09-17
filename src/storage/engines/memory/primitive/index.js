module.exports = (engine) => {
	return {
		set: function(name, element) {
			engine.database[name] = element;

			return Promise.resolve();
		},

		get: function(name) {
			return Promise.resolve(engine.database[name]);
		},

		delete: function(name) {
			delete engine.database[name];

			return Promise.resolve();
		}
	};
};


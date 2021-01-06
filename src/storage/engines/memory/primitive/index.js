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
		},

		expire: function(name, seconds) {
			setTimeout(() => {
				delete engine.database[name];
			}, seconds * 1000);

			return Promise.resolve();
		},

		setnx: function(name, element) {
			if (engine.database[name]) {
				return Promise.resolve(0);
			}

			engine.database[name] = element;

			return Promise.resolve(1);
		}
	};
};


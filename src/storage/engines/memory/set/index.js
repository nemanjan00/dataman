module.exports = (engine) => {
	return {
		add: function(name, element) {
			if(engine.database[name] === undefined) {
				engine.database[name] = {};
			}

			engine.database[name][element] = true;

			return Promise.resolve();
		},

		delete: function(name, element) {
			if(engine.database[name] === undefined) {
				engine.database[name] = {};
			}

			delete engine.database[name][element];

			return Promise.resolve();
		},

		exists: function(name, element) {
			if(engine.database[name] === undefined) {
				engine.database[name] = {};
			}

			if(engine.database[name][element]) {
				return Promise.resolve(1);
			}

			return Promise.resolve(0);
		},

		get: function(name) {
			if(engine.database[name] === undefined) {
				engine.database[name] = {};
			}

			return Promise.resolve(Object.keys(engine.database[name]));
		}
	};
};



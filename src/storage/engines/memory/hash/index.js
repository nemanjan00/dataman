module.exports = (engine) => {
	return {
		set: function(name, hash) {
			if(engine.database[name] == undefined) {
				engine.database[name] = {};
			}

			Object.assign(engine.database[name], hash);

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


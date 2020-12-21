module.exports = (engine) => {
	return {
		push: function(name, element) {
			if(engine.database[name] === undefined) {
				engine.database[name] = [];
			}

			engine.database[name].push(element);

			return Promise.resolve();
		},

		pop: function(name) {
			if(engine.database[name] === undefined) {
				engine.database[name] = [];
			}

			return Promise.resolve(engine.database[name].pop());
		},

		length: function(name) {
			if(engine.database[name] === undefined) {
				engine.database[name] = [];
			}

			return Promise.resolve(engine.database[name].length);
		},

		delete: function(name) {
			delete engine.database[name];

			return Promise.resolve();
		},

		lrange: function(name, start, stop) {
			let data;

			if (stop < 0) {
				data = engine.database[name].splice(start);
			} else {
				data = engine.database[name].splice(start, stop);
			}

			return Promise.resolve(data);
		}
	};
};



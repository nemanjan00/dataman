module.exports = (engine) => {
	return {
		set: function(name, element) {
			return new Promise((resolve, reject) => {
				engine.client.set(name, element, (error, data) => {
					if(error) {
						return reject(error);
					}

					resolve(data);
				});
			});
		},

		get: function(name) {
			return new Promise((resolve, reject) => {
				engine.client.get(name, (error, data) => {
					if(error) {
						return reject(error);
					}

					resolve(data);
				});
			});
		},

		delete: function(name) {
			return new Promise((resolve, reject) => {
				engine.client.del(name, (error, data) => {
					if(error) {
						return reject(error);
					}

					resolve(data);
				});
			});
		}
	};
};


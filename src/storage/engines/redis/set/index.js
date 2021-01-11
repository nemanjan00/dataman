module.exports = (engine) => {
	return {
		add: function(name, element) {
			return new Promise((resolve, reject) => {
				engine.client.sadd(name, element, (error, data) => {
					if(error) {
						return reject(error);
					}

					resolve(data);
				});
			});
		},

		delete: function(name, element) {
			return new Promise((resolve, reject) => {
				engine.client.srem(name, element, (error, data) => {
					if(error) {
						return reject(error);
					}

					resolve(data);
				});
			});
		},

		exists: function(name, element) {
			return new Promise((resolve, reject) => {
				engine.client.sismember(name, element, (error, data) => {
					if(error) {
						return reject(error);
					}

					resolve(data);
				});
			});
		},

		get: function(name) {
			return new Promise((resolve, reject) => {
				engine.client.smembers(name, (error, data) => {
					if(error) {
						return reject(error);
					}

					resolve(data);
				});
			});
		}
	};
};


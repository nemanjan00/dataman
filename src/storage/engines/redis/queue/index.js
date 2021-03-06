module.exports = (engine) => {
	return {
		push: function(name, element) {
			return new Promise((resolve, reject) => {
				engine.client.lpush(name, element, (error, data) => {
					if(error) {
						return reject(error);
					}

					resolve(data);
				});
			});
		},

		pop: function(name) {
			return new Promise((resolve, reject) => {
				engine.client.rpop(name, (error, data) => {
					if(error) {
						return reject(error);
					}

					resolve(data);
				});
			});
		},

		length: function(name) {
			return new Promise((resolve, reject) => {
				engine.client.llen(name, (error, data) => {
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



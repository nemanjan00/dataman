module.exports = (engine) => {
	return {
		set: function(name, hash) {
			const args = [];

			Object.keys(hash).filter(key => {
				return hash[key] !== undefined;
			}).forEach(key => {
				args.push(key);
				args.push(hash[key]);
			});

			return new Promise((resolve, reject) => {
				engine.client.hmset(name, ...args, (err) => {
					if(err) {
						return reject(err);
					}

					resolve();
				});
			});
		},

		get: function(name) {
			return new Promise((resolve, reject) => {
				engine.client.hgetall(name, (err, data) => {
					if(err) {
						reject(err);
						return;
					}

					if(data == null) {
						return resolve(null);
					}

					Object.keys(data).forEach(key => {
						if(data[key] == "true") {
							data[key] = true;
						}

						if(data[key] == "false") {
							data[key] = false;
						}

						if(data[key] == "undefined") {
							data[key] = undefined;
						}

						if(data[key] == "NaN") {
							data[key] = NaN;
						}

						if(data[key] == "null") {
							data[key] = null;
						}

						if(parseFloat(data[key]) + "" == data[key]) {
							data[key] = parseFloat(data[key]);
						}
					});

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


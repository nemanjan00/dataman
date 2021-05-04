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

		multiGet: function(names) {
			return new Promise((resolve, reject) => {
				engine.client.mget(...name, (error, data) => {
					if(error) {
						return reject(error);
					}

					const result = {};

					names.forEach((name, id) => {
						if(data[id] !== null) {
							result[name] = data[id];
						}
					});

					resolve(result);
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
		},

		expire: function(name, seconds) {
			return new Promise((resolve, reject) => {
				engine.client.expire(name, seconds, (error, data) => {
					if(error) {
						return reject(error);
					}

					resolve(data);
				});
			});
		},

		setnx: function(name, element) {
			return new Promise((resolve, reject) => {
				engine.client.setnx(name, element, (error, data) => {
					if(error) {
						return reject(error);
					}

					resolve(data);
				});
			});
		}
	};
};


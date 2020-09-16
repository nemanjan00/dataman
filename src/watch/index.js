
/**
 * Returns original object wrapped in a way that allows you to see changes made
 * to it by accessing `object.changes`
 *
 * @param {} data
 */
module.exports = function(data) {
	const handler = {
		_updated: {},

		get: function(_target, prop) {
			if(prop == "changes") {
				return handler._updated;
			}

			return data[prop];
		},

		set: function(_target, prop, value) {
			if(data[prop] == value) {
				return true;
			}

			handler._updated[prop] = data[prop] = value;

			return true;
		}
	};

	return new Proxy(data, handler);
};


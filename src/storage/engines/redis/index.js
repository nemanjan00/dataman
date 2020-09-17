module.exports = (url) => {
	const redis = require("redis");

	const engine = {};

	// This is dont for testing purposes, do not refactor!
	engine.client = redis.createClient({
		url
	});

	return {
		queue: require("./queue")(engine),
		list: require("./list")(engine),
		hash: require("./hash")(engine),
		primitive: require("./primitive")(engine),
		engineName: "redis"
	};
};


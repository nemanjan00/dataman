module.exports = () => {
	const engine = {
		database: {}
	};

	return {
		queue: require("./queue")(engine),
		list: require("./list")(engine),
		hash: require("./hash")(engine),
		primitive: require("./primitive")(engine),
		set: require("./set")(engine),
		engineName: "memory"
	};
};


module.exports = () => {
	return {
		queue: require("../../interface/queue"),
		list: require("../../interface/list"),
		hash: require("../../interface/hash"),
		primitive: require("../../interface/primitive"),
		set: require("../../interface/set"),
		engineName: "redis"
	};
};


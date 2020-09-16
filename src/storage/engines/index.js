const memory = require("./memory");
const redis = require("./redis");

module.exports = {
	memory,
	redis,
	main: memory
};


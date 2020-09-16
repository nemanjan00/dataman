const watch = require("../../src/watch");

describe("watch", function() {
	it("Returns the same value as provided", function(done) {
		const data = {
			time: Date.now()
		};

		const watcher = watch(data);

		if(watcher.time != data.time) {
			return done(new Error("Data is not the same"));
		}

		return done();
	});
});


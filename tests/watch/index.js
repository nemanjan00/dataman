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

	it("Returns different value, if value is changed", function(done) {
		const data = {
			time: Date.now()
		};

		const watcher = watch(JSON.parse(JSON.stringify(data)));

		watcher.time = 1;

		if(watcher.time === data.time) {
			return done(new Error("Data did not change"));
		}

		return done();
	});

	it("Remembers value changed", function(done) {
		const data = {
			time: Date.now()
		};

		const watcher = watch(JSON.parse(JSON.stringify(data)));

		watcher.time = 1;

		if(watcher.changes.time !== 1) {
			return done(new Error("Did not remember change"));
		}

		return done();
	});

	it("Does nothing if new value is equal to the old one", function(done) {
		const data = {
			time: 1
		};

		const watcher = watch(JSON.parse(JSON.stringify(data)));

		watcher.time = 1;

		if(watcher.changes.time === 1) {
			return done(new Error("Did not skip change"));
		}

		return done();
	});
});


const mock = require("mock-require");

mock("redis", require("redis-mock"));

const interfaceObject = require("../../src/storage/interface");
const engines = require("../../src/storage/engines");

const implementsChecker = require("../../src/implements");

describe("watch", function() {
	Object.keys(engines).filter(key => key != "main").forEach(engineName => {
		describe(engineName, function() {
			it("Implements interface", function(done) {
				try {
					implementsChecker(interfaceObject, engines[engineName]());
				} catch(e) {
					return done(e);
				}

				return done();
			});

			describe("primitive", function() {
				const engine = engines[engineName]();

				it("Stores primitives", function(done) {
					engine.primitive.set("test", 1).then(() => {
						done();
					}).catch(done);
				});

				it("Returns primitives", function(done) {
					engine.primitive.get("test").then((result) => {
						if(result == 1) {
							return done();
						}

						done(new Error("Incorrect value returned"));
					}).catch(done);
				});

				it("Deletes primitives", function(done) {
					engine.primitive.delete("test").then(() => {
						done();
					}).catch(done);
				});

				it("Does not return deleted primitives", function(done) {
					engine.primitive.get("test").then((result) => {
						if(result == 1) {
							return done(new Error("Incorrect value returned"));
						}

						done();
					}).catch(done);
				});
			});

			describe("hash", function() {
				const engine = engines[engineName]();

				it("Stores hash", function(done) {
					engine.hash.set("testHash", {a: 1}).then(() => {
						done();
					}).catch(done);
				});

				it("Returns hashes", function(done) {
					engine.hash.get("testHash").then((result) => {
						if(result.a == 1) {
							return done();
						}

						done(new Error("Incorrect value returned"));
					}).catch(done);
				});

				it("Deletes hashes", function(done) {
					engine.hash.delete("testHash").then(() => {
						done();
					}).catch(done);
				});

				it("Does not return deleted primitives", function(done) {
					engine.primitive.get("testHash").then((result) => {
						if(result != null) {
							return done(new Error("Incorrect value returned"));
						}

						done();
					}).catch(done);
				});
			});
		});
	});
});


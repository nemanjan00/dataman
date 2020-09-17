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
					engine.hash.set("testHash", {
						a: 1,
						b: true,
						c: "string",
						e: "null",
						f: "4.5",
						g: "undefined",
						h: "NaN",
						i: "false"
					}).then(() => {
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

				it("Does not return deleted hash", function(done) {
					engine.hash.get("testHash").then((result) => {
						if(result != null) {
							return done(new Error("Incorrect value returned"));
						}

						done();
					}).catch(done);
				});
			});

			describe("list", function() {
				const engine = engines[engineName]();

				it("Pushes to list", function(done) {
					engine.list.push("testList", 1).then(() => {
						done();
					}).catch(done);
				});

				it("Pushes more elements to list", function(done) {
					engine.list.push("testList", 2).then(() => {
						done();
					}).catch(done);
				});

				it("Pops last one", function(done) {
					engine.list.pop("testList").then((result) => {
						if(result == 2) {
							return done();
						}

						done(new Error("Incorrect value returned"));
					}).catch(done);
				});

				it("Returns correct length", function(done) {
					engine.list.length("testList").then((result) => {
						if(result == 1) {
							return done();
						}

						return done(new Error("Incorrect value returned"));
					}).catch(done);
				});

				it("Deletes list", function(done) {
					engine.list.delete("testList").then(() => {
						done();
					}).catch(done);
				});

				it("Does not return deleted list", function(done) {
					engine.list.pop("testList").then((result) => {
						if(result != null) {
							return done(new Error("Incorrect value returned"));
						}

						done();
					}).catch(done);
				});
			});

			describe("queue", function() {
				const engine = engines[engineName]();

				it("Pushes to queue", function(done) {
					engine.queue.push("testQueue", 1).then(() => {
						done();
					}).catch(done);
				});

				it("Pushes more elements to queue", function(done) {
					engine.queue.push("testQueue", 2).then(() => {
						done();
					}).catch(done);
				});

				it("Pops first one", function(done) {
					engine.queue.pop("testQueue").then((result) => {
						if(result == 1) {
							return done();
						}

						done(new Error("Incorrect value returned"));
					}).catch(done);
				});

				it("Returns correct length", function(done) {
					engine.queue.length("testQueue").then((result) => {
						if(result == 1) {
							return done();
						}

						return done(new Error("Incorrect value returned"));
					}).catch(done);
				});

				it("Deletes queue", function(done) {
					engine.queue.delete("testQueue").then(() => {
						done();
					}).catch(done);
				});

				it("Does not return deleted queue", function(done) {
					engine.queue.pop("testQueue").then((result) => {
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


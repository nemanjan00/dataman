const interfaceObject = require("../../src/storage/interface");
const engines = require("../../src/storage/engines");

const implementsChecker = require("../../src/implements");

describe("watch", function() {
	Object.keys(engines).filter(key => key != "main").forEach(engineName => {
		it(`Engine ${engineName} implements interface`, function(done) {
			try {
				implementsChecker(interfaceObject, engines[engineName]());
			} catch(e) {
				return done(e);
			}

			return done();
		});
	});
});


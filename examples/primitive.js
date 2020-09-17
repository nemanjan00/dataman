const dataman = require("../");
const storage = dataman.storage("memory://");

storage.primitive.set("test", "testValue").then(() => {
	storage.primitive.get("test").then(data => {
		console.log(data);
	});
});


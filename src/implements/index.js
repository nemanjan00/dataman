const validate = function(interfaceObject, implementation, path) {
	if(path === undefined) {
		path = "implementation";
	}

	if(typeof interfaceObject != typeof implementation) {
		throw new Error(`${path} is not ${typeof interfaceObject} as specified by interface.`);
	}

	if(interfaceObject instanceof Object) {
		Object.keys(interfaceObject).forEach((element) => {
			validate(interfaceObject[element], implementation[element], path + `.${element}`);
		});
	}
};

module.exports = validate;


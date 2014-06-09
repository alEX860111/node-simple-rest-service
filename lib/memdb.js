var objects = [];

exports.clear = function() {
    objects = [];
};

exports.getAll = function() {
	return objects;
};

exports.get = function(id) {
    return objects[id];
};

exports.remove = function(id) {
	var returnObject = objects[id];
	if (!returnObject) {
		return returnObject;
	}
	objects.splice(id, 1);
	for (var i = 0; i < objects.length; i++) {
		objects[i].id = i;
	}
	return returnObject;
};

exports.add = function(object) {
	object.id = objects.length;
    objects.push(object);
    return object;
};

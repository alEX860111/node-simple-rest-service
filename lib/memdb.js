var objects = [];

exports.add = function(object) {
	object.id = objects.length;
    objects.push(object);
    return object;
};

exports.get = function(id) {
    return objects[id];
};

exports.getAll = function() {
	return objects;
};

exports.clear = function() {
    objects = [];
    return objects;
};

exports.remove = function(id) {
	var returnObject = objects[id],
	i;
	if (!returnObject) {
		return returnObject;
	}
	objects.splice(id, 1);
	for (i = 0; i < objects.length; i++) {
		objects[i].id = i;
	}
	return returnObject;
};

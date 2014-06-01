var _ = require('underscore');

var persons = [{
    name: "John Doe",
    id: 1,
    age: 25
}, {
    name: "Max Mustermann",
    id: 2,
    age: 29
}];

exports.getAll = function() {
    return persons;
}

exports.get = function(id) {
    return _.find(persons, function(person) {
        return person.id == id;
    });
}

exports.remove = function(id) {
	var deletePerson;
	persons = _.filter(persons, function(person) {
		if (person.id == id) {
			deletePerson = person;
			return false;
		}
		return true;
	});
	return deletePerson;
}

exports.add = function(person) {
	persons.push(person);
	return person;
}

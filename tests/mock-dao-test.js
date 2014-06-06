var dao = require('../lib/mock-dao');

exports.testGetAll = function(test) {
	test.expect(1);
	var persons = dao.getAll();
	test.equal(persons.length, 2, 'Two persons should exist.');
	test.done();
}
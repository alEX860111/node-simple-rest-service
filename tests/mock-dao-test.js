var assert = require('assert');
var dao = require('../lib/mock-dao');
var testsCompleted = 0;

function test() {
	var persons = dao.getAll();
	assert.equal(persons.length, 2, 'Two persons should exist.');
	testsCompleted++;
}

test();
console.log(testsCompleted);
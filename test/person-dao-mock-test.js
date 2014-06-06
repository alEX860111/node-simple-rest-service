var dao = require('../lib/person-dao-mock');
var assert = require('assert');

describe('mock-dao', function() {
    describe('.getAll()', function() {
    	it('should return 2 persons', function() {
    		var persons = dao.getAll();
    		assert.equal(persons.length, 2);
    	});
    });
});

var dao = require('../lib/person-dao-mock');
var assert = require('assert');

describe('person-dao-mock', function() {

    var myobject;

    beforeEach(function() {
        dao.clear();
        myobject = {
            name: 'My cool object',
        };
    });

    describe('.add()', function() {
        it('should assign an id to the added object', function() {
            assert.equal(myobject.id, undefined);
            dao.add(myobject);
            assert.equal(myobject.id, 0);
        });
    });

    describe('.add()', function() {
        it('should return the added object', function() {
            var added = dao.add(myobject);
            assert.equal(added, myobject);
        });
    });

    describe('.get()', function() {
        it('should return the correct object', function() {
            dao.add(myobject)
            assert.equal(dao.get(myobject.id), myobject);
        });
    });

    describe('.getAll()', function() {
        it('should return all objects', function() {
            assert.equal(dao.getAll().length, 0);
            dao.add(myobject)
            assert.equal(dao.getAll().length, 1);
        });
    });

    describe('.remove()', function() {
        it('should remove the correct object', function() {
            dao.add(myobject)
            assert.equal(dao.remove(myobject.id), myobject);
        });
    });

    describe('.remove()', function() {
        it('should remove myobject', function() {
            dao.add(myobject)
            dao.remove(myobject.id)
            assert.equal(dao.getAll().length, 0);
        });
    });

    describe('.remove()', function() {
        it('should remove myobject', function() {
            var a = dao.add({});
            var b = dao.add({});
            var c = dao.add({});
            dao.remove(b.id)
            assert.equal(dao.getAll().length, 2);
            dao.remove(c.id)
            assert.equal(dao.getAll().length, 1);
        });
    });

});

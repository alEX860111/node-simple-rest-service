var dao = require('../lib/memdb');
var assert = require('assert');

describe('memdb', function() {

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
        it('should return the undefined for an invalid id', function() {
            dao.add(myobject)
            assert.equal(dao.get(99), undefined);
        });
    });

    describe('.getAll()', function() {
        it('should return an array of objects having the correct size', function() {
            assert.equal(dao.getAll().length, 0);
            dao.add(myobject)
            assert.equal(dao.getAll().length, 1);
            dao.clear();
            assert.equal(dao.getAll().length, 0);
        });
    });

    describe('.remove()', function() {
        it('should remove the correct object', function() {
            dao.add(myobject)
            dao.remove(myobject.id)
            assert.equal(dao.getAll().length, 0);
        });
        it('should return the removed object', function() {
            dao.add(myobject)
            assert.equal(dao.remove(myobject.id), myobject);
        });
        it('should correctly manage the ids of the remaining objects', function() {
            var a = dao.add({});
            var b = dao.add({});
            var c = dao.add({});

            assert.equal(dao.getAll().length, 3);
            assert.equal(a.id, 0);
            assert.equal(b.id, 1);
            assert.equal(c.id, 2);

            dao.remove(b.id)
            assert.equal(dao.getAll().length, 2);
            assert.equal(a.id, 0);
            assert.equal(c.id, 1);

            dao.remove(a.id)
            assert.equal(dao.getAll().length, 1);
            assert.equal(c.id, 0);
        });
    });

});

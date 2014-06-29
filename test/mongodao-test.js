var dao = require('../lib/mongodao');
var database = require('../lib/database.js');
var assert = require('assert');

describe('mongodao', function() {

    var myobject = {
        name: 'hello'
    };

    before(function() {
        dao.clear();
    });

    after(function() {
        dao.clear();
        database(function(db) {
            db.close();
        });
    });

    describe('add()', function() {
        it('should add a new object', function(done) {
            dao.add(myobject, function(object) {
                assert.equal(object, myobject);
                assert.ok(object._id);
                done();
            });
        });
    });

    describe('get()', function() {
        it('should get the correct object', function(done) {
            dao.get(myobject._id, function(object) {
                assert.ok(object);
                done();
            });
        });
    });

    describe('getAll()', function() {
        it('should get all objects', function(done) {
            dao.getAll(function(documents) {
                assert.equal(documents.length, 1);
                done();
            });
        });
    });

    describe('remove()', function() {
        it('should remove the correct object', function(done) {
            dao.remove(myobject._id, function(numRemoved) {
                assert.equal(numRemoved, 1);
                done();
            });
        });
    });

});

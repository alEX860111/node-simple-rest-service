var database = require('../lib/database.js');
var assert = require('assert');

describe('database', function() {

    it('', function(done) {
        var db = database(function(db) {
            assert.ok(db);
            assert.equal(db.numCreatedDatabase, 1);
            done();
        });
    });

    it('', function(done) {
        var db = database(function(db) {
            assert.ok(db);
            assert.equal(db.numCreatedDatabase, 1);
            db.close();
            done();
        });
    });

    it('', function(done) {
        var db = database(function(db) {
            assert.ok(db);
            assert.equal(db.numCreatedDatabase, 2);
            db.close();
            done();
        });
    });

});

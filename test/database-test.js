var database = require('../lib/database.js');
var assert = require('assert');

describe('database()', function() {

    it('should insert a valid db object into the callback', function(done) {
        database(function(db) {
            assert.equal(db.id, 1);
            done();
        });
    });

    it('should insert the same db object into the callback', function(done) {
        database(function(db) {
            assert.equal(db.id, 1);
            db.close();
            done();
        });
    });

    it('should insert a new db object into the callback', function(done) {
        database(function(db) {
            assert.equal(db.id, 2);
            db.close();
            done();
        });
    });

});

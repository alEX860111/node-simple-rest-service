var dao = require('../lib/mongodao');
var database = require('../lib/database.js');
var assert = require('assert');

describe('a', function() {

    after(function() {
        database(function(db) {
            db.close();
        });
    });

    it('b', function(done) {
        dao.add({
            'name': 'hallo'
        }, function() {
            done();
        });
    });

    it('b', function(done) {
        dao.add({
            'name': 'xxx'
        }, function() {
            done();
        });
    });

});

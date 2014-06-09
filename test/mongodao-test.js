var dao = require('../lib/mongodao');
var assert = require('assert');

describe('a', function() {

    after(function() {
        dao.close();
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

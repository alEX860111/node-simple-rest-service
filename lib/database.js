var mongodb = require('mongodb');

var db;

var id = 1;

module.exports = function(callback) {
    if (db) {
        callback(db);
        return;
    }

    getNewDb().open(function(err, database) {
        if (err) throw err;

        database.id = id++;
        database.on('close', function() {
            console.log('closing');
            db = null;
        });

        db = database;
        callback(database);
    });
};

function getNewDb() {
    return new mongodb.Db('test', new mongodb.Server("127.0.0.1", '27017', {
        auto_reconnect: true
    }), {
        w: 0
    });
}

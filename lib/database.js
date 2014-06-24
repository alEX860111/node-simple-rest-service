var mongodb = require('mongodb');

var db;

var numCreatedDatabase = 1;

module.exports = function(callback) {
    if (db) {
        callback(db);
        return;
    }

    getNewDb().open(function(error, databaseConnection) {
        if (error) throw new Error(error);

        databaseConnection.numCreatedDatabase = numCreatedDatabase++;
        databaseConnection.on('close', function() {
            console.log('closing');
            db = null;
        });

        db = databaseConnection;
        callback(databaseConnection);
    });
};

function getNewDb() {
    return new mongodb.Db('test', new mongodb.Server("127.0.0.1", '27017', {
        auto_reconnect: true
    }), {
        w: 1
    });
}

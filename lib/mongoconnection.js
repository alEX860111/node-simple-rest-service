var mongodb = require('mongodb');

var server = new mongodb.Server("127.0.0.1", '27017', {
        auto_reconnect: true
    });

var db = db = new mongodb.Db('test', server, {w: 1});

var connection;

exports.get = function(callback) {
    if (connection) {
        callback(connection);
        return;
    }    
    db.open(function(error, databaseConnection) {
        if (error) throw new Error(error);
        connection = databaseConnection;
        callback(databaseConnection);
    });
};

exports.close = function() {
    if (db) {
        db.close();
    }
};

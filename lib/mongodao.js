var MongoClient = require('mongodb').MongoClient;

var database;

exports.close = function() {
	console.log('closing');
	database.close();
};

exports.add = function(object, cb) {
    if (!database) {
        MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
        	database = db;
        	console.log('acquired new db');
        	add(object, cb);
        });
    } else {
    	add(object, cb);
    }
};

function add(object, cb) {
	console.log('adding');
    database.collection("test_insert").update({
        a: 1
    }, object, {
        upsert: true
    }, function(err, result) {
        cb();
    });
}

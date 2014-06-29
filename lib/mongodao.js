var database = require('./database.js');
var ObjectID = require('mongodb').ObjectID;

exports.add = function(object, callback) {
    getCollection(function(collection) {
        collection.insert(object, {
            safe: true
        }, function(err, documents) {
            if (err) throw err;
            callback(documents[0]);
        });
    });
};

exports.get = function(id, callback) {
    getCollection(function(collection) {
        collection.findOne({
            _id: new ObjectID(id)
        }, function(err, document) {
            if (err) throw err;
            callback(document);
        });
    });
};

exports.getAll = function(callback) {
    getCollection(function(collection) {
        collection.find().toArray(function(err, documents) {
            if (err) throw err;
            callback(documents);
        });
    });
};

exports.remove = function(id, callback) {
    getCollection(function(collection) {
        collection.remove({
            _id: new ObjectID(id)
        }, {
            w: 1
        }, function(err, numRemoved) {
            if (err) throw err;
            callback(numRemoved);
        });
    });
};

exports.clear = function(callback) {
    getCollection(function(collection) {
        collection.remove();
    });
};

function getCollection(callback) {
    database(function(db) {
        db.collection('test_insert', function(err, collection) {
            if (err) throw err;
            callback(collection);
        });
    });
}

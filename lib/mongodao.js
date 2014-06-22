var mongoDbConnection = require('./mongoconnection.js');

exports.add = function(object, cb) {
  mongoDbConnection.get(function(databaseConnection) {
    databaseConnection.collection('test_insert', function(error, collection) {
        collection.insert(object, {safe: true}, function(err, documents) {
            console.log(documents[0]._id);
            cb();
        });
    });
  });
};

exports.close = function() {
    mongoDbConnection.close();
};

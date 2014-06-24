var database = require('./database.js');

exports.add = function(object, cb) {
  database(function(db) {
    db.collection('test_insert', function(error, collection) {
        collection.insert(object, {safe: true}, function(err, documents) {
            console.log(documents[0]._id);
            cb();
        });
    });
  });
};

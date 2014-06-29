var express = require('express');
var app = express();
var dao = require('./lib/mongodao');
var database = require('./lib/database');

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

app.get('/persons', function(req, res) {
    dao.getAll(function(documents) {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(documents));
    });
});

app.post('/persons', function(req, res) {
    dao.add(req.body, function(object) {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(object));
    });
});

app.get('/persons/:id', function(req, res) {
    dao.get(req.params.id, function(found) {
        if (found) {
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(found));
        } else {
            res.status(404).send('The object with the id ' + req.params.id + ' does not exist.');
        }
    });
});

app.del('/persons/:id', function(req, res) {
    dao.remove(req.params.id, function(numRemoved) {
        res.status(200).send('Removed ' + numRemoved + ' documents.');

    });
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

//catches ctrl+c event
process.on('SIGINT', function() {
    console.log("Closing !!!!!!");
    database(function(db) {
        db.close();
        server.close();
    });
});

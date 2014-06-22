var express = require('express');
var app = express();
var dao = require('./lib/memdb');

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

app.get('/persons', function(req, res) {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(dao.getAll()));
});

app.post('/persons', function(req, res) {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(dao.add(req.body)));
});

app.get('/persons/:id', function(req, res) {
    var found = dao.get(req.params.id);
    if (found) {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(found));
    } else {
        res.status(404).send('The object with the id ' + req.params.id + ' does not exist.');
    }
});

app.del('/persons/:id', function(req, res) {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(dao.remove(req.params.id)));
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

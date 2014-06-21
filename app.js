var express = require('express');
var app = express();
var dao = require('./lib/memdb');

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

app.get('/test/:name', function(req, res) {
    res.send('Hello ' + req.params.name);
});

app.post('/add', function(req, res) {
    var x = req.body.x;
    var y = req.body.y;
    var result = {
        sum: x + y
    };
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(result));
});

app.get('/persons', function(req, res) {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(dao.getAll()));
});

app.post('/persons', function(req, res) {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(dao.add(req.body)));
});

app.get('/persons/:id', function(req, res) {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(dao.get(req.params.id)));
});

app.del('/persons/:id', function(req, res) {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(dao.remove(req.params.id)));
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

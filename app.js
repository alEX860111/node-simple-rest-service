var express = require('express');
var app = express();

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

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

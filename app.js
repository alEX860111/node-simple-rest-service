var connect = require("connect");
var connectRoute = require("connect-route");
var app = connect();

app.use(connect.static(__dirname + "/public"));

app.use(connect.bodyParser());

app.use(connectRoute(function(router) {
    router.get("/hello/:firstName/:lastName", function(req, res) {
        var userName = req.params.firstName + " " + req.params.lastName,
            html = "<!doctype html>" +
                "<html><head><title>Hello " + userName + "</title></head>" +
                "<body><h1>Hello, " + userName + "!</h1></body></html>";
        res.end(html);
    });
    router.post("/add", function(req, res) {
        var x = req.body.x;
        var y = req.body.y;
        var result = {
        	sum: x+y
        };
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(result));
    });
}));

app.listen(8000);
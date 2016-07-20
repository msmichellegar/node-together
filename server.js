var port = "8000";
var host = "0.0.0.0";

var Express = require("express");
var app = Express();

var routes = require("./app");

app.use(routes);

app.listen(port, host);

console.log("server is running yay");

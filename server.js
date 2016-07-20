var port = process.env.PORT || "8000";
var host = process.env.HOST || "0.0.0.0";

var Express = require("express");
var app = Express();

var routes = require("./app");

app.use(routes);

app.listen(port, host);

console.log("server is running yay");

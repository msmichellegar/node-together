var Express = require("express");
var app = Express();

app.get("/hello", function(request, response) {
    console.log("request to /hello");
    response.send("hello!");
});

module.exports = app;

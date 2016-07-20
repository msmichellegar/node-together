var Express = require("express");
var app = Express();

var motivations = require("motivations");
var pickOne = require("pick-one");

app.get("/", function(request, response) {
    console.log("request to /hello");
    var motivation = pickOne(motivations);
    response.send(motivation);
});

module.exports = app;

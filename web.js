var express = require("express");
var app = express();
app.use(express.logger());
app.use("/", express.static(__dirname));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


// var express = require('express');
// var port = process.env.PORT || 3000;
// var app = express.createServer();
 
// app.get('/', function(request, response) {
//     response.sendfile(__dirname + '/index.html');
// }).configure(function() {
//     app.use('/images', express.static(__dirname + '/images'));
// }).listen(port);
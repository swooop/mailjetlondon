var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var path = require('path');

var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');
var serveStatic = require('serve-static')









var app = express();
app.use(express.logger());
app.use("/", serveStatic(__dirname));

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
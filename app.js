var express = require("express");
var app = express();
var server = require('http').createServer(app);


app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

server.listen(3000);

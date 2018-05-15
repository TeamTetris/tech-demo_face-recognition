var express = require('express');
var server = express();

// Set directory for static files
server.use(express.static('static'));

server.listen(3000, function () {
  console.log('Server listening on localhost:3000.');
});
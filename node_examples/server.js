var express = require('express');
var server = express();

// Set directory for static files
server.use('/camera', express.static('camera'));
server.use('/face-analysis', express.static('face-analysis'));

server.listen(3000, function () {
  console.log('Server listening on localhost:3000.');
});
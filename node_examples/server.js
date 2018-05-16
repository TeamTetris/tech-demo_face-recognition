var express = require('express');
var request = require('request');

var server = express();

// Set directory for static files
server.use('/camera', express.static('camera'));
server.use('/face-analysis', express.static('face-analysis'));

// CORS API proxy
server.use('/api/face-analysis', function(req, res) {
  if(req.method !== 'POST') {
    return;
  }
  
  var url = 'https://api-us.faceplusplus.com/facepp/v3/detect';
  var response = request.post({uri: url, json: req.body});

  req.pipe(response).pipe(res);
});

server.listen(3000, function () {
  console.log('Server listening on localhost:3000.');
});
'use strict';

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('12312312312');
}).listen(8888);


console.log('server running');

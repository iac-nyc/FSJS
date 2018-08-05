var http = require('http');

//create a server object:
http.createServer(function (request, response) {
  response.write('Before End\n'); //write a response to the client
  response.end('Hello world\n'); //end the response
  response.write('After the End');
}).listen(3000);
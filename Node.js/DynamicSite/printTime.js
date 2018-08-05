var http = require('http');

//create a server object:
http.createServer(function (request, response) {
  setInterval(function(){
     response.write(new Date() + '\n'); 
  },1000);
 
  //response.end('Hello world\n'); //end the response

}).listen(3000);
console.log("Print time");
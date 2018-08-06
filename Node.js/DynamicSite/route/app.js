

let router = require("./router.js");

//1. Create a web server
let http = require('http');

//create a server object:
  http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);  

}).listen(3000);
console.log("Server Running at http://<workspace>");

























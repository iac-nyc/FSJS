//Problem: search for user badge & JavaScript point
//Solution: Node.js perform the profile look ups and server out template via HTTP

let router = require("./router.js");

//1. Create a web server
let http = require('http');

//create a server object:
  http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);  

}).listen(3000);
console.log("Server Running at http://<workspace>");



//4. Funcion that handles reading of file and merge value
// read from a file and get a string
// merge values in to a string






















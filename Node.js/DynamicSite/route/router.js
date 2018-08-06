//2. Handle HTTP route GET / and POST / i.e. Home
function homeRoute(request, response){
  
  // if url =="/" && GET
  if(request.url === '/'){
      //show search
 //if url == "/" && POST
    //redirect to /:username
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header \n"); 
    response.write("Search\n"); 
    response.end("Footer \n"); 
  }
 
}

//3. Handle HTTP route GET /:username i.e. /iftekhar.
function userRoute(request, response){
  //if url ="/..."
  let username =request.url.replace("/","");
  if(username.length > 0){
      response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header \n"); 
    response.write(username +"\n"); 
    response.end("Footer \n"); 
    //get json from Treehouse
      //on "end"
        //show Profile
     //one "error"
        //show error
  }
}

module.exports.home = homeRoute;
module.exports.user = userRoute;
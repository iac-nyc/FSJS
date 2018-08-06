let Profile = require("./profile.js");

//2. Handle HTTP route GET / and POST / i.e. Home
function homeRoute(request, response){
  
  // if url =="/" && GET
  if(request.url === '/'){
      //show search
 //if url == "/" && POST
    //redirect to /:username
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header \n"); 
    response.write(" Search\n"); 
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
    
    //get JSON from Treehouse
    let studentProfile = new Profile(username);
    
    
      //on "end"
      studentProfile.on("end", function(profileJSON){
       //show Profile
        //store the values
        let values = {
          avatarUrl: profileJSON.gravatar_url,
          username: profileJSON.profile_name,
          badges: profileJSON.badges.length,
          javascriptPoints: profileJSON.points.JavaScript
          
        }
        // simple response
          response.write(values.username +" has " + values.badges + " badges.\n"); 
          response.end("Footer \n"); 
        
      });
         //one "error"
        
    studentProfile.on("error", function(error){
      //show error
      response.write(error.message +"\n");
       response.end("Footer \n"); 
    
    });   
  
        
  }
}

module.exports.home = homeRoute;
module.exports.user = userRoute;
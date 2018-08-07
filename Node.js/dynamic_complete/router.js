let Profile = require("./profile.js");
let renderer = require("./renderer.js");
const querystring = require('querystring');
let commonHeaders = {'Content-Type': 'text/html'};

//2. Handle HTTP route GET / and POST / i.e. Home
function homeRoute(request, response){
  
  // if url =="/" && GET
  if(request.url === '/'){
    if(request.method.toLowerCase() === "get"){
      //show search

      response.writeHead(200, commonHeaders );
      renderer.view("header", {}, response); 
      renderer.view("search", {}, response); 
      renderer.view("footer", {}, response); 
      response.end();
    }else {
       //if url == "/" && POST
      //get the post data from body
      request.on("data", function (postBody){
        let body = "" + postBody;    
       //extract the username   
        let query = querystring.parse(postBody.toString());
          //redirect to /:username
        response.writeHead(303, {"location":"/" + query.username});
        response.end();  
       
     });
    }
  }
 
}

//3. Handle HTTP route GET /:username i.e. /iftekhar.
function userRoute(request, response){
  //if url ="/..."
  let username =request.url.replace("/","");
  if(username.length > 0){
      response.writeHead(200, commonHeaders);
    renderer.view("header",{},response); 
    
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
          renderer.view("profile",values, response); 
          renderer.view("footer", values, response); 
          response.end();
        
      });
         //one "error"
        
    studentProfile.on("error", function(error){
      //show error
      renderer.view("error",{errorMessage: error.message}, response);
      renderer.view("search", {}, response);
       renderer.view("footer",{}, response); 
      response.end();
    
    });   
  
        
  }
}

module.exports.home = homeRoute;
module.exports.user = userRoute;
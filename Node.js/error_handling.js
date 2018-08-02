// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out


// Require https
const https = require('https');


//Function to print message to console
function printMessage(username, badgeCount, points){
 const message =  `${username} has ${badgeCount} total badges and ${points} points in JavaScript`;
  console.log(message);
  
}

function getProfile(username){


// Connect to the API URL(https://teamtreehouse.com/username.json)
  try {

      const request = https.get(`https://teamtreehouse.com/${username}.json`,response => {
        //console.dir(response);
      //console.log(response.statusCode);
        let body ="";
      // Read the Data
        response.on('data', data => {
          body += data.toString();
        
        });
        response.on('end', () => {
                    // Parse the Data
                    const profile = JSON.parse(body);
     
                    printMessage(username, profile.badges.length, profile.points.JavaScript);
                    });
      
      
      });
      
      //Error Handling
      request.on('error', error => console.error(`Problem with request: ${error.message}`));
  }catch(error){
    console.log(error.message);
  
  }
}// end getProfile



const users =process.argv.slice(2);
users.forEach(getProfile);




























// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out


// Require https
const https = require('https');
//const username = 'iftekharchowdhury';

//Function to print message to console
function printMessage(username, badgeCount, points){
 const message =  `${username} has ${badgeCount} total badges and ${points} points in JavaScript`;
  console.log(message);
  
}

function getProfile(username){


// Connect to the API URL(https://teamtreehouse.com/username.json)

const request = https.get(`https://teamtreehouse.com/${username}.json`,response => {
  //console.dir(response);
//console.log(response.statusCode);
  let body ="";
// Read the Data
  response.on('data', data => {
    body +=('data:', data.toString());
  
  });
  response.on('end', () => {
              // Parse the Data
              const profile = JSON.parse(body);
//              console.log(body);
//              console.log(typeof body);
              //console.dir(profile);
              // Print the Data
              printMessage(username, profile.badges.length, profile.points.JavaScript);
              });


});
}// end getProfile
//getProfile('cjmarchione');
//getProfile('iftekharchowdhury');

const users =['cjmarchione','iftekharchowdhury','chalkers','davemcfarland'];



//users.forEach(username => {
//  getProfile(username);
//});

users.forEach(getProfile);


























/*
// ** Default function parameters **

// To create a default parameter, need to add an equal sign ( = ) and 
// then whatever you want the parameter to default to if an argument is not provided. 
// In the code below, both parameters have default values of strings, but they can be any JavaScript type!

*/


function greet(name = 'Student', greeting = 'Welcome') {
  return `${greeting} ${name}!`;
}

greet(); // Welcome Student!
greet('James'); // Welcome James!
greet('Richard', 'Howdy'); // Howdy Richard!



/*
 * Programming Quiz: Using Default Function Parameters (2-2)
 */


function buildHouse({floors = 1, color = 'red', walls='brick'} = {}) {
    
  return `Your house has ${floors} floor(s) with ${color} ${walls} walls.`;
    
}

console.log(buildHouse()); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({})); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({floors: 3, color: 'yellow'})); // Your house has 3 floor(s) with yellow brick walls.


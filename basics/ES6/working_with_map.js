/*
use the .has() method to check if a key-value pair exists in your Map by passing it a key.
*/


const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

console.log(members.has('Xavier'));
console.log(members.has('Marcus'));
// false
// true




/*
retrieve values from a Map, by passing a key to the .get() method.
*/

console.log(members.get('Evelyn'));
// 75.68
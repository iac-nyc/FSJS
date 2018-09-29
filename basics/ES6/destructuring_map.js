/*
 * Using array destructuring,  the following code to print the keys and values of the `members` Map to the console.
 */

const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

for (const member of members) {
    [key,value]=member;
    console.log(...member);
}

// Evelyn 75.68
// Liam 20.16
// Sophia 0
// Marcus 10.25

/*
using forEach
*/
members.forEach((value, key) => console.log(key, value));


/*
 Evelyn 75.68
 Liam 20.16
 Sophia 0
 Marcus 10.25
*/

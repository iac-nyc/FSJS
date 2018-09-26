/*
    size property to return the number of items in a Set
    Sets can’t be accessed by their index like an array, so you use the .size property instead of .length property to get the size of the Set.
*/

const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
console.log(months.size);
// 12


/* Use the .has() method to check if an item exists in a Set. If the item is in the Set, then .has() will return true. 
    If the item doesn’t exist in the Set, then .has() will return false.
    */

console.log(months.has('September'));
// true

/*
.values() method to return the values in a Set. The return value of the .values() method is a SetIterator object.

The .keys() method will behave the exact same way as the .values() method by returning the values of a Set within a new Iterator Object. 
The .keys() method is an alias for the .values() method for similarity with maps.

*/

console.log(months.values());
// SetIterator {'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'}

/*Using a for...of Loop
An easier method to loop through the items in a Set is the for...of loop.
*/

const colors = new Set(['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'brown', 'black']);
for (const color of colors) {
  console.log(color);
}

/*
red 
orange 
yellow 
green 
blue 
violet 
brown 
black
*/
/**********************
A closure refers to the combination of a function and 
the lexical environment in which that function was declared
*******************************************/

/*

Declare a function named `expandArray()` that:

* Takes no arguments
* Contains a single local variable, `myArray`, which points to [1, 1, 1]
* Returns an anonymous function that directly modifies `myArray` by
  appending another `1` into it
* The returned function then returns the value of `myArray`

*/

function expandArray() {
  const myArray = [1, 1, 1];
  
  return function() {
     let num=1;
    myArray.push(num);
    return myArray;
  }
}

let expandedArray = expandArray();

console.log(expandedArray());
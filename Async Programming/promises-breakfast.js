/*
  Promises States:
  1. Pending - default state
  2. Fulfilled - operation successful
  3. Rejected - operation failed
*/

const breakfastPromise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve('Your breakfast is ready. Come and get it.');

    }, 3000);
});
console.log(breakfastPromise);

breakfastPromise.then( msg => console.log(msg));

// Output
// Promise { <pending> }
// Your breakfast is ready. Come and get it.

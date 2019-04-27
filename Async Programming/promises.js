/*
  Promises States:
  1. Pending - default state
  2. Fulfilled - operation successful
  3. Rejected - operation failed
*/
function addFive(n) {
  return n + 5;
}
function double(n) {
  return n * 2;
}
function finalValue(nextValue) {
  console.log(`The final value is ${nextValue}`);
}

const mathPromise = new Promise( (resolve, reject) => {
  setTimeout( () => {
    // resolve promise if 'value' is a number; otherwise, reject it
    if (typeof value === 'number') {
      resolve(value);
    } else {
      reject('You must specify a number as the value.')
    }
  }, 1000);
});
const value = 5;
mathPromise
  .then(addFive)
  .then(double)
  .then(finalValue)
  .catch( err => console.log(err) );


// Promise {<pending>}__proto__: Promise[[PromiseStatus]]: "resolved"[[PromiseValue]]: undefined
// The final value is 20

/*
const value = '5';
mathPromise
  .then(addFive)
  .then(double)
  .then(finalValue)
  .catch( err => console.log(err) );

Promise {<pending>}
You must specify a number as the value.

*/

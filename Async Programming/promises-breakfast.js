/*
  Promises States:
  1. Pending - default state
  2. Fulfilled - operation successful
  3. Rejected - operation failed
*/
const order = false;
const breakfastPromise = new Promise((resolve, reject) => {
    setTimeout(()=> {
       if(order){
           resolve('Your breakfast is ready. Come and get it.');
       } else {
            reject( Error('Oh no! An error occured with your order.'));
       }
       

    }, 3000);
});
console.log(breakfastPromise);

breakfastPromise
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

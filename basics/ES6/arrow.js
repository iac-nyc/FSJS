/*
    Arrow functions are always expression.
*/


const greet = name => `Hello ${name}!`;
greet('Asser');
// "Hello Asser!"

// empty parameter list requires parentheses
const sayHi = () => console.log('Hello Udacity Student!');
sayHi(); // Hello Udacity Student!


// multiple parameters requires parentheses
const orderIceCream = (flavor, cone) => console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);
orderIceCream('chocolate', 'waffle'); //Here's your chocolate ice cream in a waffle cone.





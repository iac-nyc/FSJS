const strings = ['1','2','3','4','5'];
const numbers = strings.map(string => parseInt(string, 10));

console.log(numbers);
/*=================*/
const fruits = ['apple', 'pear', 'cherry'];
const upCase = fruits.map(fruit => fruit.toUpperCase());

console.log(upCase);
/*=================*/

const prices = [5, 4.23, 6.4, 8.09, 3.20];// Result: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ]
const priceToDollars = price => `$${price.toFixed(2)}`;

const currency = prices.map(priceToDollars);
console.log(currency);




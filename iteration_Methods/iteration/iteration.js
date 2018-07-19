const fruits = ['apple', 'pear', 'cherry'];

for(let i=fruits.length-1;i>=0; i--){
  console.log(fruits[i]);
}
console.log("======");

fruits.forEach(fruit => console.log(fruit));

console.log("======");

let uppercaseFruits = [];

fruits.forEach(fruity => {
  let capitalizedFruit = fruity.toUpperCase();
  
  uppercaseFruits.push(capitalizedFruit);

});

console.log(uppercaseFruits);
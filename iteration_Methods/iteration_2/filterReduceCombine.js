const products = [
  { name: 'hard drive', price: 59.99 },
  { name: 'lighbulbs', price: 2.59 },
  { name: 'paper towels', price: 6.99 },
  { name: 'flatscreen monitor', price: 159.99 },
  { name: 'cable ties', price: 19.99 },
  { name: 'ballpoint pens', price: 4.49 }
];

    // Result: { name: 'paper towels', price: 6.99 }

const product = products
.filter(product => product.price < 10)
.reduce((highest, product)=>{
  if(highest.price > product.price){
    return highest;
  }else{
    return product;
    }

});
console.log(product);


const total = products
.filter(product=>product.price > 10)
.reduce((sum,product) => sum + product.price,0)

.toFixed(2);// last 0 is the second argument and toFixed is to reduce the number of zeros at the end

console.log(total);
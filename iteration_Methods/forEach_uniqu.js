const numbers = [1, 1, 2, 3, 4, 3, 5, 5, 6, 7, 3, 8, 9, 10,10];

const unique = numbers.filter(function(number, index, array) {
  return index === array.indexOf(number);
});

console.log(unique); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
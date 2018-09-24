/*
**
Concise body syntax:
    - has no curly braces surrounding the function body
    - automatically returns the expression
*/


const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
  name => name.toUpperCase()
);
console.log(upperizedNames);
//(3) ["FARRIN", "KAGURE", "ASSER"]

/*
**
Block body syntax:
    - Uses curly braces to wrap the function body
    - A return statement needs to be used to actually return something from the function
*/


const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map( name => {
  name = name.toUpperCase();
  return `${name} has ${name.length} characters in their name`;
});

// ["FARRIN has 6 characters in their name", "KAGURE has 6 characters in their name", "ASSER has 5 characters in their name"]
const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];

    // Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];
const users= userNames
  .filter(name => name.charAt(0)==='S')
  .map(name => ({name}));

console.log(users);

/*=====================*/

const newUsers = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 42},
  {name: 'Shaniqua', age: 30},
  {name: 'Marvin', age: 23},
  {name: 'Sean', age: 47}
];

    // Result: ['Angela', 'Beatrice', 'Shaniqua', 'Sean'];

const newUser = newUsers
  .filter(user=> user.age >= 30)
  .map(user =>user.name);
console.log(newUser);
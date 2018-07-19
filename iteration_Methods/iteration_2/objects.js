const arr = [1,2,3];

const smallerArr = arr
.filter(number => number !== 2)
.map(number => number + 1);

//const incrementedArr = smallerArr.map(number => number + 1);

//console.log(incrementedArr); // => [2,4]
console.log(smallerArr);


const users =[
    {name: 'Sara',age:27},
    {name: 'Sandy',age:37},
    {name: 'Sean',age:47}
];
const newUserArray = users.filter(user=> user.name !== 'Sara');

const userMap= users.map(user=> `${user.name} is ${user.age} years old`);

const userObject = users.reduce((userObject,user) =>{
  userObject[user.name] = user.age;
  return userObject;
}, {});

console.log(newUserArray);
console.log(userMap);
console.log( userObject);

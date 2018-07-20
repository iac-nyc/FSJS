const customers = [
  {
    name: "Tyrone",
    personal: {
      age: 33,
      hobbies: ["Bicycling", "Camping"]
    }
  },
  {
    name: "Elizabeth",
    personal: {
      age: 25,
      hobbies: ["Guitar", "Reading", "Gardening"]
    }
  },
  {
    name: "Penny",
    personal: {
      age: 36,
      hobbies: ["Comics", "Chess", "Legos"]
    }
  }
];
let hobbies;

// hobbies should be: ["Bicycling", "Camping", "Guitar", "Reading", "Gardening", "Comics", "Chess", "Legos"]
// Write your code below
hobbies=customers
.map(customer => customer.personal.hobbies.map(hobby => hobby))
.reduce((arr, hobbies) => [ ...arr, ...hobbies], [] );

console.log(hobbies);

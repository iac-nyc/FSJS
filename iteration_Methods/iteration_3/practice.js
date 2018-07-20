const arr=[1,2,4,5,10,55,66];
const smallerArray = arr
      .filter(number => number !==10)
      .map(number => number * 10);

console.log(smallerArray);

//==================//
const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let displayYears;

// displayYears should be: ["2015 A.D.", "2013 A.D.", "2012 A.D."]

displayYears=years.filter(year => year>=2001)
								  .map(year => year + ' A.D.');
console.log(displayYears);
//=======================//
const authors = [
  { firstName: "Beatrix", lastName: "Potter" },
  { firstName: "Ann", lastName: "Martin" },
  { firstName: "Beverly", lastName: "Cleary" },
  { firstName: "Roald", lastName: "Dahl" },
  { firstName: "Lewis", lastName: "Carroll" }
];
let fullAuthorNames;

// fullAuthorNames should be: ["Beatrix Potter", "Ann Martin", "Beverly Cleary", "Roald Dahl", "Lewis Carroll"]

fullAuthorNames= authors.map(authors=> `${authors.firstName} ${authors.lastName} `);
console.log(fullAuthorNames);
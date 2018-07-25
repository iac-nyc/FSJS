'use strict';

function myFunction (name, movies) {
  console.log(`${name} really likes ${movies} movies.`)
}

let args=['Iftekhar','James Bond'];

myFunction(...args);
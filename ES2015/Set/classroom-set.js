/* Set - collection of unique values */

'use strict';

let classroom = new Set();

let stevenJ = { name: 'Steven', age: 22},
    sarahC = { name: 'Sarah', age: 34},
    stevenS = { name: 'Steven', age: 22},    
    jamesJ = stevenJ; // referencing

classroom.add(stevenJ);
classroom.add(sarahC);
classroom.add(stevenS);
// these two will not be counted
classroom.add(sarahC);
classroom.add(sarahC);


if(classroom.has(sarahC)) console.log('Sarah in the classroom');
if(classroom.has(stevenJ)) console.log('StevenJ in the classroom');
if(classroom.has(stevenS)) console.log('StevenS in the classroom');
if(classroom.has(jamesJ)) console.log('jamesJ in the classroom');

console.log('Classroom size: ', classroom.size);

classroom.delete(sarahC);
console.log('Classroom size: ', classroom.size);


// Create an array of students from the classroom set

let arrayOfStudents = Array.from(classroom);
console.log(arrayOfStudents);

// Create a Set from an existing array

let alumni = new Set(arrayOfStudents);
console.log('alumni size: ', alumni.size);
























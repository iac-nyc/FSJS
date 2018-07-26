'use strict';

let myNumbers = [1,2,3,4,5,6];
/* 
for (let i = 0; i < myNumbers.length; i++) {
  console.log(myNumbers[i]);
}
**/

//ES2015 
for(let numbers of myNumbers){
   console.log(numbers);
  if(numbers ===3){
    break;
  }
   
}
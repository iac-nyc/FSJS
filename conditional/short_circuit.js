/*Short Circuit: Stopping code execution as soon as possible */


console.log(3===3 && 'a'==='a');  //will return true
console.log(3===3 && 'Bull');  //will return Bull
console.log(3===3 && false);  //will return false
console.log(3===3 && 'Bull' && 'Chicken');// return Chicken
console.log(3===3 && 'Bull' && false); //will return false


/* Short Circuit */
console.log(3===3 && false && 'Bull' && 'Chicken'); // false - Everything after false is short_circuited

console.log('Bull' || 3===3 || 'cow' || 'chicken'); //return Bull
console.log( 3===3 || 'cow' || 'chicken'); //return true
console.log( 3===9 || 'cow' || 'chicken'); //return cow
console.log( 3===9 || false || 'chicken'==='cow' || 0); //return 0

/*
function isAdult(age){
  if(age && age>=18){
    return true;
  }else {
     return false;
  }
}

console.log(isAdult(5));
*/

/*Short Circuit*/
function isAdult(age){
  return age && age>=18;
}
console.log(isAdult(15));




function countToFive(start=1){ 
  for(var i= start; i<=5; i++){
    console.log(i);
  }

}
countToFive(0);//0 will work only if we assign a default value at declaration


function greet(name){
  name && console.log('Hi, ' + name + '!');

}
greet("Iftekhar"); // if we don't provide a name nothing will happen











































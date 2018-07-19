const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin']; 
/** one way =====================
==========================/

const sName=names.filter(name => {
  if(name.charAt(0) === 'M'){
    return true;
  }else {
    return false;
  }

});

***/

/* Another way ================
=============================/
const sName = names.filter(name => name.charAt(0) === 'S');

*/

/* Another way ==============*/

const startWithS = name => name.charAt(0) ==='S';
const sName = names.filter(startWithS);
console.log(sName);

const numbers = [1,2,3,4,5,6];
const no3 = numbers.filter(number => number !==3);
console.log(no3);

const num=[1,2,3,4,5,6,7,8,9,10];
const numEven = num.filter(n => n % 2===0);
console.log(numEven);



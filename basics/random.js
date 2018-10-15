function getRandomNumber (lower, upper){
    if(isNaN(lower) || isNaN(upper)){
       throw new Error( "Error !!! Pleae make sure your input is a number");
       }
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
console.log( getRandomNumber('nine',100) );
console.log( getRandomNumber(1000,2000)  );
console.log( getRandomNumber(5000,50000) );

/*
Loop through the numbers 1 to 20
If the number is divisible by 3, print "Fizz"
If the number is divisible by 5, print "Buzz"
If the number is divisible by both 3 and 5, print "FizzBuzz"
If the number is not divisible by 3 or 5, print the number
*/
 
var x = 1;

while (x<=20) {
  
    if (x % 3 === 0 && x % 5 === 0){
     console.log(x + ": FizzBuzz");
    }
    else if (x % 3 === 0){
        console.log(x + ":Fizz");
    }else if (x % 5 === 0){
        console.log(x + ":Buzz");
    }else{ 
    console.log(x);
    
    }
    x+=1;
}
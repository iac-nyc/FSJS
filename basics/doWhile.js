var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess=false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}

do{
  guess=prompt('I am guessing a number between 1 and 10');
  guessCount +=1;
  if(parseInt(guess)===randomNumber){
    correctGuess=true;
  
  }


}while(!  correctGuess )
document.write('<h1> It took ' + guessCount + '  guess to get the right number  ' + randomNumber);

/*
////break
///
var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}

while (guessCount<5 ){
  guess = prompt('I am thinking of a number between 1 and 10. What is it?');
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
    break;
  }  
} 
 if(correctGuess){ 
   document.write('<h1>You guessed the number!</h1>');
   document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);
 }else{
   document.write("Sorry, you didn't get it right !");
 }






*/
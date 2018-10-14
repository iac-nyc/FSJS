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
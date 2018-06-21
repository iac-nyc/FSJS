var randm = Math.floor(Math.random() *6)+1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

if(parseInt(guess)=== randm){
  document.write('<h1> You guessed the number right  ' + randm +'</h1>');
}else{
  document.write('<h1> Sorry. The number was:  ' + randm +'</h1>');
}



/*Using Boolean*/
var correctGuess = false;

var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomNumber ) {
  correctGuess = true;
}
if(correctGuess ){//===true
    document.write('<p>You guessed the number!</p>');
} else {
    document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}

//improved
var correctGuess = false;

var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomNumber ) {
  correctGuess = true;
}else if(parseInt(guess)<randomNumber){
  var guessMore = prompt('Try again. The number is higher than ' + guess);
    if(parseInt(guessMore)===randomNumber){
    correctGuess=true;
  }
  
}else if(parseInt(guess)>randomNumber){
   var guessLess = prompt('Try again. The number is higher than ' + guess);
    if(parseInt(guessLess)===randomNumber){
    correctGuess=true;
  }
  
}

if(correctGuess ){//===true
    document.write('<p>You guessed the number!</p>');
} else {
    document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}
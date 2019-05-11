/*
Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.

Note: The function accepts an integer and returns an integer

*/

function squareDigits(num){
  //may the code be with you
var strNum = String(num);
  var newNum ='';
  
  for (i=0; i<=strNum.length-1 ;i++){
    newNum += strNum[i]*strNum[i];
  }
  
  return Number(newNum);

  
}
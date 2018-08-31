function addToTen(num) {
  return 10 + num;
}
const arrowAddToTen = num => 10 + num;


function divideUs(num1, num2) {
  return num1/num2;
}
const arrowDivide =(num1,num2) => num1/num2;


function printMyName() {
  return myName = 'Iftekhar';
	console.log(myName);
}
const arrowPrintName = () => {
  return myName = 'Iftekhar';
  console.log(myName);
}



console.log(arrowAddToTen(5));
console.log(arrowDivide(5,2));
console.log(addToTen(5));
console.log(divideUs(4,2));
console.log(printMyName());
console.log(arrowPrintName());
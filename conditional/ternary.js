/*
var isTrue = true;

if(isTrue) {
	console.log('yes');
} else {
	console.log('no');
}
**/


//Ternary operator
var isTrue = true;
isTrue?console.log('Yes True'):console.log('No False');

console.log('**********************');
var notTrue = false;
var yesOrNo = notTrue? 'itsTrue' : 'itsFalse';
console.log(yesOrNo);
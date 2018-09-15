function reverseString(myString){
	let reversed ='';
for(let i=myString.length-1; i>=0;i--){
	reversed+=myString[i];
}
return reversed;
}
console.log(reverseString('IFTEKHAR AHMAD CHOWDHURY'));
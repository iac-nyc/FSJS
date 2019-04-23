// Problem: Giving an array of N integers, print the sum of the array’s elements as a single integer. 



// Solution 1:

var arr = [20, 25, 30, 45, 100];
var sum = 0;

for(var i = 0; i < arr.length; i++){
	sum += arr[i];
}
console.log(sum);  // OUTPUT : 220


// Solution 2:

var arr = [20, 25, 30, 45, 100];

function add(a, b){
	return a + b;
}

var sum = arr.reduce(add, 0);
console.log(sum);  // OUTPUT : 220



// Solution 3:


var arr = [20, 25, 30, 45, 100];

var sum = arr.reduce((a, b) => (a + b), 0);
console.log(sum);  // OUTPUT : 220
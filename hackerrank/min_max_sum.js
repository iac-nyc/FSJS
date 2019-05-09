/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers.

For example, [1,3,5,7,9]. Our minimum sum is 1+3+5+7=16  and our maximum sum is 3+5+7+9=24 . We would print

16 24
*/


let arr = [1,2,3,4,5];
function miniMaxSum(arr) {   

  var arr1 = arr.slice(); 
  var arr2 = arr.slice(); 

  var arrMin = arr1.sort(function(a, b){return a - b;})
  arrMin.pop();

  var arrMax = arr2.sort(function(a, b){return b - a;})
  arrMax.pop();

  function getSum(a, b) {
    return a + b;
  }

  var min = arrMin.reduce(getSum); 
  var max = arrMax.reduce(getSum);    

  console.log(`${min} ${max}`);
    
}
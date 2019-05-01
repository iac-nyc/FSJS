/*
** Diagonal Difference

Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

11  2  4
4   5  6
10  8  -12  
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .



var arr =[[11, 2, 4], [4, 5, 6], [10, 8, -12 ]];
Sample Output 15

*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
    let primary = 0;
    let secondary = 0;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {

            // finding sum of 'primary' diagonal
            if (i == j) {
                primary = primary + arr[i][j];
            }

            // finding sum of 'secondary' diagonal
            if (i == arr.length - j - 1) {
                secondary = secondary + arr[i][j];
            }
        }
    }
    // Math.abs to return absolute value
    return Math.abs(primary - secondary);


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}

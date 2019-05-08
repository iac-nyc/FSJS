/*
Consider a staircase of size n = 4:

   #
  ##
 ###
####
Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .Print a staircase of size  using # symbols and spaces.
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the staircase function below.
function staircase(n) {
    var line = Array(n + 1).fill(' ');
    line[n] = '\n';
    for (var i = n - 1; i >= 0; i--) {
        line[i] = '#';
        process.stdout.write(line.join(''));
    }


}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}

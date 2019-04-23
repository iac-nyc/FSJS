/*
Problem: Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

We define the rating for Alice’s challenge to be the triplet A=(a[0], a[1], a[2]) and the rating for Bob’s challange to be the triplet B=(b[0], b[1], b[2]).

The task to to find the comparison points by comparing a[0] with b[0], a[1] with b[1] and a[2] with b[2].

if a[i] > b[i] then Alice is awarded 1 point.
if a[i] < b[i] then Bob is awarded 1 point.
if a[i] = b[i] neither of them receives a point.
Comparison points is the total points a person earned.

Given a and b determine their respective comparison points.


*/



'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a, b) {

    var finalArr = [0, 0];

    for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            finalArr[0]++;
        } else if (a[i] < b[i]) {
            finalArr[1]++;
        }
    }
    return finalArr;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}

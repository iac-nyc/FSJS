/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

Function Description

It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

s: a string representing time in  hour format

Sample Input: 07:05:45PM

Sample Output: 19:05:45
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

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
   
    const arr = s.slice(0, 8).split(':');
    arr[0] = (s.indexOf('PM') > -1) ?
        (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
        (arr[0] == 12 ? '00' : arr[0]);
    return arr.join(':');
    
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}

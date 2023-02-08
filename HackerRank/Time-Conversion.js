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

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let [hh,mm,ss] = s.slice(0, -2).split(':')
    const meridian = s.slice(-2)
    if(meridian === 'AM' && hh === '12') return `00:${mm}:${ss}`;
    if(meridian === 'AM') return `${hh}:${mm}:${ss}`; 
    if(meridian === 'PM' && hh === '12') return `${hh}:${mm}:${ss}`
    if(meridian === 'PM') return `${+hh + 12}:${mm}:${ss}`
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}

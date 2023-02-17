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
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
    let changedLetters = 0;
    const letters = s.split('')
    for(let i = 0; i < s.length - 2; i += 3){
        if(letters[i] !== 'S') changedLetters++; 
        if(letters[i + 1] !== 'O') changedLetters++;
        if(letters[i + 2] !== 'S') changedLetters++;  
    }
    return changedLetters;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = marsExploration(s);

    ws.write(result + '\n');

    ws.end();
}

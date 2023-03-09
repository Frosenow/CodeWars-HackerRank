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
 * Complete the 'closestNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function closestNumbers(arr) {
    const pairs = {}
    const sorted = arr.sort((a, b) => a - b)
    
    for(let i = 0; i < sorted.length - 1; i++){
        let min = Math.abs(sorted[i] - sorted[i + 1])
        if(!pairs[min]){
            pairs[min] = []; 
        } 
        pairs[min].push(sorted[i], sorted[i + 1])
    }
    const minKey = Math.min(Number(...Object.keys(pairs)))
    return pairs[minKey]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = closestNumbers(arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}

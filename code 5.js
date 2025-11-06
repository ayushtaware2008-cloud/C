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
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY stringList
 *  2. STRING_ARRAY queries
 */

function matchingStrings(stringList, queries) 
{
    const freqMap={};
    for(let str of stringList){
        if (freqMap[str]){
            freqMap[str]++;
        }
        else{
            freqMap[str]=1;
        }
    }
    const result=[];
    for(let q of queries){
        result.push(freqMap[q] || 0);
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const stringListCount = parseInt(readLine().trim(), 10);

    let stringList = [];

    for (let i = 0; i < stringListCount; i++) {
        const stringListItem = readLine();
        stringList.push(stringListItem);
    }

    const queriesCount = parseInt(readLine().trim(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = readLine();
        queries.push(queriesItem);
    }

    const res = matchingStrings(stringList, queries);

    ws.write(res.join('\n') + '\n');

    ws.end();
}

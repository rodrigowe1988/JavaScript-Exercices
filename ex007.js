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

function multiplicaPorDois(numeros) {
/*
 * Complete a função multiplicando todos os elementos
 * do array `numeros` por dois e retornando um array
 * com esses resultados
 */
    var resultados = [];
    
    for(var i = 0; i < numeros.length; i++){
        var elementos2X = numeros[i] * 2;
        resultados.push(elementos2X);
 }
 return resultados;
}
// fim do seu código
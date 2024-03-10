const prompt = require("prompt-sync")()

//Elaborar um programa que leia um número, Mostre o número par seguinte a este número
const num = +prompt("Me dê um número e direi o par mais próximo: ")

const par = (num % 2) == 0 ? num + 2 : num + 1

console.log(`Número: ${num}\nPar: ${par}`)
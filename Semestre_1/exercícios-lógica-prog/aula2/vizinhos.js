const prompt = require("prompt-sync")()

/*Elaborar um programa que leia um número. Exiba os vizinhos deste número
(anterior e posterior)*/

const num = +prompt("Me dê um número e direi vizinhos: ")

console.log(`O numero posterior de ${num} é ${num + 1} enquanto o anterior é ${num - 1}`)

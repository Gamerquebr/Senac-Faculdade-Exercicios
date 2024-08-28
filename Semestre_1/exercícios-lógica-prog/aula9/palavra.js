/*1. Elaborar um programa que leia uma palavra e um número. Após, informe a palavra o número
de vezes informado. Exibir * entre as palavras.
*/

const prompt = require("prompt-sync")()

const palavra = prompt("Palavra: ")
const num = prompt("Número: ")

for(let i = 0; i < num; i++){
    if (i < num - 1){
        process.stdout.write(palavra + " * ")
    }
    else{
        process.stdout.write(palavra)
    }
}
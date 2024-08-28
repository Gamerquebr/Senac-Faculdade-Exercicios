/*4. Elaborar um programa que leia um número. Após, faça uma contagem regressiva – conforme o exemplo.*/

const prompt = require("prompt-sync")()

const num = +prompt("Número: ")

console.log("Contagem regressiva: ")

for (let i = num; i > 0; i--){
    console.log(i)
}
console.log("FOGO!!")
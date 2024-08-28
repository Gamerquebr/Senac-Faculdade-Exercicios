/*3. Elaborar um programa que leia um número e informe se ele é ou não é um número primo (divisível
apenas por 1 e ele mesmo)*/

const prompt = require("prompt-sync")()

const num = prompt("Número: ")

for (i = num - 1; i > 1; i--){
    console.log(i)
    if (num % i == 0){
        console.log(`${num} Não é número primo`)
        break;
    }
}


const prompt = require("prompt-sync")()

/* Elaborar um programa que leia leia o valor do saque de um cliente em um terminal de banco*/

const saque = +prompt("Me dê o valor do saque: ")

console.log(`Valor do saque R$: ${saque.toFixed(2)}`)

if (saque % 10 != 0){
    console.log(`Não é possível pagar ${saque.toFixed(2)}`)
}
else{
    console.log(`Você precisa de ${saque / 10} Nota de 10 R$`)
}

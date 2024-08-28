/*1. Elaborar um programa que leia produto e valor. Exiba o valor das parcelas para pagamentos em 1x até 10x,
conforme o exemplo*/

const prompt = require("prompt-sync")()

const produto = prompt("Produto: ")
const preco = prompt("Preço R$: ")

console.log("Opções de Pagamento")
console.log(".".repeat(20))

for(let i = 0; i < 10; i++){
    console.log(`${i + 1} x ${(preco / (i + 1)).toFixed(2)}`)
}

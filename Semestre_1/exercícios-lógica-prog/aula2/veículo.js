const prompt = require("prompt-sync")()

/*Elaborar um programa que leia o valor de um veículo. Mostre a promoção de
financiamento da revenda, que consiste em 50% de entrada e o valor do saldo em
12x*/

const valor = Number(prompt("Me dê o valor do veículo: ")).toFixed(2)
console.log(`A promoção de 50% dá no total: ${(valor * 0.50).toFixed(2)} R$, parcelado em 12 vezes fica ${((valor * 0.50) / 12).toFixed(2)} R$ por parcela`)

const prompt = require("prompt-sync")()

/*Elaborar um programa que leia o valor de um jantar. Sabendo que a taxa do
garçom é de 10%, calcule e mostre a taxa do garçom e o valor total a ser pago.*/

const valor = Number(prompt("Me dê o valor do jantar para calcular a gorjeta: ")).toFixed(2)
const gorjeta = (valor * 0.10).toFixed(2)

console.log(`Do a gorjeta deve ser ${gorjeta} R$, 10% do valor total do jantar ${valor} R$`)

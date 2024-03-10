const prompt = require("prompt-sync")()

/*1. Uma farmácia está com uma promoção: na compra de  2 produtos, os centavos do
valor do produto são descontados. Elaborar um programa que leia descrição e preço
de um produto e exiba a promoção, conforme o exemplo.*/

console.log("Parabéns, você ganhou o desconto de na compra de dois produtos, digite o nome e o valor (com os centavos) do produto!")

let produto = prompt("Me dê o nome do produto: ")
let preço = Number(prompt("Me dê o valor de somente um dos produtos: "))
let desconto = Math.floor(preço) * 2

console.log(`Promoção de ${produto} \nNa compra de 2 unidades, o total é R$ ${desconto.toFixed(2)}`)


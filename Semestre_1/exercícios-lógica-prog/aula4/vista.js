const prompt = require("prompt-sync")()

/* Elaborar um programa que leia descrição e preço de um produto. Se o preço for
inferior a R$ 100, exiba "Somente à vista", senão, exiba "Pode pagar em 3x de ..."
e o valor da parcela*/

const nome = prompt("Me dê o nome do produto: ")
const valor = prompt("Me dê o valor do produto: ")

console.log(`Produto: ${nome}\nPreço R$: ${valor}`)

if (valor < 100){
    console.log("Somente à vista")
}
else{
    console.log(`Pode pagar em 3x de ${(valor / 3).toFixed(2)}`)
}

const prompt = require("prompt-sync")()

/* Elaborar um programa par uma revenda de veículos, que leia o modelo marca e preço
de um veículo. Calcule e exiba o valor do descontos para pagamentos à vista que
é de 10% para veículos de marca Fiat e 20% para as demais marcas. Exiba também o 
valor final.*/

let num = +prompt("Me dê um número e direi se é par ou ímpar: ")

//const result = (num % 2) !== 0 ? console.log(`Número: ${num}\n ${num} é impar`) : console.log(`Número: ${num}\n ${num} é par`);
if (num % 2 !== 0){
    console.log(`Número: ${num}\n ${num} é impar`)
}
else{
    console.log(`Número: ${num}\n ${num} é par`)
}
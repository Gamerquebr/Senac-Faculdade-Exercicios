const prompt = require("prompt-sync")()

/*Elaborar um programa que leia nome, sexo (M ou F) e altura de uma pessoa.
Calcular e apresentar o seu peso idieal utilizando as fórmulas*/

const nome = prompt("Digite seu nome: ")
const genero = prompt("Digite seu gênero (M ou F): ")
const altura = +prompt("Digite sua altura: ")

let peso_ideal = 0

if (genero.toUpperCase() == "M"){
    peso_ideal = (72.7 * altura) - 58
}
else if (genero.toUpperCase() == "F"){
    peso_ideal = (62.1 * altura) - 44.7
}
else{
    console.log("ERRO! GÊNERO INVÁLIDO")
}

console.log(`Nome: ${nome}\nSexo (M/F): ${genero}\nAltura: ${altura}\nPeso Ideal: ${peso_ideal.toFixed(3)} Kg`)
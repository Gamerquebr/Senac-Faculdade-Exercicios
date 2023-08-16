const prompt = require("prompt-sync")()

/*Elaborar um programa que leia 2 notas de um aluno. Calcule e mostre a média das
notas.*/

const notas = []

const escolha = +prompt("Quantas vezes notas você deseja calcular a média? ")
for (let i = 0; i < escolha; i++){
    notas [i] = +prompt("Me dê uma nota: ")
}

let média = 0

for (let i = 0; i < notas.length; i++) {
    média += notas[i]
    if (i == notas.length - 1){
        média = média / notas.length
    }
}

console.log(`A média entre as notas é: ${média}`)

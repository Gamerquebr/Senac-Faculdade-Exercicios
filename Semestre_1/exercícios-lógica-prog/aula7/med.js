const prompt = require("prompt-sync")()

const nome = prompt("Nome da Criança: ")
const peso = Math.floor(prompt("Peso: "))

const gotas = peso * 2 < 30 ? peso * 2 : 30

console.log(`${nome} deve tomar ${gotas} gotas`)



const prompt = require("prompt-sync")()

/* Que leia nome e ano de nascimento de um aluno. Calcule e informe a informe a idade do aluno e se ele é maior ou menos de idade*/
let nascimento = +prompt("Me dê o ano de seu nascimento: ")
let nome = prompt("Por favor digite seu nome: ")
let idade = 2023 - nascimento
console.log(`Nome do Aluno: ${nome}\nAno de Nascimento ${nascimento}\nIdade: ${idade} anos`)

if (idade < 18){
    console.log(`${nome}, você é menor de idade`)
}
else{
    console.log(`${nome}, você é maior de idade`)
}
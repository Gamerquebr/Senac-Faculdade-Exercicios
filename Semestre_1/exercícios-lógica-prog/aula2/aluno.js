const prompt = require("prompt-sync")()

/*Elaborar um programa que leia nome e idade de um aluno. Calcule o ano que ele
nasceu. Exiba mensagem informando o nome do aluno e seu ano de nascimento.*/

idade = +prompt("Me dê sua idade: ")
nome = prompt("Por favor digite seu nome: ")

console.log(`${nome}, você nasceu em ${2023 - idade}`)

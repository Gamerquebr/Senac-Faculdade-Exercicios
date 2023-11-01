/*1. Elaborar um programa que leia nome e número de acertos de candidatos de um concurso, até o usuário digitar
‘Fim’ no nome. Sabendo que para ser aprovado o candidato deve possuir, no mínimo, 30 acertos, exiba os dados
e a situação do candidato – conforme o exemplo
*/


const prompt = require("prompt-sync")()

const nome = []
const acerto = []

let i = 0;
do{
    nome.push(prompt(`${i + 1} Candidato: `))

    if (nome[i].toUpperCase() == 'FIM'){
        nome.pop()

        break
    }

    acerto.push(Number(prompt(`Nº Candidato: `)))
    i++
}while(true)

console.log(nome, acerto)
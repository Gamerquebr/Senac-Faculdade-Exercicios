const prompt = require("prompt-sync")()

const nome = prompt("Aluno: ")
const alunos_total = prompt("Nº Alunos na turma: ")
const msg = prompt("Nº Messagens: ")

if(msg < alunos_total * 0.5){
    console.log(`${nome}, temos que melhorar a sua popularidade`)
}
else{
    console.log(`Parabéns ${nome}! Você é bem popular na turma.`)
}
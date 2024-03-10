const prompt = require("prompt-sync")()

/*
Crie um programa que determine se um jogador tem direito a receber um power-up em um jogo.

Para ter direito ao power-up, o jogador deve ter alcançado o nível máximo em pelo menos 3 fases OU ser um novato E ter encontrado um item raro durante a partida.

Se o jogador atender a algum desses critérios, exiba a mensagem "Power-up ativado! Mostre seu poder!".

Caso contrário, exiba a mensagem "Ops, você vai precisar de mais habilidade. Continue treinando!".
*/

const fasesNum = Number(prompt("Nível máximo em quantas fases? "))

const novatoConf = prompt("Você é um novato (S/N) ").toUpperCase()
const itemRaroConf = prompt("Você encontrou um item raro(S/N)? ").toUpperCase()

if (fasesNum >= 3 || (novatoConf == "S" && itemRaroConf == "S")){
    console.log("Power-up ativado! Mostre seu poder!")
}
else{
    console.log("Ops, você vai precisar de mais habilidade. Continue treinando!")
}
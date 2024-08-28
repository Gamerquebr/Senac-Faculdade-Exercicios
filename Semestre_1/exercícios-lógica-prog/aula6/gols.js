const prompt = require("prompt-sync")()

/*3. Elabore um programa que leia nome e gols que um jogador fez em uma partida. Exiba uma
das seguintes mensagens de acordo com os dados de entrada: a) “...: você não marcou gol”; b)
“...: você fez apenas 1 gol”; c) “...: Você fez xx gols, parabéns!”*/

const nome = prompt("Jogador: ")
const gols = Number(prompt("Nº de gols: "))

if (gols == 1){
    console.log(`${nome}: Você fez apenas 1 gol`)
}
else if (gols > 0){
    console.log(`${nome}: Você fez ${gols} gols, parabéns!`)
}
else{
    console.log('Você não marcou nenhum gol')
}
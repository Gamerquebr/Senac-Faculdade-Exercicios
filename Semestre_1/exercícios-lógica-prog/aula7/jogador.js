const prompt = require("prompt-sync")()

const nome = prompt("Jogador: ")
const gols = prompt("Nº de gols: ")

if (gols <= 0){
    console.log(`${nome}, você não irá receber nenhum extra seu mequetrefe`)
}
else{
    console.log(`${nome}, você irá receber um extra de R$ ${(gols * 3000).toFixed(2)}`)
}
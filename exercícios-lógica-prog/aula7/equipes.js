const prompt = require("prompt-sync")()

let timeA = []
timeA.push(prompt("1º Time: "))
timeA.push(+prompt("Gols: "))

let timeB = []
timeB.push(prompt("2º Time: "))
timeB.push(+prompt("Gols: "))

if (timeA[1] > timeB[1]){
    console.log(`O vencedor foi o ${timeA[0]}`)
}
else if (timeB[1] > timeA[1]){
    console.log(`O vencedor foi o ${timeB[0]}`)
}
else{
    console.log(`Houve um empate!`)
}

const total = timeA[1] + timeB[1]
if (total > 0){
    console.log(`A partida teve ${total} gols`)
}

/*1. Elaborar um programa para uma campanha de vacinação (com gotas). Ler nome da criança e número
de gotas aplicadas. Informar mensagem (conforme o exemplo) e solicitar se o usuário deseja continuar
ou não, repetindo enquanto o usuário digitar “S” ou “s”. Ao final, informar quantas crianças foram
vacinadas, quantas gotas aplicadas e, sabendo que a cada 30 gotas um novo frasco do medicamento é
aberto, quantos frascos foram abertos.
*/

const prompt = require("prompt-sync")()

console.log("Campanha de vacinação")

console.log("-".repeat(30))

let totalGota = 0;
let totalKid = 0;

while(true){
    let kid = prompt("Criança: ")
    let gota = +prompt("Nº Gotas: ")

    console.log(`${kid} vacinado(a) com ${gota} gotas`)

    let input = prompt("Continuar (S/N): ")

    totalGota = gota + totalGota
    totalKid++
    
    if (input.toUpperCase() !== "S"){
        break;
    }
}
console.log("-".repeat(30))

console.log(`Crianças vacinadas: ${totalKid}\nTotal de gotas: ${totalGota}\nNº de frascos abertos: ${Math.ceil(totalGota / 30)}`)
/*5. Elaborar um programa que leia um número. Exiba os múltiplos de 5 até ele. Exiba mensagem caso o número
seja inferior a 5.*/
const prompt = require("prompt-sync")()

const num = +prompt("Número: ")

if(num < 5){
    console.log("Ops.. Número deve ser maior ou igual a 5")
}
else{
    /*for (let i = 1; i*5 < num; i++){
        console.log(i*5)
    }*/
    for (let i = 5; i < num; i = i+5){
        console.log(i)
    }
}
const prompt = require("prompt-sync")()

/*2. Elaborar um programa que leia título e duração de um filme em minutos. Informe
a duração do filme em horas e minutos, conforme o exemplo*/

let nome = prompt("Me dê um filme: ")
let duração = prompt("Me dê a duração em minutos: ")

let horas = duração / 60
let minutos = duração % 60
console.log(`O filme ${nome} \nTem a duração de ${Math.floor(horas)} hora(s) e ${minutos} minutos.`)
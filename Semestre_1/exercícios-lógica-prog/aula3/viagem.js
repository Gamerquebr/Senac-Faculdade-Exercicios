const prompt = require("prompt-sync")()

/*Elaborar um programa que leia o destino e duração de uma viagem em dias e horas.
Calcule e informe a duração apenas em horas*/

destino = prompt("Me dê o nome do destino: ")
dias = Number(prompt("Me dê o número de dias: "))
horas = Number(prompt("Me dê o número de horas: "))

console.log(`A viagem para ${destino} dura ${dias * 24 + horas} horas`)
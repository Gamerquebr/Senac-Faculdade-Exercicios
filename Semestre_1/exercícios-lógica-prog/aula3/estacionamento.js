const prompt = require("prompt-sync")()

/* Sabendo que o valor do estacionamento de uma garegem é de R$ 5 por hora, 
elaborar um programa que leia a hora de entrada e saída de um veículo (Horas e
minutos separados por ponto). Informe a quantidade de horas a serem pagas
(arredondar para cima) e o valor cobrado*/

let hora_ent = Number(prompt("Me dê a hora de entrada (minutos separados por ponto): "))
let hora_sai = Number(prompt("Me dê a hora de saída (minutos separados por ponto): "))

let hora_cob = Math.ceil(hora_sai - hora_ent)

let valor = (5 * hora_cob).toFixed(2)

console.log(`Cobrar: ${hora_cob} hora(s) \nValor R$: ${valor}`)
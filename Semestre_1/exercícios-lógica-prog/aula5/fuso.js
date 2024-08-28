const prompt = require("prompt-sync")()

/* Sabendo que o fuso horário da França em relação ao Brasil é de + 5 horas
elaborar um programa que leia a hora no Brasil e informe a hora na França*/

const hora_br = +prompt("Me dê as horas no brasil: ")
const hora_fr = hora_br > 19 ? ((hora_br + 5) - 24) : hora_br + 5

console.log(`Hora no Brasil: ${hora_br}\nHora na França: ${hora_fr}`)
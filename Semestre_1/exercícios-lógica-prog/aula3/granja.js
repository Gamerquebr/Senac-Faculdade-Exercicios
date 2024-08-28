const prompt = require("prompt-sync")()

/*Elaborar um programa que leia a quantidade de ovos obtidos em uma granja em
um determinado dia. Informe quantas caixas de dúzias de ovos serão preenchidas com
os ovos e quantos sobram*/

let ovos = Number(prompt("Me dê a quantidade de ovos: "))

let caixas = Math.floor(ovos / 12) 
let sobras = ovos % 12

console.log(`N° de Caixas (dúzias): ${caixas} \nSobraram: ${sobras} unidades`)

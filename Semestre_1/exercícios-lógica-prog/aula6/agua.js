const prompt = require("prompt-sync")()

/*1. Madalena necessita de um programa que a auxilie a seguir a orientação médica referente a
quantidade de água que ela deve tomar por dia. Elabore um programa que leia a quantidade de
litros de água que ela precisa tomar por dia e para quantos dias ela quer comprar a água.
Informe a quantidade de litros que Madalena precisa comprar, bem como, a quantidade de
garrafas de 500ml.*/

const agua_pd = Number(prompt("Litros de Água por dia: "))
const dias = Number(prompt("Nº de Dias: "))

const litros = agua_pd * dias
const garrafas = litros * 2

console.log(`Você precisa comprar: ${litros} litros\nPortanto, ${garrafas} garrafas de 5000ml`)
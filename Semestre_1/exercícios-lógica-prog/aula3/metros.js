const prompt = require("prompt-sync")()

/*Elaborar um programa que leia a distância percorrida por um ciclista em metros.
Exiba o equivalente em km e metros*/

let distância = Number(prompt("Me dê sua distânica percorrida em metros: "))

let km = Math.floor(distância / 1000)
let m = distância % 1000

console.log(`Equivale a ${km}km e ${m}m`)

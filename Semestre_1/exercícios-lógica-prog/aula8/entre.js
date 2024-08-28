/*
3. Elaborar um programa que leia 2 números. Mostre os números entre eles, incluindo-os.*/

const prompt = require("prompt-sync")()

const num1 = +prompt("1º Número: ")
const num2 = +prompt("2º Número: ")

console.log(`Entre ${num1} e ${num2}`)

for (let i = num1; i < num2 + 1; i++){
    console.log(i)
}
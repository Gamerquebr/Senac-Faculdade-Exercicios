/*2. Elaborar um programa que leia um número. Mostre os 10 números seguintes a ele.
*/

const prompt = require("prompt-sync")()

const num = +prompt("Número: ")

console.log("Seguintes ao " + num + ":")

for(let i = num; i < (num + 10); i++){
    console.log(i + 1)
}
/*2. Elaborar um programa que leia um número e exiba todos os divisores deste número.
*/

const prompt = require("prompt-sync")()

let num = prompt("Número: ")

process.stdout.write("Divisores do 15: ")

let i = 0
while(i < num){
    if(num % i === 0){
        process.stdout.write(i + ", ")
    }
    i++;
}
console.log(num + "")
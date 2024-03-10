/*3. Elaborar um programa que leia um número. Mostre apenas os pares entre o número e 1,
conforme o exemplo.*/

const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

for (let i = num; i > 0; i--){
    if (i % 2 == 0){
        process.stdout.write(i + " ")
    }
}
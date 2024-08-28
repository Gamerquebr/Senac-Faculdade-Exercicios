/*5. Elaborar um programa que leia um número. Mostre os 10 números seguintes a ele, com os
números lado a lado, separados por vírgula e com ponto no final.
*/ 

const prompt = require("prompt-sync")()

const num = +prompt("Número: ")

process.stdout.write(`Seguintes ao ${num}: `)

for (let i = num; i < num + 10; i++){
    process.stdout.write(i < num + 9 ?  (i + 1) + ", " : (i + 1) + ".")
}
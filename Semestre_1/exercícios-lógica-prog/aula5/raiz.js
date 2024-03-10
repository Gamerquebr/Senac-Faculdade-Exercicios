const prompt = require("prompt-sync")()

/*Elaborar um programa que leia um número. Se o número possuir raiz exata, exiba-a,
caso contrário, exiba "xx não possuir raiz exata"*/

const num = +prompt("Me dê um número e verei a sua raiz quadrada: ")

console.log(`Número: ${num}`)

const num_sqrt = Math.sqrt(num)

if (Number.isInteger(num_sqrt)){
    console.log(`A raiz quadrada de ${num} é ${num_sqrt}`)
}
else{
    console.log(`${num} não possuí raiz exata`)
}
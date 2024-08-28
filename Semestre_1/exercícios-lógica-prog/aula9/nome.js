/*4. Elaborar um programa que leia um número e um nome. Exiba o nome entre “*”. O número
indica a quantidade de * que devem ser inseridas antes e após o nome.
*/

const prompt = require("prompt-sync")()

const nome = prompt("Nome: ")
const num = prompt("Número: ")

for (let i = 0; i < 3; i++){
    if (i % 2 === 0){
        for (let j = 0; j < num; j++){
            process.stdout.write("*")
        }
    }
    else{
        process.stdout.write(" "+ nome + " ")
    }
}
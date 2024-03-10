/*2. Elaborar um programa que leia 2 símbolos e um número. Após, preencha o espaço indicado
pelo número com os símbolos, conforme o exemplo.
*/

const prompt = require("prompt-sync")()

const Asimbolo = prompt("1º Símbolo: ")
const Bsimbolo = prompt("2º Símbolo: ")
const num = prompt("Número: ")

for (let i = 0; i < num; i++){
    if (i % 2 == 0){
        process.stdout.write(Asimbolo)
    }
    else{
        process.stdout.write(Bsimbolo)
    }
}
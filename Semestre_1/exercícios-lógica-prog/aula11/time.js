/*4. Elaborar um programa que leia o nome de 10 clubes. Após, liste os jogos com os clubes na ordem informada.*/

const prompt = require("prompt-sync")()

times = []

for (let i = 0; i < 10; i++){
  times.push(prompt(`${i + 1}º clube: `))
}
console.log(times)

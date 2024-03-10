/*3. Elaborar um programa que leia ‘n’ números (até ser digitado 0). Após liste apenas os números pares. Informe 
também, quantos pares foram digitados.*/

const prompt = require("prompt-sync")()

const pares = []

while(true){
  const num = Number(prompt("Número: "))
  if (num === 0){
    break
  }
  else if (num % 2 === 0){
    pares.push(num);
  }
}

console.log("Pares da lista\n" + ".".repeat(30))
console.log(pares.join('\n') + "\n" + ".".repeat(30) + `\nforam informados ${pares.length} números pares`)

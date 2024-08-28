const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

console.log(`Tabuada do ${num}`)
console.log(".".repeat(30))

for (let i=1; i<=10; i++){
    console.log(`${num} X ${i} = ${num*i}`)
}
const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

console.log(`\nNúmeros entre 1 e ${num}`)
console.log(".".repeat(30))

for (let i=1; i<=num; i++){
    console.log((i % 2 === 0) ? i : "")
}
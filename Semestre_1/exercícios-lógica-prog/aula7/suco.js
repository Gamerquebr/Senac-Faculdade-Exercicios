const prompt = require("prompt-sync")()

const laranjas = prompt("Nº de Laranjas: ")
const copos = Math.floor(laranjas / 6)

console.log(`Copos de Suco: ${copos}\nSobram: ${laranjas - copos * 6} Laranjas`)
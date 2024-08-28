const prompt = require("prompt-sync")()

const produtos = []
const precos = []

console.log("Informe o nome do produto ou 'Fim' para Sair")

do {
    const x = prompt("Produto: ")
    
    if (x.toUpperCase() == "FIM"){
        break;
    }

    const y = Number(prompt("Preço R$: "))

    produtos.push(x)
    precos.push(y)

} while(true)

console.log("\nProduto : Preçoz\n")

for (let i = 0; i < produtos.length; i++){
    console.log(`${produtos[i]} : R$ ${precos[i].toFixed(2)}`)
}
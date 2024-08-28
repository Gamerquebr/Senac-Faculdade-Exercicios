const prompt = requie("prompt-sync")()

const produto = prompt("Produto: ")
const preco = +prompt("Preço R$: ")

for (let i = 0; i < 10; i++){
    const parcela = preco / i
    console.log(``)
}
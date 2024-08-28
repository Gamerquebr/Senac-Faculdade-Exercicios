import { Produto } from "./classes"
import Prompt from "prompt-sync";
const prompt = Prompt();

function main() {
    let produto: Produto = new Produto(prompt("Me dê o nome do produto"));
    console.table(produto)

    console.log(`Produto: ${produto.nome} criado com sucesso! :)`)

    while(true){
        console.log(`1. Adicionar um ${produto.nome} no estoque`)
        console.log(`2. Remover um ${produto.nome} do estoque`)
    }
}

main()





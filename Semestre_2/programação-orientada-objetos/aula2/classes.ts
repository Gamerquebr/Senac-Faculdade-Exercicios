import Prompt from "prompt-sync";
const prompt = Prompt();


export class Veiculo{
    marca: string = ""
    modelo: string = ""
    potencia: number = 0
    numeroMarchas: number = 0
    marchaAtual: number = 0
    velocidadeAtual: number = 0
}

export class Produto{
    gerarId = (): number => {
        return (Math.floor(Math.random() * 255))
    }
    id: number
    nome: string
    valorDeCompra: number
    valorDeVenda: number
    qntdEmEstoque: number
    estoqueMinimo: number

    constructor(nome: string){
        this.id = this.gerarId()
        this.nome = nome
        this.valorDeCompra = +prompt("Por quanto o produto foi comprado: ")
        this.valorDeVenda = +prompt("Por quanto o produto será vendido: ")
        this.qntdEmEstoque = +prompt("Quanto produtos estão no estoque: ")
        this.estoqueMinimo = 10
    }
}

export class Cliente{
    nome: string = ""
    cpf: number = 0
    dataNascimento: number = 0
    qntdDeDinheiro: number = 0
}
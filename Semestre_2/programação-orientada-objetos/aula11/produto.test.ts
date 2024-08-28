import Produto from "./produto";

const produto: Produto = new Produto()

describe("Testando Setters", () => {

    test("setNome seta o nome corretamente", () => {
        produto.setNome("Diazepam")
        expect(produto["_nome"]).toBe("Diazepam")
    })

    test("setPreco seta o preço corretamente", () => {
        produto.setPreco(1000)
        expect(produto["_preco"]).toBe(1000)
    })

    test("setEstoque seta o estoque corretamente", () => {
        produto.setEstoque(10)
        expect(produto["_estoque"]).toBe(10)
    })
})

describe("Testando Getters", () => {

    test("Retorna o nome corretamente", () => {
        expect(produto.getNome()).toBe("Diazepam")
    })

    test("Retorna o preço corretamente", () => {
        expect(produto.getPreco()).toBe(1000)
    })

    test("Retorna o estoque corretamente", () => {
        expect(produto.getEstoque()).toBe(10)
    })
})

describe("Testando a função calcularPrecoComDesconto", () => {

    test("Se a porcentagem for igual a zero, dá erro", () => {
        expect(() => produto.calcularPrecoComDesconto(0)).toThrow("Tu tem problema")
    })
    test("Se a porcentagem for menor menor que zero, dá erro", () => {
        expect(() => produto.calcularPrecoComDesconto(-404)).toThrow("Tu tem problema")
    })


    test("Se a porcentagem for igual a 100, retorna 0", () => {
        const desconto: number = produto.calcularPrecoComDesconto(100)
        expect(desconto).toBe(0)

    })
    test("Se a porcentagem for maior que 100, retorna 0", () => {
        const desconto = produto.calcularPrecoComDesconto(Infinity)
        expect(desconto).toBe(0)
    })


    test("Retorna o valor com 10% de desconto 100", () => {
        const desconto = produto.calcularPrecoComDesconto(10)
        expect(desconto).toBe(100)
    })
    test("Retorna o valor com 25% de desconto 250", () => {
        const desconto = produto.calcularPrecoComDesconto(25)
        expect(desconto).toBe(250)
    })
    test("Retorna o valor com 50% de desconto 500", () => {
        const desconto = produto.calcularPrecoComDesconto(50)
        expect(desconto).toBe(500)
    })
})


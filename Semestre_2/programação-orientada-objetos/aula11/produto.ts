export default class Produto {

    private _nome: string
    private _preco: number
    private _estoque: number

    constructor(){
        this._nome = ""
        this._preco = NaN
        this._estoque = NaN
    }

    public setNome = (nome: string) => this._nome = nome
    public getNome = () => this._nome

    public setPreco = (preco: number) => this._preco = preco
    public getPreco = () => this._preco

    public setEstoque = (estoque: number) => this._estoque = estoque
    public getEstoque = () => this._estoque

    public calcularPrecoComDesconto(porcentagemDeDesconto: number): number{
        if (porcentagemDeDesconto <= 0) throw Error("não tem como dividir por zero!")
        else if (porcentagemDeDesconto >= 100) return 0

        const porcentagem = porcentagemDeDesconto / 100

        return porcentagem * this._preco
    }
}

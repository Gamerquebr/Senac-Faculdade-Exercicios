import Pessoa from "./Pessoa"

export default class Funcionario extends Pessoa {
    private _salario: number
    
    constructor() {
        super()
        this._salario = 0
    }
}

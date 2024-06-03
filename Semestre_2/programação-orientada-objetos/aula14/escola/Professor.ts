import Funcionario from "./Funcionario"

export default class Professor extends Funcionario {
    private _titulacao: string

    constructor() {
        super()
        this._titulacao = ''
    }
}


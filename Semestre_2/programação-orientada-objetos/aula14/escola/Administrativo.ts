import Funcionario from "./Funcionario"

export default class Administrativo extends Funcionario {
    private _setor: string

    constructor() {
        super()
        this._setor = ''
    }
}


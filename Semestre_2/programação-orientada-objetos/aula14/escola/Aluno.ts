import Pessoa from "./Pessoa"

export default class Aluno extends Pessoa {
    private _turma: string

    constructor(nome: string, cpf: string) {
        super(nome, cpf)
        this._turma = ''
    }
}


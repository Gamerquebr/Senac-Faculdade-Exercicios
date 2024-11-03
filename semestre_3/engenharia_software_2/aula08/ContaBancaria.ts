import { VALOR_INVALIDO } from "./conts";

export class ContaBancaria {
    private _numeroConta: string
    private _saldo: number

    constructor(numeroConta: string) {
        this._numeroConta = numeroConta
        this._saldo = 0
    }


    public set saldo(saldo: number) {
        this._saldo = saldo;
    }

    public get numeroConta() : string {
        return this._numeroConta
    }

    depositar(valor: number) {
        this._validarValorEntrada(valor)
        this._saldo += valor
    }

    private _validarValorEntrada(valor: number){
        if (valor < 0){
            throw new Error(VALOR_INVALIDO)
        }
    }

    sacar(valor: number){
        this._validarValorEntrada(valor)
        this._saldo -= valor
    }

    consultarSaldo(): number{
        return this._saldo
    }
}

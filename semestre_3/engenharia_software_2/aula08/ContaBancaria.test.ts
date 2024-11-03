import { ContaBancaria } from "./ContaBancaria";
import { VALOR_INVALIDO } from "./conts";

describe("Quando tentar depositar", () => {
    test("Deve ser possível realizar um depósito", () => {
        //Cenário - Preparar conta para receber um depósito
        const conta = new ContaBancaria("123");
        const saldoInicial = conta.consultarSaldo()

        conta.saldo = 0

        //Ação
        conta.depositar(100)

        //Validação
        const saldoEsperado = saldoInicial + 100
        expect(conta.consultarSaldo()).toBe(saldoEsperado)
    })

    test("Não deve ser possível realizar um depósito negativo", () => {
        const conta = new ContaBancaria("123");

        expect(() => conta.depositar(-100)).toThrow(VALOR_INVALIDO)
    })
})

describe("Quando tentar sacar", () => {
    test("Deve ser possível realizar um saque", () => {
        const conta = new ContaBancaria("123")
        conta.depositar(100)
        const saldoInicial = conta.consultarSaldo()

        conta.sacar(50)

        const saldoEsperado = saldoInicial - 50
        expect(conta.consultarSaldo()).toBe(saldoEsperado)
    })

    test("Não deve ser possível realizar um saque negativo", () => {
        const conta = new ContaBancaria("123");

        expect(() => conta.sacar(-100)).toThrow(VALOR_INVALIDO)
    })
})

import { Calculadora } from "./Calculadora"
let calculadora: Calculadora = new Calculadora

beforeEach(() => {
    let calculadora: Calculadora = new Calculadora()
    console.log('Antes de cada')
});
beforeAll(() => {
    console.log('Antes de cada')
});

describe('Soma', () => {
    it('Deve retornar 4 quando 2 + 2', ()=> {
        expect(calculadora.somar(2, 2)).toBe(4)
    })
})

describe('Divisão', () => {
    it('Deve retornar 2 quando 4 / 2', ()=> {
        expect(() => calculadora.dividir(4,0)).toBe(2)
    })

    it('Não deve ser possível dividir por zero', ()=>{
        expect(() => calculadora.dividir(4,0)).toThrow();
    })

    it('Quando dividr por zero deve ter uma mensagem de erro', ()=>{
        expect(() => calculadora.dividir(4,0)).toThrow('Nâo é possível dividir por zero');
    })
})
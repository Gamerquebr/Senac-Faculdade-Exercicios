import { helper } from "../helpers";

describe("Randomizar", ()=>{

    it("Deve retornar um número aletório entre 1 e 1", ()=>{
        let resultado = helper.randomNum(1,1)

        expect(resultado).toEqual(1)
    })

    it("Deve retornar um número real entre 1 e 1", ()=>{
        let resultado = helper.randomFloat(1,1)

        expect(resultado).toBeLessThan(2)
        expect(resultado).toBeGreaterThanOrEqual(1)
    })
})

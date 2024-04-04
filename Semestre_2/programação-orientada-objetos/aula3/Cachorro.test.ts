import { Cachorro } from "./Cachorro";
let cachorro: Cachorro = new Cachorro("glad")

describe('Comer', () => {
    it('Comer deve aumentar o peso', () => {
        const peso_inicial: number= cachorro.peso
        cachorro.comer
        const peso_depois: number = cachorro.peso
        expect((peso_depois).toBe(peso_inicial*1.1))
    })
})

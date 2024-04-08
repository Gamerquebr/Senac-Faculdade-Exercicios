import { Cachorro } from "../classes/cachorro"

//Faz o helper sempre retornar o mesmo número
jest.mock('./helper', ()=> ({
    randomNum:jest.fn(()=>1),
    randomFloat:jest.fn(()=>1.1)
}))

describe("testando a método ValidarStatus", ()=>{
    it("Energia maior que 120 deve resultar em erro", ()=>{
        const pet: Cachorro = new Cachorro(10)

        pet["energia"] = 121

        expect(()=>{ pet["validarStatus"]() }).toThrow(
        `${pet.nome} recebeu tanta energia que entrou em estado de choque e explodiu`
        )
    })

    it("Energia menor que 1 deve resultar em erro", ()=>{
        const pet: Cachorro = new Cachorro(10)

        pet["energia"] = 0

        expect(()=>{ pet["validarStatus"]() }).toThrow(
        `${pet.nome} ficou sem energia, foi dormir e não acordou mais`
        )
    })

    it("Felicidade maior que 120 deve resultar em erro", ()=>{
        const pet: Cachorro = new Cachorro(10)

        pet["felicidade"] = 121

        expect(()=>{ pet["validarStatus"]() }).toThrow(
        `${pet.nome} ficou tão feliz que teve uma overdose e morreu`
        )
    })

    it("Felicidade menor que 1 deve resultar em erro", ()=>{
        const pet: Cachorro = new Cachorro(10)

        pet["felicidade"] = 0

        expect(()=>{ pet["validarStatus"]() }).toThrow(
        `${pet.nome} ficou tão triste que entrou em depressão e se matou`
        )
    })

    it("Peso 3 vezes maior que o peso inicial deve resultar em erro", ()=>{
        const pet: Cachorro = new Cachorro(10)

        pet["peso"] = pet["pesoInicial"] * 3

        expect(()=>{ pet["validarStatus"]() }).toThrow(
        `${pet.nome} ficou tão pesado que entrou em obesidade mórbida, teve um ataque cardíaco ao se levantar e morreu`
        )
    })

    it("Se o peso for um terço menor que o pesoInicial deve resultar em erro", ()=>{
        const pet: Cachorro = new Cachorro(10)

        pet["peso"] = pet["pesoInicial"] / 3

        expect(()=>{ pet["validarStatus"]() }).toThrow(
        `${pet.nome} ficou tão magro que um dia sumiu para nunca mais ser encontrado`
        )
    })
})

describe("Testando o método latir", ()=>{
    it("Se latidos for menor ou igual a zero deve-se latir apenas uma vez", ()=>{
        const pet: Cachorro = new Cachorro(10)
        
    

    })

})

describe("Testando o método dormir", ()=>{

})

describe("Testando o método declaraPorte", ()=>{

})

describe("Testando o método comer", ()=>{

})

describe("Testando o método dormir", ()=>{

})

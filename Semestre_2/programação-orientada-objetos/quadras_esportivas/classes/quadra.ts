import { Reserva } from "./reserva"


export class Quadra {
    public id: number
    public esporte: string
    public disponibilidade: boolean

    constructor(id: number, esporte: string){
        this.id = id
        this.esporte = esporte
        this.disponibilidade = true
    }

    public reservar(nome: string): Reserva{
        if (!this.disponibilidade)
            throw new Error("Essa quadra já foi reservada! :(")
            
        let reserva: Reserva = new Reserva(nome, this.id)
        this.disponibilidade = false

        return reserva
    }



}

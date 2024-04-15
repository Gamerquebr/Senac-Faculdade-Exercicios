import { Reserva } from "./reserva"


export class Quadra {
    public readonly id: number
    public esporte: string
    private disponibilidade: string[]
    public apelido: string | undefined

    constructor(id: number, esporte: string, disponibilidade: string[2], apelido?: string){
        this.id = id
        this.esporte = esporte
        this.disponibilidade = this.popularDisponibilidade(disponibilidade) 
        this.apelido = apelido
    }

    private popularDisponibilidade(disponibilidade: string[2]): string[]{
        const horarios: string[] = []
        const inicio: string[] = disponibilidade[0].split(':')
        const fim: string[] = disponibilidade[1].split(':')

        return horarios

    }

    private helper(str: string): number[]{
        let arr:string[] = str.split(':') 


    }

    public obterDisponibilidade(): string[]{
        return []
    }

    public reservar(): Reserva{
        return new Reserva()
    }



}

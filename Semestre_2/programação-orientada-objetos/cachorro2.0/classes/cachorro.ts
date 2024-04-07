import { helper } from "../helpers";
import { Animal } from "./animal"

export class Cachorro extends Animal{
    public readonly raca: string
    public readonly porte: string

    constructor(peso: number, nome?: string, raca?: string){
        super(peso, nome)

        this.raca = raca || "Viralata"
        this.porte = this.declararPorte()
    }

    private declararPorte(): string{
        const peso: number = this.pesoInicial

        switch(true){
            case peso < 5:
                return 'Mini'
            case peso >= 5 && peso < 10:
                return 'Pequeno'
            case peso >= 10 && peso < 15:
                return 'Pequeno-Médio'
            case peso >= 15 && peso < 20:
                return 'Médio'
            case peso >= 20 && peso < 25:
                return 'Médio-Grande'
            case peso >= 25 && peso < 30:
                return 'Grande'
            case peso >= 30 && peso < 35:
                return 'Gigante'
            case peso >= 35:
                return 'Colossal'
            default:
                return 'médio'
        }
    }

    public latir(latidos?: number): string{
        if (latidos == undefined || latidos <= 0)
            latidos = 1

        this.felicidade += helper.randomNum(0, 2) * this.natureza
        this.energia += helper.randomNum(0, 2) * this.natureza

        this.peso -= this.pesoInicial * 0.025

        this.validarStatus()

        return 'au'.repeat(latidos)
    }
    public dormir(HorasBrincadas?: number): void{
        if (HorasBrincadas == undefined || HorasBrincadas <= 0) 
            return

        this.felicidade += HorasBrincadas * this.natureza
        this.energia -= HorasBrincadas * this.natureza

        this.peso -= this.pesoInicial * HorasBrincadas * 0.05

        this.validarStatus()
    }
}

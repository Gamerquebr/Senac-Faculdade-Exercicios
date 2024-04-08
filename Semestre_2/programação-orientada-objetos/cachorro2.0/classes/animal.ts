import { helper } from "../helpers";

export abstract class Animal{
    public nome: string;

    protected energia: number;
    protected felicidade: number;

    protected readonly pesoInicial: number;
    protected peso: number;

    protected readonly natureza: number;

    constructor(peso: number, nome?: string){
        this.nome = nome || "Animal"

        this.energia = helper.randomNum(50, 100)
        this.felicidade = helper.randomNum(50, 100)

        this.pesoInicial = peso
        this.peso = this.pesoInicial

        this.natureza = helper.randomFloat(0,2)
    }

    public comer(): void{

        const rNum = helper.randomNum(5, 10)

        this.felicidade += rNum * this.natureza
        this.energia -= rNum * this.natureza

        this.peso += rNum * this.natureza * 0.025 * this.pesoInicial

        this.validarStatus()
    }

    public dormir(tempoDeSono?: number): void{
        if (tempoDeSono == undefined || tempoDeSono <= 0) 
            return

        this.energia += tempoDeSono * this.natureza
        this.felicidade -= tempoDeSono * this.natureza

        this.peso -= this.pesoInicial * tempoDeSono * 0.025

        this.validarStatus()
    }

    protected validarStatus(): void{
        if (this.energia > 120)
            throw new Error(
            `${this.nome} recebeu tanta energia que entrou em estado de choque e explodiu`
        )
        else if(this.energia <= 0)
            throw new Error(
            `${this.nome} ficou sem energia, foi dormir e não acordou mais`
        )

        else if (this.felicidade > 120)
            throw new Error(
            `${this.nome} ficou tão feliz que teve uma overdose e morreu`
        )
        else if(this.felicidade <= 0)
            throw new Error(
            `${this.nome} ficou tão triste que entrou em depressão e se matou`
        )

        else if (this.peso >= this.pesoInicial * 3)
            throw new Error(
            `${this.nome} ficou tão pesado que entrou em obesidade mórbida, teve um ataque cardíaco ao se levantar e morreu`
        )
        else if(this.peso <= this.pesoInicial / 3)
            throw new Error(
            `${this.nome} ficou tão magro que um dia sumiu para nunca mais ser encontrado`
        )

        else return
    }
}

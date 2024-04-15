import { Reserva } from "./reserva"


export class Quadra {
    public readonly id: number

    public esporte: string
    public apelido: string | undefined

    private disponibilidade: number[][]

    constructor(id: number, esporte: string, disponibilidade: string[], apelido?: string){
        this.id = id

        this.esporte = esporte
        this.apelido = apelido

        this.disponibilidade = this.popularDisponibilidade(disponibilidade) 
    }


    private pegarHoras(str: string): number[]{
        const arr:string[] = str.split(':') 

        return arr.map((num) => parseInt(num))
    }

    private validarHoras(str: string[]){
        str
        return
    }

    private compararArrays(){

    }

    private popularDisponibilidade(disponibilidade: string[]): number[][]{

        this.validarHoras(disponibilidade)

        const inicio: number[] = this.pegarHoras(disponibilidade[0])
        const fim: number[] = this.pegarHoras(disponibilidade[1])
        
        const horarios: number[][] = []

        for (let i = inicio[0]; i <= fim[0]; i++){

            horarios.push([i, 0])
            horarios.push([i, 30])
            
        }

        if (inicio[1] == 30){
            horarios.shift()
        }
        if (fim[1] == 0){
            horarios.pop()
        }

        return horarios
    }

    public obterDisponibilidade(...argv: string[][]): number[][]{
        if (argv == undefined)
            return this.disponibilidade

        /*muda o formato. 
        exemplo:
        [["12:30","14:00"], ["17:00", "19:30"]] 
        para 
        [[ [12, 30], [14, 0] ], [ [17, 0], [19, 30]]*/
        const intervalos: number[][][] = argv.map((intervalo) => {
            
            this.validarHoras(intervalo)

            const inicio: number[] = this.pegarHoras(intervalo[0])
            const fim: number[] = this.pegarHoras(intervalo[1])

            return [inicio, fim]
        })

        const disponibilidade: number[][] = this.disponibilidade

        intervalos.forEach((intervalo) => {

            let inicio: number = NaN
            let fim: number = NaN

            disponibilidade.forEach((horario, index) => {

                if (horario.toString() === intervalo[0].toString()){

                    inicio = index      
                }
                else if(horario.toString() === intervalo[1].toString()){

                    fim = index
                }
            })

            //Remove todos os valores entre os dois horários
            disponibilidade.splice(inicio, fim - inicio + 1)
        })

        return disponibilidade
    }

    public reservar(): Reserva{
        return new Reserva(0,0,"")
    }



}

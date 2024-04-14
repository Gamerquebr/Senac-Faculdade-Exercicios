import { Quadra } from "./classes/quadra"
import { Reserva } from "./classes/reserva";

import Prompt from "prompt-sync";
const prompt = Prompt()

function main(){
    const listaQuadras: Quadra[] = []

    listaQuadras.push(new Quadra(1, "Futebol"))
    listaQuadras.push(new Quadra(2, "Basquete"))
    listaQuadras.push(new Quadra(3, "Padel"))
    listaQuadras.push(new Quadra(4, "Volei"))
    listaQuadras.push(new Quadra(5, "Tenis"))
    listaQuadras.push(new Quadra(6, "Futsal"))

    const listaReservas: Reserva[] = []

    while(true){
        console.log("Selecione as opções:\n1. Reservar Quadra\n2. listar quadras\n3. Listar reservas\n4. sair\n")
        let escolha:number = +prompt(": ")

        if (escolha == 1){
            let nome: string = prompt("Digite seu nome: ")
            let id: number = +prompt("Digite o ID da quadra desejada: ") - 1

            let reserva: Reserva = listaQuadras[id].reservar(nome)

            listaReservas.push(reserva)
        }
        else if (escolha == 2){
            for (let i: number = 0; i < listaQuadras.length; i++){
                console.table(listaQuadras[i])
            }
        }
        else if (escolha == 3){
            for (let i: number = 0; i < listaReservas.length; i++){
                console.table(listaReservas[i])
            }
        }
        else if (escolha == 4){
            break
        }


    }

}

main()

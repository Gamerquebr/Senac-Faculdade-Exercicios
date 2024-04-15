import { Quadra } from "./classes/quadra"
import { Reserva } from "./classes/reserva";

import Prompt from "prompt-sync";
const prompt = Prompt()

function main(){

    const teste = new Quadra(1, "volei", ["07:00","17:00"], "canoas") 
    let testx : number[][] = teste.obterDisponibilidade(["13:00", "14:00"], ["15:00","16:30"], ["08:30","9:30"], ["11:00","11:30"])

    console.log("Horários que sobraram:")
    console.log(testx)
}

main()

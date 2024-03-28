import { Cachorro } from "./Cachorro";
import Prompt from "prompt-sync";

const teclado = Prompt();

const nome = teclado('Digite o nome do cachorro:')
const pet: Cachorro = new Cachorro(nome);
pet.porte = teclado('Digite o porte do cachorro:');
pet.raca = teclado('Digite a raça do cachorro:');


while (true) {
    console.log("+---------------------------+");
    console.log("| 1. Comer                  |");
    console.log("| 2. Brincar                |");
    console.log("| 3. Dormir                 |");
    console.log("| 4. Latir                  |");
    console.log("| 5. Mostrar informações    |");
    console.log("| 0. Sair                   |");
    console.log("+---------------------------+");
    let opcao: number = +teclado('Digite uma opção:');

    if (opcao == 0) {
        break;
    }
    switch (opcao) {
        case 1:
            pet.comer();
            break;
        case 2:
            const tempo = +teclado('Digite o tempo de brincadeira em minutos: ');
            pet.brincar(tempo);
            break;
        case 3:
            const tempoDormindo = +teclado('Digite o tempo de sono em horas: ');
            pet.dormir(tempoDormindo);
            break;
        case 4:
            const vezes = +teclado('Digite o número de latidos: ');
           const saida:string = pet.latir(vezes);
           console.log(saida);
           
            break;
        case 5:
            console.table(pet);
            break;

        default:
            break;
    }

}

import Guerreiro from "./classes/Guerreiro";
import Padre from "./classes/Padre";

const Gladmir: Guerreiro = new Guerreiro("tio glad")
const Edécio: Padre = new Padre("tio dedé")

console.table(Gladmir)
console.table(Edécio)

Gladmir.atacar(Edécio)
Edécio.atacar(Gladmir)

console.table(Edécio)
console.table(Gladmir)
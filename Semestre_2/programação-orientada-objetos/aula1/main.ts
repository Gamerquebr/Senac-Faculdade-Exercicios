import { Personagem } from "./classe"

let clebe: Personagem = new Personagem()
clebe.nome = "Senhor Senhor Wilson"
clebe.defesa = 2
clebe.ataque = 3
clebe.energia = 0
console.log(clebe)

let l: Personagem = clebe;
//Classe
class Personagem{
    nome: string = ""
    energia: number = 0
    ataque: number = 0
    defesa: number = 0
}

let clebe: Personagem = new Personagem()
clebe.nome = "Senhor Senhor Wilson"
clebe.defesa = 2
clebe.ataque = 3
clebe.energia = 0
console.log(clebe)

let l: Personagem = clebe;

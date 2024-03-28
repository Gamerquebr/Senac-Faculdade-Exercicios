import { Personagem } from "./Personagem";

let heroi:Personagem = new Personagem();
heroi.nome = 'Edécio';
heroi.defesa = 1;
heroi.ataque = 1;
heroi.energia = 99;

let heroi2:Personagem = {...heroi};
heroi2.nome = 'Gladimir';

let heroi3:Personagem = {...heroi};
heroi3.nome = 'Gladimir';

console.table(heroi);
console.table(heroi2);
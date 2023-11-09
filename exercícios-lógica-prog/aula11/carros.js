/*1. Elaborar um programa que leia nome e número de acertos de candidatos de um concurso, até o usuário digitar
‘Fim’ no nome. Sabendo que para ser aprovado o candidato deve possuir, no mínimo, 30 acertos, exiba os dados
e a situação do candidato – conforme o exemplo
*/


const prompt = require("prompt-sync")()

const carro = []
const valor = []

let i = 0;
do{
  carro.push(prompt(`${i + 1} Veículo: `))
  
  if (carro[i].toUpperCase() == 'FIM'){
    carro.pop()
    break
  }

  valor.push(Number(prompt(`Preço R$: `)))
  i++
}while(true)


console.log('Lista dos Veículos da Revenda\n' + '.'.repeat(30))

let media = 0

for(let i = 0; i < carro.length; i++){
  console.log(`${carro[i]} - R$ ${valor[i].toFixed(2)}`)

  media = media + valor[i] 
}
media = media / carro.length

console.log(`Preço médio dos veículos: ${media.toFixed(2)}`)

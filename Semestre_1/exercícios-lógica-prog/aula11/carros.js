/*2. Elaborar um programa que leia modelo e preço de ‘n’ veículos (até ser digitado ‘Fim’ no modelo) de uma
revenda. Após, liste os veículos. Informe no final qual o preço médio dos veículos da revenda.*/


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

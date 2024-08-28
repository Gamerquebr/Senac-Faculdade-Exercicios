const prompt = require("prompt-sync")()

/*2. A família da Bianca foi convidada para um casamento em São Lourenço do Sul. Elabore um
programa que leia o número de pessoas da família que irão no casamento e o valor do pedágio
para a cidade vizinha. Sabendo que em cada carro da família, cabem 5 pessoas, informe a
quantidade de carros necessários para que todos possam ir ao casamento e o valor total a ser
pago de pedágio (ida e volta). */ 

const pessoas = Number(prompt("Nº de Pessoas: "))
const pedágio = Number(prompt("Valor do pedágio R$: "))

const carros = Math.ceil(pessoas / 5)
const valor = (pedágio * carros) * 2

console.log(`Nº de Carros: ${carros}\nValor gasto com pedágio R$: ${valor.toFixed(2)}`)
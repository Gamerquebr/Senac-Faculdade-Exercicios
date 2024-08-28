const prompt = require("prompt-sync")()

/* Elaborar um programa par uma revenda de veículos, que leia o modelo marca e preço
de um veículo. Calcule e exiba o valor do descontos para pagamentos à vista que
é de 10% para veículos de marca Fiat e 20% para as demais marcas. Exiba também o 
valor final.*/

const modelo = prompt("Me dê o modelo do carro: ")
const marca = prompt("Me dê a marca (20% de desconto para carros fiat a vista): ")
const preço = +prompt("Me dê o preço total: ")

let desconto = 0
if (marca.toLowerCase() == "fiat"){
    desconto = preço * 0.20    
}
else{
    desconto = preço * 0.10
}
const preço_vista = preço - desconto

console.log(`Modelo: ${modelo}\nMarca: ${marca}\nPreço R$: ${preço.toFixed(2)}\nDesconto: ${desconto.toFixed(2)}\nPreço à Vista: ${preço_vista}`)
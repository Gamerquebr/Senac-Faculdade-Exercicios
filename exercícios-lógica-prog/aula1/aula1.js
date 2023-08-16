//- Ler modelo e ano do veículo de um cliente. Exibir, por exemplo:
//Você possui um Palio, ano 2015

const modelo = prompt("Digite o seu modelo de carro");
const ano = prompt("Digite o ano do carro");

console.log(`Você possui um ${modelo}, ano ${ano}`);

//- Ler nome e número da camisa de um jogador do seu time de futebol. Exibir, por exemplo:
//Suarez é o camisa 9 do seu time
const jogador = prompt("Digite o nome do jogador");
const num = prompt("Digite o número de sua camisa");

console.log(`${jogador}, é o camisa ${num} do seu time`);

//- Ler título e duração de um filme. Exibir, por exemplo:
//O filme Barbie tem a duração de 115 minutos

const titulo = prompt("Digite título do filme");
const duração = prompt("Digite a duração total do filme");

console.log(`O filme ${titulo} tem a duração de ${duração}`);

//Ler o nome de 2 cidades e a distância entre elas. Exibir, por exemplo:
//A distância entre Pelotas e Santa Maria é de 290 km

console.log("Me dê duas cidades e a distância entre elas")

const cidades = []
cidades[0] = prompt("Digite me dê uma cidade")
cidades[1] = prompt("Me dê outra cidade")

const distância = prompt("Me dê o valor da distância entre as cidades em KM")

console.log(`A distância entre ${cidades[0]} e ${cidades[1]} é de ${distância} km`)
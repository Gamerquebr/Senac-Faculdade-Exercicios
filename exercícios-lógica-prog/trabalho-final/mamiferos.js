//Carrega os modelos
const prompt = require("prompt-sync")()
const fs = require("fs")

//Cria uma array 2D de mamíferos = 0: espécie, 1: subclasse, 2: habitat, 3: dieta 
const animais = []

//Se um arquivo de dados existir; coloca os dados dentro da array
if (fs.existsSync("./data/dados.csv")){

    preencherArray()
}

//Auxilia na separação dos tópicos
const separador = "\n" + "-".repeat(50) + "\n"

//Utilitário que retorna os dados de um determinado animal
const retornarAnimal = (i) => `\nEspécie: ${animais[i][0]}\nSubclasse: ${animais[i][1]}\nHabitat: ${animais[i][2]}\nDieta: ${animais[i][3]}\n`

//Utilitário que verifica se existem itens dentro da array "animais" 
const verificar = () => animais.length == 0 && console.log("\nERRO! Não existem animais na lista :(\n")

console.log(`Bem-vindo a lista de seus mamíferos favoritos!\n`)


//Decide qual e quando cada função será utilizada
function main(){

    while(true){
        console.log(separador)

        //Pergunta para o usuário qual modo deseja utilizar
        console.log("Digite:\n 1. Adicionar um animal\n 2. Listar todos animais\n 3. Pesquisar por espécie\n 4. Agrupar por Subclasse\n 5. Agrupar por habitat\n 6. Agrupar por dieta\n 7. Editar um animal\n 8. Remover um animal\n Pressione ENTER para parar o programa\n")
        const escolha = Number(prompt("comando: "))

        //Ativa um modo, se nenhum modo for selecionado; para o programa
        switch (escolha) {
            case 1:
                adicionar()
                break
            case 2:
                listar()
                break
            case 3:
                pesquisar()
                break
            case 4:
                //Agrupa todas as espécies por subclasse
                agrupar(1)
                break
            case 5:
                //Agrupa todas as espécies por habitat
                agrupar(2)
                break
            case 6:
                //Agrupa todas as espécies por dieta
                agrupar(3)
                break
            case 7:
                editar()
                break
            case 8:
                remover()
                break
            default:
                salvarDados()
                return 0;
        }
    }


}


//Adiciona novas espécies de mamíferos na array
function adicionar(){
    console.log(separador)

    //Coleta o nome da espécie
    const nome = prompt("Espécie: ")
   
    //Verifica se já não existe uma espécie igual na array
    if (animais.length){

        for (let i = 0; i < animais.length; i++){
        
            if (nome.toLowerCase() == animais[i][0]){
                console.log("\nERRO! Está espécie já está registrada :(\n")
            }
        }
    }
   
    //Coleta a subclasse da espécie
    console.log("\nEscolha uma Subclasse:\n 1. Placentários (Eutheria)\n 2. Marsupiais (Metatheria)\n 3. Monotremados (Prototheria)")
    let subclasse = Number(prompt("Número: "))

    switch (subclasse) {
        case 1:
            subclasse = "Placentário"
            break
        case 2:
            subclasse = "Marsupial"
            break
        case 3:
            subclasse = "Monotremado"
            break
        default:
            console.log("ERRO! Valor inválido :(") 
            return 1;
    }

    //Coleta o habitat da espécie
    console.log("\nEscolha um Habitat:\n 1. Terrestre\n 2. Aquático\n 3. Aéreo")
    let habitat = Number(prompt("Número: "))

    switch (habitat) {
        case 1:
            habitat = "Terrestre"
            break
        case 2:
            habitat = "Aquático"
            break
        case 3:
            habitat = "Aéreo"
            break
        default:
            console.log("\nERRO! Valor inválido :(\n")
            return 1;
    }

    //Coleta a dieta da espécie
    console.log("\nEscolha uma Dieta:\n 1. Carnívoro\n 2. Herbívoro\n 3. Onívero")
    let dieta = Number(prompt("Número: "))

    switch (dieta) {
        case 1:
            dieta = "Carnívoro"
            break
        case 2:
            dieta = "Herbívoro" 
            break
        case 3:
            dieta = "Onívero"
            break
        default:
            console.log("\nERRO! Valor inválido :(\n")
            return 1;
    }
    
    //Salva os dados na array
    animais.push([nome, subclasse, habitat, dieta]) 
    
    console.log("\n Animal salvo com sucesso!\n")

    return 0
}


//Lista todos os valores contidos na array
function listar(){
    //Verifica se a array contém itens
    if (verificar() == undefined){
        return 1
    }

    console.log(separador)
    
    //Mostra todos os animais salvos
    for (let i = 0; i < animais.length; i++){

        console.log(retornarAnimal(i))
    }

    return 0 
}


//Encontra um animal específico na array
function pesquisar(){
    //verifica se a array contém itens
    if (verificar() == undefined){
        return 1
    }

    console.log(separador)

    const nome = prompt("Digite a espécie de animal: ")

    //Se o animal for encontrado, retorna seus dados e para a função
    for (let i = 0; i < animais.length; i++){

        if (nome.toLowerCase() == animais[i][0].toLowerCase()){
            console.log("\nAnimal encontrado! :)\n" + retornarAnimal(i))
            return 0
        } 
    } 

    //Se não foi encontrado, avisa para o usuário e para a função
    console.log("\nAnimal não encontrado :(\n")

    return 0
}


//Agrupa os animais por subtipo, habitat ou dieta
function agrupar(modo){
    //Verifica se a array contém itens
    if (verificar() == undefined){
        return 1
    }
    
    console.log(separador)

    const caracteristicas = []

    //Verifica quais características foram escolhidas
    switch (modo) {
        case 1:
            caracteristicas.push("subclasse", "Placentário", "Marsupial", "Monotremado")
            break
        case 2:
            caracteristicas.push("habitat", "Terrestre", "Aquático", "Aéreo")
            break
        case 3: 
            caracteristicas.push("dieta", "Carnívoro", "Herbívoro", "Onívero")
            break
        default:
            console.log("ERRO! Eu não sou possível :(")
            return 1
    }
    
    //Pede para o usuário escolher qual tipo de característica ele deseja filtrar 
    console.log(`Agrupar pela(o) ${caracteristicas[0]}:\n 1.${caracteristicas[1]}\n 2.${caracteristicas[2]}\n 3.${caracteristicas[3]}`)

    const tipo = Number(prompt("Número: "))
    
    //Verifica se o número digitado é válido
    if (tipo < 1 && tipo > 3){
        console.log("\nERRO! Valor inválido :(\n")
        return 1
    }

    //Conta quantas vezes uma característica foi encontrada
    let contador = 0;

    for (let i = 0; i < animais.length; i++){
        
        if (animais[i][modo] == caracteristicas[tipo]){

            console.log(retornarAnimal(i))
            contador++;
        }
    }

    //Avisa ao usuário se nenhum animal foi encontrado
    if (contador == 0){
        console.log(`\nNenhum animal com a(o) ${caracteristicas[0]} ${caracteristicas[tipo]} foi encontrado :(\n`)
    }

    return 0;
}



//Edita um animal que está dentro da array
function editar(){
    //Verifica se a array contém itens
    if (verificar() == undefined){
        return 1
    }

    console.log(separador)
    
    console.log("Selecione uma espécie:\n")

    //Monta uma lista que permite o usuário selecionar um animal
    for (let i = 0; i < animais.length; i++){
        console.log(`${i + 1}. ${animais[i][0]}`)
    }
    
    //Salva o local onde o animal selecionado está localizado na array
    const animal = Number(prompt("Número: ")) - 1

    //Verifica se realmente existe um animal lá
    if (animais[animal] == undefined){
        console.log("\nERRO! Valor inválido :(\n")
        return 1
    }

    while(true){
        console.log(separador)

        //Mostra a espécie selecionada pelo usuário
        console.log("\nEspécie Selecionada: " + retornarAnimal(animal))

        //Pede para o usuário selecionar um modo
        console.log("\nDigite:\n 1. Editar a Espécie\n 2. Editar a Subclasse\n 3. Editar Habitat\n 4. Editar Dieta\n Pressione ENTER para sair do modo edição")

        const modo = Number(prompt("Número: ")) - 1

        //Permite editar o nome
        if (modo == 0){
            const nome = prompt("Digite um novo nome: ")

            //Verifica se o novo nome dado não já existe na lista
            for (let i = 0; i < animais.length; i++){
                
                if (animais[i][modo].toLowerCase() == nome.toLowerCase() && i != animal){
                    console.log("\nERRO! Já existe uma espécie com esse mesmo nome na lista :(\n")
                    return 1
                }
            }   

            //Substitui os nomes
            animais[animal][modo] = nome

            console.log("\nNome editado com sucesso :)\n")
        }
        //Permite editar a espécie, subclasse ou habitat 
        else if (modo == 1 || modo == 2 || modo == 3){
            
            const caracteristicas = []

            //Verifica quais características foram escolhidas
            switch (modo) {
                case 1:
                    caracteristicas.push("subclasse", "Placentário", "Marsupial", "Monotremado")
                    break
                case 2:
                    caracteristicas.push("habitat", "Terrestre", "Aquático", "Aéreo")
                    break
                case 3: 
                    caracteristicas.push("dieta", "Carnívoro", "Herbívoro", "Onívero")
                    break

                default:
                    console.log("ERRO! Eu não sou possível :(")
                    return 1
            }
            
            console.log(`\nSelecione qual será a(o) nova(o) ${caracteristicas[0]}:\n 1.${caracteristicas[1]}\n 2.${caracteristicas[2]}\n 3.${caracteristicas[3]}`)

            const tipo = Number(prompt("Número: "))

            //Verifica se o número digitado é válido
            if (tipo < 1 && tipo > 3){
                console.log("\nERRO! Valor inválido :(\n")
                return 1
            }

            //Substitui o tipo
            animais[animal][modo] = caracteristicas[tipo]

            console.log("\ncaracterística editada com sucesso :)\n")
        }
        //Saí do modo edição
        else{
            return 0
        }
    }
}


//Remove um animal de dentro da array
function remover(){
    //Verifica se a array contém itens
    if (verificar() == undefined){
        return 1
    }

    console.log(separador)


    console.log("Selecione uma espécie:\n")

    //Monta uma lista que permite o usuário selecionar um animal
    for (let i = 0; i < animais.length; i++){
        console.log(`${i + 1}. ${animais[i][0]}`)
    }
    
    //Salva o local onde o animal selecionado está localizado na array
    const animal = Number(prompt("Número: ")) - 1

    //Verifica se realmente existe um animal lá
    if (animais[animal] == undefined){
        console.log("\nERRO! Valor inválido :(\n")
        return 1
    }
    
    //Deleta o animal da array
    animais.splice(animal, 1)
    
    console.log("\nEspécie deletada com sucesso :)\n")
}


//Salva os dados em um arquivo
function salvarDados(){

    //Junta todos os dados coletados em uma lista
    const dados = []

    for (let i = 0; i < animais.length; i++){

        dados.push(animais[i][0] + "," + animais[i][1] + "," + animais[i][2] + "," + animais[i][3]) 
    }

    //Salva os dados no arquivo
    fs.writeFileSync("./data/dados.csv", dados.join("\n"))
    
    console.log("\nDados salvos com sucesso :)\n")
}


//Preenche a array com os dados encontrados dentro do arquivo
function preencherArray(){

    //Puxa os dados do arquivo e os separa a cada "\n"
    const dados = fs.readFileSync("./data/dados.csv", "utf8").split("\n")

    for (let i = 0; i < dados.length; i++){

        //Separa os dados novamente, porém dessa vez a cada vírgula
        const dado = dados[i].split(",")

        //Coloca os valores na array
        animais.push(dado)
    }

    console.log("\nDados carregados com sucesso :)\n")
}


//Ativa o menu principal do programa
main()

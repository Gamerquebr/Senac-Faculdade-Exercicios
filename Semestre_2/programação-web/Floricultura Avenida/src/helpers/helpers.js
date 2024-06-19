import './helpers/typedef'

/**
 * @function criarMembro
 * @description Essa função é usada para criar um objeto membro
 *
 * @param {string} id - UUID gerado de preferência por crypto.randomUUID()
 * @param {string} nome - Nome do usuário
 * @param {string} senha - Senha do usuário
 * @param {boolean} admin - Define se o usuário é adminitrador ou não
 *
 * @return {membro} Retorna o objeto membro
 */
export function criarMembro(id, nome, senha, admin){
    const membro = {
        "id": id,
        "nome": nome,
        "senha": senha,
        "admin": admin
    }

    return membro
}


/**
 *
 * @function criarFlor
 * @description Essa função é usada para criar um Objeto flor
 *
 * @param {string} id - UUID gerado de preferência com crypto.randomUUID()
 * @param {string} nome - Nome da flor
 * @param {number} valor - Valor monetário da flor ex: 10.20
 * @param {string} florImg - Url da flor
 * @param {string} idReservado - Id do usuário que reservou a flor, se existir
 *
 * @returns {flor} Retorna o objeto Flor
 */
export function criarFlor(id, nome, valor, florImg, idReservado){

    const flor = {
        id: id,
        nome: nome,
        valor: valor,
        florImg: florImg,
        idReservado: idReservado,
    }

    return flor
    
}

/**
 * @function encontrarPor
 *
 * @param {string} instancia -
 * @param {any} valor -
 * @param {object[]} array -
 *
 * @returns {object[]}
 *
 */
export function encontrarPor(instancia, valor, array){
    const encontrados = [] 

    array.forEach((item) => {
        if (item[instancia] == (valor)){
            encontrados.push(item)
        }
    })

    return encontrados
}

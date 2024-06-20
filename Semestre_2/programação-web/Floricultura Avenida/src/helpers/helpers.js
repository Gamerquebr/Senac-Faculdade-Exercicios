/**
 * @function encontrarPor
 * @summary encontra objetos dentro de uma tabela
 *
 * @description Dado um valor, compara esse valor com o campo de cada objeto dentro
 * de uma tabela (array). Retorna uma tabela (array), de todos os objetos com o valor
 * correspondente
 *
 * @param {string} campo - O campo do objeto
 * @param {*} valor - O valor que deseja ser encontrado dentro da tabela
 * @param {string} chave - A chave da tabela no localStorage
 * @param {boolean} [unico] - Se for true, retorna somente 1 objeto e não uma array
 *
 * @returns {object[] | object}
 */
export function encontrarPor(campo, valor, chave, unico = false) {
    const objetosComOValor = []

    const localItem = localStorage.getItem(chave)
    if (localItem == ""){
        return []
    }

    /** @type{object[]} */
    const tabela = JSON.parse(localItem)

    tabela.forEach((objeto) => {
        if (objeto[campo] == valor) {
            objetosComOValor.push(objeto)
        }
    })

    if (unico){
        if (objetosComOValor.length > 0)
            return objetosComOValor[0]
        else 
            return {}
    }
    else {
        return objetosComOValor
    }

}

/** 
 * @function addToLocalStorage
 * @summary Adiciona seguramente um objeto ao localStorage
 *
 * @description Com a key da array de objetos armazenada no localStorage,
 * adiciona uma nova instância dentro da array de uma maneira segura.
 * Se não existir array, cria uma array com o item dentro e armazena no
 * localStorage.
 *
 * @param {string} key - Chave que aponta onde a array está no localStorage
 * @param {object} item - Objeto que será armazenado na array dentro do LocalStorage
 *
 * @returns {void}
 */
export function addToLocalStorage(key, item){
    const localItem = localStorage.getItem(key) 

    if (localItem == ""){
        const itemJSON = JSON.stringify([item])  
        localStorage.setItem(key, itemJSON)
    }
    else{
        const localItemArray = JSON.parse(localItem)
        localItemArray.push(item)
        localStorage.setItem(key, JSON.stringify(localItemArray))
    }

}

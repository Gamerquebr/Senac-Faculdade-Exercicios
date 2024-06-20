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
 * @param {object[] | string} instancia - A tabela ou a chave da tabela no localStorage
 *
 * @returns {object[]}
 */
export function encontrarPor(campo, valor, instancia) {
    const objetosComOValor = []

    /** @type{object[]}*/
    let tabela = []

    //Se for uma string, puxa a tabela do localStorage
    if (typeof instancia === "string"){
        const localItem = localStorage.getItem(instancia)
        if (localItem == ""){
            return []
        }

        tabela = JSON.parse(localItem)
    }
    //Se for um objeto[], não faz nada, só atribui a variável tabela
    else tabela = instancia


    tabela.forEach((objeto) => {
        if (objeto[campo] == valor) {
            objetosComOValor.push(objeto)
        }
    })

    return objetosComOValor
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

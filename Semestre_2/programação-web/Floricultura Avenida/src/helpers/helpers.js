export class Tabela {
    #_tabela /** @type object[]*/
    #_localStorageKey /** @type string*/

    /** @param {string} LocalStorageKey */
    constructor(LocalStorageKey){
        this.#_tabela = this.#obterDoLocalStorage(LocalStorageKey)
        this.#_localStorageKey = LocalStorageKey
    }

    /**
     * @returns object[]
     */
    get tabela(){
        return this.#_tabela.slice(1)
    }

    /** 
     * @param {object} objeto
     */
    adicionar(objeto){
        this.#validarObjeto(objeto)

        this.#_tabela.push(objeto)
    }


    /**
     * @param {string} campo
     * @param {*} valor
     * @returns {object[] | null}
     */
    encontrarPor(campo, valor){
        const objetosComOValor = null

        this.#_tabela.forEach(objeto => {
            if (objeto[campo] == valor) {
                objetosComOValor.push(objeto)
            }
        })

        return objetosComOValor
    }

    /**
     * @param {string} campo
     * @param {*} valor
     * @param {object[]} novosValores
     */
    mudarPor(campo, valor, novosValores){
        this.#validarObjeto(novosValores)

        this.#_tabela.forEach((objeto, i, tabela) => {

            if (objeto[campo] == valor) {

                Object.keys(novosValores).forEach(key => {
                    tabela[i][key] = novosValores[key]
                })
            }
        })

    }

    /**
     * @param {string} campo
     * @param {*} valor
     * @returns {object | null}
     */
    encontrarUmPor(campo, valor){
        let objetoComOValor = null;

        this.#_tabela.some(objeto => {
            if (objeto[campo] == valor) {

                objetoComOValor = objeto
                return true
            }
        })

        return objetoComOValor
    }

    /**
     * @param {string} campo
     * @param {*} valor
     */
    deletarPor(campo, valor){

        this.#_tabela = this.#_tabela.filter(objeto => {
            return objeto[campo] != valor
        })
        
    }

    enviarParaLocalStorage(){
        localStorage.setItem(this.#_localStorageKey, JSON.stringify(this.#_tabela))
    }

    /**
     * @param {string} key 
     * @return {object[]}
     */
    #obterDoLocalStorage(key){
        const tabela = JSON.parse(localStorage.getItem(key))
        if(!tabela){
            throw Error(`Não existe nenhuma tabela a chave "${key}" no localStorage!`)
        }

        return tabela
    }

    /**
     * @param {object} objeto
     */
    #validarObjeto(objeto){
        /** @type object*/
        const instanciaTabela = this.#_tabela[0]

        Object.keys(objeto).forEach(key => {

            if(!Object.keys(instanciaTabela).includes(key)){
                throw Error(`Objeto Inválido, a chave "${key}" não existe na tabela!`)
            }
        })
    }


    /** 
     * @param {string[]} campos 
     * @param {string} key 
     */
    static iniciar(campos, key){
        const tabela = [{}]
        campos.forEach(campo => {
            tabela[0][campo] = null
        })

        localStorage.setItem(key, JSON.stringify(tabela))
    }

    /**
    * @function encontrarEmLocalStoragePor
    * @summary encontra objetos dentro de uma tabela
    *
    * @description Dado um valor, compara esse valor com o campo de cada objeto dentro
    * de uma tabela (array). Retorna uma tabela (array) de todos os objetos com o valor
    * correspondente ou retorna apenas um objeto se o parâmetro "unico" for passada como true
    *
    * @param {string} campo - O campo do objeto
    * @param {*} valor - O valor que deseja ser encontrado dentro da tabela
    * @param {string} keyTabela - A chave da tabela no localStorage
    * @param {boolean} [unico] - Se for true, retorna somente 1 objeto e não uma array
    *
    * @returns {TabelaTipo | object | null}
    */
    static encontrarEmLocalStoragePor(campo, valor, keyTabela, unico = false) {
        const objetosComOValor = []

        const localItem = localStorage.getItem(keyTabela)
        if (!localItem){
            return null
        }

        /** @type{object[]} */
        const tabela = JSON.parse(localItem)


        tabela.some(objeto => {
            if (objeto[campo] == valor) {

                if (unico){
                    objetosComOValor.push(objeto)
                    return true
                }
                else {
                    objetosComOValor.push(objeto)
                }
            }
        })


        if (objetosComOValor.length <= 0){ 
            return null 
        }
        else if (unico){
            return objetosComOValor[0]
        }
        else {
            return objetosComOValor
        }
    }

}

export class Sessao{

    /** 
     * @param {string} id 
     * @param {string} [keySessao="sessao"] 
     */
    static criar(id, keySessao = "sessao"){
        localStorage.setItem(keySessao, JSON.stringify(id))
    }

    /** 
     * @param {string} [keySessao="sessao"] 
     * @param {string} [keyTabela="membro"] 
     */
    static apagar(keySessao = "sessao", keyTabela = "membro"){
        const sessao = JSON.parse(localStorage.getItem(keySessao))
        if(!sessao){
            return false
        }
        else if(Tabela.encontrarEmLocalStoragePor("id", sessao, keyTabela, true) == null){
            return false 
        }
        else{
            return true
        }
    }
    /** 
    * @function validarSessao
    * @summary Verifica se uma sessão é válida.
    *
    * @description Verifica se existe algum id dentro da key "sessao" dentro do localStorage.
    * Se existir, verifica se algum membro tem esse id, se tiver, retorna true, se a sessão
    * estiver vazia ou se nenhum membro ter o id que está armazenado dentro da sessão, 
    * retorna false
    *
    * @param {string} [KeySessao] - Chave da sessão no localStorage, O valor padrão é "sessao" 
    * @param {string} [KeyTabela] - Chave da tabela no localStorage, O valor padrão é "membro"
    *
    * @return {boolean}
    */
    static validar(KeySessao = "sessao", KeyTabela = "membros"){
        const sessao = JSON.parse(localStorage.getItem(KeySessao))
        if(!sessao){
            return false
        }
        else if(Tabela.encontrarEmLocalStoragePor("id", sessao, KeyTabela, true) == null){
            return false 
        }
        else{
            return true
        }
    }
}

///*** 
// * @function AdicionarALocalStorage
// * @summary Adiciona seguramente um objeto ao localStorage
// *
// * @description Com a key da array de objetos armazenada no localStorage,
// * adiciona uma nova instância dentro da array de uma maneira segura.
// * Se não existir array, cria uma array com o item dentro e armazena no
// * localStorage.
// *
// * @param {string} key - Chave que aponta onde a array está no localStorage
// * @param {object} item - Objeto que será armazenado na array dentro do LocalStorage
// *
// * @returns {void}
// */
//export function AdicionarALocalStorage(key, item){
//    const localItem = localStorage.getItem(key) 
//
//    if (!localItem){
//        const itemJSON = JSON.stringify([item])  
//        localStorage.setItem(key, itemJSON)
//    }
//    else{
//        const localItemArray = JSON.parse(localItem)
//        localItemArray.push(item)
//        localStorage.setItem(key, JSON.stringify(localItemArray))
//    }
//
//}
//

import { Utils } from "./Utils";
import Personagem from "./personagem";

export default class Guerreiro extends Personagem{
    constructor(nome: string){
        super("", 0, 0, 0, 0, 0, 0, 0,)

        this._nome = nome + " Warrior"
        this._forca = Utils.randomNum(1, 1000)
        this._mental = 0
        this._ataque = this._forca * 10
        this._esquiva = Utils.randomNum(0, 50)
        this._resistencia = Utils.randomNum(0, 90)
        this._vida_max = Utils.randomNum(1, 40000)
        this._vida_atual = this.vida_max
    }


}
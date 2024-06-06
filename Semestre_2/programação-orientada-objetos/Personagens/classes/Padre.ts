import { Utils } from "./Utils";
import Personagem from "./personagem";

export default class Padre extends Personagem{
    constructor(nome: string){
        super("", 0, 0, 0, 0, 0, 0, 0,)

        this._nome = nome + " Priest"
        this._forca = 0
        this._mental = 0
        this._ataque = 0
        this._esquiva = 0
        this._resistencia = 0
        this._vida_max = Utils.randomNum(1, 8000)
        this._vida_atual = this.vida_max
    }
    
    public atacar(inimigo: Personagem): void {
        const chance: number = Utils.randomNum(0, 100)
        if (chance < 40){
            console.log("O inimigo agora não tem inimigos *arurian dance começa a tocar*")
            inimigo.contra_atacar(this)
        }
        console.log("desviou")
    }
    public contra_atacar(inimigo: Personagem): void {
        const chance: number = Utils.randomNum(0, 100)
        if (chance < 40){
            console.log("O inimigo agora não tem inimigos *arurian dance começa a tocar*")
        }
        console.log("desviou")
    }
    public aprimorar_habilidade(): void {
        throw Error("Padre não tem magiazinha, porra")
    }
    public regenerar_vida(): void {
        this._vida_atual += this._vida_max * 0.1
    }

}
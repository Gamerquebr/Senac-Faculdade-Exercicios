import { Utils } from "./Utils";

export default class Personagem{
    protected _nome: string;
    protected _forca: number;
    protected _mental: number;
    protected _ataque: number;
    protected _esquiva: number;
    protected _resistencia: number;
    protected _vida_atual: number;
    protected _vida_max: number;

    constructor(nome: string, forca: number, mental: number, ataque: number, esquiva: number, resistencia: number, vida_atual: number, vida_max: number){
        this._nome = nome
        this._forca = forca
        this._mental = mental
        this._ataque = ataque
        this._esquiva = esquiva
        this._resistencia = resistencia
        this._vida_atual = vida_atual
        this._vida_max = vida_max
    }

    //Get
    public get nome(): string{
        return this._nome
    }
    public get forca(): number{
        return this._forca
    }
    public get mental(): number{
        return this._mental
    }
    public get ataque(): number{
        return this._ataque
    }
    public get esquiva(): number{
        return this._esquiva
    }
    public get resistencia(): number{
        return this._resistencia
    }
    public get vida_atual(): number{
        return this._vida_atual
    }
    public get vida_max(): number{
        return this._vida_max
    }

    //Set
    public set vida_atual(vida_nova: number){
        this._vida_atual = vida_nova
    }

    //Métodos
    public atacar(inimigo: Personagem): void{
        const chance: number = Utils.randomNum(0, 100)
        if (chance < inimigo.esquiva){

            const resistencia_inimigo = inimigo.resistencia
            const vida_inimigo = inimigo.vida_atual

            const vida_removida = this._ataque * (1 - inimigo.resistencia / 100)
            inimigo.vida_atual = vida_inimigo - vida_removida

            console.log(this._nome, resistencia_inimigo, vida_inimigo, vida_removida, inimigo.resistencia / 100)

            inimigo.contra_atacar(this)
            return
        }
        console.log("Meu mano esquivou, porra")
    }

    public contra_atacar(inimigo: Personagem): void {
        const chance: number = Utils.randomNum(0, 100)
        if (chance > inimigo.esquiva){
            const resistencia_inimigo = inimigo.resistencia
            const vida_inimigo = inimigo.vida_atual

            const vida_removida = this._ataque * (inimigo.resistencia / 100)
            inimigo.vida_atual = vida_inimigo - vida_removida

        } 
    }


    public aprimorar_habilidade(): void {
        this._forca += this._forca * 0.10
    }
    public regenerar_vida(): void {
        this._vida_atual += this._vida_max * 0.05
    }
}
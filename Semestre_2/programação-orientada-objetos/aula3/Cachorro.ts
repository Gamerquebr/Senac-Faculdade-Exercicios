import { Util } from "./Util";

export class Cachorro {

    tipo: string;
    nome: string;
    porte: string;
    peso: number;
    energia: number;
    felicidade: number;

    constructor(nome: string) {
        this.tipo = 'indefinido';
        this.nome = nome;
        this.porte = 'indefinido';
        this.energia = (Math.floor(Math.random() * 99));
        this.peso = Math.random() * 1;
        this.felicidade = Math.floor(1 + Math.random() * 99);

    }
    comer(): void {
        this.peso *= 1.1
        this.felicidade += parseInt(""+1+ Math.random() * 9);
        this.energia -= parseInt(""+10+ Math.random() * 10);
        this.validaStatus(this);

    }
    latir(numeroDeVezes: number): string {
        this.felicidade -= parseInt(""+1+ Math.random() * 2)*numeroDeVezes;
        this.energia -= parseInt(""+1+ Math.random() * 4)*numeroDeVezes;
        this.validaStatus(this);
        return('Au '.repeat(numeroDeVezes));
    }
    dormir(tempoEmHoras: number): void {
        this.energia += Util.randomizar(1,10)*tempoEmHoras;
        this.felicidade += Util.randomizar(1,3)*tempoEmHoras;
        this.validaStatus(this);

    }
    brincar(tempoEmMinutos: number): void {
        this.energia -= Util.randomizar(1,4)*tempoEmMinutos;
        this.felicidade += Util.randomizar(1,4)*tempoEmMinutos;
        this.validaStatus(this);
    }
    validaStatus(cachorro: Cachorro): void{
        if(cachorro.energia < 0){
            throw new Error(`O ${this.nome} subiu!`);
        }
        if(cachorro.felicidade < 0){
            console.log(`${this.nome} está deprimido!`);
        }
        if(cachorro.energia > 100){
            cachorro.energia = 100;
        }
        if(cachorro.felicidade > 100){
            cachorro.felicidade = 100;
        }
    }

}
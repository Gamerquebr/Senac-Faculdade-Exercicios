export class Reserva {
    public idQuadra: number;
    public data: string;

    //tmp
    public nome: string;

    constructor(nome: string, id: number) {
        this.nome = nome;
        this.data = Date();
        this.idQuadra = id;
    }

}

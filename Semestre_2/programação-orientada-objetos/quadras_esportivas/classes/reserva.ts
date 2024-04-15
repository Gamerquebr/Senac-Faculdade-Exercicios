export class Reserva {
    public readonly idQuadra: number;
    public readonly idMembro: number;
    public readonly horario: string[2];
    public readonly data: string;

    constructor(idMembro: number, idQuadra: number, horario: string[2]) {
        this.idQuadra = idQuadra;
        this.idMembro = idMembro;
        this.horario = horario;
        this.data = Date();
    }

}

export class Calculadora{
    dividir(x: number, y: number): Number {
        if(y == 0){
            throw new Error('Nâo é possível dividir por zero')
        }
        return x / y
        
    }

    somar(x: number, y: number): number {
        return x + y
    }

}
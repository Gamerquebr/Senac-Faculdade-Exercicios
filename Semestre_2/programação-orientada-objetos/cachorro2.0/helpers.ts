export class helper {
    
    static randomNum(x:number = 0, y:number = 0): number{
        return Math.floor(Math.random() * (y - x + 1)) + x
    }
    static randomFloat(x:number = 0, y:number = 0): number{
        return parseFloat((Math.random() * (y - x + 1) + x).toFixed(1))
    }
}

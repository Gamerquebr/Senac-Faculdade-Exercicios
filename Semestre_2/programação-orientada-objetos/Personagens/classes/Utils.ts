export class Utils {
    
    static randomNum(x:number = 0, y:number = 0): number{
        return Math.floor(Math.random() * (y - x + 1)) + x
    }
}

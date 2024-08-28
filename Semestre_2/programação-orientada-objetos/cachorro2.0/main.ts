import { Cachorro } from "./classes/cachorro"

class App{

    start(): void{
        let pet: Cachorro = new Cachorro(20)
        console.table(pet)
    } 
}

const app: App = new App
app.start()


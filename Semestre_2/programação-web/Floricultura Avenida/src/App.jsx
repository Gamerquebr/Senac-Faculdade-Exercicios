import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import Registro from './pages/registro/Registro.jsx'

import './App.css'

import { Tabela } from './helpers/helpers.js'

if (!localStorage.getItem("membros")){
    Tabela.iniciar(["id", "nome", "senha", "admin"], "membros")

    const membros = new Tabela("membros")

    /** @type Membro */
    membros.adicionar({
        id: crypto.randomUUID(),
        nome: "admin",
        senha: "admin",
        admin: true
    } )

    membros.enviarParaLocalStorage()
}
if (!localStorage.getItem("flores")){
    Tabela.iniciar(["id", "nome", "valor", "florImg", "idReservado"],"flores")

    const flores = new Tabela("flores")

    flores.adicionar({
        id: crypto.randomUUID(),
        nome: "Cinerária",
        valor: 12.50,
        florImg: "https://media.istockphoto.com/id/1226261458/pt/foto/close-up-purple-cineraria-flowers.jpg?s=612x612&w=0&k=20&c=5aJam69bOp0EujfrM7YPVNEqqpnb9P4odz7ASuWbbks=",
        idReservado: ""
    })

    flores.adicionar({
        id: crypto.randomUUID(),
        nome: "Flor de Lis",
        valor: 22.80,
        florImg: "https://cdnm.westwing.com.br/glossary/uploads/br/2023/06/28194141/Flor-de-lis-fonte-unsplash-1.jpg",
        idReservado: ""
    })

    flores.adicionar({
        id: crypto.randomUUID(),
        nome: "Rosa",
        valor: 12.90,
        florImg: "https://i.pinimg.com/originals/b0/84/de/b084de87ddff620c570713762c109e85.jpg",
        idReservado: ""
    })

    flores.adicionar({
        id: crypto.randomUUID(),
        nome: "Girassol",
        valor: 22.80,
        florImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgr6CH9H2wpBYCjektQulHg4_CJDVnvaAzKA&s",
        idReservado: ""
    })
    flores.adicionar({
        id: crypto.randomUUID(),
        nome: "Azaléia",
        valor: 22.80,
        florImg: "https://global.cdn.magazord.com.br/vasoeflor/img/2023/10/produto/1946/azaleia1.jpg?ims=fit-in/800x800/filters:fill(white)",
        idReservado: ""
    })

    flores.adicionar({
        id: crypto.randomUUID(),
        nome: "Higanbana",
        valor: 4.44,
        florImg: "https://pm1.aminoapps.com/6475/1fd31f68af5eba2a5751f57b09e4e8071a971dcb_00.jpg",
        idReservado: ""
    })

    flores.adicionar({
        id: crypto.randomUUID(),
        nome: "Flor de Lótus",
        valor: 7.70,
        florImg: "https://static.significados.com.br/foto/flor-de-lotus-og.jpg?class=ogImageRectangle",
        idReservado: ""
    })

    flores.enviarParaLocalStorage()
}

import {
    HashRouter as Router,
    Route,
    Routes
} from "react-router-dom"
import { Toaster } from 'react-hot-toast'

function App() {

    return (
        <>
            <Toaster />
            <Router>
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="registro" element={<Registro />} />
                </Routes>
            </Router>
        </>
    )
}

export default App

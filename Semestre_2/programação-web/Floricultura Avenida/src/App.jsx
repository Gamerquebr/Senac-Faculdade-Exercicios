import Admin from './pages/admin/Admin'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Registro from './pages/registro/Registro'

import './App.css'

import { criarMembro } from './helpers/helpers' 
import { criarFlor } from './helpers/helpers'

import './helpers/typedef'

if(localStorage.getItem("membros") == null){

    const id = crypto.randomUUID()
    let nome = "admin"
    const senha = "admin"
    const admin = false
    
    const adminObjeto = criarMembro(id, nome, senha, admin)

    localStorage.setItem("membros", [adminObjeto].toString())
}
if(localStorage.getItem("flores") == null){

    const id = crypto.randomUUID()
    const nome = "cinerária"
    const valor = 12.50
    const florImg = "TO-DO"
    const idReservado = ""

    const florObjeto = criarFlor(id, nome, valor, florImg, idReservado)

    localStorage.setItem("flores", [florObjeto].toString())
}

import {
    BrowserRouter as Router,
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
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </Router>
        </>
    )
}

export default App

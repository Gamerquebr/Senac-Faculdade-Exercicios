import Admin from './pages/admin/Admin'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Registro from './pages/registro/Registro'

import './App.css'

import './helpers/typedef'

if (localStorage.getItem("membros") == ""){

    /** @type membro */
    const adminObjeto = {
        id: crypto.randomUUID(),
        nome: "admin",
        senha: "admin",
        admin: true
    } 

    localStorage.setItem("membros", JSON.stringify([adminObjeto]))
}
if (localStorage.getItem("flores") == ""){

    /** @type flor */
    const florObjeto = {
        id: crypto.randomUUID(),
        nome: "cinerária",
        valor: 12.50,
        florImg: "",
        idReservado: ""
    }

    localStorage.setItem("flores", JSON.stringify([florObjeto]))
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

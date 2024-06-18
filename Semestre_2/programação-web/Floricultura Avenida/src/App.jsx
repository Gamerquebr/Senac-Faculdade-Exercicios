import Admin from './pages/admin/Admin'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Registro from './pages/registro/Registro'

import './App.css'

import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom"

function App() {

    return (
        <>
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

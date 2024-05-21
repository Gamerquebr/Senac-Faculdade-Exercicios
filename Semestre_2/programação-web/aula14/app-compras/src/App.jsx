import { useState, useEffect } from "react"
import { Toaster } from 'sonner'

import './App.css'
import Titulo from "./components/Titulo"
import ItemLista from "./components/ItemLista"
import FormInclusao from "./components/FormInclusao"
import Total from "./components/Total"
import LimparLista from "./components/LimparLista"

function App() {
    const [compras, setCompras] = useState([])

    // com [], o useEffect ocorre sempre que a página for carregada
    useEffect(() => {
        // se houver dados salvos em localStorage
        if (localStorage.getItem("compras")) {
            // recupera os dados salvos em localStorage, fazendo o "parse" (a conversão)
            // da string em um vetor de objetos
            const compras2 = JSON.parse(localStorage.getItem("compras"))

            setCompras(compras2)
        }
    }, [])

    const listaCompras = compras.map(compra => 
        <ItemLista key={compra.descricao} compra={compra}/>
    )

    return (
        <>
            <Toaster richColors position="top-right" />
            <Titulo/>
            <div className="container">
                <img src="./compras.png" alt="Compras" />
                <div>
                    <FormInclusao compras={compras} setCompras={setCompras}/>
                    <h3 className='lista'>Lista dos Itens Adicionados</h3>
                    {listaCompras}
                    <Total compras={compras}/>
                    <LimparLista setCompras={setCompras}/>
                </div>
            </div>
        </>
    )
}

export default App

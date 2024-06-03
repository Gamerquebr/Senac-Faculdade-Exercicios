import { useEffect, useState } from 'react'
import './App.css'
import Titulo from './components/Titulo'
import ItemLista from './components/ItemLista'

function App() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        if (localStorage.getItem("filmes")){
            const filmes2  = JSON.parse(localStorage.getItem("filmes"))
            setFilmes(filmes2)
        }
    }, [])

    const listaFilmes = filmes.map(filme => (
        <ItemLista key={filmes.titulo} filme={filme} />
    ))

    return (
        <>
            <div className='container'>
                <Titulo />
                <h1>Lista de filmes cadastrados</h1>

                <div className='grid-container'>
                    { listaFilmes }
                </div>
            </div>
        </>
    )
}

export default App

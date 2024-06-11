import { useEffect, useState } from 'react'
import './App.css'
import Titulo from './Components/Titulo'

const [animais, setAnimais] = useState([])
useEffect(() => {
    const listaAnimais = JSON.parse(localStorage.getItem("animais"))
    setAnimais(listaAnimais)
}, [])


function App() {

  return (
    <>
        <Titulo />
        <h2 className='lista__titulo'>Lista de animais pra doação</h2>
        <button className='lista__adicionar'>Adicionar</button>
        <main className='lista__container'>

        </main>
    </>
  )
}

export default App

import "./App.css"
import { useState } from 'react'

function App() {
  const [mesas, setMesas] = useState(10)

  function entrada(){
    if (mesas <= 0){
      alert("Não há mesas disponíveis :(")
      return -1
    }

    alert("Cliente chegando ( ͡° ͜ʖ ͡°)")
    setMesas(mesas - 1)
  }
  function saida(){
    if (mesas >= 10){
      alert("Não tem clientes :O")
      return -1
    }

    alert("Cliente saindo >:(")
    setMesas(mesas + 1)
  }


  return (
    <>
      <h1>Senac Happy Hour</h1>
      <h2>Controle de mesas</h2>

      <hr></hr>

      <img className="figura" src="../public/bar.jpg" alt="bar.jpg"></img>
      <h2>
        Mesas Disponiveis: <span className="destaque">{mesas}</span> -
        Mesas Ocupadas: <span className="destaque">{10 - mesas}</span>
      </h2>

      <button onClick={entrada}>Entrada de Cliente</button>&nbsp;&nbsp;&nbsp;
      <button onClick={saida}>Saída de Cliente</button>
    </>
  )
}

export default App

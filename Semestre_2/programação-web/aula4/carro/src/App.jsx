import { useState } from 'react'
import './App.css'

function App() {
  const [modelo, setModelo] = useState("")
  const [preco, setPreco] = useState()

  function calcular(){
    alert(`
      O veículo ${modelo} com o preço de R$ ${Number(preco).toFixed(2)}\n
      Promoção: Entrada de R$ ${(Number(preco) * 0.5).toFixed(2)} + 12x de R$ ${(Number(preco) / 12).toFixed(2)}
    `)
  }

  return (
    <>
      <form>
        <label htmlFor="modelo">modelo:</label><br/>
        <input 
          id="modelo" 
          type="text" 
          value={modelo} 
          onChange={(e) => setModelo(e.target.value)}
        />

        <br/> 

        <label htmlFor='preco'>preço</label><br/>
        <input
          id="preco"
          type="number"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />

        <br/>

        <input type="submit" onClick={(e) => {e.preventDefault(); calcular()}}></input>
      </form> 
    </>
  )
}

export default App

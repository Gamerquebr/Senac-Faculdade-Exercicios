import { useState } from 'react'
import './App.css'

let imagens = ["verde.png", "amarela.png","vermelha.png"]

function App() {
  const [count, setCount] = useState(0)

  function imagem(){
    if (count == 2){
      setCount(0)
      return
    }
    setCount(count + 1) 
  }

  function Texto(){
    if (count == 0){
      return (<h2 style={{color: "green"}}>Sinal Verde</h2>)
    }
    else if (count == 1){
      return (<h2 style={{color: "yellow"}}>Sinal Amarelo</h2>)
    }
    else{
      return (<h2 style={{color: "red"}}>Sinal Vermelho</h2>)
    }
  }

  return (
    <>
      <h1>Escola de Trânsito</h1>
      <h2>Aula sobre sinaleira</h2>
      <hr/>
      <img onClick={imagem} src={imagens[count]}/>
      <Texto />
      <em>* clique sobre a sinaleira para trocar de cor</em>
    </>
  )
}

export default App

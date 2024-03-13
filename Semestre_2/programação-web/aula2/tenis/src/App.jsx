import { useState } from 'react'
import './App.css'

let imagens = ["/bornana1.webp", "/bornana2.jpg", "/bornana3.jpg"]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>BORNANA</h1>
      <h2>Veja detalhes <i style={{color: "red"}}>BORNANA</i></h2>
      <hr/>
      <img className="main" src={imagens[count]}/><br/>

      <img className="sec" onClick={() => setCount(0)} src="/bornana1.webp"/>
      <img className="sec" onClick={() => setCount(1)} src="/bornana2.jpg"/>
      <img className="sec" onClick={() => setCount(2)} src="/bornana3.jpg"/>
    </>
  )
}

export default App

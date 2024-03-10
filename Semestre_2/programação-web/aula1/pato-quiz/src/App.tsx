import { useState } from 'react'
import './App.css'
import Resposta from './Resposta.tsx'

function App() {

  const [state, setState] = useState(-1)

  return (
    <>
      <h1>Quiz de pato</h1>    
      <h2>Qual desses animais é um Pato?</h2>

      <hr/>

      <div className='opcoes'>
        <img onClick={() => setState(1)} src="./pato.png"/>
        <img onClick={() => setState(0)}src="./ganso.avif"/>
      </div>

      <Resposta resposta={state}/>

    </>
  )
}

export default App

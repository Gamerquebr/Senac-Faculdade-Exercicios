import { useState } from 'react'

import './App.css'

function App() {
  const [aposta, setAposta] = useState("")
  const [cpu, setCpu] = useState("")
  const [resultado, setResultado] = useState("")

  function desafiarPC(){
    const num = Math.ceil(Math.random() * 3)

    if (aposta == ""){
      alert("Erro, aposta não escolhida")
      return
    }

    if (num == 1){
      setCpu("./pedra.png")

      if (aposta == "./pedra.png") setResultado("Empatou! :|")
      else if (aposta == "./tesoura.png") setResultado("Ganhou! :)")
      else setResultado("Perdeu! :(")
    }
    else if (num == 2){
      setCpu("./papel.png")

      if (aposta == "./papel.png") setResultado("Empatou! :|")
      else if (aposta == "./pedra.png") setResultado("Ganhou! :)")
      else setResultado("Perdeu! :(")
    }
    else {
      setCpu("./tesoura.png")

      if (aposta == "./tesoura.png") setResultado("Empatou! :|")
      else if (aposta == "./papel.png") setResultado("Ganhou! :)")
      else setResultado("Perdeu! :(")
    }
  }

  return (
    <>
      <h1>Jogo: JoKenPo</h1>
      <hr />

      <h2 className='cor-aposta'>
        Clique sobre a imagem para fazer a sua aposta :D
      </h2>
      <img src="./pedra.png" onClick={() => {setAposta("./pedra.png")}} alt="Pedra" />
      <img src="./papel.png" onClick={() => {setAposta("./papel.png")}} alt="Papel" />
      <img src="./tesoura.png" onClick={() => {setAposta("./tesoura.png")}} alt="Tesoura" />

      {aposta && 
        <>
          <span>Sua aposta é: </span>
          <img className="img-grande" src={aposta} alt="Aposta" />
        </>
      }

      <h2 className='cor-pc'>
        Clique em Apostar para Desafiar o Computador <br/>
        <button onClick={desafiarPC}>Apostar</button>
      </h2>
      <img src="./pedra.png" alt="Pedra" />
      <img src="./papel.png" alt="Papel" />
      <img src="./tesoura.png" alt="Tesoura" />

      {cpu &&
        <>
          <span>Computador apostou: </span>
          <img className="img-grande" src={cpu} alt="Aposta PC" />
        </>
      }
      <h1>{resultado}</h1>
    </>
  )
}

export default App

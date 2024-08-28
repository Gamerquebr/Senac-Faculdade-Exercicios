import { useState } from 'react';

function App() {

  const [copoNum, setNum] = useState(0);
  const [estadoDoJogo, setEstado] = useState(0);
  

  function Copos(){

    if(copoNum === 0){
      return(
        <>
          <img onClick={() => {setNum(1)} } src="./copo.png"/>
          <img onClick={() => {setNum(2)} } src="./copo.png"/>
          <img onClick={() => {setNum(3)} } src="./copo.png"/>
        </>
      )
    }     

    const num = Math.ceil(Math.random() * 3)

    if (num === copoNum){
      setEstado(1) 
    }
    else{
      setEstado(-1)
    }

    return(
      <>
        <img src={num === 1 ? "./copo_certo.png" : "./copo_vazio.png"}/>
        <img src={num === 2 ? "./copo_certo.png" : "./copo_vazio.png"}/>
        <img src={num === 3 ? "./copo_certo.png" : "./copo_vazio.png"}/>
      </>
    )
  }

  function EstadoDoJogador() {
    switch(estadoDoJogo){

      case(1):
        return(<h2 style={{color: "green"}}>Lets gooooooo, você adivinhou certo, parabéns! :D</h2>)

      case(-1):
        return(<h2 style={{color: "red"}}>Nooooooooo, você escolheu o copo errado :(</h2>) 

      default:
        return(<h2 style={{color: "blue"}}>Clique sobre a imagem e faça sua aposta!</h2>)
    }
  } 
  

  return (
    <>
      <h1>Jogo do copo</h1> 

      <Copos/>
      <hr/>

      <EstadoDoJogador/>
      <button onClick={() => {setNum(0); setEstado(0)}}>Resetar</button>
    </>
  )
}

export default App

import { useForm } from "react-hook-form"
import { useState } from "react"
import './App.css'

function App() {

  const { register, handleSubmit } = useForm()
  const [resposta, setResposta] = useState("")
  const [calculo, setCalculo] = useState("")

  function calcularPrato(data) {
    const nome = data.nome
    const peso = Number(data.peso)

    setResposta(`${nome}, Seu prato pesou: ${peso} gr.`)

    const valor = (peso/1000) * 72.00
    setCalculo(`Valor a pagar R$: ${valor.toFixed(2)}`)
  }

  return (
    <>
      <h1 className='destaque'>Buffet Avenida</h1>
      <img src="./buffet.webp" alt="Buffet" className='imagem'/>
      <h2>Cálculo da Refeição</h2>
      
      <form onSubmit={handleSubmit(calcularPrato)}>
        <p>
          <label htmlFor="nome">Nome do cliente:</label>
          <input type="text" id="nome" {...register("nome")}/>
        </p>
        <p>
          <label htmlFor="peso">Peso do Prato(gr):</label>
          <input type="text" id="peso" {...register("peso")}/>
        </p>
        <p>
          <input type="submit" value="Calcular"/>
          &nbsp;&nbsp;&nbsp;
          <input type="reset" value="Limpar" />
        </p>
      </form>
      <h2 className="destaque">{resposta}</h2>
      <h2 className="destaque">{calculo}</h2>

    </>
  )
}

export default App

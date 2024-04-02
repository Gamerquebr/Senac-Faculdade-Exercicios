import { useState } from 'react'
import './App.css'

function App() {
  const [values,setValues] = useState({
    'nome': '',
    'nota1': '',
    'nota2': '',
  })

  const [avarage, setAvarage] = useState(null)

  function handleChange(e){
    const id = e.target.id
    const value = e.target.value

    setValues({
      ...values,
      [id]: value
    })

    setAvarage(null)
  }

  function calculateAvarage(e){
    e.preventDefault()

    const nome = values.nome == '' ? "Aluno" : values.nome

    const nota1 = evaluateGrade(Number(values.nota1))
    const nota2 = evaluateGrade(Number(values.nota2))

    setValues({
      ...values,
      ['nome']: nome,
      ['nota1']: nota1,
      ['nota2']: nota2,
    })

    setAvarage((nota1 + nota2) / 2)

  }

  const evaluateGrade = (nota) => isNaN(nota) || nota < 0 ? 0 : 
                                  nota > 10 ? 10 : 
                                  nota

  function ShowAvarage(){
    return (
      <>
        <h2>{values.nome} com as notas: {values.nota1} e {values.nota2}</h2>

        {avarage < 6 ? 
          <h1 style={{color: 'red'}}>Infelizmente você REPROVOU, LIXO HUMANO! sua média é: {avarage}</h1>
            :
          <h1 style={{color: 'green'}}>Parabéns! Você fez o mínimo! sua média é: {avarage}</h1>
        }
      </>
    )
  }


  return (
    <>
      <form>
        <label htmlFor='nome'>Nome do aluno</label>
        <input 
          id="nome"
          type="text"
          placeholder="Nome do aluno"
          required
          onChange={handleChange}
          value={values.nome}
        />
        <label htmlFor='nota1'>Nota 1:</label>
        <input 
          id="nota1"
          type="text"
          placeholder="Nota 1:"
          required
          onChange={handleChange}
          value={values.nota1}
        />
        <label htmlFor='nota2'>Nota:2</label>
        <input 
          id="nota2"
          type="text"
          placeholder="Nota 2:"
          required
          onChange={handleChange}
          value={values.nota2}
        />
        <input type="submit" onClick={calculateAvarage}/>
      </form>

      {avarage != null &&
        <ShowAvarage/>
      }
    </>
  )
}

export default App

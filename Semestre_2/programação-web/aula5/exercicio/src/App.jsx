import { useState } from 'react'
import './App.css'

function App() {
  const [values, setValues] = useState({
    'modelo': '',
    'marca': '',
    'preco': '',
    'genero': '',
    'renovacao': false,
  })

  const [seguro, setSeguro] = useState(null)

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    const tipo = e.target.type

    if (tipo == 'checkbox')
      setValues({...values, [name]: !values[name] ? true : false})
    else
      setValues({...values, [name]: value})

    console.log(values)
  }
  function handleReset(){
    setValues({
      'modelo': '',
      'marca': '',
      'preco': '',
      'genero': '',
      'renovacao': false,

    })
    setSeguro(null)
  }
  function handleSubmit(e){

    e.preventDefault()
    const valorTotal = Number(values.preco)

    let valorSeguro =  values.renovacao ? valorTotal * 0.10 : valorTotal

    valorSeguro = values.genero == 'homem' ? valorSeguro * 0.03: valorSeguro * 0.02

    setSeguro(valorSeguro)
  }

  return (
    <>
      <h1>Avenida Seguros</h1>
      <hr/>
      <h2>Seguro de veículo: Simulação</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor='modelo'>Modelo: </label>
        <input
          name='modelo'
          id='modelo'
          type='text'
          placeholder='Digite o modelo:'
          required
          onChange={handleChange}
          value={values.modelo}
        /><br/>

        <label htmlFor='marca'>Marca: </label>
        <select 
          name='marca'
          id='marca' 
          required
          onChange={handleChange}
        >
            <option value="Fiat">Fiat</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Ford">Ford</option>
            <option value="Renault">Renault</option>
        </select><br/>

        <label htmlFor='preco'>Valor (Tabele Flipe): </label>
        <input
          name='preco'
          id='preco'
          type='number'
          placeholder='Digite o preço em R$:'
          required
          onChange={handleChange}
          value={values.preco}
        /><br/>

        <label htmlFor='genero'>Principial Condutor:</label>
        <div id='genero'>
          <label htmlFor='homem'>Homem</label>
          <input
            name='genero'
            id='homem'
            type='radio'
            required
            onChange={handleChange}
            checked={values.genero === 'homem'}
            value='homem'
          /><br/>
          <label htmlFor='modelo'>Mulher</label>
          <input
            name='genero'
            id='mulher'
            type='radio'
            required
            onChange={handleChange}
            checked={values.genero === 'mulher'}
            value='mulher'
          />
        </div><br/>

        <input
          id='renovacao'
          name='renovacao'
          type='checkbox'
          onChange={handleChange}
          checked={values.renovacao}
        />
        <label htmlFor='renovacao'>É renovação?</label>
        <br/>

        <button type="submit">Simular Seguro</button>
        <button type="reset" onClick={handleReset}>Limpar</button>

      </form>

      {seguro &&
        <p>
            {values.modelo} {values.marca}<br/>
            Valor Total para 2 anos: R$ {seguro.toFixed(2)}<br/>
            Em 24 parcelas de R$ {(seguro / 24).toFixed(2)}
        </p>
      }
    </>
  )
}

export default App

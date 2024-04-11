import { Quadra } from "../../classes/classes"

import { useForm } from 'react-hook-form'
import { useState } from "react"

import './App.css'

const listaQuadras: Quadra[] = []

listaQuadras.push(new Quadra(1, "Futebol"))
listaQuadras.push(new Quadra(2, "Basquete"))
listaQuadras.push(new Quadra(3, "Padel"))
listaQuadras.push(new Quadra(4, "Volei"))
listaQuadras.push(new Quadra(5, "Tenis"))
listaQuadras.push(new Quadra(6, "Futsal"))

function App() {
  const {register, handleSubmit} = useForm()
  const [reserva, setReserva] = useState(null)

  function registrar(data: any){

        
        const nome = data.nome
        const id = Number(data.quadra) - 1

        listaQuadras[id].reservar(nome)

        console.table(listaQuadras)
  }
  function listar(){
    console.log("TODO")
  }
  return (
      <>
      <h5>Nomes: marcelo, joão, daniel, luiz, talisson</h5>
          <main className='main_principal'>
              <h1>Aluguel de Quadras AVENIDA:</h1>
              <form onSubmit={handleSubmit(registrar)}>
                  <label htmlFor="nome">Nome do Cliente</label>
                  <input type="text" id="nome" {...register("nome")} />
                  <br />
                  <label htmlFor="Esporte">Selecione seu esporte: </label>
                  <select id="quadra" {...register("quadra")}>
                      <option value="1">Futebol</option>
                      <option value="2">Basquete</option>
                      <option value="3">Padel</option>
                      <option value="4">Volei</option>
                      <option value="5">Tenis</option>
                      <option value="6">Futsal</option>
                  </select>
                  <input type="submit" />
              </form>
              <br />
              <button onClick={listar}>Listar Quadras</button>
          </main>
      </>
   )
}

export default App

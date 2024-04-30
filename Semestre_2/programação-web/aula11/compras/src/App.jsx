import { useForm } from "react-hook-form"
import { useState } from "react"
import './App.css'

function App() {

    const { register, handleSubmit } = useForm()
    const [vitima, setVitima] = useState([])

    function cadastraVitima(dados){
        console.log(dados)

        const vitima2 = [...vitima]
        vitima2.push(dados)

        setVitima(vitima2)

    }

    const listaVitimas = vitima.map((item, i) => 
        <>
            <h3 key={i}>
                <span>{item.nome}</span>
                -
                <span>{item.como}</span>
            </h3>
        </>
    )

    return (
    <>
        <header className='titulo'>
            <img src="./logo.png" alt="logo" className='logo'></img>

            <div>
                <h1>Lista de nomes para o Death Note</h1>
                <h2>Controle de pessoas assasinadas</h2>
            </div>
        </header>

        <main className='conteiner'>
            <img src="./compras.jpg" alt="compras"/>
            <h2>Formulário para Inclusão de Nomes</h2>
            <form className='formulario' onSubmit={handleSubmit(cadastraVitima)}>
                <p>
                    <input type="text" id="nome" placeholder='Nome' {...register("nome")}/>
                </p>
                <p>
                    <input type="text" id="como" placeholder='Como' {...register("como")}/>
                </p>
                <button type='input'> Escrever. </button>

            </form>

            {listaVitimas}
        </main>
    </>
  )
}

export default App

import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from 'sonner'

import './FormInclusao.css'

export default function FormInclusao({filmes, setFilmes}) {
  const { register, handleSubmit, reset, setFocus } = useForm()
  function cadastraFilme(dados) {

    console.log(filmes)
    const filmes2 = [...filmes]
    filmes2.push({ 
        titulo: dados.titulo, 
        genero: dados.genero, 
        duracao: dados.duracao,
        foto: dados.foto,
        sinopse: dados.sinopse,
        nota: 0,
        comentario: ''
    })

    setFilmes(filmes2)
    toast.success("Ok! Filme Cadastrado")
    setFocus("titulo")
    reset()
    localStorage.setItem("filmes", JSON.stringify(filmes2))
  }
  useEffect(() => {
    setFocus("titulo")
  }, [])
  return (

    <>

      <h3>Formulário para Inclusão de Filmes</h3>
      <form onSubmit={handleSubmit(cadastraFilme)}>
        <p>
          <label htmlFor="titulo">Titulo do Filme:</label>
          <input type="text" id="titulo" required
            {...register("titulo")} />
        </p>
        <p>
          <label htmlFor="genero">Gênero do Filme:</label>
          <input type="text" id="genero" required
            {...register("genero")} />
        </p>
        <p>
          <label htmlFor="duracao">Duração (min): </label>
          <input type="number" id="duracao" required
            {...register("duracao")} min={1} />
        </p>
        <p>
          <label htmlFor="foto">URL da Foto:</label>
          <input type="text" id="foto" size={60} required
            {...register("foto")} />
        </p>
        <p>
          <label htmlFor="sinopse">Sinopse do Filme</label>
          <textarea cols={60} rows={3} id="sinopse" required
            {...register("sinopse")} />
        </p>

        <input type="submit" value="Cadastrar" />

      </form>

    </>

  )

}


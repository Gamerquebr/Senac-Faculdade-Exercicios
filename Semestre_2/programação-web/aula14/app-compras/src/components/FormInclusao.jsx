import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from 'sonner'

import './FormInclusao.css'


export default function FormInclusao({compras, setCompras}){
    const { register, handleSubmit, reset, setFocus } = useForm()

    function cadastraItem(dados) {
        // console.log(dados.descricao)
        // console.log(dados.preco)
        const compras2 = [...compras]
        compras2.push({ descricao: dados.descricao, preco: dados.preco })

        setCompras(compras2)
        //    alert("Ok! Produto cadastrado")    
        toast.success("Ok! Produto Cadastrado")

        setFocus("descricao")
        reset({ descricao: "", preco: "" })

        // localStorage.setItem(): serve para salvar os dados no browser
        // JSON.stringigy(): serve para converter o vetor de objetos em uma string
        localStorage.setItem("compras", JSON.stringify(compras2))
        // String: converte um número em uma string
    }

    useEffect(() => setFocus("descricao"), [])

    return (
        <>
            <h3>Formulário para Inclusão de Itens</h3>
            <form onSubmit={handleSubmit(cadastraItem)}>
                <p>
                    <label htmlFor="descricao">Descrição:</label>
                    <input type="text" id="descricao" required
                        {...register("descricao")} />
                </p>
                <p>
                    <label htmlFor="preco">Preço R$:</label>
                    <input type="number" id="preco" required
                        {...register("preco")} step={0.01} min={0.01} />
                </p>
                <input type="submit" value="Cadastrar" />
            </form>
        </>
    )
}

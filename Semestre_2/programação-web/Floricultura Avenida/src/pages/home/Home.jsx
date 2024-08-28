import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Sessao } from "../../helpers/helpers"
import Nav from "./components/nav/Nav"
import Produto from "./components/Produto"
import { useTabela } from "../../helpers/useTabela.jsx"

export default function Home(){
    const navegar = useNavigate()
    const flores = useTabela("flores")


    useEffect(() => {
        if (!Sessao.validar()){
            navegar("/login")
        }

    }, [])

    const listaProdutos = flores.encontrarPor("idReservado", "").map(
        flor => { 
            const props = {
                    id: flor.id,
                    nome: flor.nome,
                    valor: flor.valor,
                    imgUrl: flor.florImg,
                    flores: flores
            }

            return <Produto key={flor.id} {...props} />
    })

    return (
        <>
            <Nav />
            <main className="pt-5 grid justify-items-center gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {listaProdutos}            
            </main>
        </>
    )
}

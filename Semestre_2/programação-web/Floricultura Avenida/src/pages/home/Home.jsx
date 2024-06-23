import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Tabela, Sessao } from "../../helpers/helpers"
import Nav from "./components/nav/Nav"
import Produto from "./components/Produto"

export default function Home(){
    const navegar = useNavigate()
    const [flores, setFlores] = useState([])


    useEffect(() => {
        if (!Sessao.validar()){
            navegar("/login")
        }

        setFlores(new Tabela("flores").tabela)
    }, [])

    const listaProdutos = flores.map(
        flor => <Produto 
            key={flor.id} 
            nome={flor.nome} 
            valor={flor.valor} 
            imgUrl={flor.florImg}/>
    )

    return (
        <>
            <Nav />
            <main className="pt-5 grid justify-items-center gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {listaProdutos}            
            </main>
        </>
    )
}

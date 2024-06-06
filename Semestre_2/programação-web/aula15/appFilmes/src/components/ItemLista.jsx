import "./ItemLista.css"
import Estrelas from "./Estrelas"
import { MdOutlineStarPurple500 as EstrelaCheia} from "react-icons/md";

import { toast } from "sonner";

export default function ItemLista({filme, filmes, setFilmes}) {

    function avaliaFilme(){
        const nota = Number(prompt(`Nota do Filme ${filme.titulo}: `))
        if (nota < 0 || nota > 5 || (nota * 10) % 5 != 0){
            alert("Nota inválida")
            return
        }
        const comentario = prompt("comentario da avaliação")

        const filmes2 = [...filmes]
        const indice = filmes2.findIndex(x => x.titulo == filme.titulo)

        filmes2[indice].nota = nota
        filmes2[indice].comentario = comentario

        setFilmes(filmes2)

        localStorage.setItem("filmes", JSON.stringify(filmes2))
        toast.warning("Ok! Filme Avaliado com Sucesso")
    }

    return(
        <div className="grid-item">
            <img src={filme.foto} alt="filme" className="foto" />
            <div>
                <h3>{filme.titulo}</h3>
                <p className="genero">{filme.genero} - {filme.duracao} min</p>
                <p className="sinopse">{filme.sinopse}</p>

                {filme.nota <= 0 ?
                    <div>
                        <img src="./novidade.jpg"  alt="Novidade" className="novidade"/>
                        <p><button onClick={avaliaFilme}>Avaliar <EstrelaCheia/></button></p>
                    </div> :
                    <>
                        <div>
                            <Estrelas nota={filme.nota}/>
                        </div>
                        <p>
                            <i>{filme.comentario}</i>
                        </p>
                    </>
                }
            </div>
        </div>
    )
}

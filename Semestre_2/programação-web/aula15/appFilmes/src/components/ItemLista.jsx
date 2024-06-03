import "./ItemLista.css"
import Estrelas from "./Estrelas"
import { MdOutlineStarPurple500 as EstrelaCheia} from "react-icons/md";

export default function ItemLista({filme}) {


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
                        <p><button>Avaliar <EstrelaCheia/></button></p>
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

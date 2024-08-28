import { MdOutlineStarPurple500 as EstrelaCheia} from "react-icons/md";
import { MdOutlineStarOutline as EstrelaVazia } from "react-icons/md";
import { MdOutlineStarHalf as EstrelaMetade} from "react-icons/md";

export default function Estrelas({nota}){
    const ListaEstrelas = []

    for (let i = 0; i < 5; i++){      
        if (nota >= 1){
            ListaEstrelas.push(<EstrelaCheia key={i}/>)
        }
        else if (nota < 1 && nota > 0){
            ListaEstrelas.push(<EstrelaMetade key={i}/>)
        }
        else {
            ListaEstrelas.push(<EstrelaVazia key={i}/>)
        }

        nota--;
    } 

    return ListaEstrelas
}

import BarraPesquisa from "./components/BarraPesquisa";
import Carrinho from "./components/Carrinho";
import Ordernar from "./components/Ordenar";
import Perfil from "./components/Perfil";
import Titulo from "./components/Titulo";

export default function Nav(){

    return(
        <>
            <div className="navbar bg-base-300">
                <div className="flex-1">
                    <Titulo />
                    <BarraPesquisa />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <Ordernar />
                    </ul>
                    <div className="dropdown dropdown-end">
                        <Carrinho />
                    </div>
                    <div className="dropdown dropdown-end">
                        <Perfil />
                    </div>
                </div>
            </div>
        </>
    )
}

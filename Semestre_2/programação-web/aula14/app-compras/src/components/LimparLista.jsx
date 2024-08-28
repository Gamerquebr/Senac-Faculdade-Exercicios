import './LimparLista.css'
import Swal from 'sweetalert2'

export default function LimparLista({setCompras}){

    function limparLista() {

        //Se Verifica se está vazio (getItem retorna NULL se não encontrar nada)
        if (localStorage.getItem("compras")){
            Swal.fire({
                title: "Confirma a exclusão?",
                text: "Está ação é permanente",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sim, exclua",
                cancelButtonText: "Cancelar",
            }).then((result) => {
                    if (result.isConfirmed) {
                        localStorage.removeItem("compras")
                        setCompras([])

                        Swal.fire({
                            title: "Deletado!",
                            text: "Sua lista foi limpa",
                            icon: "success"
                        });
                    }
                });
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "A lista já está vazia",
            });
        }
    }

    return (
        <button onClick={limparLista}>Limpar Lista</button>
    )
}

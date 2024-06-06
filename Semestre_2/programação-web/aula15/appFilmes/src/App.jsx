import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useEffect, useState } from 'react'
import './App.css'
import Titulo from './components/Titulo'
import ItemLista from './components/ItemLista'
import { Toaster } from 'sonner';
import FormInclusao from './components/FormInclusao';

function App() {
    const [filmes, setFilmes] = useState([])
    const [open, setOpen] = useState(false);

    useEffect(() => {

        if (localStorage.getItem("filmes")){
            const filmes2  = JSON.parse(localStorage.getItem("filmes"))
            setFilmes(filmes2)
        }
    }, [])

    const listaFilmes = filmes.map(filme => (
        <ItemLista key={filmes.titulo} filme={filme} filmes={filmes} setFilmes={setFilmes}/>
    ))

    return (
        <>
            <Titulo />
            <div className='container'>
                <div className='lista-novo'>
                    <h1>Lista de filmes cadastrados</h1>
                    <button className='bt-novo' onClick={() => setOpen(true)}>Novo Filme</button>
                </div>

                <div className='grid-container'>
                    { listaFilmes }
                </div>
            </div>

            <Modal open={open} onClose={() => setOpen(false)} center>
                <FormInclusao filmes={filmes} setFilmes={setFilmes}/>
            </Modal>
            <Toaster richColors position='top-right'/>
        </>
    )
}

export default App

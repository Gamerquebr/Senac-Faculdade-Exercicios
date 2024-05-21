import './Titulo.css'

export default function Titulo() {
    return (
      <div className="titulo">
        <img src="./logo.png" alt="Logo" className='logo' />
        <div>
          <h1>Lista de Compras do Supermercado</h1>
          <h2>Controle Pessoal de Itens a Comprar</h2>
        </div>
      </div>
    )
}

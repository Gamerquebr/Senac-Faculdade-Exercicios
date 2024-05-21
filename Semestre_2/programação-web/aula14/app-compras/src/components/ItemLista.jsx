import './ItemLista.css'

export default function ItemLista({compra}){
    return (
        <h6 key={compra.descricao}>
            <span>{compra.descricao}</span>
            <span>
                {Number(compra.preco).toLocaleString("pt-br", { minimumFractionDigits: 2 })}
            </span>
        </h6>
    )
}

/** 
 * @param {Object} props 
 * @param {string} props.nome 
 * @param {number} props.valor 
 * @param {string} props.imgUrl 
 */
export default function Produto({nome, valor, imgUrl}){
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl border-primary">
                <figure className="max-h-72">
                    <img className="min-w-full min-h-full"src={imgUrl} alt={nome} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{nome}</h2>
                    <p>R$ {valor.toLocaleString(undefined, {minimumFractionDigits: 2})}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Reservar</button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default function Produto({nome, valor, imgUrl}){
    return (
        <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={imgUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{nome}</h2>
                    <p>Preço: {valor}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Reservar</button>
                    </div>
                </div>
            </div>
        </>
    )

}

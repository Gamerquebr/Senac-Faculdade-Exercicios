import './Total.css'
export default function Total({compras}){

    function calculaTotal() {
        let total = 0
        for (const compra of compras){
            total += Number(compra.preco)
        }
        return total
    }
    return (
        <h5>
            <span>Total R$:</span>
            <span>
                {calculaTotal().toLocaleString("pt-br", { minimumFractionDigits: 2 })}
            </span>
        </h5>

    )
}

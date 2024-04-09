import './App.css'
import { useForm } from "react-hook-form"

function App() {
    const {register, watch} = useForm({
        defaultValues: {
            foto: "tubarao.webp"
        }
    })

    function calculaPreco(){
        let preco 
        if (watch("foto") == "tubarao.webp")
            preco = 8000
        else if (watch("foto") == "carrofunkeiro.webp")
            preco = 0
        else
            preco = 2469101

        if (watch("pintura"))
            preco += 824
        if (watch("rodas"))
            preco += 110

        return preco
    }

    return (
        <>
            <div className='titulo'>
                <img src="./logo.png" alt="logo" className="logo" />
                <div>
                    <h1>Concessionária hot</h1>
                    <h2>Carrinhos para moção</h2>
                </div>
            </div>
            <div className='principal'>
                <div>
                    <p className='subtitulo'><strong>Escolha o modelo</strong></p>
                    <p>
                        <input type="radio" name="modelo" id="tubarao" 
                        value="tubarao.webp"
                        {...register("foto")}
                        />

                        <label htmlFor='tubarao'>Carrinho tubarão</label>
                    </p>
                    <p>
                        <input type="radio" name="modelo" id="funk"
                        value="carrofunkeiro.webp"
                        {...register("foto")}
                        />
                        <label htmlFor='funk'>Carrinho de funkeiro</label>
                    </p>
                    <p>
                        <input type="radio" name="modelo" id="padrao"
                        value="carrodefault.jpg"
                        {...register("foto")}
                        />
                        <label htmlFor='padrao'>Carrinho Padrãozinho</label>
                    </p>
                </div>
                <div>
                    <img src={watch("foto")} alt="Carro" className='foto-carro'/>
                </div>
                <div>
                    <p className='subtitulo'><strong>Adicione os opcionais</strong></p>
                    <p>
                        <input type="checkbox" name="pintura" id="pintura" 
                        {...register("pintura")}
                        />
                        <label htmlFor='pintura'>Pintura metálica</label>
                    </p>
                    <p>
                        <input type="checkbox" name="rodas" id="rodas"
                        {...register("rodas")}
                        />
                        <label htmlFor='rodas'>Roda RGB</label>
                    </p>
                </div>

            </div>
            <div className='rodape'>
                <h2 className='texto-rodape'>Preço Promocional R$:
                {"  " + calculaPreco().toLocaleString("pt-br", {minimumFractionDigits: 2})}
                </h2>
                <h2 className='texto-rodape'><i>* Consulte opções de financiamento</i></h2>
            </div>
        </>
    )
}

export default App

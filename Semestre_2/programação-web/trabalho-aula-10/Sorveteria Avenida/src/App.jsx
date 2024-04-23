import './App.css'

import { useForm } from 'react-hook-form'

function App() {
    const { register, watch } = useForm({
        defaultValues: {
            casca: "casquinha"
        }
    })

    const imagens = {
        ["6"] : "1b.jfif",
        ["11"] : "2b.jfif",
        ["15"] : "3b.webp",

        ["4"] : "casta.webp",
        ["2"] : "choco.jfif",

        ["cascao"] : "cascao.jpg",
        ["potinho"] : "potinho.webp",
        ["casquinha"] : "casquinha.webp",
    }

    function precoTotal(){

        let preco = 0

        if (watch("bola")){
            preco += Number(watch("bola"))
        }

        if (watch("casca") == "cascao"){
            preco += 3 
        }

        if (watch("choco")){
            preco += Number(watch("choco"))
        }
        if (watch("casta")){
            preco += Number(watch("casta"))
        }

        return preco
    }



    return (
        <>
            <header>
                <img src="/logo.png"></img>
                <div>
                    <h1>Sorveteria Avendia</h1>
                    <h2>Sorvetes Artesanais em Pelotas</h2>
                </div>
            </header>
            <main>
                <h2>Monte o seu sorvete...</h2>
                <form>
                    <div>
                        <h2>Tipo de Casquinha</h2>

                        <p>
                            <input type="radio" name="casca" id="potinho" value="potinho" {...register("casca")} />
                            <label htmlFor='potinho'>&nbsp;Potinho</label>
                        </p>
                        <p>
                            <input type="radio" name="casca" id="casquinha" value="casquinha"  {...register("casca")} />
                            <label htmlFor='casquinha'>&nbsp;Casquinha</label>
                        </p>
                        <p>
                            <input type="radio" name="casca" id="cascao" value="cascao" {...register("casca")} />
                            <label htmlFor='cascão'>&nbsp;Cascão</label>
                        </p>
                    </div>
                    <div>
                        <h2>N° de Bolinhas</h2>

                        <p>
                            <input type="radio" name="bola" id="1b" value="6" {...register("bola")} />
                            <label htmlFor='1b'>&nbsp;1 Bolinha</label>
                        </p>

                        <p>
                            <input type="radio" name="bola" id="2b" value="11" {...register("bola")} />
                            <label htmlFor='2b'>&nbsp;2 Bolinhas</label>
                        </p>

                        <p>
                            <input type="radio" name="bola" id="3b" value="15" {...register("bola")} />
                            <label htmlFor='3b'>&nbsp;3 Bolinhas</label>
                        </p>
                    </div>
                    <div>
                        <h2 htmlFor="casca">Cobertura</h2>

                        <p>
                            <input type="checkbox" name="cobertura" id="cocho" value="2" {...register("choco")} />
                            <label htmlFor="choco">&nbsp;Chocolate</label>
                        </p>

                        <p>
                            <input type="checkbox" name="cobertura" id="casta" value="4" {...register("casta")} />
                            <label htmlFor="casta">&nbsp;Castanha</label>
                        </p>
                    </div>

                </form>

                <div>
                    {watch("casca") &&
                        <>
                            <img src={imagens[watch("casca")]} />
                        </>
                    }
                    {watch("bola") &&
                        <>
                            <span>&nbsp;&nbsp;+&nbsp;&nbsp;</span>
                            <img src={imagens[watch("bola")]} />
                        </>
                    }
                    {watch("casta") &&
                        <>
                            <span>&nbsp;&nbsp;+&nbsp;&nbsp;</span>
                            <img src={imagens[watch("casta")]} />
                        </>
                    }
                    {watch("choco") &&
                        <>
                            <span>&nbsp;&nbsp;+&nbsp;&nbsp;</span>
                            <img src={imagens[watch("choco")]} />
                        </>
                    }
                </div>

                <h2>Valor Total R$: {precoTotal().toFixed(2)}</h2>
            </main>
        </>
    )
}

export default App

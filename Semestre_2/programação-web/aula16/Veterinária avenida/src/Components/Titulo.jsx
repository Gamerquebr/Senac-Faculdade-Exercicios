import './Titulo.css'

export default function Titulo(){

    return(
        <>
            <header className="header-container">
                <img className="logo" src="logo.png" alt="logo da veterinária"/>
                <div>
                    <h1 className="titulo">Veterinária Avenida</h1>
                    <h2 className="subtitulo">Controle de adoções</h2>
                </div>
            </header>
        </>
    )

}
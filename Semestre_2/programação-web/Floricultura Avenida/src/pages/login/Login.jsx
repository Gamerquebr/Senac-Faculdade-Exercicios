import { Link } from "react-router-dom";

export default function Login(){
    return (
        <>
            <div className="w-96  mt-24 m-auto  border-green-200 rounded-lg flex flex-col justify-center border-4">
                <div className="p-10">
                    <form className="flex items-center justify-center flex-col gap-2">
                        <label className="input input-bordered w-full flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" className="grow" placeholder="Nome" />
                        </label>
                        <label className="input input-bordered w-full flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input type="password" className="grow" placeholder="Senha" />
                        </label>
                        <button className="btn btn-success self-start w-28">Entrar</button>
                    </form>

                    <span className="text-sm text-center">Não tem uma conta? <Link to="/registro" className="link">Registre-se</Link></span>
                </div>
            </div>
        </>
    )
}
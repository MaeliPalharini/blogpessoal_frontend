import { Link } from "react-router-dom";
import loginImage from '../assets/login.png';

function Login() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
                <form className="flex justify-center items-center flex-col w-1/2 gap-4">
                    <h2 className="text-[#256777] text-5xl font-bold">Faça seu Login!</h2>

                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            className="border-2 border-slate-700 rounded p-2"
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            className="border-2 border-slate-700 rounded p-2"
                        />
                    </div>

                    <button
                        type="submit"
                        className="rounded bg-[#256777] flex justify-center hover:bg-[#1d4f5d] text-white w-1/2 py-2"
                    >
                        <span>Entrar</span>
                    </button>

                    <hr className="border-slate-800 w-full" />

                    <p>
                        Ainda não tem uma conta?{" "}
                        <Link
                            to="/cadastro"
                            className="text-[#256777] hover:underline"
                        >
                            Cadastre-se
                        </Link>
                    </p>
                </form>

                <div
                    className="lg:block hidden w-full h-screen bg-center bg-no-repeat bg-cover border-0 outline-none ring-0 shadow-none"
                    style={{
                        backgroundImage: `url(${loginImage})`,
                        backgroundSize: '110%',
                        backgroundPosition: 'center',
                    }}
                />
            </div>
        </>
    );
}

export default Login;

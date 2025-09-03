import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import loginImage from "../../assets/login.png";
import { AuthContext } from "../../contexts/AuthContext";
import type UsuarioLogin from "../../models/UsuarioLogin";
import { ClipLoader } from "react-spinners";

function Login() {
    const navigate = useNavigate();
    const { usuario, handleLogin, isLoading } = useContext(AuthContext);

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: "",
    });

    useEffect(() => {
        if (usuario.token !== "") navigate("/home");
    }, [usuario, navigate]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>): void {
        const { name, value } = e.target;
        setUsuarioLogin((prev) => ({ ...prev, [name]: value }));
    }

    function onSubmit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        handleLogin(usuarioLogin);
    }

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
                <form onSubmit={onSubmit} className="flex justify-center items-center flex-col w-1/2 gap-4">
                    <h2 className="text-[#256777] text-5xl font-bold">Faça seu Login!</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuário"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuarioLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            autoComplete="username"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuarioLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            autoComplete="current-password"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`rounded flex justify-center text-white w-1/2 py-2 ${
                            isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-[#256777] hover:bg-[#1d4f5d]"
                        }`}
                    >
                        {isLoading ? (
                            <ClipLoader color="#ffffff" size={24} />
                        ) : (
                            <span>Entrar</span>
                        )}
                    </button>
                    <hr className="border-slate-800 w-full" />
                    <p>
                        Ainda não tem uma conta?{" "}
                        <Link to="/cadastro" className="text-[#256777] hover:underline">
                            Cadastre-se
                        </Link>
                    </p>
                </form>
                <div
                    className="lg:block hidden w-full h-screen bg-center bg-no-repeat bg-cover border-0 outline-none ring-0 shadow-none"
                    style={{
                        backgroundImage: `url(${loginImage})`,
                        backgroundSize: "110%",
                        backgroundPosition: "center",
                    }}
                />
            </div>
        </>
    );
}

export default Login;

import cadastroImage from "../assets/cadastro.png";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Usuario from "../models/Usuario";
import { cadastrarUsuario } from "../services/Service";

function Cadastro() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [confirmarSenha, setConfirmarSenha] = useState<string>("");

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
    });

    useEffect(() => {
        if (usuario.id !== 0) {
            retornar();
        }
    }, [usuario]);

    function retornar() {
        navigate("/login");
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
    }

    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value);
    }

    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
            setIsLoading(true);
            try {
                await cadastrarUsuario("/usuarios/cadastrar", usuario, setUsuario);
                alert("Usuário cadastrado com sucesso!");
            } catch (error) {
                alert("Erro ao cadastrar o usuário!");
            } finally {
                setIsLoading(false);
            }
        } else {
            alert(
                "Dados do usuário inconsistentes! Verifique as informações do cadastro."
            );
            setUsuario({ ...usuario, senha: "" });
            setConfirmarSenha("");
        }
    }

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
                {/* Imagem lateral */}
                <div
                    className="lg:block hidden bg-no-repeat w-full min-h-screen bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${cadastroImage})`,
                        backgroundSize: "110%",
                        backgroundPosition: "center",
                    }}
                />

                {/* Formulário */}
                <form
                    className="flex justify-center items-center flex-col w-2/3 gap-3"
                    onSubmit={cadastrarNovoUsuario}
                >
                    <h2 className="text-[#256777] text-2xl font-bold">Cadastrar</h2>

                    <div className="flex flex-col w-full">
                        <label htmlFor="nome" className="text-[#1d4f5d]">
                            Nome
                        </label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Nome"
                            autoComplete="name"
                            required
                            value={usuario.nome}
                            onChange={atualizarEstado}
                            className="border-2 border-[#256777] rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#F4B740]"
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario" className="text-[#1d4f5d]">
                            Usuário
                        </label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuário"
                            autoComplete="username"
                            required
                            value={usuario.usuario}
                            onChange={atualizarEstado}
                            className="border-2 border-[#256777] rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#F4B740]"
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="foto" className="text-[#1d4f5d]">
                            Foto
                        </label>
                        <input
                            type="url"
                            id="foto"
                            name="foto"
                            placeholder="URL da foto (opcional)"
                            value={usuario.foto}
                            onChange={atualizarEstado}
                            className="border-2 border-[#256777] rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#F4B740]"
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="senha" className="text-[#1d4f5d]">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha (mín. 8 caracteres)"
                            autoComplete="new-password"
                            minLength={8}
                            required
                            value={usuario.senha}
                            onChange={atualizarEstado}
                            className="border-2 border-[#256777] rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#F4B740]"
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="confirmarSenha" className="text-[#1d4f5d]">
                            Confirmar Senha
                        </label>
                        <input
                            type="password"
                            id="confirmarSenha"
                            name="confirmarSenha"
                            placeholder="Confirmar Senha"
                            autoComplete="new-password"
                            minLength={8}
                            required
                            value={confirmarSenha}
                            onChange={handleConfirmarSenha}
                            className="border-2 border-[#256777] rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#F4B740]"
                        />
                    </div>

                    <div className="flex justify-around w-full gap-8">
                        <button
                            type="reset"
                            className="rounded text-white bg-red-500 hover:bg-red-700 w-1/2 py-2 transition"
                            onClick={() => {
                                setUsuario({ id: 0, nome: "", usuario: "", senha: "", foto: "" });
                                setConfirmarSenha("");
                            }}
                            disabled={isLoading}
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            className="rounded text-white bg-[#256777] hover:bg-[#1d4f5d] w-1/2 py-2 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <ClipLoader color="#ffffff" size={18} />
                                    Enviando...
                                </>
                            ) : (
                                "Cadastrar"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Cadastro;

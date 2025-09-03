import { useNavigate, useParams } from "react-router-dom";
import {type ChangeEvent, type FormEvent, useContext, useEffect, useState} from "react";
import type Tema from "../../../models/Tema.ts";
import {ClipLoader} from "react-spinners";
import {AuthContext} from "../../../contexts/AuthContext.tsx";
import {atualizar, buscar, cadastrar} from "../../../services/Service.ts";

function FormTema() {
    const navigate = useNavigate();

    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    } as Tema)

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token;

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/tema/${id}`, setTema, {
                headers: { Authorization: `Bearer ${token}` }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate('/temas')
    }

    async function gerarNovoTema(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/tema`, tema, setTema, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                alert('O Tema foi atualizado com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    alert('Erro ao atualizar o tema.')
                }
            }
        } else {
            try {
                await cadastrar(`/tema`, tema, setTema, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                alert('Tema cadastrado com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    alert('Erro ao cadastrar o tema.')
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className= "container flex flex-col items-center justify-center mx-auto ">
            <h1 className="text-4xl text-center my-8 text-[#256777] font-bold">
                {id === undefined ? 'Cadastrar Tema' : 'Editar Tema'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4 bg-[#fbbf24] p-20 rounded-2xl shadow-md"
                onSubmit={gerarNovoTema} >
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="descricao"
                        className="text-lg font-semibold text-[#256777]"
                    >
                        Descrição do Tema
                    </label>
                    <input
                        type="text"
                        name="descricao"
                        value={tema.descricao?? ''}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        className="border-1 border-[#256777] rounded p-5 focus:outline-none focus:ring-1 focus:ring-yellow-50]"
                    />
                </div>
                <button
                    className="rounded text-white bg-[#256777] hover:bg-[#1d4f5d] w-1/2 py-3 mx-auto flex justify-center transition-colors"
                    type="submit"
                >
                    {isLoading ? (
                        <ClipLoader color="#ffffff" size={24} />
                    ) : (
                        <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
                    )}
                </button>
            </form>
        </div>
    );
}

export default FormTema;


import {buscar, deletar} from "../../../services/Service.ts";
import {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {ClipLoader} from "react-spinners";
import {AuthContext} from "../../../contexts/AuthContext.tsx";
import type Tema from "../../../models/Tema.ts";


function DeletarTema() {
    const navigate = useNavigate()

    const [tema, setTema] = useState<Tema>({} as Tema)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/tema/${id}`, setTema, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarTema() {
        setIsLoading(true)

        try {
            await deletar(`/tema/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            alert('Tema apagado com sucesso')
            retornar()
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            } else {
                alert('Erro ao deletar o tema.')
            }
        }

        setIsLoading(false)
    }

    function retornar() {
        navigate('/temas')
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8 text-[#256777] font-bold">
                Deletar Tema
            </h1>

            <div className="w-1/2 flex flex-col gap-4 bg-[#fbbf24] p-20 rounded-2xl shadow-md">
                <p className="text-center font-semibold text-[#256777] text-lg mb-4">
                    Você tem certeza de que deseja apagar o tema a seguir?
                </p>

                <div className="border border-[#256777] rounded-xl overflow-hidden">
                    <header className="py-2 px-6 bg-[#256777] text-white font-bold text-2xl">
                        Tema
                    </header>
                    <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>
                </div>

                <div className="flex justify-center gap-4 mt-6">
                    <button
                        className="rounded text-white bg-red-400 hover:bg-red-600 w-1/2 py-3 transition-colors"
                        onClick={retornar}
                        type="button"
                    >
                        Não
                    </button>
                    <button
                        className="rounded text-white bg-[#256777] hover:bg-[#1d4f5d] w-1/2 py-3 transition-colors"
                        onClick={deletarTema}
                        type="button">
                        {isLoading ? (
                            <ClipLoader
                                color="#ffffff"
                                size={24}
                            />
                        ) : (
                            <span>Sim</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeletarTema;

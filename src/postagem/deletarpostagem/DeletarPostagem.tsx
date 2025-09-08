import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import type Postagem from "../../models/Postagem";
import { buscar, deletar } from "../../services/Service";
import { ClipLoader } from "react-spinners";
import { ToastAlerta } from "../../utils/ToastAlerta";

function DeletarPostagem() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [postagem, setPostagem] = useState<Postagem>({} as Postagem);

    const { id } = useParams<{ id: string }>();

    const { usuario, handleLogout } = useContext(AuthContext);
    const rawToken = usuario?.token ?? "";
    const authHeader = rawToken.startsWith("Bearer") ? rawToken : `Bearer ${rawToken}`;

    async function buscarPorId(postId: string) {
        try {
            await buscar(`/postagens/${postId}`, setPostagem, {
                headers: { Authorization: authHeader },
            });
        } catch (error: any) {
            if (String(error).includes("401")) {
                handleLogout();
                navigate("/login", { replace: true });
            }
        }
    }

    useEffect(() => {
        if (!rawToken) {
            navigate("/login", { replace: true });
        }
    }, [rawToken, navigate]);

    useEffect(() => {
        if (id && rawToken) buscarPorId(id);
    }, [id, rawToken]);

    async function deletarPostagem() {
        if (!id) return;
        setIsLoading(true);
        try {
            await deletar(`/postagens/${id}`, {
                headers: { Authorization: authHeader },
            });
            ToastAlerta("Postagem apagada com sucesso", "sucesso");
            retornar();
        } catch (error: any) {
            if (String(error).includes("401")) {
                handleLogout();
                navigate("/login", { replace: true });
            } else {
               ToastAlerta("Erro ao deletar a postagem.", "erro");
            }
        } finally {
            setIsLoading(false);
        }
    }

    function retornar() {
        navigate("/postagens");
    }

    return (
        <div className="container w-1/3 mx-auto bg-[#fbbf24] p-6 rounded-3xl my-20">
            <h1 className="text-4xl font-bold text-center my-4">Deletar Postagem</h1>
            <p className="text-center font-semibold mb-4">
                Você tem certeza de que deseja apagar a postagem a seguir?
            </p>

            <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
                <header className="py-2 px-6 bg-[#256777] text-white font-bold text-2xl">
                    Postagem
                </header>
                <div className="p-4">
                    <p className="text-xl h-full">{postagem.titulo}</p>
                    <p>{postagem.texto}</p>
                </div>
                <div className="flex">
                    <button
                        className="text-slate-100 bg-[#256777] hover:bg-[#1f5560] w-full py-2"
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button
                        className="w-full text-slate-100 bg-red-500 hover:bg-rose-600 flex items-center justify-center"
                        onClick={deletarPostagem}
                        disabled={isLoading}
                    >
                        {isLoading ? <ClipLoader color="#ffffff" size={24} /> : <span>Sim</span>}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeletarPostagem;

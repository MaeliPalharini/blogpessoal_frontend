import { Link } from "react-router-dom";
import type Tema from "../../../models/Tema";

interface CardTemaProps {
    tema: Tema;
}

function CardTema({ tema }: CardTemaProps) {
    return (
        <div className="flex flex-col rounded-2xl overflow-hidden
        justify-between shadow-md hover:shadow-lg transition-shadow bg-yellow-50">
            <header className="py-2 px-6 bg-[#fbbf24] text-[#256777] font-bold text-2xl">
                <h1>Tema</h1>
            </header>

            <p className="p-8 text-xl text-[#256777] h-full">
                {tema.descricao}
            </p>

            <div className="flex">
                <Link
                    to={`/editartema/${tema.id}`}
                    className="w-full text-white bg-[#256777] hover:bg-[#1d4f5d]
                    flex items-center justify-center py-2 transition-colors"
                >
                    <button>Editar</button>
                </Link>

                <Link
                    to={`/deletartema/${tema.id}`}
                    className="w-full text-white bg-red-500 hover:bg-red-700 flex items-center
                    justify-center py-2 transition-colors">
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    );
}

export default CardTema;

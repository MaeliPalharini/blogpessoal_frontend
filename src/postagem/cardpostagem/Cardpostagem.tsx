import { Link } from 'react-router-dom'
import type Postagem from '../../models/Postagem'

interface CardPostagensProps {
    postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagensProps) {
    return (
        <div
            className="border border-teal-900/20 bg-yellow-50
                 flex flex-col rounded-xl overflow-hidden justify-between
                 shadow-sm hover:shadow transition-shadow"
        >
            <div>
                <div className="flex w-full bg-[#256777] py-3 px-4 items-center gap-3">
                    <img
                        src={postagem.usuario?.foto}
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-white/40"
                        alt={postagem.usuario?.nome}
                    />
                    <h3 className="text-white text-lg font-semibold uppercase tracking-wide">
                        {postagem.usuario?.nome}
                    </h3>
                </div>

                <div className="p-4 text-slate-800">
                    <h4 className="text-lg font-semibold uppercase">{postagem.titulo}</h4>
                    <p className="mt-1">{postagem.texto}</p>

                    <div className="mt-3 text-sm">
                        <p className="text-slate-700">
                            <span className="font-medium text-teal-800">Tema:</span>{" "}
                            {postagem.tema?.descricao}
                        </p>
                        <p className="text-slate-600">
                            <span className="font-medium text-teal-800">Data:</span>{" "}
                            {new Intl.DateTimeFormat("pt-BR", {
                                dateStyle: "full",
                                timeStyle: "medium",
                            }).format(new Date(postagem.data))}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex">
                <Link
                    to={`/editarPostagem/${postagem.id}`}
                    aria-label="Editar postagem"
                    className="w-1/2 text-white bg-[#256777]
                     hover:bg-[#1f5560] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#256777]
                     flex items-center justify-center py-2"
                >
                    <button>Editar</button>
                </Link>

                <Link
                    to={`/deletarPostagem/${postagem.id}`}
                    aria-label="Deletar postagem"
                    className="w-1/2 text-white bg-red-500
                     hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500
                     flex items-center justify-center py-2"
                >
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagem

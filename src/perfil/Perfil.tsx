import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import fotoPerfil from '../assets/avatar.png';
import capaPerfil from '../assets/fundo.png'

import { AuthContext } from "../contexts/AuthContext"

function Perfil() {
    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            alert("Você precisa estar logado")
            navigate("/")
        }
    }, [usuario.token])

    return (
        <div className="flex justify-center mx-4">
            <div className="container mx-auto my-4 rounded-2xl overflow-hidden">
                <img
                    className="w-full h-72 object-cover border-b-4 border-white"
                    src={capaPerfil}
                    alt={`Foto de perfil de ${usuario.nome}`}
                />

                <img
                    className="rounded-full w-56 mx-auto mt-[-8rem] border-4 border-yellow-50 relative z-10"
                    src={fotoPerfil}
                    alt={`Foto de perfil de ${usuario.nome}`}
                />

                <div
                    className="relative mt-[-6rem] h-72 flex flex-col
                    bg-[#256777] text-white text-2xl items-center justify-center"
                >
                    <p>Nome: {usuario.nome} </p>
                    <p>Email: {usuario.usuario}</p>
                </div>
            </div>
        </div>
    )
}

export default Perfil

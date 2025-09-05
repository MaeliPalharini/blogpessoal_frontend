import { Link, useNavigate } from "react-router-dom";
import {type ReactNode, useContext} from "react";
import { AuthContext } from "../../contexts/AuthContext";
import {ToastAlerta} from "../../utils/ToastAlerta.ts";

export default function Navbar() {

    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);

    function logout() {

        handleLogout();
        ToastAlerta('O usuário foi desconectado com sucesso!', 'info');
        navigate("/");
    }

    let component: ReactNode

    if (usuario.token !== "") {
        component = (
            <div className="w-full flex justify-center py-4 bg-[#fbbf24] text-[#256777]">
                <div className="container flex justify-between text-lg mx-8">
                    <Link to="/home" className="text-2xl font-bold text-[#256777]">
                        Blog Pessoal
                    </Link>
                    <div className="flex gap-8">
                        <Link to="/postagens" className="hover:underline">Postagens</Link>
                        <Link to="/temas" className="hover:underline">Temas</Link>
                        <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
                        <Link to="/perfil" className="hover:underline">Perfil</Link>
                        <button type="button" onClick={logout} className="hover:underline">Sair</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {component}
        </>
    );
}

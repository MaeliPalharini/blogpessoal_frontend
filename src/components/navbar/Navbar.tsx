import { Link, useNavigate } from "react-router-dom";
import { type ReactNode, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta.ts";
import logo from "../../assets/logo.png";

export default function Navbar() {
    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);

    function logout() {
        handleLogout();
        ToastAlerta("O usuário foi desconectado com sucesso!", "info");
        navigate("/");
    }

    let component: ReactNode;

    if (usuario.token !== "") {
        component = (
            <div className="w-full bg-[#fbbf24] text-[#256777]">
                <div className="container mx-auto px-8">
                    <div className="flex h-20 items-center">
                        <div className="flex-1">
                            <Link to="/home" className="flex items-center gap-2">
                                <img src={logo} alt="Logo do Blog Pessoal" className="h-15 w-auto" />
                            </Link>
                        </div>

                        <nav className="flex-1 flex justify-center">
                            <ul className="flex items-center gap-8 font-bold text-lg md:text-x">
                                <li><Link to="/postagens" className="inline-block transform transition-transform duration-200 ease-out hover:scale-130 font-bold">Postagens</Link></li>
                                <li><Link to="/temas" className="inline-block transform transition-transform duration-200 ease-out hover:scale-130 font-bold">Temas</Link></li>
                                <li><Link to="/cadastrartema" className="inline-block transform transition-transform duration-200 ease-out hover:scale-130 font-bold">Cadastrar tema</Link></li>
                                <li><Link to="/perfil" className="inline-block transform transition-transform duration-200 ease-out hover:scale-130 font-bold">Perfil</Link></li>
                            </ul>
                        </nav>

                        <div className="flex-1 flex justify-end text-lg ">
                            <button type="button" onClick={logout} className="inline-block transform transition-transform duration-200 ease-out hover:scale-130 font-bold">
                                Sair
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return <>{component}</>;
}

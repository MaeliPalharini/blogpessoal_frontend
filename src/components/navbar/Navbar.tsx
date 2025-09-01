import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="w-full flex justify-center py-4 bg-[#fbbf24] text-[#256777]">
                <div className="container flex justify-between text-lg mx-8">
                    <Link to="/home" className="text-2xl font-bold text-[#256777]">
                        Blog Pessoal
                    </Link>

                    <div className="flex gap-8">
                        <Link to="/postagens" className="hover:underline">Postagens</Link>
                        <Link to="/temas" className="hover:underline">Temas</Link>
                        <Link to="/cadastrar-tema" className="hover:underline">Cadastrar tema</Link>
                        <Link to="/perfil" className="hover:underline">Perfil</Link>
                        <Link to="/sair" className="hover:underline">Sair</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;




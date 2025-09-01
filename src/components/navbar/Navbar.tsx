function Navbar() {
    return (
        <div className="w-full flex justify-center py-4 bg-[#256777]  text-white">
            <div className="container mx-auto flex justify-between items-center text-lg px-8">
                <span className="font-semibold">Blog Pessoal</span>

                <nav className="flex gap-10">
                    <a href="#" className="hover:underline">Postagens</a>
                    <a href="#" className="hover:underline">Temas</a>
                    <a href="#" className="hover:underline">Cadastrar tema</a>
                    <a href="#" className="hover:underline">Perfil</a>
                    <a href="#" className="hover:underline">Sair</a>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;



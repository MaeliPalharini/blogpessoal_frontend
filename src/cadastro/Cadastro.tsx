import casdastroImage from "../assets/cadastro.png";

function Cadastro() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
                <div
                    className="lg:block hidden bg-no-repeat w-full min-h-screen bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${casdastroImage})`,
                        backgroundSize: '110%',
                        backgroundPosition: 'center',
                }}
                ></div>
                <form className="flex justify-center items-center flex-col w-2/3 gap-3">
                    <h2 className="text-[#256777] text-2xl font-bold">Cadastrar</h2>

                    <div className="flex flex-col w-full">
                        <label htmlFor="nome" className="text-[#1d4f5d]">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Nome"
                            className="border-2 border-[#256777] rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#F4B740]"
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario" className="text-[#1d4f5d]">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuário"
                            className="border-2 border-[#256777] rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#F4B740]"
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="foto" className="text-[#1d4f5d]">Foto</label>
                        <input
                            type="text"
                            id="foto"
                            name="foto"
                            placeholder="Foto"
                            className="border-2 border-[#256777] rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#F4B740]"
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="senha" className="text-[#1d4f5d]">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="border-2 border-[#256777] rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#F4B740]"
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="confirmarSenha" className="text-[#1d4f5d]">Confirmar Senha</label>
                        <input
                            type="password"
                            id="confirmarSenha"
                            name="confirmarSenha"
                            placeholder="Confirmar Senha"
                            className="border-2 border-[#256777] rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#F4B740]"
                        />
                    </div>

                    <div className="flex justify-around w-full gap-8">
                        <button
                            type="reset"
                            className="rounded text-white bg-red-500 hover:bg-red-700 w-1/2 py-2 transition"
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            className="rounded text-white bg-[#256777] hover:bg-[#1d4f5d] w-1/2 py-2 transition"
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Cadastro

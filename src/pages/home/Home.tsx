import minhaImagem from '../../assets/back1.png';

function Home() {
    return (
        <>
            <div className="bg-[#256777] flex justify-center">
                <div
                    className="container mx-auto px-4
                        grid grid-cols-1 md:grid-cols-2 gap-8
                        text-white
                        min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh]
                        items-center py-8"
                >
                    <div className="flex flex-col gap-4 md:items-start items-center">
                        <h2 className="text-5xl font-bold text-center md:text-left">
                            Seja Bem Vinde!
                        </h2>
                        <p className="text-xl text-center md:text-left">
                            Expresse aqui seus pensamentos e opiniões
                        </p>

                        <div className="flex md:justify-start justify-center">
                            <button
                                className="rounded border-2 border-white text-white py-2 px-4 hover:bg-white/10 transition"
                                type="button"
                            >
                                Nova Postagem
                            </button>
                        </div>
                    </div>

                    <div className="flex md:justify-end">
                        <img
                            src={minhaImagem}
                            alt="Imagem Página Home"
                            className="w-full max-w-[1300px] h-140 object-cover rounded-lg"
                        />
                    </div>

                </div>
            </div>
            <section className="w-full bg-white py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center text-gray-600">
                        <span>Em breve: Listar Postagens</span>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;

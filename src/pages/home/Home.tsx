// src/pages/home/Home.tsx
import minhaImagem from '../../assets/back1.png';

function Home() {
    return (
        <>
            {/* Se quiser manter essa cor aqui, ok; senão pode tirar e colocar no App */}
            <div className="bg-[#256777] flex justify-center">
                {/* Altura mínima grande e grid responsivo */}
                <div className="container mx-auto px-4
                        grid grid-cols-1 md:grid-cols-2 gap-8
                        text-white
                        min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh]
                        items-center py-8">

                    {/* Coluna esquerda */}
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

                    {/* Coluna direita — imagem */}
                    <div className="flex md:justify-end justify-center">
                        <img
                            src={minhaImagem}
                            alt="Imagem Página Home"
                            className="w-[560px] md:w-[680px] lg:w-[900px] h-auto max-w-none"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;

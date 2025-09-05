import minhaImagem from '../../assets/back1.png';
import ListaPostagens from "../../postagem/listapostagens/ListaPostagens.tsx";
import ModalPostagem from "../../postagem/modalpostagem/ModalPostagem.tsx";

function Home() {
    return (
        <>
            <div className="bg-[#256777] flex justify-center">
                <div
                    className="container mx-auto px-4
                        grid grid-cols-1 md:grid-cols-2 gap-8
                        text-white
                        min-h-[50vh] md:min-h-[60vh]
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
                            <ModalPostagem />
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
            <ListaPostagens />
        </>
    );
}

export default Home;

import CardTema from "../cardtema/CardTema"
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext.tsx";
import { buscar } from "../../../services/Service.ts";
import type Tema from "../../../models/Tema.ts";

function ListaTemas() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [temas, setTemas] = useState<Tema[]>([]);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!');
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        if (!token) return;
        buscarTemas();
    }, [token]);

    async function buscarTemas() {
        try {
            setIsLoading(true);

            await buscar('/tema', setTemas, {
                headers: { Authorization: `Bearer ${token}` }
            });

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout();
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            {isLoading && (
                <div className="flex justify-center w-full my-8">
                    <SyncLoader color="#256777" size={32} />
                </div>
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col mt-8">
                    {(!isLoading && temas.length === 0) && (
                        <span className="text-3xl text-center my-8">
                        Nenhum tema cadastrado
                        </span>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {temas.map((tema) => (
                            <CardTema tema={tema} key={tema.id} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaTemas;

import { createContext, type ReactNode, useState } from "react";
import type UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";


interface AuthContextProps {
    usuario: UsuarioLogin;
    isLoading: boolean;
    handleLogin: (usuario: UsuarioLogin) => Promise<void>;
    handleLogout: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    async function handleLogin(usuarioLogin: UsuarioLogin): Promise<void> {
        setIsLoading(true);

        try {
            await login("/usuarios/logar", usuarioLogin, setUsuario);
            alert("Usuário autenticado com sucesso!");
        } catch (error) {
            alert("Os dados do usuário estão inconsistentes!");
        } finally {
            setIsLoading(false);
        }
    }

    function handleLogout(): void {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: "",
        });
    }

    return (
        <AuthContext.Provider
            value={{
                usuario,
                isLoading,
                handleLogin,
                handleLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

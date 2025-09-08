import { createContext, type ReactNode, useState } from "react";
import type UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";
import { ToastAlerta } from "../utils/ToastAlerta";
// import { useNavigate } from "react-router-dom";

interface AuthContextProps {
    usuario: UsuarioLogin;
    isLoading: boolean;
    handleLogin: (usuario: UsuarioLogin) => Promise<void>;
    handleLogout: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
    // const navigate = useNavigate();
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
            ToastAlerta("Usuário foi autenticado com sucesso!", "sucesso");
        } catch {
            ToastAlerta("Os dados do Usuário estão inconsistentes!", "erro");
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
        localStorage.removeItem("usuario");
    }

    return (
        <AuthContext.Provider value={{ usuario, isLoading, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
}

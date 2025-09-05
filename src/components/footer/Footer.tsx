import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { AuthContext } from "../../contexts/AuthContext.tsx";
import { useContext } from "react";

export default function Footer() {
    const { usuario } = useContext(AuthContext);
    if (!usuario?.token) return null;

    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#256777] text-white">
            <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col items-center gap-3">
                <p className="text-xl font-bold text-center">
                    Blog Pessoal Maeli Palharini | Copyright: {year}
                </p>

                <p className="text-center">Acesse nossas redes sociais</p>

                <div className="flex gap-6">
                    <a
                        href="https://www.linkedin.com/in/maeli-palharini/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="hover:opacity-80 transition"
                    >
                        <LinkedinLogoIcon size={32} weight="fill" />
                    </a>

                    <a
                        href="https://www.instagram.com/meggtrindade/?hl=pt"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                        className="hover:opacity-80 transition"
                    >
                        <InstagramLogoIcon size={32} weight="fill" />
                    </a>

                    <a
                        href="https://github.com/MaeliPalharini"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="hover:opacity-80 transition"
                    >
                        <GithubLogoIcon size={32} weight="fill" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

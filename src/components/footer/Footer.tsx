import {GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon} from "@phosphor-icons/react";

function Footer() {
    const data = new Date().getFullYear();

    return (
        <div className="flex justify-center bg-[#256777] text-white">
            <div className="container flex flex-col items-center py-4">
                <p className="text-xl font-bold">
                    Blog Pessoal Maeli Palharini | Copyright: {data}
                </p>

                <p className="text-lg">Acesse nossas redes sociais</p>

                <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/maeli-palharini/" target="_blank" rel="noreferrer">
                        <LinkedinLogoIcon size={48} weight="bold" />
                    </a>

                    <a href="https://www.instagram.com/meggtrindade/?hl=pt" target="_blank" rel="noreferrer">
                        <InstagramLogoIcon size={48} weight="bold" />
                    </a>

                    <a href="https://github.com/MaeliPalharini" target="_blank" rel="noreferrer">
                        <GithubLogoIcon size={48} weight="bold" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;



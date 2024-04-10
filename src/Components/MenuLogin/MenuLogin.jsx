import { MenuHeader } from "../MenuHeader/Menu";
import ImgLogin from "../../assets/Img/fundoLogin.svg"

import "./fundo.css"

export function MenuLogin() {
    return(
        //imagem da esquerda das paginas login e cadastro junto com o menu
        <section className="imagem">
            <div className="imagem">
                <div className="informacoes">
                    <MenuHeader path ='/login'/>
                </div>
                
                <div className="fundologin">
                    <img src={ImgLogin} alt="" />
                </div>
            </div>
        </section>

    )
}
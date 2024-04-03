import ImgLogin from "../../assets/Img/fundoLogin.svg"
import Logo from "../../assets/Img/Logo.svg"

import { Link } from "react-router-dom";
import "./fundo.css"

export function MenuLogin() {
    return(
        <section className="imagem">
            <div className="imagem">
                <div className="informacoes">
                    <img src={Logo} alt="" />

                    <div className="menu-link">
                        <Link to="/" className="menu">Início</Link>
                        <Link to="/sobre" className="menu">Sobre</Link>
                        <Link to="/login" className="menu">Login</Link>
                    </div> 
                </div>
                
                <div className="fundologin">
                    <img src={ImgLogin} alt="" />
                </div>
            </div>
        </section>

    )
}
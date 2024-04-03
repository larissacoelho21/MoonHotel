import "./style.css";
import { Link } from "react-router-dom";

import LogoImg from "../../assets/Img/Logo.svg"
import Copyright from "../../assets/Img/Copyright.svg"

function scrrolInicio() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="cima">
                    <img src={LogoImg} alt="" />

                    <div className="Lista">
                        <Link onClick={scrrolInicio} to="/" className="link">Início</Link>
                        <Link to="/sobre" className="link">Sobre</Link>
                        <Link to="/login" className="link">Login</Link>
                    </div>
                </div>
                <div className="baixo">
                    <hr className="hr" />
                    <div className="direitos">
                        <img src={Copyright} alt="" />
                        <p>2024 | Todos os direitos reservados</p>
                    </div>
                </div>
            </div>

        </footer>
    )
}
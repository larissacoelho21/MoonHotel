import Fundo from "../../assets/Img/headerSobre.svg"
import Logo from "../../assets/Img/Logo.svg"

import { Link } from "react-router-dom";

import "./style.css"

export function HeaderSobre() {
    return(
        <section>
            <div className="Header2">
                <img src={Logo} alt="" />

                <div className="menu-link">
                    <Link to="/" className="menu">Início</Link>
                    <Link to="/sobre" className="menu">Sobre</Link>
                    <Link to="/login" className="menu">Login</Link>
                </div> 

                <div className="title">
                    <h1>VENHA SABER MAIS DO <br />
                     NOSSO HOTEL</h1>
                </div>

            </div>

            <div className="fundo2">
                    <img src={Fundo} alt="" />
            </div>
        </section>
    )
}
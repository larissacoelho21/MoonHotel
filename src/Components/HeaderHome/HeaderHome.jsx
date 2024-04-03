import "./styleHome.css"
import { Link } from "react-router-dom";

import Fundo from "../../assets/Img/FundoHome.svg"
import Logo from "../../assets/Img/Logo.svg"
import cincoEstrelas from "../../assets/Img/stars.svg"

export function HeaderHome() {
    return (
        <header>
            <section className="Header">
                <div className="infos">
                    <div className="cabecalho">
                        <img src={Logo} alt="" />

                        <div className="menu-link">
                            <Link to="/" className="menu">Início</Link>
                            <Link to="/sobre" className="menu">Sobre</Link>
                            <Link to="/login" className="menu">Login</Link>
                        </div> 

                        <div className="title">
                            <h1>MOON HOTEL</h1>
                            <img src={cincoEstrelas} alt="" />
                            <p>Bem-vindo(A) ao Moon Hotel, Desfrute de uma estadia luxuosa e <br />
                             confortável no coração da cidade. Quartos elegantes, instalações <br />
                             modernas e serviço de qualidade, garantem uma experiência <br />
                             memorável. Seu refúgio de excelência aguarda por você.</p>
                            <Link className="button">Reserve!</Link>

                        </div>
                    </div>
                </div>

                <div className="fundo">
                    <img src={Fundo} alt="" />
                </div>

            </section>
        </header>
    )
}


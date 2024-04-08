import "./styleHome.css"
import { Link } from "react-router-dom";

import Fundo from "../../assets/Img/FundoHome.svg"
import cincoEstrelas from "../../assets/Img/stars.svg"
import { MenuHeader } from "../MenuHeader/Menu";

function scroollReserva() {
    window.scrollTo({
        top: 1500,
        behavior: 'smooth'
    })
}


export function HeaderHome() {
    return (
        <header>
            <section className="Header">
                <div className="infos">
                    <div className="body">

                        <MenuHeader path="/" />

                        <div className="title">
                            <h1>MOON HOTEL</h1>
                            <img src={cincoEstrelas} alt="" />
                            <p>Bem-vindo(A) ao Moon Hotel, Desfrute de uma estadia luxuosa e <br />
                             confortável no coração da cidade. Quartos elegantes, instalações <br />
                             modernas e serviço de qualidade, garantem uma experiência <br />
                             memorável. Seu refúgio de excelência aguarda por você.</p>
                            
                            <Link onClick={scroollReserva} className="button">Reserve!</Link>

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


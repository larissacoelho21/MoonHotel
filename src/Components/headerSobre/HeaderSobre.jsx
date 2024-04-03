import Fundo from "../../assets/Img/headerSobre.svg"

import "./style.css"
import { MenuHeader } from "../MenuHeader/Menu";

export function HeaderSobre() {
    return(
        <section>
            <div className="Header2">
                <MenuHeader path="/sobre" />

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
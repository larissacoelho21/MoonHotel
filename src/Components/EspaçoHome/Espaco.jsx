import Img1 from "../../assets/Img/espaco1.svg"
import Img2 from "../../assets/Img/espaco2.svg"
import Img3 from "../../assets/Img/espaco3.svg"
import Img4 from "../../assets/Img/espaco4.svg"
import Img5 from "../../assets/Img/espaco5.svg"
import Img6 from "../../assets/Img/espaco6.svg"

import "./espaco.css"

export function Espaco() {
    return(
        <section>
            <div className="nome">
                <h3>Nosso Espaço</h3>
            </div>

            <div className="colunas">
                <div className="coluna1">
                    <img src={Img1} alt="" />
                    <img src={Img2} alt="" />
                    <img src={Img3} alt="" />
                </div>

                <div className="coluna2">
                    <img src={Img4} alt="" />
                    <img src={Img5} alt="" />
                    <img src={Img6} alt="" />
                </div>
            </div>

        </section>
    )
}
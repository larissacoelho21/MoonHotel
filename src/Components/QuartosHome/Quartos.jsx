import "./quartos.css"

import QuartoSuite from "../../assets/Img/suite.svg"
import QuartoFamilia from "../../assets/Img/quartofamilia.svg"
import QuartoSolteiro from "../../assets/Img/solteiro.svg"

import SuiteHover from "../../assets/Img/suiteHover.svg"
import FamiliaHover from "../../assets/Img/familiaHover.svg"
import SolteiroHover from "../../assets/Img/solteiroHover.svg"

export function Quartos() {
    return(
        <section className="Quartos">
            <div className="nome">
                <h3>Quartos</h3>
            </div>
            
            <div className="hover">
                <img src={SuiteHover} alt="" />
                <img src={FamiliaHover} alt="" />
                <img src={SolteiroHover} alt="" />
            </div>

            <div className="fotos">
                <img src={QuartoSuite} alt="" />
                <img src={QuartoFamilia} alt="" />
                <img src={QuartoSolteiro} alt="" />
            </div>

            
        </section>
    )
}
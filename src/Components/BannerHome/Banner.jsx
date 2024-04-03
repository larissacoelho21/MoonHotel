import ImgBanner from "../../assets/Img/historia.svg"
import "./banner.css"



export function Banner() {
    return(
        <section>
            <div className="banner">
                <div className="texto2">
                    <h1>FAÇA PARTE DA NOSSA <br /> HISTÓRIA</h1>
                    <p>Explore o charme do Moon Hotel! Conforto, <br />
                     elegância e uma recepção calorosa esperam por <br />
                      você. Venha viver momentos memoráveis conosco!</p>
                </div>
                
                <div className="fundoimg">
                    <img src={ImgBanner} alt="" />
                </div>
            </div>
        </section>
    )
}
import ImgRestaurante from "../../assets/Img/restaurante.svg"
import BannerRestaurante from "../../assets/Img/nome.svg"
import "./restaurante.css"

export function Restaurante() {
    return(
     <section>
        <div className="restaurante">
            <div className="texto4">
                <h1>DESCUBRA NOSSA DELICIOSA <br />CULINÁRIA!</h1>
                <p>Saboreie momentos deliciosos no Moon Hotel! Desde 
                 o café da manhã até o jantar. Preparados pelos
                 melhores chefes da cidade!</p>
            </div>
            
            <div className="imgnome">
                <img src={BannerRestaurante} alt="" />
            </div>
            
        </div>

        <div className="imgfundo">
                <img src={ImgRestaurante} alt="" />
            </div>
     </section>   
    )
}
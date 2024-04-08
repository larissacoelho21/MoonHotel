import "./bannerPool.css"

import Banner from "../../assets/Img/BannerPool.svg"

export function DashboardBanner() {
    return (
        <section>
            <div className="piscina">
                <div className="texto-dashboard">
                    <h1>RELAXE NO MELHOR HOTEL DA CIDADE</h1>
                    <p>Desconecte-se do mundo lá fora e entregue-se ao luxo do Moon Hotel. Esperamos por você para uma experiência de conforto e tranquilidade como nunca antes. Venha desfrutar conosco.</p>
                </div>

                <div className="img-dashboard">
                    <img src={Banner} alt="" />
                </div>
            </div>
        </section>
    )
}
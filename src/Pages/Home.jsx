import { Banner } from "../Components/BannerHome/Banner";
import { Espaco } from "../Components/EspaçoHome/Espaco";
import { Footer } from "../Components/Footer/Footer";
import { HeaderHome } from "../Components/HeaderHome/HeaderHome";
import { Quartos } from "../Components/QuartosHome/Quartos";
import { Reservas } from "../Components/ReservasHome/Reservas";
import { Restaurante } from "../Components/RestauranteHome/Restaurante";

import { motion } from 'framer-motion';

export function Home(){
    return ( 
            
        <main>
            <HeaderHome />
            <Quartos />
            <Reservas />
            <Banner />
            <Espaco />
            <Restaurante />
            <Footer />

        </main>       
      
    )
}
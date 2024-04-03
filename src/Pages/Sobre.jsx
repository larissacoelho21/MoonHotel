import { BodySobre } from "../Components/BodySobre/Body";
import { Footer } from "../Components/Footer/Footer";
import { HeaderSobre } from "../Components/headerSobre/HeaderSobre";

import { motion } from 'framer-motion';

export function Sobre() {
    return (

      <main>
        <HeaderSobre />
        <BodySobre />
        <Footer />  
      </main>
        
  );
}
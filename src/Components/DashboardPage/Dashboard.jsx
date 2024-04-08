import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./dashboard.css"

import Wifi from "../../assets/Img/wifi.svg"
import Pool from "../../assets/Img/pool.svg"
import Pet from "../../assets/Img/pet.svg"
import Spa from "../../assets/Img/spa.svg"
import Coffe from "../../assets/Img/coffe.svg"

export function DashboardPage() {

  const navigate = useNavigate();

  useEffect(() => {
    if(sessionStorage.getItem("logado") === null) {
      alert("Acesso expirado!")
      navigate("/login");
    } 
  }, [])

return (
  <section>
    <div className="dashboard">

      <div className="welcome">
        {/* método get - buscando o nome da pessoa logada */}
        <h2>Olá <span>{sessionStorage.getItem("nome")}</span> seja bem-vindo(a) de volta!</h2>
      </div>

      <div className="title-text">
          <h2>Veja os benefícios que nosso hotel proporciona!</h2>
      </div>

      <div className="services">
        <div className="services-cards">
          <img src={Wifi} alt="" />
          <p>Wifi <br /> grátis</p>
        </div>

        <div className="services-cards">
          <img src={Pool} alt="" />
          <p>Piscina</p>
        </div>

        <div className="services-cards">
          <img src={Pet} alt="" />
          <p>Pet <br /> friendly</p>
        </div>
        <div className="services-cards">
          <img src={Spa} alt="" />
          <p>Spa</p>
        </div>
        <div className="services-cards">
          <img src={Coffe} alt="" />
          <p>Café <br /> da manhã</p>
        </div>
      </div>

      <div className="quartos-reservas">
        <h2>Escolha seu quarto e faça agora sua reserva!</h2>
      </div>
    </div>  
  </section>
)
}
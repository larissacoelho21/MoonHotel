import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <h2>salve salve meu cria tmj: {sessionStorage.getItem("nome")}</h2>
  </section>
)
}
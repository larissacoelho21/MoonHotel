import "./reservas.css"
import { Link } from "react-router-dom";

export function Reservas() {
    return(
        <section className="reservas">
            <div className="texto1">
                <h1>FAÇA JÁ SUA RESERVA!</h1>
                <p>Venha para o Moon Hotel! Faça seu Login ou <br />
                 cadastro e reserve seu quarto. Torne seus dias <br />
                 mais relaxantes e aproveite dos nossos serviços!</p>
            </div>

            <div>
                <Link to='/login' className="caminho">Faça seu Login</Link>
                <Link to='/cadastro' className="caminho">Faça seu Cadastro</Link>
            </div>
        </section>
    )
}
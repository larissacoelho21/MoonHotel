import { Link } from "react-router-dom";
import Logo from "../../assets/Img/Logo.svg"

import "./Menu.css"

//function dedicada apenas para o menu
export function MenuHeader(props) {
  
    const routes = [
        { name: "Início", path: "/" },
        { name: "Sobre", path: "/sobre" },
        { name: "Login", path: "/login" },
    ];

    return(
        <section className="MenuHeader">
            <div className="cabecalho">
                <img src={Logo} alt="" />

                <div className="menu-link">
                    <ul> {/* construindo um path que leia qual pagina esta selecionada e deixe com o fundo diferente */}
                        {routes.map((route) => (
                            <li key={route.path} className={props.path === route.path ? 'isSelected' : undefined}>
                            <Link className="menu" to={route.path}>{route.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div> 
            </div>
            
        </section>
    )
}
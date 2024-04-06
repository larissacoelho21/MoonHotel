import { MenuLogin } from "../MenuLogin/MenuLogin";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "./formulario.css";
import { useUsuario } from "../UsuarioLogado/usuario";
 
export function FormularioLogin() {

    const navigate = useNavigate();

    // Estado para controlar os campos de entrada
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [users, setUsers] = useState([]);

    // Carrega os dados dos usuários do arquivo JSON ao montar o componente
    useEffect(() => {
        fetch('http://localhost:3001/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error('Erro ao carregar dados dos usuários: ', error))
    }, [])

    const handleInput = (event) => {
        const { value, name } = event.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "senha") {
            setSenha(value);
        }
    };

    const handleLogin = (event) => {
        event.preventDefault();

        // Consulta de usuário
        const user = users.find(user => user.email === email && user.senha === senha);
        
        const { setUsuarioLogado } = useUsuario();
        setUsuarioLogado(user);

        if (user) {
            alert("Login efetuado com sucesso");
            navigate('/dashboard');
        } else {
            alert("Não foi possível encontrar seu usuário, tente novamente ou cadastre-se!");
        }
    };
    
    return (
        <section className="containerpai">
            <MenuLogin />
            <div className="Login">
                <div className="formulario">
                    <div className="titulo">
                        <h1>LOGIN</h1>
                        <p>JÁ TEM UMA RESERVA? FAÇA LOGIN NA SUA CONTA E ACOMPANHE OS DETALHES DA SUA VAGA!</p>
                    </div>

                    <form onSubmit={handleLogin}>
                        <div className="input-single">
                            <input
                                type="text"
                                id="email"
                                name="email"
                                className="input"
                                placeholder="Digite seu email"
                                value={email}
                                onChange={handleInput}
                                required
                            />
                        </div>

                        <div className="input-single">
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                className="input"
                                placeholder="Digite sua senha"
                                value={senha}
                                minLength={6}
                                onChange={handleInput}
                                required
                            />
                        </div>

                        <div>
                            <button type="submit">ENTRAR</button>
                        </div>

                    </form>

                    <div className="link-caminho">
                        <p>NÃO POSSUI CONTA? <Link to="/cadastro" className="cadastro">FAÇA O CADASTRO</Link></p>
                    </div>
                    
                </div>
            </div>

        </section>
    )
}
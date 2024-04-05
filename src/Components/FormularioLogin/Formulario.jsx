import { MenuLogin } from "../MenuLogin/MenuLogin";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "./formulario.css";
 
export function FormularioLogin() {

    const navigate = useNavigate();

    const [email] = useState();
    const [senha] = useState();
    const [news, setUsers] = useState([]);
    const [formState, setFormState] = useState({});

    useEffect(() => {
        fetch('http://localhost:3001/news')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error('Erro ao carregar dados dos usuários: ', error))
    }, [])


    //Função para lidar com a alteração de campos de entrada
    const handleInput = (event) => {
    //Obtendo o elemento da entrada atual
    const target = event.target; //currentTarget navega entre os eventos do js

    //Extraindo o valor e o nome do campo de entrada
    const { value, name } = target;

    //Atualizando o estado do formulário com os novos valores
    setFormState({ ...formState, [name]: value });
    };


    const handleLogin = (event) => {
        event.preventDefault();

        //Verificar useState
        //Os valores n'Ao estao sendo atualizados!!
        console.log("===>")
        console.log(email)
        console.log(senha)


        const userExist = news.find(user => user.email === email && user.senha === senha)

        if (userExist) {
           
            navigate('/dashboard')  
            
        }else {
            alert("Algo está errado!! Usuário não encontrado")
        }
    }
    
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
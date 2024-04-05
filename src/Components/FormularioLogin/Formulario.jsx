import { MenuLogin } from "../MenuLogin/MenuLogin";
import { Link } from "react-router-dom";
import { useState } from "react";

export function FormularioLogin() {
    
    const initilForm = {
        email: "",
        senha: "",
      };
    
    //Estado do formulário
    const [formState, setFormState] = useState(initilForm);

    const handleInput = (event) => {
        //Obtendo o elemento da entrada atual
        const target = event.currentTarget; //currentTarget navega entre os eventos do js
    
        //Extraindo o valor e o nome do campo de entrada
        const { value, name } = target;
    
        //Atualizando o estado do formulário com os novos valores
        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let data ={
            email : formState.email,
            senha : formState.senha
        }

        try {
            let res =  authService.authenticate(data)
            console.log("res", res.data)
            authService.setLoggedUser(res.data)
        } catch (error) {
            console.log(error)
        alert("Erro ao efetuar o login")
        }
    
    }
    
    return (
        <section className="conatinerpai">
            <MenuLogin />
            <div className="Login">
                
                <div className="formulario">
                    <div className="titulo">
                        <h1>LOGIN</h1>
                        <p>JÁ TEM UMA RESERVA? FAÇA LOGIN NA SUA CONTA E ACOMPANHE OS DETALHES DA SUA VAGA</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                        <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formState.email}
                                onChange={handleInput}
                            />
                        </div>

                        <div className="form-control">
                        <label htmlFor="senha">Senha</label>
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                value={formState.senha}
                                onChange={handleInput}
                            />
                        </div>

                        <div>
                            <button type="submit">ENTRAR</button>
                        </div>
                    </form>

                    <div>
                        <p>Não possui conta? <Link to="/cadastro" className="cadastro">Faça o Cadastro</Link></p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
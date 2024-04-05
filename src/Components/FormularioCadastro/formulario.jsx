import { MenuLogin } from "../MenuLogin/MenuLogin";
import { Link } from "react-router-dom";
import { useState } from "react";


export function FormularioCadastro() {
  //Estado inicial do formulário
  const initilForm = {
    nome: "",
    email: "",
    telefone: "",
    senha: "",
  };

  //Estado do formulário
  const [formState, setFormState] = useState(initilForm);

  //Função para lidar com a alteração de campos de entrada
  const handleInput = (event) => {
    //Obtendo o elemento da entrada atual
    const target = event.currentTarget; //currentTarget navega entre os eventos do js

    //Extraindo o valor e o nome do campo de entrada
    const { value, name } = target;

    //Atualizando o estado do formulário com os novos valores
    setFormState({ ...formState, [name]: value });
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    const formGeneral = {
      nome: formState.nome,
      email: formState.email,
      telefone: formState.telefone,
      senha: formState.senha,
      createAdt: new Date(),
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formGeneral),
    };

    fetch("http://localhost:3001/news", requestOptions)
      .then((res) => res.json())
      .then((data) => {
      // Limpar os campos do formulário após o envio bem-sucedido
      setFormState(initilForm);
      })
      .catch((error) => {
        // Tratar erros, se necessário
        console.error("Erro ao enviar o formulário:", error);
      });

  };

  return(
    <section>
        <div className="Todo">
            <div className="Direita">
                <MenuLogin />
            </div>

            <div className="esquerda">

                <div className="titulo">
                    <h1>CADASTRO</h1>
                    <p>PRIMEIRA VEZ POR AQUI? FAÇA SEU CADASTRO E RESERVE!</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="nome">Digite seu nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formState.nome}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="email">Digite seu email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="telefone">Digite seu telefone</label>
                        <input
                            type="text"
                            id="telefone"
                            name="telefone"
                            value={formState.telefone}
                            onChange={handleInput}
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="senha">Digite sua senha</label>
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
                    <p>Já possui conta? <Link to="/login" className="login">Faça o Login</Link></p>
                </div>

            </div>
        </div>
    </section>
  )
}
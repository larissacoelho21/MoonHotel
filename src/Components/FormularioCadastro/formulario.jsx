import { MenuLogin } from "../MenuLogin/MenuLogin";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import './formulariocadastro.css'


export function FormularioCadastro() {
  //Estado inicial do formulário

  const navigate = useNavigate();

  //definindo parametros vazios
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

    //criando usuario e jogando para o banco de dados
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formGeneral),
    };


    //fetch com verificação de email existente
    fetch(`http://localhost:3001/users?email=${formState.email}`)
      .then((res) => res.json())
      .then((data) => {
        
        if (data.length > 0) {
          alert("Este e-mail já está sendo usado. Por favor use outro email, ou faça login")
          setFormState(initilForm); //limpar formulario
        } else {
          fetch("http://localhost:3001/users", requestOptions)
          .then((res) => res.json())
          .then((data) => {
              alert("Parabéns! Cadastro concluido com sucesso!")
              // Limpar os campos do formulário após o envio bem-sucedido
              setFormState(initilForm);
              navigate('/login');
          })    
        }
      })
      .catch((error) => {
        // Tratar erros, se necessário
        console.error("Erro ao enviar o formulário:", error);
      });
  };

  return(
    <section className="containerpai">
            <MenuLogin />
            <div className="Login">
                <div className="formulario">
                  <div className="titulo">
                    <h1>CADASTRO</h1>
                    <p>PRIMEIRA VEZ POR AQUI? FAÇA SEU CADASTRO E RESERVE!</p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="form-control">
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome completo"
                        value={formState.nome}
                        onChange={handleInput}
                        required // que o input seja obrigatorio conter um valor
                        className="input"
                      />
                    </div>

                    <div className="form-control">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Digite seu email"
                          value={formState.email}
                          onChange={handleInput}
                          required
                          className="input"
                        />
                    </div>

                    <div className="form-control">
                      <input
                        type="number"
                        id="telefone"
                        name="telefone"
                        placeholder="Digite seu telefone"
                        value={formState.telefone}
                        onChange={handleInput}
                        maxLength={14} // maximo de numeros permitido
                        required
                        className="input"
                      />
                    </div>

                    <div className="form-control">
                        <input
                          type="password"
                          id="senha"
                          name="senha"
                          placeholder="Digite sua senha"
                          value={formState.senha}
                          onChange={handleInput}
                          minLength={6} //min de caracteres 
                          //caso for menor que 6 aparece uma mensagem solicitando mais
                          required
                          className="input"
                        />
                    </div>

                    <div>
                      <button type="submit">ENTRAR</button>
                    </div>
                  </form>

                  <div className="link-caminho">
                    <p>JÁ POSSUI CONTA? <Link to="/login" className="login">FAÇA O LOGIN</Link></p>
                  </div>

                </div>
              
            </div>
        </section>
  )
}
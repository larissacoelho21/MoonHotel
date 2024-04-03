import { MenuLogin } from "../MenuLogin/MenuLogin";

export function Formulario() {
    return (
        <section className="conatinerpai">
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
                    </form>

                    <form onSubmit={handleSubmit}>
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
                    </form>
                    
                </div>
            </div>
        </section>
    )
}
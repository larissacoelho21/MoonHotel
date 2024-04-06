import { useEffect, useState } from "react";

export function Usuario() {

  //UseState do React para gerenciar o estado dos usuários
  const [usuarios, setUsuarios] = useState([]);

  //Hook useEffect para lidar com efeitos colaterais no components
  useEffect(() => {
    fetch('http://localhost:3001/users')
    .then((res) => res.json())
    .then((data) => setUsuarios(data))
  }, []);

  console.log(usuarios)

  return(
    <section>

    <div>
        {usuarios.map((user) => (
            <div>
              <strong>Nome: {user.nome}</strong><br />
            </div>
        ))}
      </div>
    </section>
  )
}
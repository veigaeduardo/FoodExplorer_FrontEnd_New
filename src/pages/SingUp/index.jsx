import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container } from "./styles";
import {BsHexagonFill} from "react-icons/bs";

/**
 * Componente SignUp para a página de registro.
 *
 * Este componente representa a página de registro onde os usuários podem criar
 * uma nova conta fornecendo suas informações, como nome de usuário, email e senha.
 *
 * @returns {JSX.Element} Um componente de página de registro.
 */
export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(){
    if(!name || !email || !password){
      return alert("Preencha todos os campos!");
    }

    if(password.length < 6) {
      return alert("A senha deve ter no mínimo 6 caracteres.")
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      }else {
        alert("Não foi possível cadastrar.");
      }
    });
  }

  function handleSignIn() {
    navigate("/")
  }

  return (
    <Container>
      <div className="logo">
          <BsHexagonFill 
          size={40}
          color="#065E7C"
          />
          <h1>Food Explorer</h1>
      </div>

      <div className="form">
        <h1>Crie sua conta</h1>
        <div>
          <span>Seu nome</span>
          <Input 
          placeholder="Exemplo: Maria da Silva"
          type="text" 
          onChange={e => setName(e.target.value)}
          />
        </div>

        <div>
          <span>Email</span>
          <Input 
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="email"
          onChange={e => setEmail(e.target.value)}
          />
        </div>
        
        <div>
          <span>Senha</span>
          <Input 
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={e => setPassword(e.target.value)}
          />
        </div>
        
        <Button 
        title="Criar conta"
        onClick={handleSignUp}
        />

        <a onClick={handleSignIn}>
        Já tenho uma conta
        </a>
      </div>

    </Container>
  );
}

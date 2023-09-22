import { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container } from "./styles";
import {BsHexagonFill} from "react-icons/bs";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

/**
 * Componente SignIn para a página de login.
 *
 * Este componente representa a página de login, onde os usuários podem entrar em suas contas.
 *
 * @returns {JSX.Element} Um componente de página de login.
 */
export function SignIn(){
  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");

  const navigate = useNavigate();

  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({ email, password });
  }

  function handleRegister() {
    navigate("/register");
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
        <h1>Faça login</h1>
        <div>
          <span>Email</span>
          <Input 
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text" 
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
          title="Entrar"
          onClick={handleSignIn}
        />

        <a onClick={handleRegister}> Criar uma conta</a>
      </div>
    </Container>
  );
}

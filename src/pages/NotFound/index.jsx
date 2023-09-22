import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import Image404 from "../../assets/images/404.png";


export function NotFound() {
  const { user } = useAuth()

  const navigate = useNavigate();

  function handleHome() {
    navigate("/")
  }

  function handlePayment() {
    navigate("/payment")
  }

  function handleNewDish(){
    navigate("/create")
  }


  return(
    <Container >

      <div className="image">
        <img src={Image404} alt="" />

      </div>

      <div className="text">
      <h1>Oops!</h1>
      <h2>Não encontramos a página.</h2>

      <p>Talvez você possa encontrar o que precisa aqui:</p>
        <div className="buttons">
          <button onClick={handleHome}>
            Home
          </button>

          {user.admin ? 
          <button onClick={handleNewDish}>
            Novo Prato
          </button> :  

          <button onClick={handlePayment}>
            Meu pedido
          </button>
          }
          
        </div>
      </div>

    </Container>
  )
}
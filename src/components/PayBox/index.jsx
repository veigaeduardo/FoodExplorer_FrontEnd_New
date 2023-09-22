import { Container, Image } from "./styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { ButtonTransparent } from "../ButtonTransparent";
import { AiOutlineCheckCircle, AiOutlineClockCircle } from "react-icons/ai";
import { RiRestaurantLine } from "react-icons/ri";
import { ButtonCredit } from "../ButtonCredit";
import { ButtonQrCode } from "../ButtonQrCode";
import { Pix } from "../../assets/icons/pix";
import { Credit } from "../../assets/icons/credit";
import { Clock } from "../../assets/icons/clock";




export function PayBox({status, allOrders}){
  const  navigate = useNavigate()

  const [ paymentMethod, setPaymentMethod ] = useState(status)

  async function changePayment () {
    if(allOrders.length === 0 ){
      return alert("O carrinho está vazio.")

    }else {
      const data = localStorage.getItem("@foodexplorer:dishes")
      const newData = JSON.parse(data).map(data => (
        {
          name: data.name,
          quantity: data.quantity
        }
      ))

      await api.post("/orders",{
        status,
        description: JSON.stringify(newData)
      })


      localStorage.removeItem("@foodexplorer:dishes")

      setPaymentMethod("aproved")

      navigate("/")

      return alert("Pedido efetuado")
    }
  }


  const handlePayment = (statusReceive) => {
    switch(statusReceive){
      case "pending":
        return (
          <div className="status-order">
            <Clock/>

            <div>
              <span>Aguardando pagamento no caixa </span>
              <p>Escolha uma forma de pagamento</p>
            </div>
          </div>
        )
      case "pix":
        return <ButtonQrCode/>
      case "credit":
        return <ButtonCredit paymentMethod={changePayment} />
      case "aproved":
        return(
          <div className="status-order">
            <AiOutlineCheckCircle size={150} color="#c4c4cc"/>
            <span>Pagamento aprovado!</span>
          </div>
        )
      case "delivered":
        return(
          <div className="status-order">
            <RiRestaurantLine size={150} color="#c4c4cc"/>       
            <span>Pedido entregue!</span>
          </div>
          )

    }
  }

  return (
    <Container>
      <div className="pay" >
        <ButtonTransparent
          Icon={Pix} 
          iconSize={30}
          title="PIX"
          className={paymentMethod === "pix" ? "active" : ""}
          onClick={() => setPaymentMethod("pix")}
        />

        <ButtonTransparent
          Icon={Credit}
          iconSize={30}
          title="Crédito"
          className={paymentMethod === "credit" ? "active" : ""}
          onClick={() => setPaymentMethod("credit")}

        />

      </div>

      <Image>
        {handlePayment(paymentMethod)}
      </Image>
    </Container>
  )
}
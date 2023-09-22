import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonTransparent } from "../../components/ButtonTransparent";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";
import { PayBox } from "../../components/PayBox";

export function Payment(){
  const [ value, setValue ] = useState(0)

  const [ allQuantity, setAllQuantity ] = useState(0)

  const [ allOrders, setAllOrders ] = useState(() =>{
    const localData = localStorage.getItem("@foodexplorer:dishes")
    return localData ? JSON.parse(localData) : []
  })

  function handleQuantity() {
    let sum = 0
    allOrders.forEach(dish => {
      sum += Number(dish.quantity)
    });
    setAllQuantity(sum)
  }
  
  function removeDish (id) {
    
    const filteredAllOrders = allOrders.filter(dish => dish.id !== id)
    
    setAllOrders(filteredAllOrders)
    
    localStorage.setItem("@foodexplorer:dishes", JSON.stringify(filteredAllOrders))
  }

  useEffect(() => {
  const dish = JSON.parse(localStorage.getItem("@foodexplorer:dishes"))

  if(dish){
    setAllOrders(dish)
    handleQuantity()
  }
},[allOrders])

  useEffect(()=> {
    let sum = 0
    allOrders.forEach(dish => {
      sum += Number(dish.quantity) * Number(dish.price.replace(',', '.'))
    });
    setValue(sum)
  },[allOrders])

  return(
    <Container>
      <Header allQuantity={allQuantity} />

      <Content >
          <div className="orders"> 

            <h1>Meu pedido</h1>

            <div className="scroll">
            { allOrders &&
                allOrders.map(order => (
                  <div key={order.id} className='foods'>
                    <img src={`${api.defaults.baseURL}/dishes/${order.image}`} alt="food image" />
                    <div>
                      <div className="infos">
                        <span className="quantity">{order.quantity} x</span>
                        <span className="name">{order.name}</span>
                        <span className="value"> R$ {order.price}</span>
                      </div>

                      <ButtonTransparent
                        title='Excluir'
                        onClick={() => removeDish(order.id)}
                      />
                    </div>
                </div>
                ))
            }
            <div className='foods'>

                </div>
            </div>

            <h2>Total: R$ {value}</h2>
          </div>

          <div className="payment">
            <h1>Pagamento</h1>

            <PayBox
              status= "pending"
              allOrders={allOrders}
            />
          </div>

      </Content>

      <Footer />
    </Container>
  )
}
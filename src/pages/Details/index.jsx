import { Container, Content } from "./styles";
import { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { ButtonTransparent } from "../../components/ButtonTransparent";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { api } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { Receipt } from "../../assets/icons/receipt";

/**
 * Componente de Detalhes de Produto.
 *
 * Este componente é usado para exibir os detalhes de um produto específico.
 * Ele exibe informações como nome, descrição, preço, quantidade disponível e
 * fornece opções para adicionar ou remover o produto do carrinho de compras.
 *
 * @component
 */
export function Details(){
  const params = useParams()


  const [order, setOrder] = useState()

  const [ allQuantity, setAllQuantity ] = useState(0)

  const [ allOrders, setAllOrders ] = useState(() =>{
    const localData = localStorage.getItem("@foodexplorer:dishes")
    return localData ? JSON.parse(localData) : []
  })
  const [quantity, setQuantity] = useState(1) 

  function incrementCounter(){
    setQuantity(prevState => prevState + 1)
  }

  function decrementCounter() {
    if(quantity <= 1){  
      setQuantity(1)
      return alert('Quantidade mínima é 1')
    }
    setQuantity(prevState => prevState - 1)
  }

  const navigate = useNavigate()


  function handleAllQuantity (){
    const order = {
      quantity: quantity,
      id: '01',
      name: 'Salada Ravanello',
      image: imageDish,
      description:'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.',
      ingredients:[
        {
          id: '01',
          name:'alface',
          image:imageIngredients,
        },
        {
          id: '02',
          name:'alface',
          image:imageIngredients,
        },
        {
          id: '03',
          name:'alface',
          image:imageIngredients,
        },
        {
          id: '04',
          name:'alface',
          image:imageIngredients,
        },
      ],
      price: 'R$ 25,97'
    
    }

    const savedDishes = JSON.parse(localStorage.getItem("@foodexplorer:dishes"))
    
    if(!savedDishes){
      setAllOrders(order)
    }
    
    const filteredSavedDishes = savedDishes.filter(p => p.id !== order.id)

    setAllOrders(filteredSavedDishes)

    setAllOrders(prevState =>[...prevState, order])

  }

  function handleHome(){
    navigate("/")
  }

  const handleQuantity = () => {
    let sum = 0
    allOrders.forEach(dish => {
      sum += Number(dish.quantity)
    });
    setAllQuantity(sum)
  }

  useEffect(() => {
    const dish = JSON.parse(localStorage.getItem("@foodexplorer:dishes"))

    if(dish){
      setAllOrders(dish)
      handleQuantity()
    }
  },[])

  useEffect(()=> {
    async function fetchOrder() {
      const response = await api.get(`/dishes/${params.id}`)

      setOrder(response.data)
    }

    fetchOrder()
  },[])

  
  
  return (
    <Container>

      <Header allQuantity={allQuantity}/>

      <Content>

          <ButtonTransparent 
            Icon={MdOutlineArrowBackIos}
            iconSize={30}
            title='voltar'
            onClick={handleHome}
          />


        {order && 
        <div className="info-dish">
          <img src={`${api.defaults.baseURL}/dishes/${order.image}`} className="dish-img" alt="image dish" />

          <div className="infos">
            <h2>{order.name}</h2>
            <p>{order.description}</p>

            <li>
              {order.ingredients.map(ingredient => (
                <ul key={ingredient.id}>
                  <img src={`${api.defaults.baseURL}/${ingredient.image}`}  alt="ingredients" className="ingredients"/>
                  <h5>{ingredient.name}</h5>
                </ul>
              ))}

            </li>

            <div className="valueAndQuantity">
              <h4>R$ {order.price}</h4>

              <div className="quantity">
                <div>
                  <button onClick={decrementCounter}>
                   &minus;
                  </button>
                  <span>{quantity.toString().padStart(2,0)}</span>
                  <button onClick={incrementCounter}>
                    &#43;
                  </button>
                </div>
                <Button
                  icon={<Receipt />}
                  title='incluir'
                  onClick={handleAllQuantity}
                />
              </div>
            </div>
          </div>

        </div>
        }


      </Content>

      <Footer/>
    </Container>
  )
}

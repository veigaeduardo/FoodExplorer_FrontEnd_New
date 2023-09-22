import { AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import { Button } from "../Button";
import { BoxCounter, ButtonMoreLess, Container, Counter } from "./styles";
import { Minus } from "../../assets/icons/minus";
import { Plus } from "../../assets/icons/plus";
import { useState } from "react";
import { ButtonTransparent } from "../ButtonTransparent";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

/**
 * Componente que representa um cartão de prato que pode ser exibido em uma lista de pratos.
 * @param {Object} props - As propriedades do componente.
 * @param {number} props.CardId - O ID do prato.
 * @param {string} props.title - O título do prato.
 * @param {string} props.price - O preço do prato.
 * @param {string} props.img - A URL da imagem do prato.
 * @param {string} props.description - A descrição do prato.
 * @param {Function} props.onFavorite - Função de callback chamada quando o prato é marcado como favorito.
 * @param {boolean} props.isAdmin - Indica se o usuário atual é um administrador.
 * @param {Function} props.fnLoading - Função para exibir um indicador de carregamento.
 * @param {number} props.amount - A quantidade de pratos selecionados.
 * @param {boolean} props.isFavorite - Indica se o prato já está marcado como favorito.
 * @param {Object} rest - Outras propriedades passadas para o componente.
 * @returns {JSX.Element} - O componente React para renderização.
 */
export function Card({ title, image, id, description, price, setAllOrders, setFavoriteP, favoriteP,  ...rest}) {
  const [quantity, setQuantity] = useState(1)

  const navigate = useNavigate()

  const [favorite, setFavorite] = useState(() => {
    const localData = localStorage.getItem("@foodexplorer:favorites")

    if(localData){

      const favorites = JSON.parse(localData)
      const isFavorite = favorites.filter(dish => dish == id)

      if(isFavorite.length === 1){
        return true
      }
    }

    return false
  })

  

  function handleFavorites (){
    setFavorite(!favorite)
    
    if(favorite){
      const favoriteFiltered = favoriteP.filter(dish => dish !== id)
      setFavoriteP(favoriteFiltered)

    }else{
      setFavoriteP(prevState => [ ...prevState, id])
    }
  }

  const handleDetails = () => {
    navigate(`/details/${id}`)
  }

  function incrementCounter(){
    setQuantity(prevState => prevState + 1)
  }

  function decrementCounter(){
    if (quantity > 1) {
      setQuantity(prevState => prevState - 1)
    }
  }

  function handleAllQuantity() {
    const dishes = {
      id:id,
      name: title,
      image: image,
      price: price,
      quantity: quantity,
    }
  
    const savedDishes = JSON.parse(localStorage.getItem("@foodexplorer:dishes"))
    
    if(!savedDishes){
      setAllOrders(prevState =>[...prevState, dishes])
    }
    
    const filteredSavedDishes = savedDishes.filter(p => p.id !== dishes.id)

    setAllOrders(filteredSavedDishes)

    setAllOrders(prevState =>[...prevState, dishes])
}
  
  return(
    <Container {...rest}>
      <ButtonTransparent 
      Icon={favorite ? AiFillHeart :  AiOutlineHeart}
      className='icon'
      iconSize={30}
      iconColor={favorite ? 'red' : ''}
      onClick={() => handleFavorites(id)}
      />

      <div>
        <img src={`${api.defaults.baseURL}/dishes/${image}`} alt="dish image" />
        <div className="informations">
        <ButtonTransparent
        className="name"
        title={title}
        onClick={handleDetails}
        />
        <span>{description}</span>
        <h2>R$ {price}</h2>
        </div>
      </div>

      <BoxCounter>
        <Counter>
          <ButtonMoreLess onClick={decrementCounter}>
          <Minus />
          </ButtonMoreLess>
          <span>
          {quantity.toString().padStart(2,0)}
          </span>
          <ButtonMoreLess onClick={incrementCounter}>
          <Plus />
          </ButtonMoreLess>
        </Counter>
        <Button 
        title="incluir"
        onClick={handleAllQuantity}
        />
      </BoxCounter>
    </Container>
  )
}

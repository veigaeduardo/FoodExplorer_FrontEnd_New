import { Container, Logo, Logout } from "./styles";
import { Button } from "../Button"
import { Input } from "../Input";
import { Search } from "../../assets/icons/search";
import { ButtonText } from '../ButtonText';
import { Receipt } from '../../assets/icons/receipt';
import { Heart } from "../../assets/icons/heart";
import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

/**
 * Componente Header para exibir o cabeçalho da página.
 *
 * Este componente renderiza o cabeçalho da página, que inclui um logotipo, um campo de pesquisa, ícones de ação (logout e carrinho de compras) e outros elementos de interface do usuário.
 *
 * @param {function} fnChange - Função para manipular eventos de mudança.
 * @param {object} rest - Outras propriedades passadas para o componente.
 * @returns {JSX.Element} Um componente de cabeçalho.
 */
export function Header({ handleShowFavorites, allQuantity, setDishes}){
  const [ search, setSearch ] = useState("");

  const navigate = useNavigate();

  const { signOut } = useAuth();

  function handleHome(){
    navigate("/")  
  }

  function handlePayment(){
    navigate("/payment")
  }

  async function handleSignOut() {
    const response = await api.get("/favorites")
    const favoriteList = localStorage.getItem("@foodexplorer:favorites")

    if(favoriteList.length !== 0){
      if(!response.data.favoriteList){
        await api.post("/favorites", {favoriteList} )
      } else {
        await api.put("/favorites", {favoriteList} )
      }
    }


    localStorage.removeItem("@foodexplorer:favorites")

    navigate("/")
    signOut()
  }

  useEffect(()=> {
    if(search.length > 0 && window.location.pathname == '/') {
      async function fetchDishes(){  
        const response = await api.get(`/dishes?name=${search}`)
    
        setDishes(response.data)
      }

      fetchDishes()
    } else if(search.length == 0 ){

      if(setDishes){

      async function fetchDishes() {
        const response = await api.get(`/dishes?name=${search}`)

        setDishes(response.data)
      }
      fetchDishes()
      }
    }
  },[search])

  return(
    <Container>
      <div className="header" >      
        <div className="buttons">
          <Logo onClick={handleHome}>
            <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C"/>
            </svg>
            <h1>Food Explorer</h1>
          </Logo>
          <ButtonText 
            icon={<Heart/>}
            title="Meus favoritos"
            onClick={handleShowFavorites}
          />
          <Input 
            icon={<Search/>}
            placeholder="Busque pelas opções de pratos"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <Button 
          className="button-receipt"
          icon={<Receipt/>}
          title={`Meu pedido (${allQuantity})`}
          onClick={handlePayment}
        />

        <Logout onClick={handleSignOut}>
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.2112 6.75L23.4612 12M23.4612 12L18.2112 17.25M23.4612 12H9.46118M9.46118 23H2.46118C2.19597 23 1.94161 22.8946 1.75408 22.7071C1.56654 22.5196 1.46118 22.2652 1.46118 22V2C1.46118 1.73478 1.56654 1.48043 1.75408 1.29289C1.94161 1.10536 2.19597 1 2.46118 1H9.46118" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </Logout>
      </div>
    </Container>
  )
}

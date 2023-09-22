import { Container, Logo, Logout, NewDishButton } from "./styles";
import { AiOutlinePlus } from "react-icons/ai";
import { Search } from "../../assets/icons/search";
import { useAuth } from "../../hooks/auth";
import { Input } from "../Input";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";

export function HeaderAdmin({setDishes}){
  const [ search, setSearch ] = useState("");

  const navigate = useNavigate();
  const { signOut } = useAuth();

  function handleHome(){
    navigate("/")  
  }

  function handleNew(){
    navigate("/create")
  }

  function handleOrders(){
    navigate("/orders")
  }


  function handleSignOut(){
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
      <ul>
        <li>      
          <Logo onClick={handleHome}>
            <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C"/>
            </svg>
            <h1>Food Explorer</h1>
        </Logo>
        </li>

        <li>
          <NewDishButton onClick={handleNew}>
            <AiOutlinePlus />
            <h1>Novo Prato</h1>
          </NewDishButton>
        </li>

        <li className="input">
          <Input 
            icon={<Search/>}
            placeholder="Busque pelas opções de pratos"
            onChange={(e) => setSearch(e.target.value)}
          />
        </li>

        <li>
          <Button 
          title="Pedidos"
          onClick={handleOrders}
          />
        </li>

        <li>
        <Logout onClick={handleSignOut}>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.2112 6.75L23.4612 12M23.4612 12L18.2112 17.25M23.4612 12H9.46118M9.46118 23H2.46118C2.19597 23 1.94161 22.8946 1.75408 22.7071C1.56654 22.5196 1.46118 22.2652 1.46118 22V2C1.46118 1.73478 1.56654 1.48043 1.75408 1.29289C1.94161 1.10536 2.19597 1 2.46118 1H9.46118" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Logout>
        </li>
      </ul>
    </Container>
  )
}

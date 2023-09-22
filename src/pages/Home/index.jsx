
import { useEffect, useState } from "react";
import Fruits from "../../assets/images/fruits.png";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Card } from "../../components/Card";
import { AdminCard } from "../../components/AdminCard";
import { Section } from "../../components/Section";
import { useAuth } from "../../hooks/auth";
import { Container, Content } from "./styles";
import { api } from "../../services/api";

/**
 * Componente Home para a página inicial da aplicação.
 *
 * Este componente representa a página inicial da aplicação e exibe uma lista de pratos
 * disponíveis. Ele busca os pratos na API, renderiza um carrossel de pratos usando a
 * biblioteca Swiper e permite que o usuário adicione pratos ao carrinho de compras.
 *
 * @returns {JSX.Element} Um componente React que representa a página inicial.
 */
export function Home(){
  const { user } = useAuth();

  const [favoriteP, setFavoriteP] = useState(() => {
    const localData = localStorage.getItem("@foodexplorer:favorites")
    return localData ? JSON.parse(localData) : []
  })

  const [ dishes, setDishes ] = useState([])

  const [ mainDishes,setMainDishes] = useState([]) 
  const [ mainDishesFavorites, setMainDishesFavorites] = useState([])

  const [ dessertDishes,setDessertDishes ] = useState([]) 
  const [ dessertDishesFavorites, setDessertDishesFavorites ] = useState([])

  const [ drinks,setDrinks ] = useState([]) 
  const [ drinksFavorites, setDrinksFavorites ] = useState([])

  const [ showFavorites, setShowFavorites ] = useState(false)

  const [ allQuantity, setAllQuantity ] = useState(0)

  const [ allOrders, setAllOrders ] = useState(() =>{
    const localData = localStorage.getItem("@foodexplorer:dishes")
    return localData ? JSON.parse(localData) : []
  })

  async function handleShowFavorites() {

    if(!favoriteP){
      return alert('Não há pratos favoritos')
    } 

    const favoriteDishes = dishes.filter(dish => favoriteP.includes(dish.id) )

    const mainFavorites = favoriteDishes.filter(dish => dish.category == 'Prato Principal')
    setMainDishesFavorites(mainFavorites)

    const dessertFavorites = favoriteDishes.filter(dish => dish.category == 'Sobremesa')
    setDessertDishesFavorites(dessertFavorites)

    const drinkFavorite = favoriteDishes.filter(dish => dish.category == 'Bebida')
    setDrinksFavorites(drinkFavorite)
  
    setShowFavorites(!showFavorites)
  }

  function handleQuantity() {
    let sum = 0
    allOrders.forEach(dish => {
      sum += Number(dish.quantity)
    });
    setAllQuantity(sum)
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get('/dishes?name')
      setDishes(response.data)
    }
    fetchDishes()

  }, [])

  useEffect( ()=>{
    async function fetchFavorites() {

      const responseFavorites = await api.get("/favorites")
      
      if(!responseFavorites.data.favoriteList){
        localStorage.setItem('@foodexplorer:favorites', JSON.stringify([]))
      }else{
        localStorage.setItem('@foodexplorer:favorites', responseFavorites.data.favoriteList)
      }

    }

    fetchFavorites()
  },[])

  useEffect(() => {
    const dish = JSON.parse(localStorage.getItem("@foodexplorer:dishes"))

    if(dish){
      setAllOrders(dish)
      handleQuantity()
    }
  },[])

    useEffect(() => {
      localStorage.setItem("@foodexplorer:dishes",JSON.stringify(allOrders))
      handleQuantity()
   
     },[allOrders])
   
     useEffect(()=> {
       function selectDishes() {
         const main = dishes.filter(dish => dish.category == "Prato Principal")
         setMainDishes(main)
   
         const dessert = dishes.filter(dish => dish.category == 'Sobremesa')
         setDessertDishes(dessert)
   
         const drink = dishes.filter(dish => dish.category == 'Bebida')
         setDrinks(drink)
       }
       selectDishes()
     },[dishes])

     useEffect(()=>{
      localStorage.setItem("@foodexplorer:favorites",JSON.stringify(favoriteP))
  
    },[favoriteP])
  


  return (
    <Container>
      {user.admin ? <HeaderAdmin setDishes={setDishes}/> 
      :  
      <Header
      handleShowFavorites={handleShowFavorites}
      allQuantity={allQuantity}
      setDishes={setDishes}
      /> }

      <Content>
        
          <div className="banner">
            <img src={Fruits} alt="image fruits and cookie" />
            <div className="text-banner">
              <h1>Sabores Inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </div>

          {mainDishes.length > 0 ?  
            <Section title='Pratos principais'>
      
              { 
                user.admin ? 
                mainDishes.map(dish => (
                  <AdminCard
                    key={dish.id}
                    id={dish.id}
                    className='card'
                    title={dish.name}
                    image={dish.image}
                    description={dish.description}
                    price={dish.price}
                    setAllOrders={setAllOrders}
                  />
                )) 
                :
                !showFavorites ? 
                mainDishes.map(dish => (
                  <Card
                    key={dish.id}
                    id={dish.id}
                    className='card'
                    title={dish.name}
                    image={dish.image}
                    description={dish.description}
                    price={dish.price}
                    setAllOrders={setAllOrders}
                    setFavoriteP={setFavoriteP}
                    favoriteP={favoriteP}
                  />
                )) 
                :
                mainDishesFavorites.map(dish => (
                  <Card
                    key={dish.id}
                    id={dish.id}
                    className='card'
                    title={dish.name}
                    image={dish.image}
                    description={dish.description}
                    price={dish.price}
                    setAllOrders={setAllOrders}
                    setFavoriteP={setFavoriteP}
                    favoriteP={favoriteP}

                  />
                )) 
              }

            </Section>
            :
            ''
          }
          
          {dessertDishes.length > 0 ?
            <Section title='Sobremesas'>

              { 
                user.admin ? 
                dessertDishes.map(dish => (
                  <AdminCard
                    key={dish.id}
                    id={dish.id}
                    className='card'
                    title={dish.name}
                    image={dish.image}
                    description={dish.description}
                    price={dish.price}
                    setAllOrders={setAllOrders}
                  />
                )) 
                :
                !showFavorites ? 
              
                dessertDishes.map(dish => (
                  <Card
                    key={dish.id}
                    id={dish.id}
                    className='card'
                    title={dish.name}
                    image={dish.image}
                    description={dish.description}
                    price={dish.price}
                    setAllOrders={setAllOrders}
                    setFavoriteP={setFavoriteP}
                    favoriteP={favoriteP}

                  />
                )) 
                :
                dessertDishesFavorites.map(dish => (
                  <Card
                    key={dish.id}
                    id={dish.id}
                    className='card'
                    title={dish.name}
                    image={dish.image}
                    description={dish.description}
                    price={dish.price}
                    setAllOrders={setAllOrders}
                    setFavoriteP={setFavoriteP}
                    favoriteP={favoriteP}

                  />
                )) 
                
              }

            </Section>
            :
            ''
          } 
          
          {drinks.length > 0 ?
            <Section title='Bebidas'>

              {               
              user.admin ? 
                drinks.map(dish => (
                  <AdminCard
                    key={dish.id}
                    id={dish.id}
                    className='card'
                    title={dish.name}
                    image={dish.image}
                    description={dish.description}
                    price={dish.price}
                    setAllOrders={setAllOrders}
                    
                  />
                )) 
                :
                !showFavorites ? 
              
                drinks.map(drink => (
                  <Card
                    key={drink.id}
                    id={drink.id}
                    className='card'
                    title={drink.name}
                    image={drink.image}
                    description={drink.description}
                    price={drink.price}
                    setAllOrders={setAllOrders}
                    setFavoriteP={setFavoriteP}
                    favoriteP={favoriteP}              
                  />
                )) 
                :
                drinksFavorites.map(drink => (
                  <Card
                    key={drink.id}
                    id={drink.id}
                    className='card'
                    title={drink.title}
                    image={drink.image}
                    description={drink.description}
                    price={drink.price}
                    setAllOrders={setAllOrders}
                    setFavoriteP={setFavoriteP}
                    favoriteP={favoriteP}
                  />
                ))       
              }

            </Section>
            :
            ''
          }
        </Content>
      <Footer />
    </Container>
  )
}

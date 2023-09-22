import { useEffect, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";

import { useAuth } from "../../hooks/auth";
import { Input } from "../../components/Input";
import { ButtonTransparent } from "../../components/ButtonTransparent";
import { Header } from "../../components/Header";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Footer } from "../../components/Footer";
import { TextArea } from "../../components/TextArea";
import { IngredientItem } from "../../components/IngredientItem";
import { Container } from "./styles";

import { api } from "../../services/api";

export function Edit(){
  const params = useParams();

  const { user } = useAuth()

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const options = ["Prato Principal", "Sobremesa", "Bebida"]
  const [category,setCategory] = useState(options[0])

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const navigate = useNavigate();

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }


  function handleImage(e){
    setImage(e.target.files[0])
  }

  async function handleEditDish() {
    const fileUpload = new FormData();

    if(newIngredient.length > 0){
      return alert("Você deixou um ingrediente pendente no campo para adicionar.")
    }

      await api.put(`/dishes/${params.id}`, {
        name, 
        ingredients,
        price,
        description,
        category
        })
        
    fileUpload.append("image", image)

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    await api.patch(`/dishes/image/${params.id}`, fileUpload, config) 

    alert("Prato editado com sucesso!");
    navigate("/");
  }

  function handleHome() {
    navigate("/")
  }

  function fetchData () {
    api.get(`/dishes/${params.id}`)
    .then(
      response => {
        setDescription(response.data.description)
        setName(response.data.name)
        setPrice(response.data.price)
        setCategory(response.data.category)

        const newIng =response.data.ingredients.map(item => item.name)
        setIngredients(newIng)
      })


  }

    useEffect(() => {
      fetchData()
    },[])

  return (
    <Container>
      {user.admin ? <HeaderAdmin /> : <Header/>}
      <main>
        <ButtonTransparent
            onClick={handleHome}
            Icon={MdOutlineArrowBackIos}
            iconSize={20}
            title= "voltar"
          />

        <h2>Editar Prato</h2>

        
        <div className="wrapper">
            <div className="files">
              <span>Imagem do Prato</span>
              <label 
                htmlFor="dish-name" ><FiUpload size={24}/> Selecione imagem 
              </label>
              <input 
                type="file"
                id="dish-name" name="dish-name"
                onChange={handleImage}
                accept="image/png, image/jpeg"/>
            </div>

          <div className="input-name">
            <p>Nome</p>
            <Input 
            placeholder={name}
            onChange={e => setName(e.target.value)}
            required
            />
          </div>

            <div className=" select">
              <span htmlFor="food_type">Categoria</span>
                <select 
                  value={category}
                  onChange={(e)=>setCategory(e.target.value)}
                >
                  {
                    options.map((option, index) => (
                      <option value={option} key={String(index)}>
                        {option}
                      </option>
                    ))
                  }
                </select>
            </div>
        </div>

      <div className="wrapper">
        <div className="ingredients">
          <span>Ingredientes</span>
          <div className="tags">
          {
            ingredients.map((ingredient, index) => (
              <IngredientItem 
                key={String(index)}
                value={ingredient}
                onClick={() => handleRemoveIngredient(ingredient)}
              />
            ))
          }

          <IngredientItem  
          isNew
          value={newIngredient}
          onChange= { e => setNewIngredient(e.target.value)}
          onClick={handleAddIngredient}
          placeholder="Ingredientes"
          />
          </div>

        </div>
          

          <div>
            <p>Preço</p>
            <Input 
            placeholder={price}
            onChange={e => setPrice(e.target.value)}
            />
          </div>
      </div>

          <div>
            <p>Descrição</p>
            <TextArea 
            placeholder={description}
            onChange={e => setDescription(e.target.value)}
            />
          </div>

        <button 
        className="addDish"
        onClick={handleEditDish}>
          Editar Prato
        </button>
      </main>

      <Footer />
    </Container>
  )
}
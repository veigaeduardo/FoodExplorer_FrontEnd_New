import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

/**
 * Componente de provedor de autenticação.
 *
 * Este componente fornece um contexto de autenticação que pode ser usado
 * para gerenciar o estado de autenticação e realizar operações relacionadas à autenticação.
 *
 * @param {object} children - Os componentes filho que serão envolvidos pelo provedor de autenticação.
 * @returns {JSX.Element} Um componente de provedor de autenticação.
 */
function AuthProvider({ children }) {
  const [data, setData] = useState({});


  async function signIn({ email, password }) {

   try {
    const response = await api.post("/sessions", { email, password });
    const { user, token } = response.data;

    localStorage.setItem("@food-explorer:user", JSON.stringify(user));
    localStorage.setItem("@food-explorer:token", token);

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setData({ user, token })

   } catch (error) {
    if(error.response){
      alert(error.response.data.message);
    }else{
      alert("Não foi possível entrar.");
    }
   }
  }

  function signOut(){
    localStorage.removeItem('@food-explorer:token');
    localStorage.removeItem('@food-explorer:user');

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem('@food-explorer:token');
    const user = localStorage.getItem('@food-explorer:user');

    if(token && user){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
      setData({
        token,
        user: JSON.parse(user)
      });
  }

  }, [])

  return (
    <AuthContext.Provider value={{ 
      signIn,
      signOut,
      user: data.user
    }}
    >
      {children}
    </AuthContext.Provider>
  )
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };

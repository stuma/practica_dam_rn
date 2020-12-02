import React, {useState, createContext, useEffect} from 'react';
import axios from 'axios';

export const API_URL =
  'https://api.mercadolibre.com/sites/MLA/search?q=Motorola%20G6';

export const StoreContext = createContext();

export const StoreProvider = ({children}) => {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([
    {nombre: 'Categoria 1', color: 'red', id: Math.random()},
    {nombre: 'Categoria 2', color: 'blue', id: Math.random()},
    {nombre: 'Categoria 3', color: 'green', id: Math.random()},
    {nombre: 'Categoria 4', color: 'yellow', id: Math.random()},
  ]);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setProductos(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StoreContext.Provider
      value={{productos, setProductos, categorias, setCategorias}}>
      {children}
    </StoreContext.Provider>
  );
};

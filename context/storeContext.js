import React, {useState, createContext, useEffect} from 'react';
import axios from 'axios';
import {API_URL} from '../App';

export const StoreContext = createContext();

export const StoreProvider = ({children}) => {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);

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

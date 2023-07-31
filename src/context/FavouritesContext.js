import React, { createContext, useState, useContext, useEffect } from 'react';
import { getFavourites } from '../dataUtlis/dataStorage';

let FavouritesContext = createContext();

export function FavouritesProvider({ children }) {
  let [favourites, setFavourites] = useState([]);

  useEffect(() => {
    setFavourites(getFavourites());
  }, []);

  return (
    <FavouritesContext.Provider value={{ favourites, setFavourites }}>{children}</FavouritesContext.Provider>
  );
}

export function useFavourites() {
  let context = useContext(FavouritesContext);
  if (!context) {
    throw new Error('useFavourites must be used within a FavouritesProvider');
  }
  return context;
}

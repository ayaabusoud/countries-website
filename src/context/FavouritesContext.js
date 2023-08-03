import React, { createContext, useState, useContext, useEffect } from 'react';
import { FAVOURITES_KEY } from '../dataUtlis/DataStorage';

let FavouritesContext = createContext();

export function FavouritesProvider({ children }) {
  let [favourites, setFavourites] = useState([]);

  useEffect(() => {
    let favorites = localStorage.getItem(FAVOURITES_KEY);
    if (favorites) {
      setFavourites(JSON.parse(favorites));
    }
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
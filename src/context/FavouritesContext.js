import React, { createContext, useState, useContext, useEffect } from 'react';
import { FAVOURITES_KEY } from '../dataUtlis/DataStorage';

let FavouritesContext = createContext();

/**
 * Provider component for managing favourite countries using React context.
 * 
 * @param {object} props - The component props.
 * @param {ReactNode} props.children - The child components to be wrapped by the provider.
 * @returns {JSX.Element} - The provider component.
 */
export function FavouritesProvider({ children }) {
  let [favourites, setFavourites] = useState([]);

  // UseEffect to load favourites from local storage on component mount
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

/**
 * Custom hook to access the favourite countries context.
 * 
 * @returns {object} - An object containing favourite-related state and functions.
 * @throws {Error} - If used outside of a FavouritesProvider.
 */
export function useFavourites() {
  let context = useContext(FavouritesContext);
  if (!context) {
    throw new Error('useFavourites must be used within a FavouritesProvider');
  }
  return context;
}
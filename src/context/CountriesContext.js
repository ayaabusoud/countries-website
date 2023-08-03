import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAllCountries } from '../services/CountriesAPIs';

export let CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  let [allCountries, setAllCountries] = useState([]);
  let [countries, setCountries] = useState([]);
  let [searchedCountries, setSearchedCountries] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  async function init() {
    try {
      const data = await getAllCountries();
      setAllCountries(data);
      setCountries(data);
      setSearchedCountries(data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <CountriesContext.Provider value={{ allCountries, countries, isLoading, searchedCountries, setIsLoading, setCountries, setSearchedCountries }}>{children}</CountriesContext.Provider>
  );
};

export function useCountries() {
  let context = useContext(CountriesContext);
  if (!context) {
    throw new Error('useFavourites must be used within a FavouritesProvider');
  }
  return context;
}

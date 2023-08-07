import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAllCountries } from '../services/CountriesAPIs';

export let CountriesContext = createContext();

/**
 * Provider component for managing country data using React context.
 * 
 * @param {object} props - The component props.
 * @param {ReactNode} props.children - The child components to be wrapped by the provider.
 * @returns {JSX.Element} - The provider component.
 */
export const CountriesProvider = ({ children }) => {
  let [allCountries, setAllCountries] = useState([]);
  let [countries, setCountries] = useState([]);
  let [searchedCountries, setSearchedCountries] = useState([]);
  let [isLoading, setIsLoading] = useState(true);


  //Initializes data by fetching all countries and setting initial states.
  async function init() {
    try {
      let countries = await getAllCountries();
      setAllCountries(countries);
      setCountries(countries);
      setSearchedCountries(countries);
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

/**
 * Custom hook to access the country data context.
 * 
 * @returns {object} - An object containing country-related state and functions.
 *  * @throws {Error} - If used outside of a CountriesProvider.
 */
export function useCountries() {
  let context = useContext(CountriesContext);
  if (!context) {
    throw new Error('useFavourites must be used within a FavouritesProvider');
  }
  return context;
}

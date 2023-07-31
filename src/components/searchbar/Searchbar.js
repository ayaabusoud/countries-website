import React, { useEffect, useMemo } from 'react'
import style from './searchbar.module.css'
import { useCountries } from '../../context/CountriesContext';
import debounce from 'lodash.debounce';
import { handleSearchInputChange } from '../../controllers/filterController';
import { useFavourites } from '../../context/FavouritesContext';

export default function Searchbar(props) {
    let { placeholder, name } = props;
    let { setIsLoading, setCountries,countries, setSearchedCountries } = useCountries();
    let { favourites} = useFavourites();

    const SEARCHING = useMemo(() => {
        return debounce((e) => handleSearchInputChange(e, setCountries, setIsLoading, setSearchedCountries, favourites), 1500);
    }, [countries]);
      
    useEffect(() => {
      return () => {
        SEARCHING.cancel();
      };
    });
  
    return (
      <form className={`rounded-1 ${style.searchbar} d-flex pe-1`} role="search">
        <i className="fas fa-search fa-md align-self-center px-4 text-secondary" />
        <input
          className={`${style.searchbarInput} w-100 border-0`}
          name={name}
          type="search"
          placeholder={placeholder}
          aria-label="Search"
          onChange={SEARCHING}/>
      </form>
    );
  }
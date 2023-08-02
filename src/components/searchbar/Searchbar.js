import React, { useCallback } from 'react'
import style from './Searchbar.module.css'
import { useCountries } from '../../context/CountriesContext';
import debounce from 'lodash.debounce';
import { handleCountrySearch } from '../../utlis/FlterUtlis';
import { useFavourites } from '../../context/FavouritesContext';

export default function Searchbar(props) {
  let { placeholder, name } = props;
  let { setIsLoading, setCountries, setSearchedCountries } = useCountries();
  let { favourites } = useFavourites();

  function handleSearch(e) {
    setIsLoading(true);
    setCountries([]);
    SEARCHING(e.target.value, favourites);
  }

  const SEARCHING = useCallback(
    debounce((searchTerm, favourites) => {
      handleCountrySearch(searchTerm, setCountries, setIsLoading, setSearchedCountries, favourites);
    }, 1500), []
  );

  return (
    <form className={`rounded-1 ${style.searchbar} d-flex pe-1`} role="search">
      <i className="fas fa-search fa-md align-self-center px-4 text-secondary" />
      <input
        className={`${style.searchbarInput} w-100 border-0`}
        name={name}
        type="search"
        placeholder={placeholder}
        aria-label="Search"
        onChange={handleSearch} />
    </form>
  );
}
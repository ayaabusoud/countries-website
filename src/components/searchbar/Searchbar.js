import React, { useCallback } from 'react'
import style from './Searchbar.module.css'
import { useCountries } from '../../context/CountriesContext';
import debounce from 'lodash.debounce';
import { filterCountries, handleCountrySearch } from '../../utlis/FilterUtlis';
import { useFavourites } from '../../context/FavouritesContext';

/**
 * Component for displaying a search bar and handling country search functionality.
 * 
 * @param {object} props - The component props.
 * @param {string} props.placeholder - The placeholder text for the search input.
 * @param {string} props.name - The name attribute for the search input.
 * @returns {JSX.Element} - The search bar component.
 */
export default function Searchbar(props) {
  let { placeholder, name } = props;
  let { setIsLoading, setCountries, setSearchedCountries} = useCountries();
  let { favourites } = useFavourites();

  /**
   * Handles the search input change and performs country search.
   * 
   * @param {object} e - The event object from the input change.
   */
  function handleSearch(e) {
    setIsLoading(true);
    setCountries([]);
    SEARCHING(e.target.value, favourites);
  }

  /**
   * Debounced search function to handle actual search logic.
   * 
   * @param {string} searchTerm - The term to search for.
   * @param {array} favourites - The list of favourite countries.
   */
  const SEARCHING = useCallback(
    debounce(async (searchTerm, favourites) => {
        let searchedCountries = await handleCountrySearch(searchTerm, setSearchedCountries);
        setSearchedCountries(searchedCountries);
        filterCountries(searchedCountries, favourites, setCountries);
        setIsLoading(false);
    }, 1500), []
);

  return (
    <form className={`rounded-1 ${style.searchbar} d-flex pe-1`} role="search">
      <i className="fas fa-search fa-md align-self-center px-4 text-secondary" />
      <input
        className={`${style.searchbarInput} w-100 border-0`}
        name="search-country"
        type="search"
        placeholder={placeholder}
        aria-label="Search"
        onChange={handleSearch} />
    </form>
  );
}
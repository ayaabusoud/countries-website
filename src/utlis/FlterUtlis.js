import { getAllCountries, getCountriesByName } from '../services/CountriesAPIs';

export const NO_FILTER = "No filter";
export const FAVOURITES_OPTION = "Favourites";
export const DEFAULT_OPTION = "Filter by"
let selectedDropDownOption = DEFAULT_OPTION;

export async function handleCountrySearch(searchTerm, setCountries, setIsLoading, setSearchedCountries, favourites) {
  let searchedCountries;
  try {
    if (searchTerm !== '') {
      searchedCountries = await getCountriesByName(searchTerm);
    } else {
      searchedCountries = await getAllCountries();
    }
  } catch (error) {
    searchedCountries = [];
  } finally {
    setSearchedCountries(searchedCountries);
    filterCountries(selectedDropDownOption, searchedCountries, favourites, setCountries);
    setIsLoading(false);
  }
}

export async function handleDropDownFilter(option, searchedCountries, favourites, setCountries, isLoading) {
  selectedDropDownOption = option;
  if (isLoading) {
    return;
  }
  filterCountries(option, searchedCountries, favourites, setCountries);
};

export function filterCountries(option, searchedCountries, favourites, setCountries) {
  let filteredCountries;
  if (option === DEFAULT_OPTION) {
    filteredCountries = searchedCountries;
  } else if (option === FAVOURITES_OPTION) {
    filteredCountries = filterByFavourites(searchedCountries, favourites);
  } else {
    filteredCountries = filterByRegion(searchedCountries, option);
  }
  setCountries(filteredCountries);
}

function filterByRegion(searchedCountries, option) {
  return searchedCountries.filter(country => country.region.toLowerCase().includes(option.toLowerCase()));
}

function filterByFavourites(searchedCountries, favourites) {
  return searchedCountries.filter((country) => favourites.includes(country.name.common));
}
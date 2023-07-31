import { DEFAULT_OPTION } from '../components/dropDown/DropDown';
import { getAllCountries, getCountriesByName } from '../services/countriesAPIs';

export const NO_FILTER = "No filter";
export const FAVOURITES_OPTION = "Favourites";
let selectedDropDownOption = NO_FILTER;

export const handleSearchInputChange = async (e, setCountries, setIsLoading,setSearchedCountries,favourites) => {
  let searchedCountries;
  setCountries([]);
  setIsLoading(true);
  let countryName = e.target.value;
    try {
      if (countryName !== '') {
        searchedCountries = await getCountriesByName(countryName);
      } else {
        searchedCountries = await getAllCountries();
      }
    } catch (error) {
      searchedCountries = [];
    }

    setSearchedCountries(searchedCountries)
    filterCountries(selectedDropDownOption, searchedCountries, favourites, setCountries);
    setIsLoading(false);
  };


export function handleDropDownFilter(option,searchedCountries,favourites,setCountries) {
  filterCountries(option,searchedCountries,favourites,setCountries)
  selectedDropDownOption = option;
};


function filterCountries(option, searchedCountries, favourites, setCountries) {
  let filteredCountries;
  if (option === NO_FILTER || option === DEFAULT_OPTION) {
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


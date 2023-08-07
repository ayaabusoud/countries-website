import { getAllCountries, getCountriesByName } from '../services/CountriesAPIs';

// Dropdown filter options
export const NO_FILTER = "No filter";
export const FAVOURITES_OPTION = "Favourites";
export const DEFAULT_OPTION = "Filter by"
let selectedDropDownOption = DEFAULT_OPTION;

/**
 * Handles the country search based on the provided country name.
 * 
 * @param {string} countryName - The country name to search for.
 * @returns {Array} - An array of searched countries.
 */
export async function handleCountrySearch(countryName) {
  let searchedCountries;
  try {
    if (countryName !== '') {
      searchedCountries = await getCountriesByName(countryName);
    } else {
      searchedCountries = await getAllCountries();
    }
  } catch (error) {
    searchedCountries = [];
  } finally {
    return searchedCountries;
  }
}

/**
 * Handles the dropdown filter selection and updates the displayed countries accordingly.
 * 
 * @param {string} option - The selected filter option.
 * @param {Array} searchedCountries - The list of searched countries.
 * @param {Array} favourites - The list of favourite country IDs.
 * @param {function} setCountries - The state setter for updating the displayed countries.
 * @param {boolean} isLoading - Indicates if countries is currently loading.
 */
export async function handleDropDownFilter(option, searchedCountries, favourites, setCountries, isLoading) {
  selectedDropDownOption = option;
  if (isLoading) {
    return;
  }
  filterCountries(searchedCountries, favourites, setCountries);
};

/**
 * Filters the list of searched countries based on the selected filter option.
 * 
 * @param {Array} searchedCountries - The list of searched countries.
 * @param {Array} favourites - The list of favourite country IDs.
 * @param {function} setCountries - The state setter for updating the displayed countries.
 */
export function filterCountries(searchedCountries, favourites, setCountries) {
  let filteredCountries;
  if (selectedDropDownOption === DEFAULT_OPTION) {
    filteredCountries = searchedCountries;
  } else if (selectedDropDownOption === FAVOURITES_OPTION) {
    filteredCountries = filterByFavourites(searchedCountries, favourites);
  } else {
    filteredCountries = filterByRegion(searchedCountries, selectedDropDownOption);
  }
  setCountries(filteredCountries);
}

/**
 * Filters the list of countries by region.
 * 
 * @param {Array} searchedCountries - The list of searched countries.
 * @param {string} selectedDropDownOption - The selected dropdown filter option.
 * @returns {Array} - An array of countries filtered by region.
 */
function filterByRegion(searchedCountries, selectedDropDownOption) {
  return searchedCountries.filter(country => country.region.toLowerCase().includes(selectedDropDownOption.toLowerCase()));
}

/**
 * Filters the list of countries by favourites.
 * 
 * @param {Array} searchedCountries - The list of searched countries.
 * @param {Array} favourites - The list of favourite country IDs.
 * @returns {Array} - An array of countries filtered by favourites.
 */
function filterByFavourites(searchedCountries, favourites) {
  return searchedCountries.filter((country) => favourites.includes(country.name.common));
}
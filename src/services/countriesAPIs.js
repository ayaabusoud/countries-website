import axios from "axios";

export const baseUrl = "https://restcountries.com/v3.1";
export const countryDetailsUrl = `${baseUrl}/name/`;
export const allCountriesUrl = `${baseUrl}/all`;


let currentTime;
export async function getCountriesByName(countryName) {
  let time = Date.now();
  currentTime = time;
  try {
    const response = await axios.get(countryDetailsUrl + countryName);
    if (!response) {
      throw new Error('Failed to fetch data');
    }
    if (currentTime === time) {
      let countryDetails = await response.data;
      if (!countryDetails) {
        throw new Error('No results Found');
      }
      return countryDetails;
    }
  } catch (error) {
    throw new Error(`API failed: ${error.message}`);
  }
}

export async function getAllCountries() {
  try {
    let response = await axios.get(allCountriesUrl);
    if (!response) {
      throw new Error('Failed to fetch data');
    }
    let countries = await response.data;
    if (!countries) {
      throw new Error('No countries found');
    }
    return countries;
  } catch (error) {
    throw new Error(`API failed: ${error.message}`);
  }
}
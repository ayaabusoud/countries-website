import axios from "axios";

// Base URL and endpoints for country data
export const baseUrl = "https://restcountries.com/v3.1";
export const countryDetailsUrl = `${baseUrl}/name/`;
export const allCountriesUrl = `${baseUrl}/all`;

let currentTime;

/**
 * Fetches countries with their details by name from the API.
 * 
 * @param {string} countryName - The name of the country to fetch.
 * @returns {Array} - An array of countries matching the provided name.
 * @throws {Error} - If the API request fails or no countries is found.
 */
export async function getCountriesByName(countryName) {
  let time = Date.now();
  currentTime = time;
  try {
    const response = await axios.get(countryDetailsUrl + countryName);
    if (!response) {
      throw new Error('Failed to fetch data');
    }
    if (currentTime === time) {
      let countries = await response.data;
      if (!countries) {
        throw new Error('No results Found');
      }
      return countries;
    }
  } catch (error) {
    throw new Error(`API failed: ${error.message}`);
  }
}

/**
 * Fetches all countries with their details from the API.
 * 
 * @returns {Array} - An array of all the countries.
 * @throws {Error} - If the API request fails or no countries are found.
 */
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

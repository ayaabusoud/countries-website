import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import style from './Details.module.css';
import Loader from '../../components/loader/Loader';
import { getCountriesByName } from '../../services/CountriesAPIs';
import CountryDetailsSection from '../../components/countryDetailsSection/CountryDetailsSection';

/**
* Page that displays detailed about a specific country.
*/
export default function Details() {
  const LOCATION = useLocation();
  let countryName = LOCATION.state?.id || {};
  let [country, setCountry] = useState(null);
  let [isLoading, setIsLoading] = useState(true);

  /**
  * Fetches details about a specific country by its name.
  * 
  * @param {string} countryName - The name of the country to fetch details for.
  */
  async function fetchCountry() {
    try {
      let countries = await getCountriesByName(countryName);
      if (countries) {
        setCountry(countries[0]);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCountry();
  }, []);


  return (
    <div className={`page-container d-flex flex-column position-relative ${style.detailsPage}`}>
      {isLoading ? (
        <Loader />
      ) : (
        <CountryDetailsSection country={country} />
      )}
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import {useLocation } from 'react-router-dom'
import style from './details.module.css';
import Loader from '../../components/loader/Loader';
import DetailsSection from '../../components/detailsSection/DetailsSection';
import { getCountriesByName } from '../../services/countriesAPIs';

export default function Details() {
  const LOCATION = useLocation();
  let countryName = LOCATION.state?.id || {};
  let [country, setCountry] = useState(null);
  let [isLoading, setIsLoading] = useState(true);

  async function fetchCountry() {
    try {
      let data = await getCountriesByName(countryName);
      if (data) {
        setCountry(data[0]);
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
        <DetailsSection country={country} />
      )}
    </div>
  )
}

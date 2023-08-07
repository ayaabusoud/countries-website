import React from 'react';
import style from './CountriesSection.module.css';
import CountryCard from '../countryCard/CountryCard';
import NoResults from '../noResults/NoResults';
import Loader from '../loader/Loader';
import { useCountries } from '../../context/CountriesContext';

/**
 * Component that displays a section of country cards.
 * 
 * @returns {JSX.Element} - The CountriesSection component.
 */
export default function CountriesSection() {

  let { countries, isLoading } = useCountries();

  return (

    <div className={`row ${style.countriesContainer} overflow-y-scroll position-relative`} draggable="false">
      {isLoading && <Loader />}
      {!isLoading && countries.length === 0 ? (
        <NoResults message={"No countries found"} />
      ) : (
        countries.map((country, index) => <CountryCard key={index} country={country} />)
      )}
    </div>
  );
}

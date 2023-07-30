import React from 'react';
import style from './countriesSection.module.css';
import CountryCard from '../countryCard/CountryCard';
import countries from '../../dataUtlis/countriesData.json';
import NoResults from '../noResults/NoResults';

export default function CountriesSection() {

  return (
        <div className={`row ${style.countriesContainer} overflow-y-scroll`} draggable="false" >
            {countries.length > 0 ? (
                countries.map((country,index) => <CountryCard key={index} country={country} />)
            ) : (
                <NoResults message={"No countries found"}/>
            )}
        </div>
    )
}

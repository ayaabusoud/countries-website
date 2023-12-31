import React from 'react'
import style from './CountryDetailsSection.module.css'
import BorderSection from '../borderSection/BorderSection';
import NoResults from '../noResults/NoResults';
import { isEmptyObject } from 'jquery';
import BackButton from '../backButton/BackButton';

/**
 * Component that displays detailed information about a specific country.
 * 
 * @param {Object} props.country - The country data to be displayed.
 * @returns {JSX.Element} - The CountryDetailsSection component.
 */
export default function CountryDetailsSection({ country }) {
  const NOT_AVAILABLE = 'N/A';
  let { name, population, region, subregion, capital, tld, currencies, languages, flags, borders } = country || {};

  return (
    <div>
      {isEmptyObject(country) ? (
        <NoResults message={"No details found"} />
      ) : (
        <>
          <BackButton navigateTo="/home" />

          <main className={`row pb-5 ${style.countryDetails}`}>
            <div className={`col-lg-6 col-sm-12 ${style.flagContainer}`}>
              <img src={flags?.svg} alt={name?.common} className={`${style.flagImage} object-fit-cover`} />
            </div>

            <div className="col-lg-6 col-sm-12 align-self-center">
              <h1 className={`fs-2 fw-bold mb-4 p-0 mx-0 ${style.countryName}`} >{name?.official}</h1>
              <div className={`row mx-0 ${style.detailsContainer}`} >
                <ul className={`col-md-6 col-sm-12 ${style.details} pe-lg-2`}>
                  <li className="fw-semibold py-1">Native Name: <span className="fw-light">{name?.nativeName ? Object.values(name.nativeName)[0].official : NOT_AVAILABLE}</span></li>
                  <li className="fw-semibold py-1">Population: <span className="fw-light">{population?.toLocaleString() || NOT_AVAILABLE}</span></li>
                  <li className="fw-semibold py-1">Region: <span className="fw-light">{region || NOT_AVAILABLE}</span></li>
                  <li className="fw-semibold py-1">Sub Region: <span className="fw-light">{subregion || NOT_AVAILABLE}</span></li>
                  <li className="fw-semibold py-1">Capital: <span className="fw-light">{capital || NOT_AVAILABLE}</span></li>
                </ul>
                <ul className={`col-md-6 col-sm-12 ${style.details}`}>
                  <li className="fw-semibold py-1">Top Level Domain: <span className="fw-light">{tld ? tld.join(", ") : NOT_AVAILABLE}</span></li>
                  <li className="fw-semibold py-1">Currencies: <span className="fw-light">{currencies ? Object.values(currencies).map(currency => currency.name).join(", ") : NOT_AVAILABLE}</span></li>
                  <li className="fw-semibold py-1 text-break">Languages: <span className="fw-light">{languages ? Object.values(languages).join(", ") : NOT_AVAILABLE}</span></li>
                </ul>
              </div>

              {borders &&
                <BorderSection borderCountries={borders} />}
            </div>
          </main>
        </>
      )}
    </div>

  )
}

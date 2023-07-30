import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import style from './details.module.css';
import Loader from '../../components/loader/Loader';
import BorderCard from '../../components/borderCard/BorderCard';
import { isEmptyObject } from 'jquery';
import BackButton from '../../components/backButton/BackButton';
import BorderSection from '../../components/borderSection/BorderSection';
import NoResults from '../../components/noResults/NoResults';

export default function Details() {

  const NOT_AVAILABLE = 'N/A';
  const LOCATION = useLocation();
  let { name, population, region, subregion, capital, tld, currencies, languages, flag, borders } = LOCATION.state?.details || {};

  return (
    <div className={`page-container d-flex flex-column ${style.detailsPage}`}>
       {isEmptyObject(LOCATION.state?.details) ? (
        <NoResults message={"No details found"} />
      ) : (
        <div>
      <BackButton navigateTo="/home" />
      <main className={`row pb-5  ${style.countryDetails}`}>
        <Loader />
        <div className={`col-lg-6 col-sm-12 ${style.flagContainer}`}>
          <img src={flag} alt={name?.common} className={`${style.flagImage} object-fit-cover`} />
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
          <BorderSection borderCountries={borders}/>}
        </div>
      </main>
      </div>
      )}                     
    </div>

  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import style from './countryCard.module.css'

export default function CountryCard({country}) {
    const NOT_AVAILABLE = 'N/A';
    let { name, flag, population, region, capital } = country;

  return (
      <div className="col-md-4 col-sm-12">
          <Link to='/details' state={{ details: country }} className={`card border-0 text-decoration-none ${style.countryCard} overflow-hidden position-relative`}
              country-id={name.common} draggable="true">
              <img className={`${style.flag} object-fit-cover`} src={flag} alt={name.official} loading="lazy" draggable="false" />
              <div className="px-4">
                  <p className="fw-bolder py-3 text-truncate">{name.common || NOT_AVAILABLE}</p>
                  <ul>
                      <li className="fw-semibold text-truncate">Population: <span className="fw-light">{population.toLocaleString()}</span></li>
                      <li className="fw-semibold text-truncate">Region: <span className="fw-light">{region || NOT_AVAILABLE}</span></li>
                      <li className="fw-semibold text-truncate">Capital: <span className="fw-light">{capital || NOT_AVAILABLE}</span></li>
                  </ul>
              </div>
              <i className={`fa-solid fa-star position-absolute d-md-none ${style.favouriteButton}`} />
          </Link>
      </div>
    )
}

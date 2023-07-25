import React from 'react'

export default function FavouriteItem(props) {
    let { name, flag } = props.country;

  return (
      <div className={`d-flex justify-content-between ${style.favouriteCountry} w-100 align-items-center`} country-id="${name.common}">
          <div className={`d-flex ${style.favouriteContent}`}>
              <img className={`${style.favouriteFlag} me-2`} src={flag} alt={name.common} />
              <p className={`text-truncate fw-semibold ${style.favCountryName}`}>{name.common}</p>
          </div>
          <div className={`${style.removeFavourite} d-flex justify-content-center align-items-center rounded-circle`}>
              <i className={`fa-solid fa-xmark ${style.removeIcon} fw-bold`} />
          </div>
      </div>
    )
}

import React from 'react'
import style from './favouriteItem.module.css'
import { removeFavouriteItem } from '../../controllers/favouritesControler';
import { useFavourites } from '../../context/FavouritesContext';
import { useCountries } from '../../context/CountriesContext';

export default function FavouriteItem({id}) {
    let { allCountries } = useCountries();
    let { favourites, setFavourites } = useFavourites();
    let country = allCountries.find((country) => country.name.common === id);

    if (!country) {
      return null; 
    }
    let { name, flags } = country;

  return (
      <div className={`d-flex justify-content-between ${style.favouriteCountry} w-100 align-items-center`} country-id={name?.common}>
          <div className={`d-flex ${style.favouriteContent}`}>
              <img className={`${style.favouriteFlag} me-2`} src={flags?.svg} alt={name?.common} />
              <p className={`text-truncate fw-semibold ${style.favCountryName}`}>{name?.common}</p>
          </div>
          <div className={`${style.removeFavourite} d-flex justify-content-center align-items-center rounded-circle`}
          onClick={(e)=> removeFavouriteItem(e,favourites,setFavourites)}>
              <i className={`fa-solid fa-xmark ${style.removeIcon} fw-bold`} />
          </div>
      </div>
    )
}

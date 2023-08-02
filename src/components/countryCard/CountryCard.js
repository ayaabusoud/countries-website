import React from 'react'
import { Link } from 'react-router-dom'
import style from './CountryCard.module.css'
import { endDrag, startDrag } from '../../utlis/DragDropUtlis';
import { handleFavouritesButtons } from '../../utlis/FavouritesUtlis';
import { useFavourites } from '../../context/FavouritesContext';

export const COUNTRY_ID = 'country-id';
export const ACTIVE_FAVOURITE_BUTTON = 'active-star';

export default function CountryCard(props) {
    const NOT_AVAILABLE = 'N/A';
    let { name, flags, population, region, capital } = props.country;
    const { favourites, setFavourites } = useFavourites();
    let active = favourites.includes(name.common);

    return (
        <div className="col-md-4 col-sm-12">
            <Link to='/details' state={{ id: name?.common }} className={`card border-0 text-decoration-none ${style.countryCard} overflow-hidden position-relative`}
                country-id={name?.common} draggable="true"
                onDragStart={(e) => startDrag(e, COUNTRY_ID)}
                onDragEnd={(e) => endDrag(e.currentTarget)}>
                <img className={`${style.flag} object-fit-cover`} src={flags?.svg} alt={name?.official} loading="lazy" draggable="false" />
                <div className="px-4">
                    <p className="fw-bolder py-3 text-truncate">{name.common || NOT_AVAILABLE}</p>
                    <ul>
                        <li className="fw-semibold text-truncate">Population: <span className="fw-light">{population.toLocaleString()}</span></li>
                        <li className="fw-semibold text-truncate">Region: <span className="fw-light">{region || NOT_AVAILABLE}</span></li>
                        <li className="fw-semibold text-truncate">Capital: <span className="fw-light">{capital || NOT_AVAILABLE}</span></li>
                    </ul>
                </div>
                <i className={`fa-solid fa-star position-absolute d-md-none ${style.favouriteButton} ${active ? ACTIVE_FAVOURITE_BUTTON : ''}`} onClick={(e) => handleFavouritesButtons(e, favourites, setFavourites , ACTIVE_FAVOURITE_BUTTON, COUNTRY_ID)} />
            </Link>
        </div>
    )
}

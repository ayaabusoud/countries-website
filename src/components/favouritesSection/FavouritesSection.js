import React from 'react'
import style from './favouritesSection.module.css'
import { dragEnter, dragLeave, dropElement } from '../../controllers/dragDropController'
import FavouriteItem from '../favouriteItem/FavouriteItem'
import { useFavourites } from '../../context/FavouritesContext'
import { addFavourite, isFavourite } from '../../controllers/favouritesControler'

export default function FavouritesSection({ setShowToast, setToastMessage }) {

  let { favourites, setFavourites } = useFavourites();

  function addFavouriteItem(countryId) {
    if (!isFavourite(favourites, countryId)) {
      addFavourite(favourites, setFavourites, countryId);
    } else {
      setShowToast(true);
      setToastMessage(`${countryId} is already in your favourites list!`);
    }
  }

  return (
    <div className={`${style.favouritesSection} d-none d-md-inline-block py-3 ps-3 pe-2 overflow-hidden rounded-1`}
      onDragEnter={(e) => dragEnter(e.currentTarget)}
      onDragOver={(e) => e.preventDefault()}
      onDragLeave={(e) => dragLeave(e)}
      onDrop={(e) => dropElement(e, addFavouriteItem)}>
      <h2 className="fw-semibold">Favourites</h2>
      <div className={`${style.favouritesList} overflow-y-scroll w-100`} >
        {favourites && favourites.map((favourite, index) => (<FavouriteItem key={index} id={favourite} />))}
      </div>
    </div>
  );
}
  

import React from 'react'
import style from './FavouriteCountriesSection.module.css'
import { dragEnter, dragLeave, dropElement } from '../../utlis/DragDropUtlis'
import FavouriteCountryItem from '../favouriteCountryItem/FavouriteCountryItem'
import { useFavourites } from '../../context/FavouritesContext'
import { addFavourite, isFavourite } from '../../utlis/FavouritesUtlis'

/**
 * Component that displays the list of favourite countries.
 * 
 * @param {function} props.setShowToast - A function to set the visibility of a toast notification.
 * @param {function} props.setToastMessage - A function to set the message for the toast notification.
 * @returns {JSX.Element} - The FavouriteCountriesSection component.
 */
export default function FavouriteCountriesSection({ setShowToast, setToastMessage }) {

  let { favourites, setFavourites } = useFavourites();

  /**
   * Adds a favourite country to the list or displays a toast message if it's already a favourite.
   * 
   * @param {string} countryId - The ID of the country to be added as a favourite.
   */
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
        {favourites && favourites.map((favourite, index) => (<FavouriteCountryItem key={index} id={favourite} />))}
      </div>
    </div>
  );
}
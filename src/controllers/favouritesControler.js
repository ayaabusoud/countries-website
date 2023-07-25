import { removeFavouriteFromStorage, storeFavourite } from "../dataUtlis/dataStorage";
import { COUNTRY_ID , ACTIVE_FAVOURITE_BUTTON} from '../components/countryCard/CountryCard';

export function addFavourite(favourites,setFavourites,countryId){
    storeFavourite(favourites, countryId);
    let updatedFavourites = [...favourites];
    setFavourites(updatedFavourites);
}

export function removeFavourite(favourites,setFavourites,countryId){
    setFavourites(removeFavouriteFromStorage(favourites, countryId));
}

export function isFavourite(favourites,countryId){
    let isExists = favourites.includes(countryId)
    if (isExists) {
        return true;
    }
    return false;
}

export function handleFavouritesButtons(e,favourites,setFavourites){
    e.preventDefault();
    let countryCard = e.target.parentNode;
    let countryId = countryCard.getAttribute(COUNTRY_ID);
    if (!e.target.classList.contains(ACTIVE_FAVOURITE_BUTTON)) {
        e.target.classList.add(ACTIVE_FAVOURITE_BUTTON);
        addFavourite(favourites,setFavourites,countryId);
    }else{
        e.target.classList.remove(ACTIVE_FAVOURITE_BUTTON);
        removeFavourite(favourites,setFavourites,countryId);
    }
}

export function removeFavouriteItem(e,favourites,setFavourites) {
    let countryId =e.target.parentNode.getAttribute(COUNTRY_ID);
    if(!countryId){
        countryId =e.target.parentNode.parentNode.getAttribute(COUNTRY_ID);
    }
    removeFavourite(favourites, setFavourites, countryId);   
 }
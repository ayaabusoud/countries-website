import { isFavourite } from "../controllers/favouritesControler";

const FAVOURITES_KEY = 'favourites';
const THEME_KEY = "theme";

export function getFavourites(){
    let favorites = localStorage.getItem(FAVOURITES_KEY);
    if (favorites) {
        return JSON.parse(favorites);
    } return [];
}

export function storeFavourite(favourites=[], countryId) {
    if(!isFavourite(favourites,countryId)){
        favourites.push(countryId);
        localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites));
    }
}

export function removeFavouriteFromStorage(favourites, countryId) {
    let updatedFavourites = favourites.filter(country => country != countryId);
    localStorage.setItem(FAVOURITES_KEY, JSON.stringify(updatedFavourites));
    return updatedFavourites;
}

export function storeTheme(theme){
    localStorage.setItem(THEME_KEY, theme);
}

export function getTheme(){
    return localStorage.getItem(THEME_KEY);
}
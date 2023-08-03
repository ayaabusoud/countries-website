export const FAVOURITES_KEY = 'favourites';
export const THEME_KEY = "theme";

export function storeFavourite(favourites = [], countryId) {
    favourites.push(countryId);
    localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites));
}

export function removeFavouriteFromStorage(favourites, countryId) {
    let updatedFavourites = favourites.filter(country => country != countryId);
    localStorage.setItem(FAVOURITES_KEY, JSON.stringify(updatedFavourites));
    return updatedFavourites;
}

export function storeTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
}
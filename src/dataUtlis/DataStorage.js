export const FAVOURITES_KEY = 'favourites';
export const THEME_KEY = "theme";

/**
 * Stores a new country ID in the list of favourites in local storage.
 * 
 * @param {Array} favourites - The current list of favourite country IDs.
 * @param {string} countryId - The country ID to be added to favourites.
 */
export function storeFavourite(favourites = [], countryId) {
    favourites.push(countryId);
    localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites));
}

/**
 * Removes a country ID from the list of favourites in local storage.
 * 
 * @param {Array} favourites - The current list of favourite country IDs.
 * @param {string} countryId - The country ID to be removed from favourites.
 * @returns {Array} - The updated list of favourite country IDs after removal.
 */
export function removeFavouriteFromStorage(favourites, countryId) {
    let updatedFavourites = favourites.filter(country => country !== countryId);
    localStorage.setItem(FAVOURITES_KEY, JSON.stringify(updatedFavourites));
    return updatedFavourites;
}

/**
 * Stores the selected theme in local storage.
 * 
 * @param {string} theme - The theme to be stored in local storage ('light' or 'dark').
 */
export function storeTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
}
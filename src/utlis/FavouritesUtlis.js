import { removeFavouriteFromStorage, storeFavourite } from "../dataUtlis/DataStorage";

/**
 * Adds a country ID to the list of favourites and updates the state.
 * 
 * @param {Array} favourites - The current list of favourite country IDs.
 * @param {function} setFavourites - The state setter for favourite countries.
 * @param {string} id - The ID of the country to add to favourites.
 */
export function addFavourite(favourites, setFavourites, id) {
    storeFavourite(favourites, id);
    let updatedFavourites = [...favourites];
    setFavourites(updatedFavourites);
}

/**
 * Removes a country ID from the list of favourites and updates the state.
 * 
 * @param {Array} favourites - The current list of favourite country IDs.
 * @param {function} setFavourites - The state setter for favourite countries.
 * @param {string} id - The ID of the country to remove from favourites.
 */
export function removeFavourite(favourites, setFavourites, id) {
    setFavourites(removeFavouriteFromStorage(favourites, id));
}

/**
 * Checks if a country ID is in the list of favourites.
 * 
 * @param {Array} favourites - The list of favourite country IDs.
 * @param {string} id - The ID of the country to check.
 * @returns {boolean} - Whether the country ID is in favourites.
 */
export function isFavourite(favourites, id) {
    let isExists = favourites.includes(id)
    if (isExists) {
        return true;
    }
    return false;
}

/**
 * Handles click events on favourite buttons to add or remove a country from favourites.
 * 
 * @param {Event} e - The click event.
 * @param {Array} favourites - The list of favourite country IDs.
 * @param {function} setFavourites - The state setter for favourite countries.
 * @param {string} active - The class name for the active state of the button.
 * @param {string} id - The ID attribute of the button's parent element.
 */
export function handleFavouritesButtons(e, favourites, setFavourites, active, id) {
    e.preventDefault();
    let elementId = e.target.parentNode.getAttribute(id);
    if (!e.target.classList.contains(active)) {
        addFavourite(favourites, setFavourites, elementId);
    } else {
        removeFavourite(favourites, setFavourites, elementId);
    }
    e.target.classList.toggle(active);
}

/**
 * Handles click events to remove a favourite country item from the favourites section.
 * 
 * @param {Event} e - The click event.
 * @param {Array} favourites - The list of favourite country IDs.
 * @param {function} setFavourites - The state setter for favourite countries.
 * @param {string} id - The ID attribute of the button's parent element.
 */
export function removeFavouriteItem(e, favourites, setFavourites, id) {
    let elementId = e.target.parentNode.getAttribute(id) ?? e.target.parentNode.parentNode.getAttribute(id);

    if (elementId) {
        removeFavourite(favourites, setFavourites, elementId);
    }
}

import { removeFavouriteFromStorage, storeFavourite } from "../dataUtlis/DataStorage";

export function addFavourite(favourites, setFavourites, id) {
    storeFavourite(favourites, id);
    let updatedFavourites = [...favourites];
    setFavourites(updatedFavourites);
}

export function removeFavourite(favourites, setFavourites, id) {
    setFavourites(removeFavouriteFromStorage(favourites, id));
}

export function isFavourite(favourites, id) {
    let isExists = favourites.includes(id)
    if (isExists) {
        return true;
    }
    return false;
}

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

export function removeFavouriteItem(e, favourites, setFavourites, id) {
    let elementId = e.target.parentNode.getAttribute(id) ?? e.target.parentNode.parentNode.getAttribute(id);

    if (elementId) {
        removeFavourite(favourites, setFavourites, elementId);
    }
}

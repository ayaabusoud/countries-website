import { COUNTRY_ID } from "../components/countryCard/CountryCard";

export const ELEMENT_HOVER = "hovered";

export function startDrag(e){
    e.target.style.opacity = '0.5';
    e.dataTransfer.setData(COUNTRY_ID, e.target.getAttribute(COUNTRY_ID));
}

export function endDrag(element){
    element.style.opacity = '1';
}

export function dragEnter(element){
    element.classList.add(ELEMENT_HOVER);
}

export function dragLeave(e){
    const children = Array.from(e.currentTarget.children);
    let isLeaving = children.includes(e.target);

    if (isLeaving) {
      e.currentTarget.classList.remove(ELEMENT_HOVER);
    }
}

export function dropElement(e,addFavouriteItem) {
    e.currentTarget.classList.remove(ELEMENT_HOVER);
    e.preventDefault();
    const droppedElement = e.dataTransfer.getData(COUNTRY_ID);
    addFavouriteItem(droppedElement);
}

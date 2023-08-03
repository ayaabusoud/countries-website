import React, { useEffect, useState } from 'react'
import style from './DropDown.module.css'
import { useCountries } from '../../context/CountriesContext';
import { useFavourites } from '../../context/FavouritesContext';
import { DEFAULT_OPTION, NO_FILTER, handleDropDownFilter } from '../../utlis/FlterUtlis';

export default function DropDown({ options }) {
    let [selectedOption, setSelectedOption] = useState(DEFAULT_OPTION);
    let { setCountries, searchedCountries, isLoading } = useCountries();
    let { favourites } = useFavourites();

    function handleOptionSelect(option) {
        if (option === NO_FILTER) {
            option = DEFAULT_OPTION;
        }
        setSelectedOption(option);
        handleDropDownFilter(option, searchedCountries, favourites, setCountries, isLoading);
    };


    let listItems = options.map((option, index) =>
        <li key={index} className={`dropdown-item ${style.menuItem}`} onClick={() => handleOptionSelect(option)}>{option}</li>);

    return (
        <form className={`dropdown ${style.filterDropdown}`}>
            <button className={`rounded-1 px-3 d-flex justify-content-between align-items-center border-0 ${style.filter}`}
                type="button" data-bs-toggle="dropdown" aria-expanded="false">{selectedOption}<i className="fa-solid fa-angle-down"></i></button>
            <ul className={` ${style.filterMenu} dropdown-menu border-0 overflow-hidden`}>{listItems}</ul>
        </form>
    )
}

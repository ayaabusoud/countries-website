import React from 'react'
import Searchbar from '../searchbar/Searchbar'
import DropDown from '../dropDown/DropDown'
import style from './filterSection.module.css'
import { FAVOURITES_OPTION, NO_FILTER } from '../../controllers/filterController';

export default function FilterSection() {
    let dropDownOptions = [NO_FILTER, FAVOURITES_OPTION, "Africa" , "Americas", "Asia","Europe","Oceania"];

    return (
        <section className={`page-container py-md-5 d-md-flex justify-content-between ${style.filterSection}`}>
            <Searchbar placeholder="Search for a country..." name="search-country" />
            <DropDown options={dropDownOptions} />
        </section>
    )
}

import React from 'react'
import Searchbar from '../../components/searchbar/Searchbar'
import DropDown from '../../components/dropDown/DropDown'
import Favourites from '../../components/favouritesSection/Favourites';
import CountryCard from '../../components/countryCard/CountryCard';
import countries from '../../dataUtlis/countriesData.json';
import Loader from '../../components/loader/Loader';
import style from './home.module.css'

export default function Home() {
    let dropDownOptions = ["No filter", "Favourites", "Africa" , "Americas", "Asia","Europe","Oceania"];

    return (
        <div>
            <section className={`page-container py-md-5 d-md-flex justify-content-between ${style.filterSection}`}>
                <Searchbar placeholder="Search for a country..." name="search-country" />
                <DropDown options={dropDownOptions} />
            </section>

            <main className={`page-container position-relative ${style.homeMain}`}>
                <div className={`d-md-flex ${style.mainContent}`}>
                    <Favourites />
                    <div className="position-relative w-100">
                        <Loader />
                        <div className={`row ${style.countriesContainer} overflow-y-scroll`} draggable="false" >
                            {countries.map((country) => (<CountryCard key={country.name.common} country={country} />))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

import React, { useState } from 'react'
import FavouritesSection from '../../components/favouritesSection/FavouritesSection';
import style from './home.module.css'
import FilterSection from '../../components/filterSection/FilterSection';
import CountriesSection from '../../components/countriesSection/CountriesSection';
import ToastNotification from '../../components/toastNotification/ToastNotification'
import { FavouritesProvider } from '../../context/FavouritesContext';
import { CountriesProvider } from '../../context/CountriesContext';

export let allCountries;

export default function Home() {
    let [showToast, setShowToast] = useState(false);
    let [toastMessage, setToastMessage] = useState('');

    return (
        <FavouritesProvider>
            <CountriesProvider>
                <FilterSection />
                <main className={`page-container position-relative ${style.homeMain}`}>
                    <div className={`d-md-flex ${style.mainContent}`}>
                        <FavouritesSection setShowToast={setShowToast} setToastMessage={setToastMessage} />
                        <CountriesSection />
                    </div>
                    {showToast && <ToastNotification message={toastMessage} setShowToast={setShowToast} />}
                </main>
            </CountriesProvider>
        </FavouritesProvider>
    )
}
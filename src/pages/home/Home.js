import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import FilterSection from '../../components/filterSection/FilterSection';
import CountriesSection from '../../components/countriesSection/CountriesSection';
import { FavouritesProvider } from '../../context/FavouritesContext';
import { CountriesProvider } from '../../context/CountriesContext';
import FavouriteCountriesSection from '../../components/favouriteCountriesSection/FavouriteCountriesSection';
import { BOTTOM_POSITION, notifyError } from '../../utlis/ToastUtlis';

/**
 * Home page displaying all countries along with search and filter functionality.
 */
export default function Home() {
    let [showToast, setShowToast] = useState(false);
    let [toastMessage, setToastMessage] = useState('');

    // Show toast error notification when showToast is true
    useEffect(() => {
        if (showToast) {
            notifyError(toastMessage, BOTTOM_POSITION);
            setShowToast(false);
        }
    }, [showToast]);

    return (
        <FavouritesProvider>
            <CountriesProvider>
                <FilterSection />
                <main className={`page-container position-relative ${style.homeMain}`}>
                    <div className={`d-md-flex ${style.mainContent}`}>
                        <FavouriteCountriesSection setShowToast={setShowToast} setToastMessage={setToastMessage} />
                        <CountriesSection />
                    </div>
                </main>
            </CountriesProvider>
        </FavouritesProvider>
    )
}
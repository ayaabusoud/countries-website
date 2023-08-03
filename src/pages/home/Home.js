import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import FilterSection from '../../components/filterSection/FilterSection';
import CountriesSection from '../../components/countriesSection/CountriesSection';
import { FavouritesProvider } from '../../context/FavouritesContext';
import { CountriesProvider } from '../../context/CountriesContext';
import FavouriteCountriesSection from '../../components/favouriteCountriesSection/FavouriteCountriesSection';
import { ToastContainer } from 'react-toastify';
import { notify } from '../../utlis/ToastUtlis';
export let allCountries;

export default function Home() {
    let [showToast, setShowToast] = useState(false);
    let [toastMessage, setToastMessage] = useState('');
    let toastPosition = "bottom-left";
    
    useEffect(() => {
        if (showToast) {
            notify(toastMessage, toastPosition);
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
                <ToastContainer
                    position={toastPosition}
                    autoClose={30000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover />
            </CountriesProvider>
        </FavouritesProvider>
    )
}
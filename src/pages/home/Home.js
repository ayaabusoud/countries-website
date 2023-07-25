import React, { useState } from 'react'
import FavouritesSection from '../../components/favouritesSection/FavouritesSection';
import Loader from '../../components/loader/Loader';
import style from './home.module.css'
import FilterSection from '../../components/filterSection/FilterSection';
import CountriesSection from '../../components/countriesSection/CountriesSection';
import ToastNotification from '../../components/toastNotification/ToastNotification'
import { FavouritesProvider } from '../../controllers/FavouritesContext';

export default function Home() {
    let [showToast, setShowToast] = useState(false); 
    let [toastMessage, setToastMessage] = useState(''); 

    return (
        <FavouritesProvider>
            <FilterSection />
            <main className={`page-container position-relative ${style.homeMain}`}>
                <div className={`d-md-flex ${style.mainContent}`}>
                    <FavouritesSection setShowToast={setShowToast} setToastMessage={setToastMessage} />
                    <div className="position-relative w-100">
                        <Loader />
                        <CountriesSection />
                    </div>
                </div>
                {showToast && <ToastNotification message={toastMessage} setShowToast={setShowToast} />}
            </main>
        </FavouritesProvider>
    )
}
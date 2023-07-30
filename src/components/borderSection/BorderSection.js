import React from 'react'
import style from './borderSection.module.css'
import BorderCard from '../borderCard/BorderCard'

export default function BorderSection({borderCountries}) {
    return (
        <div className={`${style.bordersContainer} d-lg-flex`}>
            <p className={` ${style.borderCountriesTitle} fw-semibold pe-2 pb-2`}>Border Countries: </p>
            <div className={`d-flex flex-wrap ${style.borderCountries}`}>
                {borderCountries.map((border) => (<BorderCard key={border} countryName={border} />))}
            </div>
        </div>
    )
}

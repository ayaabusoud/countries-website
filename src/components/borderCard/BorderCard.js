import React from 'react'
import style from './border.module.css'

export default function BorderCard({countryName}) {

    return (
        <p className={`me-2 mb-2 ${style.borderCountry} text-center`}>{countryName}</p>
    )
}

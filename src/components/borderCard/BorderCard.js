import React from 'react'
import style from './BorderCard.module.css'

/**
 * Component that displays a border country name within a border card.
 * 
 * @param {string} props.countryName - The name of the border country to be displayed.
 * @returns {JSX.Element} - The BorderCard component.
 */
export default function BorderCard({ countryName }) {

    return (
        <p className={`me-2 mb-2 ${style.borderCountry} text-center`}>{countryName}</p>
    )
}

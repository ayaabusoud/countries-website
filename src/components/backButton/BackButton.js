import React from 'react'
import style from './BackButton.module.css'
import { Link } from 'react-router-dom';

/**
 * Component that renders a back button as a link to navigate to a specified location.
 * 
 * @param {string} props.navigateTo - The URL or route to navigate to when the button is clicked.
 * @returns {JSX.Element} - The BackButton component.
 */
export default function BackButton({ navigateTo }) {
    return (
        <Link className={`text-decoration-none ${style.backButton} border-0 d-flex justify-content-center align-items-center`}
            to={navigateTo}><i className="fa-solid fa-arrow-left-long pe-2" /> Back</Link>
    )
}

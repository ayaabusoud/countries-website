import React from 'react'
import style from './BackButton.module.css'
import { Link } from 'react-router-dom';

export default function BackButton({ navigateTo }) {
    return (
        <Link className={`text-decoration-none ${style.backButton} border-0 d-flex justify-content-center align-items-center`}
            to={navigateTo}><i className="fa-solid fa-arrow-left-long pe-2" /> Back</Link>
    )
}

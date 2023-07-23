import React from 'react'
import style from './searchbar.module.css'

export default function Searchbar(props) {

    const { placeholder, name } = props;

    return (
        <form className={`rounded-1 ${style.searchbar} d-flex pe-1`} role="search">
            <i className="fas fa-search fa-md align-self-center px-4 text-secondary" />
            <input className={`${style.searchbarInput} w-100 border-0`} name={name} type="search"
                placeholder={placeholder} aria-label="Search" />
        </form>
    )
}

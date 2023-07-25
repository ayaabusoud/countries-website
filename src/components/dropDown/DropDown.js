import React, { useEffect } from 'react'
import style from './dropDown.module.css'

export default function DropDown({options}) {

    let listItems = options.map((option, index) =>
    <li key={index} className={`dropdown-item ${style.menuItem}`}>{option}</li>
    );

  return (
      <form className={`dropdown ${style.filterDropdown}`}>
          <button className={`rounded-1 px-3 d-flex justify-content-between align-items-center border-0 ${style.filter}`}
              type="button" data-bs-toggle="dropdown" aria-expanded="false">Filter by<i className="fa-solid fa-angle-down"></i></button>
          <ul className={` ${style.filterMenu} dropdown-menu border-0 overflow-hidden`}>{listItems}</ul>
      </form>
  )
}

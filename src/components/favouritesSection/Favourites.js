import React from 'react'
import style from './favourites.module.css'

export default function Favourites() {
  return (
      <div className={`${style.favouritesSection} d-none d-md-inline-block py-3 ps-3 pe-2 overflow-hidden rounded-1`}>
          <h2 className="fw-semibold">Favourites</h2>
          <div className={` ${style.favouritesList} overflow-y-scroll w-100`} />
      </div>
)
}

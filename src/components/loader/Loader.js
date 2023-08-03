import React from 'react'
import style from './Loader.module.css'

/**
 * Component for displaying a loader.
 * 
 * @returns {JSX.Element} - The Loader component.
 */
export default function Loader() {
  return (
    <div className={`d-flex justify-content-center align-items-center ${style.loader} position-absolute start-50 top-50 `} />
  )
}

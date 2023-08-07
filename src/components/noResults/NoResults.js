import React from 'react'
import style from './NoResults.module.css';

/**
 * Component to display a message and image when no results are found.
 * 
 * @param {string} message - The message to be displayed.
 * @returns {JSX.Element} - The component displaying the no results message.
 */
export default function NoResults({ message }) {

  return (
    <div className={`d-flex justify-content-center align-items-center flex-column text-center position-absolute top-50 start-50 ${style.container}`}>
      <img src='./images/noResults.png' className={`${style.notFoundImg}`} alt='Not found' />
      <p className={` fs-4 ${style.message}`}>{message}</p>
    </div>
  )
}

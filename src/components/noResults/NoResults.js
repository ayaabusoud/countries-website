import React from 'react'
import style from './NoResults.module.css';

export default function NoResults({ message }) {

  return (
    <div className={`d-flex justify-content-center align-items-center flex-column text-center position-absolute top-50 start-50 ${style.container}`}>
      <img src='/images/noResults.png' className={`${style.notFoundImg}`} />
      <p className={` fs-4 ${style.message}`}>{message}</p>
    </div>
  )
}

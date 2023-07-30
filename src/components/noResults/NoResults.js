import React, { useEffect } from 'react'
import style from './noResults.module.css';

export default function NoResults({message}) {

  return (
    <div className={`d-flex justify-content-center align-items-center flex-column text-center ${style.container}`}>
        <img src='/images/noResults.png' className={`${style.notFoundImg}`}/>
        <p className={` fs-4 ${style.message}`}>{message}</p>
    </div>
  )
}

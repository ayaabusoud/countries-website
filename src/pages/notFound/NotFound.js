import React from 'react'
import style from './notFound.module.css'

export default function NotFound() {
  return (
    <div className={`d-flex flex-column justify-content-center align-items-center ${style.notFoundPage}`}>
        <img className={`pb-1 ${style.notFoundImg}`} src='images/404.png' alt='404'/>
        <h1 className='fw-semibold'>Page Not Found</h1>
        <p>Sorry, we couldn't find the page you're looking for...</p>
    </div>
  )
}

import React from 'react'
import style from './NotFound.module.css'

/**
 * A page for displaying a "Page Not Found" message.
 * This component is rendered when a user tries to access a route that doesn't exist.
 */
export default function NotFound() {
  return (
    <div className={`d-flex flex-column justify-content-center align-items-center text-center ${style.notFoundPage}`}>
      <img className={`pb-1 me-3 ${style.notFoundImg}`} src='./images/noResults.png' alt='404' />
      <h1 className={`fw-semibold ${style.title}`}>Page Not Found</h1>
      <p className={` ${style.text}`}>Sorry, we couldn't find the page you're looking for...</p>
    </div>
  )
}

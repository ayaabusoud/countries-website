import React from 'react'
import style from './loader.module.css'

export default function Loader() {
  return (
      <div className={`d-flex justify-content-center align-items-center ${style.loader} position-absolute start-50 invisible`} />
  )
}

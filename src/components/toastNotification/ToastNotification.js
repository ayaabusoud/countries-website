import React from 'react'
import { Toast } from 'react-bootstrap'
import style from './toastNotification.module.css'

export default function ToastNotification({message , setShowToast}) {

  return (
    <div>
      <Toast className={`position-absolute bottom-0 text-center ${style.notification}`}
        onClose={()=> setShowToast(false) }
        autohide
        show={true}
        delay={2000} >
        <Toast.Body >{message}</Toast.Body>
      </Toast>
    </div>
  )
}
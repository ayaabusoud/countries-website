import React from 'react'
import style from './toastNotification.module.css'

export default function ToastNotification({message}) {
  return (
    <div className=" toast-container position-fixed bottom-0 start-0 p-3 ">
      <div id="liveToast" className={` ${style.notification} toast text-center`} role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-body" >{message}</div>
      </div>
    </div>
 )
}

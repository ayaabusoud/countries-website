import { toast } from "react-toastify";

export let notify = (message,toastPosition) => {
    toast.error(message, {
        position:toastPosition,     
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: 'toast-notification',
    });
};
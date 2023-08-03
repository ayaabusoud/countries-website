import { toast } from "react-toastify";

export const BOTTOM_POSITION = "bottom-left";

/**
 * Displays an error toast notification.
 * 
 * @param {string} message - The error message to display in the toast.
 * @param {string} toastPosition - The position of the toast notification (e.g., "bottom-left").
 */
export let notifyError = (message,toastPosition) => {
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
import { storeTheme } from "../dataUtlis/DataStorage";

export const LIGHT_MODE = 'light';
export const DARK_MODE = 'dark'

/**
 * Sets the theme for the entire application.
 * 
 * @param {string} theme - The theme to apply ('light' or 'dark').
 */
export function setTheme(theme) {
    if (!theme) {
        console.warn("current theme is undefined");
        return;
    }
    document.documentElement.setAttribute('data-theme', theme);
    storeTheme(theme);
}

/**
 * Toggles between light and dark modes.
 * 
 * @param {string} currentTheme - The current theme ('light' or 'dark').
 * @returns {string} - The newly set theme after toggling.
 */
export function changeTheme(currentTheme) {
    let theme = DARK_MODE;
    if (currentTheme === DARK_MODE) {
        theme = LIGHT_MODE;
    }
    setTheme(theme);
    return theme;
}
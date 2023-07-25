import { storeTheme } from "../dataUtlis/dataStorage";

export const LIGHT_MODE = 'light';
export const DARK_MODE = 'dark'

export function setTheme(theme){
    if(!theme){
        theme = LIGHT_MODE;
    }
    document.documentElement.setAttribute('data-theme', theme);
    storeTheme(theme);
}

export function changeTheme(currentTheme){
    let theme = DARK_MODE;
    if(currentTheme === DARK_MODE){
        theme = LIGHT_MODE;
    }
    setTheme(theme);
    return theme;
}


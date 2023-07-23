const THEME_KEY = "theme";

export function storeTheme(theme){
    localStorage.setItem(THEME_KEY, theme);
}

export function getTheme(){
    return localStorage.getItem(THEME_KEY);
}
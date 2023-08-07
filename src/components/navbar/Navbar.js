import React, { useState } from 'react'
import style from './Navbar.module.css'
import { LIGHT_MODE, changeTheme, setTheme } from '../../utlis/ThemeUtlis';
import { THEME_KEY } from '../../dataUtlis/DataStorage';

/**
 * Component representing the navbar containing a theme toggle button.
 * 
 * @returns {JSX.Element} - The Navbar component.
 */
export default function Navbar() {
  let [currentTheme, setCurrentTheme] = useState(null);

  //Toggles between light and dark modes.
  function themeChanger() {
    setCurrentTheme(changeTheme(currentTheme));
  }

  // Initialize the theme.
  useState(() => {
    let theme = localStorage.getItem(THEME_KEY);
    if (!theme) {
      theme = LIGHT_MODE;
    }
    setTheme(theme);
    setCurrentTheme(theme)
  }, [])

  return (
    <nav className={`${style.nav} navbar`}>
      <h1 className={`fw-bolder ${style.navTitle}`}>Where in the world?</h1>
      <p className={`fw-semibold ${style.themeToggle}`} onClick={themeChanger}>
        {currentTheme === LIGHT_MODE ? (
          <><i className="fa-regular fa-moon pe-1"></i> Dark Mode</>
        ) : (
          <><i className="fa-solid fa-moon pe-1"></i> Light Mode</>
        )}
      </p>
    </nav>
  );
}

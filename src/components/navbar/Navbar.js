import React, { useState } from 'react'
import style from './navbar.module.css'
import { DARK_MODE, LIGHT_MODE, changeTheme } from '../../controllers/themeController';

export default function Navbar({theme}) {
    let [currentTheme, setCurrentTheme] = useState(theme); 

    function themeChanger(){
        setCurrentTheme(changeTheme(currentTheme));
    }

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


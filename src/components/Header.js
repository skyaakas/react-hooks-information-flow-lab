import React from 'react';

function Header({isDarkMode, OnDarkModeClick}){
    return(
        <header>
        <h2>Shopster</h2>
        <button onClick={OnDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}


export default Header;
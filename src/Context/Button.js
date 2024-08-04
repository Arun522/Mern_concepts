// Button.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function Button() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      style={{ background: theme === 'dark' ? 'black' : 'white', 
      color: theme === 'dark' ? 'white' : 'black' }}
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
}

export default Button;

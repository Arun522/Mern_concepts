// Button.js
import React from 'react';

function Button({ theme, toggleTheme }) {
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

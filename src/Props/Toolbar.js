// Toolbar.js
import React from 'react';
import Button from './Button';

function Toolbar({ theme, toggleTheme }) {
  return (
    <div>
      <Button theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default Toolbar;

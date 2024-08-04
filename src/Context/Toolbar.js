// Toolbar.js
import React from 'react';
import ThemeContext from './ThemeContext';
import Button from './Button';

function Toolbar() {
  // Consume the context value using the useContext hook
  //const { theme } = React.useContext(ThemeContext);

  return (
    <div>
      <Button />
    </div>
  );
}

export default Toolbar;

// App.js
import React, { useState } from 'react';
import Toolbar from './Toolbar';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <Toolbar theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;

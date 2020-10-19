import React from 'react';
import { ThemeContextProvider } from './themeStore';
// view
import { Weather } from './view/Weather';

function App() {
  return (
    <ThemeContextProvider>
      <Weather />
    </ThemeContextProvider>
  );
}

export default App;

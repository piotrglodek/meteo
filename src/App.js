import React from 'react';
// Theme
import { ThemeProvider } from './ThemeProvider';
// Store
import { StoreContextProvider } from './store';
// View
import { Weather } from './view/Weather';

function App() {
  return (
    <StoreContextProvider>
      <ThemeProvider>
        <Weather />
      </ThemeProvider>
    </StoreContextProvider>
  );
}

export default App;

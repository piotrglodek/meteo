import React, { useState, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { themes, GlobalStyles } from './theme';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>
    setTheme(prevState => (prevState === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

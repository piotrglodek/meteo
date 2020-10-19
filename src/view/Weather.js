import React, { useContext } from 'react';
import { ThemeContext } from '../themeStore';

export const Weather = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      {theme} <button onClick={toggleTheme}>onclick</button>
    </>
  );
};

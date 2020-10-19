import React from 'react';
import { ThemeProvider } from 'styled-components';
// theme, GlobalStyles
import { theme, GlobalStyles } from './theme';
// router
import { BrowserRouter as Router } from 'react-router-dom';

export const Providers = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </Router>
  );
};

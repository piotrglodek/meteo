import React from 'react';
import { ThemeProvider } from 'styled-components';
// theme, GlobalStyles
import { theme, GlobalStyles } from './theme';

export const Providers = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

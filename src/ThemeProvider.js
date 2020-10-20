import React, { useContext } from 'react';
// Styled-components theme provider
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
// themes GlobalStyles
import { themes, GlobalStyles } from './theme';
// Store
import { StoreContext } from './store';

export const ThemeProvider = ({ children }) => {
  const [store] = useContext(StoreContext);
  return (
    <StyledThemeProvider theme={themes[store.theme]}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};

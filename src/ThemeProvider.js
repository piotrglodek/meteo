import React, { useContext } from 'react';
// Styled-components theme provider
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
// themes GlobalStyles
import { theme, dark, light, GlobalStyles } from './theme';
// store
import { StoreContext } from './store';

export const ThemeProvider = ({ children }) => {
  const [state] = useContext(StoreContext);
  const { darkTheme } = state;
  const selectTheme = darkTheme
    ? Object.assign(dark, theme)
    : Object.assign(light, theme);

  return (
    <StyledThemeProvider theme={selectTheme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};

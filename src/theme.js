import { createGlobalStyle } from 'styled-components';

export const theme = {
  dark: {
    primary: '#808080',
    secondary: '#fffafa',
    gray: '#7C7C7C',
  },
  light: {
    primary: '#F7E842',
    secondary: '#4E4E4E',
    gray: '#7C7C7C',
  },
  fontSize: {
    xll: '8rem',
    xl: '2.8rem',
    l: '2.2rem',
    m: '1.8rem',
    s: '1.4rem',
    xs: '1.2rem',
    xss: '1rem',
  },
  fontWeight: {
    regular: '400',
    medium: '600',
    bold: '800',
  },
};

export const GlobalStyles = createGlobalStyle`
  html {
    /* 1rem = 10px */
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    font-family: 'Open Sans', sans-serif;
  }
`;

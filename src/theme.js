import { createGlobalStyle } from 'styled-components';

// fix theme repeat fontSize, fontWeight
export const themes = {
  dark: {
    color: {
      primary: '#fffafa',
      secondary: '#4e4e4e',
      gray: 'rgba(255,255,255,0.72)',
      accent: '#808080',
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
  },
  light: {
    color: {
      primary: '#4e4e4e',
      secondary: '#fffafa',
      gray: '#7c7c7c',
      accent: '#F7E842',
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
  },
};

export const GlobalStyles = createGlobalStyle`
  *,*::after,*::before{
    box-sizing:border-box;
  }

  html {
    /* 1rem = 10px */
    font-size: 62.5%;
  }
  body {
    margin:0;
    font-size: 1.6rem;
    font-family: 'Open Sans', sans-serif;
    transition: color .3s ease, background-color .3s ease, fill .3s ease;
  }
`;

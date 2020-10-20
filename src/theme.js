import { createGlobalStyle } from 'styled-components';

// FIXME: theme repeat fontSize, fontWeight
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
      gray: '#6c6c6c',
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

  .darkIcon .accent {
    fill: #808080;
  }

  .darkIcon .primary {
    fill: #fffafa;
  }

  .lightIcon .accent {
    fill: #f7e842;
  }

  .lightIcon .primary {
    fill: #4e4e4e;
  }

  .react-toggle-thumb {
    border: none;
    background-color: #4e4e4e;
  }
  .light .react-toggle-track {
    background-color: #7c7c7c;
  }
  .dark .react-toggle-track {
    background-color: rgba(255, 255, 255, 0.72);
  }

  .react-toggle--checked:hover .react-toggle-track {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .react-toggle:hover .react-toggle-track {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

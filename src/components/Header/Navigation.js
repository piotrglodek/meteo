import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// theme context
import { ThemeContext } from '../../themeStore';
// react toggle
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import './toggle.css';

const Emoji = ({ emoji, label }) => {
  return (
    <StyledIcon role='img' aria-label={label}>
      {emoji}
    </StyledIcon>
  );
};

export const Navigation = ({ isOpen, toggleMenu }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      {isOpen && <StyledOverlay onClick={toggleMenu} isOpen={isOpen} />}
      <StyledNav isOpen={isOpen}>
        <StyledNavItem>
          <StyledLabel htmlFor='themeSwitch'>
            <StyledText>Theme</StyledText>
            <Toggle
              id='themeSwitch'
              defaultChecked={theme === 'light' ? false : true}
              className={theme === 'light' ? 'light' : 'dark'}
              icons={{
                checked: <Emoji emoji='🌜' label='light theme' />,
                unchecked: <Emoji emoji='🌞' label='dark theme' />,
              }}
              onChange={toggleTheme}
            />
          </StyledLabel>
        </StyledNavItem>
      </StyledNav>
    </>
  );
};

const StyledNav = styled.nav`
  position: fixed;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  top: 0;
  width: max-content;
  padding: 5rem 2.8rem 1.8rem 1.6rem;
  min-width: max-content;
  max-width: 65vw;
  height: 100vh;
  z-index: 999;
  transition: left 0.3s ease;
  background-color: ${({ theme: { color } }) => color.secondary};
`;

const StyledOverlay = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: opacity 0.3s ease;
`;

const StyledNavItem = styled.div`
  margin-bottom: 1rem;
`;

const StyledText = styled.p`
  margin: 0;
  margin-right: 2rem;
  font-size: ${({ theme: { fontSize } }) => fontSize.xs};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
  color: ${({ theme: { color } }) => color.primary};
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled.span`
  align-items: center;
  display: flex;
  height: 10px;
  justify-content: center;
  position: relative;
  width: 10px;
`;

Navigation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

StyledNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

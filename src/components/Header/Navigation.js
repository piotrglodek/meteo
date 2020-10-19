import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import { ThemeContext } from '../../themeStore';

export const Navigation = ({ isOpen, toggleMenu }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // TODO: StyledIcon attribiutes
  return (
    <>
      {isOpen && <StyledOverlay onClick={toggleMenu} isOpen={isOpen} />}
      <StyledNav isOpen={isOpen}>
        <StyledNavItem>
          <StyledLabel htmlFor='themeSwitch'>
            <StyledText>Theme</StyledText>
            <Toggle
              id='themeSwitch'
              defaultChecked={theme === 'light' ? true : false}
              icons={{
                checked: (
                  <StyledIcon role='img' aria-label='light theme'>
                    🌞
                  </StyledIcon>
                ),
                unchecked: (
                  <StyledIcon role='img' aria-label='dark theme'>
                    🌜
                  </StyledIcon>
                ),
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
  padding: 3rem 1rem 1rem;
  background-color: #fff;
  min-width: 65vw;
  height: 100vh;
  z-index: 999;
  transition: left 0.3s ease;
`;

const StyledOverlay = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: opacity 0.3s ease;
`;

const StyledNavItem = styled.div`
  margin-bottom: 1rem;
`;

const StyledText = styled.p`
  margin: 0;
  font-size: ${({ theme: { fontSize } }) => fontSize.xs};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

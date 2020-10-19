import React from 'react';
import styled from 'styled-components';
// components
import { Hamburger } from './Hamburger';
import { Navigation } from './Navigation';
import { Location } from './Location';
// hook
import { useMenu } from '../../hooks/useMenu';

export const Header = () => {
  const [isOpen, openMenu, closeMenu] = useMenu();
  return (
    <StyledHeader>
      <Hamburger toggleMenu={openMenu} />
      <Navigation toggleMenu={closeMenu} isOpen={isOpen} />
      <Location />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100vw;
  padding: 3rem 1.8rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

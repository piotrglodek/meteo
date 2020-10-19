import React from 'react';
import styled from 'styled-components';
// components
import { Hamburger } from './Hamburger';
import { Navigation } from './Navigation';
// hook
import { useMenu } from '../../hooks/useMenu';

export const Header = () => {
  const [isOpen, toggleMenu] = useMenu();
  return (
    <StyledHeader>
      <Hamburger toggleMenu={toggleMenu} />
      <Navigation toggleMenu={toggleMenu} isOpen={isOpen} />
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

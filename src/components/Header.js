import React from 'react';
import styled from 'styled-components';
// Hook
import { useMenu } from '../hooks/useMenu';
// components
import { Hamburger } from './Hamburger';
import { Nav } from './Nav';
import { SearchBar } from './SearchBar';

export const Header = () => {
  const [isOpen, openMenu, closeMenu] = useMenu();
  return (
    <StyledHeader>
      <Hamburger openMenu={openMenu} />
      <Nav isOpen={isOpen} closeMenu={closeMenu} />
      <SearchBar />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 2rem 1.8rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

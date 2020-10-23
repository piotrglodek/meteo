import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// Icon
import { ReactComponent as MenuSvg } from '../../static/icons/menu.svg';

export const Hamburger = ({ openMenu }) => {
  return (
    <StyledButton title='open menu' aria-label='open menu' onClick={openMenu}>
      <StyledMenuIcon />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: none;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  display: grid;
  place-items: center;
  width: 3.4rem;
  height: 3.4rem;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: ${({ theme: { color } }) => color.accent};
  }
`;

const StyledMenuIcon = styled(MenuSvg)`
  fill: ${({ theme: { color } }) => color.primary};
`;

// Proptypes
Hamburger.propTypes = {
  openMenu: PropTypes.func.isRequired,
};

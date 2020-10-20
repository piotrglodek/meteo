import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// icon
import { ReactComponent as MenuSvg } from '../../static/icons/menu.svg';

export const Hamburger = ({ toggleMenu }) => {
  return (
    <StyledButton onClick={toggleMenu}>
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
  width: 2.8rem;
  height: 2.8rem;
  cursor: pointer;
`;

const StyledMenuIcon = styled(MenuSvg)`
  fill: ${({ theme: { color } }) => color.primary};
`;

Hamburger.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

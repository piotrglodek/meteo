import React from 'react';
import styled from 'styled-components';
// icon
import { ReactComponent as LocationSvg } from '../../static/icons/location.svg';

export const Location = () => {
  return (
    <StyledContainer>
      <StyledLocationIcon />
      <StyledHeading>Warsaw</StyledHeading>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;
const StyledLocationIcon = styled(LocationSvg)`
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 0.5rem;

  & :nth-child(1) {
    stroke: ${({ theme: { color } }) => color.primary};
  }
`;
const StyledHeading = styled.h1`
  color: ${({ theme: { color } }) => color.primary};
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  margin: 0;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
`;

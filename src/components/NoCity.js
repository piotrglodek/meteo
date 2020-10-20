import React from 'react';
import styled from 'styled-components';
// icon
import citySvg from '../static/icons/city.svg';

export const NoCity = () => {
  return (
    <StyledContainer>
      <StyledCityIcon src={citySvg} alt='City' />
      <StyledText>City not found, try again.</StyledText>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
`;

const StyledCityIcon = styled.img`
  width: 60%;
  height: 22rem;
  display: block;
`;

const StyledText = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  color: ${({ theme: { color } }) => color.primary};
`;

import React from 'react';
import styled from 'styled-components';
// Components
import { WeatherWidget, Header } from '../components';

export const Weather = () => {
  return (
    <StyledView>
      <StyledContainer>
        <Header />
        <WeatherWidget />
      </StyledContainer>
    </StyledView>
  );
};

const StyledView = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme: { color } }) => color.secondary};
`;

const StyledContainer = styled.div`
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;
`;

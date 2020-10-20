import React from 'react';
import styled from 'styled-components';
// Components
import { WeatherWidget, Header } from '../components';

export const Weather = () => {
  return (
    <StyledView>
      <Header />
      <WeatherWidget />
    </StyledView>
  );
};

const StyledView = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme: { color } }) => color.secondary};
`;

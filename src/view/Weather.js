import React from 'react';
import styled from 'styled-components';
// components
import { Header, Main } from '../components';

export const Weather = () => {
  return (
    <StyledView>
      <Header />
      <Main />
    </StyledView>
  );
};

const StyledView = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme: { color } }) => color.secondary};
`;

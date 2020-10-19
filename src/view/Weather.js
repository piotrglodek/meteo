import React, { useContext } from 'react';
import styled from 'styled-components';
// components
import { Header } from '../components';

export const Weather = () => {
  return (
    <StyledView>
      <Header />
    </StyledView>
  );
};

const StyledView = styled.div`
  width: 100vw;
  height: 100vh;
`;

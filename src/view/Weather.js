import React, { useContext } from 'react';
import styled from 'styled-components';
// Api
import { useQuery } from 'react-query';
import { fetchWeather } from '../api/fetchWeather';
// Store
import { StoreContext } from '../store';
// Components
import {
  WeatherNoCity,
  WeatherSkelet,
  WeatherWidget,
  Header,
} from '../components';

export const Weather = () => {
  const [state] = useContext(StoreContext);
  const { isLoading, data } = useQuery(state.city, fetchWeather);
  return (
    <StyledView>
      <StyledContainer>
        <Header />
        <StyledMain>
          {isLoading ? (
            <WeatherSkelet />
          ) : data.cod === '200' ? (
            <WeatherWidget weather={data} />
          ) : (
            <WeatherNoCity />
          )}
        </StyledMain>
      </StyledContainer>
    </StyledView>
  );
};

const StyledView = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme: { color } }) => color.secondary};
`;

const StyledContainer = styled.div`
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;
`;

const StyledMain = styled.main`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  margin-top: 2rem;
`;

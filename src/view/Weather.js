import React, { useContext } from 'react';
import styled from 'styled-components';
// Components
import { WeatherWidget, Header } from '../components';
// Api
import { useQuery } from 'react-query';
import { fetchWeather } from '../api/fetchWeather';
// Store
import { StoreContext } from '../store';
// Loading skelet
import { WidgetSkelet, NoCity } from '../components';

export const Weather = () => {
  const [state] = useContext(StoreContext);
  const { isLoading, data } = useQuery(state.city, fetchWeather);
  return (
    <StyledView>
      <StyledContainer>
        <Header />
        <StyledMain>
          {isLoading ? (
            <WidgetSkelet />
          ) : data.cod === '200' ? (
            <WeatherWidget weather={data} />
          ) : (
            <NoCity />
          )}
        </StyledMain>
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

const StyledMain = styled.main`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  margin-top: 2rem;
`;

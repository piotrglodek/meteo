import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
// Icon
import { ReactComponent as WindSvg } from '../static/icons/wind.svg';
import { ReactComponent as Clear } from '../static/weather/clear.svg';
import { ReactComponent as Clouds } from '../static/weather/clouds.svg';
import { ReactComponent as Mist } from '../static/weather/mist.svg';
import { ReactComponent as Rain } from '../static/weather/rain.svg';
import { ReactComponent as Snow } from '../static/weather/snow.svg';
import { ReactComponent as Thunder } from '../static/weather/thunderstorm.svg';
// Store
import { StoreContext } from '../store';
// Loading skelet
import { WidgetSkelet } from './WidgetSkelet';
// Api
import { useQuery } from 'react-query';
import { fetchCurrentWeather } from '../api/fetchCurrentWeather';
// Component
import { NoCity } from './NoCity';

const shared = css`
  width: 100%;
  height: 100%;
`;
const StyledClearIcon = styled(Clear)`
  ${shared}
`;
const StyledCloudsIcon = styled(Clouds)`
  ${shared}
`;
const StyledMistIcon = styled(Mist)`
  ${shared}
`;
const StyledRainIcon = styled(Rain)`
  ${shared}
`;
const StyledSnowIcon = styled(Snow)`
  ${shared}
`;
const StyledThunderIcon = styled(Thunder)`
  ${shared}
`;

const WeatherIcon = ({ name }) => {
  const [state] = useContext(StoreContext);
  const { theme } = state;

  const getWeatherIcon = name => {
    let key = name.toLowerCase();
    switch (key) {
      case 'clear':
        return (
          <StyledClearIcon
            className={theme === 'light' ? 'lightIcon' : 'darkIcon'}
          />
        );
      case 'clouds':
        return (
          <StyledCloudsIcon
            className={theme === 'light' ? 'lightIcon' : 'darkIcon'}
          />
        );
      case 'mist':
      case 'smoke':
      case 'haze':
      case 'dust':
      case 'fog':
      case 'sand':
      case 'ash':
      case 'squall':
      case 'tornado':
        return (
          <StyledMistIcon
            className={theme === 'light' ? 'lightIcon' : 'darkIcon'}
          />
        );
      case 'snow':
        return (
          <StyledSnowIcon
            className={theme === 'light' ? 'lightIcon' : 'darkIcon'}
          />
        );
      case 'rain':
      case 'drizzle':
        return (
          <StyledRainIcon
            className={theme === 'light' ? 'lightIcon' : 'darkIcon'}
          />
        );
      case 'thunderstorm':
        return (
          <StyledThunderIcon
            className={theme === 'light' ? 'lightIcon' : 'darkIcon'}
          />
        );
      default:
        return null;
    }
  };
  return getWeatherIcon(name);
};

export const WeatherWidget = () => {
  const [state] = useContext(StoreContext);
  const { isLoading, data } = useQuery(state.city, fetchCurrentWeather);
  const roundNumber = number => Math.round(number);

  return (
    <StyledMain>
      {isLoading ? (
        <WidgetSkelet />
      ) : data.cod === 200 ? (
        <>
          <StyledImageCol>
            <WeatherIcon name={data.weather[0].main} />
          </StyledImageCol>
          <StyledWidgetCol>
            <StyledH1>{data.name}</StyledH1>
            <StyledH2>{roundNumber(data.main.temp)}</StyledH2>
            <StyledSubtitle>{data.weather[0].main}</StyledSubtitle>
            <StyledWrapper>
              <StyledWindIcon />
              <StyledText>Wind</StyledText>
              <StyledSubtext>{roundNumber(data.wind.speed)}m/s</StyledSubtext>
            </StyledWrapper>
          </StyledWidgetCol>
        </>
      ) : (
        <NoCity />
      )}
    </StyledMain>
  );
};

// Shared styles
const margin = css`
  margin: 0;
`;

const lineHeight = css`
  line-height: 1;
`;

const flex = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const mediumWeight = css`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
`;

const primaryColor = css`
  color: ${({ theme: { color } }) => color.primary};
`;

const grayColor = css`
  color: ${({ theme: { color } }) => color.gray};
`;

//

const StyledMain = styled.main`
  width: 100%;
  display: flex;
`;
const StyledImageCol = styled.div`
  flex: 2;
  display: grid;
  place-items: center;
`;
const StyledWidgetCol = styled.div`
  ${flex}
  flex: 1;
  padding: 0 1.8rem;
`;
const StyledH1 = styled.h1`
  ${primaryColor}
  ${margin}
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  text-align: right;
`;
const StyledH2 = styled.h2`
  ${margin}
  ${lineHeight}
  ${mediumWeight}
  ${primaryColor}

  font-size: ${({ theme: { fontSize } }) => fontSize.xll};
  padding-right: 2rem;
  position: relative;
  &::after,
  ::before {
    position: absolute;
    color: inherit;
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
    line-height: 1;
    @media screen and (max-width: 450px) {
      font-size: ${({ theme: { fontSize } }) => fontSize.s};
    }
  }

  &::after {
    top: 0;
    right: 0;
    content: 'o';
  }

  &::before {
    bottom: 0;
    right: 0;
    content: 'C';
  }

  @media screen and (max-width: 450px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  }
`;
const StyledSubtitle = styled.p`
  ${margin}
  ${lineHeight}
  ${grayColor}
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  margin-bottom: 4rem;
  @media screen and (max-width: 450px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.m};
  }
`;
const StyledWrapper = styled.div`
  margin-bottom: 2.5rem;
  ${flex}
`;
const StyledWindIcon = styled(WindSvg)`
  height: 1.8rem;

  & path {
    fill: ${({ theme: { color } }) => color.primary};
  }
`;
const StyledText = styled.p`
  ${margin}
  ${lineHeight}
  ${mediumWeight}
  ${grayColor}

  margin-top: .8rem;
  font-size: ${({ theme: { fontSize } }) => fontSize.xs};
`;
const StyledSubtext = styled.p`
  ${margin}
  ${lineHeight}
  ${primaryColor}
  ${mediumWeight}
  font-size: ${({ theme: { fontSize } }) => fontSize.m};
`;

// Proptypes
WeatherIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

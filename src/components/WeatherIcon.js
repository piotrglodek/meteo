import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
// Icons
import { ReactComponent as Clear } from '../static/weather/clear.svg';
import { ReactComponent as Clouds } from '../static/weather/clouds.svg';
import { ReactComponent as Mist } from '../static/weather/mist.svg';
import { ReactComponent as Rain } from '../static/weather/rain.svg';
import { ReactComponent as Snow } from '../static/weather/snow.svg';
import { ReactComponent as Thunder } from '../static/weather/thunderstorm.svg';
// Store
import { StoreContext } from '../store';

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

export const WeatherIcon = ({ name }) => {
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

// Proptypes
WeatherIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

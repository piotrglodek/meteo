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
// Hook
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
  const { darkTheme } = state;

  const getWeatherIcon = name => {
    let key = name.toLowerCase();
    switch (key) {
      case 'clear':
        return (
          <StyledClearIcon className={darkTheme ? 'darkIcon' : 'lightIcon'} />
        );
      case 'clouds':
        return (
          <StyledCloudsIcon className={darkTheme ? 'darkIcon' : 'lightIcon'} />
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
          <StyledMistIcon className={darkTheme ? 'darkIcon' : 'lightIcon'} />
        );
      case 'snow':
        return (
          <StyledSnowIcon className={darkTheme ? 'darkIcon' : 'lightIcon'} />
        );
      case 'rain':
      case 'drizzle':
        return (
          <StyledRainIcon className={darkTheme ? 'darkIcon' : 'lightIcon'} />
        );
      case 'thunderstorm':
        return (
          <StyledThunderIcon className={darkTheme ? 'darkIcon' : 'lightIcon'} />
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

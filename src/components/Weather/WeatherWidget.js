import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
// Icons
import { ReactComponent as WindSvg } from '../../static/icons/wind.svg';
import { ReactComponent as SunSvg } from '../../static/icons/sun.svg';
// Components
import { WeatherIcon } from './WeatherIcon';
import { WeatherMore } from './WeatherMore';
// Hook
import { useWeatherId } from '../../hooks/useWeatherId';
// Helpers
import { roundNumber } from '../../helpers';

export const WeatherWidget = ({ weather }) => {
  // Destructuring weather data
  // name: city name
  // country: country code
  // list: array of object containg info about weather
  const {
    city: { name: cityName, country: countryCode },
    list,
  } = weather;
  // Add id for every list item
  list.forEach((item, i) => {
    item.id = i;
  });
  // Depending on id show data
  const [id, changeId] = useWeatherId();
  // Data
  // weather data item
  const item = list.find(item => item.id === id);
  const name = item.weather[0].main;
  const description = item.weather[0].description;
  const temp = roundNumber(item.main.temp);
  const wind = roundNumber(item.wind.speed);
  return (
    <>
      <StyledImageCol>
        <WeatherIcon name={name} />
      </StyledImageCol>
      <StyledWidgetCol>
        <StyledH1>{cityName}</StyledH1>
        <StyledCountryImg
          alt={`${countryCode} country code flag`}
          src={`https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png`}
        />
        <StyledH2>{temp}</StyledH2>
        <StyledSubtitle>{name}</StyledSubtitle>
        <StyledWrapper>
          <StyledSunIcon />
          <StyledText>About weather</StyledText>
          <StyledSubtext>{description}</StyledSubtext>
        </StyledWrapper>
        <StyledWrapper>
          <StyledWindIcon />
          <StyledText>Wind</StyledText>
          <StyledSubtext>{wind}m/s</StyledSubtext>
        </StyledWrapper>
      </StyledWidgetCol>

      <WeatherMore list={list} id={id} changeId={changeId} />
    </>
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

const alignTextRight = css`
  text-align: right;
`;

//

const StyledImageCol = styled.div`
  flex: 2;
  display: grid;
  place-items: center;
  padding-right: 1rem;
  padding-left: 1.8rem;
  @media screen and (min-width: 450px) {
    flex: 1;
  }
`;
const StyledWidgetCol = styled.div`
  ${flex}
  flex: 1;
  padding-right: 1.8rem;
  padding-left: 1rem;
`;
const StyledH1 = styled.h1`
  ${primaryColor}
  ${margin}
  ${alignTextRight}
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
`;

const StyledCountryImg = styled.img`
  display: block;
  margin: 0.5rem 0;
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
const StyledSunIcon = styled(SunSvg)`
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
  margin-bottom: 0.4rem;
  font-size: ${({ theme: { fontSize } }) => fontSize.xs};
`;
const StyledSubtext = styled.p`
  ${margin}
  ${lineHeight}
  ${primaryColor}
  ${mediumWeight}
  ${alignTextRight}
  font-size: ${({ theme: { fontSize } }) => fontSize.m};
`;

WeatherWidget.propTypes = {
  weather: PropTypes.object.isRequired,
};

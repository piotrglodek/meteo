import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
// Icons
import { ReactComponent as WindSvg } from '../static/icons/wind.svg';
import { ReactComponent as SunSvg } from '../static/icons/sun.svg';
// component
import { WeatherIcon } from './WeatherIcon';
// hook
import { useWeatherIndex } from '../hooks/useWeatherIndex';

export const WeatherWidget = ({ weather }) => {
  const {
    city: { name, country },
    list,
  } = weather;

  // Active weather data
  const [weatherIndex, changeWeatherIndex] = useWeatherIndex();
  // Data
  const roundNumber = number => Math.round(number);
  const weatherName = list[weatherIndex].weather[0].main;
  const weatherDescription = list[weatherIndex].weather[0].description;
  const temp = roundNumber(list[weatherIndex].main.temp);
  const wind = roundNumber(list[weatherIndex].wind.speed);
  return (
    <>
      <StyledImageCol>
        <WeatherIcon name={weatherName} />
      </StyledImageCol>
      <StyledWidgetCol>
        <StyledH1>{name}</StyledH1>
        <StyledCountryImg
          src={`https://www.countryflags.io/${country}/flat/16.png`}
        />
        <StyledH2>{temp}</StyledH2>
        <StyledSubtitle>{weatherName}</StyledSubtitle>
        <StyledWrapper>
          <StyledSunIcon />
          <StyledText>About weather</StyledText>
          <StyledSubtext>{weatherDescription}</StyledSubtext>
        </StyledWrapper>
        <StyledWrapper>
          <StyledWindIcon />
          <StyledText>Wind</StyledText>
          <StyledSubtext>{wind}m/s</StyledSubtext>
        </StyledWrapper>
      </StyledWidgetCol>
      <StyledMore>
        <StyledMoreScroll>
          {list.map((item, index) => {
            const { weather, dt_txt } = item;
            const name = weather[0].main;
            const returnZeroBefore = hour => {
              return hour < 10 ? `0${hour}` : hour;
            };
            const hour =
              index === 0
                ? 'Now'
                : returnZeroBefore(new Date(dt_txt).getHours());
            return (
              <StyledMoreButton
                key={index}
                onClick={() => changeWeatherIndex(index)}
                isActive={weatherIndex === index && true}
              >
                <StyledMoreTitle>{hour}</StyledMoreTitle>
                <StyledMoreImage>
                  <WeatherIcon name={name} />
                </StyledMoreImage>
              </StyledMoreButton>
            );
          })}
        </StyledMoreScroll>
      </StyledMore>
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

const StyledMore = styled.footer`
  width: 100%;
  padding: 0 1.8rem;
  margin: 4.5rem 0;
`;

const StyledMoreScroll = styled.div`
  display: flex;
  overflow-x: hidden;
  padding-bottom: 1rem;

  &:hover {
    overflow-x: auto;
  }

  @media screen and (min-width: 450px) {
    justify-content: center;
  }
`;

const StyledMoreButton = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: 0.8rem;
  margin: 0;
  flex: 0 0 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 2;

  &::after {
    content: '';
    transition: opacity 0.3s ease;
    border-radius: 0.4rem;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${({ theme: { color } }) => color.gray};
    opacity: ${({ isActive }) => (isActive ? '0.2' : '0')};
    z-index: -1;
  }
`;

const StyledMoreTitle = styled.p`
  ${margin}
  ${lineHeight}
  ${primaryColor}
  ${mediumWeight}
  margin-bottom:1.2rem;
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
`;

const StyledMoreImage = styled.div`
  height: 2.4rem;
`;

WeatherWidget.propTypes = {
  weather: PropTypes.object.isRequired,
};

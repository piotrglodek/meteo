import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// Component
import { WeatherIcon } from './WeatherIcon';
// Helper
import { returnZeroBefore, dayOfMonth, dayName } from '../../helpers';

export const WeatherMore = ({ list, id, changeId }) => {
  const weatherRows = [];
  const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
  // Loop i= number of days to show weather, because of open weather api limit only to 1-5 days
  for (let i = 0; i < 5; i++) {
    // next day
    yesterday.setDate(yesterday.getDate() + 1);
    // render more weather
    weatherRows.push(
      <StyledWeatherRow key={i}>
        <StyledWeatherDay>
          {/* show name of the week */}
          {dayName(yesterday)}
        </StyledWeatherDay>
        <StyledWeatherWrapper>
          {list
            .filter(item => {
              // Filter though list to find weather infos about specific day
              const itemDay = dayOfMonth(new Date(item.dt_txt));
              return itemDay === dayOfMonth(yesterday);
            })
            .map(item => {
              const name = item.weather[0].main;
              const hour =
                item.id === 0
                  ? 'Now'
                  : returnZeroBefore(new Date(item.dt_txt).getHours());

              return (
                <StyledMoreButton
                  key={item.id}
                  isActive={id === item.id}
                  onClick={() => changeId(item.id)}
                >
                  <StyledMoreTitle>{hour}</StyledMoreTitle>
                  <StyledMoreImage>
                    <WeatherIcon name={name} />
                  </StyledMoreImage>
                </StyledMoreButton>
              );
            })}
        </StyledWeatherWrapper>
      </StyledWeatherRow>
    );
  }

  return (
    <StyledMore>
      <StyledMoreScroll>{weatherRows}</StyledMoreScroll>
    </StyledMore>
  );
};

const StyledMore = styled.footer`
  width: 100%;
  padding: 4rem 1.8rem 7rem;
`;

const StyledMoreScroll = styled.div`
  display: flex;
  padding-bottom: 1.4rem;
  overflow-x: auto;
`;

const StyledWeatherRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.6rem;
`;
const StyledWeatherDay = styled.p`
  margin: 0;
  margin-bottom: 0.5rem;
  color: ${({ theme: { color } }) => color.primary};
  font-size: ${({ theme: { fontSize } }) => fontSize.xs};
`;
const StyledWeatherWrapper = styled.div`
  display: flex;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

const StyledMoreButton = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: 0.8rem;
  margin: 0;
  cursor: pointer;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 6rem;

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
  margin: 0;
  color: ${({ theme: { color } }) => color.primary};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
  text-align: center;
  width: 100%;
  margin-bottom: 1.2rem;
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
`;

const StyledMoreImage = styled.div`
  width: 100%;
  height: 3.6rem;
`;

WeatherMore.propTypes = {
  list: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  changeId: PropTypes.func.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

export const WeatherSkelet = () => {
  return (
    <>
      <StyledImageCol>
        <StyledSkelet w='145px' h='145px' circle={true} />
      </StyledImageCol>
      <StyledWidgetCol>
        <StyledSkelet w='120px' h='36px' round={2} />
        <StyledSkelet w='100px' h='70px' round={2} />
        <StyledSkelet w='60px' h='18px' round={2} />
        <StyledWrapper>
          <StyledSkelet w='30px' h='18px' round={2} />
          <StyledSkelet w='80px' h='12px' round={2} />
          <StyledSkelet w='120px' h='18px' round={2} />
          <StyledSkelet w='30px' h='18px' round={2} />
          <StyledSkelet w='80px' h='12px' round={2} />
          <StyledSkelet w='120px' h='18px' round={2} />
        </StyledWrapper>
      </StyledWidgetCol>
      <StyledMore>
        <StyledSkelet w='100%' h='160px' round={4} />
      </StyledMore>
    </>
  );
};

// Props
// w (width)- number with unit
// h (height)- number with unit
// circle- bool true/false
// round- number

const load = keyframes`
    from {
        opacity:1;
    }
    50%{
        opacity:0.4;
    }
    to{
        opacity:1;
    }
}
`;

const StyledSkelet = styled.div`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  background-color: ${({ theme: { color } }) => color.gray};
  animation: ${load} 1.5s ease-in-out infinite;
  margin-bottom: 0.8rem;
  ${({ round }) =>
    round &&
    `
        border-radius:${round}px;
  `}
  ${({ circle }) =>
    circle &&
    `
        border-radius:50%;
    `}
`;

const StyledImageCol = styled.div`
  flex: 2;
  display: grid;
  place-items: center;
`;
const flex = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const StyledWidgetCol = styled.div`
  ${flex}
  flex: 1;
  padding: 0 1.8rem;
`;
const StyledWrapper = styled.div`
  margin-bottom: 2.5rem;
  ${flex}
`;

const StyledMore = styled.div`
  width: 100%;
  padding: 3rem 1.8rem;
`;

StyledSkelet.propTypes = {
  w: PropTypes.string.isRequired,
  h: PropTypes.string.isRequired,
  round: PropTypes.number,
  circle: PropTypes.bool,
};

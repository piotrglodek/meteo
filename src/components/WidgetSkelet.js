import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { ReactComponent as WindSvg } from '../static/icons/wind.svg';

export const WidgetSkelet = () => {
  return (
    <>
      <StyledImageCol>
        <StyledSkeletet w='145px' h='145px' circle={true} />
      </StyledImageCol>
      <StyledWidgetCol>
        <StyledSkeletet w='120px' h='36px' round={2} />
        <StyledSkeletet w='100px' h='70px' round={2} />
        <StyledSkeletet w='60px' h='18px' round={2} />
        <StyledWrapper>
          <StyledWindIcon />
          <StyledText>Wind</StyledText>
          <StyledSkeletet w='20px' h='16px' round={2} />
        </StyledWrapper>
      </StyledWidgetCol>
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

const StyledSkeletet = styled.div`
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
const StyledWindIcon = styled(WindSvg)`
  height: 1.8rem;

  & path {
    fill: ${({ theme: { color } }) => color.primary};
  }
`;
const StyledText = styled.p`
  margin: 0;
  line-height: 1;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
  color: ${({ theme: { color } }) => color.gray};
  margin-top: 0.8rem;
  font-size: ${({ theme: { fontSize } }) => fontSize.xs};
`;

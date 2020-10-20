import React from 'react';
import styled, { css } from 'styled-components';
// icons
import { ReactComponent as WindSvg } from '../../static/icons/wind.svg';

export const Main = () => {
  return (
    <StyledMain>
      <StyledImageContiner>{/* FIXME: Image */}</StyledImageContiner>
      <StyledContainer>
        <StyledDate>20.10.2020</StyledDate>
        <StyledHeading>30</StyledHeading>
        <StyledSubtitle isBig>sunny</StyledSubtitle>
        <StyledDetails>
          <StyledWindIcon />
          <StyledDetailText>Wind</StyledDetailText>
          <StyledDetailSubtext>1m/s</StyledDetailSubtext>
        </StyledDetails>
      </StyledContainer>
    </StyledMain>
  );
};

// Shared styles
const defaultMargin = css`
  margin: 0;
`;

const defaultLineHeight = css`
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

const StyledContainer = styled.div`
  flex: 1;
  padding: 0 1.8rem;
  ${flex}
`;

const StyledImageContiner = styled.div`
  flex: 2;
  overflow: hidden;
`;

const StyledHeading = styled.h2`
  ${defaultMargin}
  ${defaultLineHeight}
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
`;

const StyledSubtitle = styled.p`
  ${defaultMargin}
  ${defaultLineHeight}
  font-size: ${({ isBig, theme: { fontSize } }) =>
    isBig ? fontSize.l : fontSize.xs};
  ${grayColor}
  margin-bottom: 4rem;
`;

const StyledDetails = styled.div`
  margin-bottom: 2.5rem;
  ${flex}
`;

const StyledDetailText = styled.p`
  ${defaultMargin}
  ${defaultLineHeight}
  ${mediumWeight}
  
  margin-top: .8rem;
  font-size: ${({ theme: { fontSize } }) => fontSize.xs};
  ${grayColor}
`;

const StyledDetailSubtext = styled.p`
  ${defaultMargin}
  ${defaultLineHeight}
  ${primaryColor}
  ${mediumWeight}
  font-size: ${({ theme: { fontSize } }) => fontSize.m};
`;

const StyledWindIcon = styled(WindSvg)`
  height: 1.8rem;

  & path {
    fill: ${({ theme: { color } }) => color.primary};
  }
`;

const StyledDate = styled.time`
  font-size: ${({ theme: { fontSize } }) => fontSize.xss};
  ${grayColor}
  ${mediumWeight}
`;

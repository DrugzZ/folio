import React from "react";
import styled from "styled-components";
import posed from "react-pose";
import { media, colors } from "../../utility/utility.js";

const Animated = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
};

const Footer = styled(posed.div(Animated))`
  align-items: flex-end;
  display: flex;
  grid-column: span 12;
  justify-content: space-between;
  padding-bottom: 2rem;
  width: calc(100% - 2 * 8vw);
  margin: 0 8vw;
  ${media.phone`
  display:none`};
`;

const DecorText = styled(posed.p(Animated))`
  position: relative;
  &:before {
    content: "";
    width: 5rem;
    border-bottom: solid 2px ${colors.orange};
    position: absolute;
    left: 21rem;
    top: 50%;
  }
  ${media.tablet`
    visibility: hidden;
  `};
`;

const Pagination = styled(posed.div(Animated))`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  position: relative;
  > div {
    height: 100%;
    margin: auto;
    border-top: 2px solid ${colors.orange};
    transform: rotate(-75deg);
    transform-origin: center;
    width: 3rem;
  }
`;

const CurrentPosition = styled.p`
  > :last-child {
    font-size: 2rem;
  }
`;

const TotalCount = styled.p`
  > :last-child {
    font-size: 2rem;
  }
`;

export default ({ isVisible, currentSlide, totalSlides, location }) => (
  <Footer>
    <DecorText pose={isVisible ? "visible" : "hidden"}>
      Useless line enhancing visual appeal.
    </DecorText>
    <Pagination pose={isVisible && location === "/" ? "visible" : "hidden"}>
      <CurrentPosition>
        <span>0</span>
        <span>{currentSlide + 1}</span>
      </CurrentPosition>
      <div />
      <TotalCount>
        <span>0</span>
        <span>{totalSlides}</span>
      </TotalCount>
    </Pagination>
  </Footer>
);

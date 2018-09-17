import React from "react";
import styled from "styled-components";
import posed from "react-pose";
import { colors } from "./utility/utility.js";

const Animated = posed.div({
  hidden: {
    opacity: 0,
    x: props => (props.moving ? -50 : "")
  },
  visible: {
    opacity: 1,
    x: props => (props.moving ? 0 : ""),
    delay: props => (props.parent ? 100 : ""),
    delayChildren: props => (props.parent ? 300 : "")
  }
});

const Footer = styled(Animated)`
  align-items: flex-end;
  display: flex;
  grid-column: span 12;
  justify-content: space-between;
  padding-bottom: 2rem;
  width: calc(100% - 2 * 8vw);
  margin: 0 8vw;
`;

const DecorText = styled.p`
  position: relative;
  &:before {
    content: "";
    width: 5rem;
    border-bottom: solid 2px ${colors.orange};
    position: absolute;
    left: 12rem;
    top: 50%;
  }
`;

const Pagination = styled.div`
  display: flex;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  position: relative;
  > span {
    border-bottom: 2px solid ${colors.orange};
    left: 1.8rem;
    position: absolute;
    transform: rotate(-75deg) translateX(-1.2rem);
    width: 3rem;
  }
`;

const CurrentPosition = styled.p`
  > :last-child {
    font-size: 2rem;
  }
  position: relative;
`;

const TotalCount = styled.p`
  margin-left: 1.5rem;
  > :last-child {
    font-size: 2rem;
  }
`;

export default ({ isVisible, currentSlide, totalSlides }) => (
  <Footer pose={isVisible ? "visible" : "hidden"}>
    <DecorText>Performance in mind.</DecorText>
    <Pagination>
      <CurrentPosition>
        <span>0</span>
        <span>{currentSlide + 1}</span>
      </CurrentPosition>
      <span />
      <TotalCount>
        <span>0</span>
        <span>{totalSlides}</span>
      </TotalCount>
    </Pagination>
  </Footer>
);

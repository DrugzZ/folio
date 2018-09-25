import React from "react";
import { media, colors } from "./utility/utility.js";
import ArrowSVG from "./assets/img/baseline-chevron_right-24px.svg";
import styled from "styled-components";
import posed from "react-pose";

const phone = window.matchMedia("(max-width: 567px)").matches;

const AnimatedBlock = {
  enter: {
    x: 0,
    y: 0,
    opacity: 1,
    delay: 700
  },
  exit: {
    x: phone ? 0 : -100,
    y: phone ? 50 : 0,
    opacity: 0,
    delay: 300
  }
};

const AnimatedImage = {
  enter: {
    x: 0,
    opacity: 1,
    delay: 1000
  },
  exit: {
    x: -50,
    opacity: 0
  }
};

const ColorBlock = styled(posed.div(AnimatedBlock))`
  background-color: ${colors.darkPurple};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  height: 100%;
  max-height: 65vh;
  ${media.phone`
    margin-bottom: 1rem;
    margin-left: 5vw;
    width: 80%;
  `};
`;

const ProjectsNav = styled.div`
  align-self: flex-end;
  right: 0;
  display: flex;
  position: absolute;
  background-color: ${colors.white};
`;

const Arrow = styled.div`
  transform: ${props => (props.left ? "rotate(180deg)" : "")};
  width: 4rem;
  height: 4rem;
  background: center / 50% no-repeat url(${ArrowSVG});
  &:hover {
    background-color: ${colors.grey};
  }
`;

const ImageContainer = styled(posed.div(AnimatedImage))`
  display: flex;
  align-items: center;
`;

const ImageBg = styled.figure`
  transform: translateX(-5vw);
  background: ${colors.orange};
  padding: 2rem;
  margin: 0;
  ${media.phone`
    padding: 1rem;
    margin: 2rem 0;
  `};
`;

const HeroImage = styled.img`
  max-height: 40vh;
  max-width: 28vw;
  ${media.phone`
    max-width: 60vw;
    max-height: 30vh;
  `};
`;

export default ({ image, handlePrev, handleNext, mobile }) => (
  <ColorBlock key="Block">
    <ImageContainer key="Image">
      <ImageBg>
        <HeroImage src={image} alt="fancy" />
      </ImageBg>
    </ImageContainer>
    {mobile ? null : (
      <ProjectsNav>
        <Arrow left onClick={handlePrev} />
        <Arrow onClick={handleNext} />
      </ProjectsNav>
    )}
  </ColorBlock>
);

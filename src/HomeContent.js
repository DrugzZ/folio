import React from "react";
import { media, colors } from "./utility/utility.js";
import ArrowSVG from "./assets/img/baseline-chevron_right-24px.svg";
import styled from "styled-components";
import posed from "react-pose";

const AnimatedBlock = {
  enter: {
    x: 0,
    opacity: 1,
    delay: 700
  },
  exit: {
    x: -100,
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

const AnimatedText = {
  enter: { y: 0, opacity: 1, delay: 1200 },
  exit: { y: 50, opacity: 0, delay: 600 }
};

const HomeContent = styled(posed.div())`
  align-items: center;
  position: relative
  display: flex;
  justify-content: space-between;
  width: calc(100% - 2 * 8vw);
  margin: 0 8vw
  height: 100%;
`;

const ColorBlock = styled(posed.div(AnimatedBlock))`
  background-color: ${colors.darkPurple};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  min-width: 40%;
  height: 100%;
  ${media.phone`
      display: none;
  `};
`;

const ProjectsNav = styled.div`
  align-self: flex-end;
  display: flex;
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

const HeroTextContainer = styled(posed.div(AnimatedText))`
  z-index: 2;
  ${media.phone`
      margin:0;
      top:0;
  `} > p {
    letter-spacing: 0.1rem;
  }
`;

const HeroText = styled.h1`
  line-height: 1.5;
  white-space: nowrap;
`;

const ImageContainer = styled(posed.div(AnimatedImage))`
  height: 80%;
  margin-left: -30%;
  ${media.phone`
    width: auto;
    margin:0;
`};
`;
const HeroImage = styled.img``;

export default ({ isVisible, slide }) => {
  return (
    <HomeContent>
      <HeroTextContainer key="Text">
        <HeroText>
          {slide.text}
          <br />
          {slide.text2}
        </HeroText>
        <p>{slide.helper}</p>
      </HeroTextContainer>
      <ColorBlock key="Block">
        <ImageContainer key="Image">
          <HeroImage src={slide.image} alt="fancy" />
        </ImageContainer>
        <ProjectsNav>
          <Arrow left />
          <Arrow />
        </ProjectsNav>
      </ColorBlock>
    </HomeContent>
  );
};

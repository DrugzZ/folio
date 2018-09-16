import React from "react";
import { media, colors } from "./utility/utility.js";
import mainImg from "./assets/img/header_main_img.jpg";
import ArrowSVG from "./assets/img/baseline-chevron_right-24px.svg";
import styled from "styled-components";
import posed from "react-pose";

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

const AnimatedText = posed.div({
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    delay: 500,
    staggerChildren: 50
  }
});

const HomeContent = styled.div`
  align-items: center;
  position: relative
  display: flex;
  justify-content: space-between;
  width: calc(100% - 2 * 8vw);
  margin: 0 8vw
  height: 100%;
`;

const ColorBlock = styled(Animated)`
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

const HeroTextContainer = styled(AnimatedText)`
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

const ImageContainer = styled(Animated)`
  height: 80%;
  margin-left: -30%;
  ${media.phone`
    width: auto;
    margin:0;
`};
`;
const HeroImage = styled.img``;

export default ({ isVisible }) => (
  <HomeContent>
    <HeroTextContainer pose={isVisible ? "visible" : "hidden"}>
      <HeroText>
        a Collection <br /> of works
      </HeroText>
      <p>(Very original, modern, professional)</p>
    </HeroTextContainer>
    <ColorBlock parent moving pose={isVisible ? "visible" : "hidden"}>
      <ImageContainer moving pose={isVisible ? "visible" : "hidden"}>
        <HeroImage src={mainImg} alt="fancy" />
      </ImageContainer>
      <ProjectsNav>
        <Arrow left />
        <Arrow />
      </ProjectsNav>
    </ColorBlock>
  </HomeContent>
);

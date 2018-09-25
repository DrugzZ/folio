import React from "react";
import { media, colors } from "./utility/utility.js";
import ArrowSVG from "./assets/img/baseline-chevron_right-24px.svg";
import checkSign from "./assets/img/baseline-check_circle-24px.svg";
import styled from "styled-components";
import posed from "react-pose";

const phone = window.matchMedia("(max-width: 567px)").matches;
let vh = window.innerHeight * 0.01;

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

const AnimatedText = {
  enter: { y: 0, opacity: 1, delay: 1200 },
  exit: { y: 50, opacity: 0, delay: 600 }
};

const HomeWrap = styled.div`
  align-items: center;
  display: ${props => (props.screen ? "flex" : "none")}
  justify-content: space-between;
  height: 100%;
  ${media.phone`
    display: ${props => (props.mobile ? "flex" : "none")}
    
    > ul {
      display: flex;
      flex-direction: column;
    }
    > ul > li {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 1rem;
      justify-content: space-around;
      min-height: 100vh;
      min-height: calc(${100 * vh + "px"} - 7rem)
    }
  `};
`;

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

const DescriptionContainer = styled(posed.div(AnimatedText))`
  display: flex;
  flex-direction: column;
  z-index: 2;
  max-width: calc(50% - 5vw);
  max-height: 100%;
  ${media.phone`
    width:100%;
    max-width: 100%;
    align-items: center;
`};
`;

const Title = styled.h1`
  line-height: 1.5;
  margin-bottom: 2rem;
  ${media.phone`
    margin-bottom: 1rem;
    text-align: center;
`};
`;

const Description = styled.div``;

const HelperText = styled(posed.p())`
  padding-left: ${props => (props.left ? "1rem" : "")};
  line-height: 2;
  letter-spacing: 0.1rem;
  margin-bottom: 1rem;
`;

const LeadText = styled.p`
  line-height: 2;
  font-weight: bold;
  letter-spacing: 0.1rem;
`;

const Details = styled(posed.ul())`
  display: grid;
  grid-template-rows: 4rem 4rem 4rem;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  > li {
    margin: 1rem;
    background: no-repeat url(${checkSign});
    height: 24px;
    padding-left: 2rem;
    padding-top: 3px;
  }
  ${media.phone`
    display: initial;
  `};
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

export default ({ slides, handlePrev, handleNext, slideIndex }) => {
  let slide = slides.find(
    (slide, index) => (index === slideIndex ? slide : null)
  );
  return (
    <React.Fragment>
      <HomeWrap screen>
        <DescriptionContainer key="Text">
          <Title>
            {slide.text}
            <br />
            {slide.text2}
          </Title>
          {slideIndex > 0 ? (
            <Description>
              <LeadText>What am I looking at?</LeadText>
              <HelperText left>{slide.helper}</HelperText>
              <LeadText>Things i've used, to make this:</LeadText>
              <Details>
                {slide.details.map((single, index) => (
                  <li key={index}>{single}</li>
                ))}
              </Details>
            </Description>
          ) : (
            <HelperText>{slide.helper}</HelperText>
          )}
        </DescriptionContainer>
        <ColorBlock key="Block">
          <ImageContainer key="Image">
            <ImageBg>
              <HeroImage src={slide.image} alt="fancy" />
            </ImageBg>
          </ImageContainer>
          <ProjectsNav>
            <Arrow left onClick={handlePrev} />
            <Arrow onClick={handleNext} />
          </ProjectsNav>
        </ColorBlock>
      </HomeWrap>
      <HomeWrap mobile>
        <ul>
          {slides.map((slide, index) => (
            <li key={index}>
              <DescriptionContainer>
                <Title>
                  {slide.text}
                  <br />
                  {slide.text2}
                </Title>
              </DescriptionContainer>
              <ColorBlock>
                <ImageContainer>
                  <ImageBg>
                    <HeroImage src={slide.image} alt="fancy" />
                  </ImageBg>
                </ImageContainer>
              </ColorBlock>
              {index > 0 ? (
                <Description>
                  <LeadText>What am I looking at?</LeadText>
                  <HelperText left>{slide.helper}</HelperText>
                  <LeadText>Things i've used, to make this:</LeadText>
                  <Details>
                    {slide.details.map((single, index) => (
                      <li key={index}>{single}</li>
                    ))}
                  </Details>
                </Description>
              ) : (
                <HelperText>{slide.helper}</HelperText>
              )}
            </li>
          ))}
        </ul>
      </HomeWrap>
    </React.Fragment>
  );
};

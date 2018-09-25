import React from "react";
import { media } from "./utility/utility.js";
import checkSign from "./assets/img/baseline-check_circle-24px.svg";
import styled from "styled-components";
import posed from "react-pose";

import Title from "./Title.js";
import ColorBlock from "./ColorBlock.js";

let vh = window.innerHeight * 0.01;

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
    justify-content: center;
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

export default props => {
  let { slide, handlePrev, handleNext, slideIndex } = props;
  return (
    <HomeWrap screen>
      <DescriptionContainer key="Text">
        <Title title={slide.text} title1={slide.text1} />
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
      <ColorBlock
        image={slide.image}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </HomeWrap>
  );
};

import React from "react";
import { media } from "../../utility/utility.js";
import styled from "styled-components";
import posed from "react-pose";

import Title from "./components/Title.js";
import ColorBlock from "./components/ColorBlock.js";
import Description from "./components/Description.js";

let vh = window.innerHeight * 0.01;

const AnimatedText = {
  enter: { y: 0, opacity: 1, delay: 1200 },
  exit: { y: 50, opacity: 0, delay: 600 }
};

const HomeWrap = styled.div`
  justify-content: center;
  > ul {
    display: flex;
    flex-direction: column;
  }
  > ul > li {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    justify-content: space-around;
    width: 100%;
    max-width: 100%;
    min-height: 100vh;
    min-height: calc(${100 * vh + "px"} - 7rem);
  }
  > ul > li > h1 {
    text-align: center;
  }
`;

export default props => (
  <HomeWrap>
    <ul>
      {props.slides.map((slide, index) => (
        <li key={index}>
          <Title title={slide.text} />
          <ColorBlock
            image={slide.image}
            handlePrev={props.handlePrev}
            handleNext={props.handleNext}
            mobile={props.mobile}
          />
          <Description
            helperText={slide.helper}
            details={slide.details}
            slideIndex={index}
          />
        </li>
      ))}
    </ul>
  </HomeWrap>
);

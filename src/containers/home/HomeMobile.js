import React from "react";
import styled from "styled-components";

import Title from "./components/Title.js";
import ColorBlock from "./components/ColorBlock.js";
import Description from "./components/Description.js";

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
    min-height: ${props => `calc(${props.vh * 100}px - 7rem)` || "100vh"};
  }
  > ul > li > h1 {
    text-align: center;
  }
`;

export default props => (
  <HomeWrap vh={props.vh}>
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

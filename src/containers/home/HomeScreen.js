import React from "react";
import styled from "styled-components";
import { media } from "../../utility/utility.js";

import Title from "./components/Title.js";
import ColorBlock from "./components/ColorBlock.js";
import Description from "./components/Description.js";

const HomeWrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  max-width: calc(50% - 5vw);
  max-height: 100%;
  ${media.tablet`
    max-width: calc(58% - 5vw);
  `};
`;

export default props => {
  let { slide, handlePrev, handleNext, slideIndex } = props;
  return (
    <HomeWrap>
      <DescriptionContainer key="Text">
        <Title title={slide.text} />
        <Description
          helperText={slide.helper}
          details={slide.details}
          slideIndex={slideIndex}
        />
      </DescriptionContainer>
      <ColorBlock
        image={slide.image}
        handlePrev={handlePrev}
        handleNext={handleNext}
        slideIndex={slideIndex}
      />
    </HomeWrap>
  );
};

import React from "react";
import styled from "styled-components";
import posed from "react-pose";

import Title from "./components/Title.js";
import ColorBlock from "./components/ColorBlock.js";
import Description from "./components/Description.js";

const AnimatedText = {
  enter: { y: 0, opacity: 1, delay: 1200 },
  exit: { y: 50, opacity: 0, delay: 600 }
};

const HomeWrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const DescriptionContainer = styled(posed.div(AnimatedText))`
  display: flex;
  flex-direction: column;
  z-index: 2;
  max-width: calc(50% - 5vw);
  max-height: 100%;
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
      />
    </HomeWrap>
  );
};

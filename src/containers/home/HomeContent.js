import React from "react";

import HomeScreen from "./HomeScreen.js";
import HomeMobile from "./HomeMobile.js";

export default props => {
  let { slides, handlePrev, handleNext, slideIndex, mobile } = props;
  let slide = slides.find(
    (slide, index) => (index === slideIndex ? slide : null)
  );
  return mobile ? (
    <HomeMobile
      slides={slides}
      handlePrev={handlePrev}
      handleNext={handleNext}
      mobile={mobile}
    />
  ) : (
    <HomeScreen
      slide={slide}
      handlePrev={handlePrev}
      handleNext={handleNext}
      slideIndex={slideIndex}
    />
  );
};

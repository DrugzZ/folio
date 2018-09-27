import React from "react";
import { media } from "../../../utility/utility.js";
import styled from "styled-components";
import posed from "react-pose";

const AnimatedText = {
  enter: { y: 0, opacity: 1, delay: 1200 },
  exit: { y: 50, opacity: 0, delay: 600 }
};

const Title = styled(posed.h1(AnimatedText))`
  line-height: 1.5;
  margin-bottom: 2rem;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  ${media.phone`
    margin-bottom: 1rem;
`};
`;

export default ({ title }) => {
  let splitString = string => {
    let splitString = string.split(" ");
    let twoLines = [];
    if (splitString.length > 2) {
      twoLines.push(
        splitString.slice(0, 2).join(" "),
        splitString.slice(2).join(" ")
      );
      return twoLines;
    } else {
      twoLines.push(
        splitString.slice(0, 1).join(" "),
        splitString.slice(1).join(" ")
      );
      return twoLines;
    }
  };
  let titleReady = splitString(title);
  return (
    <Title>
      <span>{titleReady[0]}</span> <span>{titleReady[1]}</span>
    </Title>
  );
};

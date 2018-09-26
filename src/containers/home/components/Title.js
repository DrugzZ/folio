import React from "react";
import { media } from "../../../utility/utility.js";
import styled from "styled-components";

const Title = styled.h1`
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

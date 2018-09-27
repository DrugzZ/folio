import React from "react";
import { media } from "../../../utility/utility.js";
import checkSign from "../../../assets/img/baseline-check_circle-24px.svg";
import styled from "styled-components";
import posed from "react-pose";

const AnimatedText = {
  enter: { y: 0, opacity: 1, delay: 1400 },
  exit: { y: 50, opacity: 0, delay: 400 }
};

const LeadText = styled(posed.p(AnimatedText))`
  line-height: 2;
  font-weight: bold;
  letter-spacing: 0.1rem;
`;

const Details = styled(posed.ul(AnimatedText))`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
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

const HelperText = styled(posed.p(AnimatedText))`
  padding-left: ${props => (props.left ? "1rem" : "")};
  line-height: 2;
  letter-spacing: 0.1rem;
  margin-bottom: 1rem;
  ${media.phone`
    align-self: ${props => (props.centered ? "center" : "")};
  `};
`;

export default ({ helperText, details, slideIndex }) => (
  <React.Fragment>
    {slideIndex > 0 ? (
      <React.Fragment>
        <LeadText>What am I looking at?</LeadText>
        <HelperText left>{helperText}</HelperText>
        <LeadText>Things i've used, to make this:</LeadText>
        <Details>
          {details.map((single, index) => (
            <li key={index}>{single}</li>
          ))}
        </Details>
      </React.Fragment>
    ) : (
      <HelperText centered>{helperText}</HelperText>
    )}
  </React.Fragment>
);

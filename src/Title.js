import React from "react";
import { media } from "./utility/utility.js";
import styled from "styled-components";

const Title = styled.h1`
  line-height: 1.5;
  margin-bottom: 2rem;
  white-space: nowrap;
  ${media.phone`
    margin-bottom: 1rem;
    text-align: center;
`};
`;

export default ({ title, title1 }) => (
  <Title>
    {title} <br /> {title1}
  </Title>
);

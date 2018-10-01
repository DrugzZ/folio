import React from "react";
import styled from "styled-components";

const CustomIcon = styled.span`
  background: url(${props => props.iconSrc}) no-repeat center/auto;
  height: ${props => props.size};
  width: ${props => props.size};
  position: ${props => (props.absolute ? "absolute" : "")};
  z-index: 6;
`;

export default ({ iconSrc, size, absolute }) => (
  <CustomIcon iconSrc={iconSrc} size={size} absolute={absolute} />
);

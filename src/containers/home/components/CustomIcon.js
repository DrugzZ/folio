import React from "react";
import styled from "styled-components";

const CustomIcon = styled.svg`
  background: url(${props => props.iconSrc}) no-repeat center/auto;
  height: ${props => props.size};
  width: ${props => props.size};
  cursor: pointer;
  & .path {
    fill: #fff;
  }
`;

export default ({ iconSrc, size, absolute, onClick }) => (
  <CustomIcon
    iconSrc={iconSrc}
    size={size}
    absolute={absolute}
    onClick={onClick}
  />
);

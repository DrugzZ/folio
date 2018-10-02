import React from "react";
import styled from "styled-components";

const CustomIcon = styled.span`
  background: url(${props => props.iconSrc}) no-repeat center/auto;
  height: ${props => props.size};
  width: ${props => props.size};
  cursor: pointer;
`;

export default ({ iconSrc, size, absolute, onClick }) => (
  <CustomIcon
    iconSrc={iconSrc}
    size={size}
    absolute={absolute}
    onClick={onClick}
  />
);

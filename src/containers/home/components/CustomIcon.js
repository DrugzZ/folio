import React from "react";
import styled from "styled-components";

const CustomIcon = styled.span`
  background: url(${props => props.iconSrc}) no-repeat center/auto;
  height: ${props => props.size};
  width: ${props => props.size};
  cursor: pointer;
`;

export default ({ iconSrc, size, onClick, link }) =>
  link ? (
    <a
      style={{ display: "flex" }}
      target="_blank"
      rel="noreferrer noopener"
      href={link}
    >
      <CustomIcon iconSrc={iconSrc} size={size} onClick={onClick} />
    </a>
  ) : (
    <CustomIcon iconSrc={iconSrc} size={size} onClick={onClick} />
  );

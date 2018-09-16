import React from "react";
import styled from "styled-components";
import posed from "react-pose";

import logoAlpaca from "./assets/img/logo_alpaca.png";

const Animated = posed.div({
  hidden: {
    opacity: 0,
    x: props => (props.moving ? -50 : "")
  },
  visible: {
    opacity: 1,
    x: props => (props.moving ? 0 : ""),
    delay: props => (props.parent ? 100 : ""),
    delayChildren: props => (props.parent ? 300 : "")
  }
});

const Header = styled(Animated)`
  grid-column: span 12;
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  width: calc(100% - 2 * 8vw);
  margin: 0 8vw;
`;

const Logo = styled.img``;

const Navigation = styled(Animated)`
  display: flex;
  flex-basis: 40%;
  align-items: center;
  justify-content: space-around;
`;

export default ({ isVisible }) => (
  <Header pose={isVisible ? "visible" : "hidden"}>
    <Logo src={logoAlpaca} alt="Beautiful Alpaca" />
    <Navigation>
      <p>Projects</p>
      <p>à Propos</p>
    </Navigation>
  </Header>
);

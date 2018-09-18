import React from "react";
import styled from "styled-components";
import posed from "react-pose";
import { NavLink } from "react-router-dom";

import logoAlpaca from "./assets/img/logo_alpaca.png";

const Animated = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
};

const Header = styled(posed.div(Animated))`
  grid-column: span 12;
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  width: calc(100% - 2 * 8vw);
  margin: 0 8vw;
`;

const Logo = styled.img``;

const Navigation = styled(posed.div(Animated))`
  display: flex;
  flex-basis: 40%;
  align-items: center;
  justify-content: space-around;
`;

const Link = styled(NavLink)``;

export default ({ isVisible }) => (
  <Header pose={isVisible ? "visible" : "hidden"}>
    <Logo src={logoAlpaca} alt="Beautiful Alpaca" />
    <Navigation>
      <Link to="/">Projects</Link>
      <Link to="/about">à Propos</Link>
    </Navigation>
  </Header>
);

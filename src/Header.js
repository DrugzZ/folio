import React from "react";
import styled from "styled-components";
import posed from "react-pose";
import { NavLink } from "react-router-dom";
import { media } from "./utility/utility.js";

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
  align-items: center;
  grid-column: span 12;
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  width: calc(100% - 2 * 8vw);
  margin: 0 8vw;
  ${media.phone`
    min-height: 5rem; 
    margin: 1rem;
    width: calc(100% - 2rem);
    padding: 0;`};
`;

const LogoContainer = styled(posed.div(Animated))`
  flex-basis: 8%;
  ${media.phone`flex-basis: 15%`};
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
`;

const Navigation = styled(posed.div(Animated))`
  display: flex;
  flex-basis: 40vw;
  justify-content: space-around;
  ${media.phone`
    justify-content: space-between;
  `};
`;

const Link = styled(NavLink)``;

export default ({ isVisible }) => (
  <Header pose={isVisible ? "visible" : "hidden"}>
    <LogoContainer>
      <Logo src={logoAlpaca} alt="Beautiful Alpaca" />
    </LogoContainer>
    <Navigation>
      <Link to="/">Projects</Link>
      <Link to="/about">à Propos</Link>
    </Navigation>
  </Header>
);

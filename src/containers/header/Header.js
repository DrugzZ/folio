import React from "react";
import styled from "styled-components";
import posed from "react-pose";
import { NavLink } from "react-router-dom";
import { media } from "../../utility/utility.js";

import logoAlpaca from "../../assets/img/logo_alpaca.png";

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
  ${media.tablet`
  margin: 0 4vw;
  width: calc(100% - 2 * 4vw)
  `};
  ${media.phone`
    min-height: 5rem; 
    margin: 1rem;
    width: calc(100% - 2rem);
    padding: 0;`};
`;

const Logo = styled(posed.div(Animated))`
  height: 5rem;
  flex-basis: 5rem;
  background: url(${logoAlpaca}) no-repeat left;
  background-size: contain;
`;

const Navigation = styled(posed.div(Animated))`
  display: flex;
  flex-basis: 45%;
  justify-content: space-around;
  ${media.phone`
    flex-basis: calc(70vw - 5rem);
  `};
`;

const Link = styled(NavLink)``;

export default ({ isVisible }) => (
  <Header pose={isVisible ? "visible" : "hidden"}>
    <Logo />
    <Navigation>
      <Link to="/">Projects</Link>
      <Link to="/about">à Propos</Link>
    </Navigation>
  </Header>
);

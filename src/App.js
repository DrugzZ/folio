import React, { Component } from "react";
import { media, colors, fonts } from "./utility/utility.js";
import styled, { injectGlobal } from "styled-components";
import styledNormalize from "styled-normalize";

import Header from "./Header.js";
import HomeContent from "./HomeContent.js";
import Footer from "./Footer.js";

import ContentSlider from "./ContentSlider";

injectGlobal`
  ${styledNormalize};

  html {
    box-sizing: border-box;
    font-smoothing: antialiased;
	  text-rendering: optimizeLegibility;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background-color: #fff;
    font-size: 100%;
  }
  
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    color: ${colors.darkPurple};
    font-family: ${fonts.base};
    font-weight: normal;
    margin: 0;
    padding: 0;
  }

  p{
    letter-spacing: 0.08rem;
  }

  h1 {
    font-family: ${fonts.serif}
    font-weight: 600;
    font-size: 4em;
    letter-spacing: 0.5rem;
    line-height: 1.05;
    ${media.desktop`
      font-size: 3em;
      line-height: 1.25;
    `};
    ${media.tablet`
      font-size: 2em;
      line-height: 1.25;
    `};
  }
  
  ol, ul {
    list-style: none;
  }
  
  img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
  }
`;

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 15% 65% auto;
  row-gap: 5%;
  ${media.phone`
    row-gap: 1rem;
  `};
`;

const Main = styled.div`
  grid-column: span 12;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }

  componentDidMount() {
    this.setState({ isVisible: true });
  }

  render() {
    return (
      <Wrapper>
        <Header isVisible={this.state.isVisible} />
        <Main>
          <HomeContent isVisible={this.state.isVisible} />
        </Main>
        <Footer isVisible={this.state.isVisible} />
      </Wrapper>
    );
  }
}

export default App;

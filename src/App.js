import React, { Component } from "react";
import mainImg from "./assets/img/header_main_img.jpg";
import styled, { injectGlobal } from "styled-components";
import styledNormalize from "styled-normalize";

import { RadioButtonCheckedIcon, RadioButtonUncheckedIcon } from "mdi-react";

injectGlobal`
  ${styledNormalize}

  html {
    font-size: 62.5%;
    font-family: serif;
  }

  body {
    background-color: #FBF9F9;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    color: #3d3852;
    font-size: 1.8rem;
    line-height: 1.618;
    margin: auto;
    padding: 13px;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.5;
    font-weight: 600;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    hyphens: auto; }
  
  h1 {
    font-size: 2.35em; }
  
  h2 {
    font-size: 2.00em; }
  
  h3 {
    font-size: 1.75em; }
  
  h4 {
    font-size: 1.5em; }
  
  h5 {
    font-size: 1.25em; }
  
  h6 {
  font-size: 1em; }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 15% auto 15%;
`;

const Header = styled.div`
  grid-column: span 12;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const BasicButton = styled.div`
  font-size: 1.5rem;
  padding: 2rem 1rem;
`;

const Main = styled.div`
  grid-column: span 10;
  justify-self: end;
`;

const HomeContent = styled.div`
  width: 50%;
  > img {
    max-width: 100%;
    height: auto;
  }
`;

const Block = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #9657a8;
  width: 45%;
  height: 80%;
`;

const HeroText = styled.div`
  position: absolute;
  margin-left: -20%;
  margin-top: 5rem;
  > h1 {
    font-size: 7rem;
    font-weight: 600;
    margin: 0;
    letter-spacing: 0.5rem;
  }
  > h5 {
    font-weight: 400;
    margin: 0;
    letter-spacing: 0.2rem;
  }
`;

const Sidebar = styled.div`
  grid-column: span 2;
`;

const Footer = styled.div`
  grid-column: span 12;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <BasicButton>Home</BasicButton>
          <BasicButton>Work</BasicButton>
          <BasicButton>About</BasicButton>
        </Header>
        <Sidebar />
        <Main>
          <Block />
          <HomeContent>
            <HeroText>
              <h1>a Portoflio.</h1>
              <h5>(Very original, modern, professional)</h5>
            </HeroText>
            <img src={mainImg} alt="fancy" />
          </HomeContent>
        </Main>
        <Footer>
          <RadioButtonCheckedIcon />
          <RadioButtonUncheckedIcon />
          <RadioButtonUncheckedIcon />
          <RadioButtonUncheckedIcon />
          <RadioButtonUncheckedIcon />
        </Footer>
      </Wrapper>
    );
  }
}

export default App;

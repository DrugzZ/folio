import React, { Component } from "react";
import mainImg from "./assets/img/header_main_img.jpg";
import styled, { injectGlobal } from "styled-components";
import styledNormalize from "styled-normalize";

injectGlobal`
  ${styledNormalize}

  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background-color: #f3f3f3;
  }
  
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    font-family: -apple-system, system-ui, BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
  
  ol, ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 15vh auto 15vh;
`;

const Header = styled.div`
  grid-column: span 12;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Main = styled.div`
  grid-column: span 12;
  justify-self: end;
`;

const HomeContent = styled.div``;

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
    font-family: Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif;
    font-size: 3rem;
    font-weight: 600;
    margin: 0;
    letter-spacing: 0.5rem;
  }
  > h5 {
    font-size: 1.375rem
    font-weight: 400;
    margin: 0;
    letter-spacing: 0.2rem;
  }
`;

const Footer = styled.div`
  grid-column: span 12;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Main>
          <Block />
          <HomeContent>
            <HeroText>
              <h1>
                a Collection <br /> of works
              </h1>
              <h5>(Very original, modern, professional)</h5>
            </HeroText>
            <img src={mainImg} alt="fancy" />
          </HomeContent>
        </Main>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;

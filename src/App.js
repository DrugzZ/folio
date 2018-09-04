import React, { Component } from "react";
import mainImg from "./assets/img/header_main_img.jpg";
import logoAlpaca from "./assets/img/logo_alpaca.png";
import styled, { injectGlobal } from "styled-components";
import styledNormalize from "styled-normalize";

const colors = {
  grey: "#f3f3f3",
  darkerGrey: "#f7f7f7",
  darkPurple: "#3d3852",
  orange: "#fbbc61"
};

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
    background-color: ${colors.bgColor};
  }
  
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    color: ${colors.darkPurple}
    font-family: -apple-system, system-ui, BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    font-weight: normal;
    margin: 0;
    padding: 0;
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
  grid-template-rows: 15vh 75vh 10vh;
  padding: 0 2rem;
`;

const Header = styled.div`
  grid-column: span 12;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  flex-basis: 8%;
  margin-top: 2rem;
  min-width: 80px;
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  letter-spacing: 0.15rem;
  > :nth-child(1) {
    border-right: 2px solid ${colors.darkPurple};
    padding: 1rem 1rem 0.5rem 1rem;
  }
  > :nth-child(2) {
    border-right: 2px solid ${colors.darkPurple};
    padding: 0.5rem 1rem 1rem 1rem;
  }
  margin-top: 2rem;
`;

const Main = styled.div`
  grid-column: span 12;
`;

const HomeContent = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`;

const ColorBlock = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  right: 10%;
  background-color: ${colors.darkPurple};
  width: 45%;
  height: 70vh;
`;

const HeroText = styled.div`
  position: absolute;
  top: 10%;
  line-height: 1.5;
  margin-left: -85%;
  > h1 {
    font-family: Constantia, "Lucida Bright", Lucidabright, "Lucida Serif",
      Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif",
      Georgia, serif;
    font-size: 3rem;
    font-weight: 600;
    margin: 0;
    letter-spacing: 0.5rem;
  }
  > p {
    font-weight: 400;
    margin: 0;
    letter-spacing: 0.15rem;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  flex-basis: 30%;
  margin-left: 15%;
  margin-top: 5%;
`;

const Footer = styled.div`
  align-items: flex-end;
  display: flex;
  grid-column: span 12;
  margin-bottom: 2rem;
  position: relative;
`;

const DecorText = styled.div`
  display: flex;
  flex-direction: column;
  > span {
    transform: rotate(-90deg);
    transform-origin: left top 0;
    letter-spacing: 0.15rem;
    line-height: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Logo>
            <img src={logoAlpaca} alt="Beautiful Alpaca" />
          </Logo>
          <Social>
            <span>fb</span>
            <span>ig</span>
          </Social>
        </Header>
        <Main>
          <ColorBlock />
          <HomeContent>
            <ImgContainer>
              <HeroText>
                <h1>
                  a Collection <br /> of works
                </h1>
                <p>(Very original, modern, professional)</p>
              </HeroText>
              <img src={mainImg} alt="fancy" />
            </ImgContainer>
          </HomeContent>
        </Main>
        <Footer>
          <DecorText>
            <span>Design in mind.</span>
          </DecorText>
        </Footer>
      </Wrapper>
    );
  }
}

export default App;

import React, { Component } from "react";
import { media } from "./utility/mediaQuery.js";
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

const fonts = {
  serif: `Constantia, "Lucida Bright", Lucidabright, "Lucida Serif",
  Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif",
  Georgia, serif;`,
  base: `-apple-system, system-ui, BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;`
};

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
    background-color: ${colors.bgColor};
    font-size: 100%;
  }
  
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    color: ${colors.darkPurple};
    font-family: ${fonts.base};
    font-weight: normal;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-family: ${fonts.serif}
    font-weight: 600;
    font-size: 3em;
    letter-spacing: 0.5rem;
    line-height: 1.05;
    ${media.tablet`
      font-size: 2em;
      line-height: 1.25;
    `};
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
  height: 100vh;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto 1fr auto;
  padding: 2rem;
  row-gap: 2rem;
  ${media.phone`
    padding: 1rem;
    row-gap: 1rem;
  `};
`;

const Header = styled.div`
  grid-column: span 12;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  flex-basis: 8%;
  min-width: 5rem;
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  letter-spacing: 0.1rem;
  > :nth-child(1) {
    border-right: 2px solid ${colors.orange};
    padding: 1rem 1rem 0.5rem 1rem;
  }
  > :nth-child(2) {
    border-right: 2px solid ${colors.orange};
    padding: 0.5rem 1rem 1rem 1rem;
`;

const Main = styled.div`
  grid-column: span 12;
`;

const HomeContent = styled.div`
  display: flex;
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
  ${media.phone`
      display: none;
  `};
`;

const HeroTextContainer = styled.div`
  position: absolute;
  top: 10%;
  margin-left: -75%;
  ${media.phone`
      margin:0;
      top:0;
  `} > p {
    letter-spacing: 0.1rem;
  }
`;

const HeroText = styled.h1`
  line-height: 1.5;
  white-space: nowrap;
`;

const ImgContainer = styled.div`
  margin-left: 15%;
  position: relative;
  width: 33.3% ${media.phone`
      width: auto;
      margin:0;
  `};
`;

const Footer = styled.div`
  align-items: flex-end;
  display: flex;
  grid-column: span 12;
  justify-content: space-between;
`;

const DecorText = styled.p`
  transform: rotate(-90deg);
  transform-origin: left top 0;
  white-space: nowrap;
  letter-spacing: 0.1rem;
  line-height: 0;
  position: relative;
  &:before {
    content: "";
    width: 5rem;
    border-bottom: solid 2px ${colors.orange};
    position: absolute;
    left: 10rem;
  }
`;

const Pagination = styled.div`
  display: flex;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  position: relative;
  > span {
    border-bottom: 2px solid ${colors.orange};
    left: 1.8rem;
    position: absolute;
    transform: rotate(-75deg) translateX(-1.2rem);
    width: 3rem;
  }
`;

const CurrentPosition = styled.p`
  > :last-child {
    font-size: 2rem;
  }
  position: relative;
`;

const TotalCount = styled.p`
  margin-left: 1.5rem;
  > :last-child {
    font-size: 2rem;
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
              <HeroTextContainer>
                <HeroText>
                  a Collection <br /> of works
                </HeroText>
                <p>(Very original, modern, professional)</p>
              </HeroTextContainer>
              <img src={mainImg} alt="fancy" />
            </ImgContainer>
          </HomeContent>
        </Main>
        <Footer>
          <DecorText>Design in mind.</DecorText>
          <Pagination>
            <CurrentPosition>
              <span>0</span>
              <span>1</span>
            </CurrentPosition>
            <span />
            <TotalCount>
              <span>0</span>
              <span>4</span>
            </TotalCount>
          </Pagination>
        </Footer>
      </Wrapper>
    );
  }
}

export default App;

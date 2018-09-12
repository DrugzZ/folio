import React, { Component } from "react";
import { media } from "./utility/mediaQuery.js";
import mainImg from "./assets/img/header_main_img.jpg";
import logoAlpaca from "./assets/img/logo_alpaca.png";
import ArrowSVG from "./assets/img/baseline-chevron_right-24px.svg";
import styled, { injectGlobal } from "styled-components";
import styledNormalize from "styled-normalize";

import ContentSlider from "./ContentSlider";

const colors = {
  grey: "#f7f7f7",
  darkerGrey: "#efefef",
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

const Header = styled.div`
  grid-column: span 12;
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  width: calc(100% - 2 * 8vw);
  margin: 0 8vw;
`;

const Logo = styled.img``;

const Navigation = styled.div`
  display: flex;
  flex-basis: 40%;
  align-items: center;
  justify-content: space-between;
`;

const Main = styled.div`
  grid-column: span 12;
`;

const HomeContent = styled.div`
  align-items: center;
  position: relative
  display: flex;
  justify-content: space-between;
  width: calc(100% - 2 * 8vw);
  margin: 0 8vw
  height: 100%;
`;

const ColorBlock = styled.div`
  background-color: ${colors.darkPurple};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  min-width: 40%;
  height: 100%;
  ${media.phone`
      display: none;
  `};
`;

const ProjectsNav = styled.div`
  align-self: flex-end;
  display: flex;
  background-color: ${colors.grey};
`;

const Arrow = styled.div`
  transform: ${props => (props.left ? "rotate(180deg)" : "")};
  width: 4rem;
  height: 4rem;
  background: center / 50% no-repeat url(${ArrowSVG});
  &:hover {
    background-color: ${colors.darkerGrey};
  }
`;

const HeroTextContainer = styled.div`
  z-index: 2;
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

const ImageContainer = styled.div`
  height: 80%;
  margin-left: -30%;
  ${media.phone`
    width: auto;
    margin:0;
`};
`;
const HeroImage = styled.img``;

const Footer = styled.div`
  align-items: flex-end;
  display: flex;
  grid-column: span 12;
  justify-content: space-between;
  padding-bottom: 2rem;
  width: calc(100% - 2 * 8vw);
  margin: 0 8vw;
`;

const DecorText = styled.p`
  position: relative;
  &:before {
    content: "";
    width: 5rem;
    border-bottom: solid 2px ${colors.orange};
    position: absolute;
    left: 12rem;
    top: 50%;
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
  handleScroll = event => {
    if (event.nativeEvent.wheelDelta > 0) {
      console.log("scroll up");
    } else {
      console.log("scroll down");
    }
  };

  render() {
    return (
      <Wrapper>
        <Header>
          <Logo src={logoAlpaca} alt="Beautiful Alpaca" />
          <Navigation>
            <p>Projects</p>
            <p>à Propos</p>
            <p>Connect</p>
          </Navigation>
        </Header>
        <Main>
          <HomeContent onWheel={this.handleScroll}>
            <HeroTextContainer>
              <HeroText>
                a Collection <br /> of works
              </HeroText>
              <p>(Very original, modern, professional)</p>
            </HeroTextContainer>
            <ColorBlock>
              <ImageContainer>
                <HeroImage src={mainImg} alt="fancy" />
              </ImageContainer>
              <ProjectsNav>
                <Arrow left />
                <Arrow />
              </ProjectsNav>
            </ColorBlock>
          </HomeContent>
        </Main>
        <Footer>
          <DecorText>Performance in mind.</DecorText>
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
        <ContentSlider />
      </Wrapper>
    );
  }
}

export default App;

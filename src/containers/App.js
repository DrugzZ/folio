import React, { Component } from "react";
import { media, colors, fonts } from "../utility/utility.js";
import styled, { injectGlobal } from "styled-components";
import styledNormalize from "styled-normalize";
import debounce from "lodash.debounce";

import Header from "./header/Header.js";
import HomeContent from "./home/HomeContent.js";
import Footer from "./footer/Footer.js";
import AboutContent from "./about/AboutContent.js";
import { Route, Switch } from "react-router-dom";

import data from "../assets/data/projectSeed.js";
import posed, { PoseGroup } from "react-pose";

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
    font-size: 16px;
  }
  
  body, h1, h2, h3, h4, h5, h6, p, a, ol, ul {
    color: ${colors.darkPurple};
    font-family: ${fonts.base};
    font-weight: normal;
    margin: 0;
    padding: 0;
  }

  p, a{
    letter-spacing: 0.08rem;
    text-decoration: none;
  }

  h1 {
    font-family: ${fonts.serif}
    font-weight: 600;
    font-size: 4em;
    letter-spacing: 0.5rem;
    line-height: 1.05;
    ${media.desktop`
      font-size: 2.5em;
      line-height: 1.25;
    `};
    ${media.tablet`
      font-size: 1.8em;
      line-height: 1.25;
    `};
    ${media.phone`
      font-size: 1.5em;
      line-height: 1.25;
    `};
  }
  
  ol, ul {
    list-style: none;
  }
  

`;

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 15% 65% auto;
  min-height: 765px;
  row-gap: 5%;
  ${media.phone`
    display:flex;
    flex-direction: column;
  `};
`;

const Main = styled(posed.div())`
  grid-column: span 12;
`;

const ContentWrap = styled(posed.div())`
  height: 100%;
  margin: 0 8vw;
  position: relative;
  width: calc(100% - 2 * 8vw);
  ${media.tablet`
  margin: 0 4vw;
  width: calc(100% - 2 * 4vw);
`};
  ${media.phone`
  margin: 0 1rem;
  width: calc(100% - 2rem);
`};
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: null,
      mobile: false,
      currentSlideIndex: 0,
      slides: data,
      vh: window.innerHeight * 0.01
    };
    this.debouncedScroll = debounce(this.debouncedScroll.bind(this), 200);
  }

  updateDimensions = () => {
    this.setState({ vh: window.innerHeight * 0.01 });
    window.innerWidth > 605
      ? this.setState({ mobile: false })
      : this.setState({ mobile: true });
  };

  componentDidMount() {
    this.updateDimensions();
    this.setState({ isVisible: true });
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  handleScroll = event => this.debouncedScroll(event.deltaY);

  debouncedScroll(event) {
    if (event > 0) {
      let nextSlide =
        (this.state.currentSlideIndex + 1) % this.state.slides.length;

      this.setState({
        currentSlideIndex: nextSlide
      });
    } else {
      let prevSlide =
        (this.state.slides.length + this.state.currentSlideIndex - 1) %
        this.state.slides.length;

      this.setState({
        currentSlideIndex: prevSlide
      });
    }
  }

  handleNext = () => {
    let nextSlide =
      (this.state.currentSlideIndex + 1) % this.state.slides.length;

    this.setState({
      currentSlideIndex: nextSlide
    });
  };

  handlePrev = () => {
    let prevSlide =
      (this.state.slides.length + this.state.currentSlideIndex - 1) %
      this.state.slides.length;

    this.setState({
      currentSlideIndex: prevSlide
    });
  };

  preloadImages = data => {
    data.forEach((a, i) => {
      let imgSrc = a.image;
      if (i > 0) {
        let img = new Image();
        img.src = imgSrc;
      }
    });
  };

  render() {
    return (
      <Route
        render={({ location }) => (
          <Wrapper>
            <Header isVisible={this.state.isVisible} />
            <PoseGroup animateOnMount>
              <Main
                onWheel={
                  location.pathname === "/" && this.state.mobile === false
                    ? this.handleScroll
                    : null
                }
                key={
                  this.state.currentSlideIndex.toString() + location.pathname
                }
              >
                <ContentWrap>
                  <Switch location={location}>
                    <Route
                      exact
                      path="/"
                      key="Home"
                      render={props => (
                        <HomeContent
                          slides={this.state.slides}
                          handleNext={this.handleNext}
                          handlePrev={this.handlePrev}
                          slideIndex={this.state.currentSlideIndex}
                          mobile={this.state.mobile}
                          vh={this.state.vh}
                          {...props}
                        />
                      )}
                    />
                    <Route path="/about" key="About" component={AboutContent} />
                  </Switch>
                </ContentWrap>
              </Main>
            </PoseGroup>
            <Footer
              isVisible={this.state.isVisible}
              currentSlide={this.state.currentSlideIndex}
              totalSlides={this.state.slides.length}
              location={location.pathname}
            />
          </Wrapper>
        )}
      />
    );
  }
}

export default App;

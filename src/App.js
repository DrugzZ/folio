import React, { Component } from "react";
import { media, colors, fonts } from "./utility/utility.js";
import styled, { injectGlobal } from "styled-components";
import styledNormalize from "styled-normalize";
import debounce from "lodash.debounce";

import Header from "./Header.js";
import HomeContent from "./HomeContent.js";
import Footer from "./Footer.js";
import AboutContent from "./AboutContent.js";
import { Route, Switch } from "react-router-dom";

import data from "./projectSeed.js";
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
    font-size: 100%;
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
  

`;

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 15% 65% auto;
  row-gap: 5%;
  ${media.phone`
    row-gap: 1rem;
    height: 100%;
  `};
`;

const Main = styled(posed.div())`
  grid-column: span 12;
`;

const PageWrap = styled(posed.div())`
  position: relative
  width: calc(100% - 2 * 8vw);
  margin: 0 8vw
  height: 100%;
  ${media.phone`
  margin: 0 1rem;
  width: calc(100% - 2rem)
`};
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      animate: false,
      currentSlideIndex: 0,
      slides: data
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.debouncedScroll = debounce(this.debouncedScroll.bind(this), 200);
  }

  updateDimensions = () => {
    if (window.innerWidth < 576) {
      this.setState({ animate: false });
    } else {
      this.setState({ animate: true });
    }
  };

  componentDidMount() {
    this.setState({ isVisible: true });
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  handleScroll(event) {
    this.debouncedScroll(event.deltaY);
  }

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

  render() {
    return (
      <Route
        render={({ location }) => (
          <Wrapper>
            {console.log(this.state.animate)}
            <Header isVisible={this.state.isVisible} />
            <PoseGroup animateOnMount>
              <Main
                onWheel={
                  location.pathname === "/" && this.state.animate
                    ? this.handleScroll
                    : null
                }
                key={
                  this.state.currentSlideIndex.toString() + location.pathname
                }
              >
                <PageWrap>
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
                          {...props}
                        />
                      )}
                    />
                    <Route path="/about" key="About" component={AboutContent} />
                  </Switch>
                </PageWrap>
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

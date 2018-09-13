import React, { Component } from "react";
import styled from "styled-components";
import posed from "react-pose";

const BoxCont = styled.div`
  position: relative;
`;

const Animated = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});

const Box = styled(Animated).attrs({
  background: props => props.color
})`
  width: 200px;
  height: 200px;
  background: ${props => props.background};
  position: absolute;
  top: 0;
  left: 0;
`;

export default class ContentSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      slides: ["red", "blue", "green", "black"],
      isVisible: true
    };
  }

  handleScroll = event => {
    if (event.nativeEvent.wheelDelta > 0) {
      let nextSlide = (this.state.current + 1) % this.state.slides.length;
      this.setState(prevState => ({
        current: nextSlide,
        isVisible: !prevState.isVisible
      }));
    } else {
      let prevSlide =
        (this.state.slides.length + this.state.current - 1) %
        this.state.slides.length;
      this.setState(prevState => ({
        current: prevSlide,
        isVisible: !prevState.isVisible
      }));
    }
  };

  render() {
    const filterBox = this.state.slides.filter((slide, index) => {
      if (index === this.state.current) {
        return slide.toString();
      }
      return null;
    });
    return (
      <BoxCont onWheel={this.handleScroll}>
        <Box
          color={filterBox}
          pose={this.state.isVisible ? "visible" : "hidden"}
        />
      </BoxCont>
    );
  }
}

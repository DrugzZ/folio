import React, { Component } from "react";
import styled from "styled-components";

const slides = ["red", "blue", "green", "black"];

const BoxCont = styled.div`
  position: relative;
`;

const Box = styled.div.attrs({
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
    this.state = { current: 0 };
  }

  render() {
    return <BoxCont />;
  }
}

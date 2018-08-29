import React, { Component } from "react";
import main_img from "./assets/img/header_main_img.jpg";
import styled from 'styled-components';

const MainImg = styled.img`
  width: 100%;
  height: auto;
  margin-top: 30%;
`

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #FBF9F9;
`

const DisplayHeader = styled.h1`
  font-size: 4rem;
  letter-spacing: 0.3rem;
  position: fixed;
  top: 15%
  left:25%
  z-index:1;
` 

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <div className="container">
          <DisplayHeader>This. <br/>a Portfolio</DisplayHeader>
          <div className="row">
            <div className="col-md-5 offset-md-5">
              <MainImg src={main_img} alt="fancy" />
            </div>
          </div>
        </div>
      </AppWrapper>
    );
  }
}

export default App;

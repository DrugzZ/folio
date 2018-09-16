import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SingleSlide from "./SingleSlide.js";

export default class HomeContent extends Component {
  render() {
    const isVisible = this.props.isVisible;
    return (
      <Router>
        <Route
          exact
          path="/"
          render={props => <SingleSlide isVisible={isVisible} {...props} />}
        />
      </Router>
    );
  }
}

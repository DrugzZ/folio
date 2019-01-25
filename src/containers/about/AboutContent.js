import React from "react";
import posed from "react-pose";

const H = posed.h1({
  enter: { opacity: 1, delay: 1000 },
  exit: { opacity: 0 }
});

export default () => <H>This is About page. Still not done :(</H>;

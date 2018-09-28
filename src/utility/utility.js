import { css } from "styled-components";

const sizes = {
  widescreen: 1199.98,
  desktop: 991.98,
  tablet: 767.98,
  phone: 605
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export const colors = {
  grey: "#f7f7f7",
  white: "white",
  darkPurple: "#3d3852",
  orange: "#fbbc61"
};

export const fonts = {
  serif: `Constantia, "Lucida Bright", Lucidabright, "Lucida Serif",
  Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif",
  Georgia, serif;`,
  base: `-apple-system, system-ui, BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;`
};

export let vh = window.innerHeight * 0.01;

import { css } from "styled-components";

const sizes = {
  widescreen: 1199.98,
  desktop: 991.98,
  tablet: 767.98,
  phone: 575.98
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

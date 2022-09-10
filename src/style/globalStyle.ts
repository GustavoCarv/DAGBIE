import { createGlobalStyle } from "styled-components";

import BackgroundImage from "../assets/backgroundImage.png";

export default createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
  font-family: Roboto, Arial, Helvetica, sans-serif;
}

body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

ul[role='list'],
ol[role='list'] {
  list-style: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

html {
  min-height: 100vh;

  background-image: url(${BackgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover ;
  @media(max-width: 720px) {
    background-position: 100%;
    font-size: 87.5%;
  }
  @media(max-width: 1024px) {font-size: 93.75%;}
}

body {
  text-rendering: optimizeSpeed;
  line-height: 1.5;

  background: transparent;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img,
picture {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

`;

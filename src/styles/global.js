import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyles
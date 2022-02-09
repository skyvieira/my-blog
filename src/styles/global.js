import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    overflow-y: overlay;
    scroll-behavior: smooth;
  }

  body {
    font-family: sans-serif;
  }

  body.dark {
    --borders: #38444d;
    --texts: #8899a6;
    --postColor: #fff;
    --highlight: #1fa1f2;
    --mediumBackground: #192734;
    --background: #16202c;
    --white: #fff;
    --black: #222;
  }

  body.light {
    --borders: #dedede;
    --texts: #555;
    --postColor: #111;
    --highlight: #1fa1f2;
    --mediumBackground: #f0f0f3;
    --background: #fff;
    --white: #fff;
    --black: #222;
  }

  a[href] {
    text-decoration: none;
    color: var(--texts);
    transition: hover .2s;

    &:hover {
      color: var(--highlight);
    }

    &:active {
      filter: brightness(0.8);
    }
  }

  li {
    list-style: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default GlobalStyles
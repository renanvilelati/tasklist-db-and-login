import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
      background-color: #15171a;
      color: #FFF;
      width: 100%;
      font-family: sans-serif;
  }

  button {
      cursor: pointer;
  }
`
import { DefaultTheme, createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* hard reset */
  * { 
      -moz-box-sizing: border-box; 
      -webkit-box-sizing: border-box; 
      box-sizing: border-box;
      position: relative;
      padding: 0; margin: 0;
  } 
  html {
    width: 100%;
  } 
  body {
    font-family: "Roboto Mono";
    min-width: 100%;
    color: #323232;
  }
`;

export const defaultTheme: DefaultTheme = {
  colors: {
    amber: "#fbb80f",
    yellow: "#fbee0f",
    mauve: "#c598af",
    purple: "#7f4aa4",
    white: "#FDFEFC",
    lilac: "#E0B0FF",
    offBlack: "#323232",
  },
  textShadow: "1px 1px 2px #323232",
};

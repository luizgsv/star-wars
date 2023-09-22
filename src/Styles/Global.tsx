import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
  :root {
    --black: #00060D; // 60%

    --yellow: #BCAC17; // 10% 
    --gray: #111827; // 30% 

    --white: #FFFF;

    --star-wars-shadow: -1px -1px 0 var(--yellow),  // sombra de efeito
      1px -1px 0 var(--yellow),
      -1px 1px 0 var(--yellow),
      1px 1px 0 var(--yellow);
  }

  * {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
  }

  body {
    background-color: var(--black);
    color: var(--white);
  }

  h1 {
    font-family: SF Distant Galaxy Alternate, 'Star Wars', sans-serif, monospace;
    color: var(--white);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  h2, span, li, button, h3 {
    font-family: SF Distant Galaxy, 'Star Wars', sans-serif, monospace;
    color: var(--white);
    font-style: italic;
    font-weight: 400;
    line-height: normal;
  }

  button, input, a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: currentColor;
  }

  li {
    list-style-type: none;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--yellow);
    border-radius: 0.4rem;
    transition: background 0.4s ease-in;
  }
`
export default GlobalStyles;
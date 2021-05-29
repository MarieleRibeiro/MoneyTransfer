import { createGlobalStyle } from "styled-components"; //yarn add @types/styled-components -d

export const GlobalStyle = createGlobalStyle`
/**
 * 1. Always reset this sucks.
 * 2. Inherit from default setting
 */

* {
  margin: 0; /* 1 */
  padding: 0; /* 1 */
  border: 0; /* 1 */
  background-repeat: no-repeat; /* 1 */
  box-sizing: border-box; /* 2 */
  font-family: 'Inter', sans-serif;

  html {
  @media (max-width: 1080px){
    font-size: 93.75%;
  }
  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}

}

html {
  -ms-text-size-adjust: 100%; /* 1 */
  -webkit-text-size-adjust: 100%; /* 1 */
  box-sizing: border-box; /* 2 */
  scroll-behavior: auto; /* 3 */
}

/**
 * 1. Set default font styles
 * 2. Beautiful fonts again
 * 3. Prevent horizontal scroll
 */

body {
  font-size: 16px; 
  -moz-osx-font-smoothing: grayscale; /* 2 */
  -webkit-font-smoothing: antialiased; /* 2 */
}

a {
  text-decoration: none; /* 1 */
  color: inherit; /* 1 */
  background-color: transparent; /* 3 */
}

ol,
ul {
  list-style: none;
}


button,
input,
optgroup,
select,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  overflow: visible;
  border: 0;
  outline: 0;
  font: inherit;
  -webkit-font-smoothing: inherit;
  letter-spacing: inherit;
  color: inherit;
  background: none;
  vertical-align: top;
}

option {
  background-color: inherit;
}

a:active,
button:active {
  color: inherit;
}

textarea {
  resize: none;
}

input[type="button"],
button {
  cursor: pointer;
}

button[disabled],
html input[disabled] {
  cursor: default;
}


img {
  display: block; /* 1 */
  max-width: 100%; /* 2 */
  height: auto; /* 2 */
  border-style: none; /* 3 */
}


table {
  border-collapse: collapse;
} 
  
`
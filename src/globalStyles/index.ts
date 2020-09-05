import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
body{
  margin:0;
  background-color:#282A36;
  height:10000px;
  overflow-x:hidden;
}
h1,h2,h3,h4,h5,h6,p{
  margin:0;
}
* {
  ::selection{
    background-color:#4C4E58;
  }
  font-family: 'Raleway', sans-serif;
}

`;

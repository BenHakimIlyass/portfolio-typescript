import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
body{
  margin:0;
  background-color:black;
  height:100vh;
  overflow:hidden;
}
h1,h2,h3,h4,h5,h6,p{
  margin:0
}
* {
  font-family: 'Raleway', sans-serif;}

`;

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  padding: 0 8px;
  box-sizing: border-box;
`;

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
  font-family:Raleway;
}
@font-face {
  font-family: Raleway;
  src: url(Raleway/Raleway-Regular.ttf);
  font-weight: 400;
}
@font-face {
  font-family: Raleway;
  src: url(Raleway/Raleway-SemiBold.ttf);
  font-weight: 500;
}
@font-face {
  font-family: Raleway;
  src: url(Raleway/Raleway-Bold.ttf);
  font-weight: 700;
}
@font-face {
  font-family: Raleway;
  src: url(Raleway/Raleway-Black.ttf);
  font-weight: 900;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  padding: 0 8px;
  box-sizing: border-box;
`;

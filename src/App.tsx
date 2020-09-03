import * as React from "react";
import { GlobalStyle, Container } from "./globalStyles";
import { H3, AnimatedLogo, Nav } from "./components";
export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Container>
        <Nav />
      </Container>
    </div>
  );
}

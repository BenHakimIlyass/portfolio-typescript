import * as React from "react";
import { GlobalStyle, Container } from "./globalStyles";
import { H3, AnimatedLogo } from "./components";
export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Container>
        <AnimatedLogo />
      </Container>
    </div>
  );
}

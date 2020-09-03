import * as React from "react";
import { GlobalStyle, Container } from "./globalStyles";
import { DisplayText, Nav } from "./components";
export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Container>
        <Nav />
        {/* <DisplayText /> */}
      </Container>
    </div>
  );
}

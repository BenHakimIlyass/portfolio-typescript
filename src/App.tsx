import * as React from "react";
import { GlobalStyle, Container } from "./globalStyles";
import { DisplayText } from "./components";
export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Container>
        <DisplayText style={{ zIndex: 99 }} />
        <DisplayText isWhite delay={2} />
      </Container>
    </div>
  );
}

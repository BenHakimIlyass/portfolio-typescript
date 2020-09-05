import * as React from "react";
import {
  FrontendDev,
  Minimalist,
  Nav,
  ScrollRenderer,
  Container,
  Vstack,
  SocialMedia
} from "./components";
import { makeProps } from "./utils";
import { useTimeout } from "./hooks";
import { GlobalStyle } from "./globalStyles";
import { motion } from "framer-motion";

const App = () => {
  const logoAnimationEnds = useTimeout(4000);
  return (
    <motion.div
      initial={{ backgroundColor: "#000" }}
      animate={{ backgroundColor: "#282A36" }}
    >
      <GlobalStyle />
      <Container>
        <Nav />
        <SocialMedia />
      </Container>
      {logoAnimationEnds && (
        <div
          style={{
            transform: `translate3d(0,20vh,0)`
          }}
        >
          <FrontendDev />
          <Minimalist />
        </div>
      )}
    </motion.div>
  );
};

export default App;

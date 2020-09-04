import * as React from "react";
import {
  FrontendDev,
  Nav,
  ScrollRenderer,
  Container,
  Vstack
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
      </Container>
      {logoAnimationEnds && (
        <ScrollRenderer {...makeProps(0)}>
          <Vstack top={-10}>
            <FrontendDev />
          </Vstack>
        </ScrollRenderer>
      )}
    </motion.div>
  );
};

export default App;

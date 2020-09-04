import * as React from "react";
import { DisplayText, Nav } from "./components";
import { GlobalStyle, Container } from "./globalStyles";
import { motion } from "framer-motion";

const App = () => {
  return (
    <motion.div
      initial={{ backgroundColor: "#000" }}
      animate={{ backgroundColor: "#282A36" }}
    >
      <GlobalStyle />
      <Container>
        <Nav />
        <DisplayText />
      </Container>
    </motion.div>
  );
};

export default App;
